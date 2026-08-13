"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Autonomous Agent System",
    message: ""
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashwini@ai-architect.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="w-full min-h-[100dvh] bg-[#08080A] text-white flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 rounded-t-[3rem] md:rounded-t-[4.5rem] lg:rounded-t-[5rem] shadow-[0_-35px_90px_rgba(0,0,0,0.7)] border-t-2 border-purple-500/50 relative z-30"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 pb-5 border-b border-white/10"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            Let's Build Something <span className="font-black italic text-purple-400">Extraordinary</span>
          </h2>
        </motion.div>


        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Availability Card (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Status Card */}
            <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                  CURRENTLY AVAILABLE FOR PROJECTS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have an AI project in mind?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you need a custom LLM system, edge vision pipeline, or autonomous agent architecture—let's discuss your roadmap.
              </p>

              {/* 1-Click Email Copy Pill */}
              <div className="bg-[#08080A] border border-white/15 rounded-2xl p-3 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-300 truncate pl-2">
                  ashwini@ai-architect.io
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-mono font-bold transition-all duration-200 shadow-md flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span>COPIED!</span>
                      <span>✓</span>
                    </>
                  ) : (
                    <>
                      <span>COPY EMAIL</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links & Location Bar */}
            <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                <span>LOCATION</span>
                <span className="text-white font-bold">San Francisco, CA</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                <span>TIMEZONE</span>
                <span className="text-white font-bold">PST (UTC -8)</span>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase block mb-3">
                  CONNECT ON PLATFORMS
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "GitHub", url: "https://github.com" },
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "Twitter / X", url: "https://twitter.com" },
                    { name: "Google Scholar", url: "https://scholar.google.com" }
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 bg-[#08080A] hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl text-xs font-mono font-semibold transition-all"
                    >
                      {s.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#13131A] border border-white/10 rounded-3xl p-6 sm:p-8 relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center justify-between">
                <span>Send a Direct Message</span>
                <span className="text-xs font-mono text-purple-400 font-normal">SECURE ENCRYPTION</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#08080A] border border-white/15 focus:border-purple-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#08080A] border border-white/15 focus:border-purple-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Scope Selection */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Project Scope / Area
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-[#08080A] border border-white/15 focus:border-purple-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Autonomous Agent System">Autonomous Agent System Design</option>
                    <option value="LLM Fine-Tuning & RAG">LLM Fine-Tuning & Production RAG</option>
                    <option value="Edge Computer Vision">Real-Time Edge Computer Vision Pipeline</option>
                    <option value="Technical Advisory">AI Architecture Advisory & Consulting</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Project Details
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell me about your goals, technical constraints, timeline, and scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#08080A] border border-white/15 focus:border-purple-500 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-mono font-black tracking-wider transition-all duration-200 shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING MESSAGE...</span>
                  ) : submitted ? (
                    <span>MESSAGE TRANSMITTED SUCCESSFULLY! ✓</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Footer Branding Bar */}
      <div className="max-w-7xl mx-auto w-full pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-signature text-2xl text-white font-normal">Ashwini</span>
          <span>© {new Date().getFullYear()} — Built for High Performance</span>
        </div>

        <a 
          href="#top"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>BACK TO TOP</span>
          <span>↑</span>
        </a>
      </div>
    </section>
  );
}
