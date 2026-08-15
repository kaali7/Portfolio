"use client";

import { TransitionLink as Link } from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/experienceDetailData";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MapPin, 
  Briefcase, 
  ExternalLink, 
  Award,
  Layers,
  Code2,
  ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  // Find experience item by string ID or numeric index
  const expIndex = experienceData.findIndex(
    (e) => e.id === params.id || e.company.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(params.id)
  );

  if (expIndex === -1) {
    notFound();
  }

  const exp = experienceData[expIndex];
  const prevExp = experienceData[expIndex === 0 ? experienceData.length - 1 : expIndex - 1];
  const nextExp = experienceData[expIndex === experienceData.length - 1 ? 0 : expIndex + 1];

  // Helper for simple tech icon slug
  const getTechIconSlug = (tag: string): string => {
    const lower = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (lower.includes("python")) return "python";
    if (lower.includes("fastapi")) return "fastapi";
    if (lower.includes("next")) return "nextdotjs";
    if (lower.includes("react")) return "react";
    if (lower.includes("typescript") || lower === "ts") return "typescript";
    if (lower.includes("pytorch")) return "pytorch";
    if (lower.includes("docker")) return "docker";
    if (lower.includes("tailwind")) return "tailwindcss";
    if (lower.includes("postgres")) return "postgresql";
    if (lower.includes("sqlite")) return "sqlite";
    if (lower.includes("gemini")) return "googlegemini";
    if (lower.includes("groq")) return "groq";
    if (lower.includes("vite")) return "vite";
    if (lower.includes("latex")) return "latex";
    if (lower.includes("node")) return "nodedotjs";
    if (lower.includes("javascript") || lower === "js") return "javascript";
    return "";
  };

  return (
    <main className="w-full min-h-screen bg-white text-[#08080A] selection:bg-purple-600 selection:text-white pb-24 relative overflow-x-hidden">
      {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="about" />
      
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-slate-50/90 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/#experience" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-700 hover:text-purple-600 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO EXPERIENCE</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 border border-purple-300 px-3.5 py-1 rounded-full uppercase">
              CAREER CASE STUDY // 0{expIndex + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-10 relative z-10">
        <div className="max-w-4xl">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {exp.visual?.companyLogo && (
              <div className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden bg-white shadow-xs">
                <img src={exp.visual.companyLogo} alt={exp.company} className="w-full h-full object-cover" />
              </div>
            )}
            <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-3.5 py-1.5 rounded-full uppercase shadow-2xs">
              {exp.company}
            </span>
            <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100 border border-purple-300 px-3.5 py-1.5 rounded-full uppercase">
              {exp.type}
            </span>
            {exp.duration.end.toLowerCase() === "present" && (
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE ROLE
              </span>
            )}
          </div>

          {/* Role Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] mb-4 leading-tight"
          >
            {exp.role}
          </motion.h1>

          {/* Meta Bar: Duration & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-600 mb-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="font-bold text-slate-900">{exp.duration.display}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Role Overview Description */}
          <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed mb-8">
            {exp.overview.shortDescription}
          </p>

          {/* Action Buttons: Company Website & Certificate Proof */}
          <div className="flex flex-wrap items-center gap-4">
            {exp.links?.company && (
              <a
                href={exp.links.company}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#08080A] hover:bg-purple-600 text-white rounded-full text-xs font-mono font-bold tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>VISIT COMPANY WEBSITE</span>
              </a>
            )}
            {exp.links?.proof && (
              <a
                href={exp.links.proof}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300 rounded-full text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-purple-600" />
                <span>VIEW VERIFIED PROOF / CERTIFICATE</span>
              </a>
            )}
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Responsibilities & Key Projects (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Core Responsibilities & Achievements */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg sm:text-xl font-mono font-bold tracking-wider text-purple-900 uppercase mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <span>CORE RESPONSIBILITIES & DELIVERABLES</span>
              </h2>

              <ul className="space-y-4">
                {exp.overview.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                        {resp}
                      </p>
                      {exp.work.contributions[rIdx] && (
                        <span className="inline-block text-[11px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-md mt-1">
                          Key Milestone: {exp.work.contributions[rIdx]}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Projects Built During Role */}
            {exp.work.projects && exp.work.projects.length > 0 && (
              <div className="bg-[#08080A] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <h2 className="text-lg sm:text-xl font-mono font-bold tracking-wider text-purple-300 uppercase mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span>FEATURED SYSTEMS & PROJECTS BUILT</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.work.projects.map((p, pIdx) => (
                    <div key={pIdx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-400/40 transition-colors">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800/50 px-2.5 py-0.5 rounded-full uppercase block w-fit mb-2">
                          {p.role || "Lead Contributor"}
                        </span>
                        <h3 className="text-lg font-black text-white mb-2">{p.name}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Measurable Business & Engineering Impact */}
            {exp.work.impact && exp.work.impact.length > 0 && (
              <div className="bg-purple-950/20 border border-purple-200/80 rounded-3xl p-6 sm:p-8">
                <h2 className="text-lg sm:text-xl font-mono font-bold tracking-wider text-purple-950 uppercase mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>MEASURABLE IMPACT & OUTCOMES</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.work.impact.map((imp, iIdx) => (
                    <div key={iIdx} className="bg-white border border-purple-200 rounded-2xl p-4 shadow-2xs flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{imp}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Tech Stack, Concepts, & Proof Media (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Chips with Vector Logos */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-600" />
                <span>TECHNOLOGY STACK</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {exp.technical.technologies.map((tech, tIdx) => {
                  const slug = getTechIconSlug(tech);
                  return (
                    <span key={tIdx} className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-medium shadow-2xs">
                      {slug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${slug}`} 
                          alt={tech} 
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <Code2 className="w-4 h-4 text-purple-600" />
                      )}
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Architecture & Engineering Concepts */}
            {exp.technical.concepts && exp.technical.concepts.length > 0 && (
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>ARCHITECTURE & CONCEPTS</span>
                </h3>

                <ul className="space-y-2">
                  {exp.technical.concepts.map((concept, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Verified Certificate Proof Card */}
            {exp.visual?.certificate && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 text-white shadow-xl overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    VERIFIED CERTIFICATE
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <img src={exp.visual.certificate} alt="Certificate" className="w-full h-auto object-cover" />
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Footer Navigation Switcher Between Experience Entries */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 border-t border-slate-200 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <Link
            href={`/experience/${prevExp.id}`}
            className="group p-6 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-2 block">
              ← PREVIOUS ROLE
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-black">{prevExp.role}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono">{prevExp.company}</p>
              </div>
              <ChevronRight className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:-translate-x-1" />
            </div>
          </Link>

          <Link
            href={`/experience/${nextExp.id}`}
            className="group p-6 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between text-right"
          >
            <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-2 block">
              NEXT ROLE →
            </span>
            <div className="flex items-center justify-between flex-row-reverse">
              <div>
                <h4 className="text-lg font-black">{nextExp.role}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono">{nextExp.company}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}
