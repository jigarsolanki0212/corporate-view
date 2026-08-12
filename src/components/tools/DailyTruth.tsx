import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DAILY_TRUTHS } from '../../data/truths';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const DailyTruth: React.FC = () => {
  const { language } = useApp();
  const [index, setIndex] = useState(0);

  const currentTruth = DAILY_TRUTHS[index % DAILY_TRUTHS.length];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % DAILY_TRUTHS.length);
  };

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto text-center">
      <div className="mb-6">
        <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-mono font-bold text-purple-300 mb-2">
          ⚡ TODAY'S CORPORATE TRUTH
        </span>
        <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
          UNFILTERED DAILY WISDOM
        </h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

          <span className="inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-mono text-amber-400 mb-4">
            #{currentTruth.tag}
          </span>

          <blockquote className="text-xl sm:text-3xl font-extrabold text-white leading-tight font-serif italic my-4">
            “{currentTruth.quote[language]}”
          </blockquote>

          <p className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mt-6">
            — {currentTruth.author[language]}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handleNext}
        className="mt-6 inline-flex items-center space-x-2 rounded-xl bg-purple-600 px-6 py-3 text-xs font-extrabold text-white shadow-lg hover:bg-purple-500 transition-colors"
      >
        <span>NEXT CORPORATE TRUTH</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
};
