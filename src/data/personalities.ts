import type { PersonalityType } from '../types';

export const PERSONALITIES: Record<string, PersonalityType> = {
  actor: {
    id: 'actor',
    title: {
      hindi: 'THE PROFESSIONAL ACTOR',
      english: 'THE PROFESSIONAL ACTOR'
    },
    tagline: {
      hindi: 'Aap bolte hain "Absolutely!" jabki aatma bolti hai "Bilkul nahi!"',
      english: 'You say "Absolutely!" while your soul screams "Absolutely not."'
    },
    description: {
      hindi: 'Tumhe Oscar milna chahiye. Har meeting mein tum aisi smile dete ho jaise tumhari life ka best moment chal raha ho.',
      english: 'You deserve an Academy Award. You smile through every 6 PM meeting like it is your dream come true.'
    },
    survivalRate: 92,
    stats: {
      meetingsSurvived: 54,
      fakeFineCount: 142,
      notedSent: 98,
      coffeesConsumed: 180,
      resignationThoughts: 87
    },
    soundtrack: {
      hindi: 'Kar Har Monday Fateh',
      english: 'Stressed Out'
    },
    badge: '🎭 OSCAR SURVIVOR',
    accentColor: '#a855f7'
  },
  zombie: {
    id: 'zombie',
    title: {
      hindi: 'THE CORPORATE ZOMBIE',
      english: 'THE CORPORATE ZOMBIE'
    },
    tagline: {
      hindi: 'Technically zinda. Emotionally buffering.',
      english: 'Technically alive. Emotionally buffering since Monday.'
    },
    description: {
      hindi: 'Tumhara body chair pe hai, eye contact active hai, par mind Sunday evening ke cafe pe freeze ho chuka hai.',
      english: 'Your body is logged into Teams, but your brain is floating in a void of unread emails.'
    },
    survivalRate: 78,
    stats: {
      meetingsSurvived: 38,
      fakeFineCount: 210,
      notedSent: 120,
      coffeesConsumed: 310,
      resignationThoughts: 154
    },
    soundtrack: {
      hindi: 'Ilahi (Laptop Off & Leave Mix)',
      english: 'Harder, Better, Faster, Stronger'
    },
    badge: '🧟 BUFFERING LEGEND',
    accentColor: '#ef4444'
  },
  legend: {
    id: 'legend',
    title: {
      hindi: 'BARE MINIMUM LEGEND',
      english: 'BARE MINIMUM LEGEND'
    },
    tagline: {
      hindi: 'Kaam itna karo ki fire na ho, aur mehnat itni ki promotion na mile.',
      english: 'Do just enough to not get fired, but never enough to get extra tasks.'
    },
    description: {
      hindi: 'Work-life balance ke asli King tum ho. 5:01 PM pe tumhara Slack status offline ho jaata hai bina kisi remorse ke.',
      english: 'The true master of efficiency. At 5:01 PM, your status turns offline with zero remorse.'
    },
    survivalRate: 99,
    stats: {
      meetingsSurvived: 12,
      fakeFineCount: 45,
      notedSent: 30,
      coffeesConsumed: 95,
      resignationThoughts: 10
    },
    soundtrack: {
      hindi: 'Khaabon Ke Parinday (Weekend Freedom)',
      english: 'Friday I\'m in Love'
    },
    badge: '👑 MINIMUM HERO',
    accentColor: '#22c55e'
  },
  warrior: {
    id: 'warrior',
    title: {
      hindi: 'MEETING WARRIOR',
      english: 'MEETING WARRIOR'
    },
    tagline: {
      hindi: 'Calendar mein jagah nahi hai, par dil mein meeting ki jagah hamesha hai.',
      english: 'Your calendar is double-booked from 9 AM to 7 PM and you thrive on it.'
    },
    description: {
      hindi: 'Aapki poori zindagi back-to-back links pe chal rahi hai. Chai bhi zoom mute pe peete ho.',
      english: 'You live inside Zoom & Teams links. You take sip of Chai on mute.'
    },
    survivalRate: 85,
    stats: {
      meetingsSurvived: 128,
      fakeFineCount: 88,
      notedSent: 240,
      coffeesConsumed: 220,
      resignationThoughts: 60
    },
    soundtrack: {
      hindi: 'Boss Calling Warning Siren (Dhoom Theme)',
      english: 'Eye of the Tiger'
    },
    badge: '⚔️ CALENDAR HERO',
    accentColor: '#f97316'
  },
  notice: {
    id: 'notice',
    title: {
      hindi: 'THE NOTICE PERIOD LEGEND',
      english: 'NOTICE PERIOD LEGEND'
    },
    tagline: {
      hindi: 'Aap ab yahan kaam nahi karte. Aap bas ritual poora kar rahe hain.',
      english: 'You don\'t work here anymore. You are just completing the ceremonial ritual.'
    },
    description: {
      hindi: 'Zero stress, zero fear of boss. Aapki smile dekh ke poochte hain "Bhai offers kahan se aaye hain?"',
      english: 'Immune to all office chaos. You walk around with a coffee mug like a peaceful monk.'
    },
    survivalRate: 100,
    stats: {
      meetingsSurvived: 2,
      fakeFineCount: 0,
      notedSent: 4,
      coffeesConsumed: 150,
      resignationThoughts: 0
    },
    soundtrack: {
      hindi: 'Channa Mereya (Notice Period Mix)',
      english: 'I Want to Break Free'
    },
    badge: '🚪 UNTOUCHABLE',
    accentColor: '#ec4899'
  },
  devhero: {
    id: 'devhero',
    title: {
      hindi: 'PROD FIRE SURVIVOR',
      english: 'PROD FIRE SURVIVOR'
    },
    tagline: {
      hindi: 'Localhost pe chal raha hai. Prod pe AWS screaming.',
      english: 'Works on my machine. AWS alerting at 3 AM.'
    },
    description: {
      hindi: 'Aapne master branch pe direct commit karke world dekha hai. Code review se darr nahi lagta.',
      english: 'You have committed directly to main branch and lived to tell the tale.'
    },
    survivalRate: 91,
    stats: {
      meetingsSurvived: 45,
      fakeFineCount: 60,
      notedSent: 150,
      coffeesConsumed: 410,
      resignationThoughts: 110
    },
    soundtrack: {
      hindi: 'Ye Dosti Dev Hum Nahi Todenge',
      english: 'Radioactive'
    },
    badge: '🔥 BUG DESTROYER',
    accentColor: '#3b82f6'
  }
};
