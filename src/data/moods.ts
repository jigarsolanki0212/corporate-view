import type { Mood } from '../types';

export const MOODS: Mood[] = [
  {
    id: 'monday',
    zone: 'reception',
    iconName: 'coffee',
    name: {
      hindi: 'MONDAY MODE',
      english: 'MONDAY BLUES'
    },
    tagline: {
      hindi: 'Body is in office. Soul is still in Sunday.',
      english: 'Body office mein hai. Aatma abhi Sunday pe hai.'
    },
    accentColor: '#f43f5e',
    gradient: 'from-rose-500/10 via-pink-500/5 to-transparent',
    bgGradient: 'from-rose-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-monday-fateh',
      english: 'en-stressed-out'
    }
  },
  {
    id: 'meeting',
    zone: 'cubicle',
    iconName: 'phone-call',
    name: {
      hindi: 'MEETING HELL',
      english: 'MEETING HELL'
    },
    tagline: {
      hindi: 'Ek aur meeting... jo ek Slack message mein ho sakti thi.',
      english: 'Another 45-minute meeting that could have been an email.'
    },
    accentColor: '#f97316',
    gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
    bgGradient: 'from-orange-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-boss-dhoom',
      english: 'en-eye-tiger'
    }
  },
  {
    id: 'salary',
    zone: 'canteen',
    iconName: 'banknote',
    name: {
      hindi: 'SALARY DAY',
      english: 'SALARY DAY'
    },
    tagline: {
      hindi: 'Salary aayi hai. Aaj company achhi lag rahi hai.',
      english: 'Suddenly, I love my job and my manager.'
    },
    accentColor: '#10b981',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    bgGradient: 'from-emerald-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-salary-party',
      english: 'en-bitch-money'
    }
  },
  {
    id: 'burnout',
    zone: 'washroom',
    iconName: 'zap',
    name: {
      hindi: 'BURNOUT MODE',
      english: 'BURNOUT MODE'
    },
    tagline: {
      hindi: 'Laptop 100% pe hai. Main 3% pe.',
      english: 'My laptop battery has more energy than my soul.'
    },
    accentColor: '#a855f7',
    gradient: 'from-purple-500/10 via-violet-500/5 to-transparent',
    bgGradient: 'from-purple-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-burnout-ilahi',
      english: 'en-harder-better'
    }
  },
  {
    id: 'boss',
    zone: 'cubicle',
    iconName: 'user-check',
    name: {
      hindi: 'BOSS MODE',
      english: 'BOSS WATCH'
    },
    tagline: {
      hindi: 'Aaj bas itna busy dikhna hai ki naya kaam na mile.',
      english: 'Looking aggressively engaged to avoid getting handed tasks.'
    },
    accentColor: '#eab308',
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    bgGradient: 'from-amber-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-boss-dhoom',
      english: 'en-eye-tiger'
    }
  },
  {
    id: 'resignation',
    zone: 'washroom',
    iconName: 'log-out',
    name: {
      hindi: 'RESIGNATION MODE',
      english: 'MENTALLY RESIGNED'
    },
    tagline: {
      hindi: 'Aaj 14 baar mann mein resign kar chuka hoon.',
      english: 'Mentally resigned at 10:15 AM. Physically present till 6:00 PM.'
    },
    accentColor: '#ec4899',
    gradient: 'from-pink-500/10 via-rose-500/5 to-transparent',
    bgGradient: 'from-pink-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-channa-resignation',
      english: 'en-break-free'
    }
  },
  {
    id: 'friday',
    zone: 'gamezone',
    iconName: 'party-popper',
    name: {
      hindi: 'FRIDAY ENERGY',
      english: 'FRIDAY ENERGY'
    },
    tagline: {
      hindi: '4:57 ke baad kaam karna company ke khilaaf hai.',
      english: 'Productivity officially left the building at 4:57 PM.'
    },
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
    bgGradient: 'from-cyan-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-friday-parinday',
      english: 'en-friday-love'
    }
  },
  {
    id: 'appraisal',
    zone: 'reception',
    iconName: 'trending-up',
    name: {
      hindi: 'APPRAISAL SEASON',
      english: 'APPRAISAL SEASON'
    },
    tagline: {
      hindi: '"Performance achhi hai!" - "Toh increment?" - "Let us not get emotional."',
      english: 'Exceeding all expectations, receiving a 2.4% raise.'
    },
    accentColor: '#8b5cf6',
    gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    bgGradient: 'from-indigo-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-appraisal-dil',
      english: 'en-stressed-out'
    }
  },
  {
    id: 'developer',
    zone: 'cubicle',
    iconName: 'terminal',
    name: {
      hindi: 'DEVELOPER CORPORATE',
      english: 'DEV LIFE / PROD ON FIRE'
    },
    tagline: {
      hindi: 'Client: "Bas chhota sa UI change hai." Dev: *internally screaming*',
      english: 'Works on my machine. Staging is down. AWS is on fire.'
    },
    accentColor: '#3b82f6',
    gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    bgGradient: 'from-blue-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-dev-sholay',
      english: 'en-radioactive'
    }
  },
  {
    id: 'startup',
    zone: 'chai',
    iconName: 'rocket',
    name: {
      hindi: 'STARTUP CHAOS',
      english: 'STARTUP CHAOS'
    },
    tagline: {
      hindi: '"Unlimited learning" matlab unlimited responsibilities, no sleep.',
      english: 'Wearing 9 hats, getting paid for half of 1.'
    },
    accentColor: '#10b981',
    gradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
    bgGradient: 'from-teal-950/40 via-zinc-950 to-black',
    songTrackId: {
      hindi: 'hi-monday-fateh',
      english: 'en-welcome-jungle'
    }
  }
];
