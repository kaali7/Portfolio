"use client";

import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    { title: "Financial Forecasting", category: "AI / ML" },
    { title: "RAG Document Search", category: "GenAI" },
    { title: "Speech-to-Speech Engine", category: "AI Systems" },
  ];

  return (
    <section className="w-full min-h-[100dvh] bg-[#0A0A0A] text-[#FDFDFD] flex flex-col justify-center px-8 lg:px-16 py-24 rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Selected <br /> <span className="font-bold">Work</span>
          </h2>
          <p className="max-w-sm text-white/60 text-sm md:text-base mt-6 md:mt-0">
            A collection of models, data architectures, and intelligent systems I've built to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-between p-8 hover:bg-white/10 transition-colors cursor-pointer"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-xs font-mono tracking-widest text-purple uppercase z-10">
                {project.category}
              </div>
              
              <div className="z-10">
                <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple group-hover:border-purple transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
