"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Experience() {
  const [activeExp, setActiveExp] = useState<number>(0);

  const experiences = [
    {
      role: "Lead AI & Autonomous Systems Architect",
      company: "Autonomous AI Labs",
      period: "2024 — PRESENT",
      location: "San Francisco, CA (Remote)",
      type: "FULL-TIME",
      impact: "4.2x Throughput Boost",
      summary: "Architected multi-agent orchestration frameworks and production RAG pipelines powering enterprise-grade autonomous reasoning systems.",
      achievements: [
        "Pioneered self-reflecting multi-agent execution loops with LangGraph and AutoGen, reducing human-in-the-loop intervention by 68%",
        "Optimized vLLM and TensorRT-LLM inference servers to serve Llama-3-70B with sub-35ms token time-to-first-token (TTFT)",
        "Engineered hybrid sparse-dense vector retrieval clusters across 50M+ documents using Qdrant and cross-encoder re-ranking"
      ],
      tags: ["AutoGen", "LangGraph", "vLLM", "PyTorch", "Qdrant", "FastAPI", "Docker"]
    },
    {
      role: "Senior Computer Vision Engineer",
      company: "EdgeVision Technologies",
      period: "2022 — 2024",
      location: "Austin, TX",
      type: "FULL-TIME",
      impact: "120+ FPS Processing",
      summary: "Led the edge AI computer vision division developing real-time industrial safety violation and spatial tracking systems.",
      achievements: [
        "Deployed TensorRT accelerated YOLOv8 models onto NVIDIA Jetson Orin & T4 edge GPUs, processing 16+ 4K camera streams in real-time",
        "Integrated multi-camera ByteTrack object tracking across non-overlapping field-of-views with 91.4% mAP accuracy",
        "Reduced vision model latency from 45ms to 11.2ms via INT8 post-training quantization and custom TensorRT plugins"
      ],
      tags: ["YOLOv8", "TensorRT", "OpenCV", "ByteTrack", "C++", "CUDA", "NVIDIA Jetson"]
    },
    {
      role: "Machine Learning Engineer",
      company: "Neural Data Systems",
      period: "2020 — 2022",
      location: "Boston, MA",
      type: "FULL-TIME",
      impact: "180M+ Graph Edges",
      summary: "Designed scalable temporal neural networks and graph neural network architectures for real-time market risk forecasting.",
      achievements: [
        "Constructed Graph Convolutional Networks (GCN) in PyTorch Geometric for dynamic node classification and fraud relationship mapping",
        "Built real-time Neo4j cluster synchronization with Apache Kafka & Spark streaming pipelines handling 10k+ events/sec",
        "Decreased query execution latency from 120ms to <15ms through custom graph indexing algorithms"
      ],
      tags: ["PyTorch Geometric", "Neo4j", "Apache Spark", "Kafka", "Python", "Three.js"]
    },
    {
      role: "AI Research Fellow",
      company: "Applied AI Institute",
      period: "2019 — 2020",
      location: "New York, NY",
      type: "FELLOWSHIP",
      impact: "3 Publications",
      summary: "Conducted fundamental research in self-supervised representation learning and low-latency voice synthesis.",
      achievements: [
        "Co-authored 3 peer-reviewed conference papers on self-supervised audio-visual speech representation learning",
        "Implemented streaming Whisper ASR and custom vocoder synthesis engines yielding sub-120ms speech translation latencies",
        "Open-sourced neural audio processing toolkits used by over 4,000+ GitHub developers"
      ],
      tags: ["Whisper", "PyTorch", "Audio ML", "Self-Supervised", "Python", "TorchAudio"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 rounded-t-[3rem] md:rounded-t-[4.5rem] lg:rounded-t-[5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.18)] border-t border-slate-200 relative z-30"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 pb-5 border-b border-slate-200"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase">
                04 // CAREER TRAJECTORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#08080A] leading-tight">
              Work <span className="font-black italic text-purple-600">Experience</span> & Impact
            </h2>
          </div>

          <p className="max-w-md text-slate-600 text-xs sm:text-sm mt-4 md:mt-0 font-normal leading-relaxed">
            A chronicle of designing, deploying, and scaling high-throughput AI pipelines, autonomous agent systems, and edge computer vision infrastructure.
          </p>
        </motion.div>

        {/* Experience Split Layout: Left Timeline Nav + Right Detailed Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Timeline List (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveExp(idx)}
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className={`group relative rounded-2xl p-5 cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                    isSelected 
                      ? "bg-[#08080A] text-white border-purple-500 shadow-xl shadow-purple-950/20" 
                      : "bg-slate-50 text-[#08080A] border-slate-200/90 hover:border-purple-300 hover:bg-slate-100/80"
                  }`}
                >
                  {/* Top Bar: Company & Period */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase ${
                      isSelected ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-800"
                    }`}>
                      {exp.company}
                    </span>
                    <span className={`text-xs font-mono font-bold ${isSelected ? "text-purple-300" : "text-slate-400"}`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className={`text-base font-bold mb-1 transition-colors ${
                    isSelected ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                  }`}>
                    {exp.role}
                  </h3>

                  {/* Impact Metric Badge */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-current/10">
                    <span className={`text-[11px] font-mono font-semibold ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {exp.location}
                    </span>
                    <span className={`text-[11px] font-mono font-bold ${
                      isSelected ? "text-purple-400" : "text-purple-700"
                    }`}>
                      ⚡ {exp.impact}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card (Col 6-12) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-slate-50 border-2 border-purple-500/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.12)] flex flex-col justify-between min-h-[440px] relative overflow-hidden"
            >
              {/* Subtle ambient accent glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Details */}
              <div className="z-10 pb-4 border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3 py-1 rounded-full uppercase">
                    {experiences[activeExp].company}
                  </span>
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                    {experiences[activeExp].type} // {experiences[activeExp].period}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#08080A] tracking-tight mt-3 mb-1">
                  {experiences[activeExp].role}
                </h3>
                <p className="text-xs font-mono text-slate-500 font-semibold">
                  📍 {experiences[activeExp].location}
                </p>
              </div>

              {/* Summary Description */}
              <p className="z-10 text-sm sm:text-base text-slate-700 leading-relaxed my-4">
                {experiences[activeExp].summary}
              </p>

              {/* Key Achievements Bullet Checklist */}
              <div className="z-10 bg-white border border-slate-200 rounded-2xl p-4 my-2">
                <h4 className="text-[11px] font-mono font-bold tracking-widest text-purple-900 uppercase mb-3">
                  KEY DELIVERABLES & IMPACT
                </h4>
                <ul className="space-y-2.5">
                  {experiences[activeExp].achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
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
                      className="text-[10px] sm:text-[11px] font-mono bg-white text-slate-800 border border-slate-200 px-2.5 py-0.5 rounded-md font-medium shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-mono font-black text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                  ⚡ {experiences[activeExp].impact}
                </span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
