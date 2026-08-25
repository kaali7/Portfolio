"use client";

import { useState, useRef } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  variant?: "dark" | "light";
  currentRoute?: "home" | "work" | "about";
}

export function Navbar({ variant = "light", currentRoute }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tracking motion values for interactive navbar light effect
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const opacityVal = useMotionValue(0);

  // Ultra-smooth spring physics for fluid cursor tracking & light glow
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 20, mass: 0.6 });
  const smoothOpacity = useSpring(opacityVal, { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    opacityVal.set(1);
  };

  const handleMouseEnter = () => {
    if (!shouldReduceMotion) {
      opacityVal.set(1);
    }
  };

  const handleMouseLeave = () => {
    opacityVal.set(0);
  };

  const navLinks = [
    { label: "HOME", href: "/", key: "home" },
    { label: "WORK", href: "/work", key: "work" },
    { label: "ABOUT", href: "/about", key: "about" },
  ];

  const isDark = variant === "dark";

  // Dynamic light spotlight background
  const lightGlowBg = useTransform(
    [smoothX, smoothY, smoothOpacity],
    ([x, y, op]) => {
      if (isDark) {
        return `radial-gradient(circle 280px at ${x}px ${y}px, rgba(168, 85, 247, ${Number(op) * 0.22}) 0%, rgba(168, 85, 247, ${Number(op) * 0.06}) 45%, transparent 75%)`;
      }
      return `radial-gradient(circle 280px at ${x}px ${y}px, rgba(147, 51, 234, ${Number(op) * 0.15}) 0%, rgba(147, 51, 234, ${Number(op) * 0.03}) 45%, transparent 75%)`;
    }
  );

  return (
    <header 
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`sticky top-0 z-40 transition-colors duration-200 overflow-hidden border-b border-transparent ${
        isDark
          ? "bg-transparent backdrop-blur-md"
          : "bg-white/90 backdrop-blur-xl"
      }`}
    >
      {/* Interactive Cursor Light Spotlight Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          background: lightGlowBg,
        }}
      />

      {/* Main Navbar Bar (Spacious Layout: py-4 sm:py-5 lg:py-6) */}
      <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 py-4 sm:py-5 lg:py-6 flex justify-between items-center">
        
        {/* Brand Logo Signature (Enlarged text-3xl sm:text-4xl) */}
        <Link
          href="/"
          className={`font-signature text-3xl sm:text-4xl transition-all duration-300 hover:scale-105 ${
            isDark
              ? "text-white font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] hover:text-purple-300"
              : "text-[#08080A] font-normal hover:text-purple-600"
          }`}
        >
          <span>Ashwini</span>
        </Link>

        {/* Desktop Navigation Bar Links (Enlarged text-sm sm:text-base md:text-lg, clean purple color change only - no bubble or underline) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.key;

            if (isDark) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-purple-400 font-extrabold"
                      : "text-white/80 hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-purple-600 font-extrabold"
                    : "text-slate-700 hover:text-purple-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className={`relative overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-mono font-bold tracking-wider rounded-full transition-all duration-300 hidden sm:inline-flex items-center gap-2 group/btn shadow-md ${
              isDark
                ? "text-[#08080A] bg-white border border-white/40 hover:bg-purple-600 hover:text-white hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95"
                : "text-white bg-[#08080A] hover:bg-purple-600 hover:shadow-[0_8px_25px_rgba(147,51,234,0.4)] hover:scale-105 active:scale-95"
            }`}
          >
            {/* Shimmer Effect overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl focus:outline-none transition-colors ${
              isDark ? "text-white/90 hover:text-white hover:bg-white/10" : "text-slate-800 hover:text-purple-600 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`absolute top-full left-4 right-4 rounded-2xl px-6 py-6 md:hidden flex flex-col gap-4 shadow-2xl z-50 mt-2 border ${
              isDark
                ? "bg-[#08080A]/95 backdrop-blur-xl border-white/15 text-white"
                : "bg-white/95 backdrop-blur-xl border-slate-200 text-[#08080A]"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.key;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-lg font-black tracking-widest py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? isDark
                        ? "text-purple-400"
                        : "text-purple-600"
                      : isDark
                      ? "text-white/90 hover:text-purple-400"
                      : "text-slate-700 hover:text-purple-600"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`mt-2 text-center py-3.5 rounded-full text-xs font-mono font-black tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/mbtn ${
                isDark
                  ? "bg-white text-[#08080A] hover:bg-purple-600 hover:text-white"
                  : "bg-[#08080A] text-white hover:bg-purple-600"
              }`}
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/mbtn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
