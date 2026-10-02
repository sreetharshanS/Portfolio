import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const heroImg = portfolioData.personal.heroProfileImage || portfolioData.personal.profileImage;

  return (
    <section id="home" className="pt-32 sm:pt-36 pb-16 sm:pb-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Mobile & Desktop Responsive Stack */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 text-left">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-5 w-full"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold border border-blue-200 dark:border-blue-900/50">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Backend & Full-Stack Engineer</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </h1>
              <p className="text-base sm:text-xl text-slate-700 dark:text-neutral-300 font-medium">
                {portfolioData.personal.tagline}
              </p>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-base text-slate-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              Specialized in building scalable Java Spring Boot RESTful microservices, optimizing SQL database queries, and integrating responsive React.js frontend interfaces.
            </p>

            {/* Key Impact Stats Bar */}
            <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-200 dark:border-neutral-800 text-xs">
              <div>
                <span className="block font-bold text-base text-slate-900 dark:text-white font-mono">25% ↓</span>
                <span className="text-slate-500 dark:text-neutral-400 text-[11px]">System Latency</span>
              </div>
              <div>
                <span className="block font-bold text-base text-slate-900 dark:text-white font-mono">30% ↑</span>
                <span className="text-slate-500 dark:text-neutral-400 text-[11px]">Data Throughput</span>
              </div>
              <div>
                <span className="block font-bold text-base text-slate-900 dark:text-white font-mono">8.4</span>
                <span className="text-slate-500 dark:text-neutral-400 text-[11px]">CGPA (ECE)</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={portfolioData.personal.resumePdf}
                download="Sree_Tharshan_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1 text-slate-500 dark:text-neutral-400">
              <span className="text-xs font-mono uppercase">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#111622] text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#111622] text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#111622] text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  aria-label="LeetCode"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Profile Photo Frame: CLEAN WITHOUT BORDER COLOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0 flex justify-center w-full md:w-auto"
          >
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 shadow-lg">
              <img 
                src={heroImg}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
