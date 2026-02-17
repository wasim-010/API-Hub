import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Zap, ArrowLeft, LayoutGrid } from 'lucide-react';
import { PROVIDERS, CATEGORIES } from '../constants';
import { MethodBadge } from './UI';

interface SidebarProps {
  onSearchClick: () => void;
  activeSection: string;
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSearchClick, activeSection, selectedCategory, onSelectCategory, isOpen, onClose }) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (id: string) => {
    setCollapsedGroups(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      // Close sidebar on mobile when item clicked
      if (window.innerWidth < 768) {
        onClose();
      }
    }
  };

  const currentProviders = selectedCategory 
    ? PROVIDERS.filter(p => p.category === selectedCategory) 
    : [];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-[280px] bg-bg border-r border-border flex flex-col z-40 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header */}
        <div className="h-[56px] flex items-center px-6 border-b border-border bg-surface/50 backdrop-blur justify-between">
          <div 
            className="flex items-center gap-2 text-text font-display font-bold text-lg cursor-pointer"
            onClick={() => {
              onSelectCategory(null);
              if (window.innerWidth < 768) onClose();
            }}
          >
            <Zap size={20} className="text-yellow fill-yellow" />
            <span>API Hub</span>
          </div>
          {/* Mobile Close Button */}
          <button onClick={onClose} className="md:hidden text-text-dim hover:text-text">
            <ArrowLeft size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <button 
            onClick={() => {
              onSearchClick();
              if (window.innerWidth < 768) onClose();
            }}
            className="w-full flex items-center justify-between bg-surface2 border border-border2 rounded-md px-3 py-2 text-sm text-text-dim hover:border-text-muted transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Search size={14} />
              <span>Search...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="bg-surface border border-border rounded px-1.5 py-0.5 text-[10px] font-mono group-hover:border-text-muted">⌘K</kbd>
            </div>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-4 pb-10 space-y-6 custom-scrollbar">
          
          {!selectedCategory ? (
            // Category List View
            <div>
               <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3 px-2">Categories</h3>
               <div className="space-y-1">
                 {CATEGORIES.map(cat => (
                   <button 
                     key={cat.id}
                     onClick={() => {
                        onSelectCategory(cat.id);
                     }}
                     className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface2 text-left group transition-colors"
                   >
                      <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center text-text-dim group-hover:text-accent group-hover:border-accent/30 transition-colors">
                        <cat.icon size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text">{cat.name}</div>
                        <div className="text-[11px] text-text-dim">{PROVIDERS.filter(p => p.category === cat.id).length} APIs</div>
                      </div>
                      <ChevronRight size={14} className="ml-auto text-text-muted group-hover:text-text" />
                   </button>
                 ))}
               </div>
            </div>
          ) : (
            // Provider List View
            <div className="animate-in slide-in-from-left-4 fade-in duration-200">
               <button 
                  onClick={() => onSelectCategory(null)}
                  className="flex items-center gap-2 text-xs font-medium text-text-dim hover:text-text mb-6 px-2 group"
               >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Categories
               </button>
 
               {/* Quick Links */}
               <div className="mb-6">
                  <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 text-sm font-medium text-text-dim hover:text-text mb-2 px-2">
                     Overview
                  </button>
                  <button onClick={() => scrollToSection('comparison')} className="flex items-center gap-2 text-sm font-medium text-text-dim hover:text-text px-2">
                     Comparison Table
                  </button>
               </div>
 
               <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 px-2">Providers</h3>
 
               {/* Providers */}
               {currentProviders.map(provider => (
                 <div key={provider.id}>
                   <button 
                     onClick={() => toggleGroup(provider.id)}
                     className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-text-muted mb-2 px-2 hover:text-text transition-colors mt-2"
                   >
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-white p-[1px] flex items-center justify-center overflow-hidden">
                          <img src={provider.logoUrl} alt={provider.name} className="w-full h-full object-contain" />
                        </div>
                        {provider.name}
                     </div>
                     {collapsedGroups[provider.id] ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                   </button>
                   
                   {!collapsedGroups[provider.id] && (
                     <div className="space-y-1 ml-1 pl-3 border-l border-border">
                       {provider.groups.map(group => (
                         <div key={group.name} className="pt-2">
                            <h4 className="text-[10px] text-text-dim/50 uppercase font-bold mb-1 pl-2">{group.name}</h4>
                            {group.endpoints.map(ep => (
                              <button
                                key={ep.id}
                                onClick={() => scrollToSection(ep.id)}
                                className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs truncate transition-colors ${
                                  activeSection === provider.id ? 'bg-accent/10 text-accent' : 'text-text-dim hover:text-text hover:bg-surface2'
                                }`}
                              >
                                <MethodBadge method={ep.method} />
                                <span className="font-mono truncate">{ep.title}</span>
                              </button>
                            ))}
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
            </div>
          )}
 
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;