import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { PersonalityResult } from '../../quiz/PersonalityResult';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Sun } from 'lucide-react';

export const ExitRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery, resetProgress } = useApp();
  const [hasExited, setHasExited] = useState(false);

  const handleExitClick = () => {
    addDiscovery('notice_period_legend');
    setHasExited(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {!hasExited ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-2 text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
            <LogOut className="h-4 w-4" />
            <span>THE FINAL EXIT DOOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans uppercase tracking-tight">
            ARE YOU SURE YOU WANT TO LEAVE?
          </h2>

          <p className="text-base font-serif italic text-zinc-300 max-w-md mx-auto">
            “Outside lies sunlight, freedom, and an unread inbox waiting for tomorrow.”
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleExitClick}
              className="w-full sm:w-auto btn-primary-gradient px-8 py-4 rounded-full text-base font-extrabold text-white flex items-center justify-center space-x-2 shadow-xl"
            >
              <Sun className="h-5 w-5" />
              <span>PUSH DOOR & ESCAPE THE OFFICE</span>
            </button>

            <button
              onClick={() => navigateToRoom('reception')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-[#111114] text-base font-bold text-zinc-300 hover:text-white"
            >
              STAY (ANOTHER MONDAY AWAITS)
            </button>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="text-center space-y-2">
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400">
                🎉 YOU SURVIVED THE WORKDAY!
              </span>
              <h2 className="text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'SAME TIME TOMORROW?' : 'SAME TIME TOMORROW?'}
              </h2>
            </div>

            <PersonalityResult onRestart={() => {
              setHasExited(false);
              resetProgress();
            }} />
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
};
