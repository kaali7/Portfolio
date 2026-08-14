"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  Zap, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  LayoutGrid, 
  GitCommit, 
  Sparkles,
  Terminal,
  Calendar,
  Building2,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  impact: string;
  focus: string;
  summary: string;
  achievements: string[];
  archFlow: string;
  tags: string[];
}

export function Experience() {
  const [activeExp, setActiveExp] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"timeline" | "bento">("timeline");
  const shouldReduceMotion = useReducedMotion();

  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      role: "Lead AI & Autonomous Systems Architect",
      company: "Autonomous AI Labs",
      period: "2024 — PRESENT",
      location: "San Francisco, CA (Remote)",
      type: "FULL-TIME",
      impact: "4.2x Throughput Boost",
      focus: "Multi-Agent Orchestration & Enterprise RAG",
      summary: "Architected multi-agent orchestration frameworks and production RAG pipelines powering enterprise-grade autonomous reasoning systems with strict SLA guarantees.",
      achievements: [
        "Pioneered self-reflecting multi-agent execution loops with LangGraph and AutoGen, reducing human-in-the-loop intervention by 68%",
        "Optimized vLLM and TensorRT-LLM inference servers to serve Llama-3-70B with sub-35ms token time-to-first-token (TTFT)",
        "Engineered hybrid sparse-dense vector retrieval clusters across 50M+ documents using Qdrant and cross-encoder re-ranking",
        "Built automated evaluation pipelines using Ragas & MLflow for continuous LLM output accuracy and hallucination monitoring"
      ],
      archFlow: "[User Prompt] ➔ [LangGraph Orchestrator] ⇄ [Qdrant Hybrid Vector DB (50M+)] ➔ [vLLM Llama-3 (Sub-35ms)]",
      tags: ["AutoGen", "LangGraph", "PyTorch", "Qdrant", "FastAPI", "Docker", "MLflow", "Python"]
    },
    {
      id: "exp-2",
      role: "Senior Computer Vision & Edge AI Engineer",
      company: "EdgeVision Technologies",
      period: "2022 — 2024",
      location: "Austin, TX",
      type: "FULL-TIME",
      impact: "120+ FPS Edge Latency",
      focus: "Real-Time Spatial Tracking & Model Quantization",
      summary: "Led the edge AI computer vision division developing real-time industrial safety violation, spatial tracking, and multi-camera stream processing systems.",
      achievements: [
        "Deployed TensorRT accelerated YOLOv8 models onto NVIDIA Jetson Orin & T4 edge GPUs, processing 16+ 4K camera streams in real-time",
        "Integrated multi-camera ByteTrack object tracking across non-overlapping field-of-views with 91.4% mAP accuracy",
        "Reduced vision model latency from 45ms to 11.2ms via INT8 post-training quantization and custom TensorRT CUDA plugins",
        "Optimized GPU memory footprint by 74% using dynamic FP16/INT8 precision switching triggered by scene activity"
      ],
      archFlow: "[16x 4K Camera Feeds] ➔ [NVIDIA Jetson Orin] ➔ [TensorRT YOLOv8 (11.2ms)] ➔ [ByteTrack Spatial Matrix]",
      tags: ["TensorRT", "OpenCV", "NVIDIA", "PyTorch", "C++", "Docker", "Python", "Linux"]
    },
    {
      id: "exp-3",
      role: "Machine Learning & Data Science Engineer",
      company: "NeuralDynamics AI",
      period: "2020 — 2022",
      location: "Boston, MA",
      type: "FULL-TIME",
      impact: "99.4% Predictive Uptime",
      focus: "Predictive Analytics & Real-Time ML Pipelines",
      summary: "Designed distributed machine learning pipelines and real-time anomaly detection engines for high-volume streaming telemetry and industrial telemetry.",
      achievements: [
        "Built scalable feature stores and real-time Kafka inference streaming pipelines handling over 2M events/second",
        "Trained gradient boosted trees (XGBoost/LightGBM) and deep temporal neural networks predicting hardware failures 48h in advance",
        "Standardized automated CI/CD for ML models with MLflow and Kubernetes, reducing deployment cycle times from weeks to hours"
      ],
      archFlow: "[Kafka Streaming (2M events/s)] ➔ [Feature Store] ➔ [XGBoost / Temporal Net] ➔ [Real-Time Alert Engine]",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Kafka", "Kubernetes", "PostgreSQL", "MLflow"]
    },
    {
      id: "exp-4",
      role: "AI & High-Performance Data Systems Fellow",
      company: "Quantum & AI Research Lab",
      period: "2019 — 2020",
      location: "Cambridge, MA",
      type: "FELLOWSHIP",
      impact: "18x Pipeline Speedup",
      focus: "Parallel GPU Algorithms & Graph Embeddings",
      summary: "Researched high-performance GPU-accelerated graph algorithms and scientific data preprocessing frameworks for large-scale dataset analytics.",
      achievements: [
        "Parallelized large-scale graph neural network (GNN) embeddings over multi-GPU clusters using PyTorch Geometric and CUDA",
        "Co-authored research benchmarking distributed matrix factorizations for biomedical dataset discovery and clustering"
      ],
      archFlow: "[Large Biomedical Graphs] ➔ [PyTorch Geometric CUDA Cluster] ➔ [GNN Embedding Matrix (18x Speedup)]",
      tags: ["Python", "PyTorch", "NumPy", "C++", "Linux", "Git", "SQL"]
    }
  ];

  // Spring transition for snappy sub-180ms interaction response
  const springTransition = shouldReduceMotion
    ? { duration: 0.15 }
    : { type: "spring", stiffness: 450, damping: 28, mass: 0.3 };

  return (
    <section 
      id="experience" 
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 rounded-t-[2.5rem] md:rounded-t-[4rem] lg:rounded-t-[5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.18)] border-t border-slate-200 relative z-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Section Header & High-Tech View Switcher */}
        <div className="mb-8 sm:mb-12 pb-6 border-b border-slate-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-black text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>CAREER PATHWAY</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                04 // EXPERIENCE & IMPACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#08080A] leading-tight">
              Work <span className="font-black italic text-purple-600">Experience</span> & Systems Impact
            </h2>
          </div>

          {/* Interactive View Mode Selector Pill */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                viewMode === "timeline"
                  ? "bg-[#08080A] text-white shadow-md shadow-purple-950/20"
                  : "text-slate-600 hover:text-[#08080A] hover:bg-slate-200/60"
              }`}
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>TIMELINE FLOW</span>
            </button>
            <button
              onClick={() => setViewMode("bento")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                viewMode === "bento"
                  ? "bg-[#08080A] text-white shadow-md shadow-purple-950/20"
                  : "text-slate-600 hover:text-[#08080A] hover:bg-slate-200/60"
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-purple-400" />
              <span>BENTO GRID</span>
            </button>
          </div>
        </div>

        {/* Top High-Impact Career Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Experience</span>
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">6+ Years</p>
            <span className="text-[11px] text-slate-500 font-medium mt-1">AI & Data Engineering</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Avg Acceleration</span>
              <Zap className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">4.2x</p>
            <span className="text-[11px] text-slate-500 font-medium mt-1">System Throughput Boost</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Models Deployed</span>
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">15+ Production</p>
            <span className="text-[11px] text-slate-500 font-medium mt-1">RAG, Vision & LLM Engines</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Scale Served</span>
              <Award className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">50M+ Docs</p>
            <span className="text-[11px] text-slate-500 font-medium mt-1">Sub-35ms Retrieval Cluster</span>
          </div>
        </div>

        {/* View Mode 1: Interactive Spatial Timeline View */}
        {viewMode === "timeline" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Interactive Timeline Node Selector (Col 1-5) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 relative">
              {/* Connecting Background Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 pointer-events-none hidden sm:block" />

              {experiences.map((exp, idx) => {
                const isSelected = activeExp === idx;

                return (
                  <motion.div
                    key={exp.id}
                    onClick={() => setActiveExp(idx)}
                    whileHover={{ scale: 1.01, x: shouldReduceMotion ? 0 : 4 }}
                    transition={springTransition}
                    className={`group relative rounded-2xl p-5 cursor-pointer border transition-all duration-200 flex flex-col justify-between ${
                      isSelected 
                        ? "bg-[#08080A] text-white border-purple-500 shadow-xl shadow-purple-950/20 ring-1 ring-purple-500/50" 
                        : "bg-slate-50/90 text-[#08080A] border-slate-200/90 hover:border-purple-300 hover:bg-slate-100/90"
                    }`}
                  >
                    {/* Top Row: Company Badge & Year */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-purple-400 animate-pulse" : "bg-slate-300"}`} />
                        <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full uppercase ${
                          isSelected ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-800"
                        }`}>
                          {exp.company}
                        </span>
                      </div>
                      <span className={`text-xs font-mono font-bold ${isSelected ? "text-purple-300" : "text-slate-400"}`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className={`text-base sm:text-lg font-bold mb-1.5 transition-colors ${
                      isSelected ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                    }`}>
                      {exp.role}
                    </h3>

                    {/* Role Focus Eyebrow */}
                    <p className={`text-xs font-mono ${isSelected ? "text-slate-400" : "text-slate-500"} mb-3 line-clamp-1`}>
                      {exp.focus}
                    </p>

                    {/* Bottom Metadata & Impact */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-current/10 text-[11px] font-mono">
                      <span className={`flex items-center gap-1 font-semibold ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        <MapPin className="w-3.5 h-3.5 text-purple-500" />
                        <span className="truncate max-w-[160px]">{exp.location}</span>
                      </span>
                      <span className={`font-bold flex items-center gap-1 px-2 py-0.5 rounded-md ${
                        isSelected ? "bg-purple-950/80 text-purple-300 border border-purple-800/60" : "bg-purple-50 text-purple-700 border border-purple-200"
                      }`}>
                        <Zap className="w-3 h-3 text-purple-500" />
                        <span>{exp.impact}</span>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: High-Tech Detailed Experience Card (Col 6-12) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
                  transition={springTransition}
                  className="bg-slate-50 border-2 border-purple-500/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.12)] flex flex-col justify-between min-h-[500px] relative overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header Details */}
                  <div className="z-10 pb-4 border-b border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3.5 py-1 rounded-full uppercase">
                          {experiences[activeExp].company}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                        {experiences[activeExp].type} // {experiences[activeExp].period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#08080A] tracking-tight mb-1.5">
                      {experiences[activeExp].role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 font-semibold">
                      <span className="flex items-center gap-1 text-purple-700">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{experiences[activeExp].focus}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-600" />
                        <span>{experiences[activeExp].location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="z-10 text-sm sm:text-base text-slate-700 leading-relaxed my-4 font-normal">
                    {experiences[activeExp].summary}
                  </p>

                  {/* System Architecture Flow Snippet Box */}
                  <div className="z-10 bg-[#08080A] border border-slate-800 rounded-2xl p-3.5 sm:p-4 my-2 text-white">
                    <div className="flex items-center justify-between text-xs font-mono text-purple-400 font-bold mb-2">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-purple-400" />
                        <span>SYSTEM ARCHITECTURE FLOW</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">HIGH-THROUGHPUT PIPELINE</span>
                    </div>
                    <p className="text-xs sm:text-xs font-mono text-slate-200 bg-white/5 border border-white/10 p-2.5 rounded-xl overflow-x-auto leading-relaxed">
                      {experiences[activeExp].archFlow}
                    </p>
                  </div>

                  {/* Key Achievements Bullet Checklist */}
                  <div className="z-10 bg-white border border-slate-200 rounded-2xl p-4 my-2">
                    <h4 className="text-[11px] font-mono font-bold tracking-widest text-purple-900 uppercase mb-3 flex items-center gap-1.5">
                      <GitCommit className="w-3.5 h-3.5 text-purple-600" />
                      <span>KEY DELIVERABLES & IMPACT</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {experiences[activeExp].achievements.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips Bar */}
                  <div className="z-10 pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {experiences[activeExp].tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[10px] sm:text-[11px] font-mono bg-white text-slate-800 border border-slate-200 px-2.5 py-1 rounded-md font-medium shadow-2xs flex items-center gap-1.5"
                        >
                          <TechIcon name={tag} className="w-3.5 h-3.5" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-mono font-black text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
                      <Zap className="w-3.5 h-3.5 text-purple-600" />
                      <span>{experiences[activeExp].impact}</span>
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        )}

        {/* View Mode 2: High-Tech Bento Matrix Grid */}
        {viewMode === "bento" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, bIdx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: bIdx * 0.1 }}
                whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-400 hover:shadow-xl hover:shadow-purple-950/10 transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3 py-1 rounded-full uppercase">
                      {exp.company}
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#08080A] tracking-tight mb-1 group-hover:text-purple-700 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-purple-700 font-semibold mb-3 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{exp.focus}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2 mb-4 bg-white border border-slate-200/80 rounded-2xl p-3.5">
                    {exp.achievements.slice(0, 2).map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech & Impact */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1">
                    {exp.tags.slice(0, 4).map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-mono bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1"
                      >
                        <TechIcon name={tag} className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                    {exp.tags.length > 4 && (
                      <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-md font-bold">
                        +{exp.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3 text-purple-600" />
                    <span>{exp.impact}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
