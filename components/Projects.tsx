"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = projectsData.slice(0, 4);
  const activeIndex = hoveredId ?? 0; // Default to first project (index 0) when unhovered
  const activeProject = projects[activeIndex];

  return (
    <section 
      id="projects" 
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-4 sm:px-8 lg:px-14 pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.18)] border-t border-slate-200/80 relative z-20 overflow-hidden"
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

        {/* Dynamic Interactive Projects Container */}
        <div 
          onMouseLeave={() => setHoveredId(null)}
          className="w-full min-h-[580px] relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[580px] w-full items-start">
            
            {/* LEFT SIDE: MAIN SPOTLIGHT SCREEN (EXPANDED BIG CARD) */}
            <div className="lg:col-span-7 xl:col-span-8 w-full h-full min-h-[540px] relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-slate-50/95 text-[#08080A] border-2 border-purple-500/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.14)] flex flex-col justify-between overflow-hidden relative z-30 min-h-[540px]"
                >
                  {/* Subtle Background Radial Accent */}
                  <div className="absolute -top-16 -right-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Control Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200/90 z-10">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold tracking-wider text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase shadow-xs">
                        {activeProject.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100/80 border border-purple-300 px-3 py-1 rounded-full">
                        {activeProject.previewMetric}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-400 font-bold tracking-wide">
                      FEATURED PROJECT // 0{activeProject.id} OF 04
                    </span>
                  </div>

                  {/* Main Title & Detailed Description */}
                  <div className="my-4 z-10">
                    <Link href={`/projects/${activeProject.id}`} className="group inline-block">
                      <h3 className="text-2xl sm:text-4xl lg:text-4xl font-black text-[#08080A] group-hover:text-purple-700 transition-colors tracking-tight mb-2.5 flex flex-wrap items-center gap-3 cursor-pointer">
                        <span>{activeProject.title}</span>
                        <span className="text-xs font-mono text-purple-600 font-bold underline opacity-80 group-hover:opacity-100 transition-opacity">
                          EXPLORE FULL DETAILS ↗
                        </span>
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed max-w-3xl">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  {/* Dynamic Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 z-10">
                    {activeProject.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-3 flex flex-col justify-center shadow-2xs hover:border-purple-300 transition-colors">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">{m.label}</span>
                        <span className="text-lg sm:text-xl font-black text-purple-700 tracking-tight">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Architectural Innovations Bullet Points */}
                  <div className="bg-purple-50/70 border border-purple-200/70 rounded-2xl p-4 my-2 z-10">
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-purple-900 uppercase mb-2">
                      KEY ARCHITECTURAL INNOVATIONS
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProject.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Tech Chips & CTA Button */}
                  <div className="pt-4 border-t border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-medium shadow-2xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${activeProject.id}`}
                      className="px-6 py-2.5 bg-[#08080A] hover:bg-purple-700 text-white rounded-full text-xs font-mono font-black tracking-wider transition-colors duration-200 shadow-md flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer group"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: STACKED CARDS DECK (SMALL PREVIEW CARDS) */}
            <div className="lg:col-span-5 xl:col-span-4 w-full h-full relative flex flex-col justify-start min-h-[520px]">
              
              {/* Stacked Cards Deck Area */}
              <div className="relative w-full pt-2 pb-8 space-y-0">
                {projects.map((project, i) => {
                  const isActive = i === activeIndex;

                  // Alternating rotation angles and horizontal offsets
                  const rotations = [-2.5, 2.8, -1.8, 2.2];
                  const xOffsets = [2, -3, 3, -2];
                  const rotation = rotations[i % rotations.length];
                  const xOffset = xOffsets[i % xOffsets.length];

                  return (
                    <motion.div 
                      key={project.id}
                      onMouseEnter={() => setHoveredId(i)}
                      onClick={() => setHoveredId(i)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{
                        rotate: isActive ? 0 : rotation,
                        x: isActive ? -4 : xOffset,
                        scale: isActive ? 1.02 : 0.98,
                        y: isActive ? -4 : 0,
                      }}
                      whileHover={{
                        rotate: 0,
                        scale: 1.03,
                        x: -6,
                        transition: { type: "spring", stiffness: 450, damping: 22 }
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 24 }}
                      style={{
                        zIndex: isActive ? 40 : 30 - i,
                      }}
                      className={`group relative rounded-2xl transition-colors duration-200 cursor-pointer p-4 sm:p-5 border flex flex-col justify-between ${
                        i > 0 ? "-mt-8 sm:-mt-9" : ""
                      } ${
                        isActive 
                          ? "bg-[#08080A] text-white border-purple-500 shadow-2xl shadow-purple-950/30" 
                          : "bg-white text-[#08080A] border-slate-200/90 hover:border-purple-400 shadow-md hover:shadow-xl"
                      }`}
                    >
                      {/* Top Row: Category Badge & Index Indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase transition-colors duration-300 ${
                          isActive ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-800 group-hover:bg-[#08080A] group-hover:text-white"
                        }`}>
                          {project.category}
                        </span>

                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="text-[9px] font-mono font-bold text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2 py-0.5 rounded-full animate-pulse">
                              SPOTLIGHT ACTIVE
                            </span>
                          )}
                          <span className={`text-xs font-mono font-bold ${isActive ? "text-purple-300" : "text-slate-400"}`}>
                            0{project.id}
                          </span>
                        </div>
                      </div>

                      {/* Title & Short Tagline */}
                      <div>
                        <h3 className={`text-sm sm:text-base font-bold transition-colors duration-300 mb-1 flex items-center justify-between ${
                          isActive ? "text-white group-hover:text-purple-300" : "text-[#08080A] group-hover:text-purple-700"
                        }`}>
                          <span>{project.title}</span>
                          <span className={`text-xs ${isActive ? "text-purple-400" : "text-slate-400 opacity-0 group-hover:opacity-100"} transition-opacity`}>↗</span>
                        </h3>
                        <p className={`text-xs font-normal line-clamp-1 ${
                          isActive ? "text-slate-300" : "text-slate-600"
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Chips Footer */}
                      <div className={`pt-2.5 border-t flex items-center justify-between mt-2.5 ${
                        isActive ? "border-white/15" : "border-slate-100"
                      }`}>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[9px] font-mono px-2 py-0.5 rounded-md ${
                              isActive ? "bg-white/15 text-slate-200 border border-white/10" : "bg-slate-50 text-slate-600 border border-slate-200/80"
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-purple-500 text-white scale-105" : "bg-[#08080A] text-white group-hover:bg-purple-600"
                        }`}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* CARD ITEM 05: 'MORE' STACKED CARD LINKING TO /work */}
                <Link href="/work" className="block w-full relative z-50 mt-3 sm:mt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      rotate: -1.5,
                      x: 2,
                      scale: 0.98,
                    }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.03,
                      x: -4,
                      transition: { type: "spring", stiffness: 350, damping: 22 }
                    }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="group relative rounded-2xl cursor-pointer p-4 sm:p-5 border-2 border-purple-500/80 bg-[#08080A] text-white shadow-xl shadow-purple-950/20 flex items-center justify-between z-50 hover:z-60"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                      <span className="text-xl sm:text-2xl font-serif italic tracking-wide text-purple-200 select-none">
                        more
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                        VIEW ALL WORK
                      </span>
                      <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



