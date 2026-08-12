import type { CorporateMoment } from '../types';

export const ENGLISH_MOMENTS: CorporateMoment[] = [
  {
    id: 'en-mon-1',
    moodId: 'monday',
    zone: 'reception',
    language: 'english',
    category: 'general',
    situation: 'Monday Morning 8:59 AM Slack Alarm',
    quote: "I don't hate Mondays. I hate what Mondays represent.",
    subtext: 'Your calendar has more meetings today than your life has joy.',
    joke: 'Setting your Slack status to "Focusing" so people don\'t ask you if you had a nice weekend.',
    songTrackId: 'en-stressed-out',
    songTitle: 'Stressed Out',
    songArtist: 'Twenty One Pilots',
    songCorporateTagline: 'Wish we could turn back time, before the 9 AM sync.',
    songMood: 'Existentially Employed',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Set status to "In a sync" and grab coffee', english: 'Set status to "In a sync" & grab coffee' },
        consequence: { hindi: 'Sanity intact. 0 emails read.', english: 'Sanity intact. 0 emails read.' },
        points: { corporate: 5, mentalHealth: 20, selfRespect: 15 }
      },
      {
        id: 'c2',
        label: { hindi: 'Open unread inbox (142 messages)', english: 'Open unread inbox (142 messages)' },
        consequence: { hindi: 'Instant cortisol spike achieved.', english: 'Instant cortisol spike achieved.' },
        points: { corporate: 25, mentalHealth: -30, selfRespect: -10 }
      }
    ]
  },
  {
    id: 'en-meet-1',
    moodId: 'meeting',
    zone: 'cubicle',
    language: 'english',
    category: 'management',
    situation: 'The 4:30 PM "Quick Sync" Invite',
    quote: 'Calendar says: 10:00–10:30. Reality says: 10:00–your entire afternoon.',
    subtext: 'Another meeting that could have been an email.',
    joke: 'Boss: "Are you free for 5 mins?" -> Me: I have already updated my will and updated my resume.',
    songTrackId: 'en-eye-tiger',
    songTitle: 'Eye of the Tiger',
    songArtist: 'Survivor',
    songCorporateTagline: 'Cancel whatever plans you had for the next 47 minutes.',
    songMood: 'Calendar Hostage',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Accept and say "Happy to align!"', english: 'Accept and say "Happy to align!"' },
        consequence: { hindi: 'You said "Absolutely!" while your soul screamed.', english: 'Soul screaming, corporate points +15.' },
        points: { corporate: 15, mentalHealth: -25, selfRespect: -15 }
      },
      {
        id: 'c2',
        label: { hindi: 'Propose new time: Tomorrow 11:00 AM', english: 'Propose new time: Tomorrow 11:00 AM' },
        consequence: { hindi: 'Boundaries set. Manager slightly confused.', english: 'Boundaries set successfully.' },
        points: { corporate: 20, mentalHealth: 30, selfRespect: 30 }
      }
    ]
  },
  {
    id: 'en-sal-1',
    moodId: 'salary',
    zone: 'canteen',
    language: 'english',
    category: 'general',
    situation: 'Salary Direct Deposit Notification',
    quote: 'Suddenly, I love this company and my manager is a visionary.',
    subtext: 'For approximately 14 minutes, I became a capitalist.',
    joke: 'Salary credited. Rent auto-debit, credit card bill, subscription: "Allow us to introduce ourselves."',
    songTrackId: 'en-bitch-money',
    songTitle: 'Bitch Better Have My Money',
    songArtist: 'Rihanna',
    songCorporateTagline: 'Adding items to cart without looking at discount filters.',
    songMood: 'Temporary Capitalist',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Order fancy artisanal lunch', english: 'Order fancy artisanal lunch' },
        consequence: { hindi: 'Dopamine +100! Wallet -15%.', english: 'Dopamine +100!' },
        points: { corporate: 10, mentalHealth: 25, selfRespect: 20 }
      },
      {
        id: 'c2',
        label: { hindi: 'Pay off credit card immediately', english: 'Pay off credit card immediately' },
        consequence: { hindi: 'Back to zero net balance in 3 minutes.', english: 'Responsible adult unlocked.' },
        points: { corporate: 20, mentalHealth: 0, selfRespect: 30 }
      }
    ]
  },
  {
    id: 'en-burn-1',
    moodId: 'burnout',
    zone: 'washroom',
    language: 'english',
    category: 'general',
    situation: 'Screen time hits 11 hours on a Wednesday',
    quote: 'My laptop battery has more energy than me.',
    subtext: 'Technically alive. Emotionally buffering.',
    joke: 'Work-life balance: Work is winning by 47 points.',
    songTrackId: 'en-harder-better',
    songTitle: 'Harder, Better, Faster, Stronger',
    songArtist: 'Daft Punk',
    songCorporateTagline: 'Close Slack, turn off lights, pretend power outage.',
    songMood: 'Brain Overheat',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Close laptop and walk out for air', english: 'Close laptop and go for a walk' },
        consequence: { hindi: 'Peace restored. Slack messages can wait.', english: 'Peace restored!' },
        points: { corporate: -10, mentalHealth: 50, selfRespect: 40 }
      }
    ]
  },
  {
    id: 'en-res-1',
    moodId: 'resignation',
    zone: 'washroom',
    language: 'english',
    category: 'hr',
    situation: 'Handing over Notice Period Tasks',
    quote: 'I don\'t want to quit. I want the version of this job that existed in the interview.',
    subtext: 'You don\'t work here anymore. You\'re just completing the ritual.',
    joke: 'HR: "We\'re like a family!" -> Employee: "Then why does the family need a 90-day resignation letter?"',
    songTrackId: 'en-break-free',
    songTitle: 'I Want to Break Free',
    songArtist: 'Queen',
    songCorporateTagline: 'Farewell email sent with 40 Bcc recipients.',
    songMood: 'Unstoppable Euphoria',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Submit official resignation mail', english: 'Submit official resignation mail' },
        consequence: { hindi: 'Notice Period Legend unlocked!', english: 'Notice Period Legend unlocked!' },
        points: { corporate: -40, mentalHealth: 90, selfRespect: 100 }
      }
    ]
  },
  {
    id: 'en-dev-1',
    moodId: 'developer',
    zone: 'cubicle',
    language: 'english',
    category: 'developer',
    situation: 'Production hotfix on Friday afternoon',
    quote: 'Production is just staging with consequences.',
    subtext: 'Works on my machine. AWS is screaming.',
    joke: 'Jira ticket: "Small UI fix." Actual implementation: Rewrite the entire state management architecture.',
    songTrackId: 'en-radioactive',
    songTitle: 'Radioactive',
    songArtist: 'Imagine Dragons',
    songCorporateTagline: '3 new bugs unlocked upon fixing 1 syntax error.',
    songMood: 'Deployment Rage',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Push fix to prod & run away', english: 'Push fix to prod & log off' },
        consequence: { hindi: 'Risk 100%. Weekend phone on silent.', english: 'Living dangerously!' },
        points: { corporate: -20, mentalHealth: -10, selfRespect: 25 }
      },
      {
        id: 'c2',
        label: { hindi: 'Tell team: "Need thorough testing on Monday"', english: 'Tell team: "Will deploy Monday"' },
        consequence: { hindi: 'Senior Dev energy achieved.', english: 'Senior Dev energy achieved.' },
        points: { corporate: 30, mentalHealth: 45, selfRespect: 35 }
      }
    ]
  },
  {
    id: 'en-fri-1',
    moodId: 'friday',
    zone: 'gamezone',
    language: 'english',
    category: 'general',
    situation: 'Friday 4:57 PM Slack silence',
    quote: 'Friday afternoon productivity is just typing aggressively while waiting for 5:00 PM.',
    subtext: 'Productivity left the building 2 hours ago.',
    joke: 'Any task assigned after 4:00 PM on Friday belongs to next week\'s version of me.',
    songTrackId: 'en-friday-love',
    songTitle: 'Friday I\'m in Love',
    songArtist: 'The Cure',
    songCorporateTagline: 'Weekend mode fully engaged.',
    songMood: 'Blissful Offload',
    choices: [
      {
        id: 'c1',
        label: { hindi: 'Close laptop lid without checking unread notifications', english: 'Shut laptop lid & walk away' },
        consequence: { hindi: 'Freedom!', english: 'Freedom!' },
        points: { corporate: 0, mentalHealth: 60, selfRespect: 50 }
      }
    ]
  }
];
