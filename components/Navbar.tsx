"use client";

import { useState } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  variant?: "dark" | "light";
  currentRoute?: "home" | "work" | "about";
}

export function Navbar({ variant = "light", currentRoute }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/", key: "home" },
    { label: "WORK", href: "/work", key: "work" },
    { label: "ABOUT", href: "/about", key: "about" },
  ];

  const isDark = variant === "dark";

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${
      isDark
        ? "bg-transparent"
        : "bg-white/85 backdrop-blur-xl border-b border-slate-200/80"
    }`}>
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 py-3 sm:py-3.5 flex justify-between items-center">
        
        {/* Brand Logo Signature */}
        <Link
          href="/"
          className={`font-signature text-2xl sm:text-3xl transition-colors ${
            isDark
              ? "text-white font-normal drop-shadow-md hover:text-purple-300"
              : "text-[#08080A] font-normal hover:text-purple-600"
          }`}
        >
          <span>Ashwini</span>
        </Link>

        {/* Desktop Navigation Bar Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-mono font-bold tracking-wider">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.key;

            if (isDark) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-white/90 hover:text-white"
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
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-slate-700 hover:text-[#08080A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className={`relative overflow-hidden px-4 sm:px-5 py-2 text-xs font-mono font-bold tracking-wider rounded-full transition-all duration-300 hidden sm:inline-flex items-center gap-1.5 group/btn ${
              isDark
                ? "text-[#08080A] bg-white border border-white/40 hover:bg-purple-600 hover:text-white hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 shadow-sm"
                : "text-white bg-[#08080A] hover:bg-purple-600 hover:shadow-[0_6px_20px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 shadow-sm"
            }`}
          >
            {/* Shimmer Effect overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl focus:outline-none ${
              isDark ? "text-white/90 hover:text-white" : "text-slate-800 hover:text-purple-600"
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
              className={`mt-2 text-center py-3 rounded-full text-xs font-mono font-black tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/mbtn ${
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
