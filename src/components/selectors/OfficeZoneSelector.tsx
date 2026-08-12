import React from 'react';
import { useApp } from '../../context/AppContext';
import { OFFICE_ZONES } from '../../data/officeZones';
import type { OfficeZone } from '../../types';
import { motion } from 'framer-motion';
import { Building2, Laptop, Coffee, Utensils, Gamepad2, DoorClosed } from 'lucide-react';

interface OfficeZoneSelectorProps {
  activeZone: OfficeZone;
  onZoneSelect: (zone: OfficeZone) => void;
}

const ZONE_ICONS = {
  'building-2': Building2,
  'laptop': Laptop,
  'coffee': Coffee,
  'utensils': Utensils,
  'gamepad-2': Gamepad2,
  'door-closed': DoorClosed
};

export const OfficeZoneSelector: React.FC<OfficeZoneSelectorProps> = ({ activeZone, onZoneSelect }) => {
  const { language } = useApp();

  return (
    <div className="w-full my-6 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-4">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
          SELECT OFFICE ENVIRONMENT ZONE
        </span>
      </div>

      {/* Responsive Office Zone Tabs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {OFFICE_ZONES.map((zone) => {
          const isSelected = activeZone === zone.id;
          const IconComp = ZONE_ICONS[zone.iconName] || Building2;

          return (
            <motion.button
              key={zone.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onZoneSelect(zone.id)}
              className={`relative overflow-hidden rounded-2xl border p-3.5 text-left transition-all backdrop-blur-xl ${
                isSelected
                  ? 'border-purple-500 bg-zinc-900 shadow-lg shadow-purple-500/20 ring-1 ring-purple-500/40'
                  : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80'
              }`}
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                style={{ backgroundColor: zone.accentColor, opacity: isSelected ? 1 : 0.4 }}
              />

              <div className="flex items-center space-x-2.5">
                <div 
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10"
                  style={{ backgroundColor: `${zone.accentColor}15`, color: zone.accentColor }}
                >
                  <IconComp className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-white truncate font-sans">
                    {zone.name[language]}
                  </p>
                  <p className="text-[9px] font-mono text-zinc-400 truncate">
                    {zone.soundTag}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
