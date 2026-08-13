"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger inside useEffect client-side
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // 1. Hero -> Projects Curtain Scroll & Snapping
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          endTrigger: ".projects-section",
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => (progress > 0.02 ? 1 : 0),
            duration: { min: 0.3, max: 0.6 },
            delay: 0,
            ease: "power2.out",
          },
        },
      });

      heroTl.to(".hero-section", {
        opacity: 0.15,
        scale: 0.94,
        ease: "none",
      });

      // 2. Projects -> Skills Curtain Scroll & Snapping
      const projectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top top",
          endTrigger: ".skills-section",
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => (progress > 0.02 ? 1 : 0),
            duration: { min: 0.3, max: 0.6 },
            delay: 0,
            ease: "power2.out",
          },
        },
      });

      projectsTl.to(".projects-section", {
        opacity: 0.92,
        scale: 0.97,
        ease: "none",
      });

      // 3. Skills -> Experience Curtain Scroll & Snapping
      const skillsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top top",
          endTrigger: ".experience-section",
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => (progress > 0.02 ? 1 : 0),
            duration: { min: 0.3, max: 0.6 },
            delay: 0,
            ease: "power2.out",
          },
        },
      });

      skillsTl.to(".skills-section", {
        opacity: 0.2,
        scale: 0.96,
        ease: "none",
      });

      // 4. Experience -> Contact Curtain Scroll & Snapping
      const experienceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top top",
          endTrigger: ".contact-section",
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => (progress > 0.02 ? 1 : 0),
            duration: { min: 0.3, max: 0.6 },
            delay: 0,
            ease: "power2.out",
          },
        },
      });

      experienceTl.to(".experience-section", {
        opacity: 0.92,
        scale: 0.97,
        ease: "none",
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <main ref={containerRef} className="relative bg-[#08080A] min-h-screen overflow-x-hidden">
      <div className="hero-section min-h-[100dvh]">
        <Hero />
      </div>
      
      <div className="projects-section relative z-10 bg-[#08080A]">
        <Projects />
      </div>

      <div className="skills-section relative z-20 bg-white">
        <Skills />
      </div>

      <div className="experience-section relative z-30 bg-[#08080A]">
        <Experience />
      </div>

      <div className="contact-section relative z-40 bg-white">
        <Contact />
      </div>
    </main>
  );
}


