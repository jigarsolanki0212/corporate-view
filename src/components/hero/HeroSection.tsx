import React from 'react';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, punchIn, randomizeMoment, setActiveTab } = useApp();

  const handlePressPlay = () => {
    punchIn();
    setActiveTab('experience');
    const momentElement = document.getElementById('moment-experience-section');
    if (momentElement) {
      momentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-pink-500/10 via-purple-500/15 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto space-y-6"
      >
        
        {/* Small Tag */}
        <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono font-bold tracking-widest text-purple-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-pink-400" />
          <span>CORPORATE SUCKS 2.0</span>
        </div>

        {/* Huge Editorial Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none uppercase font-sans">
          YOUR 9–5 <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            DESERVES A
          </span> <br />
          SOUNDTRACK.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-xl font-serif italic text-zinc-300 max-w-xl mx-auto leading-relaxed">
          {language === 'hindi'
            ? '“Kyunki washroom mein rone ka bhi ek dedicated background music hona chahiye.”'
            : '“Because crying in the washroom deserves background music.”'}
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
          
          {/* Primary CTA */}
          <button
            onClick={handlePressPlay}
            className="w-full sm:w-auto btn-primary-gradient px-8 py-4 rounded-full text-base font-extrabold text-white flex items-center justify-center space-x-3 shadow-xl"
          >
            <span>PRESS PLAY</span>
            <Play className="h-4 w-4 fill-white" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={randomizeMoment}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-zinc-300 border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
          >
            <span>SURPRISE ME</span>
          </button>

        </div>

      </motion.div>
    </section>
  );
};
