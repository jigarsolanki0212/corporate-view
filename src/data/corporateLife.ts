import type { CorporateLifeId } from '../types';

export interface CorporateLifeProfile {
  id: CorporateLifeId;
  title: {
    hindi: string;
    english: string;
  };
  quote: {
    hindi: string;
    english: string;
  };
  iconName: 'terminal' | 'building' | 'rocket' | 'home' | 'graduation-cap' | 'briefcase';
  accentColor: string;
}

export const CORPORATE_LIFE_PROFILES: CorporateLifeProfile[] = [
  {
    id: 'developer',
    title: {
      hindi: 'DEVELOPER',
      english: 'DEVELOPER'
    },
    quote: {
      hindi: 'Production is just staging with consequences.',
      english: 'Production is just staging with consequences.'
    },
    iconName: 'terminal',
    accentColor: '#60a5fa'
  },
  {
    id: 'corporate',
    title: {
      hindi: 'CORPORATE',
      english: 'CORPORATE'
    },
    quote: {
      hindi: "Let's circle back on this offline.",
      english: "Let's circle back on this offline."
    },
    iconName: 'building',
    accentColor: '#a855f7'
  },
  {
    id: 'startup',
    title: {
      hindi: 'STARTUP',
      english: 'STARTUP'
    },
    quote: {
      hindi: 'Unlimited learning. Unlimited responsibilities.',
      english: 'Unlimited learning. Unlimited responsibilities.'
    },
    iconName: 'rocket',
    accentColor: '#ff4d8d'
  },
  {
    id: 'remote',
    title: {
      hindi: 'REMOTE WORKER',
      english: 'REMOTE WORKER'
    },
    quote: {
      hindi: 'Working from home. Living in meetings.',
      english: 'Working from home. Living in meetings.'
    },
    iconName: 'home',
    accentColor: '#22c55e'
  },
  {
    id: 'fresher',
    title: {
      hindi: 'FRESHER',
      english: 'FRESHER'
    },
    quote: {
      hindi: 'First job. First existential crisis.',
      english: 'First job. First existential crisis.'
    },
    iconName: 'graduation-cap',
    accentColor: '#f59e0b'
  },
  {
    id: 'manager',
    title: {
      hindi: 'MANAGER',
      english: 'MANAGER'
    },
    quote: {
      hindi: 'Everyone needs something from you urgently.',
      english: 'Everyone needs something from you urgently.'
    },
    iconName: 'briefcase',
    accentColor: '#fb7185'
  }
];
