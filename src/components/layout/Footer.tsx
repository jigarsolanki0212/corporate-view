import React from 'react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/90 py-12 px-4 text-center text-xs text-zinc-500 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl space-y-4">
        
        <div className="flex items-center justify-center space-x-2">
          <div className="h-6 w-6 rounded-lg bg-purple-600 flex items-center justify-center text-white font-extrabold text-xs">
            ⚡
          </div>
          <span className="text-sm font-black text-white tracking-tight">CORPORATE SUCKS 2.0</span>
        </div>

        <p className="text-zinc-400 italic font-serif">
          “Made for everyone who has ever said: ‘I’ll do it tomorrow.’”
        </p>

        <div className="flex items-center justify-center space-x-6 text-zinc-400 font-medium pt-2">
          <button onClick={() => setActiveTab('experience')} className="hover:text-white transition-colors">
            Moments
          </button>
          <button onClick={() => setActiveTab('moods')} className="hover:text-white transition-colors">
            Moods
          </button>
          <button onClick={() => setActiveTab('translator')} className="hover:text-white transition-colors">
            Translator
          </button>
          <button onClick={() => setActiveTab('dictionary')} className="hover:text-white transition-colors">
            Dictionary
          </button>
          <button onClick={() => setActiveTab('quiz')} className="hover:text-white transition-colors">
            Quiz
          </button>
        </div>

        <p className="text-[11px] text-zinc-600 pt-4 border-t border-white/5">
          © {new Date().getFullYear()} Corporate Sucks 2.0 • Sarcastic Workplace Satire & Music Engine. All rights reserved.
        </p>

      </div>
    </footer>
  );
};
