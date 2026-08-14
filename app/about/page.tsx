"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <main className="w-full min-h-screen bg-[#08080A] text-white selection:bg-purple-500 selection:text-white pb-24">
      {/* Top Header Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 flex items-center justify-between border-b border-white/10 relative z-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-signature text-3xl text-white hover:text-purple-400 transition-colors"
        >
          <span>Ashwini</span>
        </Link>

        {/* Navigation Bar Links */}
        <nav className="flex items-center gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg font-mono font-black tracking-widest text-white/90">
          <Link href="/" className="hover:text-white transition-colors py-1">
            HOME
          </Link>
          <Link href="/work" className="hover:text-white transition-colors py-1">
            WORK
          </Link>
          <Link
            href="/about"
            className="text-purple-400 border-b-2 border-purple-400 py-1"
          >
            ABOUT
          </Link>
        </nav>

        {/* Right CTA Button */}
        <Link
          href="/#contact"
          className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-mono font-black tracking-wider text-[#08080A] bg-white hover:bg-slate-100 rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(255,255,255,0.2)] hidden sm:block"
        >
          GET IN TOUCH
        </Link>
      </header>

      {/* Main Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full inline-block mb-6">
              BIOGRAPHY // SENIOR DATA SCIENTIST & AI ARCHITECT
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Architecting <span className="font-light italic text-purple-400">Autonomous AI</span> & Scalable Neural Systems
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-6 leading-relaxed max-w-3xl font-normal">
              I specialize in bridging the gap between mathematical machine learning research and high-performance production engineering. Over 5+ years, I have architected high-frequency time-series forecasters, real-time edge computer vision engines, and enterprise multi-agent RAG platforms.
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">EXPERIENCE</span>
                <span className="text-2xl font-black text-white font-mono">5+ Years</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">MODELS DEPLOYED</span>
                <span className="text-2xl font-black text-purple-400 font-mono">12+ Systems</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">UPTIME RECORD</span>
                <span className="text-2xl font-black text-white font-mono">99.9%</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">DAILY FEEDS</span>
                <span className="text-2xl font-black text-purple-400 font-mono">10M+ Events</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-purple-950/60 to-slate-900 border-2 border-purple-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest mb-3">
              ENGINEERING PHILOSOPHY
            </h3>
            <blockquote className="text-sm text-slate-200 font-serif italic leading-relaxed mb-6">
              "AI models are only as valuable as their reliability in production. Rigorous mathematical foundations, low latency, and zero-hallucination guardrails define successful AI deployment."
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
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-14 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
              TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
              Core Competencies & Stack
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
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
              className="bg-slate-900/80 border border-white/10 hover:border-purple-500/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/20 border border-purple-500/40 px-3 py-1 rounded-full uppercase">
                    {domain.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                  {domain.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">KEY TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-1.5">
                  {domain.tools.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-slate-300 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-md font-medium">
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
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-16 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                TRACK RECORD
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
                Experience Timeline
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono font-bold text-purple-400 hover:text-white underline mt-4 md:mt-0"
            >
              EXPLORE ALL 6 ARCHITECTURES →
            </Link>
          </div>

          <div className="space-y-8">
            {careerMilestones.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-10 pb-8 border-b border-white/10 last:border-0 last:pb-0">
                <div className="md:w-56 flex-shrink-0">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full inline-block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white">{item.role}</h4>
                  <span className="text-xs font-mono text-slate-400 block">{item.company}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
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
        <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-[#08080A] border-2 border-purple-500/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let's Collaborate on AI & Data
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Interested in building high-throughput machine learning models, custom RAG pipelines, or autonomous agent frameworks? Reach out directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-8 py-3.5 bg-white text-[#08080A] hover:bg-purple-400 hover:text-white rounded-full text-sm font-mono font-black tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL ADDRESS"}</span>
              <span>{copied ? "✓" : "📋"}</span>
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
