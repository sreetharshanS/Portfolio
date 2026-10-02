import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Key Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-5 rounded-xl text-left space-y-2 shadow-sm"
              >
                <span className="text-3xl font-bold font-mono text-blue-600 dark:text-blue-400 tracking-tight block">
                  {item.stat}
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
