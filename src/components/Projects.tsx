'use client';

import React, { useState } from 'react';
import { PROJECTS, OPEN_SOURCE, Project } from '@/data/portfolioData';
import { Layers, ExternalLink, CheckCircle2, Terminal, ChevronRight, GitPullRequest } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Backend & Real-Time', 'AI & GenAI', 'Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production-Grade Systems & <span className="text-blue-600">Real-World Architectures</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
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
                  ? 'bg-blue-600 text-white font-semibold shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
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
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-semibold block mb-1">
                      {project.period}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 flex-shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-700 italic">{project.subtitle}</p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700">
                    {project.metrics.map((m, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>View Architecture Code</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-slate-900 bg-slate-50 rounded-lg border border-slate-200 transition-colors"
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
        <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-200">
                  <GitPullRequest className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-600 font-semibold uppercase tracking-wider">Open Source Contribution</span>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    {OPEN_SOURCE.title} <span className="text-blue-600 font-mono text-sm">{OPEN_SOURCE.prNumber}</span>
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {OPEN_SOURCE.description} {OPEN_SOURCE.contribution}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
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
                className="px-5 py-3 rounded-xl font-semibold text-xs font-mono bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-all flex items-center gap-2 shadow-sm"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-blue-600 uppercase font-semibold">{selectedProject.title}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedProject.architectureDetails.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedProject.architectureDetails.description}
            </p>

            {selectedProject.architectureDetails.codeSnippet && (
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase">Architecture Implementation Snippet</span>
                <pre className="p-4 rounded-xl bg-slate-900 text-sky-300 border border-slate-800 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                  <code>{selectedProject.architectureDetails.codeSnippet}</code>
                </pre>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
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
