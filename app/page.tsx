"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger inside the useEffect to ensure it only runs on the client
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Pin the Hero section so the Projects section scrolls over it like a curtain
      ScrollTrigger.create({
        trigger: ".hero-section",
        start: "top top",
        endTrigger: ".projects-section",
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // Optional: Add a subtle darkening/shrinking effect to the Hero as the curtain rises
      gsap.to(".hero-section", {
        opacity: 0.2,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <main ref={containerRef} className="relative bg-[#FDFDFD]">
      <div className="hero-section min-h-[100dvh]">
        <Hero />
      </div>
      
      <div className="projects-section relative z-10">
        <Projects />
      </div>
    </main>
  );
}
