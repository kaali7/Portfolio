"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

export function Hero() {
  const name = "ASHWINI";

  // Mouse Parallax 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#08080A] text-[#F3F4F6]"
    >
      
      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[150px]"
        />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-30 px-6 lg:px-12 py-5 flex justify-between items-center text-sm font-medium tracking-wide border-b border-white/5 bg-[#08080A]/70 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-xs tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-white font-bold tracking-widest uppercase">ASHWINI</span>
          <span className="text-white/40">// DATA SCIENCE & AI</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-white/70"
        >
          <a href="#work" className="hover:text-purple-400 transition-colors">01. WORKS</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">02. ABOUT</a>
          <a href="#services" className="hover:text-purple-400 transition-colors">03. SERVICES</a>
          <a href="#research" className="hover:text-purple-400 transition-colors">04. RESEARCH</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="px-5 py-2 text-xs font-mono tracking-wider text-white bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 rounded-full transition-all duration-300 shadow-lg shadow-purple-900/30"
          >
            LET'S TALK
          </a>
        </motion.div>
      </nav>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center items-center my-auto">
        
        {/* Background Editorial Heading */}
        <div className="absolute top-[8%] md:top-[5%] w-full flex justify-center pointer-events-none z-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[14vw] font-light italic tracking-tight text-white/80 leading-none select-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hey, there
          </motion.h1>
        </div>

        {/* Floating AI Badges - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute left-8 top-[32%] flex-col gap-4 z-20"
        >
          <div className="group relative px-4 py-2 rounded-xl bg-white/5 border border-purple-500/30 backdrop-blur-xl font-mono text-[11px] text-purple-300 flex items-center gap-2.5 shadow-lg shadow-purple-950/40 hover:border-purple-400 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PyTorch / TensorFlow</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl font-mono text-[11px] text-white/80 shadow-lg">
            LLM Agents & RAG Architecture
          </div>
        </motion.div>

        {/* Floating AI Badges - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute right-8 top-[32%] flex-col items-end gap-4 z-20"
        >
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-purple-500/30 backdrop-blur-xl font-mono text-[11px] text-purple-300 shadow-lg shadow-purple-950/40">
            Predictive Analytics & Neural Nets
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl font-mono text-[11px] text-white/80 flex items-center gap-2.5 shadow-lg">
            <span>Computer Vision / NLP</span>
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          </div>
        </motion.div>

        {/* CENTERPIECE: Enriched Portrait with Interactive 3D Parallax & Cyber Framing */}
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mt-8 md:mt-12 z-10 cursor-pointer group"
        >
          
          {/* Cybernetic Rotating Dashed Rings behind portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] border border-dashed border-purple-500/30 rounded-full animate-spin-slow" />
            <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-dotted border-purple-400/20 rounded-full animate-spin-reverse-slow" />
          </div>

          {/* Frosted Glass Frame Box Container */}
          <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] md:w-[420px] md:h-[540px] lg:w-[460px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-purple-950/20 via-purple-900/10 to-black/60 border border-purple-500/30 backdrop-blur-md p-3 md:p-4 shadow-[0_0_70px_rgba(168,85,247,0.2)] overflow-hidden group-hover:border-purple-400/60 transition-colors duration-500">
            
            {/* Tech Bracket Markers (+ at corners) */}
            <span className="absolute top-3 left-3 text-purple-400/70 font-mono text-xs z-20">+</span>
            <span className="absolute top-3 right-3 text-purple-400/70 font-mono text-xs z-20">+</span>
            <span className="absolute bottom-3 left-3 text-purple-400/70 font-mono text-xs z-20">+</span>
            <span className="absolute bottom-3 right-3 text-purple-400/70 font-mono text-xs z-20">+</span>

            {/* Glowing Tech Label on Frame */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/60 border border-purple-500/30 font-mono text-[9px] text-purple-300 tracking-widest z-20">
              AI_NEURAL_NODE_01
            </div>

            {/* Main Portrait Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/me.png"
                alt="Ashwini Portrait"
                fill
                className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              {/* Bottom fade gradient mask */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-transparent pointer-events-none" />
            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Bar: Name, Tagline & High Contrast Text */}
      <div className="relative z-20 px-6 lg:px-12 py-6 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/5 bg-[#08080A]/80 backdrop-blur-md">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col"
        >
          <div className="font-mono text-[11px] text-purple-400 tracking-widest uppercase mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span>AI & DATA SCIENCE SPECIALIST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">{name}</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md text-xs md:text-sm font-normal text-white/80 leading-relaxed md:text-right"
        >
          Engineering intelligent algorithms, deep learning pipelines, and generative AI systems to extract value from complex data.
        </motion.p>

      </div>

    </section>
  );
}
