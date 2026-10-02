import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 section-border py-8 bg-white dark:bg-[#090d16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <img 
            src={portfolioData.personal.profileImage}
            alt={portfolioData.personal.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-xs font-semibold text-slate-900 dark:text-white">
            {portfolioData.personal.name}
          </span>
        </div>

        <div className="text-xs text-slate-500 dark:text-neutral-500 font-mono">
          © {new Date().getFullYear()} Sree Tharshan S. All rights reserved.
        </div>

        <div className="flex items-center gap-2.5 text-slate-500 dark:text-neutral-400">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
