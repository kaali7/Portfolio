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

// Clockwise order of domain IDs around the constellation ring
const RING_ORDER = ["ml", "dl", "ai_eng", "gen_ai", "rag", "cv", "fullstack", "ds"];

// Catmull-Rom spline → cubic bezier, returns a closed SVG path
function smoothClosedPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  const n = pts.length;
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d + " Z";
}

export function Skills() {
  const [activeDomainId, setActiveDomainId] = useState<string>("ds");
  const containerRef = useRef<HTMLDivElement>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const shouldReduceMotion = useReducedMotion();

  // Measured pixel positions of each node + center panel for accurate SVG drawing
  const [nodePoints, setNodePoints] = useState<{ [id: string]: { x: number; y: number } }>({});
  const [centerPt, setCenterPt] = useState<{ x: number; y: number } | null>(null);
  const [svgDims, setSvgDims] = useState({ w: 1, h: 1 });

  // 8 Core Skill Domains with organic positions around the center panel (balanced layout shifted left)
  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      category: "ai_ml",
      defaultRotation: -3,
      desktopPos: { top: "16%", left: "16%" },
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
      defaultRotation: 2,
      desktopPos: { top: "10%", left: "50%" },
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
      desktopPos: { top: "16%", left: "84%" },
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
      defaultRotation: 3,
      desktopPos: { top: "50%", left: "88%" },
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
      defaultRotation: -2,
      desktopPos: { top: "84%", left: "84%" },
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
      defaultRotation: 4,
      desktopPos: { top: "90%", left: "50%" },
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
      defaultRotation: -3,
      desktopPos: { top: "84%", left: "16%" },
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
      desktopPos: { top: "50%", left: "12%" },
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

  // Measure actual DOM positions so SVG lines are pixel-perfect
  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const cr = container.getBoundingClientRect();
      setSvgDims({ w: cr.width, h: cr.height });

      if (centerPanelRef.current) {
        const r = centerPanelRef.current.getBoundingClientRect();
        setCenterPt({
          x: r.left - cr.left + r.width / 2,
          y: r.top - cr.top + r.height / 2,
        });
      }

      const pts: { [id: string]: { x: number; y: number } } = {};
      for (const [id, el] of Object.entries(nodeRefs.current)) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        pts[id] = {
          x: r.left - cr.left + r.width / 2,
          y: r.top - cr.top + r.height / 2,
        };
      }
      setNodePoints(pts);
    }

    // Small delay so layout settles after first paint
    const t = setTimeout(measure, 120);
    const obs = new ResizeObserver(measure);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  return (
    <section
      id="skills"
      onMouseLeave={() => setActiveDomainId("ds")}
      className="w-full bg-[#08080A] text-white flex flex-col justify-start px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-6 sm:pt-8 pb-8 sm:pb-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_70px_rgba(0,0,0,0.8)] border-t border-purple-500/40 relative z-30 overflow-hidden select-none"
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

      <div className="w-full mx-auto relative z-10">
        {/* Section Headline Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPRESSIVE }}
          className="mt-1 sm:mt-2 mb-4 sm:mb-6 pb-2.5 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-0.5">
              // KNOWLEDGE CONSTELLATION
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
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
          className="hidden lg:block relative w-full h-[580px] my-2 rounded-3xl bg-[#050508]/80 border border-white/5 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Grid Canvas Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* SVG Constellation — positions measured from real DOM, pixel-perfect */}
          {svgDims.w > 1 && centerPt && Object.keys(nodePoints).length >= 8 && (() => {
            const ringPts = RING_ORDER.map(id => nodePoints[id]).filter(Boolean);
            const ringPath = smoothClosedPath(ringPts);
            const domainIds = ["ds", "ml", "dl", "ai_eng", "gen_ai", "rag", "cv", "fullstack"];
            return (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox={`0 0 ${svgDims.w.toFixed(0)} ${svgDims.h.toFixed(0)}`}
              >
                <defs>
                  <filter id="glow-ring" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glow-spoke" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Outer Orbital Ring — Catmull-Rom through measured card centers */}
                <motion.path
                  d={ringPath}
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#glow-ring)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.65, 0.35, 0.65, 0.35] }}
                  transition={{
                    pathLength: { duration: 2.5, ease: [0.23, 1, 0.32, 1] },
                    opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }
                  }}
                />

                {/* Spoke lines — measured card center → measured center panel center */}
                {domainIds.map((id, i) => {
                  const pt = nodePoints[id];
                  if (!pt) return null;
                  return (
                    <motion.line
                      key={id}
                      x1={pt.x} y1={pt.y}
                      x2={centerPt.x} y2={centerPt.y}
                      stroke="#a855f7"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      filter="url(#glow-spoke)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{
                        pathLength: { duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.9 + i * 0.09 },
                        opacity: { duration: 0.3, delay: 0.9 + i * 0.09 }
                      }}
                    />
                  );
                })}

                {/* Node junction dots — exactly at each card's center */}
                {domainIds.map((id, i) => {
                  const pt = nodePoints[id];
                  if (!pt) return null;
                  return (
                    <motion.circle
                      key={id}
                      cx={pt.x} cy={pt.y} r={3.5}
                      fill="#c084fc"
                      filter="url(#glow-ring)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0.5, 1, 0.5] }}
                      transition={{
                        duration: 5, repeat: Infinity, ease: "easeInOut",
                        delay: 1.5 + i * 0.09,
                        times: [0, 0.1, 0.5, 0.75, 1]
                      }}
                    />
                  );
                })}

                {/* Center hub pulse dot */}
                <motion.circle
                  cx={centerPt.x} cy={centerPt.y} r={4.5}
                  fill="#c084fc"
                  filter="url(#glow-ring)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1, 0.5] }}
                  transition={{
                    duration: 4, repeat: Infinity, ease: "easeInOut",
                    delay: 2.3,
                    times: [0, 0.15, 0.5, 0.75, 1]
                  }}
                />
              </svg>
            );
          })()}


          {/* CENTER DETAIL PANEL (Cyberpunk HUD style) */}
          <div
            ref={centerPanelRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[410px] bg-[#050608]/95 border border-purple-500/30 ring-1 ring-white/5 rounded-2xl p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3),inset_0_0_30px_rgba(168,85,247,0.05)] backdrop-blur-2xl flex flex-col gap-4 overflow-hidden"
          >
            {/* Ambient HUD grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f710_1px,transparent_1px),linear-gradient(to_bottom,#a855f710_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20 pointer-events-none mix-blend-screen" />

            {/* Corner Bracket Accents (HUD aesthetic) */}
            <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-purple-500/50 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-purple-500/50 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-purple-500/50 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-purple-500/50 rounded-br-sm pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.3, 
                      ease: EASE_OUT_EXPRESSIVE,
                      staggerChildren: 0.05,
                      delayChildren: 0.05
                    }
                  },
                  exit: { 
                    opacity: 0, 
                    scale: 0.98,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }
                }}
                className="space-y-4 relative z-10"
              >
                {/* Domain Header */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPRESSIVE } },
                    exit: { opacity: 0, transition: { duration: 0.1 } }
                  }}
                  className="flex items-center gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-300 shadow-[inset_0_0_15px_rgba(168,85,247,0.2)]">
                    {activeDomain.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-purple-400/80 uppercase block mb-0.5">
                      // SYSTEM.DOMAIN
                    </span>
                    <h3 className="text-lg font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 tracking-tight">
                      {activeDomain.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Full Description */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPRESSIVE } },
                    exit: { opacity: 0, transition: { duration: 0.1 } }
                  }}
                  className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3"
                >
                  {activeDomain.fullDesc}
                </motion.p>

                {/* Core Technologies Badges */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPRESSIVE } },
                    exit: { opacity: 0, transition: { duration: 0.1 } }
                  }}
                >
                  <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    CORE.STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDomain.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#12131A] border border-white/5 shadow-inner hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] text-[11px] font-mono text-slate-200 transition-all duration-300"
                      >
                        <TechIcon name={tech.name} className="w-3 h-3 opacity-80" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Related Projects */}
                {activeDomain.projects.length > 0 && (
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPRESSIVE } },
                      exit: { opacity: 0, transition: { duration: 0.1 } }
                    }}
                    className="pt-3 border-t border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                  >
                    <span className="text-[9px] font-mono font-bold text-purple-400/70 uppercase flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      DEPLOYMENTS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDomain.projects.map((proj) => (
                        <Link
                          key={proj.id}
                          href={`/work/${proj.id}`}
                          className="group inline-flex items-center gap-1 text-[9.5px] font-mono font-bold text-purple-200 bg-purple-900/30 hover:bg-purple-600/50 border border-purple-500/30 hover:border-purple-400/80 hover:text-white px-2.5 py-1 rounded transition-all duration-300"
                        >
                          <span>{proj.name}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
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
                targetScale = 1.12;
                targetFilter = "brightness(1)";
                targetZIndex = 40;
              } else {
                targetScale = 0.98;
                targetFilter = "brightness(0.82)";
                targetZIndex = 10;
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
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-40 sm:w-44 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#0B0C10] border cursor-pointer transition-colors duration-200 origin-center ${
                  isHovered
                    ? "border-purple-500 shadow-[0_10px_35px_rgba(168,85,247,0.4)] ring-1 ring-purple-400/50"
                    : "border-white/15 hover:border-purple-500/50 shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8.5px] font-mono font-bold text-purple-400 tracking-widest uppercase">
                    {domain.num} // DOMAIN
                  </span>
                  <div className="p-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {domain.icon}
                  </div>
                </div>

                <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-snug mb-0.5">
                  {domain.title}
                </h4>

                <div className="inline-flex items-center gap-1 text-[8.5px] font-mono text-slate-400">
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
