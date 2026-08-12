import React from 'react';
import { useApp } from '../../context/AppContext';
import { CORPORATE_LIFE_PROFILES } from '../../data/corporateLife';
import { motion } from 'framer-motion';
import { Terminal, Building, Rocket, Home, GraduationCap, Briefcase } from 'lucide-react';

const ICON_MAP = {
  terminal: Terminal,
  building: Building,
  rocket: Rocket,
  home: Home,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase
};

export const CorporateLifeSelector: React.FC = () => {
  const { language, selectedLifeProfile, setSelectedLifeProfile } = useApp();

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-2">
          PERSONALIZATION
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          WHAT KIND OF CORPORATE LIFE ARE YOU LIVING?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CORPORATE_LIFE_PROFILES.map((profile) => {
          const isSelected = selectedLifeProfile === profile.id;
          const IconComp = ICON_MAP[profile.iconName] || Building;

          return (
            <motion.div
              key={profile.id}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLifeProfile(profile.id)}
              className={`cursor-pointer relative overflow-hidden rounded-2xl p-6 transition-all backdrop-blur-xl ${
                isSelected
                  ? 'border border-purple-500/80 bg-[#18181c] shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/40'
                  : 'border border-white/10 bg-[#111114] hover:border-white/20 hover:bg-[#18181c]'
              }`}
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                style={{ backgroundColor: profile.accentColor, opacity: isSelected ? 1 : 0.4 }}
              />

              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                  style={{ backgroundColor: `${profile.accentColor}15`, color: profile.accentColor }}
                >
                  <IconComp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-wide font-sans">
                    {profile.title[language]}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-zinc-300 italic font-serif leading-relaxed">
                “{profile.quote[language]}”
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
