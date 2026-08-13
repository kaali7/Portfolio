"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const categories = [
    { id: "ALL", label: "ALL CAPABILITIES" },
    { id: "AI_ML", label: "AI & DEEP LEARNING" },
    { id: "GENAI", label: "GENAI & LLMS" },
    { id: "AGENTS", label: "AGENTIC SYSTEMS" },
    { id: "VISION", label: "VISION & EDGE AI" },
    { id: "MLOPS", label: "MLOPS & CLOUD" },
  ];

  const skillGroups = [
    {
      title: "Deep Learning & Neural Architectures",
      category: "AI_ML",
      level: 96,
      experience: "5+ Yrs",
      icon: "🧠",
      metric: "Multi-GPU Distributed Training",
      description: "Designing, training, and optimizing custom Transformer, CNN, and GNN models on large-scale datasets.",
      frameworks: ["PyTorch", "TensorFlow", "Scikit-Learn", "Ray Train", "CUDA", "PyTorch Geometric"],
      highlights: [
        "Distributed multi-GPU training with PyTorch FSDP & Ray",
        "Custom attention mechanisms for high-frequency time-series",
        "Quantization & INT8 pruning for microsecond latency"
      ]
    },
    {
      title: "Generative AI & LLM Systems",
      category: "GENAI",
      level: 94,
      experience: "3+ Yrs",
      icon: "⚡",
      metric: "<35ms Vector Retrieval",
      description: "Building production RAG pipelines, fine-tuning open-weights models (Llama 3, Mistral), and vector databases.",
      frameworks: ["LangChain", "LlamaIndex", "OpenAI API", "Pinecone", "Qdrant", "vLLM", "HuggingFace"],
      highlights: [
        "Hybrid sparse-dense retrieval with cross-encoder re-ranking",
        "PEFT / LoRA fine-tuning on domain-specific datasets",
        "Strict hallucination detection & safety guardrails"
      ]
    },
    {
      title: "Autonomous Multi-Agent Frameworks",
      category: "AGENTS",
      level: 92,
      experience: "2+ Yrs",
      icon: "🤖",
      metric: "94% Task Completion",
      description: "Architecting self-reflecting, tool-using autonomous multi-agent orchestration loops for complex tasks.",
      frameworks: ["AutoGen", "CrewAI", "LangGraph", "Python", "FastAPI", "Docker", "PostgreSQL"],
      highlights: [
        "ReAct decision-making loops with dynamic self-correction",
        "Isolated Docker container sandboxes for safe tool execution",
        "Multi-agent task delegation and consensus protocols"
      ]
    },
    {
      title: "Computer Vision & Edge Inferencing",
      category: "VISION",
      level: 90,
      experience: "4+ Yrs",
      icon: "👁️",
      metric: "120+ FPS Processing",
      description: "Real-time object detection, spatial tracking, and video analytics optimized for edge deployment.",
      frameworks: ["OpenCV", "YOLOv8", "TensorRT", "DeepStream", "C++", "ONNX Runtime"],
      highlights: [
        "TensorRT optimization for NVIDIA Jetson & T4 edge hardware",
        "Multi-camera ByteTrack spatial object tracking",
        "Sub-15ms video frame ingestion and violation alerting"
      ]
    },
    {
      title: "MLOps, Data Pipelines & Cloud",
      category: "MLOPS",
      level: 88,
      experience: "4+ Yrs",
      icon: "☁️",
      metric: "99.9% Uptime Production",
      description: "Automating end-to-end ML lifecycles, continuous model monitoring, and cloud infrastructure.",
      frameworks: ["Docker", "Kubernetes", "Apache Spark", "Kafka", "AWS / GCP", "MLflow", "Triton"],
      highlights: [
        "Triton Inference Server multi-model deployment",
        "Real-time event streaming with Apache Kafka & Spark",
        "Automated CI/CD pipelines for model retraining & evaluation"
      ]
    },
    {
      title: "Full-Stack AI Engineering",
      category: "MLOPS",
      level: 95,
      experience: "5+ Yrs",
      icon: "💻",
      metric: "Microsecond WebSockets",
      description: "Crafting reactive web interfaces, high-throughput REST / gRPC microservices, and 3D visualizers.",
      frameworks: ["Next.js", "React", "TypeScript", "TailwindCSS", "FastAPI", "gRPC", "Three.js"],
      highlights: [
        "Bi-directional WebSocket streaming for speech synthesis",
        "WebGL / Three.js 3D knowledge graph visualization",
        "High-performance async Python & Node.js backend engines"
      ]
    }
  ];

  const filteredSkills = activeCategory === "ALL" 
    ? skillGroups 
    : skillGroups.filter(s => s.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="w-full min-h-[100dvh] bg-[#08080A] text-white flex flex-col justify-start px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 rounded-t-[3rem] md:rounded-t-[4.5rem] lg:rounded-t-[5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.7)] border-t-2 border-purple-500/50 relative z-30"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 pb-5 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                03 // TECHNICAL EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              Core <span className="font-black italic text-purple-400">Skills</span> & Stack
            </h2>
          </div>

          <p className="max-w-md text-slate-400 text-xs sm:text-sm mt-4 md:mt-0 font-normal leading-relaxed">
            Specialized engineering capabilities across deep learning architectures, autonomous agent loops, computer vision edge pipelines, and high-scale cloud platforms.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isActive 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400" 
                    : "bg-[#13131A] text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid Matrix */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const isHovered = hoveredSkill === i;

              return (
                <motion.div 
                  key={skill.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border transition-all duration-300 min-h-[310px] ${
                    isHovered 
                      ? "bg-[#13131A] border-purple-500 shadow-[0_20px_50px_rgba(147,51,234,0.22)] scale-[1.02] z-20" 
                      : "bg-[#0D0D12]/90 border-white/10 hover:border-purple-500/50"
                  }`}
                >
                  {/* Glowing background blob */}
                  <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${
                    isHovered ? "bg-purple-500/25 scale-125" : "bg-purple-500/5"
                  }`} />

                  {/* Top Bar: Icon, Category & Benchmark Metric */}
                  <div className="z-10 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-2xl bg-[#1A1A24] border border-white/10 flex items-center justify-center">
                        {skill.icon}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-purple-400 tracking-wider uppercase block">
                          EXPERIENCE // {skill.experience}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-semibold">
                          PROFICIENCY {skill.level}%
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 rounded-full">
                      {skill.metric}
                    </span>
                  </div>

                  {/* Body Title & Description */}
                  <div className="z-10 mb-4 flex-1">
                    <h3 className={`text-xl font-bold tracking-tight mb-2 transition-colors duration-300 ${
                      isHovered ? "text-purple-300" : "text-white"
                    }`}>
                      {skill.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="z-10 mb-4">
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tech Framework Badges */}
                  <div className="z-10 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {skill.frameworks.map((fw, fIdx) => (
                      <span 
                        key={fIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border transition-colors ${
                          isHovered 
                            ? "bg-purple-500/20 text-purple-200 border-purple-500/40" 
                            : "bg-[#181822] text-slate-300 border-white/10"
                        }`}
                      >
                        {fw}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
