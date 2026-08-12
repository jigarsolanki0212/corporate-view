import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { OFFICE_ZONES } from '../../data/officeZones';
import type { OfficeZone } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Laptop, 
  Coffee, 
  Utensils, 
  Gamepad2, 
  DoorClosed, 
  ArrowRight, 
  ArrowLeft,
  Play,
  Sparkles,
  Volume2
} from 'lucide-react';

const STAGE_ICONS = {
  'building-2': Building2,
  'laptop': Laptop,
  'coffee': Coffee,
  'utensils': Utensils,
  'gamepad-2': Gamepad2,
  'door-closed': DoorClosed
};

const STAGE_TITLES: Record<OfficeZone, { step: string; action: string; hindi: string; english: string }> = {
  reception: {
    step: 'STAGE 1 / 6',
    action: 'ENTERING THE BUILDING',
    hindi: 'Reception Gate & Biometric Punch Clock',
    english: 'Reception Gate & Biometric Punch Clock'
  },
  cubicle: {
    step: 'STAGE 2 / 6',
    action: 'SITTING AT YOUR CUBICLE',
    hindi: 'Dual Screens, Slack Alarms & Alt+Tab Speedrun',
    english: 'Dual Screens, Slack Alarms & Alt+Tab Speedrun'
  },
  chai: {
    step: 'STAGE 3 / 6',
    action: 'STEPPING OUT FOR CHAI',
    hindi: 'Kulhad Chai & Emergency Therapy Session',
    english: 'Kulhad Chai & Emergency Therapy Session'
  },
  canteen: {
    step: 'STAGE 4 / 6',
    action: 'HEADING TO THE CANTEEN',
    hindi: 'Salary Day Feast & Free Pizza Table',
    english: 'Salary Day Feast & Free Pizza Table'
  },
  gamezone: {
    step: 'STAGE 5 / 6',
    action: 'CHILLING IN BREAK ROOM',
    hindi: 'Foosball Table & Friday 4:57 PM Escape',
    english: 'Foosball Table & Friday 4:57 PM Escape'
  },
  washroom: {
    step: 'STAGE 6 / 6',
    action: 'SANCTUARY ESCAPE',
    hindi: 'Emergency Washroom Booth for Crying in Peace',
    english: 'Emergency Washroom Booth for Crying in Peace'
  }
};

export const OfficeJourneyEngine: React.FC = () => {
  const { language, selectedZone, setSelectedZone, currentMoment, makeChoice, isPlaying, togglePlay } = useApp();
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const activeZoneIndex = OFFICE_ZONES.findIndex((z) => z.id === selectedZone);
  const currentZoneMeta = OFFICE_ZONES[activeZoneIndex] || OFFICE_ZONES[0];
  const stageInfo = STAGE_TITLES[currentZoneMeta.id];

  const handleNextStage = () => {
    const nextIdx = (activeZoneIndex + 1) % OFFICE_ZONES.length;
    setSelectedZone(OFFICE_ZONES[nextIdx].id);
    setSelectedChoiceId(null);
  };

  const handlePrevStage = () => {
    const prevIdx = (activeZoneIndex - 1 + OFFICE_ZONES.length) % OFFICE_ZONES.length;
    setSelectedZone(OFFICE_ZONES[prevIdx].id);
    setSelectedChoiceId(null);
  };

  const selectedChoice = currentMoment?.choices.find((c) => c.id === selectedChoiceId);
  const IconComp = STAGE_ICONS[currentZoneMeta.iconName] || Building2;

  return (
    <div className="w-full max-w-5xl mx-auto h-[82vh] flex flex-col justify-between p-4 sm:p-6 overflow-hidden relative">
      
      {/* Top Office Stage Location Bar */}
      <div className="w-full border-b border-white/10 pb-4 flex items-center justify-between">
        
        {/* Stage Step Badge */}
        <div className="flex items-center space-x-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10"
            style={{ backgroundColor: `${currentZoneMeta.accentColor}20`, color: currentZoneMeta.accentColor }}
          >
            <IconComp className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-400">
                {stageInfo.step} • {stageInfo.action}
              </span>
            </div>
            <h2 className="text-base sm:text-xl font-extrabold text-white font-sans uppercase">
              {stageInfo[language]}
            </h2>
          </div>
        </div>

        {/* Stage Switcher Pills */}
        <div className="hidden md:flex items-center space-x-1.5 rounded-full bg-[#111114] p-1 border border-white/10">
          {OFFICE_ZONES.map((zone, idx) => {
            const isCurrent = zone.id === selectedZone;
            return (
              <button
                key={zone.id}
                onClick={() => {
                  setSelectedZone(zone.id);
                  setSelectedChoiceId(null);
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {idx + 1}. {zone.name.english.split(' ')[0]}
              </button>
            );
          })}
        </div>

      </div>

      {/* Main Viewport Content — First-Person Story Screen */}
      <div className="my-auto py-4 overflow-y-auto max-h-[60vh] space-y-6">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZoneMeta.id}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6"
          >
            
            {/* Ambient Sound Tag & Category */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-purple-400 font-bold uppercase">
                <Volume2 className="h-3.5 w-3.5" /> {currentZoneMeta.soundTag}
              </span>
              <span className="uppercase text-zinc-500 font-bold">
                {currentMoment?.category || 'general'}
              </span>
            </div>

            {/* Main Situation & Quote */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-black text-white uppercase font-sans tracking-tight leading-tight">
                “{currentMoment?.quote || 'Body office mein hai. Soul Sunday pe.'}”
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-zinc-300">
                {currentMoment?.subtext || 'You have 7 meetings today.'}
              </p>
            </div>

            {/* Soundtrack Card */}
            {currentMoment && (
              <div className="rounded-2xl border border-white/10 bg-[#111114] p-4 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 text-white font-bold">
                    🎵
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider">
                      BACKGROUND SOUNDTRACK
                    </p>
                    <h4 className="text-sm font-extrabold text-white truncate">
                      {currentMoment.songTitle}
                    </h4>
                    <p className="text-xs text-zinc-400 truncate">
                      {currentMoment.songArtist}
                    </p>
                  </div>
                </div>

                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <Play className={`h-4 w-4 fill-white ml-0.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            )}

            {/* Interactive Choices */}
            {currentMoment && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                  WHAT IS YOUR ACTION AT THIS LOCATION?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentMoment.choices.map((choice) => {
                    const isChosen = selectedChoiceId === choice.id;
                    return (
                      <button
                        key={choice.id}
                        onClick={() => {
                          setSelectedChoiceId(choice.id);
                          makeChoice(choice.id);
                        }}
                        className={`p-4 rounded-2xl border text-left font-sans font-extrabold text-xs transition-all ${
                          isChosen
                            ? 'border-purple-500 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white ring-1 ring-purple-500/40 shadow-lg'
                            : 'border-white/10 bg-[#111114] text-zinc-300 hover:bg-[#18181c] hover:border-white/20'
                        }`}
                      >
                        {choice.label[language]}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Consequence Reveal */}
            <AnimatePresence>
              {selectedChoice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-purple-500/30 bg-[#111114] p-4 space-y-2 text-xs font-sans"
                >
                  <div className="flex items-center justify-between font-mono font-bold text-[11px] text-purple-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" /> CONSEQUENCE
                    </span>
                    <span>
                      {selectedChoice.points.corporate >= 0 ? '+' : ''}{selectedChoice.points.corporate} Corporate | {selectedChoice.points.mentalHealth >= 0 ? '+' : ''}{selectedChoice.points.mentalHealth} Mental
                    </span>
                  </div>
                  <p className="text-sm font-extrabold text-white">
                    “{selectedChoice.consequence[language]}”
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Bottom Stage Navigation Controls */}
      <div className="w-full border-t border-white/10 pt-4 flex items-center justify-between font-mono">
        <button
          onClick={handlePrevStage}
          className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#111114] px-5 py-2.5 text-xs font-bold text-zinc-300 hover:text-white hover:border-white/20 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>PREVIOUS LOCATION</span>
        </button>

        <span className="text-xs text-zinc-500 hidden sm:inline">
          {activeZoneIndex + 1} of 6 Locations Visited
        </span>

        <button
          onClick={handleNextStage}
          className="flex items-center space-x-2 rounded-full btn-primary-gradient px-6 py-2.5 text-xs font-extrabold text-white shadow-lg transition-all"
        >
          <span>WALK TO NEXT LOCATION</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
};
