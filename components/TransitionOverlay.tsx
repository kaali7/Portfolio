"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface TransitionContextType {
  triggerTransition: (href: string) => void;
  isPending: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  triggerTransition: () => {},
  isPending: false,
});

export const usePageTransition = () => useContext(TransitionContext);

// SVG path definitions for 100x100 viewport
const bottomPath = "M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z";
const sweepUpPath = "M 0 0 Q 50 -25 100 0 L 100 100 L 0 100 Z";
const solidCoverPath = "M 0 0 Q 50 0 100 0 L 100 100 L 0 100 Z";
const retractUpPath = "M 0 0 Q 50 -25 100 0 L 100 0 L 0 0 Z";
const topExitPath = "M 0 -15 Q 50 -15 100 -15 L 100 -15 L 0 -15 Z";

export function TransitionOverlayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [stage, setStage] = useState<"idle" | "covering" | "covered" | "uncovering">("idle");
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  // Trigger transition to a target href
  const triggerTransition = (href: string) => {
    if (isAnimating || href === pathname) return;
    setPendingHref(href);
    setIsAnimating(true);
    setStage("covering");
  };

  // State machine for stages
  useEffect(() => {
    if (stage === "covering") {
      // 1. Paint sweeps UP to cover screen
      const timer = setTimeout(() => {
        setStage("covered");
        if (pendingHref) {
          router.push(pendingHref);
        }
      }, 480);
      return () => clearTimeout(timer);
    }

    if (stage === "covered") {
      // 2. Hold full purple screen briefly so page mounts
      const timer = setTimeout(() => {
        setStage("uncovering");
      }, 120);
      return () => clearTimeout(timer);
    }

    if (stage === "uncovering") {
      // 3. Paint retracts UP off top of screen
      const timer = setTimeout(() => {
        setStage("idle");
        setIsAnimating(false);
        setPendingHref(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [stage, pendingHref, router]);

  // Determine current path for Layer 1 (Accent wave)
  const getLayer1Path = () => {
    switch (stage) {
      case "covering":
        return sweepUpPath;
      case "covered":
        return solidCoverPath;
      case "uncovering":
        return topExitPath;
      default:
        return bottomPath;
    }
  };

  // Determine current path for Layer 2 (Main purple fill)
  const getLayer2Path = () => {
    switch (stage) {
      case "covering":
        return solidCoverPath;
      case "covered":
        return solidCoverPath;
      case "uncovering":
        return topExitPath;
      default:
        return bottomPath;
    }
  };

  return (
    <TransitionContext.Provider value={{ triggerTransition, isPending: isAnimating }}>
      {children}

      {/* SVG Paint Wipe Layer with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="fixed inset-0 z-[99999] pointer-events-auto overflow-hidden select-none"
          >
            {/* Layer 1: Neon Accent Purple Fluid Wave */}
            <svg
              className="absolute inset-0 w-full h-full text-purple-500/60 drop-shadow-xl"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                fill="currentColor"
                initial={{ d: bottomPath }}
                animate={{ d: getLayer1Path() }}
                transition={{
                  duration: 0.46,
                  ease: [0.76, 0, 0.24, 1],
                  delay: stage === "covering" ? 0 : 0.04,
                }}
              />
            </svg>

            {/* Layer 2: Deep Obsidian Purple Main Paint Fill */}
            <svg
              className="absolute inset-0 w-full h-full text-[#4c1d95]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="purplePaintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b0764" />
                  <stop offset="50%" stopColor="#581c87" />
                  <stop offset="100%" stopColor="#6b21a8" />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#purplePaintGrad)"
                initial={{ d: bottomPath }}
                animate={{ d: getLayer2Path() }}
                transition={{
                  duration: 0.44,
                  ease: [0.76, 0, 0.24, 1],
                  delay: stage === "covering" ? 0.03 : 0,
                }}
              />
            </svg>

            {/* Center Monogram Reveal */}
            {(stage === "covering" || stage === "covered") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.08, y: -15 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
              >
                <span className="text-purple-200/70 font-mono text-xs tracking-[0.4em] uppercase mb-2">
                  Ashwini Portfolio
                </span>
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white font-black text-2xl shadow-2xl">
                  A
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
