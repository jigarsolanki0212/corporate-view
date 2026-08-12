export interface Prophecy {
  text: {
    hindi: string;
    english: string;
  };
  mood: string;
  action: {
    hindi: string;
    english: string;
  };
}

export const PROPHECIES: Prophecy[] = [
  {
    text: {
      hindi: 'Tum aage bologe "I will look into it" aur kabhi nahi dekhoge.',
      english: 'You will say "I\'ll look into it" and never look into it.'
    },
    mood: 'Stealth Mode',
    action: {
      hindi: 'Close Slack immediately',
      english: 'Close Slack immediately'
    }
  },
  {
    text: {
      hindi: 'Aaj boss tumhe extra kaam dega kyunki tumne kal ki meeting mein smiling nod diya tha.',
      english: 'Your boss will assign extra tasks today because you nodded during yesterday\'s call.'
    },
    mood: 'Over-acting Regret',
    action: {
      hindi: 'Frown at keyboard',
      english: 'Frown at keyboard'
    }
  },
  {
    text: {
      hindi: 'Tumhari next meeting 15 minute late start hogi aur 25 minute extra chalegi.',
      english: 'Your next meeting will start 15 mins late and run 25 mins over time.'
    },
    mood: 'Calendar Curse',
    action: {
      hindi: 'Mute microphone now',
      english: 'Mute microphone now'
    }
  },
  {
    text: {
      hindi: 'Tum shaam ko Swiggy se pizza order karoge kyunki tumne 90 minute ka PPT deck banta dekha.',
      english: 'You will order stress-pizza at 7 PM after watching a 90-slide presentation.'
    },
    mood: 'Carb Therapy',
    action: {
      hindi: 'Add garlic bread to cart',
      english: 'Add garlic bread to cart'
    }
  }
];
