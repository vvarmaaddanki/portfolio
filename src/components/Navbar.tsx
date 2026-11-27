
'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, FileText, ArrowUpRight, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/80 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg block">
                {PERSONAL_INFO.name.split(' ')[0]} <span className="text-sky-400">{PERSONAL_INFO.name.split(' ')[1]}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:block">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-xl transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-xl transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 text-sm font-medium text-slate-900 bg-sky-400 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
