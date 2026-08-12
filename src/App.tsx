import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { VirtualOfficeWorld } from './components/office/VirtualOfficeWorld';
import { LanguageSelector } from './components/selectors/LanguageSelector';
import { CorporateLifeSelector } from './components/selectors/CorporateLifeSelector';
import { MoodSelector } from './components/selectors/MoodSelector';
import { MusicPlayer } from './components/audio/MusicPlayer';
import { CorporateTranslator } from './components/tools/CorporateTranslator';
import { CorporateDictionary } from './components/tools/CorporateDictionary';
import { CorporateQuiz } from './components/quiz/CorporateQuiz';
import { DailyTruth } from './components/tools/DailyTruth';
import { MOODS } from './data/moods';

const MainContent: React.FC = () => {
  const { activeTab, selectedMoodId } = useApp();

  const currentMoodMeta = MOODS.find((m) => m.id === selectedMoodId) || MOODS[0];

  return (
    <main className="min-h-[85vh] transition-colors duration-700 relative overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Background Ambient Lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[150px] rounded-full pointer-events-none transition-colors duration-700 -z-10"
        style={{ backgroundColor: `${currentMoodMeta.accentColor}18` }}
      />

      {activeTab === 'experience' && (
        <div className="w-full my-auto py-2">
          <VirtualOfficeWorld />
        </div>
      )}

      {activeTab === 'moods' && (
        <div className="py-8 overflow-y-auto max-h-[80vh]">
          <CorporateLifeSelector />
          <LanguageSelector />
          <MoodSelector />
        </div>
      )}

      {activeTab === 'translator' && <CorporateTranslator />}
      {activeTab === 'dictionary' && <CorporateDictionary />}
      {activeTab === 'quiz' && <CorporateQuiz />}
      {activeTab === 'daily' && <DailyTruth />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="h-screen w-screen bg-[#09090b] text-zinc-100 selection:bg-pink-500 selection:text-white font-sans antialiased relative overflow-hidden flex flex-col justify-between">
        <Header />
        <MainContent />
        <MusicPlayer />
      </div>
    </AppProvider>
  );
}

export default App;
