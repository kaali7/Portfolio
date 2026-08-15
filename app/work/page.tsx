"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { RobotAvatar } from "@/components/RobotAvatar";
import { TechIcon } from "@/components/TechIcon";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const categories = [
    "ALL",
    "AI ENGINEERING",
    "FULL-STACK AI",
    "VOICE AI",
    "HR ANALYTICS",
    "FINANCIAL ANALYTICS",
  ];

  const filteredProjects = projectsDetailData.filter((project) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      project.category.toUpperCase() === selectedCategory ||
      (project.subcategory && project.subcategory.toUpperCase() === selectedCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.card?.shortDescription || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.card?.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="work" />

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-10 border-b border-slate-200/90 gap-8"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] leading-[1.05]">
              Engineered <span className="font-light italic text-purple-600">Models</span> & Autonomous Systems
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed font-normal">
              An architectural index of real-time multi-agent reasoning graphs, high-frequency temporal predictors, vector RAG intelligence networks, and INT8 edge vision engines.
            </p>
          </div>

          {/* Right Hero Visual Area: Large Robot Mascot + Quick Metrics HUD Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end xl:items-center gap-6 lg:gap-8 self-stretch lg:self-auto">
            {/* AI Robot Avatar Mascot */}
            <div className="flex-shrink-0">
              <RobotAvatar mouseX={mouseX} mouseY={mouseY} speechText="HELLO!" size="xl" />
            </div>

            {/* Quick Metrics HUD Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex items-center gap-6 self-stretch lg:self-auto shadow-xs backdrop-blur-sm"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Production Deployed</span>
                <span className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">12+ Systems</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-200" />
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Avg Accuracy / mAP</span>
                <span className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">94.8%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar & Search Container */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 bg-slate-50/90 border border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-xs"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono font-bold tracking-wider px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-[#08080A] hover:text-white border border-slate-200/90"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full lg:w-80 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by architecture or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200/90 text-[#08080A] placeholder-slate-400 text-xs font-mono pl-11 pr-9 py-3 rounded-full focus:outline-none focus:border-purple-600 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-[#08080A] p-0.5"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects Asymmetrical Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-16 text-center my-8 shadow-xs"
            >
              <p className="text-slate-600 font-mono text-sm mb-4">No projects match the selected criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
              >
                RESET FILTERS
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {filteredProjects.map((project, idx) => {
                const isFeatured = idx % 3 === 0;
                const projectImage = project.visual?.heroImage || project.visual?.thumbnail;
                const projectMetrics = (project.engineering?.performance || []).slice(0, 4).map((p: string, i: number) => {
                  const labels = ["Latency", "Speed", "Scale", "Accuracy"];
                  return { label: labels[i % labels.length], val: p.split(" ")[0] || "High" };
                });
                if (projectMetrics.length === 0) projectMetrics.push({ label: "Status", val: project.status || "Live" });

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className={`${
                      isFeatured
                        ? "lg:col-span-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 border-purple-200/90"
                        : "lg:col-span-6 bg-slate-50/90 border-slate-200/90"
                    } border hover:border-purple-500 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group relative text-[#08080A]`}
                  >
                    <div>
                      {/* Top Header info */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase shadow-xs">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full text-purple-700 bg-purple-100 border border-purple-300">
                            {project.engineering?.performance?.[0]?.split(" ")[0] || "Optimized"}
                          </span>
                        </div>

                        <span className="text-xs font-mono font-bold text-slate-400">
                          SYSTEM // {project.number || `0${idx + 1}`}
                        </span>
                      </div>

                      {/* Content Grid layout for Featured vs Normal */}
                      {isFeatured ? (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
                          {/* Left Column: Details */}
                          <div className="lg:col-span-7">
                            <h2 className="text-2xl sm:text-4xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-3">
                              {project.title}
                            </h2>
                            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed mb-4">
                              {project.card?.shortDescription}
                            </p>

                            {/* System Overview Section from Data */}
                            {project.overview?.solution && (
                              <div className="bg-purple-50/60 border border-purple-200/80 rounded-2xl p-4 my-3 shadow-2xs">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-900 block mb-1">
                                  SYSTEM OVERVIEW
                                </span>
                                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                                  {project.overview.solution}
                                </p>
                                {project.overview.outcome && (
                                  <div className="mt-2.5 pt-2 border-t border-purple-200/60 flex items-start gap-2 text-xs text-purple-950 font-medium">
                                    <span className="text-[9px] font-mono font-bold text-purple-700 uppercase bg-purple-200/80 px-1.5 py-0.5 rounded flex-shrink-0">
                                      OUTCOME
                                    </span>
                                    <span className="line-clamp-2">{project.overview.outcome}</span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Metrics Grid */}
                            <div className="mt-4">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                                PERFORMANCE TELEMETRY
                              </span>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {projectMetrics.map((m, mIdx) => (
                                  <div key={mIdx} className="bg-white border border-slate-200/90 group-hover:border-purple-200 rounded-2xl p-3 shadow-2xs transition-colors">
                                    <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">{m.label}</span>
                                    <span className="text-sm sm:text-base font-mono font-black text-purple-700">{m.val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Media Preview Container */}
                          <div className="lg:col-span-5 w-full">
                            {projectImage ? (
                              <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                                <div className="bg-slate-950 px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                  </div>
                                  <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-medium">
                                    ARCHITECTURE BLUEPRINT
                                  </span>
                                </div>
                                <div className="relative w-full bg-[#0c0c11] p-2 flex items-center justify-center min-h-[220px] max-h-[340px] overflow-hidden">
                                  <img
                                    src={projectImage}
                                    alt={project.title}
                                    className="w-full h-full max-h-[320px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="w-full bg-purple-900/10 border border-purple-200/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
                                <Sparkles className="w-8 h-8 text-purple-600 mb-2" />
                                <span className="text-xs font-mono font-bold text-purple-900">PRODUCTION SYSTEM</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Standard Card Layout */
                        <div className="flex flex-col gap-4 mb-6">
                          <div>
                            <h2 className="text-2xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-2">
                              {project.title}
                            </h2>
                            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                              {project.card?.shortDescription}
                            </p>
                          </div>

                          {/* Media Preview Box (If image exists) */}
                          {projectImage && (
                            <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-2xl overflow-hidden shadow-md my-1">
                              <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">
                                  BLUEPRINT PREVIEW
                                </span>
                              </div>
                              <div className="p-2 flex items-center justify-center bg-[#0c0c11] max-h-52 overflow-hidden">
                                <img
                                  src={projectImage}
                                  alt={project.title}
                                  className="w-full h-full max-h-48 object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                              </div>
                            </div>
                          )}

                          {/* System Overview Section from Data (Moved Below Image) */}
                          {project.overview?.solution && (
                            <div className="bg-purple-50/60 border border-purple-200/80 rounded-2xl p-3.5 my-1 shadow-2xs">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-900 block mb-1">
                                SYSTEM OVERVIEW
                              </span>
                              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                                {project.overview.solution}
                              </p>
                            </div>
                          )}

                          {/* Performance Telemetry */}
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                              PERFORMANCE TELEMETRY
                            </span>
                            <div className="grid grid-cols-2 gap-3">
                              {projectMetrics.slice(0, 2).map((m, mIdx) => (
                                <div key={mIdx} className="bg-white border border-slate-200/90 group-hover:border-purple-200 rounded-2xl p-3 shadow-2xs">
                                  <span className="text-[9px] font-mono uppercase text-slate-500 block mb-0.5">{m.label}</span>
                                  <span className="text-sm font-mono font-black text-purple-700">{m.val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Tech Stack Chips (ALL TECH WITH ICONS) & Case Study Link */}
                    <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                      <div className="flex flex-wrap gap-1.5 max-w-full">
                        {(project.card?.tags || []).map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-800 bg-white border border-slate-200/90 px-3 py-1 rounded-lg font-medium shadow-2xs hover:border-purple-300 transition-colors"
                          >
                            <TechIcon name={tag} className="w-3.5 h-3.5 flex-shrink-0 text-purple-600" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work/${project.id}`}
                        className="px-6 py-2.5 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-xs font-mono font-black tracking-wider transition-all duration-200 flex items-center gap-2 flex-shrink-0 shadow-md group/btn"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Interactive Contact Component Footer */}
      <Contact />
    </main>
  );
}
