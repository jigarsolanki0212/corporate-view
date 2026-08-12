import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language, MoodId, OfficeZone, CorporateMoment, SongTrack, UserStats, CorporateLifeId, OfficeRoomId } from '../types';
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
  
  // Office World Room State
  currentRoom: OfficeRoomId;
  navigateToRoom: (roomId: OfficeRoomId) => void;
  discoveredRooms: string[];
  discoveries: string[];
  addDiscovery: (discoveryId: string) => void;
  officeTime: string;

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
  
  // Punch in state
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

const ROOM_TIMES: Record<OfficeRoomId, string> = {
  exterior: '08:58 AM',
  reception: '09:02 AM',
  developer: '10:15 AM',
  meeting: '11:30 AM',
  boss: '01:45 PM',
  hr: '03:10 PM',
  cafeteria: '04:20 PM',
  break: '04:57 PM',
  exit: '05:59 PM'
};

const ROOM_MOOD_MAP: Record<OfficeRoomId, MoodId> = {
  exterior: 'monday',
  reception: 'monday',
  developer: 'developer',
  meeting: 'meeting',
  boss: 'boss',
  hr: 'appraisal',
  cafeteria: 'salary',
  break: 'friday',
  exit: 'resignation'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('hindi');
  const [selectedZone, setSelectedZoneState] = useState<OfficeZone>('reception');
  const [selectedMoodId, setSelectedMoodIdState] = useState<MoodId>('monday');
  const [selectedLifeProfile, setSelectedLifeProfileState] = useState<CorporateLifeId>('developer');
  
  // Office World State
  const [currentRoom, setCurrentRoomState] = useState<OfficeRoomId>('exterior');
  const [discoveredRooms, setDiscoveredRooms] = useState<string[]>(['exterior']);
  const [discoveries, setDiscoveries] = useState<string[]>([]);
  const [officeTime, setOfficeTime] = useState<string>('08:58 AM');

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

  const navigateToRoom = (roomId: OfficeRoomId) => {
    soundFx.playMoodSwitch();
    setCurrentRoomState(roomId);
    if (!discoveredRooms.includes(roomId)) {
      setDiscoveredRooms((prev) => [...prev, roomId]);
    }
    if (ROOM_TIMES[roomId]) {
      setOfficeTime(ROOM_TIMES[roomId]);
    }
    const targetMoodId = ROOM_MOOD_MAP[roomId];
    if (targetMoodId) {
      setSelectedMoodIdState(targetMoodId);
      const targetMood = MOODS.find((m) => m.id === targetMoodId);
      if (targetMood) {
        const trackId = targetMood.songTrackId[language];
        if (SONGS[trackId]) {
          setCurrentTrack(SONGS[trackId]);
        }
      }
    }
  };

  const addDiscovery = (discoveryId: string) => {
    if (!discoveries.includes(discoveryId)) {
      soundFx.playTrophyUnlock();
      setDiscoveries((prev) => [...prev, discoveryId]);
    }
  };

  const setSelectedLifeProfile = (profile: CorporateLifeId) => {
    soundFx.playClick();
    setSelectedLifeProfileState(profile);
  };

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
    const choice = currentMoment?.choices.find((c) => c.id === choiceId);
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
    const allRooms: OfficeRoomId[] = ['reception', 'developer', 'meeting', 'boss', 'hr', 'cafeteria', 'break'];
    const randomRoom = allRooms[Math.floor(Math.random() * allRooms.length)];
    navigateToRoom(randomRoom);
  };

  const resetProgress = () => {
    soundFx.playClick();
    setStats(defaultStats);
    setCurrentMomentIndex(0);
    setCurrentRoomState('exterior');
    setDiscoveredRooms(['exterior']);
    setDiscoveries([]);
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
        currentRoom,
        navigateToRoom,
        discoveredRooms,
        discoveries,
        addDiscovery,
        officeTime,
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
