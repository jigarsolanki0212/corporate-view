import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, ArrowRight, AlertTriangle, Bug } from 'lucide-react';

export const DeveloperFloorRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery, makeChoice } = useApp();
  const [devAction, setDevAction] = useState<string | null>(null);

  const handleDevChoice = (choice: string) => {
    addDiscovery('production_bug_handled');
    setDevAction(choice);
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
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Laptop className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                LOCATION 2 • DEVELOPER FLOOR
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'ENGINEERING & DEPLOYMENT ZONE' : 'ENGINEERING & DEPLOYMENT ZONE'}
              </h2>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold flex items-center gap-1">
            <AlertTriangle className="h-3.5 w-3.5" /> PROD ALERT
          </span>
        </div>

        {/* Developer Desk Interactive Card */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-4">
          <h3 className="text-xl font-extrabold text-white font-sans">
            “Production is down.”
          </h3>
          <p className="text-sm font-serif italic text-blue-300">
            “Works on my machine. AWS is screaming at 4:30 PM on a Friday.”
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              HOW DO YOU HANDLE THIS INCIDENT?
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleDevChoice('investigate')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  devAction === 'investigate' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                🔍 INVESTIGATE STACK TRACE
              </button>

              <button
                onClick={() => handleDevChoice('backend')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  devAction === 'backend' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                👉 BLAME BACKEND API
              </button>

              <button
                onClick={() => handleDevChoice('frontend')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  devAction === 'frontend' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                🎨 BLAME FRONTEND CSS
              </button>

              <button
                onClick={() => handleDevChoice('ignore')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  devAction === 'ignore' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                🙈 PRETEND YOU DIDN'T SEE SLACK
              </button>
            </div>
          </div>

          <AnimatePresence>
            {devAction && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 space-y-1 font-mono">
                <p className="font-bold flex items-center gap-1 text-pink-400">
                  <Bug className="h-4 w-4" /> UNLOCKED: THE 4 PM PRODUCTION INCIDENT
                </p>
                <p>
                  {devAction === 'ignore'
                    ? 'Senior Dev energy achieved. Slack notification muted for weekend.'
                    : 'Congratulations. You fixed 1 syntax error and unlocked 4 new production bugs.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('reception')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO RECEPTION
          </button>

          <button
            onClick={() => navigateToRoom('meeting')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>HEAD TO MEETING ROOM</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
