import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QUIZ_QUESTIONS } from '../../data/quizQuestions';
import { PersonalityResult } from './PersonalityResult';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, RefreshCw } from 'lucide-react';

export const CorporateQuiz: React.FC = () => {
  const { language } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleOptionSelect = (optionId: string) => {
    const updated = { ...selectedAnswers, [currentQ.id]: optionId };
    setSelectedAnswers(updated);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return <PersonalityResult selectedAnswers={selectedAnswers} onRestart={handleRestart} />;
  }

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-mono font-bold text-purple-300 mb-2">
          HOW CORPORATE ARE YOU? • QUIZ
        </span>
        <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
          TEST YOUR SURVIVAL LEVEL
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-zinc-400">
          Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 h-2 w-full rounded-full bg-white/5 overflow-hidden border border-white/10">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-400"
          style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl"
        >
          <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug mb-6">
            {currentQ.question[language]}
          </h3>

          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswers[currentQ.id] === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleOptionSelect(opt.id)}
                  className={`w-full flex items-center justify-between rounded-2xl border p-4 text-left transition-all backdrop-blur-xl ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20 text-white ring-1 ring-purple-500'
                      : 'border-white/10 bg-zinc-950/60 text-zinc-200 hover:border-white/20 hover:bg-zinc-950'
                  }`}
                >
                  <span className="text-sm sm:text-base font-bold pr-4">
                    {opt.text[language]}
                  </span>
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${isSelected ? 'text-purple-400' : 'text-zinc-600'}`} />
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center text-xs text-zinc-400 border-t border-white/5 pt-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Quiz</span>
            </button>
            <span>Choose your honest reaction</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
