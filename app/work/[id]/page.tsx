"use client";

import { useState, useEffect } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useReducedMotion } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { cleanUrl } from "@/lib/urlUtils";
import { TechIcon } from "@/components/TechIcon";
import { RobotAvatar } from "@/components/RobotAvatar";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Github,
  Layers,
  Code2,
  ChevronRight,
  X,
  Maximize2,
  Wrench,
  Compass,
  Cpu,
  Database,
  Network,
  Server,
  Workflow,
  Lightbulb,
  Check,
  Zap,
  AlertTriangle,
  TrendingUp,
  Play,
  BookOpen,
  Copy,
  LayoutGrid,
  FileCode2,
  ChevronLeft,
  Video
} from "lucide-react";

function getArchitectureBlueprint(project: any): string {
  if (project.architecture?.diagram && project.architecture.diagram.trim() !== "") {
    return project.architecture.diagram;
  }

  if (project.id === "netran-ai") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                    NETRAN AI SYSTEM ARCHITECTURE                                       |
+--------------------------------------------------------------------------------------------------------+
[ Candidate Input ] ------------> [ Stage 1: Tavily Web Search & Market Intelligence Engine ]
  - Resume (.pdf/.docx/.tex)      - Live LeetCode / Glassdoor / GitHub Query
  - Job Description (JD)          - Gemini 3.6 Flash Rubric Synthesis -> SQLite Cache
                                         |
                                         v
                                  [ Stage 2: Resume-to-JD Skill Gap Matching ]
                                  - 15-Question Difficulty Tree Generation
                                  - Custom Whisper Domain Vocabulary Extraction
                                         |
                                         v
[ Mic Audio (16kHz PCM) ] ------> [ Stage 3: Live Voice Streaming Loop ] <------- [ Speaker Rec ]
  - Web Audio API Worklet         - Silero VAD v3 (Voice Activity)               - SpeechBrain ECAPA
  - Barge-In Interruption         - Faster-Whisper int8 STT (Domain Vocabulary)
                                  - Local Ollama Qwen2.5:3b LLM Reasoning
                                  - Kokoro-82M Neural Speech TTS (Sub-250ms)
                                         |
                                         v
[ Continuous WAV & Manifest ] ---> [ Stage 4: Multimodal Evaluation Engine ]
  - Millisecond Telemetry         - Audio Branch + Technical Branch + Combined Branch
  - Per-turn Audio Clips          - Outputs report.json & evaluation_summary.md
+--------------------------------------------------------------------------------------------------------+`;
  }

  if (project.id === "resumebuilder") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                 RESUMEBUILDER PIPELINE ARCHITECTURE                                    |
+--------------------------------------------------------------------------------------------------------+
[ Raw User Profile Data ] --------> [ Multi-Stage LLM Compiler Pipeline ]
  - Experience & Skills             - Stage 1: Section Parsing & Structural Validation
  - Targeted Role & Metrics         - Stage 2: Action-Verb & Impact Metric Enhancement
                                    - Stage 3: ATS Keyword Optimization & Scoring
                                           |
                                           v
[ Gemini / Groq / Tavily ] -------> [ Dynamic LaTeX Code Synthesis Engine ]
  - Web Search Context Augmentation - Strict Schema Validation (Pydantic v2)
  - ATS Compatibility Rules        - Overleaf-Grade Custom Template Injection
                                           |
                                           v
[ 4-Level Analytics Audit ] ------> [ PDF Compilation & Real-Time Preview ]
  - Impact Metric Score             - Tectonic / pdflatex Asynchronous Compilation
  - ATS Keyword Density             - High-Resolution Vector PDF & Web View
+--------------------------------------------------------------------------------------------------------+`;
  }

  if (project.id === "ai-powered-hr-dashboard" || project.id === "auto-dash") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                  AUTO DASH ARCHITECTURE & DATA FLOW                                    |
+--------------------------------------------------------------------------------------------------------+
[ Enterprise HR Telemetry ] ------> [ Supabase Realtime Database & RLS Engine ]
  - Employee Metrics & Payroll      - Row-Level Security Policies (Tenant Isolation)
  - Attrition & Performance         - Precomputed Aggregations (~150ms Telemetry)
                                           |
                                           v
[ Next.js 16 App Router ] --------> [ Gemini 2.0 Flash AI Query Assistant ]
  - Server Components (RSC)         - Natural Language to SQL/Data Insights
  - Client Recharts Dashboards      - Automated HR Risk & Flight-Risk Predictions
                                           |
                                           v
[ Interactive Dashboard UI ] ------> [ Real-Time Executive Telemetry Views ]
  - Dynamic KPI Cards               - Instant Filtering, Export & Anomaly Alerts
+--------------------------------------------------------------------------------------------------------+`;
  }

  if (project.id === "stockmind-ai") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                   STOCKMIND AI ARCHITECTURE                                            |
+--------------------------------------------------------------------------------------------------------+
[ Live Finnhub Market Feed ] -----> [ Groq AI Speed Analysis Engine ]
  - Real-Time Ticker Streaming      - Ultra-Low Latency Sentiment Inference
  - Historical Price Data           - Multi-Signal Financial Indicator Scoring
                                           |
                                           v
[ Zustand Global State Store ] ---> [ Interactive Recharts Telemetry Suite ]
  - Reactive Market Bus             - Dynamic Candlestick & Technical Indicators
  - Anomaly Alert Triggers          - Multi-Asset Comparison Engine
+--------------------------------------------------------------------------------------------------------+`;
  }

  if (project.id === "golift") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                    GOLIFT ECOSYSTEM ARCHITECTURE                                       |
+--------------------------------------------------------------------------------------------------------+
[ Multi-Platform Client Layer ]
  - Web Client (React 19, Vite 7, Tailwind CSS 4)
  - Desktop Shell (Tauri v2, Rust Native Wrapper)
  - Mobile Client (React Native 0.84, Native CLI)
  - Landing Portal (Next.js 15 App Router)
                                         |
                                    HTTPS / REST API
                                         v
+--------------------------------------------------------------------------------------------------------+
|                                  FastAPI (Async Python 3.14) Backend                                   |
|   - JWT & Refresh Token Auth Middleware                                                                |
|   - Automated CSV Seeding Engine (1,400+ ExerciseDB Records & Multi-Day Splits)                        |
|   - Dynamic YouTube Embed Fallthrough & Technique Demonstration Engine                                 |
+--------------------------------------------------------------------------------------------------------+
                                         |
                 +-----------------------+-----------------------+
                 v                                               v
+----------------------------------+           +----------------------------------+
|    PostgreSQL 16 Database       |           |     MLOps Intelligence Engine    |
|  - SQLAlchemy 2.0 ORM Binds      |           |  - Scikit-Learn Volume Prediction|
|  - Alembic Schema Migrations     |           |  - Hybrid Rule & ML Generator    |
|  - Real-Time Session Telemetry   |           |  - MLFlow Pipeline Tracking      |
+----------------------------------+           +----------------------------------+`;
  }

  if (project.id === "financeflow") {
    return `+--------------------------------------------------------------------------------------------------------+
|                                  FINANCEFLOW SYSTEM ARCHITECTURE                                       |
+--------------------------------------------------------------------------------------------------------+
[ React 18 + Vite (Tailwind CSS) Client ]
  - Interactive Financial Dashboard (INR ₹ Telemetry)
  - 50/30/20 Rule Smart Budget Allocation Planner
  - Multi-Month History & Dynamic Filter Trends
  - AI Financial Literacy Chat Assistant UI
                                         |
                                    HTTPS / JWT Auth
                                         v
+--------------------------------------------------------------------------------------------------------+
|                                   FastAPI REST Backend (Uvicorn)                                       |
|   - Argon2 Password Hashing & JWT Session Middleware                                                    |
|   - Dynamic calendar.monthrange Bounds & Multi-Table Month Aggregator                                   |
|   - LangChain Prompt & Financial Context Orchestrator                                                  |
+--------------------------------------------------------------------------------------------------------+
                                         |
                 +-----------------------+-----------------------+
                 v                                               v
+----------------------------------+           +----------------------------------+
|    Supabase PostgreSQL Database  |           |     Google Gemini AI Engine      |
|  - Users, Sessions & Profiles    |           |  - gemini-2.5-flash Model        |
|  - Income, Expenses & Budgets    |           |  - Context-Aware Financial Advice|
|  - Chat History & Aggregations   |           |  - Sub-1s Interactive Latency    |
+----------------------------------+           +----------------------------------+`;
  }

  return `+--------------------------------------------------------------------------------------------------------+
|                                SYSTEM ARCHITECTURE SCHEMATIC                                           |
+--------------------------------------------------------------------------------------------------------+
  Architecture Type   : ${project.architecture?.type || project.subcategory || "Distributed System"}
  Primary Stack       : ${(project.technical?.techStack || project.card?.tags || []).slice(0, 5).join(", ")}
  Models & Engines    : ${(project.technical?.models || []).join(", ") || "Neural Inference Engines"}
  Data Infrastructure : ${(project.technical?.infrastructure || ["Cloud Infrastructure"]).join(", ")}
+--------------------------------------------------------------------------------------------------------+`;
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentActiveImage, setCurrentActiveImage] = useState<string>("");
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState<"diagram" | "blueprint">("diagram");
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [activeMediaView, setActiveMediaView] = useState<"video" | "image">("video");

  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Find project by slug/ID
  const projectIndex = projectsDetailData.findIndex(
    (p) => p.id === params.id
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsDetailData[projectIndex];
  const prevProject = projectsDetailData[projectIndex === 0 ? projectsDetailData.length - 1 : projectIndex - 1];
  const nextProject = projectsDetailData[projectIndex === projectsDetailData.length - 1 ? 0 : projectIndex + 1];

  // Derive initial active image and media view
  useEffect(() => {
    if (project.visual?.heroImage) {
      setCurrentActiveImage(project.visual.heroImage);
    } else if (project.visual?.thumbnail) {
      setCurrentActiveImage(project.visual.thumbnail);
    }
    if (project.visual?.video) {
      setActiveMediaView("video");
    } else {
      setActiveMediaView("image");
    }
  }, [project]);

  // Derive tech stack list
  const techStackList = project.technical?.techStack?.length
    ? project.technical.techStack
    : (project.card?.tags || []);

  // Format performance metrics
  const performanceMetrics = project.engineering?.performance || [];

  const blueprintText = getArchitectureBlueprint(project);

  const handleCopyBlueprint = () => {
    navigator.clipboard.writeText(blueprintText);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2000);
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Quick navigation anchors
  const quickNavItems = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Media & Blueprint" },
    { id: "narrative", label: "System Design" },
    { id: "pipeline", label: "Pipeline" },
    { id: "engineering", label: "Engineering" },
    { id: "tech-matrix", label: "Tech Stack" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const hasMediaContent = Boolean(
    project.visual?.heroImage ||
    project.visual?.video ||
    (project.visual?.gallery && project.visual.gallery.length > 0) ||
    blueprintText
  );

  return (
    <main
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#060608] text-zinc-900 selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div className="bg-[#FAFAFC] w-full pb-16">
        {/* Top Shared Navbar */}
        <Navbar variant="light" currentRoute="work" />

        {/* Sticky Sub-Header: Breadcrumbs & Quick-Jump Navigation */}
        <header className="bg-white/90 border-b border-zinc-200/80 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
          <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-2.5 flex flex-wrap items-center justify-between gap-3">

            {/* Left: Back Link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-purple-600 px-3 py-1.5 rounded-full bg-zinc-100/80 hover:bg-zinc-200/80 border border-zinc-200 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to All Work</span>
            </Link>

            {/* Center: In-Page Quick Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 p-1 rounded-full border border-zinc-200/90 text-xs font-medium" aria-label="Page navigation">
              {quickNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${activeSection === item.id
                      ? "bg-white text-zinc-900 shadow-2xs font-semibold"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-white/50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right: Case Study Badge */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Case Study // {project.number || `0${projectIndex + 1}`}
              </span>
            </div>
          </div>
        </header>

        {/* 1. Hero Header Section with Split Right-Corner Media Card (Elevated z-index for overlapping speech bubble) */}
        <section id="overview" className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-5 sm:pt-7 pb-8 relative z-40">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            {/* Left Column (5 cols): Hero Case Study Details */}
            <div className="lg:col-span-5 space-y-4">

              {/* Title & Adjacent Robot Avatar Mascot */}
              <div className="flex items-center gap-4 flex-wrap relative z-50">
                <motion.h1
                  variants={fadeInVariants}
                  className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-zinc-900 leading-[1.08]"
                >
                  {project.title}
                </motion.h1>

                <motion.div variants={fadeInVariants} className="flex items-center relative z-50">
                  <div className="p-1.5 bg-white/95 border border-zinc-200/90 rounded-full shadow-xs backdrop-blur-xs flex items-center justify-center relative z-50">
                    <RobotAvatar
                      mouseX={mouseX}
                      mouseY={mouseY}
                      speechText={`${project.title.toUpperCase()}!`}
                      size="md"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Category & Status Pills */}
              <motion.div variants={fadeInVariants} className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-semibold text-zinc-900 bg-zinc-200/80 border border-zinc-300/80 px-2.5 py-0.5 rounded-full">
                  {project.category}
                </span>
                {project.subcategory && (
                  <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                    {project.subcategory}
                  </span>
                )}
                {project.type && (
                  <span className="text-[11px] font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                    {project.type}
                  </span>
                )}
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/90 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {project.status ? project.status.replace("-", " ") : "Production Ready"}
                </span>
              </motion.div>

              {/* Executive Summary Pitch (Scaled down for scannability) */}
              <motion.p
                variants={fadeInVariants}
                className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed"
              >
                {project.overview?.motivation || project.card?.shortDescription || project.overview?.problem}
              </motion.p>

              {/* Primary External Action Buttons */}
              <motion.div variants={fadeInVariants} className="flex flex-wrap items-center gap-2 pt-0.5">
                {cleanUrl(project.links?.github) && (
                  <a
                    href={cleanUrl(project.links.github)!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 hover:bg-purple-600 text-white rounded-lg text-[11px] font-semibold tracking-wide transition-all shadow-2xs hover:shadow-purple-500/20 group cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    <span>View Repository</span>
                  </a>
                )}
                {cleanUrl(project.links?.live) && (
                  <a
                    href={cleanUrl(project.links.live)!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-[11px] font-semibold tracking-wide transition-all shadow-2xs flex items-center cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live App</span>
                  </a>
                )}
                {cleanUrl(project.links?.demo) && (
                  <a
                    href={cleanUrl(project.links.demo)!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-lg text-[11px] font-semibold tracking-wide transition-all shadow-2xs cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-purple-600" />
                    <span>Demo Video</span>
                  </a>
                )}
                {cleanUrl(project.links?.paper) && (
                  <a
                    href={cleanUrl(project.links.paper)!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 rounded-lg text-[11px] font-semibold tracking-wide transition-all shadow-2xs cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    <span>Paper</span>
                  </a>
                )}
              </motion.div>

              {/* 2 Columns x 2 Rows Telemetry Spec Grid (Compact & Clear) */}
              <motion.div
                variants={fadeInVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 bg-white border border-zinc-200/90 rounded-2xl shadow-2xs text-xs"
              >
                <div className="p-0.5">
                  <span className="text-zinc-400 block font-medium uppercase text-[9.5px] tracking-wider mb-0.5">Category</span>
                  <span className="text-zinc-900 font-bold text-xs">{project.category}</span>
                </div>
                <div className="p-0.5">
                  <span className="text-zinc-400 block font-medium uppercase text-[9.5px] tracking-wider mb-0.5">Timeline</span>
                  <span className="text-zinc-900 font-bold text-xs">{project.year}</span>
                </div>
                <div className="p-0.5 pt-1.5 sm:border-t sm:border-zinc-100">
                  <span className="text-zinc-400 block font-medium uppercase text-[9.5px] tracking-wider mb-0.5">Architecture</span>
                  <span className="text-purple-700 font-bold text-xs block">
                    {project.architecture?.type || project.subcategory || "AI System"}
                  </span>
                </div>
                <div className="p-0.5 pt-1.5 sm:border-t sm:border-zinc-100">
                  <span className="text-zinc-400 block font-medium uppercase text-[9.5px] tracking-wider mb-0.5">Key Benchmark</span>
                  <span className="text-emerald-700 font-bold text-xs block leading-snug">
                    {performanceMetrics[0] || "Sub-second Response"}
                  </span>
                </div>
              </motion.div>

              {/* Performance & Latency Benchmarks (Integrated inside Left Column) */}
              {performanceMetrics.length > 0 && (
                <motion.div variants={fadeInVariants} className="space-y-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-[10px] font-bold font-mono tracking-widest text-zinc-500 uppercase">
                      Performance & Latency Benchmarks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {performanceMetrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.15 }}
                        className="bg-white border border-zinc-200/90 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9.5px] font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded-md uppercase">
                            Metric 0{idx + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs font-semibold text-zinc-900 leading-snug">
                          {metric}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right Column (7 cols): Expanded Architecture Media Showcase Card */}
            <motion.div
              variants={fadeInVariants}
              className="lg:col-span-7 w-full relative"
            >
              {/* Main Media Showcase Card */}
              <div
                id="architecture"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-4 sm:p-5 shadow-xl text-white flex flex-col justify-between"
              >
                {/* Header with Switcher Tabs & Media Status */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
                    {project.visual?.heroImage && (
                      <button
                        onClick={() => setActiveMediaTab("diagram")}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer text-xs ${activeMediaTab === "diagram"
                            ? "bg-purple-600 text-white font-semibold"
                            : "text-zinc-400 hover:text-zinc-200"
                          }`}
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>Visual Architecture</span>
                      </button>
                    )}
                    <button
                      onClick={() => setActiveMediaTab("blueprint")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer text-xs ${activeMediaTab === "blueprint"
                          ? "bg-purple-600 text-white font-semibold"
                          : "text-zinc-400 hover:text-zinc-200"
                        }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5" />
                      <span>ASCII Blueprint</span>
                    </button>
                  </div>

                  {/* Right: Media Status Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="uppercase tracking-wider text-[11px] font-semibold">
                      {activeMediaTab === "diagram" ? "Interactive Media" : "Blueprint"}
                    </span>
                  </div>
                </div>

                {/* Tab 1: Visual Image / Video Display (Expanded Canvas Height) */}
                {activeMediaTab === "diagram" && (
                  <div className="space-y-3">
                    {/* Active Media Viewer: Video or Image */}
                    {activeMediaView === "video" && project.visual?.video ? (
                      <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 relative h-80 sm:h-96 md:h-[410px] lg:h-[430px] flex items-center justify-center">
                        <video
                          src={project.visual.video}
                          controls
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : currentActiveImage || project.visual?.heroImage ? (
                      /* Main Expanded Image Preview */
                      <div
                        onClick={() => setSelectedImage(currentActiveImage || project.visual?.heroImage || null)}
                        className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer group relative h-80 sm:h-96 md:h-[410px] lg:h-[430px] flex items-center justify-center p-3"
                      >
                        <img
                          src={currentActiveImage || project.visual?.heroImage}
                          alt={`${project.title} Architecture`}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold">
                          <Maximize2 className="w-4 h-4 text-purple-400" />
                          <span>Click to Enlarge Full Diagram</span>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 h-80 flex items-center justify-center text-zinc-500 text-xs font-mono">
                        No Media Available
                      </div>
                    )}

                    {/* Thumbnail / Media Switcher Gallery */}
                    {((project.visual?.gallery && project.visual.gallery.length > 0) || project.visual?.video) && (
                      <div className="flex items-center gap-2.5 pt-1 overflow-x-auto no-scrollbar">
                        {/* Video Thumbnail Button if video exists */}
                        {project.visual?.video && (
                          <button
                            type="button"
                            onClick={() => setActiveMediaView("video")}
                            className={`relative rounded-xl overflow-hidden border flex-shrink-0 w-24 h-14 bg-zinc-950 cursor-pointer transition-all flex flex-col items-center justify-center gap-1 ${
                              activeMediaView === "video"
                                ? "border-purple-500 ring-2 ring-purple-500/40 opacity-100 scale-102 bg-purple-950/40"
                                : "border-zinc-800 hover:border-zinc-700 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <div className="w-5 h-5 rounded-full bg-purple-600/80 flex items-center justify-center">
                              <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                            </div>
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-300">Demo Video</span>
                          </button>
                        )}

                        {/* Image Gallery Thumbnails */}
                        {project.visual?.gallery?.map((gImg, gIdx) => (
                          <button
                            key={gIdx}
                            type="button"
                            onClick={() => {
                              setCurrentActiveImage(gImg);
                              setActiveMediaView("image");
                            }}
                            className={`relative rounded-xl overflow-hidden border flex-shrink-0 w-20 h-14 bg-zinc-950 cursor-pointer transition-all ${
                              activeMediaView === "image" && currentActiveImage === gImg
                                ? "border-purple-500 ring-2 ring-purple-500/40 opacity-100 scale-102"
                                : "border-zinc-800 hover:border-zinc-700 opacity-65 hover:opacity-100"
                            }`}
                          >
                            <img src={gImg} alt={`Screen ${gIdx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: ASCII Blueprint Schematic */}
                {activeMediaTab === "blueprint" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-400">
                        schematic-architecture.blueprint
                      </span>
                      <button
                        onClick={handleCopyBlueprint}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-md transition-colors cursor-pointer"
                      >
                        {copiedBlueprint ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Blueprint</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="bg-black/70 border border-zinc-800 rounded-2xl p-4 max-h-[430px] overflow-auto text-xs font-mono text-purple-200 leading-relaxed no-scrollbar whitespace-pre">
                      <code>{blueprintText}</code>
                    </pre>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. Strategic Narrative Bento Grid: Problem -> Motivation -> Architecture -> Outcome */}
        <section id="narrative" className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-purple-600" />
            <h2 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
              System Narrative & Strategic Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* 1. Problem Statement */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-600">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-rose-700 uppercase">
                    Challenge & Problem
                  </h3>
                </div>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                  {project.overview?.problem || "High latency, uncontextualized inputs, and lack of real-time validation required a tailored architectural approach."}
                </p>
              </div>
            </motion.div>

            {/* 2. Motivation */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-purple-50 border border-purple-200/80 text-purple-600">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-purple-700 uppercase">
                    Engineering Motivation
                  </h3>
                </div>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                  {project.overview?.motivation || project.card?.shortDescription}
                </p>
              </div>
            </motion.div>

            {/* 3. Technical Solution */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-indigo-50 border border-indigo-200/80 text-indigo-600">
                    <Layers className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-indigo-700 uppercase">
                    Technical Solution
                  </h3>
                </div>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                  {project.overview?.solution || "Multi-stage async pipeline orchestration with custom API connectors and modular microservices."}
                </p>
              </div>
            </motion.div>

            {/* 4. Outcome & Impact */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-purple-50/50 border border-purple-200/80 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-600">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-emerald-800 uppercase">
                    Outcome & Impact
                  </h3>
                </div>
                <p className="text-zinc-900 text-sm sm:text-base leading-relaxed font-semibold">
                  {project.overview?.outcome || "Delivered a fully validated production architecture with measurable latency reductions and enterprise-grade reliability."}
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. Step-by-Step Pipeline Workflow */}
        {project.architecture?.workflow && project.architecture.workflow.length > 0 && (
          <section id="pipeline" className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8">
            <div className="bg-zinc-900 text-white border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-purple-400" />
                  <h2 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                    Step-by-Step Pipeline Architecture ({project.architecture.type || "Async Pipeline"})
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                  {project.architecture.workflow.length} Executable Stages
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.architecture.workflow.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-zinc-950/80 border border-zinc-800 hover:border-purple-400/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950 border border-purple-800/80 px-2.5 py-0.5 rounded-full uppercase">
                          Stage 0{sIdx + 1}
                        </span>
                        {sIdx < project.architecture.workflow.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-zinc-600 hidden lg:block" />
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Main Content Grid: Engineering Challenges, Solutions & Technical Matrix */}
        <section id="engineering" className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Engineering Hurdles, Solutions & Features (8 cols) */}
            <div className="lg:col-span-8 space-y-8">

              {/* Engineering Hurdles & Solutions (Side-by-Side Comparative) */}
              {(project.engineering?.challenges?.length > 0 || project.engineering?.solutions?.length > 0) && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-purple-600" />
                    <h2 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
                      Engineering Challenges & Architectural Solutions
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Challenges Column */}
                    {project.engineering.challenges?.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold text-rose-700 uppercase flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                          <span>Bottlenecks & Challenges</span>
                        </h3>
                        <div className="space-y-2.5">
                          {project.engineering.challenges.map((ch, cIdx) => (
                            <div
                              key={cIdx}
                              className="bg-rose-50/40 border border-rose-200/70 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-800 font-medium flex items-start gap-2.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                              <span className="leading-snug">{ch}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Solutions Column */}
                    {project.engineering.solutions?.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Architectural Solutions</span>
                        </h3>
                        <div className="space-y-2.5">
                          {project.engineering.solutions.map((sol, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-emerald-50/40 border border-emerald-200/70 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-800 font-medium flex items-start gap-2.5"
                            >
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Features Grid */}
              {project.features && project.features.length > 0 && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
                  <div className="flex items-center gap-2 mb-5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <h2 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
                      Key System Features & Capabilities
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, fIdx) => (
                      <motion.div
                        key={fIdx}
                        whileHover={{ y: -1 }}
                        className="bg-zinc-50/70 border border-zinc-200/80 rounded-xl p-3.5 flex items-start gap-2.5 shadow-2xs hover:border-purple-300 transition-colors"
                      >
                        <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
                          {feat}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scalability Benchmarks */}
              {project.engineering?.scalability && project.engineering.scalability.length > 0 && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <h2 className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">
                      Scalability & Infrastructure Capabilities
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.engineering.scalability.map((scaleItem, scIdx) => (
                      <div
                        key={scIdx}
                        className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-800 font-medium flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                        <span>{scaleItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Takeaways & Lessons */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="bg-amber-50/40 border border-amber-200/80 rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <h2 className="text-xs font-bold font-mono tracking-widest text-amber-900 uppercase">
                      Engineering Takeaways & Learnings
                    </h2>
                  </div>

                  <ul className="space-y-2.5">
                    {project.learnings.map((lrn, lIdx) => (
                      <li
                        key={lIdx}
                        className="bg-white border border-amber-200/70 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-800 font-medium flex items-start gap-2.5 shadow-2xs"
                      >
                        <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{lrn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* R&D Research & Experimental Insights (if research data exists) */}
              {project.research && (project.research.researchQuestion || project.research.findings?.length > 0) && (
                <div className="bg-zinc-900 text-white border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <h2 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                      R&D Research & Experimental Findings
                    </h2>
                  </div>

                  {project.research.researchQuestion && (
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
                        Research Hypothesis
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed">
                        {project.research.researchQuestion}
                      </p>
                    </div>
                  )}

                  {project.research.findings && project.research.findings.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
                        Validated Empirical Results
                      </span>
                      <ul className="space-y-2">
                        {project.research.findings.map((fnd, fIdx) => (
                          <li
                            key={fIdx}
                            className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-xs text-zinc-200 font-mono flex items-center gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                            <span>{fnd}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Right Column: AI Models, Datasets, APIs, Infrastructure, Tech Stack (4 cols) */}
            <div id="tech-matrix" className="lg:col-span-4 space-y-6">

              {/* AI Models Used */}
              {project.technical?.models && project.technical.models.length > 0 && (
                <div className="bg-zinc-900 text-white rounded-3xl p-6 shadow-xl border border-zinc-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                      AI Models & Engines
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.models.map((modelItem, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-200 bg-zinc-800/80 border border-zinc-700/80 px-2.5 py-1 rounded-lg font-medium"
                      >
                        <TechIcon name={modelItem} size={13} className="text-purple-300 flex-shrink-0" />
                        <span>{modelItem}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* APIs & Integrations */}
              {project.technical?.apis && project.technical.apis.length > 0 && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-2xs">
                  <div className="flex items-center gap-2 mb-3">
                    <Network className="w-4 h-4 text-purple-600" />
                    <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      APIs & Services
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.apis.map((apiItem, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                      >
                        <TechIcon name={apiItem} size={13} className="text-purple-600 flex-shrink-0" />
                        <span>{apiItem}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasets */}
              {project.technical?.datasets && project.technical.datasets.length > 0 && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-2xs">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-purple-600" />
                    <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      Benchmark Datasets
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {project.technical.datasets.map((ds, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-800 font-mono font-medium">
                        <TechIcon name={ds} size={13} className="text-purple-600 flex-shrink-0" />
                        <span>{ds}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Infrastructure */}
              {project.technical?.infrastructure && project.technical.infrastructure.length > 0 && (
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-2xs">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-4 h-4 text-purple-600" />
                    <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      Infrastructure
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.infrastructure.map((inf, iIdx) => (
                      <span
                        key={iIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                      >
                        <TechIcon name={inf} size={13} className="text-purple-600 flex-shrink-0" />
                        <span>{inf}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Concepts */}
              {project.technical?.concepts && project.technical.concepts.length > 0 && (
                <div className="bg-zinc-900 text-white rounded-3xl p-6 shadow-xl border border-zinc-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                      Core Concepts
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {project.technical.concepts.map((concept, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-xs text-zinc-200 font-medium">
                        <TechIcon name={concept} size={13} className="text-purple-400 flex-shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Complete Technology Stack */}
              <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-purple-600" />
                  <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                    Full Technology Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {techStackList.map((t, tIdx) => (
                    <motion.span
                      key={tIdx}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg font-medium shadow-2xs hover:border-purple-300 transition-all cursor-default"
                    >
                      <TechIcon name={t} size={14} className="text-purple-600 flex-shrink-0" />
                      <span>{t}</span>
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Bottom Case Study Switcher Navigation */}
        <section className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-10 border-t border-zinc-200 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {prevProject && (
              <Link
                href={`/work/${prevProject.id}`}
                className="group p-5 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-200 hover:border-zinc-800 rounded-2xl transition-all cursor-pointer flex flex-col justify-between shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-purple-400 mb-2">
                  <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Case Study</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 group-hover:text-white">{prevProject.title}</h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-400 font-mono mt-0.5">{prevProject.category}</p>
                  </div>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.id}`}
                className="group p-5 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-200 hover:border-zinc-800 rounded-2xl transition-all cursor-pointer flex flex-col justify-between text-right shadow-2xs"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-purple-400 mb-2">
                  <span>Next Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="flex items-center justify-between flex-row-reverse">
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 group-hover:text-white">{nextProject.title}</h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-400 font-mono mt-0.5">{nextProject.category}</p>
                  </div>
                </div>
              </Link>
            )}

          </div>
        </section>

        {/* 7. Full Image Gallery Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
              >
                <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                    {project.title} — Full Resolution View
                  </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close image preview"
                    className="p-1.5 bg-zinc-800 hover:bg-rose-600 text-zinc-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-zinc-950">
                  <img
                    src={selectedImage}
                    alt="Full resolution preview"
                    className="max-h-[75vh] w-auto object-contain rounded-xl border border-white/10"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Contact Section Footer */}
      <Contact />
    </main>
  );
}
