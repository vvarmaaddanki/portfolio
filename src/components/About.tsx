
'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Code2, Server, Cpu, Database, Award, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Backend Systems & REST APIs',
      description: 'Expertise in Django REST Framework and FastAPI, handling complex DB transactions, locking mechanisms, and clean endpoint architectures.',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20'
    },
    {
      icon: Code2,
      title: 'Real-Time WebSockets & Redis',
      description: 'Building live queue state synchronization, token dispatchers, and async message broadcasting using Django Channels and Redis PubSub.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Cpu,
      title: 'AI Workflows & LLM Automation',
      description: 'Designing multi-step stateful workflows with LangGraph and Google Gemini API for automated code review, security audits, and prompt routing.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Database,
      title: 'Database & Containerization',
      description: 'Structuring PostgreSQL schemas with constraints, Docker & Docker Compose container management, and cloud deployments on Render & Vercel.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Building Robust Systems from <span className="gradient-text-blue">Architecture to Deployment</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I am a Computer Science engineer focused on creating maintainable, high-performance software. My work bridges traditional backend engineering with modern AI agent workflows.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg}`}>
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Card: Education & Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Bio Summary */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-800/80 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <span>Professional Overview</span>
                </h3>
                <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  Bengaluru, India
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Core Competency List */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Core Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Concurreny & Select For Update</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Stateful LangGraph Agent DAGs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>JWT & Role-Based Permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Docker & Deployment Pipelines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Details */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-slate-800/80 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Education</h3>
                  <p className="text-xs text-slate-400">Academic Foundation</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-base font-bold text-slate-200">{PERSONAL_INFO.education.degree}</h4>
                <p className="text-sm font-medium text-sky-400">{PERSONAL_INFO.education.institution}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
                  <span>{PERSONAL_INFO.education.period}</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                    CGPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <p className="text-xs text-slate-400 font-mono">Key Coursework:</p>
              <p className="text-xs text-slate-300 leading-normal">
                Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming (OOP) in Python & Java.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
