import React from 'react';
import { useApp } from '../../context/AppContext';
import type { OfficeRoomId } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Laptop, Users, UserCheck, HeartHandshake, Coffee, Sparkles, LogOut } from 'lucide-react';

interface OfficeMiniMapProps {
  isOpen: boolean;
  onClose: () => void;
}

const ROOM_MAP_ITEMS: { id: OfficeRoomId; name: { hindi: string; english: string }; icon: React.ElementType }[] = [
  { id: 'reception', name: { hindi: 'Reception Desk', english: 'Reception Desk' }, icon: Building2 },
  { id: 'developer', name: { hindi: 'Developer Floor', english: 'Developer Floor' }, icon: Laptop },
  { id: 'meeting', name: { hindi: 'Meeting Room', english: 'Meeting Room' }, icon: Users },
  { id: 'boss', name: { hindi: 'Boss Cabin', english: 'Boss Cabin' }, icon: UserCheck },
  { id: 'hr', name: { hindi: 'HR Cabin', english: 'HR Cabin' }, icon: HeartHandshake },
  { id: 'cafeteria', name: { hindi: 'Cafeteria & Lunch', english: 'Cafeteria & Lunch' }, icon: Coffee },
  { id: 'break', name: { hindi: 'Break Area & Printer', english: 'Break Area & Printer' }, icon: Sparkles },
  { id: 'exit', name: { hindi: 'Resignation Exit Door', english: 'Resignation Exit Door' }, icon: LogOut }
];

export const OfficeMiniMap: React.FC<OfficeMiniMapProps> = ({ isOpen, onClose }) => {
  const { language, currentRoom, navigateToRoom, discoveredRooms } = useApp();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#18181c] p-6 shadow-2xl space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400">
                OFFICE FLOOR PLAN
              </p>
              <h3 className="text-xl font-extrabold text-white uppercase font-sans">
                {language === 'hindi' ? 'VIRTUAL OFFICE MAP' : 'VIRTUAL OFFICE MAP'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-white/10 bg-[#111114] p-2 text-zinc-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Interactive Room Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ROOM_MAP_ITEMS.map((item) => {
              const isCurrent = currentRoom === item.id;
              const isDiscovered = discoveredRooms.includes(item.id);
              const IconComponent = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigateToRoom(item.id);
                    onClose();
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all backdrop-blur-xl space-y-2 ${
                    isCurrent
                      ? 'border-purple-500 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-white ring-1 ring-purple-500/40 shadow-lg'
                      : isDiscovered
                      ? 'border-white/10 bg-[#111114] text-zinc-300 hover:border-white/20 hover:bg-[#18181c]'
                      : 'border-white/5 bg-[#09090b] text-zinc-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <IconComponent className={`h-5 w-5 ${isCurrent ? 'text-pink-400' : 'text-zinc-400'}`} />
                    {isCurrent && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <p className="text-xs font-extrabold uppercase font-sans tracking-wide">
                    {item.name[language]}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <span className="text-xs font-mono text-zinc-400">
              Discovered {discoveredRooms.length} of 9 Office Areas
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
