"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "ALL",
    "AI / ML",
    "GENAI & LLMS",
    "AI SYSTEMS",
    "AGENTIC AI",
    "COMPUTER VISION",
    "DATA ENGINEERING",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      project.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full min-h-screen bg-[#08080A] text-white selection:bg-purple-500 selection:text-white pb-24">
      {/* Top Header Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 flex items-center justify-between border-b border-white/10 relative z-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-signature text-3xl text-white hover:text-purple-400 transition-colors"
        >
          <span>Ashwini</span>
        </Link>

        {/* Navigation Bar Links */}
        <nav className="flex items-center gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg font-mono font-black tracking-widest text-white/90">
          <Link href="/" className="hover:text-white transition-colors py-1">
            HOME
          </Link>
          <Link
            href="/work"
            className="text-purple-400 border-b-2 border-purple-400 py-1"
          >
            WORK
          </Link>
          <Link href="/about" className="hover:text-white transition-colors py-1">
            ABOUT
          </Link>
        </nav>

        {/* Right CTA Button */}
        <Link
          href="/#contact"
          className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-mono font-black tracking-wider text-[#08080A] bg-white hover:bg-slate-100 rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(255,255,255,0.2)] hidden sm:block"
        >
          GET IN TOUCH
        </Link>
      </header>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-white/10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              PORTFOLIO ARCHIVE // 06 PRODUCTION SYSTEMS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              Work & <span className="font-light italic text-purple-400">Architectures</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed font-normal">
              A comprehensive showcase of temporal machine learning models, multi-agent autonomous frameworks, vector RAG intelligence pipelines, and edge computer vision engines.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-6 self-stretch md:self-auto">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">Deployed Models</span>
              <span className="text-2xl font-black text-white font-mono">12+ Production</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">Avg mAP / Acc</span>
              <span className="text-2xl font-black text-purple-400 font-mono">94.8%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar & Search Container */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono font-bold tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                      : "bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/15 text-white placeholder-slate-500 text-xs font-mono px-4 py-2.5 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {filteredProjects.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center my-8">
            <p className="text-slate-400 font-mono text-sm">No projects found matching your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-xs font-mono font-bold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-slate-900/80 border border-white/15 hover:border-purple-500/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)] transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#08080A] bg-white px-3 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/20 border border-purple-500/40 px-3 py-1 rounded-full">
                        {project.previewMetric}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-400 font-bold">
                      SYSTEM // 0{project.id}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors tracking-tight mb-3">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                        <span className="text-[9px] font-mono text-slate-400 uppercase block mb-0.5">{m.label}</span>
                        <span className="text-sm font-mono font-black text-purple-300">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="bg-purple-950/40 border border-purple-800/40 rounded-2xl p-4 my-4">
                    <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider block mb-2">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tech Stack Chips & CTA Link */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-300 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="px-5 py-2.5 bg-white text-[#08080A] hover:bg-purple-500 hover:text-white rounded-full text-xs font-mono font-black tracking-wider transition-all duration-200 flex items-center gap-2 flex-shrink-0 shadow-md group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Initiate Collaboration CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 relative z-10">
        <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-[#08080A] border-2 border-purple-500/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Need a Custom AI Architecture or Model?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Collaborating on production LLM RAG pipelines, autonomous agent systems, temporal time-series predictors, and edge computer vision deployments.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#08080A] hover:bg-purple-400 hover:text-white rounded-full text-sm font-mono font-black tracking-wider transition-all duration-300 shadow-xl"
          >
            <span>INITIATE COLLABORATION</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
