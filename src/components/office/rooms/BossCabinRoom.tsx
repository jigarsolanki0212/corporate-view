import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, ArrowRight, Clock, AlertCircle } from 'lucide-react';

export const BossCabinRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery, makeChoice } = useApp();
  const [bossDecision, setBossDecision] = useState<string | null>(null);

  const handleBossChoice = (choice: string) => {
    addDiscovery('boss_cabin_survived');
    setBossDecision(choice);
    makeChoice('c1');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                LOCATION 4 • EXECUTIVE BOSS CABIN
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'MANAGER ALIGNMENT ZONE' : 'MANAGER ALIGNMENT ZONE'}
              </h2>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> 09:14 AM – 10:03 AM
          </span>
        </div>

        {/* Motivational Quote on Wall */}
        <div className="p-3.5 rounded-xl border border-white/5 bg-[#111114] text-xs italic font-serif text-zinc-400 text-center">
          “People don't leave companies. They leave managers.” — Frame on Wall
        </div>

        {/* Boss Cabin Interactive Card */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-4">
          <h3 className="text-xl font-extrabold text-white font-sans">
            Boss: “Do you have a minute?”
          </h3>
          <p className="text-sm font-serif italic text-amber-300">
            “Can you take this up today urgently? It will take 5 minutes.”
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              WHAT IS YOUR RESPONSE?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleBossChoice('sure')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  bossDecision === 'sure' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                👍 SURE, I'LL DO IT TODAY
              </button>

              <button
                onClick={() => handleBossChoice('priority')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  bossDecision === 'priority' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                ⚖️ WHAT'S THE PRIORITY?
              </button>

              <button
                onClick={() => handleBossChoice('capacity')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  bossDecision === 'capacity' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                ✋ I'M CURRENTLY AT CAPACITY
              </button>

              <button
                onClick={() => handleBossChoice('pretend')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  bossDecision === 'pretend' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                🙈 PRETEND YOU DIDN'T HEAR
              </button>
            </div>
          </div>

          <AnimatePresence>
            {bossDecision && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1 font-mono">
                <p className="font-bold flex items-center gap-1 text-pink-400">
                  <AlertCircle className="h-4 w-4" /> CONSEQUENCE
                </p>
                <p>
                  {bossDecision === 'sure'
                    ? '+10 Corporate Points | -30 Mental Peace. Congratulations, you just volunteered for weekend work.'
                    : bossDecision === 'capacity'
                    ? '+100 Self Respect! Manager slightly confused by boundaries.'
                    : 'Your manager has entered the chat.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('meeting')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO MEETING ROOM
          </button>

          <button
            onClick={() => navigateToRoom('hr')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>HEAD TO HR CABIN</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
