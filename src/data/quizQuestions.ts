import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: {
      hindi: 'Boss sends a message: "Can we talk?" at 5:45 PM. What is your instant reaction?',
      english: 'Boss sends a message: "Can we talk?" at 5:45 PM. What is your instant reaction?'
    },
    options: [
      {
        id: 'q1a',
        text: {
          hindi: 'Heart rate 150 BPM + Start updating resume',
          english: 'Heart rate 150 BPM + Start updating resume'
        },
        personalityWeight: { actor: 2, zombie: 4, devhero: 1 }
      },
      {
        id: 'q1b',
        text: {
          hindi: 'Pretend I lost Wi-Fi connection until 6:01 PM',
          english: 'Pretend Wi-Fi disconnected until 6:01 PM'
        },
        personalityWeight: { legend: 5, notice: 3 }
      },
      {
        id: 'q1c',
        text: {
          hindi: '"Sure Sir! Joining now!" (Internally screaming)',
          english: '"Sure Sir! Joining now!" (Internally screaming)'
        },
        personalityWeight: { actor: 5, warrior: 3 }
      },
      {
        id: 'q1d',
        text: {
          hindi: 'Send my resignation draft immediately',
          english: 'Send my resignation draft immediately'
        },
        personalityWeight: { notice: 5, zombie: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      hindi: 'Meeting starts 3 minutes late. What are you doing in the waiting screen?',
      english: 'Meeting starts 3 minutes late. What are you doing while waiting?'
    },
    options: [
      {
        id: 'q2a',
        text: {
          hindi: 'Staring into void, questioning career choices',
          english: 'Staring into void, questioning life decisions'
        },
        personalityWeight: { zombie: 5, actor: 2 }
      },
      {
        id: 'q2b',
        text: {
          hindi: 'Muted with coffee, browsing flight tickets',
          english: 'Muted with coffee, browsing vacation flights'
        },
        personalityWeight: { legend: 4, notice: 4 }
      },
      {
        id: 'q2c',
        text: {
          hindi: 'Preparing 5 bullet points to sound ultra productive',
          english: 'Preparing bullet points to sound hyper productive'
        },
        personalityWeight: { warrior: 5, actor: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      hindi: 'Salary gets credited to your account. What happens in the next 15 minutes?',
      english: 'Salary gets credited to your account. What happens in the next 15 minutes?'
    },
    options: [
      {
        id: 'q3a',
        text: {
          hindi: 'Rent & EMIs auto-debit. Back to zero.',
          english: 'Rent & EMIs auto-debit. Back to zero.'
        },
        personalityWeight: { zombie: 3, actor: 3, devhero: 2 }
      },
      {
        id: 'q3b',
        text: {
          hindi: 'Order expensive coffee and feel like a CEO',
          english: 'Order expensive coffee and feel like a CEO'
        },
        personalityWeight: { legend: 4, actor: 3 }
      },
      {
        id: 'q3c',
        text: {
          hindi: 'Transfer to savings & invest immediately',
          english: 'Transfer to savings & invest immediately'
        },
        personalityWeight: { warrior: 3, devhero: 4 }
      }
    ]
  },
  {
    id: 4,
    question: {
      hindi: 'It is Friday 4:55 PM. A new Slack task arrives. What do you do?',
      english: 'It is Friday 4:55 PM. A new Slack task arrives. What do you do?'
    },
    options: [
      {
        id: 'q4a',
        text: {
          hindi: 'Seen status OFF. Close laptop lid instantly.',
          english: 'Turn off Slack. Shut laptop lid instantly.'
        },
        personalityWeight: { legend: 5, notice: 4 }
      },
      {
        id: 'q4b',
        text: {
          hindi: 'Reply: "Noted! Will take this up first thing Monday!"',
          english: 'Reply: "Noted! Will take this up Monday morning!"'
        },
        personalityWeight: { actor: 5, warrior: 2 }
      },
      {
        id: 'q4c',
        text: {
          hindi: 'Panic, work till 8 PM, ruin Friday evening',
          english: 'Panic, work till 8 PM, ruin Friday evening'
        },
        personalityWeight: { zombie: 5, devhero: 3 }
      }
    ]
  }
];
