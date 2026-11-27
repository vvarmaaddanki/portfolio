'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, Sparkles, Box, RotateCw, Activity, Terminal } from 'lucide-react';

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
    <section id="tech-stack" className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            360° Architectural Tech <span className="text-blue-600">Stack Showcase</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive breakdown of technologies powering high-concurrency backends, modern frontend interfaces, and stateful AI agent graphs.
          </p>
        </div>

        {/* 360 Rotational Interactive Widget */}
        <div className="mb-20 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center perspective-1000">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400 transition-transform duration-700 ease-out flex items-center justify-center"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <div className="absolute -top-3 p-2 bg-blue-600 text-white rounded-full shadow-md">
                    <Box className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-3 p-2 bg-indigo-600 text-white rounded-full shadow-md">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="absolute -left-3 p-2 bg-emerald-600 text-white rounded-full shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="absolute -right-3 p-2 bg-purple-600 text-white rounded-full shadow-md">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 w-40 h-40 rounded-2xl bg-white border border-slate-200 shadow-lg flex flex-col items-center justify-center text-center p-4 space-y-2">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <Cpu className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">360° Tech Hub</p>
                  <p className="text-[10px] text-slate-500">Pillar {activeCategoryIndex + 1} of {stackPillars.length}</p>
                </div>
              </div>

              <button
                onClick={handleRotate}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all flex items-center gap-2 shadow-sm"
              >
                <RotateCw className="w-3.5 h-3.5 text-blue-600" />
                <span>Rotate Tech Stack View</span>
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">
                  Architectural Pillar #{activeCategoryIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {stackPillars[activeCategoryIndex].title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <p className="text-xs font-mono text-slate-500 uppercase">Technologies & Approaches:</p>
                <p className="text-sm font-semibold text-blue-700 font-mono">
                  {stackPillars[activeCategoryIndex].techs}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-slate-500 uppercase">Core Purpose & Deliverables:</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stackPillars[activeCategoryIndex].purpose}
                </p>
              </div>

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
                        ? 'bg-blue-600 text-white font-bold shadow-sm'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
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
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  <span>{cat.category}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">{cat.skills.length} Technologies</span>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className={`font-mono ${skill.highlight ? 'text-blue-700 font-bold' : 'text-slate-700'}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-blue-600 shadow-sm'
                            : 'bg-slate-400'
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
