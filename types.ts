export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface Param {
  field: string;
  type: string;
  required: boolean;
  description: string;
}

export interface CalloutData {
  type: 'info' | 'warning' | 'tip';
  title: string;
  message: string;
}

export interface Endpoint {
  id: string;
  method: HttpMethod;
  path: string;
  title: string;
  description?: string;
  bodyParams?: Param[];
  queryParams?: Param[];
  pathParams?: Param[];
  responseExample: string; // JSON string
  bodyExample?: string; // JSON string for request body
  codeExamples?: {
    curl?: string;
    js?: string;
    python?: string;
    php?: string;
  };
  callouts?: CalloutData[];
}

export interface EndpointGroup {
  name: string;
  endpoints: Endpoint[];
}

export interface ProviderCredentials {
  label: string;
  value: string;
}

export interface ProviderEnv {
  baseUrl: string;
  credentials: ProviderCredentials[];
}

export interface WebhookEvent {
  name: string;
  description: string;
}

export interface StatusDefinition {
  slug: string;
  meaning: string;
}

export interface Provider {
  id: string;
  name: string;
  color: string;
  authType: string;
  version?: string;
  description: string;
  logoChar: string; // Kept for fallback or colored placeholders if needed
  logoUrl: string;  // New field for actual logo image
  category: string; // New field for grouping
  weightUnit: 'kg' | 'g';
  sandbox: ProviderEnv | null;
  production: ProviderEnv;
  groups: EndpointGroup[];
  webhooks?: {
    events: WebhookEvent[];
    payloadExample: string;
    signatureHeader?: string;
    testCurl?: string;
    testNote?: string;
  };
  statuses?: StatusDefinition[];
  callouts?: CalloutData[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any; // Lucide icon component
}