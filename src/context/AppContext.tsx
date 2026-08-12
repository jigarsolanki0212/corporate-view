import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language, MoodId, OfficeZone, CorporateMoment, SongTrack, UserStats, CorporateLifeId } from '../types';
import { HINDI_MOMENTS } from '../data/hindiMoments';
import { ENGLISH_MOMENTS } from '../data/englishMoments';
import { SONGS } from '../data/songs';
import { MOODS } from '../data/moods';
import { soundFx } from '../lib/sound';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedZone: OfficeZone;
  setSelectedZone: (zone: OfficeZone) => void;
  selectedMoodId: MoodId;
  setSelectedMoodId: (moodId: MoodId) => void;
  selectedLifeProfile: CorporateLifeId;
  setSelectedLifeProfile: (profile: CorporateLifeId) => void;
  currentMomentIndex: number;
  currentMomentsList: CorporateMoment[];
  currentMoment: CorporateMoment;
  stats: UserStats;
  makeChoice: (choiceId: string) => void;
  nextMoment: () => void;
  prevMoment: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  
  // Music state
  currentTrack: SongTrack;
  availableTracks: SongTrack[];
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (vol: number) => void;
  selectTrack: (trackId: string) => void;
  
  // Biometric punch in state
  hasPunchedIn: boolean;
  punchIn: () => void;
  
  // Random / Prophecy trigger
  randomizeMoment: () => void;
  
  // Reset
  resetProgress: () => void;
}

const defaultStats: UserStats = {
  corporatePoints: 50,
  mentalHealth: 50,
  selfRespect: 50,
  momentsCompleted: 0,
  choicesMade: 0
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('hindi');
  const [selectedZone, setSelectedZoneState] = useState<OfficeZone>('reception');
  const [selectedMoodId, setSelectedMoodIdState] = useState<MoodId>('monday');
  const [selectedLifeProfile, setSelectedLifeProfileState] = useState<CorporateLifeId>('developer');
  const [currentMomentIndex, setCurrentMomentIndex] = useState<number>(0);
  const [activeTab, setActiveTabState] = useState<string>('experience');
  const [stats, setStats] = useState<UserStats>(defaultStats);
  
  const [hasPunchedIn, setHasPunchedIn] = useState<boolean>(false);

  // Filter available tracks exclusively by language
  const availableTracks = Object.values(SONGS).filter((s) => s.language === language);

  // Audio Player State
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(SONGS['hi-monday-fateh']);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.8);

  // Moments list filtered by language, mood
  const allMoments = language === 'hindi' ? HINDI_MOMENTS : ENGLISH_MOMENTS;
  const currentMomentsList = allMoments.filter((m) => m.moodId === selectedMoodId).length > 0
    ? allMoments.filter((m) => m.moodId === selectedMoodId)
    : allMoments;

  const currentMoment = currentMomentsList[currentMomentIndex % currentMomentsList.length];

  const setSelectedLifeProfile = (profile: CorporateLifeId) => {
    soundFx.playClick();
    setSelectedLifeProfileState(profile);
  };

  // Set language & auto-switch music track to matching language track
  const setLanguage = (lang: Language) => {
    soundFx.playClick();
    setLanguageState(lang);
    
    const targetMood = MOODS.find((m) => m.id === selectedMoodId);
    if (targetMood) {
      const trackId = targetMood.songTrackId[lang];
      if (SONGS[trackId]) {
        setCurrentTrack(SONGS[trackId]);
      }
    } else {
      const defaultTrack = lang === 'hindi' ? SONGS['hi-monday-fateh'] : SONGS['en-stressed-out'];
      if (defaultTrack) setCurrentTrack(defaultTrack);
    }
  };

  const setSelectedZone = (zone: OfficeZone) => {
    soundFx.playMoodSwitch();
    setSelectedZoneState(zone);
    const targetMood = MOODS.find((m) => m.zone === zone);
    if (targetMood) {
      setSelectedMoodIdState(targetMood.id);
      const trackId = targetMood.songTrackId[language];
      if (SONGS[trackId]) {
        setCurrentTrack(SONGS[trackId]);
      }
    }
  };

  const setSelectedMoodId = (moodId: MoodId) => {
    soundFx.playMoodSwitch();
    setSelectedMoodIdState(moodId);
    setCurrentMomentIndex(0);
    const targetMood = MOODS.find((m) => m.id === moodId);
    if (targetMood) {
      setSelectedZoneState(targetMood.zone);
      const trackId = targetMood.songTrackId[language];
      if (SONGS[trackId]) {
        setCurrentTrack(SONGS[trackId]);
      }
    }
  };

  const setActiveTab = (tab: string) => {
    soundFx.playClick();
    setActiveTabState(tab);
  };

  const punchIn = () => {
    soundFx.playPunchIn();
    setHasPunchedIn(true);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    soundFx.playClick();
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundFx.setMuted(nextMute);
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
  };

  const selectTrack = (trackId: string) => {
    soundFx.playClick();
    if (SONGS[trackId]) {
      setCurrentTrack(SONGS[trackId]);
      setIsPlaying(true);
    }
  };

  const nextMoment = () => {
    soundFx.playClick();
    setCurrentMomentIndex((prev) => (prev + 1) % currentMomentsList.length);
  };

  const prevMoment = () => {
    soundFx.playClick();
    setCurrentMomentIndex((prev) => (prev - 1 + currentMomentsList.length) % currentMomentsList.length);
  };

  const makeChoice = (choiceId: string) => {
    soundFx.playScoreTick();
    const choice = currentMoment.choices.find((c) => c.id === choiceId);
    if (choice) {
      setStats((prev) => ({
        corporatePoints: Math.min(100, Math.max(0, prev.corporatePoints + choice.points.corporate)),
        mentalHealth: Math.min(100, Math.max(0, prev.mentalHealth + choice.points.mentalHealth)),
        selfRespect: Math.min(100, Math.max(0, prev.selfRespect + choice.points.selfRespect)),
        momentsCompleted: prev.momentsCompleted + 1,
        choicesMade: prev.choicesMade + 1
      }));
    }
  };

  const randomizeMoment = () => {
    soundFx.playClick();
    const allMoods: MoodId[] = ['monday', 'meeting', 'salary', 'burnout', 'boss', 'resignation', 'friday', 'appraisal', 'developer', 'startup'];
    const randomMood = allMoods[Math.floor(Math.random() * allMoods.length)];
    setSelectedMoodId(randomMood);
  };

  const resetProgress = () => {
    soundFx.playClick();
    setStats(defaultStats);
    setCurrentMomentIndex(0);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        selectedZone,
        setSelectedZone,
        selectedMoodId,
        setSelectedMoodId,
        selectedLifeProfile,
        setSelectedLifeProfile,
        currentMomentIndex,
        currentMomentsList,
        currentMoment,
        stats,
        makeChoice,
        nextMoment,
        prevMoment,
        activeTab,
        setActiveTab,
        currentTrack,
        availableTracks,
        isPlaying,
        isMuted,
        volume,
        togglePlay,
        toggleMute,
        setVolume,
        selectTrack,
        hasPunchedIn,
        punchIn,
        randomizeMoment,
        resetProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
