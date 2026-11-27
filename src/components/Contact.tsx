'use me';
'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Send, Github, Linkedin, Copy, CheckCircle2, ArrowRight, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Available for Discussion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something <span className="gradient-text-blue">Impactful Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I'm currently seeking Software Engineering roles in Bengaluru or remote opportunities. Let's talk about backend architecture, AI agents, or full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-10">

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 group hover:border-sky-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-slate-500 uppercase font-bold">Email Me Directly</p>
                    <p className="text-sm sm:text-base font-semibold text-slate-200 truncate">{PERSONAL_INFO.email}</p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
                    aria-label="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase font-bold">Call / WhatsApp</p>
                    <p className="text-sm sm:text-base font-semibold text-slate-200">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase font-bold">Location</p>
                    <p className="text-sm sm:text-base font-semibold text-slate-200">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-widest">Digital Presence</h4>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Connect Form Mockup */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100">Send a Quick Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 font-bold uppercase">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 font-bold uppercase">Your Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 font-bold uppercase">Subject</label>
              <input
                type="text"
                placeholder="Software Engineer Role / Project Discussion"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 font-bold uppercase">Message</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
              />
            </div>

            <button className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.01]">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
