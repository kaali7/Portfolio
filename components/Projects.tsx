"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = projectsData;
  const activeId = hoveredId ?? 0; // Default to Project 01 (index 0) when unhovered

  return (
    <section 
      id="projects" 
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.18)] border-t border-slate-200/80 relative z-20"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 pb-5 border-b border-slate-200/80"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#08080A] leading-tight">
              Featured <span className="font-black italic">Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-slate-600 text-xs sm:text-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Architecting scalable machine learning models, autonomous agent frameworks, and generative AI systems built for real-world impact.
          </p>
        </motion.div>

        {/* Dynamic Interactive Projects Container (Always Spotlight View: 4-Space Left + Stacked Right) */}
        <div 
          onMouseLeave={() => setHoveredId(null)}
          className="w-full min-h-[520px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 min-h-[520px] w-full">
            
            {/* LEFT SIDE: 4 CARD SPACES - FEATURED PREVIEW SPOTLIGHT */}
            <div className="lg:col-span-2 lg:row-span-2 w-full h-full">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full bg-slate-50/95 text-[#08080A] border-2 border-purple-500 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(147,51,234,0.18)] flex flex-col justify-between overflow-hidden relative z-30 min-h-[460px]"
              >
                {/* Accent Purple Background Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl pointer-events-none" />

                {/* Top Control Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/90 z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase">
                      {projects[activeId].category}
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                      {projects[activeId].previewMetric}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 font-bold">
                    FEATURED PROJECT // 0{activeId + 1} OF 06
                  </span>
                </div>

                {/* Title & Detailed Architecture Overview */}
                <div className="my-4 z-10">
                  <Link href={`/projects/${projects[activeId].id}`}>
                    <h3 className="text-2xl sm:text-4xl font-black text-[#08080A] hover:text-purple-700 transition-colors tracking-tight mb-2 flex items-center justify-between cursor-pointer">
                      <span>{projects[activeId].title}</span>
                      <span className="text-xs font-mono text-purple-600 font-bold underline">EXPLORE FULL DETAILS ↗</span>
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    {projects[activeId].fullDescription}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 z-10">
                  {projects[activeId].metrics.map((m, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-3 flex flex-col justify-center shadow-xs">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">{m.label}</span>
                      <span className="text-lg sm:text-xl font-black text-purple-700">{m.val}</span>
                    </div>
                  ))}
                </div>

                {/* Architectural Innovations Checklist */}
                <div className="bg-purple-50/70 border border-purple-100/90 rounded-2xl p-3.5 my-2 z-10">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-purple-900 uppercase mb-1.5">
                    KEY ARCHITECTURAL INNOVATIONS
                  </h4>
                  <ul className="space-y-1">
                    {projects[activeId].highlights.map((point, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tech Chips & CTA Button */}
                <div className="pt-3 border-t border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {projects[activeId].tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-medium shadow-2xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${projects[activeId].id}`}
                    className="px-5 py-2 bg-[#08080A] hover:bg-purple-700 text-white rounded-full text-xs font-mono font-black tracking-wider transition-colors duration-200 shadow-md flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                  >
                    <span>VIEW FULL CASE STUDY</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: ALL 6 PROJECT CARDS STACKED IN SIDEBAR */}
            <div className="lg:col-span-1 flex flex-col gap-2.5 max-h-[560px] overflow-y-auto pr-1">
              {projects.map((project, i) => {
                const isActive = i === activeId;

                return (
                  <Link href={`/projects/${project.id}`} key={project.id}>
                    <motion.div 
                      layout
                      onMouseEnter={() => setHoveredId(i)}
                      whileHover={{ scale: 1.02, x: -4 }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className={`group relative rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden border p-3.5 ${
                        isActive 
                          ? "bg-[#08080A] text-white border-purple-500/80 shadow-lg shadow-purple-950/30 z-20" 
                          : "bg-white text-[#08080A] border-slate-200/90 hover:border-purple-300 shadow-2xs"
                      }`}
                    >
                      {/* Header Badge & Project Number */}
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase transition-colors duration-300 ${
                          isActive ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-800 group-hover:bg-[#08080A] group-hover:text-white"
                        }`}>
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {isActive && (
                            <span className="text-[9px] font-mono font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full">
                              ACTIVE [CLICK TO VIEW]
                            </span>
                          )}
                          <span className={`text-xs font-mono font-bold ${isActive ? "text-purple-300" : "text-slate-400"}`}>
                            0{i + 1}
                          </span>
                        </div>
                      </div>

                      {/* Title & Short Description */}
                      <div>
                        <h3 className={`text-xs sm:text-sm font-bold transition-colors duration-300 mb-0.5 ${
                          isActive ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-[10px] sm:text-[11px] font-normal line-clamp-1 ${
                          isActive ? "text-slate-300" : "text-slate-600"
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Chips Footer */}
                      <div className={`pt-1.5 border-t flex items-center justify-between mt-1.5 ${
                        isActive ? "border-white/15" : "border-slate-100"
                      }`}>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[9px] font-mono px-1.5 py-0.5 rounded-md ${
                              isActive ? "bg-white/15 text-slate-200 border border-white/10" : "bg-slate-50 text-slate-600 border border-slate-200/80"
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isActive ? "bg-purple-500 text-white scale-105" : "bg-[#08080A] text-white group-hover:bg-purple-600"
                        }`}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


