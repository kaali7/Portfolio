"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  Mail,
  Check,
  Copy,
  MapPin,
  Clock,
  Share2,
  ArrowUp,
  Sparkles,
  Home,
  User,
  Briefcase
} from "lucide-react";
import { TechIcon } from "./TechIcon";
import { TransitionLink } from "./TransitionLink";
import { siHuggingface, siKaggle } from "simple-icons";

// Interactive Circular AI Robot Avatar with Mouse-Tracking White Eyes & Live Typing Speech Balloon
function ContactRobotAvatar({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);
  
  const smoothPupilX = useSpring(pupilX, { stiffness: 140, damping: 20, mass: 0.6 });
  const smoothPupilY = useSpring(pupilY, { stiffness: 140, damping: 20, mass: 0.6 });
  
  const headRotate = useTransform(smoothPupilX, [-8, 8], [-4, 4]);

  const [isBlinking, setIsBlinking] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isNear, setIsNear] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [isTalking, setIsTalking] = useState(false);
  
  const fullText = "HEI! Let's build Autonomous AI Agents & RAG Systems together!";

  // Live Typing Animation Effect
  useEffect(() => {
    let current = "";
    let i = 0;
    let timeoutId: NodeJS.Timeout;
    
    setIsTalking(true);
    setTypedText("");

    const typeNextChar = () => {
      if (i < fullText.length) {
        current += fullText[i];
        setTypedText(current);
        i++;
        timeoutId = setTimeout(typeNextChar, 35);
      } else {
        setIsTalking(false);
        // Pause 5s on complete text, then loop
        timeoutId = setTimeout(() => {
          current = "";
          i = 0;
          setTypedText("");
          setIsTalking(true);
          typeNextChar();
        }, 5000);
      }
    };

    timeoutId = setTimeout(typeNextChar, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
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
      const mX = mouseX.get();
      const mY = mouseY.get();
      if (mX === -1000 || mY === -1000) {
        setIsNear(false);
        pupilX.set(0);
        pupilY.set(0);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height / 2;

      const dx = mX - robotCenterX;
      const dy = mY - robotCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 340) {
        setIsNear(true);
      } else {
        setIsNear(false);
      }

      const maxOffset = 7.5;

      if (dist > 0) {
        const moveX = (dx / dist) * Math.min(dist * 0.07, maxOffset);
        const moveY = (dy / dist) * Math.min(dist * 0.07, maxOffset);
        pupilX.set(moveX);
        pupilY.set(moveY);
      }
    };

    const unsubX = mouseX.on("change", updateEyePosition);
    const unsubY = mouseY.on("change", updateEyePosition);

    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, pupilX, pupilY]);

  const isActive = showTooltip || isNear;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative z-30 group cursor-pointer flex flex-col items-center justify-center w-full max-w-xs sm:max-w-md lg:max-w-lg my-auto gap-2.5 sm:gap-4 lg:gap-5"
    >
      {/* Speech Balloon Card - Fixed Height to prevent any layout shift during typing animation */}
      <div className="relative z-50 w-full text-left pointer-events-auto">
        <div className="bg-[#060608] border-2 border-purple-500/40 p-2.5 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex items-center justify-center h-[64px] sm:h-[76px] lg:h-[84px] overflow-hidden">
          <p className="text-[11px] sm:text-base lg:text-lg text-slate-100 font-sans font-bold leading-tight sm:leading-relaxed text-center tracking-tight sm:tracking-wide">
            {typedText}
            <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-5 ml-1 bg-purple-400 animate-pulse align-middle" />
          </p>

          {/* Speech Balloon Tail */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] sm:border-l-[9px] border-l-transparent border-r-[7px] sm:border-r-[9px] border-r-transparent border-t-[9px] sm:border-t-[11px] border-t-[#060608]" />
        </div>
      </div>

      {/* Circular AI Robot Avatar (Responsive Scaled for Mobile & Desktop) */}
      <motion.div 
        style={{ rotate: headRotate }}
        className="w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full bg-white text-[#08080A] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-3 sm:border-4 lg:border-[5px] border-slate-200 flex items-center justify-center p-2.5 sm:p-3.5 lg:p-4.5 relative transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_25px_80px_rgba(168,85,247,0.5)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
          <line x1="50" y1="18" x2="50" y2="8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="7" r="4" className="fill-white stroke-2 stroke-slate-900 animate-pulse" />

          <rect x="14" y="42" width="8" height="16" rx="4" fill="currentColor" />
          <rect x="78" y="42" width="8" height="16" rx="4" fill="currentColor" />

          <rect x="20" y="20" width="60" height="58" rx="28" fill="currentColor" />
          <rect x="27" y="32" width="46" height="34" rx="17" className="fill-slate-950" />

          <motion.g
            style={{
              x: smoothPupilX,
              y: smoothPupilY,
              scaleY: isBlinking ? 0.08 : 1,
              transformOrigin: "50% 46px"
            }}
          >
            <ellipse cx="40" cy="46" rx="5.5" ry="8.5" className="fill-white" />
            <circle cx="38.5" cy="43.5" r="1.8" className="fill-slate-900" />

            <ellipse cx="60" cy="46" rx="5.5" ry="8.5" className="fill-white" />
            <circle cx="58.5" cy="43.5" r="1.8" className="fill-slate-900" />
          </motion.g>

          <motion.path 
            d={isTalking || isActive ? "M 43 56 Q 50 67 57 56" : "M 43 59 Q 50 63 57 59"} 
            stroke="#ffffff" 
            strokeWidth="2.8" 
            strokeLinecap="round" 
            fill={isTalking || isActive ? "#ffffff" : "none"}
            animate={isTalking ? { scaleY: [1, 1.4, 0.75, 1.3, 1] } : { scaleY: 1 }}
            transition={{
              duration: 0.3,
              repeat: isTalking ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse position values for robot eye tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleSectionMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // 1-Click Email Copy Handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashwini@ai-architect.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Interactive Neural Data Particle Canvas Stream
  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const numNodes = Math.min(Math.floor((width * height) / 18000), 40);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      label?: string;
    }> = [];

    const labels = ["\u03B8", "\u03C3", "f(x)", "W", "b", "Loss", "RAG", "v\u2081", "\u2207"];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        label: i % 4 === 0 ? labels[i % labels.length] : undefined
      });
    }

    let localMouseX = -1000;
    let localMouseY = -1000;

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      localMouseX = e.clientX - rect.left;
      localMouseY = e.clientY - rect.top;
    };

    const handleCanvasMouseLeave = () => {
      localMouseX = -1000;
      localMouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleCanvasMouseMove);
    canvas.addEventListener("mouseleave", handleCanvasMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        nodeA.pulse += 0.02;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const mdx = localMouseX - nodeA.x;
        const mdy = localMouseY - nodeA.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const malpha = (1 - mdist / 140) * 0.45;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(localMouseX, localMouseY);
          ctx.strokeStyle = `rgba(192, 132, 252, ${malpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const currentRadius = nodeA.radius + Math.sin(nodeA.pulse) * 0.4;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = mdist < 140 ? "#c084fc" : "rgba(168, 85, 247, 0.65)";
        ctx.fill();

        if (nodeA.label) {
          ctx.font = "10px monospace";
          ctx.fillStyle = "rgba(226, 232, 240, 0.4)";
          ctx.fillText(nodeA.label, nodeA.x + 6, nodeA.y - 4);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleCanvasMouseMove);
        canvas.removeEventListener("mouseleave", handleCanvasMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  // Mouse spotlight tracking for interactive cards
  const [spotlightPos, setSpotlightPos] = useState<Record<string, { x: number; y: number; opacity: number }>>({});
  const [isLaunchingTop, setIsLaunchingTop] = useState(false);

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLaunchingTop(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      setIsLaunchingTop(false);
    }, 700);
  };

  const handleCardMouseMove = (cardId: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos((prev) => ({
      ...prev,
      [cardId]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        opacity: 1
      }
    }));
  };

  const handleCardMouseLeave = (cardId: string) => {
    setSpotlightPos((prev) => ({
      ...prev,
      [cardId]: { ...prev[cardId], opacity: 0 }
    }));
  };

  // Social media platform cards data (Borderless enlarged brand icons with hover rotation physics)
  const SOCIAL_PLATFORMS = [
    {
      name: "GitHub",
      handle: "@ashwini-prajapati",
      url: "https://github.com/ashwini-prajapati",
      color: "from-purple-500/15 to-purple-900/10",
      borderColor: "group-hover/tile:border-purple-400/60",
      iconColor: "text-purple-300",
      rotateAngle: -4,
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-purple-300">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      handle: "Ashwini Prajapati",
      url: "https://linkedin.com/in/ashwini-prajapati",
      color: "from-blue-500/15 to-indigo-900/10",
      borderColor: "group-hover/tile:border-blue-400/60",
      iconColor: "text-blue-400",
      rotateAngle: 4,
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-blue-400">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
        </svg>
      )
    },
    {
      name: "Hugging Face",
      handle: "@ashwini-prajapati",
      url: "https://huggingface.co/ashwini-prajapati",
      color: "from-amber-500/15 to-amber-900/10",
      borderColor: "group-hover/tile:border-amber-400/60",
      iconColor: "text-amber-300",
      rotateAngle: -3,
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-amber-300">
          <path d={siHuggingface.path} />
        </svg>
      )
    },
    {
      name: "Kaggle",
      handle: "@ashwiniprajapati",
      url: "https://kaggle.com/ashwiniprajapati",
      color: "from-cyan-500/15 to-blue-900/10",
      borderColor: "group-hover/tile:border-cyan-400/60",
      iconColor: "text-cyan-300",
      rotateAngle: 3,
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-cyan-300">
          <path d={siKaggle.path} />
        </svg>
      )
    },
    {
      name: "Twitter / X",
      handle: "@ashwini_ai",
      url: "https://twitter.com/ashwini_ai",
      color: "from-slate-500/15 to-slate-900/10",
      borderColor: "group-hover/tile:border-slate-400/60",
      iconColor: "text-slate-300",
      rotateAngle: -5,
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-slate-300">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="w-full h-auto lg:h-[100vh] lg:min-h-0 bg-[#060608] text-white flex flex-col justify-between px-4 sm:px-8 lg:px-20 xl:px-28 2xl:px-36 pt-4 sm:pt-7 lg:pt-10 pb-4 sm:pb-6 rounded-t-[2.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] shadow-[0_-30px_90px_rgba(0,0,0,0.85)] border-t border-purple-500/30 relative z-30 overflow-hidden"
    >
      {/* Background Neural Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-60 z-0"
      />

      {/* Top Ambient Glow Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-purple-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="w-full mx-auto relative z-10 lg:flex-1 flex flex-col lg:justify-between">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-0.5 sm:mt-2 mb-2 sm:mb-4 pb-2 border-b border-white/10 flex items-center justify-between"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-tight">
            Initiate <span className="font-black italic bg-gradient-to-r from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent">Data & AI</span> Collaboration
          </h2>
        </motion.div>

        {/* 2-Column Bento Wireframe Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 lg:gap-4 items-stretch lg:flex-1 my-1 sm:my-2">
          
          {/* LEFT COLUMN: Robot Mascot Character Card (Col 1-4) - Fixed Height on Mobile to prevent layout shift */}
          <div className="lg:col-span-4 flex flex-col h-[195px] sm:h-[240px] lg:h-full">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onMouseMove={(e) => handleCardMouseMove("robot-card", e)}
              onMouseLeave={() => handleCardMouseLeave("robot-card")}
              className="bg-[#0D0E14]/90 backdrop-blur-xl border border-white/15 hover:border-purple-500/50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 relative overflow-hidden h-full flex flex-col justify-center items-center text-center group transition-colors duration-200 shadow-xl hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)]"
            >
              {/* Mouse Spotlight Beam */}
              {spotlightPos["robot-card"] && (
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: spotlightPos["robot-card"].opacity,
                    background: `radial-gradient(400px circle at ${spotlightPos["robot-card"].x}px ${spotlightPos["robot-card"].y}px, rgba(168,85,247,0.18), transparent 80%)`
                  }}
                />
              )}

              {/* Talking AI Robot Mascot Character with Live Speech Balloon Centered */}
              <div className="my-auto relative z-10 flex flex-col items-center justify-center w-full">
                <ContactRobotAvatar mouseX={mouseX} mouseY={mouseY} />
              </div>

            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stacked Email to Contact (Top) & Social Media (Bottom) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-3 sm:gap-3.5 lg:gap-4 lg:h-full">
            
            {/* RIGHT TOP CARD: Email To Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onMouseMove={(e) => handleCardMouseMove("email-card", e)}
              onMouseLeave={() => handleCardMouseLeave("email-card")}
              className="bg-[#0D0E14]/90 backdrop-blur-xl border border-white/15 hover:border-purple-500/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 lg:p-6 relative overflow-hidden group transition-colors duration-200 shadow-xl hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)] lg:flex-1 flex flex-col lg:justify-between"
            >
              {/* Mouse Spotlight Beam */}
              {spotlightPos["email-card"] && (
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: spotlightPos["email-card"].opacity,
                    background: `radial-gradient(450px circle at ${spotlightPos["email-card"].x}px ${spotlightPos["email-card"].y}px, rgba(168,85,247,0.18), transparent 80%)`
                  }}
                />
              )}

              <h3 className="text-xs sm:text-sm lg:text-2xl font-bold font-mono text-white uppercase tracking-wider mb-2 sm:mb-2.5 relative z-10 group-hover:text-purple-200 transition-colors">
                Contact
              </h3>

              {/* 1-Click Email Copy Component (Responsive typography & touch button) */}
              <div className="bg-[#060608] border border-white/15 group-hover:border-purple-500/40 rounded-xl p-2.5 sm:p-4 lg:p-5 flex items-center justify-between gap-2 sm:gap-3 relative z-10 transition-colors my-1 lg:my-auto shadow-inner">
                <div className="flex items-center gap-2 sm:gap-3 pl-0.5 sm:pl-1 min-w-0">
                  <Mail className="w-4.5 h-4.5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-lg lg:text-2xl font-mono text-slate-100 font-bold truncate select-all tracking-tight">
                    ashwini@ai-architect.io
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.06, rotate: -3, y: -1 }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 450, damping: 17 }}
                  onClick={handleCopyEmail}
                  className="group/copybtn px-2.5 py-1.5 sm:px-5 sm:py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[10px] sm:text-sm font-mono font-bold transition-colors duration-150 shadow-md flex items-center gap-1 sm:gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span>COPIED!</span>
                      <Check className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-emerald-300 group-hover/copybtn:rotate-12 transition-transform duration-200" />
                    </>
                  ) : (
                    <>
                      <span>COPY</span>
                      <Copy className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 group-hover/copybtn:rotate-12 transition-transform duration-200" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Telemetry Row */}
              <div className="flex items-center justify-start text-[9.5px] sm:text-xs font-mono text-slate-400 relative z-10 pt-2 sm:pt-2.5 border-t border-white/10 mt-1 sm:mt-0">
                <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" /> San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" /> PST (UTC-8)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT BOTTOM CONTAINER: Social Media For Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.005 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onMouseMove={(e) => handleCardMouseMove("social-container", e)}
              onMouseLeave={() => handleCardMouseLeave("social-container")}
              className="bg-[#0D0E14]/90 backdrop-blur-xl border border-white/15 hover:border-purple-500/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 lg:p-6 relative overflow-hidden group transition-colors duration-200 shadow-xl lg:flex-1 flex flex-col lg:justify-center"
            >
              {/* Mouse Spotlight Beam */}
              {spotlightPos["social-container"] && (
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: spotlightPos["social-container"].opacity,
                    background: `radial-gradient(450px circle at ${spotlightPos["social-container"].x}px ${spotlightPos["social-container"].y}px, rgba(168,85,247,0.15), transparent 80%)`
                  }}
                />
              )}

              <h3 className="text-xs sm:text-sm lg:text-2xl font-bold font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 relative z-10 group-hover:text-purple-200 transition-colors">
                Social Media
              </h3>

              {/* 5 Social Media Bento Cards Grid: 1-Row Icon-Only on Mobile, Full Cards on Desktop */}
              <div className="grid grid-cols-5 gap-2 sm:gap-2.5 lg:gap-3.5 relative z-10 my-0 lg:my-auto">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={platform.name}
                    whileHover={{ scale: 1.05, y: -3, rotate: platform.rotateAngle }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 16 }}
                    className={`bg-[#060608] hover:bg-gradient-to-b ${platform.color} border border-white/10 ${platform.borderColor} rounded-xl p-2 sm:p-2.5 lg:p-4.5 flex flex-col items-center justify-center text-center gap-0 lg:gap-3 group/tile transition-all duration-200 shadow-md cursor-pointer relative overflow-hidden h-11 sm:h-12 lg:min-h-[150px] lg:h-auto`}
                  >
                    {/* Borderless Icon Container */}
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 flex items-center justify-center transition-transform duration-300 group-hover/tile:scale-110 group-hover/tile:rotate-12 flex-shrink-0">
                      {platform.svg}
                    </div>

                    {/* Centered Text Labels (Desktop Only) */}
                    <div className="w-full hidden lg:block">
                      <h4 className="text-xs sm:text-sm font-black text-white group-hover/tile:text-purple-200 transition-colors mb-0.5">
                        {platform.name}
                      </h4>
                      <p className="text-[9px] sm:text-[11px] font-mono text-slate-300 font-medium truncate">
                        {platform.handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Section Bottom Footer */}
      <div className="w-full mx-auto pt-3 mt-3 sm:mt-4 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-slate-400 relative z-10">
        {/* Row 1 on Mobile: Signature & Copyright inline */}
        <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-center sm:text-left flex-wrap">
          <span className="font-signature text-xl sm:text-2xl text-white font-normal drop-shadow-md flex-shrink-0">Ashwini</span>
          <span className="text-slate-400 text-[9.5px] sm:text-[11px]">© {new Date().getFullYear()} — Engineered for Data & Neural Systems</span>
        </div>

        {/* Row 2 on Mobile: Quick Navigation & Side-by-Side Back to Top Button */}
        <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3">
          {/* Sleek Sub-Footer Quick Navigation Bar */}
          <nav aria-label="Footer Quick Navigation" className="bg-[#0c0d14]/90 border border-white/15 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-1 relative z-10">
            <TransitionLink 
              href="/#hero" 
              className="group px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1 sm:gap-1.5"
            >
              <Home className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>HOME</span>
            </TransitionLink>

            <span className="w-1 h-1 rounded-full bg-white/20" />

            <TransitionLink 
              href="/about" 
              className="group px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1 sm:gap-1.5"
            >
              <User className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>ABOUT</span>
            </TransitionLink>

            <span className="w-1 h-1 rounded-full bg-white/20" />

            <TransitionLink 
              href="/work" 
              className="group px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1 sm:gap-1.5"
            >
              <Briefcase className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>WORK</span>
            </TransitionLink>
          </nav>

          {/* Back to Top Launch Button (Side-by-side with Nav on mobile) */}
          <motion.a 
            href="#top"
            onClick={handleScrollTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={isLaunchingTop ? { y: [-2, -25, 0], scale: [1, 1.2, 1] } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-400 text-white flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(168,85,247,0.5)] border-2 border-purple-300/50 relative z-20 group cursor-pointer overflow-hidden flex-shrink-0"
          >
            {/* Animated Purple Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />
            
            <motion.div
              animate={isLaunchingTop ? { y: [-2, -40, 40, 0], opacity: [1, 0, 0, 1] } : {}}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
              <span className="text-[6.5px] sm:text-[8px] font-mono font-black tracking-widest text-purple-100 uppercase -mt-0.5 hidden sm:block">TOP</span>
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
