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
  MousePointerClick,
  ChevronLeft,
  ChevronRight
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

  // 8 Core Skill Domains — evenly spread around the container center (50%, 50%)
  // Positions use -translate-x-1/2 -translate-y-1/2 so these coords are the card center
  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      category: "ai_ml",
      defaultRotation: -3,
      desktopPos: { top: "14%", left: "12%" },
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
        { name: "StockMind AI", id: "stockmind-ai" },
        { name: "Netran AI", id: "netran-ai" }
      ]
    },
    {
      id: "ml",
      num: "02",
      title: "MACHINE LEARNING",
      category: "ai_ml",
      defaultRotation: 2,
      desktopPos: { top: "7%", left: "44%" },
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
        { name: "StockMind AI", id: "stockmind-ai" },
        { name: "GoLift Ecosystem", id: "golift" }
      ]
    },
    {
      id: "dl",
      num: "03",
      title: "DEEP LEARNING",
      category: "ai_ml",
      defaultRotation: -2,
      desktopPos: { top: "14%", left: "76%" },
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
        { name: "Netran AI", id: "netran-ai" },
        { name: "StockMind AI", id: "stockmind-ai" }
      ]
    },
    {
      id: "ai_eng",
      num: "04",
      title: "AI ENGINEERING",
      category: "ai_ml",
      defaultRotation: 3,
      desktopPos: { top: "41%", left: "76%" },
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
        { name: "Netran AI", id: "netran-ai" },
        { name: "GoLift Ecosystem", id: "golift" }
      ]
    },
    {
      id: "gen_ai",
      num: "05",
      title: "GENERATIVE AI",
      category: "genai_rag",
      defaultRotation: -2,
      desktopPos: { top: "68%", left: "76%" },
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
        { name: "Netran AI", id: "netran-ai" },
        { name: "ResumeBuilder", id: "resumebuilder" }
      ]
    },
    {
      id: "rag",
      num: "06",
      title: "RAG ARCHITECTURES",
      category: "genai_rag",
      defaultRotation: 4,
      desktopPos: { top: "76%", left: "44%" },
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
        { name: "Netran AI", id: "netran-ai" }
      ]
    },
    {
      id: "cv",
      num: "07",
      title: "COMPUTER VISION",
      category: "genai_rag",
      defaultRotation: -3,
      desktopPos: { top: "68%", left: "12%" },
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
        { name: "GoLift Ecosystem", id: "golift" }
      ]
    },
    {
      id: "fullstack",
      num: "08",
      title: "FULL-STACK AI",
      category: "fullstack",
      defaultRotation: 2,
      desktopPos: { top: "41%", left: "12%" },
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
        { name: "FinanceFlow", id: "financeflow" },
        { name: "GoLift Ecosystem", id: "golift" }
      ]
    }
  ];

  const activeDomain = domains.find((d) => d.id === activeDomainId) || domains[0];

  // Measured pixel positions — stores both center and nearest-edge point for each node
  const [nodeEdgePoints, setNodeEdgePoints] = useState<{ [id: string]: { x: number; y: number } }>({});

  // Measure actual DOM positions so SVG lines are pixel-perfect
  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const cr = container.getBoundingClientRect();
      setSvgDims({ w: cr.width, h: cr.height });

      let cx = cr.width / 2;
      let cy = cr.height / 2;
      if (centerPanelRef.current) {
        const r = centerPanelRef.current.getBoundingClientRect();
        cx = r.left - cr.left + r.width / 2;
        cy = r.top - cr.top + r.height / 2;
        setCenterPt({ x: cx, y: cy });
      }

      const pts: { [id: string]: { x: number; y: number } } = {};
      const edgePts: { [id: string]: { x: number; y: number } } = {};   // card edge touching spoke wire

      for (const [id, el] of Object.entries(nodeRefs.current)) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const cardCx = r.left - cr.left + r.width / 2;
        const cardCy = r.top - cr.top + r.height / 2;
        pts[id] = { x: cardCx, y: cardCy };

        const dx = cx - cardCx;  // vector from card center → panel center
        const dy = cy - cardCy;
        const hw = r.width / 2;
        const hh = r.height / 2;
        const scaleX = Math.abs(dx) > 0.001 ? hw / Math.abs(dx) : Infinity;
        const scaleY = Math.abs(dy) > 0.001 ? hh / Math.abs(dy) : Infinity;
        const scale = Math.min(scaleX, scaleY, 1);
        // Edge point: exactly on card perimeter facing center panel
        edgePts[id] = { x: cardCx + dx * scale, y: cardCy + dy * scale };
      }
      setNodePoints(pts);
      setNodeEdgePoints(edgePts);
    }

    const t = setTimeout(measure, 120);
    const obs = new ResizeObserver(measure);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  return (
    <section
      id="skills"
      onMouseLeave={() => setActiveDomainId("ds")}
      className="w-full min-h-full min-h-screen bg-[#08080A] text-white flex flex-col justify-start px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-5 xs:pt-6 sm:pt-8 pb-6 xs:pb-8 sm:pb-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_70px_rgba(0,0,0,0.8)] border-t border-purple-500/40 relative z-30 overflow-hidden select-none"
    >
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
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPRESSIVE }}
          className="mt-0.5 xs:mt-1 sm:mt-2 mb-3 xs:mb-4 sm:mb-6 pb-2.5 xs:pb-3 sm:pb-4 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              INTERACTIVE <span className="font-black italic text-purple-400">SKILL MATRIX</span>
            </h2>
          </div>
        </motion.div>

        <div
          ref={containerRef}
          className="hidden lg:block relative w-full h-[580px] xl:h-[640px] 2xl:h-[700px] 3xl:h-[780px] my-2 rounded-3xl bg-[#050508]/80 border border-white/5 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

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
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-spoke" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

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

                {domainIds.map((id, i) => {
                  const edgePt = nodeEdgePoints[id];
                  if (!edgePt) return null;
                  return (
                    <motion.line
                      key={id}
                      x1={edgePt.x} y1={edgePt.y}
                      x2={centerPt.x} y2={centerPt.y}
                      stroke="#a855f7"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      filter="url(#glow-spoke)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.35 }}
                      transition={{
                        pathLength: { duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.9 + i * 0.09 },
                        opacity: { duration: 0.3, delay: 0.9 + i * 0.09 }
                      }}
                    />
                  );
                })}

                {domainIds.map((id, i) => {
                  const edgePt = nodeEdgePoints[id];
                  if (!edgePt) return null;

                  return (
                    <motion.circle
                      key={id}
                      cx={edgePt.x} cy={edgePt.y} r={3.5}
                      fill="#c084fc"
                      filter="url(#glow-ring)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{
                        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
                        opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }
                      }}
                    />
                  );
                })}
              </svg>
            );
          })()}

          <div
            ref={centerPanelRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[270px] z-30"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPRESSIVE }}
                className="w-full h-full rounded-2xl bg-[#08080C] border border-purple-500/60 p-3.5 flex flex-col justify-between shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden"
              >
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-purple-400 opacity-60" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-purple-400 opacity-60" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-purple-400 opacity-60" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-purple-400 opacity-60" />

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[8.5px] font-mono font-bold text-purple-400 tracking-wider">
                      {activeDomain.num} // ARCHITECTURE
                    </span>
                    <span className="text-[8.5px] font-mono text-slate-300 bg-purple-950/60 border border-purple-500/30 px-1.5 py-0.2 rounded">
                      {activeDomain.metric}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white tracking-tight leading-tight mb-1">
                    {activeDomain.title}
                  </h3>
                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-3">
                    {activeDomain.fullDesc}
                  </p>
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT_EXPRESSIVE } },
                    exit: { opacity: 0, transition: { duration: 0.1 } }
                  }}
                >
                  <span className="flex items-center gap-1 text-[8px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    CORE.STACK
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeDomain.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#12131A] border border-white/5 shadow-inner hover:border-purple-500/50 hover:bg-purple-500/10 text-[8.5px] font-mono text-slate-200 transition-all duration-300"
                      >
                        <TechIcon name={tech.name} className="w-2 h-2 opacity-80" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

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
                  left: domain.desktopPos.left,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-40 sm:w-44 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#0B0C10] border cursor-pointer transition-colors duration-200 origin-center ${isHovered
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

        {/* MOBILE SKILL TREE VERTICAL SPINE VIEW (< lg) */}
        <div className="block lg:hidden w-full relative my-1">
          {/* Vertical Timeline Tree Container */}
          <div className="relative pl-5 sm:pl-7 space-y-2 pb-2 mt-3">
            {/* Continuous Vertical Glowing Circuit Line */}
            <div className="absolute left-[10px] sm:left-[14px] top-3 bottom-4 w-[1.5px] bg-gradient-to-b from-purple-500 via-purple-500/50 to-purple-600/30" />

            {domains.map((domain) => {
              const isSelected = activeDomainId === domain.id;

              return (
                <div key={domain.id} className="relative">
                  {/* Timeline Node Circle on Spine */}
                  <button
                    type="button"
                    onClick={() => setActiveDomainId(domain.id)}
                    aria-label={`Select ${domain.title}`}
                    className={`absolute -left-[20px] sm:-left-[24px] top-3.5 -translate-y-1/2 z-20 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "w-4 h-4 rounded-full border-2 border-purple-400 bg-purple-950 shadow-[0_0_10px_rgba(168,85,247,0.9)] ring-1 ring-purple-500/40 flex items-center justify-center"
                        : "w-3 h-3 rounded-full border border-purple-500/40 bg-[#0B0C10] hover:border-purple-400 flex items-center justify-center"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1 h-1 rounded-full bg-purple-300 animate-ping" />
                    )}
                  </button>

                  {/* Card: Expanded vs Collapsed */}
                  <motion.div
                    layout
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {isSelected ? (
                      /* EXPANDED ACTIVE HUD CARD (Micro-Calibrated Compact Sizing) */
                      <div className="w-full bg-[#08080C] border border-purple-500/70 rounded-xl p-3 sm:p-3.5 shadow-[0_0_25px_rgba(168,85,247,0.2)] relative overflow-hidden text-left">
                        {/* Top Row: Number/Architecture + Metric Badge */}
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-[8px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                              {domain.num} // ARCHITECTURE
                            </span>
                          </div>
                          <span className="text-[7.5px] font-mono font-bold text-purple-200 bg-purple-950/80 border border-purple-500/40 px-2 py-0.5 rounded shadow-2xs">
                            {domain.metric}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-black text-white tracking-tight mb-1">
                          {domain.title}
                        </h3>

                        {/* Full Description */}
                        <p className="text-[10px] sm:text-[10.5px] text-slate-300 leading-relaxed mb-2.5 font-normal">
                          {domain.fullDesc}
                        </p>

                        {/* Core Stack (Single Inline Flow) */}
                        <div className="flex items-center flex-wrap gap-1.5 mb-2.5">
                          <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider inline-flex items-center gap-1 mr-0.5 flex-shrink-0">
                            <span className="w-1 h-1 rounded-full bg-slate-400" />
                            CORE.STACK
                          </span>
                          {domain.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-[8.5px] font-mono text-slate-200"
                            >
                              <TechIcon name={tech.name} className="w-2.5 h-2.5 text-purple-300 opacity-90" />
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>

                        {/* Projects Proof Links (Single Inline Flow) */}
                        {domain.projects.length > 0 && (
                          <div className="pt-2 border-t border-white/10 flex items-center flex-wrap gap-1.5">
                            <span className="text-[7.5px] font-mono font-bold text-slate-400 uppercase tracking-wider flex-shrink-0 mr-0.5">
                              PROVEN IN:
                            </span>
                            {domain.projects.map((proj) => (
                              <Link
                                key={proj.id}
                                href={`/work/${proj.id}`}
                                className="inline-flex items-center gap-1 text-[8px] font-mono font-bold text-white bg-purple-600/30 hover:bg-purple-600/60 border border-purple-400/40 px-2 py-0.5 rounded transition-all active:scale-95"
                              >
                                <span>{proj.name}</span>
                                <ArrowUpRight className="w-2 h-2 text-purple-300" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* COLLAPSED COMPACT CARD (1-Line Sleek Bar) */
                      <button
                        type="button"
                        onClick={() => setActiveDomainId(domain.id)}
                        className="w-full bg-[#0B0C10]/90 hover:bg-[#0E0F15] border border-white/10 hover:border-purple-500/50 rounded-xl px-3 py-2.5 sm:py-3 text-left transition-all duration-200 cursor-pointer group/card flex items-center justify-between gap-2 shadow-2xs"
                      >
                        {/* Left: Icon + Title */}
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="text-purple-400 opacity-80 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all flex-shrink-0">
                            {domain.icon}
                          </div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight truncate">
                            {domain.title}
                          </h4>
                        </div>

                        {/* Right: Core Techs Count */}
                        <div className="flex items-center gap-1 text-[8px] sm:text-[8.5px] font-mono text-slate-400 flex-shrink-0">
                          <span className="w-1 h-1 rounded-full bg-slate-500" />
                          <span>{domain.technologies.length} CORE TECHS</span>
                        </div>
                      </button>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
