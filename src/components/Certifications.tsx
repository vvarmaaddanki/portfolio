
'use client';

import React from 'react';
import { CERTIFICATIONS } from '@/data/portfolioData';
import { Award, Cloud, Cpu, Database, Zap, ExternalLink, ShieldCheck, Download } from 'lucide-react';

export default function Certifications() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cloud': return Cloud;
      case 'Cpu': return Cpu;
      case 'Zap': return Zap;
      case 'Database': return Database;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional <span className="gradient-text-blue">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A track record of specialized learning in Cloud Architecture, Generative AI Agent Engineering, and Advanced Relational Databases.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = getIcon(cert.iconName);
            return (
              <div
                key={cert.id}
                className="group relative glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300"
              >
                {/* Decorative Background Icon */}
                <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-125 transition-all">
                  <IconComponent className="w-24 h-24" />
                </div>

                <div className="space-y-5 relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center shadow-lg shadow-black/20`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter">
                      {cert.issuer} • {cert.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight group-hover:text-indigo-300 transition-colors">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                    <button className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Animated Bottom Progress Highlight */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Call to Action for Resume */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <p className="text-sm font-mono text-slate-400">Want the full detailed CV with specific metrics?</p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <Download className="w-4 h-4 text-sky-400 group-hover:animate-bounce" />
            <span>Download Detailed Resume</span>
          </a>
        </div>

      </div>
    </section>
  );
}
