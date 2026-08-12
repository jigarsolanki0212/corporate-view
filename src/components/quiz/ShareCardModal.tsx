import React, { useRef, useState } from 'react';
import type { PersonalityType } from '../../types';
import { useApp } from '../../context/AppContext';
import { X, Copy, Check, Share2 } from 'lucide-react';

interface ShareCardModalProps {
  personality: PersonalityType;
  onClose: () => void;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({ personality, onClose }) => {
  const { language } = useApp();
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const shareText = `⚡ CORPORATE SUCKS 2.0 ⚡\nMy Type: ${personality.title[language]}\n"${personality.tagline[language]}"\nSurvival Score: ${personality.survivalRate}%\nSoundtrack: ${personality.soundtrack[language]}\nCheck yours at corporatesucks.vercel.app`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Corporate Sucks 2.0',
        text: shareText,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyText();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          INSTAGRAM / WHATSAPP SHARE CARD
        </h3>

        {/* Shareable Card Canvas Preview */}
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-950 via-zinc-900 to-black p-6 shadow-2xl text-center"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="text-xs font-black tracking-widest text-purple-400 font-mono">⚡ CORPORATE SUCKS 2.0</span>
            <span className="text-[10px] font-mono text-zinc-500">@corporatesucks</span>
          </div>

          <span className="inline-block rounded-full bg-purple-500/20 px-3 py-0.5 text-[10px] font-mono font-bold text-purple-300">
            {personality.badge}
          </span>

          <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mt-3">YOUR TYPE</p>
          <h2 className="text-xl font-black text-white uppercase tracking-tight my-1 font-sans">
            {personality.title[language]}
          </h2>

          <p className="text-xs italic font-serif text-purple-200 my-2">
            “{personality.tagline[language]}”
          </p>

          <div className="my-4 rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-[10px] text-zinc-400 font-bold uppercase font-mono">CORPORATE SURVIVAL SCORE</p>
            <p className="text-2xl font-black text-emerald-400">{personality.survivalRate}%</p>
          </div>

          <div className="text-[11px] text-purple-300 font-mono">
            🎵 Soundtrack: {personality.soundtrack[language]}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 space-y-2">
          <button
            onClick={handleNativeShare}
            className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-all"
          >
            <Share2 className="h-4 w-4" />
            <span>SHARE TO SOCIAL MEDIA</span>
          </button>

          <button
            onClick={handleCopyText}
            className="w-full flex items-center justify-center space-x-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY TEXT FOR WHATSAPP / SLACK'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
