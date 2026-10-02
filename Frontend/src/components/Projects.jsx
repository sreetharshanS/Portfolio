import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-6 rounded-xl text-left flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                      {project.badgeText}
                    </span>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 block mt-0.5">
                      {project.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-neutral-800 flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 text-[11px] font-mono text-slate-800 dark:text-neutral-300 border border-slate-200 dark:border-neutral-700"
                    >
                      {t}
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
