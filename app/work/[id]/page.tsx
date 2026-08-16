"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { TechIcon } from "@/components/TechIcon";
import { RobotAvatar } from "@/components/RobotAvatar";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MapPin, 
  Briefcase, 
  ExternalLink, 
  Github,
  Layers,
  Code2,
  ChevronRight,
  X,
  Download,
  Maximize2,
  Wrench,
  Target,
  Compass,
  Trophy,
  Cpu,
  Database,
  Network,
  Server,
  Workflow,
  FileText,
  Lightbulb,
  Check,
  Zap,
  AlertTriangle,
  TrendingUp,
  Play,
  BookOpen
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

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  // Derive tech stack list from technical.techStack or card.tags
  const techStackList = project.technical?.techStack?.length 
    ? project.technical.techStack 
    : (project.card?.tags || []);

  // Format performance metrics for KPI grid
  const performanceMetrics = project.engineering?.performance || [];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#060608] text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div className="bg-[#FDFDFE] w-full pb-12">
        {/* Shared Unified Navigation Bar */}
        <Navbar variant="light" currentRoute="work" />
        
        {/* Top Breadcrumb Header Bar */}
        <div className="bg-slate-50/90 border-b border-slate-200/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-700 hover:text-purple-600 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 transition-all cursor-pointer shadow-2xs group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>BACK TO ALL WORK & CASE STUDIES</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
                CASE STUDY // {project.number || `0${projectIndex + 1}`}
              </span>
            </div>
          </div>
        </div>

        {/* Main Hero Header */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-10 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column (8 cols): Hero Case Study Details */}
            <div className="lg:col-span-8">
              
              {/* Category & Metadata Badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                  {project.category}
                </span>
                {project.subcategory && (
                  <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100/80 border border-purple-300 px-3.5 py-1.5 rounded-full uppercase">
                    {project.subcategory}
                  </span>
                )}
                {project.type && (
                  <span className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full font-bold uppercase">
                    {project.type}
                  </span>
                )}
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {project.status ? project.status.toUpperCase().replace("-", " ") : "PRODUCTION OPERATIONAL"}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] mb-4 leading-[1.08]"
              >
                {project.title}
              </motion.h1>

              {/* Telemetry Info Pill Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 border border-slate-200/90 rounded-2xl font-mono text-xs shadow-2xs mb-6">
                <div>
                  <span className="text-slate-400 block uppercase mb-1 text-[10px]">CATEGORY</span>
                  <span className="text-[#08080A] font-bold">{project.category}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase mb-1 text-[10px]">YEAR</span>
                  <span className="text-[#08080A] font-bold">{project.year}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase mb-1 text-[10px]">ARCHITECTURE</span>
                  <span className="text-purple-700 font-bold truncate block">{project.architecture?.type || project.subcategory || "AI System"}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase mb-1 text-[10px]">PRIMARY BENCHMARK</span>
                  <span className="text-emerald-700 font-bold truncate block">{performanceMetrics[0] || "High Throughput"}</span>
                </div>
              </motion.div>

              {/* Overview Summary */}
              <motion.p variants={itemVariants} className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-3xl">
                {project.overview?.motivation || project.card?.shortDescription || project.overview?.problem}
              </motion.p>

              {/* Primary External Links */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-[#08080A] hover:bg-purple-600 text-white rounded-full text-xs font-mono font-bold tracking-wider transition-all shadow-md hover:shadow-purple-500/25 flex items-center gap-2 group cursor-pointer"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-xs font-mono font-bold tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE APPLICATION</span>
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 rounded-full text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-purple-600" />
                    <span>DEMO VIDEO</span>
                  </a>
                )}
                {project.links?.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 rounded-full text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>RESEARCH PAPER</span>
                  </a>
                )}
              </motion.div>

            </div>

            {/* Right Column (4 cols): AI Robot Avatar Mascot */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col items-center lg:items-center justify-center py-4"
            >
              <RobotAvatar 
                mouseX={mouseX} 
                mouseY={mouseY} 
                speechText={`${project.title.toUpperCase()}!`} 
                size="xl" 
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Performance KPI Benchmarks Cards Grid */}
        {performanceMetrics.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-600" />
              <span>PERFORMANCE & BENCHMARK METRICS</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="bg-slate-50/80 border border-purple-200/90 rounded-2xl p-5 shadow-2xs hover:border-purple-300 transition-colors flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    BENCHMARK 0{idx + 1}
                  </span>
                  <p className="text-lg sm:text-xl font-black text-purple-950 font-mono leading-tight">
                    {metric}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Visual Showcase / Hero Media Gallery Banner (if visual images exist) */}
        {(project.visual?.heroImage || (project.visual?.gallery && project.visual.gallery.length > 0)) && (
          <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-white overflow-hidden">
              <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4 flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-purple-400" />
                <span>VISUAL SHOWCASE & INTERFACE GALLERY</span>
              </h3>

              {project.visual?.heroImage && (
                <div 
                  onClick={() => setSelectedImage(project.visual.heroImage)}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 mb-4 cursor-pointer group relative"
                >
                  <img src={project.visual.heroImage} alt={project.title} className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-102" />
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-bold">
                    <Maximize2 className="w-5 h-5 text-purple-400" />
                    <span>CLICK TO VIEW FULL RESOLUTION</span>
                  </div>
                </div>
              )}

              {project.visual?.gallery && project.visual.gallery.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.visual.gallery.map((gImg, gIdx) => (
                    <div 
                      key={gIdx}
                      onClick={() => setSelectedImage(gImg)}
                      className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 cursor-pointer group relative h-36"
                    >
                      <img src={gImg} alt={`Gallery ${gIdx}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 4-Quadrant System Overview Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-6 flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-purple-600" />
            <span>SYSTEM OVERVIEW & CORE ARCHITECTURE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Problem Statement */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-rose-600 uppercase mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                  <span>CHALLENGE & PROBLEM STATEMENT</span>
                </h3>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  {project.overview?.problem || "High latency and hallucinatory guardrails required engineering optimization."}
                </p>
              </div>
            </motion.div>

            {/* 2. Motivation */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-800 uppercase mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  <span>ENGINEERING MOTIVATION</span>
                </h3>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  {project.overview?.motivation || project.card?.shortDescription}
                </p>
              </div>
            </motion.div>

            {/* 3. Technical Solution */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-900 uppercase mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>TECHNICAL SOLUTION ARCHITECTURE</span>
                </h3>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  {project.overview?.solution || "Multimodal async pipeline orchestration with custom API connectors."}
                </p>
              </div>
            </motion.div>

            {/* 4. Outcome & Impact */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-purple-950/10 border border-purple-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>MEASURABLE OUTCOME & IMPACT</span>
                </h3>
                <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-bold">
                  {project.overview?.outcome || "Production deployment delivering fast response times and high accuracy."}
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Step-by-Step Architectural Pipeline Workflow */}
        {project.architecture?.workflow && project.architecture.workflow.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
            <div className="bg-[#08080A] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-300 uppercase mb-6 flex items-center gap-2.5">
                <Workflow className="w-5 h-5 text-purple-400" />
                <span>STEP-BY-STEP PIPELINE WORKFLOW ({project.architecture.type || "Async Pipeline"})</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {project.architecture.workflow.map((step, sIdx) => (
                  <div key={sIdx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-400/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800/60 px-2.5 py-0.5 rounded-full uppercase">
                          STAGE 0{sIdx + 1}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-500 hidden lg:block" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main 12-Column Content Grid: Engineering Hurdles & Models/Tech Matrix */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Engineering Hurdles, Solutions & Features (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Engineering Hurdles & Solutions */}
              {(project.engineering?.challenges?.length > 0 || project.engineering?.solutions?.length > 0) && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-4 flex items-center gap-2.5">
                    <Wrench className="w-5 h-5 text-purple-600" />
                    <span>ENGINEERING CHALLENGES & DEPLOYED SOLUTIONS</span>
                  </h2>

                  {/* Challenges List */}
                  {project.engineering.challenges?.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-500" />
                        <span>HARDSHIPS & BOTTLENECK CHALLENGES</span>
                      </h3>
                      <ul className="space-y-2">
                        {project.engineering.challenges.map((ch, cIdx) => (
                          <li key={cIdx} className="bg-white border border-rose-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 font-medium flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions List */}
                  {project.engineering.solutions?.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono font-bold tracking-wider text-emerald-700 uppercase flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>ARCHITECTURAL SOLUTIONS DEPLOYED</span>
                      </h3>
                      <ul className="space-y-2">
                        {project.engineering.solutions.map((sol, sIdx) => (
                          <li key={sIdx} className="bg-white border border-emerald-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 font-medium flex items-start gap-3">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Scalability Benchmarks */}
              {project.engineering?.scalability && project.engineering.scalability.length > 0 && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-4 flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span>SCALABILITY & INFRASTRUCTURE CAPABILITY</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.engineering.scalability.map((scaleItem, scIdx) => (
                      <div key={scIdx} className="bg-white border border-slate-200/90 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3 shadow-2xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0" />
                        <span>{scaleItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Checklist */}
              {project.features && project.features.length > 0 && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-6 flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    <span>KEY SYSTEM FEATURES & CAPABILITIES</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, fIdx) => (
                      <motion.div 
                        key={fIdx}
                        whileHover={{ x: 3 }}
                        className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-start gap-3 shadow-2xs hover:border-purple-300 transition-colors"
                      >
                        <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 border border-purple-300 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-mono font-bold">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 sm:p-8">
                  <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-amber-950 uppercase mb-4 flex items-center gap-2.5">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                    <span>KEY ENGINEERING TAKEAWAYS & LESSONS</span>
                  </h2>

                  <ul className="space-y-2.5">
                    {project.learnings.map((lrn, lIdx) => (
                      <li key={lIdx} className="bg-white border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3">
                        <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{lrn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Research & R&D Insights Section (if research data exists) */}
              {project.research && (project.research.researchQuestion || project.research.findings?.length > 0) && (
                <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                  <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-300 uppercase mb-2 flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span>R&D RESEARCH & EXPERIMENTAL INSIGHTS</span>
                  </h2>

                  {project.research.researchQuestion && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">RESEARCH HYPOTHESIS</span>
                      <p className="text-sm font-mono text-slate-200 leading-relaxed">{project.research.researchQuestion}</p>
                    </div>
                  )}

                  {project.research.findings && project.research.findings.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">EXPERIMENTAL FINDINGS</span>
                      <ul className="space-y-2">
                        {project.research.findings.map((fnd, fIdx) => (
                          <li key={fIdx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-slate-200 font-mono flex items-center gap-2.5">
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
            <div className="lg:col-span-4 space-y-8">
              
              {/* AI Models Used */}
              {project.technical?.models && project.technical.models.length > 0 && (
                <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span>AI MODELS & SPEECH ENGINES</span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.models.map((modelItem, mIdx) => (
                      <span key={mIdx} className="inline-flex items-center gap-2 text-xs font-mono text-slate-100 bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl font-medium">
                        <TechIcon name={modelItem} size={14} className="text-purple-300 flex-shrink-0" />
                        <span>{modelItem}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* APIs & Integrations */}
              {project.technical?.apis && project.technical.apis.length > 0 && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                    <Network className="w-4 h-4 text-purple-600" />
                    <span>APIS & EXTERNAL SERVICES</span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.apis.map((apiItem, aIdx) => (
                      <span key={aIdx} className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-medium shadow-2xs">
                        <TechIcon name={apiItem} size={14} className="text-purple-600 flex-shrink-0" />
                        <span>{apiItem}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasets */}
              {project.technical?.datasets && project.technical.datasets.length > 0 && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4 text-purple-600" />
                    <span>BENCHMARK DATASETS</span>
                  </h3>

                  <ul className="space-y-2">
                    {project.technical.datasets.map((ds, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-800 font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                        <span>{ds}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Infrastructure */}
              {project.technical?.infrastructure && project.technical.infrastructure.length > 0 && (
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-600" />
                    <span>INFRASTRUCTURE & DEPLOYMENT</span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technical.infrastructure.map((inf, iIdx) => (
                      <span key={iIdx} className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-medium shadow-2xs">
                        <TechIcon name={inf} size={14} className="text-purple-600 flex-shrink-0" />
                        <span>{inf}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Concepts */}
              {project.technical?.concepts && project.technical.concepts.length > 0 && (
                <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>CONCEPTS & ARCHITECTURES</span>
                  </h3>

                  <ul className="space-y-2.5">
                    {project.technical.concepts.map((concept, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack Tags with TechIcon */}
              <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-600" />
                  <span>FULL TECHNOLOGY STACK</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {techStackList.map((t, tIdx) => (
                    <motion.span 
                      key={tIdx}
                      whileHover={{ scale: 1.04 }}
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-medium shadow-2xs hover:border-purple-300 transition-all cursor-default"
                    >
                      <TechIcon name={t} size={15} className="text-purple-600 flex-shrink-0" />
                      <span>{t}</span>
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Code Blueprint & Technical Diagram */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="bg-[#08080A] text-white border border-purple-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h3 className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>TECHNICAL BLUEPRINT // CORE IMPLEMENTATION SCHEMATIC</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">BLUEPRINT CODE SCHEMA</span>
            </div>

            <pre className="bg-black/60 border border-white/10 rounded-2xl p-5 overflow-x-auto text-xs sm:text-sm font-mono text-purple-200 leading-relaxed no-scrollbar whitespace-pre-wrap">
              <code>{getArchitectureBlueprint(project)}</code>
            </pre>
          </div>
        </section>

        {/* Bottom Case Study Switcher Navigation */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 border-t border-slate-200/90 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {prevProject && (
              <Link
                href={`/work/${prevProject.id}`}
                className="group p-6 bg-slate-50/80 hover:bg-slate-900 hover:text-white border border-slate-200/90 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between shadow-2xs"
              >
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-3 block">
                  ← PREVIOUS CASE STUDY
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base sm:text-lg font-black">{prevProject.title}</h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono mt-0.5">{prevProject.category}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:-translate-x-1" />
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.id}`}
                className="group p-6 bg-slate-50/80 hover:bg-slate-900 hover:text-white border border-slate-200/90 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between text-right shadow-2xs"
              >
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-3 block">
                  NEXT CASE STUDY →
                </span>
                <div className="flex items-center justify-between flex-row-reverse">
                  <div>
                    <h4 className="text-base sm:text-lg font-black">{nextProject.title}</h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono mt-0.5">{nextProject.category}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )}

          </div>
        </section>

        {/* Full Image Gallery Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
              >
                <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                    {project.title} — FULL RESOLUTION MEDIA
                  </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-950">
                  <img src={selectedImage} alt="Full view" className="max-h-[75vh] w-auto object-contain rounded-xl border border-white/10" />
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
