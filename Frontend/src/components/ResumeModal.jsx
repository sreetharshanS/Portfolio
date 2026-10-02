import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="card-panel max-w-3xl w-full rounded-xl shadow-2xl overflow-hidden my-8 text-left text-slate-800 dark:text-gray-200 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Actions */}
          <div className="bg-slate-100 dark:bg-neutral-900 px-6 py-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between shrink-0">
            <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
              Sree_Tharshan_S_Resume.pdf
            </span>
            
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.resumePdf}
                download="Sree_Tharshan_S_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handlePrint}
                className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white"
                title="Print"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm bg-white dark:bg-[#090d16]">
            
            {/* Header */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {portfolioData.personal.name}
                  </h1>
                  <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {portfolioData.personal.title}
                  </h2>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-neutral-400 space-y-0.5">
                  <p>{portfolioData.personal.location}</p>
                  <p>{portfolioData.personal.email} | {portfolioData.personal.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-blue-600 dark:text-blue-400 pt-1">
                <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <span>•</span>
                <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>•</span>
                <a href={portfolioData.personal.socials.leetcode} target="_blank" rel="noreferrer" className="hover:underline">LeetCode</a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1">
              <h3 className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1">
                PROFILE SUMMARY
              </h3>
              <p className="text-slate-700 dark:text-neutral-300 leading-relaxed">
                {portfolioData.personal.summary}
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-3">
              <h3 className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1">
                WORK EXPERIENCE
              </h3>
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white text-xs">
                    <span>{exp.role} - {exp.company}</span>
                    <span className="font-mono text-slate-500 dark:text-neutral-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-neutral-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-1">
              <h3 className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1">
                EDUCATION
              </h3>
              <div className="flex justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">{portfolioData.education.institution}</span>
                  <p className="text-slate-600 dark:text-neutral-400">{portfolioData.education.degree}</p>
                </div>
                <div className="font-mono text-right">
                  <span className="font-bold text-blue-600 dark:text-blue-400">CGPA: {portfolioData.education.cgpa}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-slate-100 dark:bg-neutral-900 px-6 py-2.5 border-t border-neutral-200 dark:border-neutral-800 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded bg-slate-200 dark:bg-neutral-800 text-slate-900 dark:text-white text-xs font-semibold"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
