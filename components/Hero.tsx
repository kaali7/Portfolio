"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";
import { RobotAvatar } from "@/components/RobotAvatar";
import { Navbar } from "@/components/Navbar";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const name = "ASHWINI";
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse tracking motion values for interactive optical lens reveal
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const opacityVal = useMotionValue(0);
  // Ultra-smooth spring physics for fluid expansion (No circle -> Small -> Big)
  const scaleVal = useMotionValue(0);
  const smoothScale = useSpring(scaleVal, { stiffness: 90, damping: 16, mass: 0.7 });
  const moveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const shouldReduceMotion = useReducedMotion();

  // Ultra-smooth spring physics for fluid cursor tracking & opacity
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothOpacity = useSpring(opacityVal, { stiffness: 110, damping: 16 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (!sectionRef.current) return;

    // Suppress lens circle animation when cursor is over Header Navbar or Robot Avatar area
    const isOverInteractive = (e.target as HTMLElement)?.closest("header, [data-interactive-zone='true']");
    if (isOverInteractive) {
      scaleVal.set(0);
      opacityVal.set(0);
      if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // Rule 2: On movement, animate from No Circle -> Small -> Big (1.0), maintain static big circle while moving
    opacityVal.set(1);
    scaleVal.set(1.0);

    // Rule 3: When movement stops, shrink from Big -> Small -> No Circle (0) after 260ms idle
    if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
    moveTimerRef.current = setTimeout(() => {
      scaleVal.set(0);
      opacityVal.set(0);
    }, 260);
  };

  const handleMouseEnter = () => {
    // Rule 1: Stationary mouse on enter shows no circle until movement occurs
    if (!shouldReduceMotion) {
      scaleVal.set(0);
      opacityVal.set(0);
    }
  };

  const handleMouseLeave = () => {
    // Rule 3: Exit to no circle
    scaleVal.set(0);
    opacityVal.set(0);
    if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
  };

  // Dynamic smooth radial blur mask for clean circular spotlight effect
  const maskStyle = useTransform(
    [smoothX, smoothY, smoothOpacity, smoothScale],
    ([x, y, op, scale]) => {
      const radius = 180 * Number(scale);
      return `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,${op}) 0%, rgba(0,0,0,${Number(op) * 0.92}) 30%, rgba(0,0,0,${Number(op) * 0.6}) 55%, rgba(0,0,0,${Number(op) * 0.25}) 78%, rgba(0,0,0,0) 100%)`;
    }
  );

  const lensTransform = useTransform(
    [smoothX, smoothY, smoothScale],
    ([x, y, scale]) => `translate3d(${Number(x) - 180}px, ${Number(y) - 180}px, 0) scale(${Number(scale)})`
  );
  // Parallax motion removed per user request

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#08080A] text-[#F3F4F6] select-none cursor-default"
    >
      
      {/* 1. Base Background Chalkboard Diagram (Faint Default State) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/bg.png"
          alt="Data Science Roadmap Background"
          fill
          className="object-cover opacity-[0.09] filter brightness-110 contrast-125"
          priority
        />
        {/* Radial Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08080A]/70 to-[#08080A]" />
      </div>

      {/* 2. Interactive Spotlight Layer (Soft Radial Blur Circle Reveal) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block"
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      >
        <Image
          src="/bg.png"
          alt="Data Science Roadmap Revealed"
          fill
          className="object-cover opacity-100 filter brightness-220 contrast-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.85)]"
          priority
        />
      </motion.div>

      {/* 3. Soft Ambient Radial Blur Glow Circle */}
      <motion.div
        className="absolute top-0 left-0 w-[360px] h-[360px] rounded-full pointer-events-none z-0 hidden md:block"
        style={{
          transform: lensTransform,
          opacity: smoothOpacity,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.04) 45%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Background Animated Data Streams */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        {[10, 25, 40, 55, 70, 85, 15, 30, 45, 60, 75, 90].map((left, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-24 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"
            initial={{ left: `${left}%`, top: -150, opacity: 0 }}
            animate={{ top: '100%', opacity: [0, 1, 0] }}
            transition={{ 
              duration: (i % 3 + 1) * 4 + 6, 
              repeat: Infinity, 
              delay: (i % 5) * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Ambient Breathing Purple Glow Behind Portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ 
            opacity: [0.22, 0.38, 0.22], 
            scale: [0.94, 1.06, 0.94] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[540px] lg:h-[540px] bg-purple-600/30 rounded-full blur-[100px] sm:blur-[140px]"
        />
      </div>

      {/* Clean Transparent Top Navigation Bar */}
      <Navbar variant="dark" currentRoute="home" />

      {/* Interactive Circular AI Robot Avatar (Mouse-Tracking Eyes) */}
      <div 
        data-interactive-zone="true"
        className="absolute top-[16%] sm:top-[18%] lg:top-[20%] right-[4%] sm:right-[6%] lg:right-[8%] z-30 pointer-events-auto"
      >
        <RobotAvatar mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* CENTER PORTRAIT CUTOUT IMAGE (Layer z-10) */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative w-[280px] h-[380px] sm:w-[380px] sm:h-[490px] md:w-[460px] md:h-[580px] lg:w-[540px] lg:h-[680px] xl:w-[620px] xl:h-[760px] flex-shrink-0 -mb-1 sm:-mb-2"
        >
          <Image
            src="/me.png"
            alt="Ashwini Portrait"
            fill
            className="object-cover object-top filter brightness-105 contrast-105 drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
            priority
          />
          {/* Bottom Gradient Fade Mask */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Futuristic AI Glass HUD Card (Positioned in Upper-Left Chalkboard Space) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -3 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[16%] sm:top-[18%] lg:top-[20%] left-[3%] sm:left-[5%] lg:left-[6%] z-30 w-[270px] sm:w-[300px] lg:w-[330px] pointer-events-auto group hidden sm:block"
      >
        {/* Futuristic Glass Container */}
        <div className="relative w-full bg-[#0B0C10]/85 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-left overflow-hidden transition-all duration-300 group-hover:border-white/25 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          
          {/* Top Border Neon Beam Accent */}
          <div className="absolute -top-[1px] inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent transition-all duration-500" />
          
          {/* HUD Bracket Accents */}
          <span className="absolute top-2.5 right-3 text-[10px] font-mono text-white/30 tracking-widest select-none">HUD // 01</span>
          
          {/* Header Badge */}
          <div className="flex items-center mb-2">
            <span className="text-[11px] font-mono font-bold text-purple-300 tracking-widest uppercase">
              AI & DATA SCIENCE
            </span>
          </div>

          {/* Description Text */}
          <p className="text-xs font-normal text-slate-200 leading-relaxed mb-3">
            Engineering intelligent algorithms, deep learning pipelines, and generative AI systems to extract value from complex data.
          </p>

          {/* Tech Stack Chips Bar */}
          <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
            {["Deep Learning", "GenAI & LLMs", "Data Pipelines"].map((chip) => (
              <span 
                key={chip}
                className="px-2 py-0.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-[10px] font-mono text-slate-300 tracking-wider transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Main Hero Body Container */}
      <div className="relative z-20 w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 flex-1 flex flex-col lg:flex-row items-center justify-between pt-2 pb-0 sm:py-0 min-h-[calc(100dvh-120px)] pointer-events-none">

        {/* LEFT HUD CONTENT: Name Heading (Bottom Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 flex flex-col items-start text-left w-full lg:w-auto mb-3 sm:mb-6 lg:mb-8 lg:self-end -ml-1 sm:-ml-3 lg:-ml-4 pointer-events-auto cursor-default"
        >
          <h2 className="flex flex-col items-start font-black text-white tracking-tighter uppercase leading-[0.86] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none">
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-slate-300/90 mb-1">
              I AM
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] xl:text-[8.5rem] font-black bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              {name}
            </span>
          </h2>
        </motion.div>

      </div>

    </section>
  );
};
