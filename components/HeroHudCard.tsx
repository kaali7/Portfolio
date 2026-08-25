"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Brain, Sparkles, Cpu, Workflow, Activity } from "lucide-react";

export function HeroHudCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // Local mouse tracking motion values for 3D card tilt & spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring physics for 3D rotation
  const springConfig = { stiffness: 260, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt transforms (-8deg to +8deg)
  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

  // Dynamic radial spotlight position in percent
  const spotlightX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setActiveChip(null);
  };

  const chips = [
    { id: "dl", label: "Deep Learning", icon: Cpu, border: "hover:border-blue-400/40" },
    { id: "genai", label: "GenAI & LLMs", icon: Sparkles, border: "hover:border-purple-400/40" },
    { id: "pipelines", label: "Data Pipelines", icon: Workflow, border: "hover:border-emerald-400/40" },
  ];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-interactive-zone="true"
      initial={{ opacity: 0, y: -24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        perspective: 1000,
      }}
      className="absolute top-[15%] sm:top-[17%] lg:top-[19%] left-[3%] sm:left-[5%] lg:left-[6%] z-30 w-[290px] sm:w-[325px] lg:w-[350px] pointer-events-auto group hidden sm:block select-none"
    >
      {/* 3D Tilted Card Body */}
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-2xl p-[1px] overflow-hidden transition-shadow duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group-hover:shadow-[0_25px_65px_rgba(168,85,247,0.15)]"
      >
        {/* Animated Traveling Border Laser Beam */}
        <motion.div
          className="absolute -inset-[100%] pointer-events-none opacity-40 group-hover:opacity-90 transition-opacity duration-500"
          style={{
            background: "conic-gradient(from 0deg, transparent 0 320deg, rgba(192, 132, 252, 0.9) 345deg, rgba(236, 72, 153, 0.8) 360deg)",
          }}
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        {/* Outer Glass Container */}
        <div className="relative w-full bg-[#0B0C10]/90 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl border border-white/10 text-left overflow-hidden">
          
          {/* Subtle Cyber Grid Texture */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />

          {/* Interactive Mouse Spotlight Glow */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute -inset-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: useTransform(
                  [spotlightX, spotlightY],
                  ([x, y]) => `radial-gradient(circle 140px at ${x} ${y}, rgba(168, 85, 247, 0.18), transparent 70%)`
                ),
              }}
            />
          )}

          {/* Holographic Scanning Laser Line */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-purple-400/[0.08] to-transparent pointer-events-none"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            />
          )}

          {/* Tactical Corner Crosshair Marks */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/30" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/30" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/30" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/30" />

          {/* Top Meta Bar: Status Beacon, Waveform Spectrum & Telemetry ID */}
          <div className="relative z-10 flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              {/* Pulsing Emerald Live Status Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span className="text-[10px] font-mono font-semibold text-emerald-400/90 tracking-wider">
                SYS.NODE // ONLINE
              </span>

              {/* Animated Live Waveform Spectrum */}
              <div className="flex items-end gap-[2px] h-3 ml-1">
                {[0.35, 0.85, 0.55, 1.0, 0.65].map((height, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] bg-emerald-400/80 rounded-full"
                    animate={
                      shouldReduceMotion
                        ? { height: `${height * 100}%` }
                        : { height: ["20%", `${height * 100}%`, "25%"] }
                    }
                    transition={{
                      duration: 0.9 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.12,
                    }}
                  />
                ))}
              </div>
            </div>

            <span className="text-[10px] font-mono text-slate-400/70 tracking-widest uppercase">
              HUD // 01
            </span>
          </div>

          {/* Header Title with Animated Pulsing Icon */}
          <div className="relative z-10 flex items-center gap-2.5 mb-2">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative p-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]"
            >
              <Brain className="w-4 h-4 text-purple-300" />
              {/* Micro Glowing Dot Accent */}
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,1)]" />
            </motion.div>

            <span className="text-[13px] font-mono font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 uppercase">
              AI & DATA SCIENCE
            </span>
          </div>

          {/* Description Text */}
          <p className="relative z-10 text-[12px] font-normal text-slate-300 leading-relaxed mb-3.5">
            Engineering intelligent algorithms, deep learning pipelines, and generative AI systems to extract value from complex data.
          </p>

          {/* Tech Stack Chips Bar with Micro Interactive Physics */}
          <div className="relative z-10 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/[0.08]">
            {chips.map(({ id, label, icon: Icon, border }) => {
              const isHovered = activeChip === id;
              return (
                <motion.button
                  key={id}
                  type="button"
                  onMouseEnter={() => setActiveChip(id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`group/chip inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] hover:bg-purple-500/10 border border-white/10 ${border} rounded-lg text-[10px] font-mono text-slate-300 hover:text-white tracking-wider transition-colors duration-200 shadow-sm`}
                >
                  <Icon 
                    className={`w-3 h-3 text-purple-400/90 transition-transform duration-200 ${
                      isHovered ? "scale-125 text-purple-300" : "group-hover/chip:scale-110 group-hover/chip:text-purple-300"
                    }`} 
                  />
                  <span>{label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Micro Telemetry Diagnostics Stream (Bottom Edge) */}
          <div className="relative z-10 flex items-center justify-between mt-3 pt-2 border-t border-white/[0.05] text-[9px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <Activity className="w-2.5 h-2.5 text-emerald-400" />
              <span>LATENCY:</span>
              <motion.span 
                animate={{ opacity: [0.7, 1, 0.7] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="text-emerald-400 font-semibold"
              >
                12ms
              </motion.span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>INFERENCE:</span>
              <span className="text-purple-400 font-semibold">ACTIVE</span>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
