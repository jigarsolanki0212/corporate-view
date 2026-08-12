import React, { useState } from 'react';
import type { CorporateMoment } from '../../types';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

interface QuoteCardProps {
  moment: CorporateMoment;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ moment }) => {
  const { language, makeChoice, isPlaying, togglePlay } = useApp();
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const selectedChoice = moment.choices.find((c) => c.id === selectedChoiceId);

  const handleSelectChoice = (choiceId: string) => {
    setSelectedChoiceId(choiceId);
    makeChoice(choiceId);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      
      <motion.div
        key={moment.id}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 relative overflow-hidden"
      >
        
        {/* Top Metadata */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="uppercase font-bold tracking-widest text-pink-400">
              {moment.moodId} · 09:03 AM
            </span>
          </div>
          <span className="uppercase font-semibold tracking-wider text-zinc-400">
            {moment.category}
          </span>
        </div>

        {/* Huge Editorial Quote (Instagram Story Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3"
        >
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight uppercase font-sans tracking-tight">
            “{moment.quote}”
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-serif italic">
            {moment.subtext}
          </p>
        </motion.div>

        {/* Soundtrack Card (Spotify Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-[#111114] p-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-3 min-w-0">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white font-bold">
              🎵
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider">
                CORPORATE SOUNDTRACK
              </p>
              <h4 className="text-sm font-extrabold text-white truncate">
                {moment.songTitle}
              </h4>
              <p className="text-xs text-zinc-400 truncate">
                {moment.songArtist}
              </p>
            </div>
          </div>

          <button
            onClick={togglePlay}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
          >
            <Play className={`h-4 w-4 fill-white ml-0.5 ${isPlaying ? 'animate-pulse' : ''}`} />
          </button>
        </motion.div>

        {/* Choice Decisions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 pt-2"
        >
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
            WHAT DO YOU DO?
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {moment.choices.map((choice) => {
              const isChosen = selectedChoiceId === choice.id;

              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all font-sans font-extrabold text-sm ${
                    isChosen
                      ? 'border-purple-500 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 text-white ring-1 ring-purple-500/40 shadow-lg'
                      : 'border-white/10 bg-[#111114] text-zinc-200 hover:border-white/20 hover:bg-[#18181c]'
                  }`}
                >
                  {choice.label[language]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Consequence Reveal */}
        <AnimatePresence>
          {selectedChoice && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-2xl border border-purple-500/30 bg-[#111114] p-5 space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-purple-400 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" /> CONSEQUENCE REVEALED
                </span>
                <div className="flex items-center space-x-3">
                  <span className={selectedChoice.points.corporate >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    {selectedChoice.points.corporate >= 0 ? '+' : ''}{selectedChoice.points.corporate} Corporate
                  </span>
                  <span className={selectedChoice.points.mentalHealth >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    {selectedChoice.points.mentalHealth >= 0 ? '+' : ''}{selectedChoice.points.mentalHealth} Mental
                  </span>
                </div>
              </div>

              <p className="text-base font-extrabold text-white">
                “{selectedChoice.consequence[language]}”
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  );
};
