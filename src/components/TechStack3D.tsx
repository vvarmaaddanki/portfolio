'use me';
'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, Sparkles, Layers, Box, RotateCw, ShieldCheck, Activity, Terminal } from 'lucide-react';

export default function TechStack3D() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const stackPillars = [
    {
      title: "Frontend Engineering",
      techs: "React, Next.js 14, TypeScript, Tailwind CSS",
      purpose: "Component-based UI architecture, SSR rendering, responsive design system & maintainable code structure."
    },
    {
      title: "Backend & Distributed Systems",
      techs: "Python, Django REST, FastAPI, WebSockets, Redis",
      purpose: "High-performance API endpoints, DB transaction row locking, real-time message broadcasting & pub/sub layers."
    },
    {
      title: "AI Workflows & LLM Automation",
      techs: "Google Gemini API, LangGraph, Pydantic, GitHub API",
      purpose: "Stateful agent execution graphs, multi-step prompt pipelines, automated code reviews & resilience handling."
    },
    {
      title: "Motion & Immersive Experience",
      techs: "GSAP, Scroll Animations, 3D Canvas Mesh, Micro-interactions",
      purpose: "Cinematic scroll-driven motion, 360° rotational visual hero depth, and subtle micro-interactions."
    },
    {
      title: "Cloud, DevOps & Data",
      techs: "AWS, Docker Compose, PostgreSQL, Render, Vercel",
      purpose: "Containerized deployment pipelines, relational database schemas, and zero-downtime production delivery."
    }
  ];

  const handleRotate = () => {
    setRotationAngle(prev => prev + 72);
    setActiveCategoryIndex(prev => (prev + 1) % stackPillars.length);
  };

  return (
    <section id="tech-stack" className="py-24 bg-[#090d16] relative border-t border-slate-800/60 overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            360° Architectural Tech <span className="gradient-text-blue">Stack Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive breakdown of technologies powering high-concurrency backends, modern frontend interfaces, and stateful AI agent graphs.
          </p>
        </div>

        {/* 360 Rotational Interactive Widget */}
        <div className="mb-20 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-[#090d16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left 3D Rotatable Wheel Representation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center perspective-1000">

                {/* Outer Rotational Ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/40 transition-transform duration-700 ease-out flex items-center justify-center"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <div className="absolute -top-3 p-2 bg-sky-500 text-slate-950 rounded-full shadow-lg">
                    <Box className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-3 p-2 bg-indigo-500 text-slate-950 rounded-full shadow-lg">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="absolute -left-3 p-2 bg-emerald-500 text-slate-950 rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="absolute -right-3 p-2 bg-purple-500 text-slate-950 rounded-full shadow-lg">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                {/* Inner Core Card */}
                <div className="relative z-10 w-40 h-40 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col items-center justify-center text-center p-4 space-y-2">
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                    <Cpu className="w-7 h-7 text-sky-400" />
                  </div>
                  <p className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">360° Tech Hub</p>
                  <p className="text-[10px] text-slate-400">Pillar {activeCategoryIndex + 1} of {stackPillars.length}</p>
                </div>

              </div>

              {/* Rotation Trigger Button */}
              <button
                onClick={handleRotate}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:scale-105 transition-all flex items-center gap-2"
              >
                <RotateCw className="w-3.5 h-3.5 text-sky-400" />
                <span>Rotate Tech Stack View</span>
              </button>
            </div>

            {/* Right Active Tech Pillar Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
                  Architectural Pillar #{activeCategoryIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {stackPillars[activeCategoryIndex].title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-slate-400 uppercase">Technologies & Approaches:</p>
                <p className="text-sm font-semibold text-sky-300 font-mono">
                  {stackPillars[activeCategoryIndex].techs}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-400 uppercase">Core Purpose & Deliverables:</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {stackPillars[activeCategoryIndex].purpose}
                </p>
              </div>

              {/* Pillar Selector Tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                {stackPillars.map((pillar, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCategoryIndex(idx);
                      setRotationAngle(idx * 72);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeCategoryIndex === idx
                        ? 'bg-sky-500 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    0{idx + 1}. {pillar.title.split(' ')[0]}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-sky-400" />
                  <span>{cat.category}</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">{cat.skills.length} Technologies</span>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className={`font-mono ${skill.highlight ? 'text-sky-300 font-bold' : 'text-slate-300'}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800/60">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-sky-500 to-indigo-500 shadow-sm shadow-sky-500/50'
                            : 'bg-slate-700'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
