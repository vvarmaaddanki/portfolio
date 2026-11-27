'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
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
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md">
              <Terminal className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg block">
                {PERSONAL_INFO.name.split(' ')[0]} <span className="text-blue-600">{PERSONAL_INFO.name.split(' ')[1]}</span>
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:block">Software Engineer</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
