import type { SongTrack } from '../types';

export const SONGS: Record<string, SongTrack> = {
  // ==================== HINDI / BOLLYWOOD SONGS ====================
  'hi-monday-fateh': {
    id: 'hi-monday-fateh',
    language: 'hindi',
    title: 'Kar Har Monday Fateh',
    artist: 'Corporate Survival Choir (Sanju Theme)',
    tagline: {
      hindi: 'Bas alarm snooze mat karo. Baaki dekha jayega.',
      english: 'Survive the 9 AM sync without losing your soul.'
    },
    albumArt: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    genre: 'Bollywood Rock',
    duration: 210,
    bpm: 128,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Kar+Har+Maidaan+Fateh',
    spotifySearch: 'https://open.spotify.com/search/Kar%20Har%20Maidaan%20Fateh',
    audioFreq: [40, 65, 80, 50, 90, 70, 45, 85]
  },
  'hi-salary-party': {
    id: 'hi-salary-party',
    language: 'hindi',
    title: 'Aaj Salary Aayi Hai (Party All Night)',
    artist: 'Credit Alert Beats (Bajrangi Bhaijaan)',
    tagline: {
      hindi: '11 minute tak main capitalist hoon.',
      english: 'Rich for 14 minutes until rent & EMIs auto-debit.'
    },
    albumArt: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&auto=format&fit=crop&q=80',
    genre: 'Bhangra Party',
    duration: 195,
    bpm: 135,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Aaj+Ki+Party+Bajrangi+Bhaijaan',
    spotifySearch: 'https://open.spotify.com/search/Aaj%20Ki%20Party',
    audioFreq: [80, 95, 100, 85, 90, 95, 70, 88]
  },
  'hi-channa-resignation': {
    id: 'hi-channa-resignation',
    language: 'hindi',
    title: 'Channa Mereya (Notice Period Mix)',
    artist: 'Arijit Singh & HR Team (Ae Dil Hai Mushkil)',
    tagline: {
      hindi: 'Achha chalte hain, duaaon mein remember rakhna.',
      english: 'Sending the final farewell mail to All-Company.'
    },
    albumArt: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&auto=format&fit=crop&q=80',
    genre: 'Melancholic Farewell',
    duration: 240,
    bpm: 90,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Channa+Mereya',
    spotifySearch: 'https://open.spotify.com/search/Channa%20Mereya',
    audioFreq: [25, 45, 60, 35, 50, 40, 30, 20]
  },
  'hi-burnout-ilahi': {
    id: 'hi-burnout-ilahi',
    language: 'hindi',
    title: 'Ilahi (Laptop Off & Leave Mix)',
    artist: 'Arijit Singh (YJHD Anthem)',
    tagline: {
      hindi: 'Bas ek baar laptop band karke Pahad nikal jaana hai.',
      english: 'Close Slack, pack bags, vanish to the mountains.'
    },
    albumArt: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&auto=format&fit=crop&q=80',
    genre: 'Acoustic Travel',
    duration: 215,
    bpm: 110,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Ilahi+Yeh+Jawaani+Hai+Deewani',
    spotifySearch: 'https://open.spotify.com/search/Ilahi',
    audioFreq: [45, 60, 70, 80, 65, 50, 55, 40]
  },
  'hi-friday-parinday': {
    id: 'hi-friday-parinday',
    language: 'hindi',
    title: 'Khaabon Ke Parinday (Weekend Freedom)',
    artist: 'Mohit Chauhan (ZNMD Chill)',
    tagline: {
      hindi: 'Productivity 4:57 ke baad office chhod ke chali gayi.',
      english: 'My mind is already sitting in a Friday evening cafe.'
    },
    albumArt: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=80',
    genre: 'Acoustic Chill',
    duration: 188,
    bpm: 98,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Khaabon+Ke+Parinday',
    spotifySearch: 'https://open.spotify.com/search/Khaabon%20Ke%20Parinday',
    audioFreq: [35, 55, 65, 75, 80, 60, 50, 45]
  },
  'hi-boss-dhoom': {
    id: 'hi-boss-dhoom',
    language: 'hindi',
    title: 'Boss Calling Warning Siren (Dhoom Theme)',
    artist: 'Pritam & Calendar Invaders',
    tagline: {
      hindi: 'Boss ka message "Free?" matlab keyboard pe pray karo.',
      english: '"Are you free for 2 mins?" - Famous last words.'
    },
    albumArt: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&auto=format&fit=crop&q=80',
    genre: 'High Action Theme',
    duration: 175,
    bpm: 130,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Dhoom+3+Instrumental+Theme',
    spotifySearch: 'https://open.spotify.com/search/Dhoom%20Theme',
    audioFreq: [50, 70, 90, 100, 75, 60, 85, 90]
  },
  'hi-dev-sholay': {
    id: 'hi-dev-sholay',
    language: 'hindi',
    title: 'Ye Dosti Dev Hum Nahi Todenge',
    artist: 'Kishore Kumar (StackOverflow Dev Mix)',
    tagline: {
      hindi: 'Mere machine pe chal raha tha... staging pe pata nahi kya hua.',
      english: 'It worked on localhost, now AWS is screaming.'
    },
    albumArt: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    genre: 'Retro Classic',
    duration: 200,
    bpm: 120,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Yeh+Dosti+Hum+Nahi+Todenge',
    spotifySearch: 'https://open.spotify.com/search/Yeh%20Dosti',
    audioFreq: [60, 75, 85, 90, 70, 80, 85, 75]
  },
  'hi-appraisal-dil': {
    id: 'hi-appraisal-dil',
    language: 'hindi',
    title: 'Dil Chahta Hai (Hike Ki Tanhai)',
    artist: 'Shankar Ehsaan Loy (Appraisal Season)',
    tagline: {
      hindi: 'Performance exceptional hai, par budget nahi hai.',
      english: 'Exceeding expectations, 2.4% raise.'
    },
    albumArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80',
    genre: 'Bollywood Classic',
    duration: 210,
    bpm: 105,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Dil+Chahta+Hai+Title+Track',
    spotifySearch: 'https://open.spotify.com/search/Dil%20Chahta%20Hai',
    audioFreq: [40, 55, 65, 80, 60, 50, 70, 65]
  },

  // ==================== ENGLISH POP / ROCK SONGS ====================
  'en-stressed-out': {
    id: 'en-stressed-out',
    language: 'english',
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    tagline: {
      hindi: 'Wish we could turn back time...',
      english: 'Wish we could turn back time, before the 9 AM sync.'
    },
    albumArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80',
    genre: 'Alternative Pop',
    duration: 202,
    bpm: 120,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Stressed+Out+Twenty+One+Pilots',
    spotifySearch: 'https://open.spotify.com/search/Stressed%20Out',
    audioFreq: [30, 50, 75, 95, 60, 40, 80, 55]
  },
  'en-break-free': {
    id: 'en-break-free',
    language: 'english',
    title: 'I Want to Break Free',
    artist: 'Queen',
    tagline: {
      hindi: 'Notice period freedom anthem.',
      english: 'The ultimate notice period resignation anthem.'
    },
    albumArt: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&auto=format&fit=crop&q=80',
    genre: 'Classic Rock',
    duration: 223,
    bpm: 112,
    youtubeSearch: 'https://www.youtube.com/results?search_query=I+Want+To+Break+Free+Queen',
    spotifySearch: 'https://open.spotify.com/search/I%20Want%20To%20Break%20Free',
    audioFreq: [50, 70, 85, 90, 75, 60, 80, 70]
  },
  'en-harder-better': {
    id: 'en-harder-better',
    language: 'english',
    title: 'Harder, Better, Faster, Stronger',
    artist: 'Daft Punk',
    tagline: {
      hindi: 'Overtime Grind Anthem.',
      english: 'Work it, make it, do it, makes us overwork.'
    },
    albumArt: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&auto=format&fit=crop&q=80',
    genre: 'Electronic Synthwave',
    duration: 224,
    bpm: 123,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Daft+Punk+Harder+Better+Faster+Stronger',
    spotifySearch: 'https://open.spotify.com/search/Harder%20Better%20Faster%20Stronger',
    audioFreq: [85, 90, 95, 100, 90, 85, 95, 90]
  },
  'en-bitch-money': {
    id: 'en-bitch-money',
    language: 'english',
    title: 'Bitch Better Have My Money',
    artist: 'Rihanna',
    tagline: {
      hindi: 'Salary Direct Deposit Day.',
      english: 'When direct deposit hits your account at 12:01 AM.'
    },
    albumArt: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&auto=format&fit=crop&q=80',
    genre: 'Hip-Hop Trap',
    duration: 219,
    bpm: 103,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Rihanna+Bitch+Better+Have+My+Money',
    spotifySearch: 'https://open.spotify.com/search/Bitch%20Better%20Have%20My%20Money',
    audioFreq: [90, 95, 100, 85, 95, 90, 80, 85]
  },
  'en-friday-love': {
    id: 'en-friday-love',
    language: 'english',
    title: 'Friday I\'m in Love',
    artist: 'The Cure',
    tagline: {
      hindi: 'Friday 4:57 PM Slack off.',
      english: 'Productivity officially left at 4:57 PM.'
    },
    albumArt: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=80',
    genre: 'Indie Pop',
    duration: 215,
    bpm: 136,
    youtubeSearch: 'https://www.youtube.com/results?search_query=The+Cure+Friday+Im+In+Love',
    spotifySearch: 'https://open.spotify.com/search/Friday%20Im%20In%20Love',
    audioFreq: [40, 60, 75, 85, 70, 55, 65, 60]
  },
  'en-eye-tiger': {
    id: 'en-eye-tiger',
    language: 'english',
    title: 'Eye of the Tiger',
    artist: 'Survivor',
    tagline: {
      hindi: 'Surviving 6 back-to-back calls.',
      english: 'Surviving 6 back-to-back calls without screaming.'
    },
    albumArt: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&auto=format&fit=crop&q=80',
    genre: 'Arena Rock',
    duration: 245,
    bpm: 109,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Eye+of+the+Tiger+Survivor',
    spotifySearch: 'https://open.spotify.com/search/Eye%20of%20the%20Tiger',
    audioFreq: [70, 85, 95, 90, 80, 75, 85, 90]
  },
  'en-radioactive': {
    id: 'en-radioactive',
    language: 'english',
    title: 'Radioactive',
    artist: 'Imagine Dragons',
    tagline: {
      hindi: 'Production hotfix alert.',
      english: 'AWS server down, hotfix deployed to prod.'
    },
    albumArt: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80',
    genre: 'Alternative Rock',
    duration: 186,
    bpm: 136,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Imagine+Dragons+Radioactive',
    spotifySearch: 'https://open.spotify.com/search/Radioactive',
    audioFreq: [85, 95, 100, 90, 85, 95, 90, 85]
  },
  'en-welcome-jungle': {
    id: 'en-welcome-jungle',
    language: 'english',
    title: 'Welcome to the Jungle',
    artist: 'Guns N\' Roses',
    tagline: {
      hindi: 'Startup chaos hustle.',
      english: '12-person startup all-hands meeting.'
    },
    albumArt: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    genre: 'Hard Rock',
    duration: 271,
    bpm: 125,
    youtubeSearch: 'https://www.youtube.com/results?search_query=Welcome+To+The+Jungle+Guns+N+Roses',
    spotifySearch: 'https://open.spotify.com/search/Welcome%20to%20the%20Jungle',
    audioFreq: [80, 90, 95, 100, 85, 90, 95, 90]
  }
};
