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
  payloadExample?: string;
}

export interface WebhookHeader {
  name: string;
  value: string;
}

export interface StatusDefinition {
  slug: string;
  meaning: string;
}

export interface SmsPricingTier {
  serviceType: string;
  startPrice: string;
  bestFor: string;
  keyFeature: string;
}

export interface SmsComplianceRules {
  banglaLanguageRule: string;
  englishExceptions: string;
  noInternationalOtp: string;
  characterLimits: {
    english: string;
    unicode: string;
    longSms: string;
  };
  penalty: string;
}

export interface SmsRegistrationDoc {
  category: string;
  requirement: string;
}

export interface SmsProviderMeta {
  floorPrice: string;
  pricing: SmsPricingTier[];
  compliance: SmsComplianceRules;
  registrationDocs: SmsRegistrationDoc[];
  maskingApproval: string;
  proTip: string;
  contact: {
    address: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
  };
}

export interface Provider {
  id: string;
  name: string;
  color: string;
  authType: string;
  version?: string;
  description: string;
  logoChar: string;
  logoUrl: string;
  category: string;
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
    integrationRequirements?: string[];
    integrationPayload?: string;
    headers?: WebhookHeader[];
  };
  statuses?: StatusDefinition[];
  callouts?: CalloutData[];
  smsMeta?: SmsProviderMeta;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
}