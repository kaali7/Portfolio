"use client";

import { useState, useRef, useEffect } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projectsDetailData } from "@/lib/projectsDetailData";
import { Search, ArrowUpRight, Sparkles, ChevronDown, Layers, Cpu, SlidersHorizontal, ArrowUpDown, RotateCcw, Filter, X, Check } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { RobotAvatar } from "@/components/RobotAvatar";
import { TechIcon } from "@/components/TechIcon";

interface DropdownOption {
  value: string;
  label: string;
}

function CustomDropdown({
  value,
  onChange,
  options,
  icon: Icon,
  placeholder,
}: {
  value: string;
  onChange: (val: string) => void;
  options: DropdownOption[];
  icon: any;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${isOpen ? "z-[110]" : "z-30"}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-1.5 bg-white border ${
          isOpen
            ? "border-purple-500 ring-3 ring-purple-500/15 shadow-sm text-purple-900"
            : "border-slate-200/90 hover:border-purple-300 text-[#08080A]"
        } text-[11px] font-mono font-bold px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer shadow-2xs`}
      >
        <div className="flex items-center gap-1.5 min-w-0 truncate">
          <Icon className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-purple-600" : ""
          }`}
        />
      </button>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 2 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full mt-1.5 w-full min-w-[190px] bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-1.5 shadow-2xl z-[120] max-h-64 overflow-y-auto no-scrollbar"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 text-left text-[11px] font-mono font-medium px-2.5 py-2 rounded-xl transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-purple-600 text-white font-bold shadow-xs"
                      : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedTech, setSelectedTech] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("FEATURED");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / '/' to focus search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        if (["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)) return;
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Raw mouse coordinates for RobotAvatar tracking
  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);

  // Local mouse tracking motion values for interactive white page light glow effect
  const localMouseX = useMotionValue(-1000);
  const localMouseY = useMotionValue(-1000);
  const opacityVal = useMotionValue(0);

  // Buttery-smooth spring physics for fluid inertia & zero-jitter cursor tracking
  const smoothX = useSpring(localMouseX, { stiffness: 65, damping: 26, mass: 0.8 });
  const smoothY = useSpring(localMouseY, { stiffness: 65, damping: 26, mass: 0.8 });
  const smoothOpacity = useSpring(opacityVal, { stiffness: 80, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    rawMouseX.set(e.clientX);
    rawMouseY.set(e.clientY);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      localMouseX.set(e.clientX - rect.left);
      localMouseY.set(e.clientY - rect.top);
      opacityVal.set(1);
    }
  };

  const handleMouseEnter = () => {
    opacityVal.set(1);
  };

  const handleMouseLeave = () => {
    opacityVal.set(0);
    rawMouseX.set(-1000);
    rawMouseY.set(-1000);
  };

  // Multi-stop diffused radial purple glow spotlight for a luxurious, smooth ambient feel
  const lightGlowBg = useTransform(
    [smoothX, smoothY, smoothOpacity],
    ([x, y, op]) =>
      `radial-gradient(circle 420px at ${x}px ${y}px, rgba(147, 51, 234, ${Number(op) * 0.16}) 0%, rgba(168, 85, 247, ${Number(op) * 0.07}) 35%, rgba(147, 51, 234, ${Number(op) * 0.02}) 65%, transparent 100%)`
  );

  const categoryOptions = [
    { id: "AI ENGINEERING", label: "AI Engineering" },
    { id: "FULL-STACK AI", label: "Full-Stack AI" },
    { id: "DESKTOP APPLICATIONS", label: "Desktop Applications" },
    { id: "RECOMMENDATION SYSTEMS", label: "Recommendation Systems" },
    { id: "VOICE AI", label: "Voice AI" },
    { id: "HR ANALYTICS", label: "HR Analytics" },
    { id: "FINANCIAL ANALYTICS", label: "Financial Analytics" },
  ];

  const techOptions = [
    "Python",
    "FastAPI",
    "React",
    "PyQt5",
    "Ollama",
    "FAISS",
    "Scikit-Learn",
    "Flask",
    "OpenCV",
    "n8n",
    "Docker",
    "AWS",
  ];

  const systemTypeOptions = [
    "AI System",
    "Full-Stack Application",
    "Desktop GUI Application",
    "AI Recommendation Engine",
  ];

  const getCategoryCount = (catId: string) => {
    if (catId === "ALL") return projectsDetailData.length;
    return projectsDetailData.filter(
      (p) =>
        p.category.toUpperCase() === catId ||
        (p.subcategory && p.subcategory.toUpperCase() === catId)
    ).length;
  };

  const domainDropdownOptions: DropdownOption[] = [
    { value: "ALL", label: `Domain: All (${projectsDetailData.length})` },
    ...categoryOptions.map((cat) => ({
      value: cat.id,
      label: `${cat.label} (${getCategoryCount(cat.id)})`,
    })),
  ];

  const techDropdownOptions: DropdownOption[] = [
    { value: "ALL", label: "Tech: All Technologies" },
    ...techOptions.map((t) => ({ value: t, label: t })),
  ];

  const systemTypeDropdownOptions: DropdownOption[] = [
    { value: "ALL", label: "Type: All System Types" },
    ...systemTypeOptions.map((st) => ({ value: st, label: st })),
  ];

  const sortDropdownOptions: DropdownOption[] = [
    { value: "FEATURED", label: "Sort: Featured" },
    { value: "NEWEST", label: "Sort: Newest First" },
    { value: "OLDEST", label: "Sort: Oldest First" },
    { value: "AZ", label: "Sort: Title (A-Z)" },
  ];

  const resetAllFilters = () => {
    setSelectedCategory("ALL");
    setSelectedTech("ALL");
    setSelectedType("ALL");
    setSortBy("FEATURED");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "ALL" ||
    selectedTech !== "ALL" ||
    selectedType !== "ALL" ||
    searchQuery.trim() !== "";

  const filteredProjects = projectsDetailData
    .filter((project) => {
      // 1. Category Filter
      const matchesCategory =
        selectedCategory === "ALL" ||
        project.category.toUpperCase() === selectedCategory ||
        (project.subcategory && project.subcategory.toUpperCase() === selectedCategory);

      // 2. Tech Stack Filter
      const matchesTech =
        selectedTech === "ALL" ||
        (project.card?.tags || []).some((tag) => tag.toLowerCase() === selectedTech.toLowerCase()) ||
        (project.technical?.techStack || []).some((st) => st.toLowerCase().includes(selectedTech.toLowerCase()));

      // 3. System Type Filter
      const matchesType =
        selectedType === "ALL" ||
        project.type.toLowerCase().includes(selectedType.toLowerCase()) ||
        (project.architecture?.type || "").toLowerCase().includes(selectedType.toLowerCase());

      // 4. Search Query Filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        (project.subcategory || "").toLowerCase().includes(query) ||
        (project.card?.shortDescription || "").toLowerCase().includes(query) ||
        (project.card?.tags || []).some((tag) => tag.toLowerCase().includes(query)) ||
        (project.technical?.techStack || []).some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesTech && matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "NEWEST") return b.year - a.year;
      if (sortBy === "OLDEST") return a.year - b.year;
      if (sortBy === "AZ") return a.title.localeCompare(b.title);
      
      // Default FEATURED: Always prioritize Year descending (2026 -> 2025 -> 2022) first
      if (b.year !== a.year) return b.year - a.year;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#060608] text-[#08080A] selection:bg-purple-600 selection:text-white relative overflow-x-hidden"
    >
      <div 
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white w-full pb-8 relative overflow-visible z-10"
      >
        {/* Interactive Cursor Light Spotlight Layer on White Page Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
          style={{
            background: lightGlowBg,
          }}
        />

        {/* Shared Unified Navigation Bar */}
        <Navbar variant="light" currentRoute="work" />

      {/* Hero Header Section */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pt-6 xs:pt-8 sm:pt-12 pb-5 xs:pb-6 sm:pb-8 relative z-50 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-5 xs:pb-6 sm:pb-8 border-b border-slate-200/90 gap-5 xs:gap-6"
        >
          <div className="max-w-2xl">
            <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-[#08080A] leading-[1.15]">
              Engineered <span className="font-light italic text-purple-600">Models</span> <br className="hidden sm:inline" />& Autonomous Systems
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 xs:mt-2.5 max-w-xl leading-relaxed font-normal">
              An architectural index of real-time voice streaming LLMs, vector music recommendation pathways, ATS resume compilers, predictive analytics dashboards, and interactive desktop GUIs.
            </p>
          </div>

          {/* Right Hero Visual Area: Mascot + Metrics Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end xl:items-center gap-3.5 sm:gap-6 self-stretch lg:self-auto">
            {/* AI Robot Avatar Mascot */}
            <div className="flex-shrink-0 relative z-[60]">
              <RobotAvatar mouseX={rawMouseX} mouseY={rawMouseY} speechText="EXPLORE!" size="lg" />
            </div>

            {/* Quick Metrics HUD Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 sm:gap-5 self-stretch lg:self-auto shadow-xs backdrop-blur-sm"
            >
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">Production Deployed</span>
                <span className="text-xl sm:text-2xl font-black text-[#08080A] font-mono">{projectsDetailData.length} Systems</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200" />
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase block mb-0.5">Avg Benchmark Latency</span>
                <span className="text-xl sm:text-2xl font-black text-purple-600 font-mono">&lt; 50ms</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar & Search Container */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pb-5 xs:pb-6 sm:pb-8 relative z-[100]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-slate-50/90 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-xs space-y-3 backdrop-blur-sm relative z-[100]"
        >
          {/* Main Controls Row: Filters on Left Side, Search Box on Right Side */}
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
            {/* Left Side: 4 Custom Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2 flex-1">
              <CustomDropdown
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={domainDropdownOptions}
                icon={Layers}
                placeholder="Domain: All"
              />
              <CustomDropdown
                value={selectedTech}
                onChange={setSelectedTech}
                options={techDropdownOptions}
                icon={Cpu}
                placeholder="Tech: All"
              />
              <CustomDropdown
                value={selectedType}
                onChange={setSelectedType}
                options={systemTypeDropdownOptions}
                icon={SlidersHorizontal}
                placeholder="Type: All"
              />
              <CustomDropdown
                value={sortBy}
                onChange={setSortBy}
                options={sortDropdownOptions}
                icon={ArrowUpDown}
                placeholder="Sort: Featured"
              />
            </div>

            {/* Right Side: Search Input Box */}
            <div className="relative w-full xl:w-80 2xl:w-96 flex-shrink-0 group">
              <Search className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-purple-600 absolute left-3 top-2.5 pointer-events-none transition-colors" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search architecture, stack... (⌘K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200/90 text-[#08080A] placeholder-slate-400 text-xs font-mono pl-8 pr-14 py-2 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-3 focus:ring-purple-500/10 shadow-2xs transition-all duration-300"
              />

              {/* Action Badge: Clear or Keyboard Hint */}
              <div className="absolute right-2.5 top-2 flex items-center">
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[10px] font-mono font-bold text-slate-400 hover:text-purple-600 bg-slate-100 hover:bg-purple-50 border border-slate-200 px-1.5 py-0.5 rounded-md transition-colors cursor-pointer"
                  >
                    CLEAR
                  </button>
                ) : (
                  <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[9px] font-mono font-bold text-slate-400 bg-slate-100 border border-slate-200/90 px-1.5 py-0.5 rounded-md">
                    <span className="text-[10px]">⌘</span>K
                  </kbd>
                )}
              </div>
            </div>
          </div>

          {/* Active Filter Badges & Results Counter Sub-bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2.5 border-t border-slate-200/80 text-[11px] font-mono">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-slate-400" />
                Active Filters:
              </span>
              {selectedCategory !== "ALL" && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-md">
                  Domain: {selectedCategory}
                  <button onClick={() => setSelectedCategory("ALL")} className="hover:text-purple-900 cursor-pointer">✕</button>
                </span>
              )}
              {selectedTech !== "ALL" && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-md">
                  Tech: {selectedTech}
                  <button onClick={() => setSelectedTech("ALL")} className="hover:text-purple-900 cursor-pointer">✕</button>
                </span>
              )}
              {selectedType !== "ALL" && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-md">
                  Type: {selectedType}
                  <button onClick={() => setSelectedType("ALL")} className="hover:text-purple-900 cursor-pointer">✕</button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-md">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-purple-900 cursor-pointer">✕</button>
                </span>
              )}
              {!hasActiveFilters && (
                <span className="text-slate-400 italic">None (Displaying all systems)</span>
              )}

              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-600 hover:text-purple-800 underline ml-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset All
                </button>
              )}
            </div>

            <span className="text-slate-600 font-medium self-end sm:self-auto">
              Showing <strong className="text-purple-700 font-bold">{filteredProjects.length}</strong> of {projectsDetailData.length} production systems
            </span>
          </div>
        </motion.div>
      </section>

      {/* Projects Asymmetrical Bento Grid */}
      <section className="w-full mx-auto px-4 xs:px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 3xl:px-44 pb-16 relative z-10">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-12 text-center my-6 shadow-xs"
            >
              <p className="text-slate-600 font-mono text-xs mb-3">No projects match the selected criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
              >
                RESET FILTERS
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
            >
              {filteredProjects.map((project, idx) => {
                const isFeatured = idx === 0;
                const projectImage = project.visual?.heroImage || project.visual?.thumbnail;
                const githubMatch = project.links?.github?.match(/\]\((https?:\/\/[^\)]+)\)/);
                const cleanGithubUrl = githubMatch ? githubMatch[1] : (project.links?.github?.startsWith("http") ? project.links.github : null);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: ((idx - 1) % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                    className={`${
                      isFeatured
                        ? "lg:col-span-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 border-purple-200/90"
                        : "lg:col-span-6 bg-slate-50/90 border-slate-200/90"
                    } border hover:border-purple-500 hover:bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group relative text-[#08080A]`}
                  >
                    <div>
                      {/* Top Header info & Micro-Telemetry Badges - Single Line on Mobile */}
                      <div className="flex items-center justify-between gap-1 sm:gap-2 pb-2.5 sm:pb-3 border-b border-slate-200/80 mb-3.5 sm:mb-4 overflow-hidden">
                        <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap min-w-0">
                          <span className="text-[8px] sm:text-[10px] font-mono font-bold text-white bg-[#08080A] px-2 sm:px-2.5 py-0.5 rounded-full uppercase shadow-xs whitespace-nowrap flex-shrink-0">
                            {project.category}
                          </span>
                          {project.subcategory && (
                            <span className="text-[8px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full text-purple-700 bg-purple-100 border border-purple-300 whitespace-nowrap flex-shrink-0">
                              {project.subcategory}
                            </span>
                          )}
                          {project.type && (
                            <span className="text-[8px] sm:text-[10px] font-mono font-medium px-1.5 sm:px-2 py-0.5 rounded-full text-slate-600 bg-slate-100 border border-slate-200/90 hidden sm:inline-block whitespace-nowrap flex-shrink-0">
                              {project.type}
                            </span>
                          )}
                          {project.status && (
                            <span className={`text-[8px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0 ${
                              project.status === "completed" 
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}>
                              <span className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${project.status === "completed" ? "bg-emerald-500 animate-pulse" : "bg-amber-500 animate-ping"}`} />
                              <span className="uppercase">{project.status}</span>
                            </span>
                          )}
                        </div>

                        {project.year && (
                          <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-400 whitespace-nowrap flex-shrink-0 ml-auto pl-1">
                            {project.year}
                          </span>
                        )}
                      </div>

                      {/* Content Grid layout for Featured vs Normal */}
                      {isFeatured ? (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center mb-4">
                          {/* Left Column: Details */}
                          <div className="lg:col-span-7">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-2">
                              {project.title}
                            </h2>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                              {project.card?.shortDescription}
                            </p>

                            {/* System Overview Section - Exclusively for Netran AI Flagship Project (Hidden on mobile phones) */}
                            {project.id === "netran-ai" && project.overview && (
                              <div className="hidden lg:block bg-purple-50/60 border border-purple-200/80 rounded-xl p-3 my-2.5 space-y-1.5 shadow-2xs">
                                <div className="flex items-center justify-between border-b border-purple-200/60 pb-1">
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                                    SYSTEM OVERVIEW & ARCHITECTURE
                                  </span>
                                </div>

                                {project.overview.problem && (
                                  <div className="text-[11px] text-slate-700 leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-rose-700 uppercase bg-rose-100 border border-rose-200 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      CHALLENGE
                                    </span>
                                    <span>{project.overview.problem}</span>
                                  </div>
                                )}

                                {project.overview.motivation && (
                                  <div className="text-[11px] text-slate-700 leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-amber-700 uppercase bg-amber-100 border border-amber-200 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      MOTIVATION
                                    </span>
                                    <span>{project.overview.motivation}</span>
                                  </div>
                                )}

                                {project.overview.solution && (
                                  <div className="text-[11px] text-slate-800 leading-relaxed font-medium pt-0.5">
                                    <span className="text-[8.5px] font-mono font-bold text-purple-800 uppercase bg-purple-200/80 border border-purple-300 px-1 py-0.5 rounded mr-1.5 inline-block">
                                      SOLUTION
                                    </span>
                                    <span>{project.overview.solution}</span>
                                  </div>
                                )}

                                {project.overview.outcome && (
                                  <div className="pt-1.5 border-t border-purple-200/60 flex items-start gap-1.5 text-[11px] text-slate-900 font-medium leading-relaxed">
                                    <span className="text-[8.5px] font-mono font-bold text-emerald-800 uppercase bg-emerald-100 border border-emerald-300 px-1 py-0.5 rounded flex-shrink-0">
                                      OUTCOME
                                    </span>
                                    <span>{project.overview.outcome}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Right Column: Media Preview Container */}
                          <div className="lg:col-span-5 w-full">
                            {projectImage ? (
                              <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col">
                                <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                  </div>
                                  <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase font-medium">
                                    ARCHITECTURE BLUEPRINT
                                  </span>
                                </div>
                                <div className="relative w-full bg-[#0c0c11] p-1.5 flex items-center justify-center min-h-[180px] max-h-[260px] overflow-hidden">
                                  <img
                                    src={projectImage}
                                    alt={project.title}
                                    className="w-full h-full max-h-[250px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="w-full bg-purple-900/10 border border-purple-200/60 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
                                <Sparkles className="w-6 h-6 text-purple-600 mb-1.5" />
                                <span className="text-[11px] font-mono font-bold text-purple-900">PRODUCTION SYSTEM</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Standard Card Layout */
                        <div className="flex flex-col gap-3 mb-4">
                          <div>
                            <h2 className="text-lg sm:text-xl font-black text-[#08080A] group-hover:text-purple-600 transition-colors tracking-tight mb-1">
                              {project.title}
                            </h2>
                            <p className="text-xs leading-relaxed text-slate-600 line-clamp-3">
                              {project.card?.shortDescription}
                            </p>
                          </div>

                          {/* Media Preview Box */}
                          {projectImage && (
                            <div className="w-full bg-[#0c0c11] border border-slate-800 rounded-xl overflow-hidden shadow-sm my-0.5">
                              <div className="bg-slate-950 px-2.5 py-1 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-[8.5px] font-mono text-slate-400 tracking-wider uppercase">
                                  BLUEPRINT PREVIEW
                                </span>
                              </div>
                              <div className="p-1.5 flex items-center justify-center bg-[#0c0c11] max-h-52 overflow-hidden">
                                <img
                                  src={projectImage}
                                  alt={project.title}
                                  className="w-full h-full max-h-48 object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer Tech Stack Chips & Action Links */}
                    <div className="pt-3 sm:pt-3.5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-3 mt-1">
                      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                        {/* Desktop view (all tags) */}
                        <div className="hidden sm:flex flex-wrap gap-1 max-w-full">
                          {(project.card?.tags || []).map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-800 bg-white border border-slate-200/90 px-2 py-0.5 rounded-md font-medium shadow-2xs hover:border-purple-300 transition-colors"
                            >
                              <TechIcon name={tag} className="w-3 h-3 flex-shrink-0 text-purple-600" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>

                        {/* Mobile view (top 3 tags + '+X MORE') */}
                        <div className="flex sm:hidden flex-wrap gap-1 max-w-full items-center justify-center">
                          {(project.card?.tags || []).slice(0, 3).map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="inline-flex items-center gap-1 text-[8px] font-mono text-slate-800 bg-white border border-slate-200/90 px-1.5 py-0.5 rounded-md font-medium shadow-2xs"
                            >
                              <TechIcon name={tag} className="w-2.5 h-2.5 flex-shrink-0 text-purple-600" />
                              <span>{tag}</span>
                            </span>
                          ))}
                          {(project.card?.tags || []).length > 3 && (
                            <span className="inline-flex items-center text-[7.5px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded-md">
                              +{(project.card?.tags || []).length - 3} MORE
                            </span>
                          )}
                        </div>
                      </div>

                      {isFeatured ? (
                        /* Horizontal action button layout for Featured / Netran AI card (Centered on Mobile) */
                        <div className="flex items-center justify-center sm:justify-start gap-2 flex-shrink-0 w-full sm:w-auto">
                          {cleanGithubUrl && (
                            <a
                              href={cleanGithubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-2 sm:px-3.5 sm:py-2 bg-white hover:bg-[#08080A] text-slate-700 hover:text-white border border-slate-200/90 rounded-full text-[10.5px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 shadow-2xs group/gh cursor-pointer whitespace-nowrap flex-initial sm:flex-initial"
                              title={`View ${project.title} on GitHub`}
                            >
                              <TechIcon name="GitHub" color="currentColor" className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover/gh:scale-110" />
                              <span>GITHUB</span>
                            </a>
                          )}

                          <Link
                            href={`/work/${project.id}`}
                            className="px-3 py-2 sm:px-4 sm:py-2 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-[10.5px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm group/btn whitespace-nowrap flex-1 sm:flex-initial text-center"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </div>
                      ) : (
                        /* Standard cards: Horizontal side-by-side on mobile, stacked vertical on desktop */
                        <div className="flex flex-row sm:flex-col items-center sm:items-stretch justify-center gap-2 sm:gap-1.5 flex-shrink-0 w-full sm:w-auto sm:min-w-[145px]">
                          {cleanGithubUrl && (
                            <a
                              href={cleanGithubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-2 sm:px-3.5 sm:py-1.5 bg-white hover:bg-[#08080A] text-slate-700 hover:text-white border border-slate-200/90 rounded-full text-[10.5px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 shadow-2xs group/gh cursor-pointer text-center whitespace-nowrap flex-initial sm:w-full"
                              title={`View ${project.title} on GitHub`}
                            >
                              <TechIcon name="GitHub" color="currentColor" className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover/gh:scale-110" />
                              <span>GITHUB</span>
                            </a>
                          )}

                          <Link
                            href={`/work/${project.id}`}
                            className="px-3 py-2 sm:px-4 sm:py-2 bg-[#08080A] text-white hover:bg-purple-600 rounded-full text-[10.5px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm group/btn text-center whitespace-nowrap flex-1 sm:flex-initial sm:w-full"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      </div>

      {/* Interactive Contact Component Footer */}
      <Contact />
    </main>
  );
}
