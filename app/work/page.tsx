"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";
import { Search, ArrowUpRight, Cpu, Layers, Sparkles, Filter } from "lucide-react";

// Design Read:
// Reading this as: High-contrast editorial theme reversal for /work,
// switching major background to pure high-contrast White (bg-white / bg-slate-50),
// with Obsidian Black (text-[#08080A]) for headings/structure and Vibrant Purple
// (text-purple-600, bg-purple-600) for highlights, metrics, and interactive CTAs.

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
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white pb-24 relative overflow-hidden">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-signature text-3xl sm:text-4xl text-[#08080A] hover:text-purple-600 transition-colors"
          >
            <span>Ashwini</span>
          </Link>

          {/* Navigation Bar Links */}
          <nav className="flex items-center gap-8 lg:gap-12 text-sm sm:text-base font-mono font-black tracking-widest text-slate-700">
            <Link href="/" className="hover:text-[#08080A] transition-colors py-1">
              HOME
            </Link>
            <Link
              href="/work"
              className="text-purple-600 border-b-2 border-purple-600 py-1"
            >
              WORK
            </Link>
            <Link href="/about" className="hover:text-[#08080A] transition-colors py-1">
              ABOUT
            </Link>
          </nav>

          {/* Right CTA Button */}
          <Link
            href="/#contact"
            className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-mono font-black tracking-wider text-white bg-[#08080A] hover:bg-purple-600 rounded-full transition-all duration-300 shadow-md hidden sm:block"
          >
            GET IN TOUCH
          </Link>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-slate-200/80 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>PORTFOLIO ARCHIVE // 06 PRODUCTION SYSTEMS</span>
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] leading-none">
              Work & <span className="font-light italic text-purple-600">Architectures</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed font-normal">
              A comprehensive showcase of temporal machine learning models, multi-agent autonomous frameworks, vector RAG intelligence pipelines, and edge computer vision engines.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-6 self-stretch md:self-auto shadow-xs">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase block">Deployed Models</span>
              <span className="text-2xl font-black text-[#08080A] font-mono">12+ Production</span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200" />
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase block">Avg mAP / Acc</span>
              <span className="text-2xl font-black text-purple-600 font-mono">94.8%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar & Search Container */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 shadow-xs">
          
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
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                      : "bg-white text-slate-700 hover:bg-[#08080A] hover:text-white border border-slate-200/90"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200/90 text-[#08080A] placeholder-slate-400 text-xs font-mono pl-10 pr-8 py-2.5 rounded-full focus:outline-none focus:border-purple-600 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-[#08080A]"
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
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-12 text-center my-8 shadow-xs">
            <p className="text-slate-600 font-mono text-sm">No projects found matching your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-mono font-bold transition-colors shadow-xs"
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
                className="bg-slate-50/90 border border-slate-200/90 hover:border-purple-500 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3 py-1 rounded-full uppercase shadow-xs">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3 py-1 rounded-full">
                        {project.previewMetric}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-400 font-bold">
                      SYSTEM // 0{project.id}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-3xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-3">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white border border-slate-200/80 rounded-xl p-2.5 shadow-2xs">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">{m.label}</span>
                        <span className="text-sm font-mono font-black text-purple-700">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="bg-purple-50/80 border border-purple-200/70 rounded-2xl p-4 my-4">
                    <span className="text-[10px] font-mono font-bold text-purple-900 uppercase tracking-wider block mb-2">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-800 flex items-start gap-2 leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tech Stack Chips & CTA Link */}
                <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-medium shadow-2xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.id}`}
                    className="px-5 py-2.5 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-xs font-mono font-black tracking-wider transition-all duration-200 flex items-center gap-2 flex-shrink-0 shadow-md group/btn"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Initiate Collaboration CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 relative z-10">
        <div className="bg-[#08080A] text-white border-2 border-purple-500/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
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
