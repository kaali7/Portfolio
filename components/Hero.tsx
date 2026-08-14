"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";
import { RobotAvatar } from "@/components/RobotAvatar";

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

  // Dynamic sharp radial gradient mask string for 100% crystal clear, sharp text reveal
  const maskStyle = useTransform(
    [smoothX, smoothY, smoothOpacity, smoothScale],
    ([x, y, op, scale]) => {
      const radius = 100 * Number(scale);
      return `radial-gradient(circle ${radius}px at ${x}px ${y}px, rgba(0,0,0,${op}) 0%, rgba(0,0,0,${op}) 98.5%, rgba(0,0,0,0) 100%)`;
    }
  );

  const lensTransform = useTransform(
    [smoothX, smoothY, smoothScale],
    ([x, y, scale]) => `translate3d(${Number(x) - 100}px, ${Number(y) - 100}px, 0) scale(${Number(scale)})`
  );
  // Mouse 3D Parallax Motion Transforms
  const parallaxPortraitX = useTransform(smoothX, (x) => (Number(x) - 720) * 0.018);
  const parallaxPortraitY = useTransform(smoothY, (y) => (Number(y) - 450) * 0.015);
  
  const parallaxTextX = useTransform(smoothX, (x) => (Number(x) - 720) * 0.028);
  const parallaxTextY = useTransform(smoothY, (y) => (Number(y) - 450) * 0.02);

  const parallaxNameX = useTransform(smoothX, (x) => (Number(x) - 720) * 0.022);
  const parallaxNameY = useTransform(smoothY, (y) => (Number(y) - 450) * 0.018);

  const parallaxCardX = useTransform(smoothX, (x) => (Number(x) - 720) * -0.02);
  const parallaxCardY = useTransform(smoothY, (y) => (Number(y) - 450) * -0.015);

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

      {/* 2. Interactive Spotlight Lens Layer (Crystal Clear Bright Text Reveal) */}
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
          className="object-cover opacity-100 filter brightness-220 contrast-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          priority
        />
      </motion.div>

      {/* 3. Subtle Glass Blur Optical Lens Container */}
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full border-0 border-transparent bg-transparent backdrop-blur-[1px] pointer-events-none z-0 hidden md:block"
        style={{
          transform: lensTransform,
          opacity: smoothOpacity,
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
            opacity: [0.25, 0.42, 0.25], 
            scale: [0.94, 1.08, 0.94] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] bg-purple-600/30 rounded-full blur-[120px] sm:blur-[160px]"
        />
      </div>

      {/* Clean Transparent Top Navigation Bar (No Border, Transparent Background) */}
      <header className="relative z-40 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-6 flex justify-between items-center bg-transparent">
        <div className="w-full bg-transparent border-0 border-transparent flex justify-between items-center shadow-none">
          {/* Brand Logo Signature */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center"
          >
            <span className="font-signature text-3xl sm:text-4xl text-white font-normal tracking-wide drop-shadow-md">Ashwini</span>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="hidden md:flex items-center gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg xl:text-xl font-mono font-black tracking-widest text-white/90"
          >
            {navLinks.map((link) => (
              <TransitionLink 
                key={link.label}
                href={link.href} 
                className="hover:text-white transition-colors duration-200 py-1"
              >
                <span>{link.label}</span>
              </TransitionLink>
            ))}
          </motion.nav>

          {/* Upgraded Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-mono font-black tracking-wider text-[#08080A] bg-white hover:bg-slate-100 rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(255,255,255,0.25)] flex items-center justify-center block"
              >
                <span>GET IN TOUCH</span>
              </motion.a>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-4 right-4 bg-[#08080A]/95 backdrop-blur-xl border border-white/15 rounded-2xl px-6 py-6 md:hidden flex flex-col gap-4 shadow-2xl z-50 mt-2"
            >
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-base font-black tracking-widest text-white/90 hover:text-purple-400 py-2 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                </TransitionLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Circular AI Robot Avatar (Mouse-Tracking Eyes) */}
      <div 
        data-interactive-zone="true"
        className="absolute top-[20%] sm:top-[22%] lg:top-[24%] right-[5%] sm:right-[8%] lg:right-[12%] z-30 pointer-events-auto"
      >
        <RobotAvatar mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* CENTER PORTRAIT CUTOUT IMAGE (3D Mouse Parallax Layer z-10) */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          style={{
            x: parallaxPortraitX,
            y: parallaxPortraitY
          }}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative w-[320px] h-[440px] sm:w-[480px] sm:h-[620px] md:w-[600px] md:h-[760px] lg:w-[780px] lg:h-[960px] xl:w-[880px] xl:h-[1050px] flex-shrink-0 -mb-1 sm:-mb-3"
        >
          <Image
            src="/me.png"
            alt="Ashwini Portrait"
            fill
            className="object-cover object-top filter brightness-105 contrast-105 drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]"
            priority
          />
          {/* Bottom Gradient Fade Mask */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-44 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Futuristic AI Glass HUD Card (Positioned in Upper-Left Chalkboard Space per Screenshot Green Box) */}
      <motion.div 
        style={{
          x: parallaxCardX,
          y: parallaxCardY
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -3 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[18%] sm:top-[20%] lg:top-[22%] left-[4%] sm:left-[6%] lg:left-[8%] z-30 w-[300px] sm:w-[340px] lg:w-[370px] pointer-events-auto group hidden sm:block"
      >
        {/* Futuristic Glass Container */}
        <div className="relative w-full bg-[#0B0C10]/85 backdrop-blur-2xl p-5 rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-left overflow-hidden transition-all duration-300 group-hover:border-white/25 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          
          {/* Top Border Neon Beam Accent */}
          <div className="absolute -top-[1px] inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent transition-all duration-500" />
          
          {/* HUD Bracket Accents */}
          <span className="absolute top-2.5 right-3 text-[10px] font-mono text-white/30 tracking-widest select-none">HUD // 01</span>
          
          {/* Header Badge */}
          <div className="flex items-center mb-2.5">
            <span className="text-xs font-mono font-bold text-purple-300 tracking-widest uppercase">
              AI & DATA SCIENCE
            </span>
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-sm font-normal text-slate-200 leading-relaxed mb-3">
            Engineering intelligent algorithms, deep learning pipelines, and generative AI systems to extract value from complex data.
          </p>

          {/* Tech Stack Chips Bar */}
          <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
            {["Deep Learning", "GenAI & LLMs", "Data Pipelines"].map((chip) => (
              <span 
                key={chip}
                className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-[10px] font-mono text-slate-300 tracking-wider transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Main Hero Body Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between pt-2 pb-0 sm:py-0 min-h-[calc(100dvh-120px)] pointer-events-none">

        {/* LEFT HUD CONTENT: Name Heading (Bottom Left) */}
        <motion.div 
          style={{
            x: parallaxNameX,
            y: parallaxNameY
          }}
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 flex flex-col items-start text-left w-full lg:w-auto mb-4 sm:mb-8 lg:mb-12 lg:self-end -ml-2 sm:-ml-4 lg:-ml-6 pointer-events-auto cursor-default"
        >
          <h2 className="flex flex-col items-start font-black text-white tracking-tighter uppercase leading-[0.84] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-slate-300/90 mb-1">
              I AM
            </span>
            <span className="text-6xl sm:text-8xl md:text-[11vw] lg:text-[13vw] xl:text-[14.5rem] font-black bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              {name}
            </span>
          </h2>
        </motion.div>

      </div>

    </section>
  );
};
