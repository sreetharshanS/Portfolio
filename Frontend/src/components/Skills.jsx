import React from 'react';
import { 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Code2, 
  Layers, 
  Boxes, 
  Code, 
  Repeat, 
  Layout, 
  FileCode, 
  Palette, 
  Box, 
  GitBranch, 
  Send, 
  Container,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const iconMap = {
    Code2,
    Server,
    Layers,
    Cpu,
    Boxes,
    Code,
    Database,
    Repeat,
    Globe,
    Layout,
    FileCode,
    Palette,
    Box,
    GitBranch,
    Send,
    Container,
    Zap
  };

  return (
    <section id="skills" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolioData.skills.map((group, groupIdx) => (
              <div 
                key={groupIdx} 
                className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-5 rounded-xl text-left space-y-3 shadow-sm"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-neutral-800">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((item, itemIdx) => {
                    const IconComp = iconMap[item.icon] || Code2;
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-200 dark:border-neutral-700/60 text-xs font-medium text-slate-800 dark:text-neutral-200"
                      >
                        <IconComp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
