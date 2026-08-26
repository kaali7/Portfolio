"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";
import { RobotAvatar } from "@/components/RobotAvatar";
import { Navbar } from "@/components/Navbar";
import { HeroHudCard } from "@/components/HeroHudCard";
import { ArrowUpRight, Mail } from "lucide-react";

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

      {/* 2. Interactive Spotlight Layer (Soft Radial Blur Circle Reveal - Desktop) */}
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

      {/* 3. Soft Ambient Radial Blur Glow Circle (Desktop) */}
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

      {/* Interactive Circular AI Robot Avatar (Mouse-Tracking Eyes - Desktop) */}
      <div 
        data-interactive-zone="true"
        className="absolute top-[16%] sm:top-[18%] lg:top-[20%] right-[4%] sm:right-[6%] lg:right-[8%] z-30 pointer-events-auto hidden md:block"
      >
        <RobotAvatar mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* CENTER PORTRAIT CUTOUT IMAGE (Layer z-10) */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative w-[240px] h-[330px] xs:w-[280px] xs:h-[380px] sm:w-[380px] sm:h-[490px] md:w-[460px] md:h-[580px] lg:w-[540px] lg:h-[680px] xl:w-[620px] xl:h-[760px] 3xl:w-[700px] 3xl:h-[840px] flex-shrink-0 -mb-1 sm:-mb-2"
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

      {/* Optical Magnifying Lens Portrait Overlay (Magnified zoom & clarity under spotlight circle - Desktop) */}
      <motion.div 
        className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-12 hidden md:flex"
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      >
        <div className="relative w-[240px] h-[330px] xs:w-[280px] xs:h-[380px] sm:w-[380px] sm:h-[490px] md:w-[460px] md:h-[580px] lg:w-[540px] lg:h-[680px] xl:w-[620px] xl:h-[760px] 3xl:w-[700px] 3xl:h-[840px] flex-shrink-0 -mb-1 sm:-mb-2 scale-[1.05] origin-center">
          <Image
            src="/me.png"
            alt="Ashwini Portrait Magnified"
            fill
            className="object-cover object-top filter brightness-125 contrast-120 saturate-110 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            priority
          />
          {/* Bottom Gradient Fade Mask */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Futuristic AI Glass HUD Card (Interactive 3D Animated Telemetry Node - Desktop/Tablet) */}
      <HeroHudCard />

      {/* Main Hero Body Container - Desktop (hidden on mobile) */}
      <div className="relative z-20 w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 flex-1 hidden md:flex flex-col lg:flex-row items-center justify-between pt-2 pb-0 sm:py-0 min-h-[calc(100dvh-120px)] pointer-events-none">

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

      {/* Optical Lens Text Reveal Layer (Magnified & Chromatic Holographic Glow inside Spotlight Circle - Desktop) */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none hidden md:block"
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      >
        <div className="relative z-35 w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 flex-1 flex flex-col lg:flex-row items-center justify-between pt-2 pb-0 sm:py-0 min-h-[calc(100dvh-120px)] h-full">
          <div className="relative flex flex-col items-start text-left w-full lg:w-auto mb-3 sm:mb-6 lg:mb-8 lg:self-end -ml-1 sm:-ml-3 lg:-ml-4 scale-[1.04] origin-bottom-left">
            <h2 className="flex flex-col items-start font-black tracking-tighter uppercase leading-[0.86] select-none drop-shadow-[0_0_35px_rgba(192,132,252,0.9)]">
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-purple-300 mb-1">
                I AM
              </span>
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] xl:text-[8.5rem] font-black bg-gradient-to-r from-purple-200 via-white to-pink-300 bg-clip-text text-transparent filter drop-shadow-[0_0_40px_rgba(168,85,247,1)]">
                {name}
              </span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Bespoke Mobile Hero Experience (< 768px) */}
      <div className="relative z-25 w-full flex-1 flex flex-col justify-between px-4 xs:px-5 pt-1 pb-4 xs:pb-6 md:hidden pointer-events-auto">
        {/* Top Mobile Row: System Status Pill & Integrated Tap-to-Talk Robot Mascot */}
        <div className="flex items-center justify-between w-full z-30 pt-0.5 mb-2">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0C10]/85 backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
            </span>
            <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-wider">
              SYS.ONLINE // 12ms
            </span>
          </motion.div>

          {/* Tap-Interactive Compact Robot Avatar */}
          <div data-interactive-zone="true" className="relative z-40">
            <RobotAvatar 
              mouseX={mouseX} 
              mouseY={mouseY} 
              size="sm" 
              speechText="HELLO! 👋 TAP TO CHAT" 
              bubblePosition="bottom" 
            />
          </div>
        </div>

        {/* Middle-Upper Mobile Identity: Eyebrow, Title & Core Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="z-20 text-left mb-auto"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-purple-300 bg-purple-950/50 border border-purple-500/30 px-2.5 py-0.5 rounded-md inline-block mb-1.5 shadow-sm">
            AI & DATA SCIENTIST
          </span>
          <h1 className="text-[32px] xs:text-[40px] sm:text-[44px] font-black uppercase tracking-tight text-white leading-[0.88] drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] select-none">
            <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 mb-0.5">I AM</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="text-[11px] xs:text-[11.5px] text-slate-300 font-normal leading-relaxed mt-2 max-w-[240px] xs:max-w-[270px]">
            Architecting Autonomous AI Agents, Production LLM Pipelines & Deep Learning Systems.
          </p>
        </motion.div>

        {/* Bottom Mobile Action Dock & Telemetry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30 w-full flex flex-col gap-2.5 mt-auto pt-2"
        >
          {/* High-Contrast Mobile CTAs */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <TransitionLink
              href="/work"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs font-mono font-bold tracking-wider shadow-[0_8px_25px_rgba(168,85,247,0.45)] transition-all"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </TransitionLink>
            <TransitionLink
              href="/#contact"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#12131A]/90 hover:bg-white/10 active:scale-95 border border-white/20 text-white text-xs font-mono font-bold tracking-wider backdrop-blur-md transition-all shadow-md"
            >
              <span>GET IN TOUCH</span>
              <Mail className="w-3.5 h-3.5 text-purple-400" />
            </TransitionLink>
          </div>

          {/* Micro Tech Tags Row */}
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {["Deep Learning", "GenAI & RAG", "Autonomous Agents"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-slate-300 whitespace-nowrap shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

