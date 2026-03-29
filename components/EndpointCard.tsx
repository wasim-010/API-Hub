import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Endpoint, Provider } from '../types';
import { MethodBadge, ParamsTable, Callout } from './UI';
import CodeBlock from './CodeBlock';

interface EndpointCardProps {
  endpoint: Endpoint;
  provider: Provider;
  env: 'sandbox' | 'production';
}

const EndpointCard: React.FC<EndpointCardProps> = ({ endpoint, provider, env }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('curl');

  const baseUrl = env === 'sandbox' && provider.sandbox ? provider.sandbox.baseUrl : provider.production.baseUrl;
  const fullUrl = `${baseUrl}${endpoint.path}`;

  // Generate cURL command dynamically
  const generateCurl = () => {
    // Build URL with query params for GET endpoints
    let url = fullUrl;
    if (endpoint.queryParams && endpoint.queryParams.length > 0) {
      const queryString = endpoint.queryParams.map(p => `${p.field}=<${p.field.toUpperCase()}>`).join('&');
      url += `?${queryString}`;
    }

    // Only use --request for PATCH (curl infers GET/POST/DELETE)
    const useExplicitMethod = endpoint.method === 'PATCH' || endpoint.method === 'PUT' || endpoint.method === 'DELETE';
    let curl = useExplicitMethod
      ? `curl --location --request ${endpoint.method} '${url}' \\\n`
      : `curl --location '${url}' \\\n`;
    
    // Auth & Content-Type headers per provider documentation
    if (provider.id === 'pathao') {
        if (endpoint.id !== 'pathao-issue-token' && endpoint.id !== 'pathao-refresh-token') {
            curl += `--header 'Authorization: Bearer <ACCESS_TOKEN>' \\\n`;
        }
        curl += `--header 'Content-Type: application/json' \\\n`;
        curl += `--header 'Accept: application/json'`;
    } else if (provider.id === 'redx') {
        curl += `--header 'API-ACCESS-TOKEN: Bearer <JWT_TOKEN>'`;
        if (endpoint.method === 'POST' || endpoint.method === 'PATCH') {
            curl += ` \\\n--header 'Content-Type: application/json'`;
        }
    } else if (provider.id === 'steadfast') {
      curl += `--header 'Api-Key: <YOUR_API_KEY>' \\\n`;
      curl += `--header 'Secret-Key: <YOUR_SECRET_KEY>' \\\n`;
      curl += `--header 'Content-Type: application/json'`;
    } else if (provider.id === 'carrybee') {
      curl += `--header 'client-id: <CLIENT_ID>' \\\n`;
      curl += `--header 'client-secret: <CLIENT_SECRET>' \\\n`;
      curl += `--header 'client-context: <CLIENT_CONTEXT>' \\\n`;
      curl += `--header 'Content-Type: application/json' \\\n`;
      curl += `--header 'Accept: application/json'`;
    } else {
      curl += `--header 'Content-Type: application/json'`;
    }

    if (endpoint.bodyExample) {
       curl += ` \\\n--data '${endpoint.bodyExample}'`;
    } else if (endpoint.bodyParams && endpoint.bodyParams.length > 0) {
       curl += ` \\\n--data '{\n`;
       const body = endpoint.bodyParams.map(p => `  "${p.field}": "value"`).join(',\n');
       curl += body + `\n}'`;
    }
    
    return curl;
  };

  const generateJS = () => {
    // Check if we should exclude auth header for Pathao auth endpoints
    const isPathaoAuth = provider.id === 'pathao' && (endpoint.id === 'pathao-issue-token' || endpoint.id === 'pathao-refresh-token');

    return `const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
${provider.id === 'pathao' && !isPathaoAuth ? 'myHeaders.append("Authorization", "Bearer <TOKEN>");' : ''}

const raw = JSON.stringify({
  // body params...
});

const requestOptions = {
  method: "${endpoint.method}",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("${fullUrl}", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`;
  };

  return (
    <div className="mb-4 border border-border rounded-lg bg-surface overflow-hidden transition-all duration-200" id={endpoint.id}>
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-surface2/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          {expanded ? <ChevronDown size={18} className="text-text-muted shrink-0" /> : <ChevronRight size={18} className="text-text-muted shrink-0" />}
          <MethodBadge method={endpoint.method} />
          <code className="text-sm font-mono text-text truncate">{endpoint.path}</code>
          <span className="text-sm text-text-dim hidden md:inline-block ml-2 truncate">{endpoint.title}</span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border bg-bg/50">
          <div className="p-4 border-b border-border">
            <p className="text-text-dim text-sm mb-4">{endpoint.description}</p>
            
            {endpoint.callouts?.map((callout, i) => (
               <Callout key={i} type={callout.type} title={callout.title}>
                 {callout.message}
               </Callout>
            ))}

            {endpoint.pathParams && (
               <div className="mb-4">
                 <h5 className="text-xs font-bold text-text mb-2 uppercase tracking-wider">Path Parameters</h5>
                 <ParamsTable params={endpoint.pathParams} />
               </div>
            )}
            {endpoint.queryParams && (
               <div className="mb-4">
                 <h5 className="text-xs font-bold text-text mb-2 uppercase tracking-wider">Query Parameters</h5>
                 <ParamsTable params={endpoint.queryParams} />
               </div>
            )}
          </div>

          <div className="flex border-b border-border bg-surface overflow-x-auto whitespace-nowrap scrollbar-hide">
             {['curl', 'js', 'params', 'response'].map(tab => (
               (tab === 'params' && !endpoint.bodyParams) ? null :
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors border-b-2 ${
                   activeTab === tab 
                     ? 'border-accent text-accent bg-accent/5' 
                     : 'border-transparent text-text-dim hover:text-text hover:bg-surface2'
                 }`}
               >
                 {tab === 'js' ? 'JavaScript' : tab}
               </button>
             ))}
          </div>

          <div className="p-4">
            {activeTab === 'curl' && <CodeBlock code={generateCurl()} language="bash" label="cURL" />}
            {activeTab === 'js' && <CodeBlock code={generateJS()} language="javascript" label="Fetch API" />}
            {activeTab === 'params' && endpoint.bodyParams && <ParamsTable params={endpoint.bodyParams} />}
            {activeTab === 'response' && <CodeBlock code={endpoint.responseExample} language="json" label="Response" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default EndpointCard;