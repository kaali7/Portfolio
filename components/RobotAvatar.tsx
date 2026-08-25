"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

interface RobotAvatarProps {
  mouseX: any;
  mouseY: any;
  speechText?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function RobotAvatar({
  mouseX,
  mouseY,
  speechText = "HELLO!",
  className = "",
  size = "md",
}: RobotAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);

  // Liquid-smooth spring physics for realistic eye tracking
  const smoothPupilX = useSpring(pupilX, { stiffness: 140, damping: 20, mass: 0.6 });
  const smoothPupilY = useSpring(pupilY, { stiffness: 140, damping: 20, mass: 0.6 });

  // Head tilt rotation follow pupil X
  const headRotate = useTransform(smoothPupilX, [-6.5, 6.5], [-4, 4]);

  const [isBlinking, setIsBlinking] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isNear, setIsNear] = useState(false);

  // Typewriter effect state
  const [typedText, setTypedText] = useState("");
  const fullText = speechText;

  useEffect(() => {
    if (showTooltip || isNear) {
      let current = "";
      let i = 0;
      setTypedText("");
      const interval = setInterval(() => {
        if (i < fullText.length) {
          current += fullText[i];
          setTypedText(current);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 75);
      return () => clearInterval(interval);
    } else {
      setTypedText("");
    }
  }, [showTooltip, isNear, fullText]);

  useEffect(() => {
    // Natural eye blink loop (occasional quick double blink)
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        // 30% chance of double blink
        if (Math.random() < 0.3) {
          setTimeout(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 130);
          }, 110);
        }
      }, 130);
    }, Math.random() * 3000 + 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateEyePosition = () => {
      if (!containerRef.current) return;
      const mX = typeof mouseX?.get === "function" ? mouseX.get() : mouseX || 0;
      const mY = typeof mouseY?.get === "function" ? mouseY.get() : mouseY || 0;

      if (mX === -1000 || mY === -1000) {
        setIsNear(false);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height / 2;

      const dx = mX - robotCenterX;
      const dy = mY - robotCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Proximity detection: show speech bubble when mouse comes within 240px
      if (dist < 240) {
        setIsNear(true);
      } else {
        setIsNear(false);
      }

      const maxOffset = 6.5;

      if (dist > 0) {
        const moveX = (dx / dist) * Math.min(dist * 0.07, maxOffset);
        const moveY = (dy / dist) * Math.min(dist * 0.07, maxOffset);
        pupilX.set(moveX);
        pupilY.set(moveY);
      }
    };

    const unsubX = mouseX?.on ? mouseX.on("change", updateEyePosition) : undefined;
    const unsubY = mouseY?.on ? mouseY.on("change", updateEyePosition) : undefined;

    // Fallback trigger if not using motion values
    if (!unsubX) {
      updateEyePosition();
    }

    return () => {
      if (unsubX) unsubX();
      if (unsubY) unsubY();
    };
  }, [mouseX, mouseY, pupilX, pupilY]);

  const isActive = showTooltip || isNear;

  const sizeClasses = {
    sm: "w-16 h-16 sm:w-20 sm:h-20",
    md: "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    lg: "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32",
    xl: "w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44",
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.08 : 1,
        y: isActive ? [-5, 3, -5] : [-4, 4, -4],
      }}
      whileHover={{ scale: 1.1 }}
      transition={{
        opacity: { duration: 0.8, delay: 0.2 },
        scale: { type: "spring", stiffness: 220, damping: 18 },
        y: { duration: isActive ? 2.2 : 4.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`relative z-[60] group cursor-pointer ${className}`}
    >
      {/* Speech Bubble Tooltip */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.7 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 z-[70] pointer-events-none whitespace-nowrap"
          >
            <div className="relative bg-[#222226] border border-white/20 px-4 py-2 rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.9)] flex items-center justify-center min-w-[90px]">
              <span className="font-sans font-black text-white tracking-wider text-sm sm:text-base uppercase drop-shadow-md">
                {typedText}
                {typedText.length < fullText.length && (
                  <span className="inline-block w-1.5 h-4 ml-0.5 bg-white animate-pulse align-middle" />
                )}
              </span>
              {/* Speech Bubble Pointer Tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-[#222226]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outer Clean Light Circle Widget */}
      <motion.div
        style={{ rotate: headRotate }}
        className={`${sizeClasses[size]} rounded-full bg-white text-[#08080A] shadow-[0_12px_35px_rgba(0,0,0,0.4)] border-2 border-slate-200 flex items-center justify-center p-3.5 relative transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_16px_45px_rgba(168,85,247,0.35)]`}
      >
        {/* Futuristic Robot SVG Illustration */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
          {/* Top Antenna stem and bulb */}
          <line x1="50" y1="18" x2="50" y2="8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="7" r="4" className="fill-white stroke-2 stroke-slate-900 animate-pulse" />

          {/* Robot Ear Pods */}
          <rect x="14" y="42" width="8" height="16" rx="4" fill="currentColor" />
          <rect x="78" y="42" width="8" height="16" rx="4" fill="currentColor" />

          {/* Main Helmet Head Dome */}
          <rect x="20" y="20" width="60" height="58" rx="28" fill="currentColor" />

          {/* Visor Screen (Dark Inner Screen Area) */}
          <rect x="27" y="32" width="46" height="34" rx="17" className="fill-slate-950" />

          {/* Eye Socket Group with Mouse-Tracking PURE WHITE Eyes */}
          <motion.g
            style={{
              x: smoothPupilX,
              y: smoothPupilY,
              scaleY: isBlinking ? 0.08 : 1,
              transformOrigin: "50% 46px",
            }}
          >
            {/* Left Eye Pupil (PURE WHITE) */}
            <ellipse cx="40" cy="46" rx="5.5" ry="8.5" className="fill-white" />
            <circle cx="38.5" cy="43.5" r="1.8" className="fill-slate-900" />

            {/* Right Eye Pupil (PURE WHITE) */}
            <ellipse cx="60" cy="46" rx="5.5" ry="8.5" className="fill-white" />
            <circle cx="58.5" cy="43.5" r="1.8" className="fill-slate-900" />
          </motion.g>

          {/* Talking Animated Mouth (Smile Line) */}
          <motion.path
            d={isActive ? "M 43 56 Q 50 67 57 56" : "M 43 59 Q 50 63 57 59"}
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
