"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmoothScroll } from "@/components/SmoothScroll";
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
      // 1. Hero -> Projects Smooth Curtain Transition
      gsap.to(".hero-slide", {
        scrollTrigger: {
          trigger: ".projects-wrapper",
          start: "top 10%",
          end: "top top",
          scrub: true,
        },
        opacity: 0.85,
        ease: "none",
      });

      // 2. Projects -> Skills Smooth Curtain Transition
      gsap.to(".projects-slide", {
        scrollTrigger: {
          trigger: ".skills-wrapper",
          start: "top 10%",
          end: "top top",
          scrub: true,
        },
        opacity: 0.88,
        ease: "none",
      });

      // 3. Skills -> Experience Smooth Curtain Transition
      gsap.to(".skills-slide", {
        scrollTrigger: {
          trigger: ".experience-wrapper",
          start: "top 10%",
          end: "top top",
          scrub: true,
        },
        opacity: 0.85,
        ease: "none",
      });

      // 4. Experience -> Contact Smooth Curtain Transition
      gsap.to(".experience-slide", {
        scrollTrigger: {
          trigger: ".contact-wrapper",
          start: "top 10%",
          end: "top top",
          scrub: true,
        },
        opacity: 0.88,
        ease: "none",
      });

      // Refresh ScrollTrigger calculations after mount
      ScrollTrigger.refresh();

    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="relative bg-[#08080A] min-h-screen">
        {/* Slide 0: Hero Wrapper (140vh mobile / 180vh desktop total scroll travel) */}
        <div className="hero-wrapper relative h-[140vh] sm:h-[180vh] z-0">
          <div className="hero-slide sticky top-0 h-[100dvh] w-full overflow-hidden">
            <Hero />
          </div>
        </div>
        
        {/* Slide 1: Projects Wrapper (140vh mobile / 180vh desktop total scroll travel) */}
        <div className="projects-wrapper relative h-[140vh] sm:h-[180vh] z-10">
          <div className="projects-slide sticky top-0 h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-white no-scrollbar">
            <Projects />
          </div>
        </div>

        {/* Slide 2: Skills Wrapper (140vh mobile / 180vh desktop total scroll travel) */}
        <div className="skills-wrapper relative h-[140vh] sm:h-[180vh] z-20">
          <div className="skills-slide sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#08080A]">
            <Skills />
          </div>
        </div>

        {/* Slide 3: Experience Wrapper (140vh mobile / 180vh desktop total scroll travel) */}
        <div className="experience-wrapper relative h-[140vh] sm:h-[180vh] z-30">
          <div className="experience-slide sticky top-0 h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-white no-scrollbar">
            <Experience />
          </div>
        </div>

        {/* Slide 4: Contact Wrapper */}
        <div className="contact-wrapper relative z-40 bg-[#08080A] min-h-[100dvh]">
          <div className="contact-slide relative w-full">
            <Contact />
          </div>
        </div>

      </main>
    </SmoothScroll>
  );
}





