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
      className="w-full min-h-screen bg-[#060608] text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div className="bg-white w-full pb-8">
        {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="work" />

      {/* Hero Header Section */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-8 sm:pt-12 pb-6 sm:pb-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-6 sm:pb-8 border-b border-slate-200/90 gap-6"
        >
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-[#08080A] leading-[1.15]">
              Engineered <span className="font-light italic text-purple-600">Models</span> <br className="hidden sm:inline" />& Autonomous Systems
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-2.5 max-w-xl leading-relaxed font-normal">
              An architectural index of real-time multi-agent reasoning graphs, high-frequency temporal predictors, vector RAG intelligence networks, and INT8 edge vision engines.
            </p>
          </div>

          {/* Right Hero Visual Area: Mascot + Metrics Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end xl:items-center gap-4 sm:gap-6 self-stretch lg:self-auto">
            {/* AI Robot Avatar Mascot */}
            <div className="flex-shrink-0">
              <RobotAvatar mouseX={mouseX} mouseY={mouseY} speechText="HELLO!" size="lg" />
            </div>

            {/* Quick Metrics HUD Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 sm:gap-5 self-stretch lg:self-auto shadow-xs backdrop-blur-sm"
            >
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">Production Deployed</span>
                <span className="text-xl sm:text-2xl font-black text-[#08080A] font-mono">12+ Systems</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200" />
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">Avg Accuracy / mAP</span>
                <span className="text-xl sm:text-2xl font-black text-purple-600 font-mono">94.8%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar & Search Container */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pb-6 sm:pb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 shadow-xs"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] font-mono font-bold tracking-wider px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-sm shadow-purple-600/25 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-[#08080A] hover:text-white border border-slate-200/90"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by architecture or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200/90 text-[#08080A] placeholder-slate-400 text-[11px] font-mono pl-9 pr-7 py-2 rounded-full focus:outline-none focus:border-purple-600 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2 text-xs text-slate-400 hover:text-[#08080A] p-0.5"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects Asymmetrical Bento Grid */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pb-16 relative z-10">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-12 text-center my-6 shadow-xs"
            >
              <p className="text-slate-600 font-mono text-xs mb-3">No projects match the selected criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
              >
                RESET FILTERS
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
            >
              {filteredProjects.map((project, idx) => {
                const isFeatured = idx % 3 === 0;
                const projectImage = project.visual?.heroImage || project.visual?.thumbnail;
                const githubMatch = project.links?.github?.match(/\]\((https?:\/\/[^\)]+)\)/);
                const cleanGithubUrl = githubMatch ? githubMatch[1] : (project.links?.github?.startsWith("http") ? project.links.github : null);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                    className={`${
                      isFeatured
                        ? "lg:col-span-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 border-purple-200/90"
                        : "lg:col-span-6 bg-slate-50/90 border-slate-200/90"
                    } border hover:border-purple-500 hover:bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group relative text-[#08080A]`}
                  >
                    <div>
                      {/* Top Header info & Micro-Telemetry Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80 mb-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-white bg-[#08080A] px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                            {project.category}
                          </span>
                          {project.subcategory && (
                            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full text-purple-700 bg-purple-100 border border-purple-300">
                              {project.subcategory}
                            </span>
                          )}
                          {project.type && (
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full text-slate-600 bg-slate-100 border border-slate-200/90 hidden sm:inline-block">
                              {project.type}
                            </span>
                          )}
                          {project.status && (
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${
                              project.status === "completed" 
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${project.status === "completed" ? "bg-emerald-500 animate-pulse" : "bg-amber-500 animate-ping"}`} />
                              <span className="uppercase">{project.status}</span>
                            </span>
                          )}
                        </div>

                        {project.year && (
                          <span className="text-[11px] font-mono font-bold text-slate-400">
                            {project.year}
                          </span>
                        )}
                      </div>

                      {/* Content Grid layout for Featured vs Normal */}
                      {isFeatured ? (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center mb-4">
                          {/* Left Column: Details */}
                          <div className="lg:col-span-7">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-2">
                              {project.title}
                            </h2>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                              {project.card?.shortDescription}
                            </p>

                            {/* System Overview Section - Exclusively for Netran AI Flagship Project */}
                            {project.id === "netran-ai" && project.overview && (
                              <div className="bg-purple-50/60 border border-purple-200/80 rounded-xl p-3 my-2.5 space-y-1.5 shadow-2xs">
                                <div className="flex items-center justify-between border-b border-purple-200/60 pb-1">
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                                    SYSTEM OVERVIEW & ARCHITECTURE
                                  </span>
                                </div>

                                {project.overview.problem && (
                                  <div className="text-[11px] text-slate-700 leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-rose-700 uppercase bg-rose-100 border border-rose-200 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      CHALLENGE
                                    </span>
                                    <span>{project.overview.problem}</span>
                                  </div>
                                )}

                                {project.overview.motivation && (
                                  <div className="text-[11px] text-slate-700 leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-amber-700 uppercase bg-amber-100 border border-amber-200 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      MOTIVATION
                                    </span>
                                    <span>{project.overview.motivation}</span>
                                  </div>
                                )}

                                {project.overview.solution && (
                                  <div className="text-[11px] text-slate-800 leading-relaxed font-medium pt-0.5">
                                    <span className="text-[8.5px] font-mono font-bold text-purple-800 uppercase bg-purple-200/80 border border-purple-300 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      SOLUTION
                                    </span>
                                    <span>{project.overview.solution}</span>
                                  </div>
                                )}

                                {project.overview.outcome && (
                                  <div className="pt-1.5 border-t border-purple-200/60 flex items-start gap-1.5 text-[11px] text-slate-900 font-medium leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-emerald-800 uppercase bg-emerald-100 border border-emerald-300 px-1 py-0.5 rounded flex-shrink-0">
                                      OUTCOME
                                    </span>
                                    <span>{project.overview.outcome}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Right Column: Media Preview Container */}
                          <div className="lg:col-span-5 w-full">
                            {projectImage ? (
                              <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col">
                                <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                  </div>
                                  <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase font-medium">
                                    ARCHITECTURE BLUEPRINT
                                  </span>
                                </div>
                                <div className="relative w-full bg-[#0c0c11] p-1.5 flex items-center justify-center min-h-[180px] max-h-[260px] overflow-hidden">
                                  <img
                                    src={projectImage}
                                    alt={project.title}
                                    className="w-full h-full max-h-[250px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="w-full bg-purple-900/10 border border-purple-200/60 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
                                <Sparkles className="w-6 h-6 text-purple-600 mb-1.5" />
                                <span className="text-[11px] font-mono font-bold text-purple-900">PRODUCTION SYSTEM</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Standard Card Layout */
                        <div className="flex flex-col gap-3 mb-4">
                          <div>
                            <h2 className="text-lg sm:text-xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-1">
                              {project.title}
                            </h2>
                            <p className="text-xs leading-relaxed text-slate-600 line-clamp-3">
                              {project.card?.shortDescription}
                            </p>
                          </div>

                          {/* Media Preview Box */}
                          {projectImage && (
                            <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-xl overflow-hidden shadow-sm my-0.5">
                              <div className="bg-slate-950 px-2.5 py-1 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-[8.5px] font-mono text-slate-400 tracking-wider uppercase">
                                  BLUEPRINT PREVIEW
                                </span>
                              </div>
                              <div className="p-1.5 flex items-center justify-center bg-[#0c0c11] max-h-52 overflow-hidden">
                                <img
                                  src={projectImage}
                                  alt={project.title}
                                  className="w-full h-full max-h-48 object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer Tech Stack Chips & Action Links */}
                    <div className="pt-3.5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-1">
                      <div className="flex flex-wrap gap-1 max-w-full">
                        {(project.card?.tags || []).map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-800 bg-white border border-slate-200/90 px-2 py-0.5 rounded-md font-medium shadow-2xs hover:border-purple-300 transition-colors"
                          >
                            <TechIcon name={tag} className="w-3 h-3 flex-shrink-0 text-purple-600" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      {isFeatured ? (
                        /* Horizontal action button layout for Featured / Netran AI card */
                        <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
                          {cleanGithubUrl && (
                            <a
                              href={cleanGithubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3.5 py-2 bg-white hover:bg-[#08080A] text-slate-700 hover:text-white border border-slate-200/90 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-2xs group/gh cursor-pointer"
                              title={`View ${project.title} on GitHub`}
                            >
                              <TechIcon name="GitHub" color="currentColor" className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover/gh:scale-110" />
                              <span>GITHUB</span>
                            </a>
                          )}

                          <Link
                            href={`/work/${project.id}`}
                            className="px-4 py-2 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm group/btn"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </div>
                      ) : (
                        /* Stacked vertical action button layout for standard cards */
                        <div className="flex flex-col items-stretch sm:items-center gap-1.5 flex-shrink-0 self-end sm:self-auto min-w-[145px]">
                          <Link
                            href={`/work/${project.id}`}
                            className="w-full px-4 py-2 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm group/btn text-center"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>

                          {cleanGithubUrl && (
                            <a
                              href={cleanGithubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full px-3.5 py-1.5 bg-white hover:bg-[#08080A] text-slate-700 hover:text-white border border-slate-200/90 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs group/gh cursor-pointer text-center"
                              title={`View ${project.title} on GitHub`}
                            >
                              <TechIcon name="GitHub" color="currentColor" className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover/gh:scale-110" />
                              <span>GITHUB</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      </div>

      {/* Interactive Contact Component Footer */}
      <Contact />
    </main>
  );
}
