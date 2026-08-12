import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PERSONALITIES } from '../../data/personalities';
import { ShareCardModal } from './ShareCardModal';
import { motion } from 'framer-motion';
import { Share2, RefreshCw, Music, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PersonalityResultProps {
  selectedAnswers?: Record<number, string>;
  onRestart: () => void;
}

export const PersonalityResult: React.FC<PersonalityResultProps> = ({ onRestart }) => {
  const { language, stats } = useApp();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Trigger confetti effect on result render
  React.useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  }, []);

  // Simple heuristic algorithm to determine personality
  let assignedKey = 'actor';

  if (stats.selfRespect >= 80) assignedKey = 'legend';
  else if (stats.corporatePoints >= 75) assignedKey = 'warrior';
  else if (stats.mentalHealth <= 30) assignedKey = 'zombie';
  else if (stats.momentsCompleted >= 5) assignedKey = 'notice';

  const personality = PERSONALITIES[assignedKey] || PERSONALITIES['actor'];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

        <span className="inline-block rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-1 text-xs font-mono font-bold text-purple-300 mb-4">
          {personality.badge}
        </span>

        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1 font-mono">
          YOUR CORPORATE PERSONALITY TYPE
        </h2>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase my-2 font-sans">
          {personality.title[language]}
        </h1>

        <p className="text-base sm:text-xl font-serif italic text-purple-300 max-w-2xl mx-auto my-3">
          “{personality.tagline[language]}”
        </p>

        <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed my-4">
          {personality.description[language]}
        </p>

        {/* Survival Meter */}
        <div className="my-6 max-w-md mx-auto rounded-2xl border border-white/10 bg-[#111114] p-4">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-300 mb-2 font-mono">
            <span>CORPORATE SURVIVAL SCORE</span>
            <span className="text-emerald-400 font-extrabold">{personality.survivalRate}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-zinc-900 overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
              style={{ width: `${personality.survivalRate}%` }}
            />
          </div>
        </div>

        {/* Fun Stats Grid */}
        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-3">
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">Meetings Survived</p>
            <p className="text-xl font-extrabold text-white">{personality.stats.meetingsSurvived}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-3">
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">Fake "I'm Fine"</p>
            <p className="text-xl font-extrabold text-purple-400">{personality.stats.fakeFineCount}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-3">
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">Times Said "Noted"</p>
            <p className="text-xl font-extrabold text-amber-400">{personality.stats.notedSent}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111114] p-3">
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">Coffee Cups</p>
            <p className="text-xl font-extrabold text-rose-400">{personality.stats.coffeesConsumed}</p>
          </div>
        </div>

        {/* Soundtrack */}
        <div className="my-6 flex items-center justify-center space-x-2 rounded-2xl bg-[#111114] border border-white/10 p-3 text-xs text-purple-300">
          <Music className="h-4 w-4" />
          <span>Recommended Soundtrack: <strong>{personality.soundtrack[language]}</strong></span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowShareModal(true)}
            className="w-full sm:w-auto btn-primary-gradient px-8 py-4 rounded-full text-base font-extrabold text-white shadow-xl flex items-center justify-center space-x-2"
          >
            <Share2 className="h-5 w-5" />
            <span>SHARE RESULT CARD</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full border border-white/10 bg-[#111114] px-6 py-4 text-base font-bold text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
          >
            {copied ? <Check className="h-5 w-5 text-emerald-400" /> : null}
            <span>{copied ? 'LINK COPIED!' : 'COPY LINK'}</span>
          </button>

          <button
            onClick={onRestart}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full border border-white/10 bg-[#111114] px-6 py-4 text-base font-bold text-zinc-400 hover:text-white transition-all"
          >
            <RefreshCw className="h-4 w-4" />
            <span>PLAY AGAIN</span>
          </button>
        </div>

      </motion.div>

      {/* Share Card Modal */}
      {showShareModal && (
        <ShareCardModal
          personality={personality}
          onClose={() => setShowShareModal(false)}
        />
      )}

    </div>
  );
};
