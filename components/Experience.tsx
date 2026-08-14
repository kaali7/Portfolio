"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

interface Achievement {
  title: string;
  detail: string;
  metric: string;
}

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  status: "CURRENT" | "PAST";
  primaryImpact: string;
  summary: string;
  achievements: Achievement[];
  tags: string[];
  highlights: { label: string; val: string }[];
}

export function Experience() {
  const [activeExp, setActiveExp] = useState<number>(1);

  const experiences: ExperienceItem[] = [
    {
      id: 0,
      role: "Senior Computer Vision Engineer",
      company: "EdgeVision Technologies",
      period: "2022 — 2024",
      location: "Austin, TX",
      type: "FULL-TIME",
      status: "PAST",
      primaryImpact: "120+ FPS Processing",
      summary: "Led Edge AI computer vision division developing real-time industrial safety violation and spatial tracking systems across edge GPU clusters.",
      achievements: [
        {
          title: "Edge Model Deployment (Jetson & T4)",
          detail: "Deployed TensorRT accelerated YOLOv8 models onto NVIDIA Jetson Orin & T4 edge GPUs, processing 16+ 4K camera streams in real-time.",
          metric: "16x 4K @ 120 FPS"
        },
        {
          title: "Multi-Camera Spatial Tracking",
          detail: "Integrated multi-camera ByteTrack object tracking across non-overlapping field-of-views with 91.4% mAP tracking accuracy.",
          metric: "91.4% mAP Accuracy"
        },
        {
          title: "INT8 Model Quantization Pipeline",
          detail: "Reduced vision model latency from 45ms to 11.2ms via INT8 post-training quantization and custom TensorRT C++ plugins.",
          metric: "4x Speed Optimization"
        }
      ],
      tags: ["TensorRT", "OpenCV", "Python", "Docker"],
      highlights: [
        { label: "CAMERA STREAMS", val: "16x 4K" },
        { label: "FRAME RATE", val: "120+ FPS" },
        { label: "LATENCY", val: "11.2ms" }
      ]
    },
    {
      id: 1,
      role: "Lead AI & Autonomous Systems Architect",
      company: "Autonomous AI Labs",
      period: "2024 — PRESENT",
      location: "San Francisco, CA (Remote)",
      type: "FULL-TIME",
      status: "CURRENT",
      primaryImpact: "4.2x Throughput Boost",
      summary: "Architecting enterprise multi-agent orchestration engines, self-correcting reasoning loops, and production-scale RAG clusters serving high-concurrency workloads.",
      achievements: [
        {
          title: "Multi-Agent Orchestration Engine",
          detail: "Pioneered self-reflecting execution loops with LangGraph and AutoGen, reducing human-in-the-loop intervention by 68% across automated workflows.",
          metric: "68% Less Human Loop"
        },
        {
          title: "Sub-35ms LLM Inference Acceleration",
          detail: "Optimized vLLM and TensorRT-LLM cluster servers serving Llama-3-70B models with sub-35ms time-to-first-token (TTFT) under high concurrency.",
          metric: "< 35ms TTFT Latency"
        },
        {
          title: "Hybrid Vector Search & Re-ranking",
          detail: "Engineered hybrid sparse-dense vector retrieval clusters across 50M+ unstructured document embeddings using Qdrant & cross-encoders.",
          metric: "50M+ Vectors Indexed"
        }
      ],
      tags: ["AutoGen", "LangGraph", "PyTorch", "Qdrant", "FastAPI", "Docker"],
      highlights: [
        { label: "HUMAN LOOP", val: "68%" },
        { label: "TTFT LATENCY", val: "<35ms" },
        { label: "INDEX CAPACITY", val: "50M+" }
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 rounded-t-[2.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] shadow-[0_-25px_80px_rgba(0,0,0,0.16)] border-t border-slate-200 relative z-30 overflow-y-auto no-scrollbar"
    >
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Compact Clean Section Header */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#08080A] leading-none">
            Work <span className="font-black italic text-purple-600">Experience</span> & Impact
          </h2>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 font-bold bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-purple-600" />
            <span>2022 — PRESENT</span>
          </div>
        </div>

        {/* ULTRA-CLEAN HIGH-CONTRAST TIMELINE TRACK */}
        <div className="mb-10 bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border-2 border-purple-500/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Dedicated Text & Node Info Row (ABOVE the track line to prevent text overlap) */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-3">
            
            {/* Timeline Node 01: EdgeVision (2022 — 2024 - LEFT SIDE) */}
            <motion.button 
              onClick={() => setActiveExp(0)}
              onMouseEnter={() => setActiveExp(0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-3 text-left cursor-pointer transition-all duration-150 ${
                activeExp === 0 ? "opacity-100" : "opacity-75 hover:opacity-100"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                activeExp === 0
                  ? "bg-purple-600 border-white ring-4 ring-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${activeExp === 0 ? "bg-white" : "bg-slate-400"}`} />
              </div>
              <div>
                <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  activeExp === 0 ? "text-purple-300" : "text-slate-400"
                }`}>
                  CHAPTER 01 // 2022 — 2024
                </div>
                <div className={`text-sm sm:text-base font-black tracking-tight ${
                  activeExp === 0 ? "text-white text-shadow-sm" : "text-slate-300 group-hover:text-purple-200"
                }`}>
                  EdgeVision Technologies
                </div>
              </div>
            </motion.button>

            {/* Timeline Node 02: Autonomous AI Labs (2024 — PRESENT - RIGHT SIDE) */}
            <motion.button 
              onClick={() => setActiveExp(1)}
              onMouseEnter={() => setActiveExp(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-3 text-right cursor-pointer transition-all duration-150 ${
                activeExp === 1 ? "opacity-100" : "opacity-75 hover:opacity-100"
              }`}
            >
              <div>
                <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  activeExp === 1 ? "text-emerald-400" : "text-slate-400"
                }`}>
                  CHAPTER 02 // 2024 — PRESENT
                </div>
                <div className={`text-sm sm:text-base font-black tracking-tight ${
                  activeExp === 1 ? "text-white text-shadow-sm" : "text-slate-300 group-hover:text-purple-200"
                }`}>
                  Autonomous AI Labs
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                activeExp === 1
                  ? "bg-purple-600 border-white ring-4 ring-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.8)]"
                  : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${activeExp === 1 ? "bg-emerald-400 animate-ping" : "bg-slate-400"}`} />
              </div>
            </motion.button>

          </div>

          {/* Interactive Progress Track Line (BELOW the text in its own row) */}
          <div 
            className="relative h-2.5 bg-slate-800 rounded-full cursor-pointer overflow-hidden mt-1"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setActiveExp(clickX < rect.width / 2 ? 0 : 1);
            }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-emerald-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              animate={{
                width: activeExp === 0 ? "50%" : "100%"
              }}
              transition={{ type: "spring", stiffness: 550, damping: 25, mass: 0.15 }}
            />
          </div>

        </div>

        {/* 2-COLUMN ROTATED WALL CARDS GRID WITH ORGANIC HANGING WIRE */}
        <div className="relative pt-4">

          {/* SMOOTH ORGANIC HANGING WIRE ARC CONNECTING CARD 01 TO CARD 02 */}
          <div className="hidden lg:block absolute left-0 right-0 top-[-20px] h-28 pointer-events-none z-30">
            <svg viewBox="0 0 1000 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hangingWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
                </linearGradient>
                <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Shadow Line Underneath Wire */}
              <path
                d="M 360 45 C 440 -15, 560 -15, 640 45"
                fill="none"
                stroke="#a855f725"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Main Smooth Hanging Wire Arc Line */}
              <motion.path
                d="M 360 45 C 440 -15, 560 -15, 640 45"
                fill="none"
                stroke="url(#hangingWireGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
                filter="url(#wireGlow)"
                initial={{ pathLength: 0.1 }}
                animate={{ pathLength: [0.1, 1, 0.1] }}
                transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Anchor Node Orb 1 (Card 01 Top-Right Anchor) */}
              <circle cx="360" cy="45" r="5.5" fill="#a855f7" className="animate-pulse" />
              <circle cx="360" cy="45" r="2.5" fill="#ffffff" />
              <circle cx="360" cy="45" r="8" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />

              {/* Center Wire Badge Node */}
              <circle cx="500" cy="8" r="4" fill="#c084fc" />
              <circle cx="500" cy="8" r="2" fill="#ffffff" />

              {/* Anchor Node Orb 2 (Card 02 Top-Left Anchor) */}
              <circle cx="640" cy="45" r="5.5" fill="#34d399" className="animate-pulse" />
              <circle cx="640" cy="45" r="2.5" fill="#ffffff" />
              <circle cx="640" cy="45" r="8" fill="none" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;
              const defaultRotate = idx === 0 ? -2.2 : 2.2;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setActiveExp(idx)}
                  onClick={() => setActiveExp(idx)}
                  initial={{ rotate: defaultRotate }}
                  animate={{ 
                    rotate: isSelected ? 0 : defaultRotate,
                    scale: isSelected ? 1.03 : 0.98,
                    y: isSelected ? -8 : 0,
                    zIndex: isSelected ? 30 : 10
                  }}
                  whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 550, damping: 25, mass: 0.15 }}
                  className={`group relative rounded-3xl p-5 sm:p-6 cursor-pointer border-2 transition-all duration-150 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? "bg-slate-900 text-white border-purple-500 shadow-[0_30px_70px_rgba(147,51,234,0.25)] ring-4 ring-purple-500/30"
                      : "bg-slate-50 text-[#08080A] border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-md opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Anchor Pin Indicator on Card Header */}
                  <div className={`absolute top-3 ${idx === 0 ? "right-4" : "left-4"} w-3.5 h-3.5 rounded-full border-2 border-purple-400 bg-purple-600/80 shadow-md flex items-center justify-center pointer-events-none hidden lg:flex`}>
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>

                  {/* Accent Mesh Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-150 ${
                    isSelected ? "bg-purple-600/20 opacity-100" : "bg-purple-300/10 opacity-0 group-hover:opacity-100"
                  }`} />

                  {/* Top Role Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          isSelected ? "bg-purple-600 text-white shadow-md" : "bg-[#08080A] text-white"
                        }`}>
                          CHAPTER 0{idx + 1} // {exp.company}
                        </span>
                        {exp.status === "CURRENT" && (
                          <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            LIVE
                          </span>
                        )}
                      </div>
                      <span className={`text-[11px] font-mono font-bold flex items-center gap-1 ${
                        isSelected ? "text-purple-300" : "text-slate-500"
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-purple-500" />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-1.5 transition-colors ${
                      isSelected ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                    }`}>
                      {exp.role}
                    </h3>

                    {/* Location & Type */}
                    <div className={`flex items-center gap-2 text-xs font-mono font-semibold mb-3 ${
                      isSelected ? "text-slate-400" : "text-slate-500"
                    }`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-500" />
                        <span>{exp.location}</span>
                      </span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    {/* Summary */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {exp.summary}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {exp.highlights.map((h, hIdx) => (
                        <div 
                          key={hIdx}
                          className={`p-2.5 rounded-xl border text-center transition-colors ${
                            isSelected 
                              ? "bg-slate-800/80 border-slate-700" 
                              : "bg-white border-slate-200/90 group-hover:border-purple-200"
                          }`}
                        >
                          <div className="text-[9px] font-mono font-bold text-slate-400 tracking-tight truncate">
                            {h.label}
                          </div>
                          <div className={`text-xs sm:text-sm font-black font-mono mt-0.5 ${
                            isSelected ? "text-purple-300" : "text-purple-700"
                          }`}>
                            {h.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* System Architecture Deliverable Cards with Descriptions */}
                    <div className="space-y-2 mb-4">
                      <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                        isSelected ? "text-purple-300" : "text-purple-900"
                      }`}>
                        SYSTEM ARCHITECTURE & DELIVERABLES
                      </div>
                      {exp.achievements.map((item, aIdx) => (
                        <div
                          key={aIdx}
                          className={`p-3 rounded-xl border flex flex-col gap-1 text-xs transition-colors ${
                            isSelected
                              ? "bg-slate-800/60 border-slate-700/80"
                              : "bg-white border-slate-200/80 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 font-bold truncate">
                              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                                isSelected ? "text-purple-400" : "text-purple-600"
                              }`} />
                              <span className={`truncate ${isSelected ? "text-slate-100" : "text-slate-900"}`}>
                                {item.title}
                              </span>
                            </div>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                              isSelected ? "bg-purple-950 text-purple-300 border border-purple-800" : "bg-purple-100 text-purple-700"
                            }`}>
                              {item.metric}
                            </span>
                          </div>
                          <p className={`text-[11px] leading-relaxed pl-5 ${
                            isSelected ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips Footer */}
                  <div className="relative z-10 pt-3 border-t border-current/10 flex items-center justify-between flex-wrap gap-2 mt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-medium flex items-center gap-1.5 ${
                            isSelected 
                              ? "bg-slate-800 text-slate-200 border-slate-700" 
                              : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                          }`}
                        >
                          <TechIcon name={tag} className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                      isSelected ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}>
                      <Zap className="w-3 h-3" />
                      <span>{exp.primaryImpact}</span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}





