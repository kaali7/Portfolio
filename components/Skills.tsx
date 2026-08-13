"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  name: string;
  brandColor?: string;
}

interface SkillDomain {
  id: string;
  num: string;
  title: string;
  icon: string;
  shortDesc: string;
  technologies: TechItem[];
  projects: { name: string; id: string }[];
  relatedIds: string[];
}

export function Skills() {
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      icon: "📊",
      shortDesc: "Exploratory analysis, statistical modeling, and data pipelines.",
      technologies: [
        { name: "Python", brandColor: "#3776AB" },
        { name: "Pandas", brandColor: "#150458" },
        { name: "NumPy", brandColor: "#4DABCF" },
        { name: "Matplotlib", brandColor: "#11557C" },
        { name: "Seaborn", brandColor: "#388E3C" },
        { name: "SQL", brandColor: "#003B57" },
        { name: "Statistics", brandColor: "#8E44AD" },
        { name: "EDA", brandColor: "#E67E22" },
        { name: "Feature Engineering", brandColor: "#D35400" }
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
      icon: "🤖",
      shortDesc: "Supervised, unsupervised, & temporal predictive algorithms.",
      technologies: [
        { name: "Python", brandColor: "#3776AB" },
        { name: "Scikit-learn", brandColor: "#F7931E" },
        { name: "Feature Engineering", brandColor: "#D35400" },
        { name: "Model Evaluation", brandColor: "#27AE60" },
        { name: "Predictive Modeling", brandColor: "#2980B9" },
        { name: "XGBoost", brandColor: "#10B981" }
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
      icon: "🔥",
      shortDesc: "Neural architectures, Transformers, & multi-GPU training.",
      technologies: [
        { name: "PyTorch", brandColor: "#EE4C2C" },
        { name: "TensorFlow", brandColor: "#FF6F00" },
        { name: "Neural Networks", brandColor: "#8B5CF6" },
        { name: "CNN", brandColor: "#EC4899" },
        { name: "Transformers", brandColor: "#F59E0B" },
        { name: "Deep Learning", brandColor: "#A855F7" }
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
      icon: "⚡",
      shortDesc: "Production ML pipelines, high-throughput APIs, & agent loops.",
      technologies: [
        { name: "Python", brandColor: "#3776AB" },
        { name: "FastAPI", brandColor: "#009688" },
        { name: "LLMs", brandColor: "#6366F1" },
        { name: "AI APIs", brandColor: "#A855F7" },
        { name: "AI Agents", brandColor: "#8B5CF6" },
        { name: "RAG", brandColor: "#10B981" },
        { name: "Docker", brandColor: "#2496ED" }
      ],
      projects: [
        { name: "RAG Document Intelligence", id: "2" },
        { name: "Autonomous Agent Framework", id: "4" },
        { name: "Speech-to-Speech Translation", id: "3" }
      ],
      relatedIds: ["gen_ai", "rag", "fullstack"]
    },
    {
      id: "gen_ai",
      num: "05",
      title: "GENERATIVE AI",
      icon: "✨",
      shortDesc: "LLM fine-tuning, prompt guardrails, & autonomous reasoning.",
      technologies: [
        { name: "LLMs", brandColor: "#6366F1" },
        { name: "Prompt Engineering", brandColor: "#F43F5E" },
        { name: "Embeddings", brandColor: "#3B82F6" },
        { name: "Hugging Face", brandColor: "#FFD21E" },
        { name: "LangChain", brandColor: "#22C55E" },
        { name: "AI Agents", brandColor: "#8B5CF6" },
        { name: "RAG", brandColor: "#10B981" }
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
      icon: "📚",
      shortDesc: "Dense vector retrieval, hybrid search, & document grounding.",
      technologies: [
        { name: "Embeddings", brandColor: "#3B82F6" },
        { name: "Vector Search", brandColor: "#0080FF" },
        { name: "FAISS", brandColor: "#0080FF" },
        { name: "Qdrant", brandColor: "#9333EA" },
        { name: "LangChain", brandColor: "#22C55E" },
        { name: "LLMs", brandColor: "#6366F1" }
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
      icon: "👁️",
      shortDesc: "Real-time edge object tracking, YOLOv8, & TensorRT inferencing.",
      technologies: [
        { name: "Python", brandColor: "#3776AB" },
        { name: "OpenCV", brandColor: "#5C3EE8" },
        { name: "YOLOv8", brandColor: "#EE4C2C" },
        { name: "TensorRT", brandColor: "#76B900" },
        { name: "CNN", brandColor: "#EC4899" },
        { name: "ByteTrack", brandColor: "#009688" }
      ],
      projects: [
        { name: "High-Throughput Vision Analytics", id: "6" }
      ],
      relatedIds: ["dl"]
    },
    {
      id: "fullstack",
      num: "08",
      title: "FULL-STACK AI",
      icon: "💻",
      shortDesc: "Reactive web UIs, WebSockets, & cloud AI infrastructure.",
      technologies: [
        { name: "React", brandColor: "#61DAFB" },
        { name: "Next.js", brandColor: "#FFFFFF" },
        { name: "TypeScript", brandColor: "#3178C6" },
        { name: "Tailwind CSS", brandColor: "#06B6D4" },
        { name: "FastAPI", brandColor: "#009688" },
        { name: "PostgreSQL", brandColor: "#4169E1" }
      ],
      projects: [
        { name: "Financial Forecasting Engine", id: "1" },
        { name: "RAG Document Intelligence", id: "2" },
        { name: "Multi-Modal Knowledge Graph", id: "5" }
      ],
      relatedIds: ["ai_eng"]
    }
  ];

  const handleDomainSelect = (id: string) => {
    if (activeDomainId === id && isLocked) {
      setActiveDomainId(null);
      setIsLocked(false);
    } else {
      setActiveDomainId(id);
      setIsLocked(true);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (!isLocked) {
      setActiveDomainId(id);
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setActiveDomainId(null);
    }
  };

  const activeDomain = domains.find(d => d.id === activeDomainId) ?? null;

  return (
    <section 
      id="skills" 
      className="w-full min-h-[100dvh] bg-[#08080A] text-white flex flex-col justify-start px-4 sm:px-8 lg:px-14 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 rounded-t-[3rem] md:rounded-t-[4.5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.75)] border-t-2 border-purple-500/50 relative z-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Minimal Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 pb-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
        >
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase block mb-2">
              TECHNICAL ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              DATA SCIENCE & <span className="font-black italic text-purple-400">AI ENGINEERING</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-normal max-w-xs leading-relaxed">
            From raw data to intelligent systems. Click or hover any domain node to explore technologies & project applications.
          </p>
        </motion.div>

        {/* ORGANIC SKILL DOMAIN CIRCLES ECOSYSTEM GRAPH */}
        <div 
          onMouseLeave={handleMouseLeave}
          className="w-full min-h-[560px] relative flex flex-wrap gap-6 sm:gap-8 items-center justify-center py-6"
        >
          {domains.map((domain) => {
            const isActive = activeDomainId === domain.id;
            const isRelated = activeDomain && activeDomain.relatedIds.includes(domain.id);
            const isDimmed = activeDomainId !== null && !isActive && !isRelated;

            return (
              <motion.div
                key={domain.id}
                layout
                onMouseEnter={() => handleMouseEnter(domain.id)}
                onClick={() => handleDomainSelect(domain.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  opacity: isDimmed ? 0.45 : 1,
                  scale: isActive ? 1.05 : isDimmed ? 0.95 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{
                  zIndex: isActive ? 50 : isRelated ? 30 : 10
                }}
                className={`group relative transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center overflow-hidden rounded-full ${
                  isActive 
                    ? "bg-[#13131A] text-white border-2 border-purple-500 shadow-[0_0_60px_rgba(147,51,234,0.35)] w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] p-6 sm:p-8" 
                    : "bg-[#0D0D12]/90 text-slate-300 border border-white/10 hover:border-purple-500/60 hover:bg-[#13131A] w-44 h-44 sm:w-56 sm:h-56 p-4 shadow-xl"
                }`}
              >
                {/* Ambient Purple Glow */}
                <div className={`absolute rounded-full blur-3xl transition-all duration-500 pointer-events-none ${
                  isActive ? "w-72 h-72 bg-purple-500/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "w-32 h-32 bg-purple-500/10"
                }`} />

                {/* DEFAULT CIRCLE CONTENT */}
                {!isActive ? (
                  <div className="z-10 flex flex-col items-center justify-center gap-1.5 w-full h-full">
                    <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-white/10 border border-white/10 mb-1 group-hover:scale-110 transition-transform">
                      {domain.icon}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-purple-400 tracking-widest uppercase">
                      {domain.num} // DOMAIN
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white group-hover:text-purple-300 tracking-tight leading-tight px-2">
                      {domain.title}
                    </h3>
                  </div>
                ) : (
                  /* EXPANDED LARGE CIRCLE CONTENT */
                  <div className="z-10 w-full h-full flex flex-col items-center justify-center text-center p-2">
                    {/* Header Badge & Title */}
                    <div className="flex flex-col items-center gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl p-1.5 rounded-xl bg-purple-500/20 border border-purple-500/40">
                          {domain.icon}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-600 px-2.5 py-0.5 rounded-full">
                          ACTIVE NODE ↗
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-purple-400 tracking-widest uppercase">
                        DOMAIN // {domain.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-purple-300 tracking-tight leading-tight">
                        {domain.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-[11px] sm:text-xs font-normal text-slate-300 leading-tight max-w-[260px] sm:max-w-[320px] mb-3">
                      {domain.shortDesc}
                    </p>

                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-full flex flex-col items-center gap-2.5"
                      >
                        {/* Technologies Section */}
                        <div className="w-full max-w-[280px] sm:max-w-[340px]">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                            TECHNOLOGIES
                          </span>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {domain.technologies.map((tech, tIdx) => (
                              <motion.span
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tIdx * 0.02 }}
                                style={{
                                  borderColor: tech.brandColor ? `${tech.brandColor}50` : "rgba(255, 255, 255, 0.15)"
                                }}
                                className="text-[10px] sm:text-[11px] font-mono bg-white/10 text-slate-200 border px-2.5 py-0.5 rounded-full font-medium"
                              >
                                {tech.name}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Connected Projects Relationships */}
                        <div className="w-full max-w-[280px] sm:max-w-[340px]">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
                            PROJECT APPLICATIONS ({domain.projects.length})
                          </span>
                          <div className="flex flex-wrap gap-1.5 justify-center">
                            {domain.projects.map((proj) => (
                              <Link
                                key={proj.id}
                                href={`/projects/${proj.id}`}
                                className="text-[10px] sm:text-[11px] font-mono bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-400/50 px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1 group/proj"
                              >
                                <span>→ {proj.name}</span>
                                <span className="text-[9px] opacity-70 group-hover/proj:translate-x-0.5 transition-transform">↗</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>

            );
          })}
        </div>


      </div>
    </section>
  );
}
