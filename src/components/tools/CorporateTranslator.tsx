import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TRANSLATOR_ITEMS } from '../../data/translator';
import type { TranslatorItem } from '../../types';
import { Search, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const CorporateTranslator: React.FC = () => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = TRANSLATOR_ITEMS.filter((item: TranslatorItem) => {
    const term = item.corporatePhrase[language].toLowerCase();
    const meaning = item.humanMeaning[language].toLowerCase();
    const q = searchQuery.toLowerCase();
    return term.includes(q) || meaning.includes(q);
  });

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
          CORPORATE → HUMAN DECODER
        </p>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-sans">
          WHAT THEY SAID vs WHAT THEY MEANT
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg mx-auto font-serif italic">
          Search any corporate phrase to decode its real human meaning.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-8 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={language === 'hindi' ? 'Search phrase e.g. "Let us circle back"...' : 'Search phrase e.g. "Quick sync"...'}
          className="w-full rounded-full border border-white/10 bg-[#111114] px-12 py-4 text-sm font-sans text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
        />
      </div>

      {/* Translation Cards */}
      <div className="space-y-4">
        {filteredItems.map((item: TranslatorItem) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#18181c] p-6 backdrop-blur-xl space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-pink-400 uppercase">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>CORPORATE PHRASE</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500 uppercase">
                SEVERITY: {item.severity}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
              “{item.corporatePhrase[language]}”
            </h3>

            <div className="flex items-center space-x-2 text-purple-400 pt-2 font-mono text-xs font-bold">
              <span>REAL HUMAN MEANING</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>

            <p className="text-base sm:text-lg font-serif italic text-purple-200">
              “{item.humanMeaning[language]}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
