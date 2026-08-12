import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ExteriorLanding } from './rooms/ExteriorLanding';
import { ReceptionRoom } from './rooms/ReceptionRoom';
import { DeveloperFloorRoom } from './rooms/DeveloperFloorRoom';
import { MeetingRoom } from './rooms/MeetingRoom';
import { BossCabinRoom } from './rooms/BossCabinRoom';
import { HRCabinRoom } from './rooms/HRCabinRoom';
import { CafeteriaRoom } from './rooms/CafeteriaRoom';
import { BreakAreaRoom } from './rooms/BreakAreaRoom';
import { ExitRoom } from './rooms/ExitRoom';
import { OfficeMiniMap } from './OfficeMiniMap';
import { Clock, Map, Trophy, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VirtualOfficeWorld: React.FC = () => {
  const { currentRoom, officeTime, discoveries } = useApp();
  const [mapOpen, setMapOpen] = useState(false);

  const renderRoom = () => {
    switch (currentRoom) {
      case 'exterior': return <ExteriorLanding />;
      case 'reception': return <ReceptionRoom />;
      case 'developer': return <DeveloperFloorRoom />;
      case 'meeting': return <MeetingRoom />;
      case 'boss': return <BossCabinRoom />;
      case 'hr': return <HRCabinRoom />;
      case 'cafeteria': return <CafeteriaRoom />;
      case 'break': return <BreakAreaRoom />;
      case 'exit': return <ExitRoom />;
      default: return <ExteriorLanding />;
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden">
      
      {/* Real Cinematic Animated Office Background Image */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/office_bg.png"
          alt="Cinematic Modern Office Environment with People Working"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 animate-pulse transition-transform duration-1000"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/40" />
      </div>

      {/* Top Office Status Bar */}
      <div className="w-full max-w-5xl mx-auto border-b border-white/10 pb-3 flex items-center justify-between text-xs font-mono backdrop-blur-md px-4 py-2 rounded-2xl bg-black/40">
        
        {/* Clock & Status */}
        <div className="flex items-center space-x-3">
          <span className="flex items-center gap-1.5 text-zinc-300 font-bold">
            <Clock className="h-4 w-4 text-pink-400" />
            <span>OFFICE TIME: <strong className="text-white">{officeTime}</strong></span>
          </span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1 text-purple-400 font-bold">
            <Trophy className="h-3.5 w-3.5" />
            <span>{discoveries.length} DISCOVERIES</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:flex items-center gap-1 text-emerald-400 font-bold">
            <Users className="h-3.5 w-3.5" />
            <span>STAFF ACTIVE</span>
          </span>
        </div>

        {/* Office Mini-Map Toggle */}
        <button
          onClick={() => setMapOpen(true)}
          className="flex items-center space-x-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-3.5 py-1.5 text-xs font-bold text-purple-300 hover:bg-purple-500/20 transition-all shadow-sm"
        >
          <Map className="h-3.5 w-3.5" />
          <span>OFFICE MAP</span>
        </button>

      </div>

      {/* Main Room Viewport */}
      <div className="my-auto py-4 overflow-y-auto max-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {renderRoom()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Office Floor Plan Mini-Map Overlay */}
      <OfficeMiniMap isOpen={mapOpen} onClose={() => setMapOpen(false)} />

    </div>
  );
};
