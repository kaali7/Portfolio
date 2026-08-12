"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const name = "ASHWINI";

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#08080A] text-[#F3F4F6]">
      
      {/* Background Chalkboard Diagram (bg.png) with Light Opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/bg.png"
          alt="Data Science Roadmap Background"
          fill
          className="object-cover opacity-20 filter brightness-110 contrast-125"
          priority
        />
        {/* Dark Vignette Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08080A]/60 to-[#08080A]" />
      </div>

      {/* Subtle Purple Glow behind image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"
        />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-30 px-6 lg:px-12 py-5 flex justify-between items-center text-sm font-medium tracking-wide border-b border-white/10 bg-[#08080A]/70 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-xs tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-white font-bold tracking-widest uppercase">ASHWINI</span>
          <span className="text-purple-300/60">// DATA SCIENCE & AI</span>
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
            className="px-5 py-2 text-xs font-mono tracking-wider text-white bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 rounded-full transition-all duration-300 shadow-lg shadow-purple-900/20"
          >
            LET'S TALK
          </a>
        </motion.div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center items-center my-auto">
        
        {/* Editorial Heading Behind Portrait */}
        <div className="absolute top-[8%] md:top-[4%] w-full flex justify-center pointer-events-none z-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[13vw] font-light italic tracking-tight text-white/90 leading-none select-none drop-shadow-2xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hey, there
          </motion.h1>
        </div>

        {/* Floating Data Science Badges (Left & Right) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute left-8 top-[32%] flex-col gap-3 z-20"
        >
          <div className="px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[11px] text-purple-300 flex items-center gap-2 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            PyTorch / TensorFlow
          </div>
          <div className="px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[11px] text-white/80 shadow-xl">
            LLM Agents & RAG Architecture
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex absolute right-8 top-[32%] flex-col items-end gap-3 z-20"
        >
          <div className="px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[11px] text-purple-300 shadow-xl">
            Predictive Analytics & Neural Nets
          </div>
          <div className="px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[11px] text-white/80 flex items-center gap-2 shadow-xl">
            Computer Vision / NLP
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          </div>
        </motion.div>

        {/* LARGER Centered Image with Gradient Fade at Bottom */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-80 h-[400px] md:w-[480px] md:h-[580px] lg:w-[540px] lg:h-[650px] z-10 mt-8 md:mt-12"
        >
          <Image
            src="/me.png"
            alt="Ashwini Portrait"
            fill
            className="object-cover object-top filter brightness-105 contrast-105"
            priority
          />
          {/* Bottom fade mask to blend portrait smoothly into the dark background */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent pointer-events-none" />
        </motion.div>

      </div>

      {/* Bottom Bar / Name & Headline */}
      <div className="relative z-20 px-6 lg:px-12 py-6 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/10 bg-[#08080A]/40 backdrop-blur-sm">
        
        {/* Bright White High Contrast Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col"
        >
          <div className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-1 flex items-center gap-2">
            <span>AI & DATA SCIENCE SPECIALIST</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">{name}</span>
          </h2>
        </motion.div>

        {/* Specialized Description */}
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
