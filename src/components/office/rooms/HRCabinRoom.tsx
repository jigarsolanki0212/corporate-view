import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { CorporateTranslator } from '../../tools/CorporateTranslator';
import { CorporateDictionary } from '../../tools/CorporateDictionary';
import { motion } from 'framer-motion';
import { HeartHandshake, ArrowRight, BookOpen, Terminal } from 'lucide-react';

export const HRCabinRoom: React.FC = () => {
  const { navigateToRoom, addDiscovery } = useApp();
  const [activeHrTool, setActiveHrTool] = useState<'dialogue' | 'translator' | 'dictionary'>('dialogue');

  const handleHrClick = () => {
    addDiscovery('hr_visited');
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
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                LOCATION 5 • HR CABIN & KIOSK
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                HUMAN RESOURCES (HUMAN HAPPINESS UNAVAILABLE)
              </h2>
            </div>
          </div>
        </div>

        {/* HR Tool Switcher Tabs */}
        <div className="flex items-center space-x-2 rounded-full bg-[#111114] p-1.5 border border-white/10 text-xs font-mono font-bold">
          <button
            onClick={() => setActiveHrTool('dialogue')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeHrTool === 'dialogue' ? 'bg-purple-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            HR DIALOGUE
          </button>

          <button
            onClick={() => {
              setActiveHrTool('translator');
              handleHrClick();
            }}
            className={`px-4 py-2 rounded-full flex items-center space-x-1.5 transition-all ${
              activeHrTool === 'translator' ? 'bg-purple-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>TRANSLATOR KIOSK</span>
          </button>

          <button
            onClick={() => {
              setActiveHrTool('dictionary');
              handleHrClick();
            }}
            className={`px-4 py-2 rounded-full flex items-center space-x-1.5 transition-all ${
              activeHrTool === 'dictionary' ? 'bg-purple-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>HANDBOOK DICTIONARY</span>
          </button>
        </div>

        {/* HR Content Area */}
        {activeHrTool === 'dialogue' && (
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-4">
            <h3 className="text-xl font-extrabold text-white font-sans">
              HR: “We are like a family.”
            </h3>
            <p className="text-sm font-serif italic text-purple-300">
              “Then why does the family require a 90-day resignation notice period in triplicate?”
            </p>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-mono">
              Corporate translation: "Please complete the exit survey before Friday."
            </div>
          </div>
        )}

        {activeHrTool === 'translator' && <CorporateTranslator />}
        {activeHrTool === 'dictionary' && <CorporateDictionary />}

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('boss')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO BOSS CABIN
          </button>

          <button
            onClick={() => navigateToRoom('cafeteria')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>HEAD TO CAFETERIA</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
