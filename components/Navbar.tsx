"use client";

import { useState } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-6 flex justify-between items-center">
        
        {/* Brand Logo Signature */}
        <Link
          href="/"
          className={`font-signature text-3xl sm:text-4xl transition-colors ${
            isDark
              ? "text-white font-normal drop-shadow-md hover:text-purple-300"
              : "text-[#08080A] font-normal hover:text-purple-600"
          }`}
        >
          <span>Ashwini</span>
        </Link>

        {/* Desktop Navigation Bar Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg xl:text-xl font-mono font-black tracking-widest">
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
            className={`px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-mono font-black tracking-wider rounded-full transition-all duration-300 shadow-md hidden sm:block ${
              isDark
                ? "text-[#08080A] bg-white hover:bg-slate-100 shadow-[0_8px_25px_rgba(255,255,255,0.25)]"
                : "text-white bg-[#08080A] hover:bg-purple-600 shadow-md"
            }`}
          >
            GET IN TOUCH
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
              className={`mt-2 text-center py-3 rounded-full text-xs font-mono font-black tracking-wider transition-colors ${
                isDark
                  ? "bg-white text-[#08080A]"
                  : "bg-[#08080A] text-white"
              }`}
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
