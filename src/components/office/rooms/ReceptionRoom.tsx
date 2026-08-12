import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

export const ReceptionRoom: React.FC = () => {
  const { language, punchIn, hasPunchedIn, navigateToRoom, addDiscovery } = useApp();
  const [receptionState, setReceptionState] = useState<'initial' | 'firstday' | 'fitted'>('initial');

  const handleReceptionistClick = () => {
    addDiscovery('receptionist_welcomed');
    setReceptionState('firstday');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* 2.5D Room Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                LOCATION 1 • RECEPTION DESK
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'OFFICE ENTRY & ATTENDANCE' : 'OFFICE ENTRY & ATTENDANCE'}
              </h2>
            </div>
          </div>

          <button
            onClick={punchIn}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all flex items-center space-x-2 ${
              hasPunchedIn
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
            }`}
          >
            {hasPunchedIn ? <CheckCircle2 className="h-4 w-4" /> : null}
            <span>{hasPunchedIn ? 'ATTENDANCE PUNCHED IN' : 'PUNCH ATTENDANCE'}</span>
          </button>
        </div>

        {/* Receptionist Dialogue */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-purple-400 uppercase">RECEPTIONIST</span>
              <p className="text-sm font-extrabold text-white">
                “Welcome to your 9–5. Please leave your expectations at the door.”
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {receptionState === 'initial' && (
              <button
                onClick={handleReceptionistClick}
                className="w-full text-left p-3.5 rounded-xl border border-white/10 bg-[#18181c] text-xs font-mono font-bold text-zinc-300 hover:text-white hover:border-white/20 transition-all"
              >
                👉 Talk to Receptionist ("First day?")
              </button>
            )}

            {receptionState === 'firstday' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 pt-2">
                <p className="text-xs font-mono text-zinc-400">Receptionist: "First day?"</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setReceptionState('fitted')}
                    className="p-3 rounded-xl border border-white/10 bg-[#18181c] text-xs font-bold text-white hover:bg-white/10 transition-all"
                  >
                    Yes.
                  </button>
                  <button
                    onClick={() => setReceptionState('fitted')}
                    className="p-3 rounded-xl border border-purple-500/40 bg-purple-500/10 text-xs font-bold text-purple-300 hover:bg-purple-500/20 transition-all"
                  >
                    Unfortunately, yes.
                  </button>
                </div>
              </motion.div>
            )}

            {receptionState === 'fitted' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
                Receptionist: “You'll fit right in. Head straight to the Developer Floor.”
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={() => navigateToRoom('developer')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>WALK TO DEVELOPER FLOOR</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
