"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Brain, Network, Cpu, Sparkles, Database, ScanEye, Code2, ArrowRight } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

interface TechItem {
  name: string;
}

interface SkillDomain {
  id: string;
  num: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  sizeClass: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  defaultZIndex: number;
  technologies: TechItem[];
  projects: { name: string; id: string }[];
  relatedIds: string[];
}

export function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      icon: <BarChart2 className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 text-purple-400" />,
      shortDesc: "Exploratory analysis, statistical modeling, and data pipelines.",
      sizeClass: "w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96",
      pos: { top: "6%", left: "1%" },
      defaultZIndex: 15,
      technologies: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "SQL" },
        { name: "Scikit-learn" }
      ],
      projects: [
        { name: "Financial Forecasting Engine", id: "1" },
        { name: "Multi-Modal Knowledge Graph", id: "5" }
      ],
      relatedIds: ["ml", "dl"]
    },
    {
      id: "ml",
      num: "02",
      title: "MACHINE LEARNING",
      icon: <Brain className="w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 text-purple-400" />,
      shortDesc: "Supervised, unsupervised, & temporal predictive algorithms.",
      sizeClass: "w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
      pos: { top: "4%", left: "25%" },
      defaultZIndex: 10,
      technologies: [
        { name: "Python" },
        { name: "Scikit-learn" },
        { name: "SQL" },
        { name: "PyTorch" }
      ],
      projects: [
        { name: "Financial Forecasting Engine", id: "1" },
        { name: "Multi-Modal Knowledge Graph", id: "5" }
      ],
      relatedIds: ["ds", "dl"]
    },
    {
      id: "dl",
      num: "03",
      title: "DEEP LEARNING",
      icon: <Network className="w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 text-purple-400" />,
      shortDesc: "Neural architectures, Transformers, & multi-GPU training.",
      sizeClass: "w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
      pos: { top: "46%", left: "16%" },
      defaultZIndex: 20,
      technologies: [
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "OpenCV" },
        { name: "Python" }
      ],
      projects: [
        { name: "Financial Forecasting Engine", id: "1" },
        { name: "Speech-to-Speech Translation", id: "3" }
      ],
      relatedIds: ["ml", "cv", "gen_ai"]
    },
    {
      id: "ai_eng",
      num: "04",
      title: "AI ENGINEERING",
      icon: <Cpu className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 text-purple-400" />,
      shortDesc: "Production ML pipelines, high-throughput APIs, & agent loops.",
      sizeClass: "w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96",
      pos: { top: "28%", left: "37%" },
      defaultZIndex: 25,
      technologies: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "Docker" },
        { name: "Qdrant" },
        { name: "LangChain" }
      ],
      projects: [
        { name: "RAG Document Intelligence", id: "2" },
        { name: "Autonomous Agent Framework", id: "4" }
      ],
      relatedIds: ["gen_ai", "rag", "fullstack"]
    },
    {
      id: "fullstack",
      num: "08",
      title: "FULL-STACK AI",
      icon: <Code2 className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 text-purple-400" />,
      shortDesc: "Reactive web UIs, WebSockets, & cloud AI infrastructure.",
      sizeClass: "w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64",
      pos: { top: "2%", left: "54%" },
      defaultZIndex: 15,
      technologies: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "FastAPI" },
        { name: "PostgreSQL" }
      ],
      projects: [
        { name: "Financial Forecasting Engine", id: "1" },
        { name: "RAG Document Intelligence", id: "2" }
      ],
      relatedIds: ["ai_eng"]
    },
    {
      id: "gen_ai",
      num: "05",
      title: "GENERATIVE AI",
      icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 text-purple-400" />,
      shortDesc: "LLM fine-tuning, prompt guardrails, & autonomous reasoning.",
      sizeClass: "w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96",
      pos: { top: "4%", right: "1%" },
      defaultZIndex: 15,
      technologies: [
        { name: "Hugging Face" },
        { name: "LangChain" },
        { name: "Python" },
        { name: "Qdrant" }
      ],
      projects: [
        { name: "RAG Document Intelligence", id: "2" },
        { name: "Autonomous Agent Framework", id: "4" }
      ],
      relatedIds: ["rag", "ai_eng"]
    },
    {
      id: "rag",
      num: "06",
      title: "RAG",
      icon: <Database className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 text-purple-400" />,
      shortDesc: "Dense vector retrieval, hybrid search, & document grounding.",
      sizeClass: "w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64",
      pos: { bottom: "4%", right: "22%" },
      defaultZIndex: 10,
      technologies: [
        { name: "Qdrant" },
        { name: "LangChain" },
        { name: "Python" },
        { name: "FastAPI" }
      ],
      projects: [
        { name: "RAG Document Intelligence", id: "2" },
        { name: "Autonomous Agent Framework", id: "4" }
      ],
      relatedIds: ["gen_ai", "ai_eng"]
    },
    {
      id: "cv",
      num: "07",
      title: "COMPUTER VISION",
      icon: <ScanEye className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 text-purple-400" />,
      shortDesc: "Real-time edge object tracking, YOLOv8, & TensorRT inferencing.",
      sizeClass: "w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64",
      pos: { bottom: "4%", right: "2%" },
      defaultZIndex: 10,
      technologies: [
        { name: "OpenCV" },
        { name: "Python" },
        { name: "Docker" }
      ],
      projects: [
        { name: "High-Throughput Vision Analytics", id: "6" }
      ],
      relatedIds: ["dl"]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-[100dvh] bg-[#08080A] text-white flex flex-col justify-start px-4 sm:px-8 lg:px-14 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 lg:pb-28 rounded-t-[3rem] md:rounded-t-[4.5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.75)] border-t-2 border-purple-500/50 relative z-30 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Minimal Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-4 pb-2.5 border-b border-white/10"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            DATA SCIENCE & <span className="font-black italic text-purple-400">AI ENGINEERING</span>
          </h2>
        </motion.div>

        {/* DESKTOP ASYMMETRIC ORGANIC CLUSTER GRAPH IN FRAMED BORDER BOX (md+) */}
        <div className="hidden md:block w-full rounded-3xl md:rounded-[2.5rem] border border-white/20 bg-[#060608]/90 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-4 sm:p-6 lg:p-8 mt-1 mb-3 relative overflow-hidden">
          <div className="w-full min-h-[760px] lg:min-h-[860px] xl:min-h-[920px] relative">
            {domains.map((domain) => {
              const isHovered = hoveredId === domain.id;
              const isAnyHovered = hoveredId !== null;
              const activeDomain = domains.find((d) => d.id === hoveredId);
              const isRelated = activeDomain?.relatedIds.includes(domain.id);

              // Calculate Motion Scale & Opacity smoothly
              let targetScale = 1;
              let targetOpacity = 1;

              if (isAnyHovered) {
                if (isHovered) {
                  targetScale = 1.25;
                  targetOpacity = 1;
                } else if (isRelated) {
                  targetScale = 0.9;
                  targetOpacity = 0.85;
                } else {
                  targetScale = 0.78;
                  targetOpacity = 0.4;
                }
              }

              return (
                <motion.div
                  key={domain.id}
                  onMouseEnter={() => setHoveredId(domain.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    ...domain.pos,
                    position: "absolute",
                    zIndex: isHovered ? 50 : isRelated ? 30 : domain.defaultZIndex,
                  }}
                  animate={{
                    scale: targetScale,
                    opacity: targetOpacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                    mass: 0.5,
                  }}
                  className="cursor-pointer"
                >
                  {/* UNIFIED SINGLE CIRCULAR DOMAIN NODE */}
                  <div
                    className={`${domain.sizeClass} rounded-full bg-[#08080A] border-2 transition-colors duration-300 ${
                      isHovered
                        ? "border-purple-500 bg-[#08080A]/95 shadow-[0_0_70px_rgba(168,85,247,0.45)]"
                        : isRelated
                        ? "border-purple-400/80 bg-purple-950/20 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                        : "border-white/15 hover:border-purple-400/70 shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                    } flex flex-col items-center justify-center p-3 sm:p-4 text-center relative overflow-hidden group`}
                  >
                    {/* Subtle Background Radial Glow on Hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-radial from-purple-600/25 via-transparent to-transparent blur-xl pointer-events-none"
                      />
                    )}

                    {/* Header: Icon & Domain Tag */}
                    <div className="flex flex-col items-center z-10">
                      <div className={`p-2 sm:p-2.5 rounded-2xl transition-all duration-300 ${
                        isHovered 
                          ? "bg-purple-500/25 border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-105" 
                          : "bg-white/5 border border-white/10 group-hover:scale-105 group-hover:bg-purple-500/15"
                      }`}>
                        {domain.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-purple-400 tracking-widest uppercase mt-1.5 mb-0.5">
                        {domain.num} // DOMAIN
                      </span>
                      <h3 className="text-xs sm:text-sm lg:text-base font-black text-white group-hover:text-purple-300 tracking-tight leading-snug px-1 sm:px-2">
                        {domain.title}
                      </h3>
                    </div>

                    {/* SMOOTH EXPANDED REVEAL ON HOVER */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="w-full flex flex-col items-center mt-1.5 pt-1.5 border-t border-white/15 z-10"
                        >
                          {/* TECHNOLOGIES STAGGERED REVEAL */}
                          <div className="w-full max-w-[180px] sm:max-w-[220px]">
                            <span className="text-[8px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                              TECHNOLOGIES
                            </span>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {domain.technologies.map((tech, tIdx) => (
                                <motion.span
                                  key={tech.name}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.15, delay: tIdx * 0.02 }}
                                  className="text-[8px] sm:text-[9px] font-mono bg-white/10 text-slate-200 border border-white/15 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-1"
                                >
                                  <TechIcon name={tech.name} className="w-2.5 h-2.5" />
                                  <span>{tech.name}</span>
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* PROJECT APPLICATIONS REVEAL */}
                          {domain.projects.length > 0 && (
                            <div className="mt-1 pt-1 border-t border-white/10 w-full max-w-[160px] sm:max-w-[200px]">
                              <span className="text-[7px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-0.5">
                                USED IN
                              </span>
                              <div className="flex flex-wrap gap-0.5 justify-center">
                                {domain.projects.map((proj) => (
                                  <Link
                                    key={proj.id}
                                    href={`/projects/${proj.id}`}
                                    className="text-[8px] font-mono text-slate-300 hover:text-white bg-purple-950/40 hover:bg-purple-600/40 border border-purple-500/30 px-1 py-0.5 rounded transition-colors flex items-center gap-0.5 group/link"
                                  >
                                    <ArrowRight className="w-2 h-2 text-purple-400 group-hover/link:translate-x-0.5 transition-transform" />
                                    <span className="truncate max-w-[120px]">{proj.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE RESPONSIVE CONTROLLED VERTICAL LAYOUT (< md) */}
        <div className="md:hidden flex flex-col gap-4 py-4">
          {domains.map((domain) => {
            const isHovered = hoveredId === domain.id;

            return (
              <motion.div
                key={domain.id}
                onClick={() => setHoveredId(isHovered ? null : domain.id)}
                className={`rounded-2xl p-5 border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "bg-[#08080A] border-purple-500 shadow-xl shadow-purple-950/40"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/40">
                      {domain.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-purple-400 tracking-widest uppercase">
                        {domain.num} // DOMAIN
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {domain.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400">
                    {isHovered ? "▲" : "▼"}
                  </span>
                </div>

                {/* Expanded Content on Mobile */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pt-3 border-t border-white/10 mt-3"
                  >
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {domain.shortDesc}
                    </p>

                    <div className="mb-3">
                      <span className="text-[9px] font-mono text-purple-400 uppercase block mb-1.5">
                        TECHNOLOGIES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className="text-xs font-mono bg-white/10 text-slate-200 border border-white/15 px-2.5 py-0.5 rounded-md flex items-center gap-1.5"
                          >
                            <TechIcon name={tech.name} className="w-3 h-3" />
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {domain.projects.length > 0 && (
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-[9px] font-mono text-purple-400 uppercase block mb-1">
                          USED IN
                        </span>
                        <div className="flex flex-col gap-1">
                          {domain.projects.map((proj) => (
                            <Link
                              key={proj.id}
                              href={`/projects/${proj.id}`}
                              className="text-xs font-mono text-slate-300 hover:text-white py-1 flex items-center justify-between"
                            >
                              <span>→ {proj.name}</span>
                              <span className="text-[10px] text-purple-400">↗</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
