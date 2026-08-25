"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { Code2, Layers } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

export function Projects() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const projects = projectsDetailData.slice(0, 4);
  const activeIndex = activeIdx;
  const activeProject = projects[activeIndex];

  // Derive visual and metrics
  const activeImage = activeProject.visual?.heroImage || activeProject.visual?.thumbnail;
  const activeVideo = activeProject.visual?.video;
  
  // Helper to extract clean readable metric values (e.g. "< 250ms", "< 1s", "~150ms")
  const parseMetricVal = (str: string): string => {
    if (!str) return "High";
    const lower = str.toLowerCase();
    if (lower.includes("under 250ms") || lower.includes("250ms")) return "< 250ms";
    if (lower.includes("instant") || lower.includes("< 1s")) return "< 1s";
    if (lower.includes("150ms")) return "~150ms";
    const match = str.match(/(?:[<>~]?\s*\d+\s*(?:ms|s|%|k|M|fps)|Instant|< 1s)/i);
    return match ? match[0] : str.split(" ")[0];
  };

  const activeMetrics = (activeProject.engineering?.performance || []).slice(0, 2).map((p: string, i: number) => {
    const labels = ["Latency", "Speed"];
    return { label: labels[i % labels.length], val: parseMetricVal(p) };
  });

  if (activeMetrics.length === 0) {
    activeMetrics.push({ label: "Latency", val: "Optimized" });
    activeMetrics.push({ label: "Speed", val: "High" });
  }

  // Include Subcategory card alongside Latency & Speed
  if (activeProject.subcategory) {
    activeMetrics.push({ label: "Subcategory", val: activeProject.subcategory });
  }

  // Tech tags logic ("show top 4 tech and more box")
  const allTags = activeProject.card?.tags || [];
  const displayTags = allTags.slice(0, 4);
  const remainingCount = allTags.length - displayTags.length;

  // Tech icon mapping helper using Simple Icons CDN
  const getTechIconSlug = (tag: string): string => {
    const lower = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (lower.includes("python")) return "python";
    if (lower.includes("fastapi")) return "fastapi";
    if (lower.includes("next")) return "nextdotjs";
    if (lower.includes("react")) return "react";
    if (lower.includes("typescript") || lower === "ts") return "typescript";
    if (lower.includes("pytorch")) return "pytorch";
    if (lower.includes("docker")) return "docker";
    if (lower.includes("tailwind")) return "tailwindcss";
    if (lower.includes("postgres")) return "postgresql";
    if (lower.includes("sqlite")) return "sqlite";
    if (lower.includes("gemini")) return "googlegemini";
    if (lower.includes("groq")) return "groq";
    if (lower.includes("vite")) return "vite";
    if (lower.includes("latex")) return "latex";
    if (lower.includes("node")) return "nodedotjs";
    if (lower.includes("javascript") || lower === "js") return "javascript";
    return "";
  };

  return (
    <section 
      id="projects" 
      className="w-full min-h-full min-h-screen bg-white text-[#08080A] flex flex-col justify-start px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.18)] border-t border-slate-200/80 relative z-20 overflow-hidden"
    >
      <div className="w-full mx-auto relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 pb-4 border-b border-slate-200/80"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#08080A] leading-tight">
              Featured <span className="font-black italic">Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-slate-600 text-xs sm:text-sm mt-3 md:mt-0 font-normal leading-relaxed">
            Architecting scalable machine learning models, autonomous agent frameworks, and generative AI systems built for real-world impact.
          </p>
        </motion.div>

        {/* Dynamic Interactive Projects Container */}
        <div className="w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 w-full items-start">
            
            {/* LEFT SIDE: MAIN SPOTLIGHT SCREEN */}
            <div className="lg:col-span-8 xl:col-span-8 w-full h-full min-h-[460px] relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.97, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full bg-[#08080C] text-white border border-slate-800/80 rounded-3xl p-5 sm:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden relative z-30 min-h-[460px]"
                >
                  {/* Atmospheric Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />

                  {/* 1. TOP HEADER ROW: TITLE (LEFT) & CATEGORY BADGE (TOP-RIGHT) */}
                  <div className="mb-2 z-10 flex items-center justify-between gap-4">
                    <Link href={`/work/${activeProject.id}`} className="group inline-block">
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors tracking-tight">
                        {activeProject.title}
                      </h3>
                    </Link>

                    {/* Category Badge */}
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-white bg-purple-600/90 border border-purple-400/30 px-3 py-0.5 rounded-full uppercase shadow-xs flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-200 animate-pulse" />
                      <span>{activeProject.category}</span>
                    </span>
                  </div>

                  {/* 2. PREMIUM MEDIA WINDOW */}
                  <div className="w-full my-2 z-10">
                    <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative flex flex-col">
                      
                      {/* Window Frame Bar */}
                      <div className="bg-slate-950/90 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase font-medium">
                          {activeVideo ? "SYSTEM VIDEO DEMO" : "ARCHITECTURE BLUEPRINT"}
                        </span>
                      </div>

                      {/* Uncropped Crisp Media Viewport */}
                      <div className="relative w-full bg-[#0c0c11] flex items-center justify-center p-2 overflow-hidden min-h-[180px] max-h-[300px]">
                        {activeVideo ? (
                          <video 
                            src={activeVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full max-h-[280px] object-contain rounded-xl"
                          />
                        ) : activeImage ? (
                          <img 
                            src={activeImage} 
                            alt={activeProject.title} 
                            className="w-full h-full max-h-[280px] object-contain rounded-xl transition-transform duration-500 hover:scale-[1.01]"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-6 text-slate-500 text-center">
                            <Layers className="w-8 h-8 mb-2 stroke-1 text-purple-400" />
                            <span className="text-xs font-mono">System Blueprint</span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* 3. SHORT DESCRIPTION */}
                  <div className="my-1.5 z-10 max-w-3xl">
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal line-clamp-2">
                      {activeProject.card?.shortDescription || activeProject.overview?.problem}
                    </p>
                  </div>

                  {/* 4. ILLUMINATED KPI METRICS CARDS */}
                  <div className="flex flex-wrap gap-2.5 my-2 z-10">
                    {activeMetrics.map((m, idx) => (
                      <div key={idx} className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2 min-w-[100px] flex flex-col justify-center shadow-xs hover:border-purple-400/40 transition-colors">
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">{m.label}</span>
                        <span className="text-sm sm:text-base font-black text-purple-300 tracking-tight whitespace-nowrap">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* 5. BOTTOM ACTION ROW: TECH CHIPS + CTA */}
                  <div className="pt-3.5 mt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 z-10">
                    
                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {displayTags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-200 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-md font-medium shadow-xs hover:border-purple-400/50 transition-colors">
                          <TechIcon name={tag} className="w-3 h-3 flex-shrink-0 text-purple-300 opacity-90" />
                          <span>{tag}</span>
                        </span>
                      ))}

                      {/* "+X More" Badge */}
                      {remainingCount > 0 && (
                        <span className="text-[10px] font-mono font-bold text-purple-200 bg-purple-900/60 border border-purple-500/40 px-2 py-0.5 rounded-md shadow-xs">
                          +{remainingCount} more
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/work/${activeProject.id}`}
                      className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full text-xs font-mono font-bold tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-1.5 flex-shrink-0 cursor-pointer group"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: STACKED CARDS DECK */}
            <div className="lg:col-span-4 xl:col-span-4 w-full h-full relative flex flex-col justify-start">
              
              <div className="relative w-full space-y-0">
                {projects.map((project, i) => {
                  const isActive = i === activeIndex;

                  const rotations = [-1.5, 1.5, -1, 1];
                  const xOffsets = [1.5, -1.5, 1.5, -1.5];
                  const rotation = rotations[i % rotations.length];
                  const xOffset = xOffsets[i % xOffsets.length];

                  return (
                    <motion.div 
                      key={project.id}
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={() => setActiveIdx(i)}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{
                        rotate: isActive ? 0 : rotation,
                        x: isActive ? -3 : xOffset,
                        scale: isActive ? 1.01 : 0.98,
                        y: isActive ? -3 : 0,
                      }}
                      whileHover={{
                        rotate: 0,
                        scale: 1.02,
                        x: -4,
                        transition: { type: "spring", bounce: 0.15, duration: 0.4 }
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                      style={{
                        zIndex: isActive ? 40 : 30 - i,
                      }}
                      className={`group relative rounded-2xl transition-colors duration-200 cursor-pointer p-3.5 sm:p-4 border flex flex-col justify-between ${
                        i > 0 ? "-mt-5 sm:-mt-6" : ""
                      } ${
                        isActive 
                          ? "bg-[#08080A] text-white border-purple-500 shadow-xl shadow-purple-950/30" 
                          : "bg-white text-[#08080A] border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {/* Top Row: Category Badge & Index */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase transition-colors duration-300 ${
                          isActive ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-800 group-hover:bg-[#08080A] group-hover:text-white"
                        }`}>
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {isActive && (
                            <span className="text-[8.5px] font-mono font-bold text-purple-300 bg-purple-500/20 border border-purple-500/30 px-1.5 py-0.5 rounded-full animate-pulse">
                              SPOTLIGHT ACTIVE
                            </span>
                          )}
                          <span className={`text-[11px] font-mono font-bold ${isActive ? "text-purple-300" : "text-slate-400"}`}>
                            {project.number || `0${i + 1}`}
                          </span>
                        </div>
                      </div>

                      {/* Title & Short Tagline */}
                      <div>
                        <h3 className={`text-xs sm:text-sm font-bold transition-colors duration-300 mb-0.5 flex items-center justify-between ${
                          isActive ? "text-white group-hover:text-purple-300" : "text-[#08080A] group-hover:text-purple-700"
                        }`}>
                          <span>{project.title}</span>
                          <span className={`text-xs ${isActive ? "text-purple-400" : "text-slate-400 opacity-0 group-hover:opacity-100"} transition-opacity`}>↗</span>
                        </h3>
                        <p className={`text-[11px] font-normal line-clamp-1 ${
                          isActive ? "text-slate-300" : "text-slate-600"
                        }`}>
                          {project.card?.shortDescription}
                        </p>
                      </div>

                      {/* Tech Chips Footer */}
                      <div className={`pt-2 border-t flex items-center justify-between mt-2 ${
                        isActive ? "border-white/15" : "border-slate-100"
                      }`}>
                        <div className="flex flex-wrap items-center gap-1">
                          {(project.card?.tags || []).slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className={`inline-flex items-center gap-1 text-[8.5px] font-mono px-1.5 py-0.5 rounded-md ${
                              isActive ? "bg-[#18181B] text-slate-200 border border-white/10" : "bg-slate-100 text-slate-700 border border-slate-200/80"
                            }`}>
                              <TechIcon name={tag} className="w-2.5 h-2.5 flex-shrink-0 opacity-80" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>

                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-purple-500 text-white scale-105" : "bg-[#08080A] text-[#ffffff] group-hover:bg-purple-600"
                        }`}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* CARD ITEM 05: 'MORE' STACKED CARD */}
                <Link href="/work" className="block w-full relative z-50 mt-2.5 sm:mt-3">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      rotate: -1,
                      x: 1.5,
                      scale: 0.98,
                    }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.02,
                      x: -3,
                      transition: { type: "spring", bounce: 0.15, duration: 0.4 }
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    className="group relative rounded-2xl cursor-pointer p-3.5 sm:p-4 border border-purple-500/60 bg-[#08080A] text-white shadow-xl shadow-purple-950/20 flex items-center justify-between z-50 hover:z-60"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                      <span className="text-lg sm:text-xl font-serif italic tracking-wide text-purple-200 select-none">
                        more
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                        VIEW ALL WORK
                      </span>
                      <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
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
