"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, Terminal, Code2, Cpu } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function AboutPage() {
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
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="about" />

      {/* Editorial Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              <span>BIOGRAPHY // SENIOR DATA SCIENTIST & AI ARCHITECT</span>
            </motion.span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] leading-[1.08]">
              Architecting <span className="font-light italic text-purple-600">Autonomous AI</span> & Scalable Neural Systems
            </h1>

            <p className="text-slate-600 text-base sm:text-lg mt-6 leading-relaxed max-w-3xl font-normal">
              I specialize in bridging the gap between mathematical machine learning research and high-performance production engineering. Over 5+ years, I have architected high-frequency time-series forecasters, real-time edge computer vision engines, and enterprise multi-agent RAG platforms.
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200/80">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">EXPERIENCE</span>
                <span className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">5+ Years</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">MODELS DEPLOYED</span>
                <span className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">12+ Systems</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">UPTIME RECORD</span>
                <span className="text-2xl sm:text-3xl font-black text-[#08080A] font-mono">99.9%</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-purple-300 transition-colors">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">DAILY FEEDS</span>
                <span className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">10M+ Events</span>
              </div>
            </div>
          </motion.div>

          {/* Right Engineering Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[#08080A] text-white border-2 border-purple-500/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest block mb-4">
              ENGINEERING PHILOSOPHY
            </span>

            <blockquote className="text-sm sm:text-base text-slate-200 font-serif italic leading-relaxed mb-8">
              &quot;AI models are only as valuable as their reliability in production. Rigorous mathematical foundations, low latency, and zero-hallucination guardrails define successful AI deployment.&quot;
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Production-Grade Rigor</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Deterministic Tool Consensus</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Sub-100ms Inference Latency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Competencies Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-5 border-b border-slate-200/80 gap-4"
        >
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-purple-700 uppercase">
              TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#08080A] tracking-tight mt-1">
              Core Competencies & Stack
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            Domain expertise spans the entire machine learning lifecycle—from exploratory statistical modeling to high-concurrency edge deployments.
          </p>
        </motion.div>

        {/* Asymmetrical Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {domainSkills.map((domain, idx) => {
            const spanClass =
              idx === 0 || idx === 3
                ? "md:col-span-7 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 border-purple-200/90"
                : "md:col-span-5 bg-slate-50/90 border-slate-200/90";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`${spanClass} border hover:border-purple-500 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3.5 py-1 rounded-full uppercase">
                      {domain.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#08080A] group-hover:text-purple-600 transition-colors mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2.5">
                    KEY TECHNOLOGIES & TOOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tools.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-md font-medium shadow-2xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Career Milestones Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xs"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-slate-200/80 gap-4">
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
              className="text-xs font-mono font-bold text-purple-600 hover:text-[#08080A] underline"
            >
              EXPLORE ALL PRODUCTION ARCHITECTURES →
            </Link>
          </div>

          <div className="space-y-8">
            {careerMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-4 md:gap-10 pb-8 border-b border-slate-200/80 last:border-0 last:pb-0"
              >
                <div className="md:w-60 flex-shrink-0">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3.5 py-1 rounded-full inline-block mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-[#08080A]">{item.role}</h4>
                  <span className="text-xs font-mono text-slate-500 block mt-0.5">{item.company}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Contact Component Footer */}
      <Contact />
    </main>
  );
}
