import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'json', label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting regexes
  const highlight = (code: string) => {
    if (!code) return '';
    
    // String literals (green)
    let html = code.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>');
    // Numbers (purple)
    html = html.replace(/: (\d+)/g, ': <span class="text-purple-400">$1</span>');
    // Booleans (orange)
    html = html.replace(/: (true|false|null)/g, ': <span class="text-orange-400">$1</span>');
    // Keys in JSON (accent/blue)
    html = html.replace(/<span class="text-green-400">"([^"]+)"<\/span>:/g, '<span class="text-accent">"$1"</span>:');
    
    return html;
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-bg my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border">
        <span className="text-xs font-mono text-text-dim uppercase">{label || language}</span>
        <button 
          onClick={handleCopy} 
          className="flex items-center gap-1.5 text-xs font-medium text-text-dim hover:text-text transition-colors"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          {copied ? <span className="text-green-500">Copied!</span> : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-text">
          <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;