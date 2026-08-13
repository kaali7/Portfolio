"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id, 10);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const prevProject = projectsData.find((p) => p.id === (projectId === 1 ? projectsData.length : projectId - 1));
  const nextProject = projectsData.find((p) => p.id === (projectId === projectsData.length ? 1 : projectId + 1));

  return (
    <main className="w-full min-h-screen bg-[#08080A] text-white selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Top Header Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 flex items-center justify-between border-b border-white/10 relative z-20">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-300 hover:text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
        >
          <span>←</span>
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full uppercase">
            CASE STUDY // 0{project.id}
          </span>
        </div>
      </header>

      {/* Main Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-12 relative z-10">
        <div className="max-w-4xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold text-[#08080A] bg-white px-3.5 py-1 rounded-full uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-purple-300 bg-purple-500/20 border border-purple-500/40 px-3 py-1 rounded-full">
              {project.previewMetric}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Quick Meta Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#13131A] border border-white/10 rounded-2xl font-mono text-xs">
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">MY ROLE</span>
              <span className="text-white font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">TIMELINE</span>
              <span className="text-white font-bold">{project.timeline}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">PRIMARY IMPACT</span>
              <span className="text-purple-400 font-bold">{project.previewMetric}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">STATUS</span>
              <span className="text-emerald-400 font-bold">PRODUCTION LIVE</span>
            </div>
          </div>

        </div>
      </section>

      {/* KPI Performance Metrics Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
          KEY PERFORMANCE INDICATORS (KPIs)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#13131A] border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-purple-950/20"
            >
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">{m.label}</span>
              <span className="text-3xl sm:text-4xl font-black text-purple-400">{m.val}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep-Dive Problem & Solution Architecture */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Problem & Impact (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>CHALLENGE & PROBLEM STATEMENT</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-[#13131A] border border-purple-500/40 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MEASURABLE SOLUTION IMPACT</span>
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {project.solutionImpact}
              </p>
            </div>

          </div>

          {/* Right Column: Architectural Innovations Checklist (Col 7-12) */}
          <div className="lg:col-span-6">
            <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>KEY ARCHITECTURAL INNOVATIONS</span>
                </h3>

                <ul className="space-y-3">
                  {project.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-mono">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges Footer */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                  TECHNOLOGY & FRAMEWORKS USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-200 bg-white/10 border border-white/15 px-3 py-1 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Code Snippet & Implementation Blueprint */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden">
          
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
              TECHNICAL BLUEPRINT // CORE IMPLEMENTATION
            </h3>
            <span className="text-xs font-mono text-slate-500">PYTHON / C++ CODE MODULE</span>
          </div>

          <pre className="bg-[#08080A] border border-white/10 rounded-2xl p-5 overflow-x-auto text-xs sm:text-sm font-mono text-purple-200 leading-relaxed no-scrollbar">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>
      </section>

      {/* Bottom Prev / Next Navigation Footer */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 mt-12 border-t border-white/10 flex items-center justify-between">
        {prevProject ? (
          <Link 
            href={`/projects/${prevProject.id}`}
            className="group flex flex-col items-start cursor-pointer"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
              ← PREVIOUS CASE STUDY
            </span>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
              {prevProject.title}
            </span>
          </Link>
        ) : <div />}

        {nextProject && (
          <Link 
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end text-right cursor-pointer"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
              NEXT CASE STUDY →
            </span>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
              {nextProject.title}
            </span>
          </Link>
        )}
      </footer>

    </main>
  );
}
