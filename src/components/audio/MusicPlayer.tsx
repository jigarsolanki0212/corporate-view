import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer: React.FC = () => {
  const { currentTrack, availableTracks, isPlaying, togglePlay, isMuted, toggleMute, selectTrack } = useApp();
  const [progress, setProgress] = useState(30);
  const [isExpanded, setIsExpanded] = useState(false);

  // Simulated track playback timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleNextTrack = () => {
    const currentIndex = availableTracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % availableTracks.length;
    if (availableTracks[nextIndex]) {
      selectTrack(availableTracks[nextIndex].id);
    }
  };

  const handlePrevTrack = () => {
    const currentIndex = availableTracks.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + availableTracks.length) % availableTracks.length;
    if (availableTracks[prevIndex]) {
      selectTrack(availableTracks[prevIndex].id);
    }
  };

  return (
    <aside aria-label="Music Player Controls" className="fixed bottom-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="mx-auto max-w-3xl pointer-events-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#16161a]/95 shadow-2xl backdrop-blur-2xl"
        >
          
          {/* Progress Bar Top */}
          <div className="h-1 w-full bg-white/5 cursor-pointer">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between p-3 sm:px-5">
            
            {/* Left Track Info */}
            <div className="flex items-center space-x-3 min-w-0">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-md">
                <img
                  src={currentTrack.albumArt}
                  alt={currentTrack.title}
                  className={`h-full w-full object-cover transition-transform duration-500 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-400">
                    NOW PLAYING
                  </span>
                </div>
                <h4 className="truncate text-sm font-extrabold text-white">
                  {currentTrack.title}
                </h4>
                <p className="truncate text-xs text-zinc-400">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Middle Playback Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={handlePrevTrack}
                className="hidden sm:flex rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/5"
                title="Previous Track"
              >
                <SkipBack className="h-4 w-4" />
              </button>

              <button
                onClick={togglePlay}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
                title={isPlaying ? 'Pause Soundtrack' : 'Play Soundtrack'}
              >
                {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={handleNextTrack}
                className="hidden sm:flex rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/5"
                title="Next Track"
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="rounded-full border border-white/10 bg-[#111114] p-2 text-zinc-400 hover:text-white"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
              </button>

              <a
                href={currentTrack.spotifySearch}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20"
                title="Listen on Spotify"
              >
                <span>Spotify</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full p-2 text-zinc-400 hover:text-white"
              >
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
            </div>

          </div>

          {/* Expanded Playlist Catalog */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10 bg-[#111114] p-4 text-xs"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-zinc-300 uppercase tracking-wider font-mono">
                      SOUNDTRACK CATALOGUE
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {availableTracks.map((track) => (
                        <button
                          key={track.id}
                          onClick={() => selectTrack(track.id)}
                          className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold transition-all ${
                            currentTrack.id === track.id
                              ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                              : 'border-white/10 bg-[#18181c] text-zinc-400 hover:text-white'
                          }`}
                        >
                          {track.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <a
                    href={currentTrack.youtubeSearch}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-400 hover:bg-red-500/20 flex items-center gap-1"
                  >
                    <span>YouTube Search</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </aside>
  );
};
