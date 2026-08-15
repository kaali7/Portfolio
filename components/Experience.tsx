"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { 
  Zap, 
  CheckCircle2, 
  Clock
} from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import { experienceData } from "@/lib/experienceDetailData";

export function Experience() {
  const [activeExp, setActiveExp] = useState<number>(0);

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
      className="w-full min-h-[100dvh] bg-white text-[#08080A] flex flex-col justify-start px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 rounded-t-[2.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] shadow-[0_-25px_80px_rgba(0,0,0,0.16)] border-t border-slate-200 relative z-30 overflow-y-auto no-scrollbar"
    >
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Compact Clean Section Header */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#08080A] leading-none">
            Work <span className="font-black italic text-purple-600">Experience</span> & Impact
          </h2>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 font-bold bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-purple-600" />
            <span>DEC 2025 — PRESENT</span>
          </div>
        </div>

        {/* ULTRA-CLEAN HIGH-CONTRAST TIMELINE TRACK */}
        <div className="mb-10 bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border-2 border-purple-500/40 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Dedicated Text & Node Info Row */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-3">
            
            {experiences.map((exp, idx) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveExp(idx)}
                onMouseEnter={() => setActiveExp(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-3 cursor-pointer transition-all duration-150 ${idx === 1 ? 'text-right' : 'text-left'} ${
                  activeExp === idx ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {idx === 0 && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                    activeExp === idx
                      ? "bg-purple-600 border-white ring-4 ring-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.8)]"
                      : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${activeExp === idx ? "bg-emerald-400 animate-ping" : "bg-slate-400"}`} />
                  </div>
                )}
                <div>
                  <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    activeExp === idx ? (idx === 0 ? "text-emerald-400" : "text-purple-300") : "text-slate-400"
                  }`}>
                    {exp.period} // {exp.role}
                  </div>
                  <div className={`text-sm sm:text-base font-black tracking-tight ${
                    activeExp === idx ? "text-white text-shadow-sm" : "text-slate-300 group-hover:text-purple-200"
                  }`}>
                    {exp.company}
                  </div>
                </div>
                {idx === 1 && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-150 shadow-md ${
                    activeExp === idx
                      ? "bg-purple-600 border-white ring-4 ring-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                      : "bg-slate-800 border-slate-600 group-hover:border-purple-400"
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${activeExp === idx ? "bg-white" : "bg-slate-400"}`} />
                  </div>
                )}
              </motion.button>
            ))}

          </div>

          {/* Interactive Progress Track Line */}
          <div 
            className="relative h-2.5 bg-slate-800 rounded-full cursor-pointer overflow-hidden mt-1"
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

        {/* 2-COLUMN ROTATED WALL CARDS GRID */}
        <div className="relative pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;
              const defaultRotate = idx === 0 ? -2 : 2;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setActiveExp(idx)}
                  onClick={() => setActiveExp(idx)}
                  initial={{ rotate: defaultRotate }}
                  animate={{ 
                    rotate: isSelected ? 0 : defaultRotate,
                    scale: isSelected ? 1.02 : 0.98,
                    y: isSelected ? -6 : 0,
                    zIndex: isSelected ? 30 : 10
                  }}
                  whileHover={{ rotate: 0, scale: 1.02, y: -6 }}
                  transition={{ type: "spring", stiffness: 550, damping: 25, mass: 0.15 }}
                  className={`group relative rounded-3xl p-5 sm:p-7 cursor-pointer border-2 transition-all duration-150 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? "bg-slate-900 text-white border-purple-500 shadow-[0_30px_70px_rgba(147,51,234,0.25)] ring-4 ring-purple-500/30"
                      : "bg-slate-50 text-[#08080A] border-slate-200/90 hover:border-purple-300 hover:bg-white shadow-md opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Accent Mesh Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-150 ${
                    isSelected ? "bg-purple-600/20 opacity-100" : "bg-purple-300/10 opacity-0 group-hover:opacity-100"
                  }`} />

                  {/* Top Role Header */}
                  <div className="relative z-10">
                    {/* Header Row: Company Badge on Left, Focus Badge Moved to Top Right */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        {exp.logo && (
                           <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${isSelected ? 'border-purple-500' : 'border-slate-300'}`}>
                             <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover bg-white" />
                           </div>
                        )}
                        <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          isSelected ? "bg-purple-600 text-white shadow-md" : "bg-[#08080A] text-white"
                        }`}>
                          {exp.company}
                        </span>
                        {exp.status === "CURRENT" && (
                          <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            PRESENT
                          </span>
                        )}
                      </div>

                      {/* Focus Badge Moved to Top Right */}
                      <div className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs ${
                        isSelected ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}>
                        <Zap className="w-3 h-3" />
                        <span>{exp.primaryImpact}</span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 transition-colors ${
                      isSelected ? "text-white" : "text-[#08080A] group-hover:text-purple-700"
                    }`}>
                      {exp.role}
                    </h3>

                    {/* Summary */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {exp.summary}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {exp.highlights.map((h, hIdx) => (
                        <div 
                          key={hIdx}
                          className={`p-2.5 rounded-xl border text-center transition-colors ${
                            isSelected 
                              ? "bg-slate-800/80 border-slate-700" 
                              : "bg-white border-slate-200/90 group-hover:border-purple-200"
                          }`}
                        >
                          <div className="text-[9px] font-mono font-bold text-slate-400 tracking-tight truncate">
                            {h.label}
                          </div>
                          <div className={`text-xs sm:text-sm font-black font-mono mt-0.5 ${
                            isSelected ? "text-purple-300" : "text-purple-700"
                          }`}>
                            {h.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* System Deliverables */}
                    <div className="space-y-2 mb-4">
                      <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                        isSelected ? "text-purple-300" : "text-purple-900"
                      }`}>
                        DELIVERABLES & RESPONSIBILITIES
                      </div>
                      {exp.achievements.map((item, aIdx) => (
                        <div
                          key={aIdx}
                          className={`p-3 rounded-xl border flex flex-col gap-1 text-xs transition-colors ${
                            isSelected
                              ? "bg-slate-800/60 border-slate-700/80"
                              : "bg-white border-slate-200/80 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 font-bold truncate">
                              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                                isSelected ? "text-purple-400" : "text-purple-600"
                              }`} />
                              <span className={`truncate ${isSelected ? "text-slate-100" : "text-slate-900"}`}>
                                {item.title}
                              </span>
                            </div>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                              isSelected ? "bg-purple-950 text-purple-300 border border-purple-800" : "bg-purple-100 text-purple-700"
                            }`}>
                              {item.metric}
                            </span>
                          </div>
                          <p className={`text-[11px] leading-relaxed pl-5 ${
                            isSelected ? "text-slate-300" : "text-slate-600"
                          }`}>
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips & "More Detail" Action Button Footer */}
                  <div className="relative z-10 pt-3.5 border-t border-current/10 flex items-center justify-between flex-wrap gap-3 mt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md border font-medium flex items-center gap-1.5 ${
                            isSelected 
                              ? "bg-slate-800 text-slate-200 border-slate-700" 
                              : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                          }`}
                        >
                          <TechIcon name={tag} className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* New "More Detail" CTA Button Linked directly to /experience/[id] */}
                    <Link
                      href={`/experience/${exp.id}`}
                      className={`text-[11px] font-mono font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-md cursor-pointer ${
                        isSelected 
                          ? "bg-purple-600 hover:bg-purple-500 text-white" 
                          : "bg-[#08080A] hover:bg-purple-700 text-white"
                      }`}
                    >
                      <span>MORE DETAIL</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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
