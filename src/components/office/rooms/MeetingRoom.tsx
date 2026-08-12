import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight, Clock, VideoOff } from 'lucide-react';

export const MeetingRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery, makeChoice } = useApp();
  const [meetingState, setMeetingState] = useState<string | null>(null);

  const handleMeetingChoice = (choice: string) => {
    addDiscovery('quick_sync_survived');
    setMeetingState(choice);
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
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                LOCATION 3 • GLASS MEETING ROOM
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'THE 4:30 PM QUICK SYNC' : 'THE 4:30 PM QUICK SYNC'}
              </h2>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> 47 MINS IN
          </span>
        </div>

        {/* Meeting Room Interactive Card */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-4">
          <h3 className="text-xl font-extrabold text-white font-sans">
            “Calendar says: 10:00–10:05. Reality says: your entire afternoon.”
          </h3>
          <p className="text-sm font-serif italic text-orange-300">
            “Another meeting that could have been an email.”
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              HOW DO YOU RESPOND TO TEAMS CALL?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleMeetingChoice('join')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  meetingState === 'join' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                📞 JOIN & SAY "HAPPY TO ALIGN!"
              </button>

              <button
                onClick={() => handleMeetingChoice('decline')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  meetingState === 'decline' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                ❌ DECLINE & PROPOSE TOMORROW
              </button>

              <button
                onClick={() => handleMeetingChoice('agenda')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  meetingState === 'agenda' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                📋 ASK FOR MEETING AGENDA
              </button>

              <button
                onClick={() => handleMeetingChoice('wifi')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  meetingState === 'wifi' ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-[#18181c] text-zinc-300 hover:text-white'
                }`}
              >
                🔌 PRETEND INTERNET IS DOWN
              </button>
            </div>
          </div>

          <AnimatePresence>
            {meetingState && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs text-orange-300 space-y-1 font-mono">
                <p className="font-bold flex items-center gap-1 text-pink-400">
                  <VideoOff className="h-4 w-4" /> 47 MINUTES LATER...
                </p>
                <p>
                  {meetingState === 'agenda'
                    ? 'Manager: "Let us discuss the agenda inside the meeting!" 😂'
                    : meetingState === 'wifi'
                    ? 'Teams status: "Last seen 2 minutes ago." Crisis averted for 24 hours.'
                    : 'You said "Absolutely!" while your soul screamed.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('developer')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO DEV FLOOR
          </button>

          <button
            onClick={() => navigateToRoom('boss')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>ENTER BOSS CABIN</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
