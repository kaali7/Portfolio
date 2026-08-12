"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const name = "ASHWINI";

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center overflow-hidden bg-background">
      
      {/* Navigation */}
      <nav className="absolute top-8 left-0 right-0 px-8 lg:px-16 flex justify-between items-center text-sm font-medium tracking-wide z-50 text-foreground">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          ASHWINI
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex gap-8"
        >
          <a href="#work" className="hover:text-purple transition-colors">WORKS</a>
          <a href="#about" className="hover:text-purple transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-purple transition-colors">SERVICES</a>
          <a href="#research" className="hover:text-purple transition-colors">RESEARCH</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <a href="#contact" className="px-6 py-2 bg-foreground text-background rounded-full hover:bg-purple transition-colors">
            Contact
          </a>
        </motion.div>
      </nav>

      {/* Elegant Purple Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-purple-light/40 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col items-center mt-12">
        
        {/* Subtle Status Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-8 lg:left-16 top-[20%] flex items-center gap-3 bg-white shadow-sm border border-black/5 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-foreground/80 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-purple animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Big Editorial Typography - Behind Image */}
        <div className="absolute top-[10%] w-full flex justify-center pointer-events-none z-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[12vw] font-light italic tracking-tight text-foreground/90 leading-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Hey, there
          </motion.h1>
        </div>

        {/* Centered Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-64 h-80 md:w-96 md:h-[450px] lg:w-[450px] lg:h-[550px] z-10 mt-8 md:mt-16"
        >
          <Image
            src="/me.png"
            alt="Ashwini Portrait"
            fill
            className="object-cover object-top drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* Bottom Typography & Info */}
        <div className="absolute bottom-12 left-8 right-8 lg:left-16 lg:right-16 flex flex-col md:flex-row justify-between items-end z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            I AM <br /> {name}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 md:mt-0 max-w-xs text-sm md:text-base font-medium text-right text-foreground/80 leading-relaxed"
          >
            Specialized in Data Science, <br />
            Machine Learning, GenAI, and <br />
            Intelligent Systems.
          </motion.div>
        </div>

      </div>
    </section>
  );
}
