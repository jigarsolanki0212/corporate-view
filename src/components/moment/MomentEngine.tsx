import React from 'react';
import { useApp } from '../../context/AppContext';
import { QuoteCard } from './QuoteCard';
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

export const MomentEngine: React.FC = () => {
  const { currentMoment, nextMoment, prevMoment, randomizeMoment, stats } = useApp();

  if (!currentMoment) return null;

  return (
    <section id="moment-experience-section" className="py-12 px-4 max-w-5xl mx-auto">
      
      {/* Top Experience Navigation Header */}
      <div className="flex items-center justify-between mb-8 max-w-3xl mx-auto">
        
        {/* Left Controls */}
        <button
          onClick={prevMoment}
          className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#18181c] px-4 py-2 text-xs font-mono font-bold text-zinc-300 hover:text-white hover:border-white/20 transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>PREV MOMENT</span>
        </button>

        {/* Center Stats Badges */}
        <div className="hidden sm:flex items-center space-x-4 text-xs font-mono">
          <span className="text-zinc-400">
            Corporate: <strong className="text-purple-400 font-bold">{stats.corporatePoints}</strong>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">
            Mental Health: <strong className="text-pink-400 font-bold">{stats.mentalHealth}%</strong>
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={randomizeMoment}
            className="flex items-center space-x-1.5 rounded-full border border-white/10 bg-[#18181c] px-3.5 py-2 text-xs font-mono font-bold text-pink-400 hover:border-pink-500/40 transition-all"
            title="Random Prophecy"
          >
            <Shuffle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">RANDOM</span>
          </button>

          <button
            onClick={nextMoment}
            className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#18181c] px-4 py-2 text-xs font-mono font-bold text-zinc-300 hover:text-white hover:border-white/20 transition-all"
          >
            <span>NEXT MOMENT</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Main Quote Card */}
      <QuoteCard moment={currentMoment} />

    </section>
  );
};
