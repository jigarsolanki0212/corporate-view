export type CorporateCompanyId = 'ibm' | 'deloitte' | 'microsoft' | 'accenture' | 'tcs' | 'google';

export interface CorporateThemeMeta {
  id: CorporateCompanyId;
  companyName: string;
  badge: string;
  accentColor: string;
  gradient: string;
  bgAtmosphere: string;
  glassCardBg: string;
  borderColor: string;
}

export const CORPORATE_THEMES: Record<CorporateCompanyId, CorporateThemeMeta> = {
  ibm: {
    id: 'ibm',
    companyName: 'IBM / Big Tech Slate',
    badge: '🏢 IBM ENTERPRISE',
    accentColor: '#0f62fe',
    gradient: 'from-blue-600 via-indigo-600 to-sky-500',
    bgAtmosphere: 'from-blue-950/80 via-slate-950 to-black',
    glassCardBg: 'bg-slate-900/80',
    borderColor: 'border-blue-500/30'
  },
  deloitte: {
    id: 'deloitte',
    companyName: 'Deloitte / Big 4 Consulting',
    badge: '🟢 BIG 4 CONSULTING',
    accentColor: '#10b981',
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    bgAtmosphere: 'from-emerald-950/80 via-zinc-950 to-black',
    glassCardBg: 'bg-zinc-900/80',
    borderColor: 'border-emerald-500/30'
  },
  microsoft: {
    id: 'microsoft',
    companyName: 'Microsoft / Azure Cloud',
    badge: '☁️ AZURE ENTERPRISE',
    accentColor: '#0284c7',
    gradient: 'from-sky-600 via-blue-600 to-cyan-500',
    bgAtmosphere: 'from-sky-950/80 via-slate-950 to-black',
    glassCardBg: 'bg-slate-900/80',
    borderColor: 'border-sky-500/30'
  },
  accenture: {
    id: 'accenture',
    companyName: 'Accenture / Tech Strategy',
    badge: '💜 ACCENTURE TECH',
    accentColor: '#9333ea',
    gradient: 'from-purple-600 via-violet-600 to-fuchsia-500',
    bgAtmosphere: 'from-purple-950/80 via-slate-950 to-black',
    glassCardBg: 'bg-slate-900/80',
    borderColor: 'border-purple-500/30'
  },
  tcs: {
    id: 'tcs',
    companyName: 'TCS / Infosys IT Services',
    badge: '🇮🇳 INDIAN IT TECH',
    accentColor: '#2563eb',
    gradient: 'from-blue-600 via-indigo-600 to-blue-500',
    bgAtmosphere: 'from-blue-950/80 via-slate-950 to-black',
    glassCardBg: 'bg-slate-900/80',
    borderColor: 'border-blue-500/30'
  },
  google: {
    id: 'google',
    companyName: 'Google / Silicon Valley',
    badge: '🌐 SILICON VALLEY',
    accentColor: '#ea4335',
    gradient: 'from-red-500 via-amber-500 to-blue-500',
    bgAtmosphere: 'from-slate-950 via-zinc-950 to-black',
    glassCardBg: 'bg-slate-900/80',
    borderColor: 'border-slate-700/50'
  }
};
