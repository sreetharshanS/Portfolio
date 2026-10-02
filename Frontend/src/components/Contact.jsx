import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 relative z-10 section-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-left">
        
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
              CONTACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Direct Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-6 rounded-xl space-y-4 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Contact Details</h3>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-200 dark:border-neutral-700/60">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <a href={`mailto:${portfolioData.personal.email}`} className="font-mono text-slate-900 dark:text-white truncate">
                        {portfolioData.personal.email}
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white ml-2 shrink-0"
                      title="Copy Email"
                    >
                      {emailCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-200 dark:border-neutral-700/60">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <a href={`tel:${portfolioData.personal.phone}`} className="font-mono text-slate-900 dark:text-white">
                      {portfolioData.personal.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-200 dark:border-neutral-700/60">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-slate-900 dark:text-white">
                      {portfolioData.personal.location}
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personal.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                  >
                    <LeetCodeIcon className="w-5 h-5" />
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={portfolioData.personal.resumePdf}
                    download="Sree_Tharshan_S_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7">
              <div className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-neutral-800 p-6 rounded-xl space-y-4 shadow-sm">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Send Message</h3>

                {submitted ? (
                  <div className="py-8 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <h4 className="font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-xs text-slate-600 dark:text-neutral-400">
                      Thank you for contacting me. I will reply soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-700 dark:text-neutral-300 font-mono mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-neutral-300 font-mono mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-neutral-300 font-mono mb-1">Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-neutral-800/80 border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
