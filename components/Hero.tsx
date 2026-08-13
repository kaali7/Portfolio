"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const name = "ASHWINI";

  const navLinks = [
    { label: "01. WORKS", href: "#work" },
    { label: "02. ABOUT", href: "#about" },
    { label: "03. SERVICES", href: "#services" },
    { label: "04. RESEARCH", href: "#research" },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#08080A] text-[#F3F4F6] select-none">
      
      {/* Background Chalkboard Diagram (bg.png) */}
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

      {/* Ambient Purple Glow Behind Portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] bg-purple-600/30 rounded-full blur-[120px] sm:blur-[160px]"
        />
      </div>

      {/* Top Navigation */}
      <header className="relative z-40 px-4 sm:px-6 lg:px-12 py-6 flex justify-between items-center text-sm font-medium tracking-wide bg-transparent backdrop-blur-sm">
        {/* Brand Logo Signature */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center"
        >
          <span className="font-signature text-4xl sm:text-5xl text-white font-normal tracking-wide drop-shadow-md">Ashwini</span>
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-white/70"
        >
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="hover:text-purple-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="px-4 sm:px-5 py-2 text-xs font-mono tracking-wider text-white bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 rounded-full transition-all duration-300 shadow-lg shadow-purple-900/20 active:scale-95 block"
            >
              LET&apos;S TALK
            </a>
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

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-[#08080A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 md:hidden flex flex-col gap-4 shadow-2xl z-50"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-widest text-white/80 hover:text-purple-400 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Massive Editorial Serif Heading BEHIND Portrait (z-0) */}
      <div className="absolute top-[14%] sm:top-[16%] lg:top-[18%] inset-x-0 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex justify-between items-center pointer-events-none z-0">
        {/* DATA on Left side (shifted left so all letters are visible) */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl sm:text-8xl md:text-[12vw] lg:text-[13.5vw] font-serif italic tracking-tight text-white/80 leading-none select-none drop-shadow-2xl uppercase -ml-6 sm:-ml-12 lg:-ml-18 xl:-ml-24"
        >
          DATA
        </motion.h1>

        {/* AI on Right side */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl sm:text-8xl md:text-[12vw] lg:text-[13.5vw] font-serif italic tracking-tight text-white/80 leading-none select-none drop-shadow-2xl uppercase mr-[5vw] sm:mr-[8vw] lg:mr-[10vw]"
        >
          AI
        </motion.h1>
      </div>

      {/* CENTER PORTRAIT CUTOUT IMAGE (100% Viewport-Centered z-10) */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
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

      {/* Main Hero Body Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between pt-2 pb-0 sm:py-0 min-h-[calc(100dvh-120px)] pointer-events-none">

        {/* LEFT HUD CONTENT: Name Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-30 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs sm:max-w-md lg:max-w-lg w-full pt-4 lg:pt-0 mb-4 lg:mb-16 lg:self-end pointer-events-auto"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight uppercase leading-[0.9] drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] select-none">
            I AM <br />
            <span className="text-white">
              {name}
            </span>
          </h2>
        </motion.div>

        {/* RIGHT HUD CONTENT: Sleek Glass Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-30 flex flex-col items-center lg:items-end w-full sm:w-[350px] lg:w-[390px] flex-shrink-0 pb-6 lg:pb-0 lg:mb-16 lg:self-end pointer-events-auto"
        >
          {/* Glass Description Box */}
          <div className="w-full text-sm sm:text-base font-normal text-white/90 leading-relaxed bg-black/75 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-left">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-mono text-purple-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>AI & DATA SCIENCE</span>
            </div>
            Engineering intelligent algorithms, deep learning pipelines, and generative AI systems to extract value from complex data.
          </div>
        </motion.div>

      </div>

      {/* Bottom Status Bar */}
      <footer className="relative z-30 px-4 sm:px-6 lg:px-12 py-3.5 w-full flex justify-between items-center text-[10px] font-mono text-white/40 border-t border-white/5 bg-[#08080A]/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <div>[01 // 05]</div>
      </footer>

    </section>
  );
}
