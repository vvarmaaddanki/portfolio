'use me';
'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#06090f] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-slate-400 font-mono">Software Engineer | Python & Full-Stack</p>
            </div>
          </div>

          {/* Copyright & Human-crafted note */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">
              Designed with precision for recruiters & hiring managers.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
