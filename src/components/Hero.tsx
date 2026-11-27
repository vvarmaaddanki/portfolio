
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { MapPin, Sparkles, ArrowRight, Download, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Canvas Background Particle Mesh Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for 3D perspective net
    const particleCount = Math.min(Math.floor(width / 18), 75);
    const particles: { x: number; y: number; z: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * 500,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.05;
      mouseY = (e.clientY - rect.top - height / 2) * 0.05;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw perspective grid / nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + mouseX * 0.02;
        p.y += p.vy + mouseY * 0.02;

        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;

        const scale = 400 / (400 + p.z);
        const px = cx + p.x * scale;
        const py = cy + p.y * scale;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, p.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${0.4 * scale})`;
          ctx.fill();

          // Connect nearby particles with subtle lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const scale2 = 400 / (400 + p2.z);
            const p2x = cx + p2.x * scale2;
            const p2y = cy + p2.y * scale2;
            const dx = px - p2x;
            const dy = py - p2y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(p2x, p2y);
              ctx.strokeStyle = `rgba(129, 140, 248, ${0.12 * (1 - dist / 110)})`;
              ctx.lineWidth = 0.8 * scale;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#090d16]">
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />

      {/* Radial Ambient Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
                <span className="ml-2 font-mono text-emerald-300">{PERSONAL_INFO.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none">
                Hi, I'm <span className="gradient-text-blue">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-sky-400/90 font-mono">
                Software Engineer | Python & Full-Stack Systems
              </p>
            </div>

            {/* Summary Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              CS Graduate specializing in building high-concurrency <span className="text-sky-300 font-medium">Django & FastAPI backend services</span>, real-time <span className="text-indigo-300 font-medium">WebSockets with Redis</span>, and stateful <span className="text-emerald-300 font-medium">AI Agent workflows (LangGraph & Gemini)</span>.
            </p>

            {/* Core Tech Quick Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'Django REST', 'FastAPI', 'WebSockets', 'React', 'Next.js 14', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 shadow-xl shadow-sky-500/20 flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 flex items-center gap-2 transition-all hover:border-slate-600"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono">github/vvarmaaddanki</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-mono">linkedin/in/vvarmaaddanki</span>
              </a>
            </div>

          </div>

          {/* Right Column: High Quality Image & Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">

              {/* Outer Glow Backdrop Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 group-hover:duration-200 animate-pulse-glow" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-3 shadow-2xl overflow-hidden">

                {/* Tech Badge Top Corner */}
                <div className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-sky-400 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Full Stack & AI</span>
                </div>

                {/* Profile Image with crisp rendering */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/assets/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay for subtle blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
                </div>

                {/* Bottom Card Floating Highlight */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-3.5 rounded-xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-200 font-mono">B.Tech CSE Graduate (2025)</p>
                    <p className="text-[11px] text-slate-400">Presidency University, Bangalore</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
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
