import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Printer, AlertOctagon } from 'lucide-react';

export const BreakAreaRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery } = useApp();
  const [printerFixed, setPrinterFixed] = useState(false);

  const handlePrinterClick = () => {
    addDiscovery('found_broken_printer');
    setPrinterFixed(true);
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
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
                LOCATION 7 • BREAK ROOM & PRINTER
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'FRIDAY 4:57 PM BREAK AREA' : 'FRIDAY 4:57 PM BREAK AREA'}
              </h2>
            </div>
          </div>
        </div>

        {/* Broken Printer Card */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-red-400 flex items-center gap-1">
              <Printer className="h-4 w-4" /> PRINTER STATUS: PAPER JAM
            </span>
            <button
              onClick={handlePrinterClick}
              className="px-3 py-1 rounded-full border border-white/10 bg-[#18181c] text-xs font-mono text-zinc-300 hover:text-white"
            >
              KICK PRINTER
            </button>
          </div>

          <h3 className="text-xl font-extrabold text-white font-sans">
            {language === 'hindi' ? '“Printer ne aaj resign kar diya.”' : '“The printer has chosen violence.”'}
          </h3>

          {printerFixed && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
              ERROR: Paper Jam in Tray 2. Please call IT Support.
            </div>
          )}
        </div>

        {/* Notice Board */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1">
            <AlertOctagon className="h-3.5 w-3.5" /> NOTICE BOARD: MANDATORY TEAM BUILDING
          </span>
          <p className="text-sm font-extrabold text-white">
            “Everyone will be forced to play a trust fall game on Friday at 5:00 PM.”
          </p>
          <p className="text-xs italic font-serif text-zinc-400">
            Human translation: "Please start typing aggressively so you look busy."
          </p>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('cafeteria')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO CAFETERIA
          </button>

          <button
            onClick={() => navigateToRoom('exit')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>PROCEED TO EXIT DOOR</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
