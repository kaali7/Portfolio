"use client";

import { useState, useRef, useEffect } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import {
  motion,
  AnimatePresence,
  useReducedMotion
} from "framer-motion";
import {
  BarChart2,
  Brain,
  Network,
  Cpu,
  Sparkles,
  Database,
  ScanEye,
  Code2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  MousePointerClick
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

interface TechItem {
  name: string;
  level: number;
}

interface SkillDomain {
  id: string;
  num: string;
  title: string;
  category: "ai_ml" | "genai_rag" | "fullstack";
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  metric: string;
  codeSnippet: string;
  defaultRotation: number;
  // Organic radial positioning coordinates for desktop (percentages)
  desktopPos: { top: string; left: string };
  technologies: TechItem[];
  projects: { name: string; id: string }[];
}

const EASE_OUT_EXPRESSIVE = [0.23, 1, 0.32, 1];

export function Skills() {
  const [activeDomainId, setActiveDomainId] = useState<string>("ds");
  const containerRef = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const shouldReduceMotion = useReducedMotion();

  // 8 Core Skill Domains with organic positions around the center panel (balanced layout shifted left)
  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      category: "ai_ml",
      defaultRotation: -4,
      desktopPos: { top: "10%", left: "9%" },
      icon: <BarChart2 className="w-4 h-4 text-purple-400" />,
      shortDesc: "Exploratory analysis, statistical modeling, & high-throughput data processing pipelines.",
      fullDesc: "Specialized in extraction of actionable intelligence from complex structured/unstructured datasets using advanced statistical modeling, feature engineering, and high-performance tabular computation.",
      metric: "98% Model Accuracy Peak",
      codeSnippet: `import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame(raw_data)\nclean_df = df.pipe(normalize).pipe(extract_features)`,
      technologies: [
        { name: "Python", level: 98 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 94 },
        { name: "SQL", level: 90 },
        { name: "Scikit-learn", level: 92 }
      ],
      projects: [
        { name: "StockMind AI", id: "1" },
        { name: "Medical RAG Chatbot", id: "2" }
      ]
    },
    {
      id: "ml",
      num: "02",
      title: "MACHINE LEARNING",
      category: "ai_ml",
      defaultRotation: 3,
      desktopPos: { top: "5%", left: "43%" },
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      shortDesc: "Supervised, unsupervised, & predictive models built for performance and scale.",
      fullDesc: "End-to-end predictive modeling workflows including hyperparameter tuning, ensemble methods, gradient boosting, and custom metric optimization for real-time production inference.",
      metric: "15+ Models Deployed",
      codeSnippet: `from sklearn.ensemble import HistGradientBoostingClassifier\n\nmodel = HistGradientBoostingClassifier()\nmodel.fit(X_train, y_train)`,
      technologies: [
        { name: "Python", level: 98 },
        { name: "Scikit-learn", level: 92 },
        { name: "PyTorch", level: 90 },
        { name: "SQL", level: 90 }
      ],
      projects: [
        { name: "StockMind AI", id: "1" },
        { name: "AI Gym Workout Planner", id: "4" }
      ]
    },
    {
      id: "dl",
      num: "03",
      title: "DEEP LEARNING",
      category: "ai_ml",
      defaultRotation: -2,
      desktopPos: { top: "12%", left: "75%" },
      icon: <Network className="w-4 h-4 text-purple-400" />,
      shortDesc: "Convolutional neural networks, Transformers, & GPU-accelerated neural optimization.",
      fullDesc: "Building custom PyTorch neural architectures for vision, sequence modeling, and audio. Trained on distributed multi-GPU clusters with mixed precision.",
      metric: "<25ms Neural Latency",
      codeSnippet: `import torch.nn as nn\n\nclass TransformerEncoder(nn.Module):\n  def __init__(self):\n    super().__init__()\n    self.attn = nn.MultiheadAttention(d_model=512, nhead=8)`,
      technologies: [
        { name: "PyTorch", level: 92 },
        { name: "TensorFlow", level: 85 },
        { name: "OpenCV", level: 88 },
        { name: "Python", level: 98 }
      ],
      projects: [
        { name: "Speech-to-Speech AI", id: "3" },
        { name: "StockMind AI", id: "1" }
      ]
    },
    {
      id: "ai_eng",
      num: "04",
      title: "AI ENGINEERING",
      category: "ai_ml",
      defaultRotation: 4,
      desktopPos: { top: "48%", left: "79%" },
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      shortDesc: "Production ML pipelines, high-concurrency APIs, containerization, & autonomous agents.",
      fullDesc: "Productionizing ML models with Dockerized microservices, high-throughput FastAPI endpoints, vector index clustering, and fault-tolerant agent execution loops.",
      metric: "99.9% Uptime Production APIs",
      codeSnippet: `from fastapi import FastAPI\n\napp = FastAPI(title="AI Agent Gateway")\n@app.post("/predict")\nasync def stream_agent(request: AgentPayload): pass`,
      technologies: [
        { name: "Python", level: 98 },
        { name: "FastAPI", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Qdrant", level: 92 },
        { name: "LangChain", level: 90 }
      ],
      projects: [
        { name: "Medical RAG Chatbot", id: "2" },
        { name: "Speech-to-Speech AI", id: "3" }
      ]
    },
    {
      id: "gen_ai",
      num: "05",
      title: "GENERATIVE AI",
      category: "genai_rag",
      defaultRotation: -3,
      desktopPos: { top: "74%", left: "73%" },
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      shortDesc: "LLM fine-tuning, prompt guardrails, multi-modal agents, & autonomous function calling.",
      fullDesc: "Harnessing state-of-the-art LLMs (Llama 3, Claude 3.5, GPT-4o), fine-tuning domain adapters (LoRA/QLoRA), and engineering multi-agent function calling workflows.",
      metric: "100k+ Tokens Structured Output",
      codeSnippet: `from langchain.agents import AgentExecutor\n\nagent = create_openai_tools_agent(llm, tools, prompt)\nexecutor = AgentExecutor(agent=agent, tools=tools)`,
      technologies: [
        { name: "Hugging Face", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "Python", level: 98 },
        { name: "Qdrant", level: 92 }
      ],
      projects: [
        { name: "Medical RAG Chatbot", id: "2" },
        { name: "Speech-to-Speech AI", id: "3" }
      ]
    },
    {
      id: "rag",
      num: "06",
      title: "RAG ARCHITECTURES",
      category: "genai_rag",
      defaultRotation: 5,
      desktopPos: { top: "78%", left: "41%" },
      icon: <Database className="w-4 h-4 text-purple-400" />,
      shortDesc: "Dense vector retrieval, hybrid BM25 indexing, reranking, & context grounding.",
      fullDesc: "Designing robust Retrieval-Augmented Generation architectures with Qdrant vector databases, semantic chunking, cross-encoder reranking, and zero-hallucination guardrails.",
      metric: "Sub-100ms Vector Lookup",
      codeSnippet: `from qdrant_client import QdrantClient\n\nclient = QdrantClient(url="http://localhost:6333")\nresults = client.search(collection_name="docs", query_vector=vec, limit=5)`,
      technologies: [
        { name: "Qdrant", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "Python", level: 98 },
        { name: "FastAPI", level: 95 }
      ],
      projects: [
        { name: "Medical RAG Chatbot", id: "2" }
      ]
    },
    {
      id: "cv",
      num: "07",
      title: "COMPUTER VISION",
      category: "genai_rag",
      defaultRotation: -4,
      desktopPos: { top: "74%", left: "9%" },
      icon: <ScanEye className="w-4 h-4 text-purple-400" />,
      shortDesc: "Real-time edge pose tracking, object detection, & low-latency inferencing pipelines.",
      fullDesc: "Implementing real-time frame processing, MediaPipe pose tracking, YOLO object detection, and video stream inferencing pipelines with OpenCV.",
      metric: "60 FPS Edge Processing",
      codeSnippet: `import cv2\nimport mediapipe as mp\n\nmp_pose = mp.solutions.pose.Pose()\nresults = mp_pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))`,
      technologies: [
        { name: "OpenCV", level: 88 },
        { name: "Python", level: 98 },
        { name: "Docker", level: 90 }
      ],
      projects: [
        { name: "AI Gym Workout Planner", id: "4" }
      ]
    },
    {
      id: "fullstack",
      num: "08",
      title: "FULL-STACK AI",
      category: "fullstack",
      defaultRotation: 2,
      desktopPos: { top: "46%", left: "5%" },
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      shortDesc: "Reactive Web UIs, async backend microservices, & AI cloud infrastructure integrations.",
      fullDesc: "Building full-stack AI web products with Next.js 15, TypeScript, Tailwind CSS, FastAPI backends, and PostgreSQL vector database infrastructure.",
      metric: "Full-Stack Deployment",
      codeSnippet: `export async function POST(req: Request) {\n  const { prompt } = await req.json();\n  const res = await fetch("http://fastapi-backend/predict", { method: "POST" });\n}`,
      technologies: [
        { name: "React", level: 94 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "FastAPI", level: 95 },
        { name: "PostgreSQL", level: 88 }
      ],
      projects: [
        { name: "StockMind AI", id: "1" },
        { name: "AI Gym Workout Planner", id: "4" }
      ]
    }
  ];

  const activeDomain = domains.find((d) => d.id === activeDomainId) || domains[0];

  return (
    <section
      id="skills"
      onMouseLeave={() => setActiveDomainId("ds")}
      className="w-full bg-[#08080A] text-white flex flex-col justify-start px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_70px_rgba(0,0,0,0.8)] border-t border-purple-500/40 relative z-30 overflow-hidden select-none"
    >
      {/* Background Ambient Radial Lighting */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.05, 1]
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/30 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Headline Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPRESSIVE }}
          className="mt-2 sm:mt-4 mb-6 sm:mb-8 pb-3 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
              // KNOWLEDGE CONSTELLATION
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
              INTERACTIVE <span className="font-black italic text-purple-400">SKILL MATRIX</span>
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 sm:mb-1">
            <MousePointerClick className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Hover or tap any node to inspect technical architecture</span>
          </p>
        </motion.div>

        {/* DESKTOP RADIAL CONSTELLATION VIEW (Hidden on Mobile/Tablet < lg) */}
        <div
          ref={containerRef}
          className="hidden lg:block relative w-full h-[740px] my-4 rounded-3xl bg-[#050508]/80 border border-white/5 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Grid Canvas Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* SVG Constellation Path Lines Layer */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Glowing Purple Orbital Wire */}
            <motion.path
              d="M 35 13.5 Q 52 11, 68 14.5 Q 84 18, 86 36 Q 88 54, 85 67 Q 82 80, 66 82 Q 50 84, 34 82 Q 18 80, 16 66 Q 14 52, 16 34 Q 18 16, 35 13.5 Z"
              fill="none"
              stroke="#c084fc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="20 40"
              vectorEffect="non-scaling-stroke"
              className="drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]"
              animate={{ strokeDashoffset: [0, -120] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* CENTER DETAIL PANEL (Desktop - Perfectly Centered in Shifter Constellation) */}
          <div
            ref={centerPanelRef}
            className="absolute left-[44%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[440px] bg-[#0B0C10]/95 border border-purple-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(168,85,247,0.2)] backdrop-blur-xl flex flex-col gap-4 overflow-hidden"
          >
            {/* Neon Bar Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPRESSIVE }}
                className="space-y-4"
              >
                {/* Domain Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300">
                    {activeDomain.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {activeDomain.title}
                    </h3>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeDomain.fullDesc}
                </p>

                {/* Core Technologies Badges */}
                <div>
                  <span className="text-[9px] font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">
                    CORE TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDomain.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-slate-200 transition-colors"
                      >
                        <TechIcon name={tech.name} className="w-3.5 h-3.5" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Projects */}
                {activeDomain.projects.length > 0 && (
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-1.5">
                    <span className="text-[9px] font-mono font-bold text-purple-400 uppercase">
                      PRODUCTION PROVEN:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {activeDomain.projects.map((proj) => (
                        <Link
                          key={proj.id}
                          href={`/work/${proj.id}`}
                          className="inline-flex items-center gap-1 text-[10px] font-mono text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 px-2.5 py-1 rounded-md transition-all"
                        >
                          <span>{proj.name}</span>
                          <ArrowUpRight className="w-3 h-3 text-purple-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SURROUNDING RADIAL DOMAIN NODES (Desktop) */}
          {domains.map((domain) => {
            const isHovered = activeDomainId === domain.id;
            const isAnyHovered = activeDomainId !== null;

            let targetScale = 1.0;
            let targetFilter = "brightness(1)";
            let targetZIndex = 10;

            if (isAnyHovered) {
              if (isHovered) {
                targetScale = 1.18;
                targetFilter = "brightness(1)";
                targetZIndex = 40;
              } else {
                targetScale = 0.92;
                targetFilter = "brightness(0.4)";
                targetZIndex = 5;
              }
            }

            return (
              <motion.div
                key={domain.id}
                ref={(el) => { nodeRefs.current[domain.id] = el; }}
                onMouseEnter={() => setActiveDomainId(domain.id)}
                onClick={() => setActiveDomainId(domain.id)}
                animate={{
                  scale: shouldReduceMotion ? 1 : targetScale,
                  filter: shouldReduceMotion ? "brightness(1)" : targetFilter,
                  rotate: shouldReduceMotion ? 0 : isHovered ? 0 : domain.defaultRotation,
                  zIndex: targetZIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 24
                }}
                style={{
                  top: domain.desktopPos.top,
                  left: domain.desktopPos.left
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-48 sm:w-52 p-3.5 rounded-2xl bg-[#0B0C10] border cursor-pointer transition-colors duration-200 origin-center ${
                  isHovered
                    ? "border-purple-500 shadow-[0_10px_35px_rgba(168,85,247,0.4)] ring-1 ring-purple-400/50"
                    : "border-white/15 hover:border-purple-500/50 shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono font-bold text-purple-400 tracking-widest uppercase">
                    {domain.num} // DOMAIN
                  </span>
                  <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {domain.icon}
                  </div>
                </div>

                <h4 className="text-xs font-bold text-white tracking-tight leading-snug mb-1">
                  {domain.title}
                </h4>

                <div className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  <span>{domain.technologies.length} CORE TECHS</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE / TABLET RESPONSIVE VIEW (< lg) */}
        <div className="block lg:hidden space-y-6 my-4">
          {/* Node Selector Grid Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {domains.map((domain) => {
              const isSelected = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`p-3 rounded-2xl border transition-all text-left flex flex-col justify-between h-24 ${
                    isSelected
                      ? "bg-purple-950/60 border-purple-500 text-white ring-1 ring-purple-400/50 shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                      : "bg-[#0B0C10] border-white/10 text-slate-300 hover:border-purple-500/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[9px] font-mono font-bold text-purple-400">
                      {domain.num}
                    </span>
                    <div className="p-1 rounded-lg bg-purple-500/10 text-purple-400">
                      {domain.icon}
                    </div>
                  </div>
                  <span className="text-xs font-bold leading-tight">
                    {domain.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Center Detail Card */}
          <div className="w-full bg-[#0B0C10] border border-purple-500/40 rounded-3xl p-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400" />
            
            <AnimatePresence mode="wait">
              {activeDomain ? (
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300">
                      {activeDomain.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {activeDomain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeDomain.fullDesc}
                  </p>

                  {/* Technologies */}
                  <div>
                    <span className="text-[9px] font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">
                      CORE TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDomain.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                        >
                          <TechIcon name={tech.name} className="w-3.5 h-3.5" />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {activeDomain.projects.length > 0 && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono font-bold text-purple-400 uppercase">
                        USED IN:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {activeDomain.projects.map((proj) => (
                          <Link
                            key={proj.id}
                            href={`/work/${proj.id}`}
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-white bg-purple-600/30 border border-purple-400/40 px-2 py-0.5 rounded-md"
                          >
                            <span>{proj.name}</span>
                            <ArrowUpRight className="w-3 h-3 text-purple-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="py-6 text-center space-y-2">
                  <Layers className="w-6 h-6 text-purple-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">SELECT A DOMAIN NODE ABOVE</h4>
                  <p className="text-xs text-slate-400">
                    Tap any of the 8 technical domain buttons to inspect its architecture, code, and production metrics.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
