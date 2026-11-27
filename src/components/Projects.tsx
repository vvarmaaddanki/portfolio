
'use client';

import React, { useState } from 'react';
import { PROJECTS, OPEN_SOURCE, Project } from '@/data/portfolioData';
import { Layers, ExternalLink, Code2, Cpu, CheckCircle2, Terminal, ChevronRight, GitPullRequest } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Backend & Real-Time', 'AI & GenAI', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Production-Grade Systems & <span className="gradient-text-blue">Real-World Architectures</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore backend APIs, real-time WebSocket infrastructure, and automated AI agents built with clean architecture and concurrency controls.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-lg shadow-sky-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-7 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header: Title & Category Pill */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-sky-400 font-semibold block mb-1">
                      {project.period}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-[11px] font-mono text-slate-300 flex-shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-300 italic">{project.subtitle}</p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack & Architecture Trigger */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    {project.metrics.map((m, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Architecture Code Modal Trigger */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>View Architecture Code</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Open Source Highlight Box */}
        <div className="glass-panel p-8 rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-950/20 via-slate-900/60 to-indigo-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <GitPullRequest className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">Open Source Contribution</span>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    {OPEN_SOURCE.title} <span className="text-sky-400 font-mono text-sm">{OPEN_SOURCE.prNumber}</span>
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {OPEN_SOURCE.description} {OPEN_SOURCE.contribution}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span>Tech: {OPEN_SOURCE.tech}</span>
                <span>•</span>
                <span>{OPEN_SOURCE.date}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={OPEN_SOURCE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all flex items-center gap-2"
              >
                <span>View Pull Request on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Code Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-2xl w-full border border-slate-700 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase font-semibold">{selectedProject.title}</span>
                <h3 className="text-2xl font-bold text-slate-100">{selectedProject.architectureDetails.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.architectureDetails.description}
            </p>

            {selectedProject.architectureDetails.codeSnippet && (
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase">Architecture Implementation Snippet</span>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed">
                  <code>{selectedProject.architectureDetails.codeSnippet}</code>
                </pre>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors"
              >
                Close Architecture View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
