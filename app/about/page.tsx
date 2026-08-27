"use client";

import { useState, useRef } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Award, ExternalLink, Terminal, Code2, Cpu, GraduationCap, BookOpen, CheckCircle2, Maximize2, Download, X, Eye } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { experienceData } from "@/lib/experienceDetailData";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { RobotAvatar } from "@/components/RobotAvatar";
import { TechIcon } from "@/components/TechIcon";

function CredentialPreviewButton({ certificate, role, company }: { certificate: string; role: string; company: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  return (
    <div 
      className="relative flex-1 sm:flex-initial inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a 
        href={certificate} 
        target="_blank" 
        rel="noreferrer"
        className="w-full sm:w-40 inline-flex items-center justify-center gap-1.5 text-[9.5px] sm:text-[10px] font-mono font-bold text-white bg-[#08080A] hover:bg-purple-600 px-3 sm:px-4 py-2 rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap text-center"
      >
        <Award className="w-3.5 h-3.5 text-purple-300" />
        <span>VIEW CREDENTIAL</span>
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="absolute bottom-full right-0 mb-3 w-72 xs:w-80 sm:w-96 md:w-[420px] max-w-[calc(100vw-2rem)] bg-[#0c0c11] text-white border border-slate-800 rounded-2xl p-4 shadow-2xl z-50 pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                VERIFIED CREDENTIAL PREVIEW
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold truncate max-w-[140px]">{company}</span>
            </div>

            {/* Certificate Preview Image Container */}
            <div className="w-full h-52 sm:h-64 bg-slate-950/90 border border-slate-800 rounded-xl p-2 overflow-hidden mb-3.5 relative flex items-center justify-center group/img">
              <img 
                src={certificate} 
                alt={`${role} Certificate`} 
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover/img:scale-[1.02]" 
              />
            </div>

            {/* Full View Button */}
            <a 
              href={certificate} 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md group/btn"
            >
              <span>FULL VIEW</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates for RobotAvatar tracking
  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);

  // Local mouse tracking motion values for interactive white page light glow effect
  const localMouseX = useMotionValue(-1000);
  const localMouseY = useMotionValue(-1000);
  const opacityVal = useMotionValue(0);

  // Buttery-smooth spring physics for fluid inertia & zero-jitter cursor tracking
  const smoothX = useSpring(localMouseX, { stiffness: 65, damping: 26, mass: 0.8 });
  const smoothY = useSpring(localMouseY, { stiffness: 65, damping: 26, mass: 0.8 });
  const smoothOpacity = useSpring(opacityVal, { stiffness: 80, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    rawMouseX.set(e.clientX);
    rawMouseY.set(e.clientY);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      localMouseX.set(e.clientX - rect.left);
      localMouseY.set(e.clientY - rect.top);
      opacityVal.set(1);
    }
  };

  const handleMouseEnter = () => {
    opacityVal.set(1);
  };

  const handleMouseLeave = () => {
    opacityVal.set(0);
    rawMouseX.set(-1000);
    rawMouseY.set(-1000);
  };

  // Multi-stop diffused radial purple glow spotlight for a luxurious, smooth ambient feel
  const lightGlowBg = useTransform(
    [smoothX, smoothY, smoothOpacity],
    ([x, y, op]) =>
      `radial-gradient(circle 420px at ${x}px ${y}px, rgba(147, 51, 234, ${Number(op) * 0.16}) 0%, rgba(168, 85, 247, ${Number(op) * 0.07}) 35%, rgba(147, 51, 234, ${Number(op) * 0.02}) 65%, transparent 100%)`
  );

  const domainSkills = [
    {
      title: "MLOps & LLMOps Infrastructure",
      badge: "MAIN FOCUS",
      description: "Architecting end-to-end MLOps & LLMOps pipelines—API-based model serving with FastAPI/Flask, vector embeddings (FAISS/SQLite), automated n8n workflows, Docker containerization, and AWS cloud fundamentals.",
      tools: ["MLOps", "LLMOps", "FastAPI", "Docker", "AWS", "n8n", "Python", "SQLite"],
      relatedProjects: [
        { name: "Netran AI", href: "/work/netran-ai" },
        { name: "AuraFlow Music AI", href: "/work/auraflow-music-recommendation" }
      ]
    },
    {
      title: "Research, Plan & Build Lifecycle",
      badge: "METHODOLOGY",
      description: "Rigorous domain research, mathematical feature engineering, architectural workflow design, and rapid full-stack iteration from conceptual ML research to production-ready applications.",
      tools: ["System Architecture", "Python", "FastAPI", "React", "Scikit-Learn", "Tailwind CSS"],
      relatedProjects: [
        { name: "ResumeBuilder", href: "/work/resumebuilder" },
        { name: "Auto Dash", href: "/work/auto-dash" }
      ]
    },
    {
      title: "Generative AI & RAG Architectures",
      badge: "GENAI & RAG",
      description: "Domain-specific RAG chatbots, multi-vector hybrid retrieval (FAISS + HuggingFace embeddings), Gemini API integration, local Ollama LLM reasoning, and zero-hallucination prompt pipelines.",
      tools: ["RAG", "FAISS", "Gemini API", "HuggingFace", "Ollama", "LangChain"],
      relatedProjects: [
        { name: "Medical RAG Chatbot", href: "/work" },
        { name: "Netran AI", href: "/work/netran-ai" }
      ]
    },
    {
      title: "Machine Learning & Feature Engineering",
      badge: "ML & ANALYTICS",
      description: "Regression models, Euclidean & Cosine distance space matrices, NLP processing, dynamic multi-stage recommendation engines, and automated data profiling.",
      tools: ["Scikit-Learn", "Pandas", "NumPy", "Regression", "Feature Engineering", "SQL"],
      relatedProjects: [
        { name: "AuraFlow Music AI", href: "/work/auraflow-music-recommendation" },
        { name: "StockMind AI", href: "/work/stockmind-ai" }
      ]
    }
  ];

  const careerMilestones = experienceData.map(exp => ({
    id: exp.id,
    year: exp.duration.display.split(" · ")[0] || exp.duration.display,
    role: exp.role,
    company: exp.company,
    summary: exp.overview.shortDescription,
    certificate: exp.visual.certificate
  }));

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#060608] text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div 
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white w-full pb-8 relative overflow-visible z-10"
      >
        {/* Interactive Cursor Light Spotlight Layer on White Page Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
          style={{
            background: lightGlowBg,
          }}
        />

        {/* Shared Unified Navigation Bar */}
        <Navbar variant="light" currentRoute="about" />

      {/* Editorial Hero Section */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-6 xs:pt-8 sm:pt-12 pb-8 xs:pb-10 sm:pb-12 relative z-50 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#08080A] leading-[1.08]">
              Architecting <span className="font-light italic text-purple-600">MLOps & LLMOps</span> Pipelines
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl font-normal">
              I am Ashwini Prajapati, a Data Science & AI Engineer specializing in MLOps, LLMOps, and production AI system design. Operating across a structured <strong className="text-purple-900 font-bold">Research → Plan → Build</strong> engineering lifecycle, I bridge mathematical machine learning models with high-throughput API serving, vector retrieval networks, and scalable full-stack applications.
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-200/80 max-w-md">
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors backdrop-blur-xs">
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">PROD PROJECTS</span>
                <span className="text-xl sm:text-2xl font-black text-[#08080A] font-mono">{projectsDetailData.length} Systems</span>
              </div>
              <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors backdrop-blur-xs">
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">MAIN FOCUS</span>
                <span className="text-xl sm:text-2xl font-black text-purple-600 font-mono">MLOps / LLMOps</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: AI Robot Mascot & Engineering Philosophy Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4">
            {/* Robot Avatar Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="self-center lg:self-start relative z-[60]"
            >
              <RobotAvatar mouseX={rawMouseX} mouseY={rawMouseY} speechText="RESEARCH · PLAN · BUILD" size="lg" />
            </motion.div>

            {/* Right Engineering Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#08080A] text-white border border-purple-500/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest block mb-2.5">
                ENGINEERING PHILOSOPHY
              </span>

              <blockquote className="text-xs sm:text-sm text-slate-200 font-serif italic leading-relaxed mb-4">
                &quot;AI engineering extends far beyond model training—it requires deep research into edge cases, meticulous architectural planning, and robust MLOps & LLMOps pipelines to turn raw algorithms into reliable production tools.&quot;
              </blockquote>

              <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">Research → Plan → Build Methodology</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">MLOps & LLMOps Pipeline Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">Production Model Serving & Vector RAG</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Competencies Bento Grid */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-4 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 pb-3 border-b border-slate-200/80"
        >
          <h2 className="text-2xl sm:text-4xl font-black text-[#08080A] tracking-tight">
            Core Competencies & Stack
          </h2>
        </motion.div>

        {/* Asymmetrical Bento Layout with Hover Angle Physics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {domainSkills.map((domain, idx) => {
            const spanClass =
              idx === 0 || idx === 3
                ? "md:col-span-7 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 border-purple-200/90"
                : "md:col-span-5 bg-slate-50/90 border-slate-200/90";

            const hoverRotate = idx % 2 === 0 ? -1.5 : 1.5;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  rotate: hoverRotate, 
                  scale: 1.015, 
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                className={`${spanClass} border hover:border-purple-500 hover:bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 group relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3 py-0.5 rounded-full uppercase">
                      {domain.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#08080A] group-hover:text-purple-600 transition-colors mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {domain.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Tech Stack Chips with TechIcon */}
                  <div className="pt-3.5 border-t border-slate-200/80">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-1.5 font-bold">
                      KEY TECHNOLOGIES & TOOLS
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {domain.tools.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-800 bg-white border border-slate-200 px-2 py-0.5 rounded-md font-medium shadow-2xs hover:border-purple-300 transition-colors"
                        >
                          <TechIcon name={t} className="w-3 h-3" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Projects */}
                  <div className="pt-2.5 border-t border-slate-200/60">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-1.5 font-bold">
                      RELATED PROD PROJECTS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.relatedProjects.map((p, pIdx) => (
                        <Link
                          key={pIdx}
                          href={p.href}
                          className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-0.5 rounded-full transition-colors group/link"
                        >
                          <span>{p.name}</span>
                          <ArrowRight className="w-2.5 h-2.5 text-purple-500 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Education & Academic Background Section */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-4 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 pb-3 border-b border-slate-200/80"
        >
          <h2 className="text-2xl sm:text-4xl font-black text-[#08080A] tracking-tight">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-black text-[#08080A] uppercase font-mono tracking-wide">ACADEMIC BACKGROUND</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                    <h4 className="text-base font-bold text-[#08080A]">Bachelor of Data Science & A.I</h4>
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 font-medium">Ramniranjan Jhunjhunwala College</p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                    <h4 className="text-base font-bold text-[#08080A]">Computer Science (HSC)</h4>
                    <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-0.5 rounded-full">
                      2022 - 2024 · 77.33%
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 font-medium">New English School and College</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 border border-purple-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-black text-[#08080A] uppercase font-mono tracking-wide">CERTIFICATIONS</h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded-full">
                  VERIFIED PROOF
                </span>
              </div>

              <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-2xs space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#08080A] leading-snug">CSRBOX Applied AI Internship</h4>
                    <span className="text-[11px] font-mono text-purple-700 font-medium block mt-0.5">In association with AICTE & IBM SkillsBuild</span>
                  </div>
                  <span className="text-[9.5px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                    2025 – 2026
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  6-week Applied Artificial Intelligence program in association with <strong className="text-slate-800 font-semibold">AICTE & IBM SkillsBuild</strong>. Developed <strong className="text-purple-900 font-bold">FinanceFlow</strong> as the official capstone AI project.
                </p>

                {/* Capstone Project Showcase Pill */}
                <div className="bg-purple-50/80 border border-purple-200/90 rounded-xl p-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[9px] font-mono font-bold text-purple-700 bg-purple-200/80 px-2 py-0.5 rounded-md uppercase flex-shrink-0">
                      CAPSTONE
                    </span>
                    <span className="text-xs font-bold text-[#08080A] truncate">
                      FinanceFlow — Personal Finance AI
                    </span>
                  </div>
                  <Link
                    href="/work/financeflow"
                    className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-mono font-bold text-purple-700 hover:text-purple-900 bg-white hover:bg-purple-100 border border-purple-300 px-2.5 py-1 rounded-full shadow-2xs transition-colors flex-shrink-0"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-purple-100/80">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-purple-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                    <span>Practical ML & AI System Deployment</span>
                  </div>

                  <CredentialPreviewButton 
                    certificate="/experience/csrbox_internship_certificate.png"
                    role="CSRBOX Applied AI Internship"
                    company="AICTE & IBM SkillsBuild"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Milestones Section */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-4 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-slate-200/80 gap-3">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#08080A] tracking-tight">
                Experience Timeline
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-white bg-[#08080A] hover:bg-purple-600 border border-slate-800 hover:border-purple-500 px-4 py-2 rounded-full shadow-xs hover:shadow-md transition-all group"
            >
              <span>EXPLORE ALL PRODUCTION PROJECTS</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-4">
            {careerMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ x: 3, scale: 1.006 }}
                className="bg-white/80 hover:bg-white border border-slate-200/90 hover:border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 group/item flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 items-start justify-between"
              >
                {/* Left Side: Role + Year Pill on same line on Mobile */}
                <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                  <div className="flex items-center justify-between gap-2 w-full">
                    <h4 className="text-base sm:text-lg font-bold text-[#08080A] group-hover/item:text-purple-600 transition-colors">
                      {item.role}
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full uppercase shadow-2xs whitespace-nowrap flex-shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">{item.company}</span>
                </div>

                {/* Center: Summary */}
                <div className="flex-1 w-full">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal group-hover/item:text-slate-800 transition-colors my-1 sm:my-0">
                    {item.summary}
                  </p>
                </div>

                {/* Right Side: Horizontal Action Buttons on Mobile */}
                <div className="flex-shrink-0 w-full md:w-auto flex flex-row md:flex-col items-center md:items-end gap-2 justify-start md:justify-end pt-1 sm:pt-0">
                  {item.certificate && (
                    <CredentialPreviewButton 
                      certificate={item.certificate} 
                      role={item.role} 
                      company={item.company} 
                    />
                  )}
                  {item.id && (
                    <Link
                      href={`/experience/${item.id}`}
                      className="flex-1 sm:flex-initial sm:w-36 inline-flex items-center justify-center gap-1 text-[9.5px] sm:text-[10px] font-mono font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 px-3 sm:px-4 py-2 rounded-full transition-all cursor-pointer shadow-2xs whitespace-nowrap group/det text-center"
                    >
                      <span>MORE DETAILS</span>
                      <ArrowRight className="w-3 h-3 text-purple-500 group-hover/det:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      </div>

      {/* Interactive Contact Component Footer */}
      <Contact />
    </main>
  );
}

