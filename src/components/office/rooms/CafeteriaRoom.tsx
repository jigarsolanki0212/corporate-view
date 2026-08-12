import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight, Banknote, Coffee as CoffeeIcon } from 'lucide-react';

export const CafeteriaRoom: React.FC = () => {
  const { language, navigateToRoom, addDiscovery } = useApp();
  const [coffeeCount, setCoffeeCount] = useState(6);
  const [salaryClaimed, setSalaryClaimed] = useState(false);

  const handleCoffeeClick = () => {
    addDiscovery('coffee_dependent');
    setCoffeeCount((prev) => prev + 1);
  };

  const handleSalaryClick = () => {
    addDiscovery('salary_credited');
    setSalaryClaimed(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-white/10 bg-[#18181c] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6 relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Coffee className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                LOCATION 6 • CAFETERIA & LUNCH TABLE
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                {language === 'hindi' ? 'SALARY DAY FEAST & CHAI' : 'SALARY DAY FEAST & CHAI'}
              </h2>
            </div>
          </div>

          <button
            onClick={handleCoffeeClick}
            className="px-4 py-2 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-amber-400 hover:border-amber-500/40 flex items-center space-x-1.5"
          >
            <CoffeeIcon className="h-3.5 w-3.5" />
            <span>DRINK COFFEE (#{coffeeCount})</span>
          </button>
        </div>

        {/* Coffee Machine Card */}
        <div className="rounded-2xl border border-white/10 bg-[#111114] p-6 space-y-3">
          <h3 className="text-lg font-extrabold text-white font-sans">
            ☕ COFFEE LEVEL: 97%
          </h3>
          <p className="text-sm font-serif italic text-amber-300">
            {language === 'hindi'
              ? '“Neend gayi bhaad mein. Coffee zindabad.”'
              : '“You have successfully replaced sleep with caffeine.”'}
          </p>
        </div>

        {/* Salary Credit Interactive Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-[#111114] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1 uppercase">
              <Banknote className="h-4 w-4" /> SALARY DIRECT DEPOSIT
            </span>
            <span className="text-xs font-mono text-zinc-500">12:01 AM SMS</span>
          </div>

          <h3 className="text-xl font-extrabold text-white font-sans">
            “Salary credited. For approximately 11 minutes, I loved this company.”
          </h3>

          {!salaryClaimed ? (
            <button
              onClick={handleSalaryClick}
              className="px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-400 hover:bg-emerald-500/30"
            >
              💰 VIEW PAYROLL & AUTO-DEBITS
            </button>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-xs font-mono text-zinc-300 border-t border-white/10 pt-3">
              <p className="text-rose-400">- Rent Auto-Debit: ₹25,000</p>
              <p className="text-rose-400">- Credit Card Bill: ₹18,400</p>
              <p className="text-rose-400">- Subscriptions: ₹3,200</p>
              <p className="text-emerald-400 font-bold pt-1">REMAINING BALANCE: "Nice try."</p>
            </motion.div>
          )}
        </div>

        {/* Indian Corporate Gossip Table */}
        <div className="p-4 rounded-xl border border-white/5 bg-[#111114] text-xs font-mono text-zinc-400 space-y-1">
          <p className="font-bold text-zinc-300">CAFETERIA TABLE GOSSIP:</p>
          <p>• “Package kitna mila?” • “Appraisal mein kya mila?” • “LinkedIn update kiya?”</p>
        </div>

        {/* Navigation Action */}
        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => navigateToRoom('hr')}
            className="px-5 py-2.5 rounded-full border border-white/10 bg-[#111114] text-xs font-mono font-bold text-zinc-300 hover:text-white"
          >
            ← BACK TO HR CABIN
          </button>

          <button
            onClick={() => navigateToRoom('break')}
            className="btn-primary-gradient px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg"
          >
            <span>HEAD TO BREAK AREA & PRINTER</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
