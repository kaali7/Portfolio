"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Home,
  Compass,
  User,
  Search,
  Terminal,
  Brain,
  Sparkles,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";

// Design Read:
// Reading this as: 404 error page for Ashwini's personal Data Science & AI Engineering portfolio,
// with a high-contrast dark editorial / AI research lab language, leaning toward Framer Motion
// spring physics + interactive loss function matrix + high-contrast obsidian aesthetics.

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  // Mouse tracking spotlight physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [glitchText, setGlitchText] = useState("404");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Glitch effect on initial mount or hover
  const triggerGlitch = () => {
    const chars = "40401#@$%&!~?X_NULL_ERR";
    let iterations = 0;
    const interval = setInterval(() => {
      setGlitchText(
        "404"
          .split("")
          .map((_, i) => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      );
      iterations++;
      if (iterations > 6) {
        clearInterval(interval);
        setGlitchText("404");
      }
    }, 60);
  };

  useEffect(() => {
    triggerGlitch();
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full bg-[#08080A] text-[#F3F4F6] flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-12 py-8 selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Background Interactive Tech Grid & Spotlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Dynamic Cursor Spotlight Beam */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(168, 85, 247, 0.25), transparent 70%)`,
          }}
        />
      )}

      {/* Ambient Pulsing Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* TOP HEADER / LOGO BAR */}
      <header className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-lg font-black tracking-tight text-white transition-opacity hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-mono tracking-wider text-sm">ASHWINI // AI LAB</span>
        </Link>

        {/* HUD System Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>SYS_ERR :: 404_NOT_FOUND</span>
        </div>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="relative z-20 w-full max-w-5xl mx-auto my-auto py-12 flex flex-col items-center text-center">
        {/* Top Eyebrow Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md"
        >
          <AlertTriangle className="w-4 h-4 text-purple-400" />
          <span>OUT OF MANIFOLD BOUNDS</span>
        </motion.div>

        {/* Huge Glitch 404 Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          onMouseEnter={triggerGlitch}
          className="relative cursor-pointer select-none group mb-4"
        >
          <h1 className="text-[20vw] sm:text-[14vw] md:text-[11vw] font-black tracking-tighter leading-none bg-gradient-to-b from-white via-slate-200 to-purple-400/40 bg-clip-text text-transparent drop-shadow-2xl">
            {glitchText}
          </h1>

          {/* Underline HUD Beam */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:via-purple-400 transition-all duration-300" />
        </motion.div>

        {/* Editorial Headline & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mb-4"
        >
          Loss Function Unconverged.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed mb-10"
        >
          The coordinates standard deviation exceeded <code className="font-mono text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-800/40">3.0σ</code>. The requested route could not be mapped to any known data manifold.
        </motion.p>

        {/* Interactive AI Mascot Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-12 p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#0B0C10]/90 backdrop-blur-xl shadow-2xl flex items-center gap-4 max-w-md text-left"
        >
          {/* Avatar Icon */}
          <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-300">
            <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 tracking-wider">AI ASSISTANT // BOT</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              &quot;Don&apos;t worry! Let&apos;s reroute your trajectory back to safety.&quot;
            </p>
          </div>
        </motion.div>

        {/* CTA ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {/* Primary CTA: Solid White Button */}
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#08080A] font-black text-sm uppercase tracking-wider transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Safety</span>
          </Link>

          {/* Secondary CTAs */}
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:border-purple-400/50 hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4 text-purple-400" />
            <span>Explore Work</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:border-purple-400/50 hover:scale-105 active:scale-95"
          >
            <User className="w-4 h-4 text-purple-400" />
            <span>About Ashwini</span>
          </Link>
        </motion.div>
      </main>

      {/* FOOTER METRICS BAR */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>HTTP_STATUS: 404</span>
          </span>
          <span className="text-white/20">•</span>
          <span>LATENCY: 0ms</span>
          <span className="text-white/20">•</span>
          <span>MODEL: DEEP_SEEK_R1</span>
        </div>

        <div className="text-slate-500">
          Ashwini Personal Lab &copy; {new Date().getFullYear()} — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
