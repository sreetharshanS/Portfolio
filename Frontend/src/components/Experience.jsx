import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              CAREER
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-6 rounded-xl text-left space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-neutral-800">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-neutral-400 space-y-0.5 sm:text-right">
                    <span className="flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed list-disc list-inside">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-neutral-800 text-[11px] font-mono font-medium text-slate-800 dark:text-neutral-300 border border-slate-200 dark:border-neutral-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
