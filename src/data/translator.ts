import type { TranslatorItem } from '../types';

export const TRANSLATOR_ITEMS: TranslatorItem[] = [
  {
    id: 't1',
    corporatePhrase: {
      hindi: "Let's circle back on this.",
      english: "Let's circle back on this."
    },
    humanMeaning: {
      hindi: 'Main iss baare mein bilkul baat nahi karna chahta. Bhool jao.',
      english: "I am actively burying this topic and hope you forget it exists."
    },
    context: 'Meetings / Slack',
    severity: 'Medium'
  },
  {
    id: 't2',
    corporatePhrase: {
      hindi: 'Interesting idea, let me think about it.',
      english: 'Interesting idea, let me think about it.'
    },
    humanMeaning: {
      hindi: 'Idea aacha nahi hai par HR ke dar se direct No nahi bol sakta.',
      english: 'Terrible idea, but HR requires me to be supportive in public.'
    },
    context: 'Brainstorming Syncs',
    severity: 'Mild'
  },
  {
    id: 't3',
    corporatePhrase: {
      hindi: 'As per my previous email...',
      english: 'As per my previous email...'
    },
    humanMeaning: {
      hindi: 'Kya tum padhna nahi jaante? Main pehle hi likh chuka hoon!',
      english: 'Can you not read? I literally typed this out yesterday.'
    },
    context: 'Email threads',
    severity: 'Critical'
  },
  {
    id: 't4',
    corporatePhrase: {
      hindi: 'Quick call?',
      english: 'Quick call?'
    },
    humanMeaning: {
      hindi: 'Agle 47 minute tumhare cancel. Chair pe baith jao.',
      english: 'Cancel all your plans for the next hour. You are mine now.'
    },
    context: 'Slack / Teams DMs',
    severity: 'Critical'
  },
  {
    id: 't5',
    corporatePhrase: {
      hindi: "Let's take this offline.",
      english: "Let's take this offline."
    },
    humanMeaning: {
      hindi: 'Ye baat ab dangerous ho rahi hai, baki logon ke saamne nahi bol sakte.',
      english: 'This conversation is getting heated and dangerous for the group call.'
    },
    context: 'All-hands / Team syncs',
    severity: 'Medium'
  },
  {
    id: 't6',
    corporatePhrase: {
      hindi: 'Need this ASAP.',
      english: 'Need this ASAP.'
    },
    humanMeaning: {
      hindi: 'Mujhe ye 4 din pehle chahiye tha, par main bhool gaya tha.',
      english: 'I forgot about this for 4 days and now it is a fire drill.'
    },
    context: 'Project Management',
    severity: 'Career Ending'
  },
  {
    id: 't7',
    corporatePhrase: {
      hindi: 'We value work-life balance here.',
      english: 'We value work-life balance here.'
    },
    humanMeaning: {
      hindi: 'Sunday ko bhi 7 baje Slack notification aayega.',
      english: 'Expect Slack messages on Saturday evening and Sunday morning.'
    },
    context: 'Job Interview',
    severity: 'Critical'
  },
  {
    id: 't8',
    corporatePhrase: {
      hindi: 'Just following up on this.',
      english: 'Just following up on this.'
    },
    humanMeaning: {
      hindi: 'Main roz follow up karunga jab tak tum reply nahi karte.',
      english: 'I will haunt your inbox until you complete this task.'
    },
    context: 'Pending Approvals',
    severity: 'Mild'
  },
  {
    id: 't9',
    corporatePhrase: {
      hindi: 'We are like a family.',
      english: 'We are like a family.'
    },
    humanMeaning: {
      hindi: 'Overtime ka paisa nahi milega.',
      english: 'Expect unpaid overtime and emotional guilt trips.'
    },
    context: 'HR Orientation',
    severity: 'Career Ending'
  },
  {
    id: 't10',
    corporatePhrase: {
      hindi: 'With all due respect...',
      english: 'With all due respect...'
    },
    humanMeaning: {
      hindi: 'Main abhi tumhare point ki sabke samne dhajjiya udane wala hoon.',
      english: 'I am about to respectfully destroy your entire argument.'
    },
    context: 'Leadership Meetings',
    severity: 'Critical'
  }
];
