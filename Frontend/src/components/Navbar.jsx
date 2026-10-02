import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
      if (window.scrollY < 160) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-8 ${
      scrolled 
        ? 'py-3 bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200 dark:border-neutral-800 shadow-sm' 
        : 'py-4'
    }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo with Round Profile Image & Border */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
        >
          <img 
            src={portfolioData.personal.profileImage} 
            alt={portfolioData.personal.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 dark:border-neutral-700 group-hover:border-blue-500/50 transition-colors"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 -mt-0.5">
              Backend Developer
            </span>
          </div>
        </button>

        {/* Desktop Links with Active Underline */}
        <nav className="hidden md:flex items-center gap-8 ">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-xs font-semibold tracking-wide transition-colors py-1 cursor-pointer ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400 nav-underline' 
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Theme Toggle Only */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-slate-600 dark:text-neutral-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-slate-800 dark:text-neutral-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 pt-3 border-t border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#090d16] px-4 pb-4 space-y-2 text-left shadow-lg rounded-b-xl"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600 dark:border-blue-400' 
                      : 'text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
