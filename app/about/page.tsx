"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { Copy, Check, Sparkles, ArrowRight, Award, Terminal, Code2 } from "lucide-react";

// Design Read:
// Reading this as: High-contrast editorial theme reversal for /about,
// switching major background to pure high-contrast White (bg-white / bg-slate-50),
// with Obsidian Black (text-[#08080A]) for biography headlines/structure and
// Vibrant Purple (text-purple-600, bg-purple-600) for key metrics & CTAs.

export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const email = "ashwini@ai-architect.io";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const domainSkills = [
    {
      title: "Data Science & Temporal Analytics",
      badge: "CORE DOMAIN",
      description: "Exploratory data analysis, statistical modeling, high-frequency temporal forecasting, dynamic volatility surfaces, and multi-channel time-series pipelines.",
      tools: ["Python", "Pandas", "NumPy", "PyTorch", "Scikit-Learn", "Ray Train", "SQL"]
    },
    {
      title: "Generative AI & LLM Systems",
      badge: "PRODUCTION READY",
      description: "Enterprise RAG architectures, multi-vector hybrid retrieval (BM25 + Dense), hallucination guardrails, fine-tuning, and prompt optimization.",
      tools: ["LangChain", "LlamaIndex", "OpenAI", "Qdrant", "Pinecone", "Cohere", "Hugging Face"]
    },
    {
      title: "Autonomous Agent Architectures",
      badge: "AGENTIC AI",
      description: "Multi-agent graph state machines, ReAct reasoning loops, isolated Docker execution sandboxes, and autonomous tool invocation consensus.",
      tools: ["LangGraph", "AutoGen", "FastAPI", "Docker", "PostgreSQL", "Python"]
    },
    {
      title: "Edge Computer Vision & Robotics",
      badge: "REAL-TIME",
      description: "TensorRT INT8 quantized YOLOv8 object detection, multi-camera ByteTrack spatial tracking, and sub-15ms industrial edge video processing.",
      tools: ["YOLOv8", "OpenCV", "TensorRT", "DeepStream", "NVIDIA Jetson", "C++"]
    },
    {
      title: "Graph Neural Networks & Engineering",
      badge: "DISTRIBUTED",
      description: "Heterogeneous graph Convolutional Networks (GCN) mapping 25M+ nodes and 180M+ dynamic relations for deep link prediction and fraud discovery.",
      tools: ["Neo4j", "PyTorch Geometric", "Apache Spark", "Kafka", "Three.js", "Python"]
    },
    {
      title: "Production MLOps & Deployment",
      badge: "INFRASTRUCTURE",
      description: "Distributed multi-GPU training clusters, Triton Inference Server bindings, bi-directional WebSockets streaming, and Dockerized microservices.",
      tools: ["Docker", "Kubernetes", "Triton", "FastAPI", "Ray", "Git", "GitHub Actions"]
    }
  ];

  const careerMilestones = [
    {
      year: "2024 — PRESENT",
      role: "Lead AI Architect",
      company: "Autonomous AI Labs",
      summary: "Architecting multi-agent reasoning graphs (LangGraph/AutoGen) and enterprise RAG systems serving sub-35ms vector queries across 5M+ technical documents."
    },
    {
      year: "2022 — 2024",
      role: "Senior Computer Vision Engineer",
      company: "EdgeVision Technologies",
      summary: "Built 120+ FPS TensorRT accelerated vision pipelines across NVIDIA Jetson Orin clusters processing 16+ simultaneous 4K industrial camera streams."
    },
    {
      year: "2020 — 2022",
      role: "Data Scientist & ML Researcher",
      company: "Neural Capital Research",
      summary: "Engineered deep temporal attention networks and automated risk backtesting algorithms processing high-frequency time-series datasets."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white pb-24 relative overflow-hidden">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-signature text-3xl sm:text-4xl text-[#08080A] hover:text-purple-600 transition-colors"
          >
            <span>Ashwini</span>
          </Link>

          {/* Navigation Bar Links */}
          <nav className="flex items-center gap-8 lg:gap-12 text-sm sm:text-base font-mono font-black tracking-widest text-slate-700">
            <Link href="/" className="hover:text-[#08080A] transition-colors py-1">
              HOME
            </Link>
            <Link href="/work" className="hover:text-[#08080A] transition-colors py-1">
              WORK
            </Link>
            <Link
              href="/about"
              className="text-purple-600 border-b-2 border-purple-600 py-1"
            >
              ABOUT
            </Link>
          </nav>

          {/* Right CTA Button */}
          <Link
            href="/#contact"
            className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-mono font-black tracking-wider text-white bg-[#08080A] hover:bg-purple-600 rounded-full transition-all duration-300 shadow-md hidden sm:block"
          >
            GET IN TOUCH
          </Link>
        </div>
      </header>

      {/* Main Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>BIOGRAPHY // SENIOR DATA SCIENTIST & AI ARCHITECT</span>
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] leading-tight">
              Architecting <span className="font-light italic text-purple-600">Autonomous AI</span> & Scalable Neural Systems
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-6 leading-relaxed max-w-3xl font-normal">
              I specialize in bridging the gap between mathematical machine learning research and high-performance production engineering. Over 5+ years, I have architected high-frequency time-series forecasters, real-time edge computer vision engines, and enterprise multi-agent RAG platforms.
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/80">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">EXPERIENCE</span>
                <span className="text-2xl font-black text-[#08080A] font-mono">5+ Years</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">MODELS DEPLOYED</span>
                <span className="text-2xl font-black text-purple-600 font-mono">12+ Systems</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">UPTIME RECORD</span>
                <span className="text-2xl font-black text-[#08080A] font-mono">99.9%</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">DAILY FEEDS</span>
                <span className="text-2xl font-black text-purple-600 font-mono">10M+ Events</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-4 bg-[#08080A] text-white border-2 border-purple-500/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest mb-3">
              ENGINEERING PHILOSOPHY
            </h3>
            <blockquote className="text-sm text-slate-200 font-serif italic leading-relaxed mb-6">
              &quot;AI models are only as valuable as their reliability in production. Rigorous mathematical foundations, low latency, and zero-hallucination guardrails define successful AI deployment.&quot;
            </blockquote>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono text-slate-300">Production-Grade Rigor</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono text-slate-300">Deterministic Tool Consensus</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono text-slate-300">Sub-100ms Inference Speed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Competencies Bento Matrix */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-14 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-slate-200/80">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase">
              TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#08080A] tracking-tight mt-1">
              Core Competencies & Stack
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
            Domain expertise spans the entire machine learning lifecycle—from exploratory statistical modeling to high-concurrency edge deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainSkills.map((domain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-50/90 border border-slate-200/90 hover:border-purple-500 hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3 py-1 rounded-full uppercase">
                    {domain.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-[#08080A] group-hover:text-purple-600 transition-colors mb-3">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {domain.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">KEY TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-1.5">
                  {domain.tools.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md font-medium shadow-2xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Milestones Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-16 relative z-10">
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase">
                TRACK RECORD
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#08080A] tracking-tight mt-1">
                Experience Timeline
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono font-bold text-purple-600 hover:text-[#08080A] underline mt-4 md:mt-0"
            >
              EXPLORE ALL 6 ARCHITECTURES →
            </Link>
          </div>

          <div className="space-y-8">
            {careerMilestones.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-10 pb-8 border-b border-slate-200/80 last:border-0 last:pb-0">
                <div className="md:w-56 flex-shrink-0">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3 py-1 rounded-full inline-block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-[#08080A]">{item.role}</h4>
                  <span className="text-xs font-mono text-slate-500 block">{item.company}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Email Copy Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 relative z-10">
        <div className="bg-[#08080A] text-white border-2 border-purple-500/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let&apos;s Collaborate on AI & Data
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Interested in building high-throughput machine learning models, custom RAG pipelines, or autonomous agent frameworks? Reach out directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-8 py-3.5 bg-white text-[#08080A] hover:bg-purple-400 hover:text-white rounded-full text-sm font-mono font-black tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL ADDRESS"}</span>
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#08080A]" />}
            </button>
            <Link
              href="/#contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-sm font-mono font-black tracking-wider transition-all duration-300"
            >
              VIEW CONTACT SECTION
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
