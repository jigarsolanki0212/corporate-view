import React from 'react';
import { useApp } from '../../context/AppContext';
import { MOODS } from '../../data/moods';
import type { MoodId } from '../../types';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  PhoneCall, 
  Banknote, 
  Zap, 
  UserCheck, 
  LogOut, 
  PartyPopper, 
  TrendingUp, 
  Terminal, 
  Rocket,
  Play
} from 'lucide-react';

const ICON_MAP = {
  'coffee': Coffee,
  'phone-call': PhoneCall,
  'banknote': Banknote,
  'zap': Zap,
  'user-check': UserCheck,
  'log-out': LogOut,
  'party-popper': PartyPopper,
  'trending-up': TrendingUp,
  'terminal': Terminal,
  'rocket': Rocket
};

export const MoodSelector: React.FC = () => {
  const { language, selectedMoodId, setSelectedMoodId, setActiveTab } = useApp();

  const handleMoodSelect = (moodId: MoodId) => {
    setSelectedMoodId(moodId);
    setActiveTab('experience');
    const momentElement = document.getElementById('moment-experience-section');
    if (momentElement) {
      momentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 mb-2">
          MOOD MUSIC SELECTION
        </p>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight font-sans">
          WHAT KIND OF CORPORATE DAMAGE?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOODS.map((mood) => {
          const isSelected = selectedMoodId === mood.id;
          const IconComponent = ICON_MAP[mood.iconName] || Coffee;

          return (
            <motion.div
              key={mood.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMoodSelect(mood.id)}
              className={`cursor-pointer relative overflow-hidden rounded-3xl p-6 transition-all backdrop-blur-xl group ${
                isSelected
                  ? 'border border-purple-500/80 bg-[#18181c] shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/40'
                  : 'border border-white/10 bg-[#111114] hover:border-white/20 hover:bg-[#18181c]'
              }`}
            >
              {/* Subtle Color Accent Top */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: mood.accentColor }}
              />

              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 shadow-inner"
                    style={{ backgroundColor: `${mood.accentColor}15`, color: mood.accentColor }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-lg tracking-wide font-sans">
                      {mood.name[language]}
                    </h3>
                  </div>
                </div>

                <div 
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                    isSelected ? 'bg-gradient-to-tr from-pink-500 to-purple-500 text-white border-transparent' : 'border-white/10 text-zinc-400 group-hover:text-white'
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-300 italic font-serif leading-relaxed">
                “{mood.tagline[language]}”
              </p>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
