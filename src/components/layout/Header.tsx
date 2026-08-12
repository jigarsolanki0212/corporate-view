import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, isMuted, toggleMute, activeTab, setActiveTab } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTabs = [
    { id: 'experience', label: { hindi: 'MOMENTS', english: 'MOMENTS' } },
    { id: 'moods', label: { hindi: 'MOODS', english: 'MOODS' } },
    { id: 'translator', label: { hindi: 'TRANSLATOR', english: 'TRANSLATOR' } },
    { id: 'dictionary', label: { hindi: 'DICTIONARY', english: 'DICTIONARY' } },
    { id: 'quiz', label: { hindi: 'TROPHY ROOM', english: 'TROPHY ROOM' } }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('experience')}
          className="flex cursor-pointer items-center space-x-3 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-white flex items-center gap-2 font-sans uppercase">
              CORPORATE SUCKS
            </h1>
            <p className="text-[10px] text-zinc-400 font-mono tracking-wider hidden sm:block">
              YOUR 9–5 DESERVES A SOUNDTRACK
            </p>
          </div>
        </div>

        {/* Minimal Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 rounded-full bg-[#111114] p-1.5 border border-white/10">
          {navTabs.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold font-sans transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label[language]}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2">
          
          {/* Language Switcher */}
          <div className="flex rounded-full bg-[#111114] p-1 border border-white/10">
            <button
              onClick={() => setLanguage('hindi')}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all ${
                language === 'hindi'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              HIN
            </button>
            <button
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all ${
                language === 'english'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="rounded-full border border-white/10 bg-[#111114] p-2 text-zinc-400 hover:text-white"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-full border border-white/10 bg-[#111114] p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#09090b] px-4 py-4 space-y-2 font-sans">
          {navTabs.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label[language]}</span>
              </button>
            );
          })}
        </div>
      )}

    </header>
  );
};
