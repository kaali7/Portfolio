"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { 
  Zap, 
  CheckCircle2, 
  Clock,
  ArrowRight
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { experienceData } from "@/lib/experienceDetailData";

export function Experience() {
  const [activeExp, setActiveExp] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [wirePoints, setWirePoints] = useState<{ x1: number; y1: number; x2: number; y2: number; w: number; h: number } | null>(null);

  // Measure exact DOM anchor positions at the top corners of Card 0 and Card 1 for the connecting wire
  useEffect(() => {
    function updateWire() {
      if (!gridRef.current) return;
      const gr = gridRef.current.getBoundingClientRect();
      const el0 = cardRefs.current[0];
      const el1 = cardRefs.current[1];
      if (!el0 || !el1) return;

      const r0 = el0.getBoundingClientRect();
      const r1 = el1.getBoundingClientRect();

      // Card 0 connection point (deeper inside top right of Card 0)
      const x1 = r0.right - gr.left - 42;
      const y1 = r0.top - gr.top + 28;

      // Card 1 connection point (deeper inside top left of Card 1)
      const x2 = r1.left - gr.left + 42;
      const y2 = r1.top - gr.top + 28;

      setWirePoints({
        x1, y1, x2, y2,
        w: gr.width,
        h: gr.height
      });
    }

    // Trigger multiple measurements during Framer Motion spring transition (0 to 300ms)
    updateWire();
    const t1 = setTimeout(updateWire, 50);
    const t2 = setTimeout(updateWire, 150);
    const t3 = setTimeout(updateWire, 250);
    const t4 = setTimeout(updateWire, 350);

    const obs = new ResizeObserver(updateWire);
    if (gridRef.current) obs.observe(gridRef.current);
    window.addEventListener("resize", updateWire);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      obs.disconnect();
      window.removeEventListener("resize", updateWire);
    };
  }, [activeExp]);

  // Map the strict TS data to the UI structure required by the component
  const experiences = experienceData.map((exp, idx) => {
    return {
      id: exp.id || idx,
      role: exp.role,
      company: exp.company,
      companyUrl: exp.links.company,
      logo: exp.visual.companyLogo,
      period: exp.duration.display.split(" · ")[0] || exp.duration.display,
      location: exp.location.split(" · ")[0] + " · " + (exp.location.split(" · ")[1] || "Remote"),
      type: exp.type.toUpperCase(),
      status: exp.duration.end.toLowerCase() === "present" ? "CURRENT" as const : "PAST" as const,
      primaryImpact: exp.focus.length >= 2 ? `${exp.focus[0]} & ${exp.focus[1]}` : exp.focus[0] || "Impact",
      summary: exp.overview.shortDescription,
      achievements: exp.overview.responsibilities.slice(0, 3).map((r, i) => ({
        title: exp.work.contributions[i] || "Core Responsibility",
        detail: r,
        metric: exp.technical.skills[i] || "Skill"
      })),
      tags: exp.technical.technologies.slice(0, 6),
      highlights: [
        { label: "CORE FOCUS", val: exp.focus[0] || "Development" },
        { label: "STATUS", val: exp.duration.display.split(" · ")[0] },
        { label: "LOCATION", val: exp.location.split(" · ")[1] || "Remote" }
      ]
    };
  });

  return (
    <section 
      id="experience" 
      className="w-full min-h-full min-h-screen bg-white text-[#08080A] flex flex-col justify-start px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 pt-6 sm:pt-8 pb-12 sm:pb-16 rounded-t-[2.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] shadow-[0_-25px_80px_rgba(0,0,0,0.16)] border-t border-slate-200 relative z-30 overflow-y-auto no-scrollbar"
    >
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full mx-auto relative z-10">
        
        {/* Compact Clean Section Header */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-200 mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#08080A] leading-none">
            Work <span className="font-black italic text-purple-600">Experience</span> & Impact
          </h2>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500 font-bold bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            <Clock className="w-3 h-3 text-purple-600" />
            <span>DEC 2025 — PRESENT</span>
          </div>
        </div>

        {/* ULTRA-CLEAN HIGH-CONTRAST TIMELINE TRACK */}
        <div className="mb-6 sm:mb-8 bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border-2 border-purple-500/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Dedicated Text & Node Info Row */}
          <div className="relative z-10 flex items-center justify-between gap-3 mb-2.5">
            
            {experiences.map((exp, idx) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveExp(idx)}
                onMouseEnter={() => setActiveExp(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2.5 cursor-pointer transition-all duration-150 ${idx === 1 ? 'text-right' : 'text-left'} ${
                  activeExp === idx ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {idx === 0 && (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                    activeExp === idx
                      ? "bg-purple-600 border-white ring-2 ring-emerald-400/60 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                      : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${activeExp === idx ? "bg-emerald-400 animate-ping" : "bg-slate-400"}`} />
                  </div>
                )}
                <div>
                  <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    activeExp === idx ? (idx === 0 ? "text-emerald-400" : "text-purple-300") : "text-slate-400"
                  }`}>
                    {exp.period} // {exp.role}
                  </div>
                  <div className={`text-xs sm:text-sm font-black tracking-tight ${
                    activeExp === idx ? "text-white text-shadow-sm" : "text-slate-300 group-hover:text-purple-200"
                  }`}>
                    {exp.company}
                  </div>
                </div>
                {idx === 1 && (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                    activeExp === idx
                      ? "bg-purple-600 border-white ring-2 ring-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                      : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${activeExp === idx ? "bg-white" : "bg-slate-400"}`} />
                  </div>
                )}
              </motion.button>
            ))}

          </div>

          {/* Interactive Progress Track Line */}
          <div 
            className="relative h-2 bg-slate-800 rounded-full cursor-pointer overflow-hidden mt-0.5"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setActiveExp(clickX < rect.width / 2 ? 0 : 1);
            }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-400 via-purple-400 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              animate={{
                width: activeExp === 0 ? "50%" : "100%"
              }}
              transition={{ type: "spring", stiffness: 550, damping: 25, mass: 0.15 }}
            />
          </div>

        </div>

        {/* 2-COLUMN ROTATED WALL CARDS GRID WITH CONNECTING WIRE THREAD */}
        <div className="relative pt-2" ref={gridRef}>
          {/* Dynamic SVG Connecting Thread Wire between Experience Cards */}
          {wirePoints && wirePoints.w > 0 && (
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible"
              viewBox={`0 0 ${wirePoints.w} ${wirePoints.h}`}
            >
              <defs>
                <filter id="exp-wire-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="exp-wire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>

              {/* Gentle subtle arching Bezier path connecting Card 0 to Card 1 */}
              {(() => {
                const { x1, y1, x2, y2 } = wirePoints;
                const dx = Math.abs(x2 - x1);
                const arch = Math.min(45, Math.max(24, dx * 0.16));
                const cp1x = x1 + dx * 0.28;
                const cp1y = Math.min(y1, y2) - arch;
                const cp2x = x2 - dx * 0.28;
                const cp2y = Math.min(y1, y2) - arch;
                const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

                return (
                  <>
                    {/* Background Glow Stroke */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="url(#exp-wire-gradient)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      filter="url(#exp-wire-glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0, 0.75, 0.45, 0.75]
                      }}
                      transition={{
                        pathLength: { duration: 1.6, ease: [0.23, 1, 0.32, 1] },
                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />

                    {/* Crisp Core Inner Line */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.85 }}
                      transition={{
                        pathLength: { duration: 1.6, ease: [0.23, 1, 0.32, 1] }
                      }}
                    />

                    {/* Start Connection Node Dot (Card 0) */}
                    <motion.circle
                      cx={x1}
                      cy={y1}
                      r={2.5}
                      fill="#a855f7"
                      filter="url(#exp-wire-glow)"
                      initial={{ opacity: 0 }}
                      animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <circle cx={x1} cy={y1} r={1} fill="#ffffff" />

                    {/* End Connection Node Dot (Card 1) */}
                    <motion.circle
                      cx={x2}
                      cy={y2}
                      r={2.5}
                      fill="#d946ef"
                      filter="url(#exp-wire-glow)"
                      initial={{ opacity: 0 }}
                      animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    />
                    <circle cx={x2} cy={y2} r={1} fill="#ffffff" />
                  </>
                );
              })()}
            </svg>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-start">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;
              const defaultRotate = idx === 0 ? -1.5 : 1.5;

              return (
                <motion.div
                  key={idx}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onMouseEnter={() => setActiveExp(idx)}
                  onClick={() => setActiveExp(idx)}
                  initial={{ rotate: defaultRotate }}
                  animate={{ 
                    rotate: isSelected ? 0 : defaultRotate,
                    scale: isSelected ? 1.01 : 0.98,
                    y: isSelected ? -4 : 0,
                    zIndex: isSelected ? 30 : 10
                  }}
                  whileHover={{ rotate: 0, scale: 1.01, y: -4 }}
                  transition={{ type: "spring", stiffness: 550, damping: 25, mass: 0.15 }}
                  className={`group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 cursor-pointer border-2 transition-all duration-150 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? "bg-slate-900 text-white border-purple-500 shadow-[0_25px_60px_rgba(147,51,234,0.22)] ring-2 ring-purple-500/30"
                      : "bg-slate-50 text-[#08080A] border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-sm opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Accent Mesh Glow */}
                  <div className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-opacity duration-150 ${
                    isSelected ? "bg-purple-600/20 opacity-100" : "bg-purple-300/10 opacity-0 group-hover:opacity-100"
                  }`} />

                  {/* Top Role Header */}
                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        {exp.logo && (
                           <div className={`w-7 h-7 rounded-full overflow-hidden border-2 ${isSelected ? 'border-purple-500' : 'border-slate-300'}`}>
                             <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover bg-white" />
                           </div>
                        )}
                        <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          isSelected ? "bg-purple-600 text-white shadow-sm" : "bg-[#08080A] text-white"
                        }`}>
                          {exp.company}
                        </span>
                        {exp.status === "CURRENT" && (
                          <span className="text-[8.5px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            PRESENT
                          </span>
                        )}
                      </div>

                      {/* Focus Badge */}
                      <div className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs ${
                        isSelected ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}>
                        <Zap className="w-2.5 h-2.5" />
                        <span>{exp.primaryImpact}</span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className={`text-lg sm:text-xl font-black tracking-tight mb-1.5 transition-colors ${
                      isSelected ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                    }`}>
                      {exp.role}
                    </h3>

                    {/* Summary */}
                    <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {exp.summary}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {exp.highlights.map((h, hIdx) => (
                        <div 
                          key={hIdx}
                          className={`p-2 rounded-xl border text-center transition-colors ${
                            isSelected 
                              ? "bg-slate-800/80 border-slate-700" 
                              : "bg-white border-slate-200/90 group-hover:border-purple-200"
                          }`}
                        >
                          <div className="text-[8.5px] font-mono font-bold text-slate-400 tracking-tight truncate">
                            {h.label}
                          </div>
                          <div className={`text-xs font-black font-mono mt-0.5 ${
                            isSelected ? "text-purple-300" : "text-purple-700"
                          }`}>
                            {h.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* System Deliverables */}
                    <div className="space-y-1.5 mb-3">
                      <div className={`text-[9px] font-mono font-bold tracking-widest uppercase mb-0.5 ${
                        isSelected ? "text-purple-300" : "text-purple-900"
                      }`}>
                        DELIVERABLES & RESPONSIBILITIES
                      </div>
                      {exp.achievements.map((item, aIdx) => (
                        <div
                          key={aIdx}
                          className={`p-2 sm:p-2.5 rounded-xl border flex flex-col gap-0.5 text-[11px] transition-colors ${
                            isSelected
                              ? "bg-slate-800/60 border-slate-700/80"
                              : "bg-white border-slate-200/80 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 font-bold truncate">
                              <CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${
                                isSelected ? "text-purple-400" : "text-purple-600"
                              }`} />
                              <span className={`truncate ${isSelected ? "text-slate-100" : "text-slate-900"}`}>
                                {item.title}
                              </span>
                            </div>
                            <span className={`text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                              isSelected ? "bg-purple-950 text-purple-300 border border-purple-800" : "bg-purple-100 text-purple-700"
                            }`}>
                              {item.metric}
                            </span>
                          </div>
                          <p className={`text-[10px] leading-relaxed pl-4 ${
                            isSelected ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips & Action Button Footer */}
                  <div className="relative z-10 pt-2.5 border-t border-current/10 flex items-center justify-between flex-wrap gap-2 mt-1">
                    <div className="flex flex-wrap gap-1">
                      {exp.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-md border font-medium flex items-center gap-1 ${
                            isSelected 
                              ? "bg-slate-800 text-slate-200 border-slate-700" 
                              : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                          }`}
                        >
                          <TechIcon name={tag} className="w-2.5 h-2.5" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/experience/${exp.id}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-xs cursor-pointer group/link ${
                        isSelected
                          ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30"
                          : "bg-slate-900 hover:bg-purple-600 text-white"
                      }`}
                    >
                      <span>EXPLORE DOSSIER</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
