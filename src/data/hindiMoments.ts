import type { CorporateMoment } from '../types';

export const HINDI_MOMENTS: CorporateMoment[] = [
  {
    id: 'hi-mon-1',
    moodId: 'monday',
    zone: 'reception',
    language: 'hindi',
    category: 'general',
    situation: 'Monday Morning 9:00 AM Alarm & Biometric Punch',
    quote: 'Monday se problem nahi hai. Problem ye hai ki Monday ke baad Tuesday bhi aata hai.',
    subtext: 'Body is in office. Soul is still in Sunday.',
    joke: 'Alarm baje toh dimag bolta hai "Resign kar de", aur wallet bolta hai "Quietly laptop khol aur Slack status Active kar."',
    songTrackId: 'hi-monday-fateh',
    songTitle: 'Kar Har Monday Fateh',
    songArtist: 'Corporate Survival Choir (Sanju Theme)',
    songCorporateTagline: 'HR ko mail kar diya. Ab Kar Har Monday Fateh bajega.',
    songMood: 'Existentially Employed',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Quietly login karke status "In a meeting" kar do', english: 'Set Slack status to "In a meeting"' },
        consequence: { hindi: '+15 Stealth, -5 Mental Stress. You survived till 11 AM.', english: '+15 Stealth, -5 Mental Stress' },
        points: { corporate: 5, mentalHealth: 15, selfRespect: 10 }
      },
      {
        id: 'c2',
        label: { hindi: 'Chai banane chale jao, laptop open chhod ke', english: 'Go get Chai, leaving laptop unlocked' },
        consequence: { hindi: 'Chai test passed. Mind refreshed, work still 0%.', english: 'Chai test passed.' },
        points: { corporate: -5, mentalHealth: 25, selfRespect: 15 }
      },
      {
        id: 'c3',
        label: { hindi: 'Manager ko text karo: "Feeling unwell, taking SL"', english: 'Text manager: "Taking Sick Leave"' },
        consequence: { hindi: '+100 Freedom today, but Monday 2.0 comes tomorrow.', english: '+100 Freedom today' },
        points: { corporate: -20, mentalHealth: 50, selfRespect: 30 }
      }
    ]
  },
  {
    id: 'hi-meet-1',
    moodId: 'meeting',
    zone: 'cubicle',
    language: 'hindi',
    category: 'management',
    situation: 'Boss asks: "Quick call?" on Teams',
    quote: 'Quick call? Matlab ab agle 47 minute tumhare nahi rahe.',
    subtext: 'Cancel whatever plans you had for the afternoon.',
    joke: 'Boss: "5 minute free ho?" -> Me: Ab toh phone bhi silent kar diya aur apna will draft karna start kar diya.',
    songTrackId: 'hi-boss-dhoom',
    songTitle: 'Boss Calling Warning Siren (Dhoom Theme)',
    songArtist: 'Pritam & Calendar Invaders',
    songCorporateTagline: 'Meeting ka agenda: Meeting decide karna ki next meeting kab hogi.',
    songMood: 'Calendar Panic',
    choices: [
      {
        id: 'c1',
        label: { hindi: '"Sure Sir, joining!" (While internally screaming)', english: '"Sure Sir, joining!"' },
        consequence: { hindi: '+10 Corporate Points, -30 Peace. 5 mins became 55 mins.', english: '+10 Corporate, -30 Peace' },
        points: { corporate: 10, mentalHealth: -30, selfRespect: -10 }
      },
      {
        id: 'c2',
        label: { hindi: '"In client sync. Can we take this tomorrow?"', english: '"In client sync. Tomorrow?"' },
        consequence: { hindi: '+25 Professionalism, Crisis averted for 24 hours.', english: '+25 Professionalism' },
        points: { corporate: 15, mentalHealth: 20, selfRespect: 20 }
      },
      {
        id: 'c3',
        label: { hindi: 'Seen pe chhod ke Wi-Fi disconnect kar do', english: 'Leave on Seen & pull Wi-Fi plug' },
        consequence: { hindi: '+100 Risk, HR is now looking at your profile.', english: '+100 Risk' },
        points: { corporate: -50, mentalHealth: 40, selfRespect: 50 }
      }
    ]
  },
  {
    id: 'hi-sal-1',
    moodId: 'salary',
    zone: 'canteen',
    language: 'hindi',
    category: 'general',
    situation: 'Bank SMS: "INR XX,XXX Credited to A/C"',
    quote: 'Salary credit hui. Aaj company aur manager dono achhe lag rahe hain.',
    subtext: 'For approximately 11 minutes, I became a capitalist.',
    joke: 'Salary standard rule: 14 minute mein Swiggy, Credit Card aur Rent le ke nikal jaata hai. Emotion khatam.',
    songTrackId: 'hi-salary-party',
    songTitle: 'Aaj Salary Aayi Hai (Party All Night)',
    songArtist: 'Credit Alert Beats (Bajrangi Bhaijaan)',
    songCorporateTagline: 'Aaj Swiggy pe Gourmet Zomato Gold order hoga.',
    songMood: 'Temporarily Rich',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Office friends ko Swiggy / Coffee treat do', english: 'Treat office friends to coffee' },
        consequence: { hindi: 'Popularity +20, Bank balance back to critical in 2 hours.', english: 'Popularity +20' },
        points: { corporate: 10, mentalHealth: 20, selfRespect: 10 }
      },
      {
        id: 'c2',
        label: { hindi: 'Pura paisa SIP aur EMI mein transfer kar do', english: 'Transfer to Mutual Funds & EMIs' },
        consequence: { hindi: 'Adulting level 100 achieved. Happiness 0%.', english: 'Adulting level 100' },
        points: { corporate: 20, mentalHealth: -5, selfRespect: 25 }
      }
    ]
  },
  {
    id: 'hi-burn-1',
    moodId: 'burnout',
    zone: 'washroom',
    language: 'hindi',
    category: 'general',
    situation: 'Working overtime at 8:30 PM on a Thursday',
    quote: 'Laptop 100% battery pe hai. Main 3% pe.',
    subtext: 'Work-life balance? Work ne balance hi kha liya.',
    joke: 'Company pehle bolti hai "We are like a family." Phir family aath baje tak slide deck kyun banwa rahi hai?',
    songTrackId: 'hi-burnout-ilahi',
    songTitle: 'Ilahi (Laptop Off & Leave Mix)',
    songArtist: 'Arijit Singh (YJHD Anthem)',
    songCorporateTagline: 'Bas ek baar laptop shutter down karke Pahad nikalna hai.',
    songMood: 'Soul Buffering',
    choices: [
      {
        id: 'c1',
        label: { hindi: '"Drafting response..." likh ke laptop shut down', english: 'Close laptop shut down' },
        consequence: { hindi: '+50 Mental Health! Peace restored.', english: '+50 Mental Health' },
        points: { corporate: -10, mentalHealth: 50, selfRespect: 40 }
      },
      {
        id: 'c2',
        label: { hindi: 'Ek aur Red Bull / Chai peeyo aur PPT complete karo', english: 'Drink another Chai and finish PPT' },
        consequence: { hindi: '+30 Corporate loyalty, -40 Soul energy.', english: '+30 Corporate' },
        points: { corporate: 30, mentalHealth: -40, selfRespect: -20 }
      }
    ]
  },
  {
    id: 'hi-res-1',
    moodId: 'resignation',
    zone: 'washroom',
    language: 'hindi',
    category: 'hr',
    situation: 'Drafting Resignation Email in Notes app',
    quote: 'Resign karne ka mann toh roz karta hai. Bas EMI thodi zyada motivated hai.',
    subtext: 'Notice period: The longest relationship you never wanted.',
    joke: 'HR: "We value your loyalty." Me: "Loyalty package mein 30% increment hota toh main notice period pe nahi hota."',
    songTrackId: 'hi-channa-resignation',
    songTitle: 'Channa Mereya (Notice Period Mix)',
    songArtist: 'Arijit Singh & HR Team (Ae Dil Hai Mushkil)',
    songCorporateTagline: 'Official mail sent to HR. Now playing Channa Mereya.',
    songMood: 'Unstoppable Freedom',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Send Button dabao with 90-day Notice Period', english: 'Hit Send with Notice Period' },
        consequence: { hindi: 'Glow up! Notice period legend status unlocked.', english: 'Glow up unlocked' },
        points: { corporate: -50, mentalHealth: 80, selfRespect: 100 }
      },
      {
        id: 'c2',
        label: { hindi: 'Mail save as draft karo aur LinkedIn status check karo', english: 'Save draft & check LinkedIn' },
        consequence: { hindi: 'Survival mode continues. Target 5 applications today.', english: 'Survival mode continues' },
        points: { corporate: 10, mentalHealth: 10, selfRespect: 15 }
      }
    ]
  },
  {
    id: 'hi-dev-1',
    moodId: 'developer',
    zone: 'cubicle',
    language: 'hindi',
    category: 'developer',
    situation: 'Friday 4:30 PM Production Deployment',
    quote: 'Friday deployment? Sir, bold of you to assume Monday ko production live milega.',
    subtext: 'Works on my machine. Staging ka pata nahi.',
    joke: 'Client: "Bas chhota sa UI change hai." Dev: "Sir, define small. Yahan backend architecture hila hai."',
    songTrackId: 'hi-dev-sholay',
    songTitle: 'Ye Dosti Dev Hum Nahi Todenge',
    songArtist: 'Kishore Kumar (StackOverflow Dev Mix)',
    songCorporateTagline: 'Bug fixed -> 4 Naye Bugs unlocked.',
    songMood: 'Terminal Panic',
    choices: [
      {
        id: 'c1',
        label: { hindi: '"Merge to master" & close laptop immediately', english: 'Merge to main and shut laptop' },
        consequence: { hindi: 'Chaos! PagerDuty alarm will wake you up at midnight.', english: 'Chaos unleashed' },
        points: { corporate: -30, mentalHealth: -20, selfRespect: 20 }
      },
      {
        id: 'c2',
        label: { hindi: '"Deploy on Monday" scheduled email bhej do', english: 'Reschedule deploy for Monday' },
        consequence: { hindi: 'Dev wisdom +100! Weekend saved.', english: 'Dev wisdom +100' },
        points: { corporate: 20, mentalHealth: 40, selfRespect: 30 }
      }
    ]
  },
  {
    id: 'hi-fri-1',
    moodId: 'friday',
    zone: 'gamezone',
    language: 'hindi',
    category: 'general',
    situation: 'Clock strikes 4:57 PM on Friday',
    quote: '4:57 PM ke baad kaam karna company ke khilaaf hai.',
    subtext: 'Weekend ke khwaab active.',
    joke: 'Friday afternoon 5:00 PM PR review? Sir, mera brain weekend pe sign off kar chuka hai.',
    songTrackId: 'hi-friday-parinday',
    songTitle: 'Khaabon Ke Parinday (Weekend Freedom)',
    songArtist: 'Mohit Chauhan (ZNMD Chill)',
    songCorporateTagline: 'Weekend mode loaded 99%.',
    songMood: 'Pure Relief',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Slack notification mute & "Have a great weekend!"', english: 'Mute notifications & send bye' },
        consequence: { hindi: 'Weekend unlocked! High mental peace.', english: 'Weekend unlocked' },
        points: { corporate: 0, mentalHealth: 60, selfRespect: 40 }
      }
    ]
  },
  {
    id: 'hi-app-1',
    moodId: 'appraisal',
    zone: 'reception',
    language: 'hindi',
    category: 'hr',
    situation: 'Annual Appraisal Discussion meeting',
    quote: 'Manager: "Tumhara performance exceptional hai." Me: "Toh appraisal?" Manager: "Budget issue hai."',
    subtext: 'Still here, that is my performance.',
    joke: 'Appraisal matrix: 100% effort = 4.2% hike. 20% inflation. Math is mathing wonderfully.',
    songTrackId: 'hi-appraisal-dil',
    songTitle: 'Dil Chahta Hai (Hike Ki Tanhai)',
    songArtist: 'Shankar Ehsaan Loy (Appraisal Season)',
    songCorporateTagline: 'Expectation vs Increment.',
    songMood: 'Disappointed But Not Surprised',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Counter present karo with detailed brag doc', english: 'Present detailed brag doc' },
        consequence: { hindi: 'Hike updated from 4% to 5.1%! Triumph!', english: 'Hike updated!' },
        points: { corporate: 20, mentalHealth: 15, selfRespect: 30 }
      },
      {
        id: 'c2',
        label: { hindi: '"Thank you sir" bol ke LinkedIn update karo', english: 'Say thanks and update LinkedIn' },
        consequence: { hindi: 'Market search activated.', english: 'Market search activated' },
        points: { corporate: -20, mentalHealth: 30, selfRespect: 50 }
      }
    ]
  }
];
