"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { ArrowLeft, Check, Sparkles, Terminal, Code2, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Find project by numeric ID or string slug
  const projectIndex = projectsDetailData.findIndex(
    (p) => p.id === params.id
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsDetailData[projectIndex];
  const prevProject = projectsDetailData[projectIndex === 0 ? projectsDetailData.length - 1 : projectIndex - 1];
  const nextProject = projectsDetailData[projectIndex === projectsDetailData.length - 1 ? 0 : projectIndex + 1];

  const projectMetrics = (project.engineering?.performance || []).slice(0, 4).map((p: string, i: number) => {
    const labels = ["Latency", "Speed", "Scale", "Accuracy"];
    return { label: labels[i % labels.length], val: p.split(" ")[0] || "High" };
  });
  if (projectMetrics.length === 0) projectMetrics.push({ label: "Status", val: project.status || "Live" });

  return (
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white pb-20 relative overflow-x-hidden">
      {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="work" />
      
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-slate-50/90 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-700 hover:text-purple-600 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL WORK</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3.5 py-1 rounded-full uppercase">
              CASE STUDY // {project.number || `0${projectIndex + 1}`}
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-12 relative z-10">
        <div className="max-w-4xl">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase shadow-2xs">
              {project.category}
            </span>
            {project.subcategory && (
              <span className="text-xs font-mono font-bold text-purple-900 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                {project.subcategory}
              </span>
            )}
            <span className="text-xs font-mono text-purple-700 bg-purple-100 border border-purple-300 px-3 py-1 rounded-full font-bold">
              {project.engineering?.performance?.[0]?.split(" ")[0] || "Optimized"}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            {project.overview?.problem || project.card?.shortDescription}
          </p>

          {/* External Action Links (GitHub / Live Demo) */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#08080A] hover:bg-purple-600 text-white rounded-full text-xs font-mono font-black tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-mono font-black tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE APPLICATION</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-200/90 rounded-2xl font-mono text-xs shadow-xs">
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">CATEGORY</span>
              <span className="text-[#08080A] font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">YEAR</span>
              <span className="text-[#08080A] font-bold">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">PRIMARY IMPACT</span>
              <span className="text-purple-700 font-bold">{project.engineering?.performance?.[0]?.split(" ")[0] || "Optimized"}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase mb-1 text-[10px]">STATUS</span>
              <span className="text-emerald-600 font-bold">PRODUCTION OPERATIONAL</span>
            </div>
          </div>

        </div>
      </section>

      {/* KPI Performance Metrics Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4">
          KEY PERFORMANCE INDICATORS (KPIs)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectMetrics.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 border border-purple-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">{m.label}</span>
              <span className="text-3xl sm:text-4xl font-black text-purple-700">{m.val}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep-Dive Problem & Solution Architecture */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Problem & Impact (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-rose-600 uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>CHALLENGE & PROBLEM STATEMENT</span>
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {project.overview?.problem || "System definition pending."}
              </p>
            </div>

            <div className="bg-purple-50/70 border border-purple-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>MEASURABLE SOLUTION IMPACT</span>
              </h3>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
                {project.overview?.outcome || "Impact evaluation pending."}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
              <h3 className="text-xs font-mono font-bold tracking-widest text-purple-800 uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>ARCHITECTURE & PIPELINE OVERVIEW</span>
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {project.overview?.solution || "Architecture diagram pending."}
              </p>
            </div>

          </div>

          {/* Right Column: Architectural Innovations Checklist (Col 7-12) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xs">
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-800 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                </h3>

                <ul className="space-y-3">
                  {(project.features || []).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-normal leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 border border-purple-300 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-mono font-bold">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                  TECHNOLOGY & FRAMEWORKS USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(project.card?.tags || []).map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-md font-medium shadow-2xs">
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
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="bg-[#08080A] text-white border border-purple-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
          
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>TECHNICAL BLUEPRINT // CORE IMPLEMENTATION</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">MODULE CODE SNIPPET</span>
          </div>

          <pre className="bg-black/50 border border-white/10 rounded-2xl p-5 overflow-x-auto text-xs sm:text-sm font-mono text-purple-200 leading-relaxed no-scrollbar whitespace-pre-wrap">
            <code>{project.architecture?.diagram || JSON.stringify(project.technical, null, 2)}</code>
          </pre>
        </div>
      </section>

      {/* Bottom Prev / Next Navigation Footer */}
      <footer className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 mt-12 border-t border-slate-200/80 flex items-center justify-between">
        {prevProject ? (
          <Link 
            href={`/work/${prevProject.id}`}
            className="group flex flex-col items-start cursor-pointer"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
              ← PREVIOUS CASE STUDY
            </span>
            <span className="text-sm sm:text-base font-bold text-[#08080A] group-hover:text-purple-600 transition-colors">
              {prevProject.title}
            </span>
          </Link>
        ) : <div />}

        {nextProject && (
          <Link 
            href={`/work/${nextProject.id}`}
            className="group flex flex-col items-end text-right cursor-pointer"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-purple-600 transition-colors">
              NEXT CASE STUDY →
            </span>
            <span className="text-sm sm:text-base font-bold text-[#08080A] group-hover:text-purple-600 transition-colors">
              {nextProject.title}
            </span>
          </Link>
        )}
      </footer>

    </main>
  );
}
