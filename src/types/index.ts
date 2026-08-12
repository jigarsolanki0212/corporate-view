export type Language = 'hindi' | 'english';

export type OfficeZone = 'reception' | 'cubicle' | 'chai' | 'canteen' | 'gamezone' | 'washroom';

export type CorporateLifeId = 'developer' | 'corporate' | 'startup' | 'remote' | 'fresher' | 'manager';

export type MoodId =
  | 'monday'
  | 'meeting'
  | 'salary'
  | 'burnout'
  | 'boss'
  | 'resignation'
  | 'friday'
  | 'appraisal'
  | 'developer'
  | 'startup';

export interface Mood {
  id: MoodId;
  zone: OfficeZone;
  iconName: 'coffee' | 'phone-call' | 'banknote' | 'zap' | 'user-check' | 'log-out' | 'party-popper' | 'trending-up' | 'terminal' | 'rocket';
  name: {
    hindi: string;
    english: string;
  };
  tagline: {
    hindi: string;
    english: string;
  };
  accentColor: string;
  gradient: string;
  bgGradient: string;
  songTrackId: {
    hindi: string;
    english: string;
  };
}

export interface Choice {
  id: string;
  label: {
    hindi: string;
    english: string;
  };
  consequence: {
    hindi: string;
    english: string;
  };
  points: {
    corporate: number;
    mentalHealth: number;
    selfRespect: number;
  };
}

export interface CorporateMoment {
  id: string;
  moodId: MoodId;
  zone: OfficeZone;
  language: Language;
  category: 'general' | 'developer' | 'startup' | 'hr' | 'management';
  situation: string;
  quote: string;
  subtext: string;
  joke: string;
  songTrackId: string;
  songTitle: string;
  songArtist: string;
  songCorporateTagline: string;
  songMood: string;
  songUrl?: string;
  choices: Choice[];
}

export interface SongTrack {
  id: string;
  language: Language;
  title: string;
  artist: string;
  tagline: {
    hindi: string;
    english: string;
  };
  albumArt: string;
  genre: string;
  duration: number;
  bpm: number;
  youtubeSearch: string;
  spotifySearch: string;
  audioFreq?: number[];
}

export interface TranslatorItem {
  id: string;
  corporatePhrase: {
    hindi: string;
    english: string;
  };
  humanMeaning: {
    hindi: string;
    english: string;
  };
  context: string;
  severity: 'Mild' | 'Medium' | 'Critical' | 'Career Ending';
}

export interface DictionaryItem {
  term: string;
  pronunciation?: string;
  definition: {
    hindi: string;
    english: string;
  };
  exampleSentence: {
    hindi: string;
    english: string;
  };
  category: string;
}

export interface QuizQuestion {
  id: number;
  question: {
    hindi: string;
    english: string;
  };
  options: {
    id: string;
    text: {
      hindi: string;
      english: string;
    };
    personalityWeight: Record<string, number>;
  }[];
}

export interface PersonalityType {
  id: string;
  title: {
    hindi: string;
    english: string;
  };
  tagline: {
    hindi: string;
    english: string;
  };
  description: {
    hindi: string;
    english: string;
  };
  survivalRate: number;
  stats: {
    meetingsSurvived: number;
    fakeFineCount: number;
    notedSent: number;
    coffeesConsumed: number;
    resignationThoughts: number;
  };
  soundtrack: {
    hindi: string;
    english: string;
  };
  badge: string;
  accentColor: string;
}

export interface UserStats {
  corporatePoints: number;
  mentalHealth: number;
  selfRespect: number;
  momentsCompleted: number;
  choicesMade: number;
}
