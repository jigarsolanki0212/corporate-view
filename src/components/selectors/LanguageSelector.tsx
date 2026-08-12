import React from 'react';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useApp();

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto text-center">
      <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-2">
        LANGUAGE CHOICE
      </p>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-8">
        HOW DO YOU WANT TO SUFFER?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Hindi Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setLanguage('hindi')}
          className={`cursor-pointer relative rounded-3xl p-8 text-left transition-all backdrop-blur-xl ${
            language === 'hindi'
              ? 'border border-purple-500 bg-[#18181c] shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/40'
              : 'border border-white/10 bg-[#111114] hover:border-white/20 hover:bg-[#18181c]'
          }`}
        >
          {language === 'hindi' && (
            <div className="absolute top-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>
          )}
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold mb-4">
            🇮🇳 HINDI / HINGLISH
          </span>
          <h3 className="text-2xl font-black text-white font-sans">
            HINDI / HINGLISH
          </h3>
          <p className="mt-3 text-sm text-zinc-300 italic font-serif leading-relaxed">
            “Kyuki ‘bhai kya hi bolu’ kabhi kabhi complete answer hota hai.”
          </p>
        </motion.div>

        {/* English Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setLanguage('english')}
          className={`cursor-pointer relative rounded-3xl p-8 text-left transition-all backdrop-blur-xl ${
            language === 'english'
              ? 'border border-purple-500 bg-[#18181c] shadow-2xl shadow-purple-500/20 ring-1 ring-purple-500/40'
              : 'border border-white/10 bg-[#111114] hover:border-white/20 hover:bg-[#18181c]'
          }`}
        >
          {language === 'english' && (
            <div className="absolute top-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>
          )}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold mb-4">
            🇬🇧 ENGLISH
          </span>
          <h3 className="text-2xl font-black text-white font-sans">
            ENGLISH
          </h3>
          <p className="mt-3 text-sm text-zinc-300 italic font-serif leading-relaxed">
            “Because ‘I’m fine’ is apparently a professional response.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
