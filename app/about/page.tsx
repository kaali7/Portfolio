"use client";

import { useState, useRef } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Sparkles, ArrowRight, Award, ExternalLink, Terminal, Code2, Cpu } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { experienceData } from "@/lib/experienceDetailData";
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
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a 
        href={certificate} 
        target="_blank" 
        rel="noreferrer"
        className="w-40 sm:w-44 inline-flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-white bg-[#08080A] hover:bg-purple-600 px-4 py-2 rounded-full transition-colors cursor-pointer shadow-xs whitespace-nowrap"
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
            className="absolute bottom-full right-0 mb-3 w-80 sm:w-96 md:w-[420px] bg-[#0c0c11] text-white border border-slate-800 rounded-2xl p-4 shadow-2xl z-50 pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                VERIFIED CREDENTIAL PREVIEW
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold truncate max-w-[140px]">{company}</span>
            </div>

            {/* Certificate Preview Image Container - Perfectly Sized with object-contain */}
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
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const domainSkills = [
    {
      title: "Generative AI & LLM Systems",
      badge: "CORE FOCUS",
      description: "Enterprise RAG architectures, multi-vector hybrid retrieval, STT/TTS voice engines, prompt optimization, and zero-hallucination guardrails.",
      tools: ["Generative AI", "RAG", "LangChain", "FastAPI", "Python", "Google Gemini API", "Ollama"],
      relatedProjects: [
        { name: "Netran AI", href: "/work/netran-ai" },
        { name: "ResumeBuilder", href: "/work/resumebuilder" }
      ]
    },
    {
      title: "Data Analytics & Telemetry",
      badge: "ANALYTICS",
      description: "Data extraction, ETL cleaning, performance dashboards, trend identification, statistical telemetry, and data-driven social impact modeling.",
      tools: ["Data Analysis", "Dashboards", "Data Visualization", "Google Sheets", "SQL", "Pandas"],
      relatedProjects: [
        { name: "Auto Dash: AI HR", href: "/work/auto-dash" },
        { name: "GarunaCDX Pipeline", href: "/experience/garunacdx" }
      ]
    },
    {
      title: "Autonomous Agent Architectures",
      badge: "AGENTIC AI",
      description: "Multimodal AI technical interviewers, real-time voice streaming loops, state machine reasoning graphs, and automated tool invocation.",
      tools: ["FastAPI", "Next.js", "Silero VAD", "Faster-Whisper", "Kokoro TTS", "SQLite"],
      relatedProjects: [
        { name: "Netran AI", href: "/work/netran-ai" },
        { name: "StockMind AI", href: "/work/stockmind-ai" }
      ]
    },
    {
      title: "Full-Stack AI Engineering",
      badge: "FULL-STACK",
      description: "Integrating modern React / Next.js frontends with async Python FastAPI backends, dual LaTeX PDF rendering pipelines, and Supabase auth.",
      tools: ["Next.js", "React", "TypeScript", "FastAPI", "Tailwind CSS", "Supabase", "Docker"],
      relatedProjects: [
        { name: "ResumeBuilder", href: "/work/resumebuilder" },
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
      <div className="bg-white w-full pb-8">
        {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="about" />

      {/* Editorial Hero Section */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-8 sm:pt-12 pb-10 sm:pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#08080A] leading-[1.08]">
              Architecting <span className="font-light italic text-purple-600">Generative AI</span> & Data Intelligence
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl font-normal">
              I specialize in building production-ready Generative AI systems, RAG architectures, multi-agent voice interviewers, and data analytics dashboards. My work bridges mathematical data analysis with high-impact full-stack AI engineering.
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-200/80 max-w-md">
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">PROD PROJECTS</span>
                <span className="text-xl sm:text-2xl font-black text-[#08080A] font-mono">4 Systems</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">MAIN FOCUS</span>
                <span className="text-xl sm:text-2xl font-black text-purple-600 font-mono">GenAI / RAG</span>
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
              className="self-center lg:self-start"
            >
              <RobotAvatar mouseX={mouseX} mouseY={mouseY} speechText="HELLO!" size="lg" />
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
                &quot;AI applications must solve real-world problems. Clean data pipelines, low-latency streaming loops, and robust RAG architectures turn raw AI models into production tools.&quot;
              </blockquote>

              <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">Generative AI & RAG Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">Data Analytics & Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300">Sub-250ms Voice AI Interaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Competencies Bento Grid */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-4 pb-12 relative z-10">
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

      {/* Career Milestones Section */}
      <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-4 pb-16 relative z-10">
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
                className="bg-white/80 hover:bg-white border border-slate-200/90 hover:border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 group/item flex flex-col md:flex-row gap-4 md:gap-8 items-start justify-between"
              >
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full inline-block mb-2 uppercase shadow-2xs">
                    {item.year}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#08080A] group-hover/item:text-purple-600 transition-colors">
                    {item.role}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">{item.company}</span>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal group-hover/item:text-slate-800 transition-colors">
                    {item.summary}
                  </p>
                </div>

                <div className="flex-shrink-0 self-start md:self-center flex flex-col gap-2 items-end">
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
                      className="w-36 sm:w-40 inline-flex items-center justify-center gap-1 text-[9.5px] font-mono font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-2xs whitespace-nowrap group/det"
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
