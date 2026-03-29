import React from 'react';
import { AlertTriangle, Info, Lightbulb, Check, Copy } from 'lucide-react';

export const Badge: React.FC<{ children: React.ReactNode; color?: string; className?: string }> = ({ children, color = 'bg-surface2', className = '' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${className}`} style={{ backgroundColor: color ? `${color}20` : undefined, color: color, border: `1px solid ${color}40` }}>
    {children}
  </span>
);

export const MethodBadge: React.FC<{ method: string }> = ({ method }) => {
  const colors: Record<string, string> = {
    GET: '#4dabf7',
    POST: '#3fb950',
    PUT: '#fca130',
    PATCH: '#39c5cf',
    DELETE: '#f85149',
  };
  const color = colors[method] || '#768390';
  return (
    <span 
      className="font-mono font-bold text-[10px] px-2 py-0.5 rounded-sm border"
      style={{ color: color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
    >
      {method}
    </span>
  );
};

export const Callout: React.FC<{ type: 'info' | 'warning' | 'tip'; title: string; children: React.ReactNode }> = ({ type, title, children }) => {
  const styles = {
    info: { bg: 'bg-accent/10', border: 'border-accent/20', icon: Info, color: 'text-accent' },
    warning: { bg: 'bg-yellow/10', border: 'border-yellow/20', icon: AlertTriangle, color: 'text-yellow' },
    tip: { bg: 'bg-green/10', border: 'border-green/20', icon: Lightbulb, color: 'text-green' },
  };
  
  const Style = styles[type];
  const Icon = Style.icon;

  return (
    <div className={`my-6 rounded-lg border p-4 ${Style.bg} ${Style.border}`}>
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 shrink-0 ${Style.color}`} size={18} />
        <div>
          <h4 className={`text-sm font-bold mb-1 ${Style.color}`}>{title}</h4>
          <div className="text-sm text-text/90 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const ParamsTable: React.FC<{ params: any[] }> = ({ params }) => (
  <div className="overflow-x-auto my-4 border border-border rounded-lg">
    <table className="w-full text-left text-sm">
      <thead className="bg-surface text-text-dim font-mono text-xs uppercase">
        <tr>
          <th className="px-4 py-3 font-semibold border-b border-border">Field</th>
          <th className="px-4 py-3 font-semibold border-b border-border">Type</th>
          <th className="px-4 py-3 font-semibold border-b border-border">Required</th>
          <th className="px-4 py-3 font-semibold border-b border-border">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {params.map((p, i) => (
          <tr key={i} className="hover:bg-surface/50 transition-colors">
            <td className="px-4 py-3 font-mono text-accent">{p.field}</td>
            <td className="px-4 py-3 font-mono text-purple">{p.type}</td>
            <td className="px-4 py-3">
              {p.required ? (
                <span className="text-[10px] font-bold text-red bg-red/10 px-1.5 py-0.5 rounded border border-red/20">YES</span>
              ) : (
                <span className="text-[10px] font-bold text-text-dim bg-surface2 px-1.5 py-0.5 rounded border border-border">NO</span>
              )}
            </td>
            <td className="px-4 py-3 text-text-dim">{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const CopyableText: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-2 rounded bg-bg border border-border group">
      <span className="text-xs text-text-dim font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <code className="text-xs font-mono text-accent">{value.substring(0, 24)}{value.length > 24 ? '...' : ''}</code>
        <button onClick={handleCopy} className="text-text-muted hover:text-text transition-colors">
          {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};
