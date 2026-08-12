export interface DailyTruth {
  quote: {
    hindi: string;
    english: string;
  };
  author: {
    hindi: string;
    english: string;
  };
  tag: string;
}

export const DAILY_TRUTHS: DailyTruth[] = [
  {
    quote: {
      hindi: 'Tumhari unread emails kahin nahi jaane wali... afsos, tumhari tarah.',
      english: 'Your unread emails are not going anywhere. Unfortunately, neither are you.'
    },
    author: {
      hindi: 'Corporate Reality',
      english: 'Corporate Reality'
    },
    tag: 'Inbox Truth'
  },
  {
    quote: {
      hindi: 'Chai break isn\'t tea. It\'s an emergency therapy session with colleagues.',
      english: 'Chai break is not about tea. It is an emergency group therapy session.'
    },
    author: {
      hindi: 'Office Philosophy',
      english: 'Office Philosophy'
    },
    tag: 'Chai Logic'
  },
  {
    quote: {
      hindi: 'Work-life balance is a myth invented by HR to make you sign the offer letter.',
      english: 'Work-life balance is a myth invented by HR to make you sign the offer letter.'
    },
    author: {
      hindi: 'Ex-Employee',
      english: 'Ex-Employee'
    },
    tag: 'HR Myth'
  },
  {
    quote: {
      hindi: 'If you do your work too quickly, your reward is someone else\'s work.',
      english: 'If you do your work too quickly, your reward is someone else\'s work.'
    },
    author: {
      hindi: 'Senior Survivor',
      english: 'Senior Survivor'
    },
    tag: 'Efficiency Trap'
  },
  {
    quote: {
      hindi: 'Production deployment on Friday is an act of war against your weekend.',
      english: 'Deploying to production on Friday is a declaration of war against your weekend.'
    },
    author: {
      hindi: 'Lead Engineer',
      english: 'Lead Engineer'
    },
    tag: 'Dev Law'
  }
];
