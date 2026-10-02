import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              BACKGROUND
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Bio Text */}
            <div className="md:col-span-8 space-y-4 text-xs sm:text-base text-slate-700 dark:text-neutral-300 leading-relaxed">
              <p>
                I am a Final Year Electronics and Communication Engineering student with a strong interest in Software Engineering and Java Full Stack Development.
              </p>
              <p>
                I have hands-on experience building web applications using Java, Spring Boot, REST APIs, React, MySQL, and MongoDB. I enjoy developing backend services, integrating databases, building responsive user interfaces, and designing clean and maintainable applications.
              </p>
              <p>
                My projects have strengthened my knowledge of Object-Oriented Programming, Data Structures & Algorithms, RESTful APIs, database design, and software development best practices. I continuously improve my skills by building real-world projects, solving coding problems, and learning scalable application design and clean code principles.
              </p>
              <p>
                I am currently seeking opportunities as a Java Developer, Java Backend Developer, or Full Stack Developer, where I can contribute to real-world projects, learn from experienced engineers, and grow as a software developer.
              </p>
            </div>

            {/* Academic & Download Card */}
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-5 rounded-xl text-left space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Education</span>
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900 dark:text-white">
                    {portfolioData.education.institution}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 mt-0.5">
                    {portfolioData.education.degree}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 dark:text-neutral-400">{portfolioData.education.period}</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">CGPA: {portfolioData.education.cgpa}</span>
                  </div>
                </div>
              </div>

              <a
                href={portfolioData.personal.resumePdf}
                download="Sree_Tharshan_S_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
