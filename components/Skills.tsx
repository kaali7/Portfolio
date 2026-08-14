"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform
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
  X,
  ShieldCheck,
  Zap
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
  sizeTier: "large" | "medium";
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  metric: string;
  codeSnippet: string;
  defaultRotation: number;
  overlapOffset: string;
  technologies: TechItem[];
  projects: { name: string; id: string }[];
}

const EASE_OUT_EXPRESSIVE = [0.23, 1, 0.32, 1];

export function Skills() {
  const [selectedModalDomain, setSelectedModalDomain] = useState<SkillDomain | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const domains: SkillDomain[] = [
    {
      id: "ds",
      num: "01",
      title: "DATA SCIENCE",
      category: "ai_ml",
      sizeTier: "large",
      defaultRotation: -2,
      overlapOffset: "lg:z-10",
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
      sizeTier: "medium",
      defaultRotation: 2.2,
      overlapOffset: "lg:-ml-3 lg:z-20",
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
      sizeTier: "medium",
      defaultRotation: -2.5,
      overlapOffset: "lg:-ml-3 lg:z-15",
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
      sizeTier: "large",
      defaultRotation: 1.8,
      overlapOffset: "lg:-mt-3 lg:z-25",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      shortDesc: "Production ML pipelines, high-concurrency APIs, containerization, & autonomous agents.",
      fullDesc: "Productionizing ML models with Dockerized microservices, high-throughput FastAPI endpoints, vector index clustering, and fault-tolerant agent execution loops.",
      metric: "99.9% Uptime Production APIs",
      codeSnippet: `from fastapi import FastAPI, BackgroundTasks\n\napp = FastAPI(title="AI Agent Gateway")\n@app.post("/predict")\nasync def stream_agent(request: AgentPayload): pass`,
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
      sizeTier: "large",
      defaultRotation: -2.2,
      overlapOffset: "lg:-ml-3 lg:-mt-3 lg:z-30",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      shortDesc: "LLM fine-tuning, prompt guardrails, multi-modal agents, & autonomous function calling.",
      fullDesc: "Harnessing state-of-the-art LLMs (Llama 3, Claude 3.5, GPT-4o), fine-tuning domain adapters (LoRA/QLoRA), and engineering multi-agent function calling workflows.",
      metric: "100k+ Tokens Structured Output",
      codeSnippet: `from langchain.agents import AgentExecutor, create_openai_tools_agent\n\nagent = create_openai_tools_agent(llm, tools, prompt)\nexecutor = AgentExecutor(agent=agent, tools=tools)`,
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
      sizeTier: "medium",
      defaultRotation: 2.4,
      overlapOffset: "lg:-ml-3 lg:z-15",
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
      sizeTier: "medium",
      defaultRotation: -1.8,
      overlapOffset: "lg:-mt-2 lg:z-20",
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
      sizeTier: "large",
      defaultRotation: 2.2,
      overlapOffset: "lg:-ml-3 lg:-mt-2 lg:z-25",
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

  return (
    <section
      id="skills"
      onMouseLeave={() => setHoveredCardId(null)}
      className="w-full min-h-fit bg-[#08080A] text-white flex flex-col justify-start px-4 sm:px-8 lg:px-14 pt-10 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_70px_rgba(0,0,0,0.8)] border-t border-purple-500/40 relative z-30 overflow-hidden select-none"
    >
      {/* Animated breathing background radial lighting */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.05, 1]
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Prominent Large Section Headline with Generous Top Gap */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPRESSIVE }}
          className="mt-2 sm:mt-4 lg:mt-6 mb-4 sm:mb-6 pb-2.5 border-b border-white/10"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            INTERACTIVE <span className="font-black italic text-purple-400">SKILL MATRIX</span>
          </h2>
        </motion.div>

        {/* Spatial Overlapping & Rotated Bento Cards Grid */}
        <div
          onMouseLeave={() => setHoveredCardId(null)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-1.5 relative py-1"
        >
          {domains.map((domain, index) => {
            const isLarge = domain.sizeTier === "large";
            const isHovered = hoveredCardId === domain.id;
            const isAnyHovered = hoveredCardId !== null;

            return (
              <RotatedOverlapping3DCard
                key={domain.id}
                domain={domain}
                index={index}
                isLarge={isLarge}
                isHovered={isHovered}
                isAnyHovered={isAnyHovered}
                shouldReduceMotion={shouldReduceMotion || false}
                onMouseEnter={() => setHoveredCardId(domain.id)}
                onOpenModal={() => setSelectedModalDomain(domain)}
              />
            );
          })}
        </div>

      </div>

      {/* High-Tech HUD Inspection Modal */}
      <AnimatePresence>
        {selectedModalDomain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalDomain(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-text"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: EASE_OUT_EXPRESSIVE }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0B0C10] border border-purple-500/50 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(168,85,247,0.3)] relative overflow-hidden text-white"
            >
              {/* Top Neon Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedModalDomain(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-purple-500/20 border border-purple-400/40">
                  {selectedModalDomain.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase">
                    {selectedModalDomain.num} // ARCHITECTURAL INSPECTOR
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedModalDomain.title}
                  </h3>
                </div>
              </div>

              {/* Metric Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-[11px] font-mono text-purple-300 font-bold mb-4">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                <span>{selectedModalDomain.metric}</span>
              </div>

              {/* Full Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {selectedModalDomain.fullDesc}
              </p>

              {/* Technical Proficiency Metrics */}
              <div className="mb-5">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">
                  STRENGTH & PROFICIENCY METRICS
                </span>
                <div className="space-y-2">
                  {selectedModalDomain.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-0.5">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <TechIcon name={tech.name} className="w-3 h-3" />
                          {tech.name}
                        </span>
                        <span className="text-purple-400 font-bold">{tech.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 0.5, ease: EASE_OUT_EXPRESSIVE }}
                          className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Preview */}
              <div className="mb-5">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1.5">
                  CANONICAL ARCHITECTURE CODE
                </span>
                <div className="bg-[#050508] border border-white/10 rounded-xl p-3 font-mono text-[11px] text-purple-200 overflow-x-auto">
                  <pre>{selectedModalDomain.codeSnippet}</pre>
                </div>
              </div>

              {/* Projects */}
              {selectedModalDomain.projects.length > 0 && (
                <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">
                    PROVEN IN PRODUCTION:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedModalDomain.projects.map((proj) => (
                      <Link
                        key={proj.id}
                        href={`/work/${proj.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 px-2.5 py-0.5 rounded-lg transition-all"
                      >
                        <span>{proj.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-purple-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

{/* Snappy 150ms Rotated & Overlapping 3D Skill Card Component */}
function RotatedOverlapping3DCard({
  domain,
  index,
  isLarge,
  isHovered,
  isAnyHovered,
  shouldReduceMotion,
  onMouseEnter,
  onOpenModal
}: {
  domain: SkillDomain;
  index: number;
  isLarge: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  shouldReduceMotion: boolean;
  onMouseEnter: () => void;
  onOpenModal: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // 3D Motion Physics with high stiffness for snappy cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 500, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 500, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Determine Scale, Rotation, Opacity & Z-Index based on hover focus
  let targetRotation = domain.defaultRotation;
  let targetScale = 1.0;
  let targetOpacity = 1.0;
  let targetZIndex = index + 5;

  if (isAnyHovered) {
    if (isHovered) {
      targetRotation = 0; // Straighten up on hover
      targetScale = isLarge ? 1.05 : 1.08; // Crisp hover expansion
      targetOpacity = 1.0;
      targetZIndex = 50; // Pop on top!
    } else {
      targetRotation = domain.defaultRotation;
      targetScale = 0.94; // Snappy reduction for non-hovered
      targetOpacity = 0.55;
      targetZIndex = index + 1;
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        rotate: shouldReduceMotion ? 0 : targetRotation,
        scale: shouldReduceMotion ? 1 : targetScale,
        opacity: shouldReduceMotion ? 1 : targetOpacity,
        zIndex: targetZIndex
      }}
      style={
        shouldReduceMotion
          ? {}
          : {
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: "preserve-3d"
            }
      }
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.25
      }}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
      className={`group relative rounded-xl md:rounded-2xl bg-[#0B0C10]/95 border transition-colors duration-150 backdrop-blur-2xl flex flex-col justify-between overflow-hidden p-3.5 sm:p-4 cursor-pointer origin-center ${
        domain.overlapOffset
      } ${
        isLarge ? "lg:col-span-2" : "col-span-1"
      } ${
        isHovered
          ? "border-purple-500/80 shadow-[0_20px_50px_rgba(168,85,247,0.35)] ring-1 ring-purple-400/40"
          : "border-white/15 hover:border-purple-500/40 shadow-xl"
      }`}
    >
      {/* Interactive Cursor Spotlight Gradient Overlay */}
      {isHovered && !shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150"
          style={{
            background: `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(168, 85, 247, 0.22), transparent 80%)`
          }}
        />
      )}

      {/* Top Border Neon Sweep Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Bar: Domain Number & Interactive Icon */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono font-bold text-purple-400 tracking-widest uppercase flex items-center gap-1">
            <span>{domain.num} // DOMAIN</span>
          </span>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { rotate: -10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-150"
          >
            {domain.icon}
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-purple-200 transition-colors flex items-center justify-between">
          <span>{domain.title}</span>
          <span className="text-[9px] font-mono text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
            INSPECT ↗
          </span>
        </h3>

        {/* Metric Pill Badge */}
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-950/50 border border-purple-500/35 text-[9px] font-mono text-purple-300 mb-1.5">
          <Zap className="w-2.5 h-2.5 text-purple-400" />
          <span>{domain.metric}</span>
        </div>

        {/* Short Description */}
        <p className="text-[11px] sm:text-xs text-slate-300 leading-tight mb-2">
          {domain.shortDesc}
        </p>
      </div>

      {/* Bottom Technologies & Project Links */}
      <div className="space-y-2 pt-1">
        {/* Technologies List */}
        <div>
          <span className="text-[8px] font-mono font-bold tracking-widest text-purple-400 uppercase block mb-1">
            CORE TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-1">
            {domain.technologies.map((tech) => (
              <motion.span
                key={tech.name}
                whileHover={shouldReduceMotion ? {} : { scale: 1.06, y: -1 }}
                transition={{ type: "spring", stiffness: 450, damping: 22 }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-200 group-hover:border-purple-500/30 group-hover:bg-purple-950/20 transition-colors cursor-default"
              >
                <TechIcon name={tech.name} className="w-2.5 h-2.5" />
                <span>{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {domain.projects.length > 0 && (
          <div className="pt-1.5 border-t border-white/10 flex flex-col gap-0.5" onClick={(e) => e.stopPropagation()}>
            <span className="text-[8px] font-mono font-bold tracking-widest text-purple-400 uppercase">
              USED IN PROJECTS
            </span>
            <div className="flex flex-wrap gap-1">
              {domain.projects.map((proj) => (
                <Link
                  key={proj.id}
                  href={`/projects/${proj.id}`}
                  className="inline-flex items-center gap-0.5 text-[10px] font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-purple-600/40 border border-white/15 px-1.5 py-0.5 rounded transition-all group/link"
                >
                  <span>{proj.name}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
