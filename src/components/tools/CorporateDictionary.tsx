import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DICTIONARY_ITEMS } from '../../data/dictionary';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const CorporateDictionary: React.FC = () => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = DICTIONARY_ITEMS.filter((item) => {
    const term = item.term.toLowerCase();
    const def = item.definition[language].toLowerCase();
    const q = searchQuery.toLowerCase();
    return term.includes(q) || def.includes(q);
  });

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400">
          EDITORIAL DICTIONARY
        </p>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-sans">
          THE CORPORATE DICTIONARY
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg mx-auto font-serif italic">
          Unfiltered workplace definitions for modern office terms.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-10 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search term e.g. Synergy, ASAP, Bandwidth..."
          className="w-full rounded-full border border-white/10 bg-[#111114] px-12 py-4 text-sm font-sans text-white placeholder-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all shadow-inner"
        />
      </div>

      {/* Dictionary Items Grid */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.term}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-8 backdrop-blur-xl space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-sans uppercase tracking-tight">
                {item.term}
              </h3>
              <span className="text-xs font-mono italic text-purple-400">
                {item.pronunciation || 'noun'}
              </span>
            </div>

            <p className="text-base sm:text-lg font-serif text-zinc-200 leading-relaxed">
              {item.definition[language]}
            </p>

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs font-mono text-zinc-400 italic">
                Example: “{item.exampleSentence[language]}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
