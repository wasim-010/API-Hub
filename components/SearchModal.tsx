import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { PROVIDERS } from '../constants';
import { MethodBadge } from './UI';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  providerId: string;
  providerName: string;
  providerLogo: string;
  endpointId: string;
  title: string;
  path: string;
  method: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const hits: SearchResult[] = [];

    PROVIDERS.forEach(provider => {
      provider.groups.forEach(group => {
        group.endpoints.forEach(ep => {
          if (
            ep.title.toLowerCase().includes(lowerQuery) ||
            ep.path.toLowerCase().includes(lowerQuery) ||
            ep.method.toLowerCase().includes(lowerQuery) ||
            provider.name.toLowerCase().includes(lowerQuery)
          ) {
            hits.push({
              providerId: provider.id,
              providerName: provider.name,
              providerLogo: provider.logoUrl,
              endpointId: ep.id,
              title: ep.title,
              path: ep.path,
              method: ep.method
            });
          }
        });
      });
    });
    setResults(hits);
  }, [query]);

  const handleSelect = (id: string, providerId: string) => {
    onClose();
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else {
      // Fallback to provider if endpoint not found
      const section = document.getElementById(providerId);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-bg/80 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-surface border border-border rounded-xl shadow-2xl flex flex-col max-h-[60vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="text-text-muted" size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search endpoints, providers..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-text placeholder:text-text-dim text-lg"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') onClose();
            }}
          />
          <button onClick={onClose} className="text-text-dim hover:text-text">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {results.length === 0 && query && (
             <div className="text-center py-8 text-text-dim">No results found for "{query}"</div>
          )}
          {results.map((res, i) => (
            <button
              key={i}
              onClick={() => handleSelect(res.endpointId, res.providerId)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-surface2 transition-colors text-left group"
            >
              <div 
                 className="w-8 h-8 rounded-sm bg-white p-[2px] shrink-0 flex items-center justify-center overflow-hidden" 
              >
                <img src={res.providerLogo} alt={res.providerName} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <MethodBadge method={res.method} />
                  <span className="font-mono text-xs text-text-dim truncate">{res.path}</span>
                </div>
                <div className="text-sm font-medium text-text group-hover:text-accent truncate">
                   {res.title} <span className="text-text-dim font-normal">— {res.providerName}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-surface2 px-4 py-2 border-t border-border flex justify-between items-center text-[10px] text-text-dim uppercase font-bold tracking-wider">
          <span>{results.length} Results</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;