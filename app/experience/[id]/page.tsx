"use client";

import { useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { experienceData } from "@/lib/experienceDetailData";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { TechIcon } from "@/components/TechIcon";
import { RobotAvatar } from "@/components/RobotAvatar";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
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
  ChevronRight,
  X,
  Download,
  Maximize2,
  Wrench,
  Target,
  Compass,
  Trophy
} from "lucide-react";

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

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

  // Resolve related production projects from projectsDetailData
  const relatedProjectsList = (exp.links?.relatedProjects || [])
    .map((pId) => projectsDetailData.find((p) => p.id === pId))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#060608] text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div className="bg-[#FDFDFE] w-full pb-8">
        {/* Shared Unified Navigation Bar */}
      <Navbar variant="light" currentRoute="about" />
      
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-slate-50/90 border-b border-slate-200/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-700 hover:text-purple-600 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 transition-all cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ABOUT & EXPERIENCE</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
              CAREER DOSSIER // 0{expIndex + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-10 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column (8 cols): Hero Details */}
          <div className="lg:col-span-8">
            {/* Header Badges & Company Identification */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5">
              {exp.visual?.companyLogo && (
                <div className="w-11 h-11 rounded-full border-2 border-purple-500/60 overflow-hidden bg-white shadow-md flex-shrink-0 p-0.5 group hover:border-purple-600 transition-colors">
                  <img src={exp.visual.companyLogo} alt={exp.company} className="w-full h-full object-cover rounded-full" />
                </div>
              )}
              <span className="text-xs font-mono font-bold text-white bg-[#08080A] px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                {exp.company}
              </span>
              <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100/80 border border-purple-300 px-3.5 py-1.5 rounded-full uppercase">
                {exp.type}
              </span>
              {exp.duration.end.toLowerCase() === "present" && (
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE ROLE
                </span>
              )}
            </motion.div>

            {/* Role Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#08080A] mb-4 leading-[1.08]"
            >
              {exp.role}
            </motion.h1>

            {/* Meta Bar: Duration, Location & Focus Pills */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8 pb-6 border-b border-slate-200/90">
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-slate-600">
                <div className="flex items-center gap-2 bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="font-bold text-slate-900">{exp.duration.display}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-slate-800">{exp.location}</span>
                </div>
              </div>

              {/* Focus Domains */}
              {exp.focus && exp.focus.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mr-1 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-purple-500" />
                    CORE FOCUS:
                  </span>
                  {exp.focus.map((fItem, fIdx) => (
                    <span key={fIdx} className="text-xs font-mono font-bold text-purple-900 bg-purple-50 border border-purple-200 px-3 py-1 rounded-lg">
                      {fItem}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Role Overview Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-3xl">
              {exp.overview.shortDescription}
            </motion.p>

            {/* Primary Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
              {exp.links?.company && (
                <a
                  href={exp.links.company}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#08080A] hover:bg-purple-600 text-white rounded-full text-xs font-mono font-bold tracking-wider transition-all shadow-md hover:shadow-purple-500/25 flex items-center gap-2 group cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span>VISIT COMPANY WEBSITE</span>
                </a>
              )}

              {(exp.links?.proof || exp.visual?.certificate) && (
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="px-6 py-3 bg-purple-100/90 hover:bg-purple-200/90 text-purple-950 border border-purple-300 rounded-full text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-purple-200"
                >
                  <Award className="w-4 h-4 text-purple-700" />
                  <span>VIEW VERIFIED CERTIFICATE</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column (4 cols): AI Robot Avatar Mascot */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col items-center lg:items-center justify-center py-4"
          >
            <RobotAvatar 
              mouseX={mouseX} 
              mouseY={mouseY} 
              speechText={`${exp.role.toUpperCase()}!`} 
              size="xl" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Grid (12 Columns) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Responsibilities, Projects, Impact, Linked Work (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Core Responsibilities & Deliverables */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-6 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <span>CORE RESPONSIBILITIES & DELIVERABLES</span>
              </h2>

              <ul className="space-y-4">
                {exp.overview.responsibilities.map((resp, rIdx) => (
                  <motion.li 
                    key={rIdx} 
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs hover:border-purple-300 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 flex-shrink-0 shadow-2xs" />
                    <div className="space-y-2 w-full">
                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                        {resp}
                      </p>
                      {exp.work.contributions[rIdx] && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-md">
                          <Target className="w-3 h-3 text-purple-600" />
                          <span>Milestone: {exp.work.contributions[rIdx]}</span>
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Featured Projects / Systems Built During Role */}
            {exp.work.projects && exp.work.projects.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#08080A] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-300 uppercase mb-6 flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span>FEATURED SYSTEMS & INITIATIVES BUILT</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.work.projects.map((p, pIdx) => (
                    <div key={pIdx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-400/40 transition-colors">
                      <div>
                        {p.role && (
                          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800/50 px-2.5 py-0.5 rounded-full uppercase block w-fit mb-2.5">
                            {p.role}
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg font-black text-white mb-2">{p.name}</h3>
                        {p.description && (
                          <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Measurable Business & Engineering Impact */}
            {exp.work.impact && exp.work.impact.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-purple-950/10 border border-purple-200/80 rounded-3xl p-6 sm:p-8"
              >
                <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-950 uppercase mb-5 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>MEASURABLE IMPACT & OUTCOMES</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {exp.work.impact.map((imp, iIdx) => (
                    <motion.div 
                      key={iIdx}
                      whileHover={{ scale: 1.01 }}
                      className="bg-white border border-purple-200/90 rounded-2xl p-4 shadow-2xs flex items-start gap-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-2xs" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{imp}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements Section */}
            {exp.overview.achievements && exp.overview.achievements.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 sm:p-8"
              >
                <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-amber-950 uppercase mb-4 flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span>KEY HONORS & ACHIEVEMENTS</span>
                </h2>

                <ul className="space-y-3">
                  {exp.overview.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="bg-white border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-3">
                      <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Linked Production Case Studies */}
            {relatedProjectsList.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl"
              >
                <h2 className="text-base sm:text-lg font-mono font-bold tracking-wider text-purple-300 uppercase mb-6 flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-purple-400" />
                  <span>LINKED PRODUCTION CASE STUDIES</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedProjectsList.map((rp) => (
                    <div key={rp.id} className="bg-white/5 border border-white/10 hover:border-purple-400/50 rounded-2xl p-5 flex flex-col justify-between transition-all group">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800/60 px-2.5 py-0.5 rounded-full uppercase">
                            {rp.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{rp.year}</span>
                        </div>
                        <h3 className="text-lg font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {rp.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4 line-clamp-2">
                          {rp.card?.shortDescription}
                        </p>
                      </div>

                      <Link
                        href={`/work/${rp.id}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 group-hover:text-purple-300 transition-all pt-2 border-t border-white/10"
                      >
                        <span>EXPLORE CASE STUDY</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Tech Stack, Skills, Concepts & Verified Proof (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Chips with Standardized TechIcon Component */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm"
            >
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-600" />
                <span>TECHNOLOGY STACK</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {exp.technical.technologies.map((tech, tIdx) => (
                  <motion.span 
                    key={tIdx} 
                    whileHover={{ scale: 1.04 }}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 bg-white border border-slate-200/90 px-3 py-1.5 rounded-xl font-medium shadow-2xs hover:border-purple-300 transition-all cursor-default"
                  >
                    <TechIcon name={tech} size={15} className="text-purple-600 flex-shrink-0" />
                    <span>{tech}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills & Competencies */}
            {exp.technical.skills && exp.technical.skills.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 shadow-sm"
              >
                <h3 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-purple-600" />
                  <span>SKILLS & COMPETENCIES</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {exp.technical.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx}
                      whileHover={{ scale: 1.04 }}
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-purple-900 bg-purple-50/90 border border-purple-200/90 px-3 py-1.5 rounded-xl shadow-2xs hover:border-purple-300 transition-all cursor-default"
                    >
                      <TechIcon name={skill} size={14} className="text-purple-600 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Architecture & Engineering Concepts */}
            {exp.technical.concepts && exp.technical.concepts.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800"
              >
                <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>ARCHITECTURE & CONCEPTS</span>
                </h3>

                <ul className="space-y-2.5">
                  {exp.technical.concepts.map((concept, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Verified Certificate Proof Card */}
            {exp.visual?.certificate && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-5 text-white shadow-xl overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    VERIFIED CERTIFICATE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">OFFICIAL PROOF</span>
                </div>
                
                <div 
                  onClick={() => setIsCertModalOpen(true)}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 cursor-pointer group/img"
                >
                  <img 
                    src={exp.visual.certificate} 
                    alt="Certificate Proof" 
                    className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover/img:scale-105" 
                  />
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                    <Maximize2 className="w-6 h-6 text-purple-400" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase">INSPECT FULL DOCUMENT</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="w-full mt-3 py-2.5 bg-white/10 hover:bg-purple-600 text-white rounded-xl text-xs font-mono font-bold tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>CLICK TO ENLARGE / INSPECT</span>
                </button>
              </motion.div>
            )}

          </div>

        </div>
      </section>

      {/* Footer Navigation Switcher Between Experience Roles */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 border-t border-slate-200/90 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <Link
            href={`/experience/${prevExp.id}`}
            className="group p-6 bg-slate-50/80 hover:bg-slate-900 hover:text-white border border-slate-200/90 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between shadow-2xs"
          >
            <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-3 block">
              ← PREVIOUS CAREER ROLE
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-black">{prevExp.role}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono mt-0.5">{prevExp.company}</p>
              </div>
              <ChevronRight className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:-translate-x-1" />
            </div>
          </Link>

          <Link
            href={`/experience/${nextExp.id}`}
            className="group p-6 bg-slate-50/80 hover:bg-slate-900 hover:text-white border border-slate-200/90 hover:border-slate-800 rounded-3xl transition-all cursor-pointer flex flex-col justify-between text-right shadow-2xs"
          >
            <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-purple-400 mb-3 block">
              NEXT CAREER ROLE →
            </span>
            <div className="flex items-center justify-between flex-row-reverse">
              <div>
                <h4 className="text-base sm:text-lg font-black">{nextExp.role}</h4>
                <p className="text-xs text-slate-500 group-hover:text-slate-300 font-mono mt-0.5">{nextExp.company}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

        </div>
      </section>
      </div>

      {/* Full Resolution Certificate Modal Lightbox */}
      <AnimatePresence>
        {isCertModalOpen && exp.visual?.certificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCertModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <div>
                    <h3 className="text-sm sm:text-base font-mono font-bold text-white uppercase">
                      OFFICIAL EXPERIENCE CERTIFICATE
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">{exp.company} — {exp.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={exp.visual.certificate}
                    target="_blank"
                    download
                    rel="noreferrer"
                    className="p-2 bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                    title="Download Certificate"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsCertModalOpen(false)}
                    className="p-2 bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image View */}
              <div className="p-4 sm:p-6 overflow-auto flex-1 flex items-center justify-center bg-slate-950/50">
                <img
                  src={exp.visual.certificate}
                  alt={`${exp.company} Certificate`}
                  className="max-h-[75vh] w-auto object-contain rounded-xl border border-white/10 shadow-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950/80 text-center">
                <p className="text-xs font-mono text-slate-400">
                  Verified document issued for {exp.role} role at {exp.company}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Contact Section Footer */}
      <Contact />
    </main>
  );
}
