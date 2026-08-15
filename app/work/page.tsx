"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/projectsData";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "ALL",
    "AI ENGINEERING",
    "FULL-STACK AI",
    "VOICE AI",
    "HR ANALYTICS",
    "FINANCIAL ANALYTICS",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      project.category.toUpperCase() === selectedCategory ||
      (project.subcategory && project.subcategory.toUpperCase() === selectedCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="work" />

      {/* Hero Header Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end pb-10 border-b border-slate-200/90 gap-8"
        >
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              <span>PRODUCTION SYSTEMS ARCHIVE // 06 SYSTEMS</span>
            </motion.span>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] leading-[1.05]">
              Engineered <span className="font-light italic text-purple-600">Models</span> & Autonomous Systems
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed font-normal">
              An architectural index of real-time multi-agent reasoning graphs, high-frequency temporal predictors, vector RAG intelligence networks, and INT8 edge vision engines.
            </p>
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
                      isFeatured ? "lg:col-span-12 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 border-purple-200/90" : "lg:col-span-6 bg-slate-50/90 border-slate-200/90"
                    } border hover:border-purple-500 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${
                      project.image ? "text-white" : "text-[#08080A]"
                    }`}
                  >
                    {/* Background Image (If available) */}
                    {project.image && (
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Top Header info */}
                      <div className={`flex items-center justify-between pb-4 border-b mb-6 ${project.image ? "border-white/20" : "border-slate-200/80"}`}>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase shadow-xs">
                            {project.category}
                          </span>
                          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${project.image ? "text-purple-300 bg-purple-900/50 border border-purple-500/50" : "text-purple-700 bg-purple-100 border border-purple-300"}`}>
                            {project.previewMetric}
                          </span>
                        </div>

                        <span className={`text-xs font-mono font-bold ${project.image ? "text-slate-300" : "text-slate-400"}`}>
                          SYSTEM // 0{project.id}
                        </span>
                      </div>

                      {/* Content Grid layout */}
                      <div className={isFeatured ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" : "block"}>
                        <div className={isFeatured ? "lg:col-span-7" : "w-full"}>
                          <h2 className={`text-2xl sm:text-4xl font-black transition-colors tracking-tight mb-3 ${project.image ? "text-white group-hover:text-purple-300" : "text-[#08080A] group-hover:text-purple-600"}`}>
                            {project.title}
                          </h2>
                          <p className={`text-xs sm:text-sm font-normal leading-relaxed mb-6 ${project.image ? "text-slate-300" : "text-slate-600"}`}>
                            {project.fullDescription}
                          </p>

                          {/* Key Highlights Bullet list */}
                          <div className={`${project.image ? "bg-black/40 border-white/20" : "bg-white/80 border-purple-200/70"} border rounded-2xl p-4 my-4 shadow-2xs backdrop-blur-md`}>
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-2 ${project.image ? "text-purple-300" : "text-purple-900"}`}>
                              KEY ARCHITECTURAL HIGHLIGHTS
                            </span>
                            <ul className="space-y-1.5">
                              {project.highlights.slice(0, 3).map((h, hIdx) => (
                                <li key={hIdx} className={`text-xs flex items-start gap-2 leading-tight ${project.image ? "text-slate-200" : "text-slate-800"}`}>
                                  <span className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${project.image ? "bg-purple-400" : "bg-purple-600"}`} />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className={isFeatured ? "lg:col-span-5" : "w-full"}>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-2 ${project.image ? "text-slate-300" : "text-slate-500"}`}>
                            PERFORMANCE TELEMETRY
                          </span>
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {project.metrics.map((m, mIdx) => (
                              <div key={mIdx} className={`${project.image ? "bg-black/40 border-white/20 group-hover:border-purple-400 text-white" : "bg-white border-slate-200/90 group-hover:border-purple-200"} border rounded-2xl p-3.5 shadow-2xs transition-colors backdrop-blur-md`}>
                                <span className={`text-[9px] font-mono uppercase block mb-1 ${project.image ? "text-slate-300" : "text-slate-500"}`}>{m.label}</span>
                                <span className={`text-base sm:text-lg font-mono font-black ${project.image ? "text-purple-300" : "text-purple-700"}`}>{m.val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Tech Stack Chips & Link */}
                    <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-lg font-medium shadow-2xs">
                            {tag}
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
