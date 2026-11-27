'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { MapPin, ArrowRight, Mail, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm <span className="text-blue-600">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 font-mono">
                Software Engineer | Python & Full-Stack Systems
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Computer Science graduate specializing in building high-concurrency <span className="text-slate-900 font-semibold">Django & FastAPI backend services</span>, real-time <span className="text-slate-900 font-semibold">WebSockets with Redis</span>, and stateful <span className="text-slate-900 font-semibold">AI Agent workflows</span>.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'Django REST', 'FastAPI', 'WebSockets', 'React', 'Next.js 14', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white border border-slate-200 text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 flex items-center gap-2 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono">github/vvarmaaddanki</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-mono">linkedin/in/vvarmaaddanki</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Clarity Professional Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />

              <div className="relative rounded-2xl bg-white border border-slate-200 p-3 shadow-xl overflow-hidden">
                <div className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-mono shadow-md flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full Stack & AI</span>
                </div>

                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/assets/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top contrast-110 filter hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 font-mono">B.Tech CSE Graduate (2025)</p>
                    <p className="text-[11px] text-slate-500">Presidency University, Bangalore</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                    CGPA 6.5
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
