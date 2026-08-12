import type { OfficeZone } from '../types';

export interface OfficeZoneMeta {
  id: OfficeZone;
  name: {
    hindi: string;
    english: string;
  };
  subtitle: {
    hindi: string;
    english: string;
  };
  iconName: 'building-2' | 'laptop' | 'coffee' | 'utensils' | 'gamepad-2' | 'door-closed';
  accentColor: string;
  gradient: string;
  bgAtmosphere: string;
  soundTag: string;
}

export const OFFICE_ZONES: OfficeZoneMeta[] = [
  {
    id: 'reception',
    name: {
      hindi: 'RECEPTION DESK',
      english: 'RECEPTION DESK'
    },
    subtitle: {
      hindi: 'Biometric Attendance Scanner & HR Gatekeeper',
      english: 'Biometric Attendance Scanner & HR Gatekeeper'
    },
    iconName: 'building-2',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    bgAtmosphere: 'from-cyan-950/60 via-zinc-950 to-black',
    soundTag: 'Biometric Punch Beep'
  },
  {
    id: 'cubicle',
    name: {
      hindi: 'THE CUBICLE DESK',
      english: 'THE CUBICLE DESK'
    },
    subtitle: {
      hindi: 'Dual Screens, Slack DMs & Alt+Tab Speed Run',
      english: 'Dual Screens, Slack DMs & Alt+Tab Speed Run'
    },
    iconName: 'laptop',
    accentColor: '#a855f7',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    bgAtmosphere: 'from-purple-950/60 via-zinc-950 to-black',
    soundTag: 'Aggressive Keyboard Typing'
  },
  {
    id: 'chai',
    name: {
      hindi: 'CHAI BREAK / TAPRI',
      english: 'CHAI BREAK / TAPRI'
    },
    subtitle: {
      hindi: 'Kulhad Chai & Emergency Therapy Session',
      english: 'Kulhad Chai & Emergency Therapy Session'
    },
    iconName: 'coffee',
    accentColor: '#f59e0b',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    bgAtmosphere: 'from-amber-950/60 via-zinc-950 to-black',
    soundTag: 'Chai Sip & Lighter Flick'
  },
  {
    id: 'canteen',
    name: {
      hindi: 'CANTEEN & LUNCH TABLE',
      english: 'CANTEEN & LUNCH TABLE'
    },
    subtitle: {
      hindi: 'Salary Day Feast, Free Pizza & Swiggy Treats',
      english: 'Salary Day Feast, Free Pizza & Swiggy Treats'
    },
    iconName: 'utensils',
    accentColor: '#10b981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    bgAtmosphere: 'from-emerald-950/60 via-zinc-950 to-black',
    soundTag: 'Plate Clink & Swiggy Ring'
  },
  {
    id: 'gamezone',
    name: {
      hindi: 'BREAK ROOM & GAME ZONE',
      english: 'BREAK ROOM & GAME ZONE'
    },
    subtitle: {
      hindi: 'Foosball, Bean Bags & Friday 4:57 PM Chilling',
      english: 'Foosball, Bean Bags & Friday 4:57 PM Chilling'
    },
    iconName: 'gamepad-2',
    accentColor: '#ec4899',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    bgAtmosphere: 'from-pink-950/60 via-zinc-950 to-black',
    soundTag: 'Ping-Pong Ball & PS5 Startup'
  },
  {
    id: 'washroom',
    name: {
      hindi: 'WASHROOM ESCAPE BOOTH',
      english: 'WASHROOM ESCAPE BOOTH'
    },
    subtitle: {
      hindi: 'Emergency Sanctuary for Crying in Peace',
      english: 'Emergency Sanctuary for Crying in Peace'
    },
    iconName: 'door-closed',
    accentColor: '#f43f5e',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    bgAtmosphere: 'from-rose-950/60 via-zinc-950 to-black',
    soundTag: 'Water Faucet & Silent Cry'
  }
];
