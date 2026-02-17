import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import { PROVIDERS, CATEGORIES, COMPARISON_DATA } from './constants';
import EndpointCard from './components/EndpointCard';
import { Badge, Callout, CopyableText } from './components/UI';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import CodeBlock from './components/CodeBlock';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [env, setEnv] = useState<'sandbox' | 'production'>('sandbox');

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scrollspy logic
  useEffect(() => {
    if (!selectedCategory) return;
    const handleScroll = () => {
      const providers = PROVIDERS.filter(p => p.category === selectedCategory);
      const sections = providers.map(p => p.id).concat(['hero', 'comparison']);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
           setActiveSection(section);
           break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategory]);

  const currentProviders = selectedCategory 
    ? PROVIDERS.filter(p => p.category === selectedCategory) 
    : [];

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <Sidebar 
        onSearchClick={() => setIsSearchOpen(true)} 
        activeSection={activeSection}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Top Bar */}
      <header className="fixed top-0 left-[280px] right-0 h-[56px] bg-bg/80 backdrop-blur border-b border-border z-30 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
           {selectedCategory && (
             <div className="flex bg-surface2 rounded-full p-1 border border-border2">
                <button 
                   onClick={() => setEnv('sandbox')}
                   className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${env === 'sandbox' ? 'bg-yellow text-bg shadow-sm' : 'text-text-dim hover:text-text'}`}
                >
                  Sandbox
                </button>
                <button 
                   onClick={() => setEnv('production')}
                   className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${env === 'production' ? 'bg-green text-bg shadow-sm' : 'text-text-dim hover:text-text'}`}
                >
                  Production
                </button>
             </div>
           )}
        </div>
        <div className="flex items-center gap-3">
           <Badge color="#4dabf7">Hub v1.0</Badge>
           <Badge color="#39c5cf">API Reference</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-[80px] px-8 pb-32 max-w-5xl">
        
        {/* Hero */}
        <section id="hero" className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <h4 className="text-accent font-mono text-sm mb-2">Developer Reference</h4>
           <h1 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
             API <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple">Hub</span>
           </h1>
           <p className="text-xl text-text-dim max-w-2xl leading-relaxed mb-10">
             Centralized API documentation for logistics, payments, and services. 
             Select a category to explore endpoints, test integration, and ship faster.
           </p>

           {/* Category Selection View */}
           {!selectedCategory && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
               {CATEGORIES.map(cat => (
                 <button 
                   key={cat.id} 
                   onClick={() => setSelectedCategory(cat.id)}
                   className="flex items-start gap-5 p-6 bg-surface border border-border rounded-xl hover:border-accent/50 hover:bg-surface2 transition-all group text-left"
                 >
                   <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-bg border border-border group-hover:border-accent/30 group-hover:text-accent transition-colors">
                      <cat.icon size={28} className="text-text-dim group-hover:text-accent transition-colors" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                       {cat.name}
                       <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                     </h3>
                     <p className="text-sm text-text-dim leading-relaxed mb-3">{cat.description}</p>
                     <div className="flex gap-2">
                        {PROVIDERS.filter(p => p.category === cat.id).map(p => (
                          <div key={p.id} className="w-6 h-6 rounded bg-white p-[2px] flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                            <img src={p.logoUrl} alt={p.name} className="w-full h-full object-contain" />
                          </div>
                        ))}
                     </div>
                   </div>
                 </button>
               ))}
             </div>
           )}

           {/* Provider List (when category selected) */}
           {selectedCategory && (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {currentProviders.map(p => (
                 <a 
                   key={p.id} 
                   href={`#${p.id}`}
                   className="flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-xl hover:border-accent/50 hover:bg-surface2 transition-all group"
                 >
                   <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white p-2 mb-3 shadow-lg group-hover:scale-110 transition-transform">
                     <img src={p.logoUrl} alt={p.name} className="w-full h-full object-contain" />
                   </div>
                   <span className="font-bold text-text">{p.name}</span>
                   <span className="text-xs text-text-dim mt-1">{p.groups.reduce((acc, g) => acc + g.endpoints.length, 0)} Endpoints</span>
                 </a>
               ))}
             </div>
           )}
        </section>

        {/* Content View (Only when category is selected) */}
        {selectedCategory && (
          <div className="animate-in fade-in duration-500">
            {/* Comparison Table */}
            <section id="comparison" className="mb-24 scroll-mt-24">
               <h2 className="text-2xl font-display font-bold mb-6">Feature Comparison</h2>
               <div className="overflow-hidden border border-border rounded-xl bg-surface">
                 <table className="w-full text-left text-sm">
                   <thead className="bg-surface2 text-text-dim uppercase font-bold text-xs">
                     <tr>
                       <th className="p-4">Feature</th>
                       <th className="p-4 text-pathao">Pathao</th>
                       <th className="p-4 text-redx">RedX</th>
                       <th className="p-4 text-steadfast">Steadfast</th>
                       <th className="p-4 text-carrybee">Carrybee</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border">
                     {COMPARISON_DATA.map((row, i) => (
                       <tr key={i} className="hover:bg-bg/50">
                         <td className="p-4 font-medium text-text">{row.feature}</td>
                         <td className="p-4 text-text-dim">{row.pathao}</td>
                         <td className="p-4 text-text-dim">{row.redx}</td>
                         <td className="p-4 text-text-dim">{row.steadfast}</td>
                         <td className="p-4 text-text-dim">{row.carrybee}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </section>

            {/* Providers Sections */}
            {currentProviders.map(provider => (
              <section key={provider.id} id={provider.id} className="mb-32 scroll-mt-24">
                
                {/* Provider Header */}
                <div className="flex items-start gap-6 mb-10 pb-10 border-b border-border">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white p-3 shadow-2xl shrink-0">
                    <img src={provider.logoUrl} alt={provider.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-display font-bold text-text">{provider.name}</h2>
                      <Badge>{provider.version}</Badge>
                    </div>
                    <p className="text-text-dim text-lg mb-6">{provider.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-text-muted bg-surface px-3 py-1.5 rounded border border-border">
                        <Globe size={16} />
                        <span className="font-mono text-accent">
                          {env === 'sandbox' && provider.sandbox ? provider.sandbox.baseUrl : provider.production.baseUrl}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted bg-surface px-3 py-1.5 rounded border border-border">
                        <CheckCircle2 size={16} />
                        <span>Auth: {provider.authType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Env Credentials */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                   {/* Sandbox */}
                   <div 
                      onClick={() => setEnv('sandbox')}
                      className={`p-5 rounded-xl border transition-colors cursor-pointer ${env === 'sandbox' ? 'bg-surface border-yellow/40 ring-1 ring-yellow/20' : 'bg-bg border-border opacity-50 hover:opacity-100 hover:border-yellow/30'}`}
                   >
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-2 h-2 rounded-full bg-yellow"></div>
                         <h4 className="font-bold text-yellow text-sm tracking-wider">SANDBOX</h4>
                      </div>
                      {provider.sandbox ? (
                        <div className="space-y-2">
                          {provider.sandbox.credentials.map((cred, i) => (
                            <CopyableText key={i} label={cred.label} value={cred.value} />
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-text-dim italic">No sandbox environment available.</p>
                      )}
                   </div>

                   {/* Production */}
                   <div 
                      onClick={() => setEnv('production')}
                      className={`p-5 rounded-xl border transition-colors cursor-pointer ${env === 'production' ? 'bg-surface border-green/40 ring-1 ring-green/20' : 'bg-bg border-border opacity-50 hover:opacity-100 hover:border-green/30'}`}
                   >
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-2 h-2 rounded-full bg-green"></div>
                         <h4 className="font-bold text-green text-sm tracking-wider">PRODUCTION</h4>
                      </div>
                      {provider.production.credentials.length > 0 ? (
                        <div className="space-y-2">
                          {provider.production.credentials.map((cred, i) => (
                            <CopyableText key={i} label={cred.label} value={cred.value} />
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-text-dim italic">Credentials available in your dashboard.</p>
                      )}
                   </div>
                </div>

                {/* Callouts */}
                {provider.callouts?.map((callout, i) => (
                  <Callout key={i} type={callout.type} title={callout.title}>{callout.message}</Callout>
                ))}

                {/* Endpoints Groups */}
                <div className="space-y-12">
                   {provider.groups.map(group => (
                     <div key={group.name}>
                        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
                           <span className="w-1 h-6 rounded-full bg-border"></span>
                           {group.name}
                        </h3>
                        <div className="space-y-4">
                           {group.endpoints.map(ep => (
                             <EndpointCard key={ep.id} endpoint={ep} provider={provider} env={env} />
                           ))}
                        </div>
                     </div>
                   ))}
                </div>

                {/* Webhooks Section if exists */}
                {provider.webhooks && (
                  <div className="mt-16 pt-10 border-t border-border">
                    <h3 className="text-xl font-bold text-text mb-6">Webhooks</h3>
                    <p className="text-text-dim mb-4">
                      {provider.name} sends POST requests to your configured URL.
                      {provider.webhooks.signatureHeader && 
                        <span> Validate using the <code className="text-accent bg-surface px-1 py-0.5 rounded">{provider.webhooks.signatureHeader}</code> header.</span>
                      }
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {provider.webhooks.events.map((evt, i) => (
                        <div key={i} className="bg-surface border border-border p-4 rounded-lg flex flex-col">
                           <code className="text-accent font-mono text-sm mb-1">{evt.name}</code>
                           <span className="text-sm text-text-dim">{evt.description}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Payload Example</h4>
                    <div className="bg-surface rounded-lg border border-border p-4 overflow-x-auto mb-8">
                       <pre className="text-sm font-mono text-text">
                         {provider.webhooks.payloadExample}
                       </pre>
                    </div>

                    {/* Webhook Test Section */}
                    {provider.webhooks.testCurl && (
                      <div className="bg-surface2/50 rounded-xl p-6 border border-border">
                         <h4 className="text-base font-bold text-text mb-2">Test Your Webhook Endpoint</h4>
                         <p className="text-sm text-text-dim mb-4">Use this to verify your webhook URL is correctly receiving and authenticating requests from {provider.name}.</p>
                         <CodeBlock code={provider.webhooks.testCurl} language="bash" label="cURL Example" />
                         {provider.webhooks.testNote && (
                            <Callout type="info" title="Security Note">
                               {provider.webhooks.testNote}
                            </Callout>
                         )}
                      </div>
                    )}
                  </div>
                )}

                {/* Statuses Section if exists */}
                {provider.statuses && (
                  <div className="mt-16 pt-10 border-t border-border">
                     <h3 className="text-xl font-bold text-text mb-6">Order Statuses</h3>
                     <div className="bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left">
                           <thead className="bg-surface2 text-text-dim uppercase font-bold text-xs">
                             <tr>
                               <th className="px-4 py-3">Slug</th>
                               <th className="px-4 py-3">Meaning</th>
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-border">
                             {provider.statuses.map((s, i) => (
                               <tr key={i}>
                                 <td className="px-4 py-3 font-mono text-yellow">{s.slug}</td>
                                 <td className="px-4 py-3 text-text-dim">{s.meaning}</td>
                               </tr>
                             ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
                )}

              </section>
            ))}
          </div>
        )}

        <footer className="mt-20 pt-10 border-t border-border text-center text-text-dim text-sm">
           <p>© {new Date().getFullYear()} API Hub. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}