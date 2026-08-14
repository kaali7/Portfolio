# Current Status

## What is Completed
- [x] Initialized Next.js project with TypeScript and Tailwind CSS.
- [x] Set up basic folder structure and configuration (Tailwind, PostCSS, etc.).
- [x] Redesigned Hero Section (`components/Hero.tsx`) matching reference (`img (3).png`) with full mobile & desktop responsiveness, editorial serif "Hey there" title, floating HUD badges, and backdrop-blur navigation.
- [x] Implemented Projects Section (`components/Projects.tsx`) with dark theme contrast.
- [x] Integrated GSAP ScrollTrigger for the "Curtain Reveal" animation between Hero and Projects sections.
- [x] Initialized Git repository.
- [x] Established project rules and documentation enforcement policy (`doc/rule.md`).
- [x] Retained large editorial typography size (`text-[13.5vw]`) and applied a subtle left shift (`-ml-8 sm:-ml-16 md:-ml-20 lg:-ml-24 xl:-ml-28`) for "DATA" in Hero section (`components/Hero.tsx`), making the letter "A" visible beside the portrait while preserving scale.
- [x] Removed bottom status bar footer containing "SCROLL TO EXPLORE" and "[01 // 05]" from Hero section (`components/Hero.tsx`).
- [x] Optimized **Optical Spotlight Lens Text Clarity** (`components/Hero.tsx`): added a subtle 1px glass blur (`backdrop-blur-[1px]`) for delicate optical glass refraction while keeping text crisp and perfectly readable (`brightness-220 contrast-200`).
- [x] Implemented 3-stage **mouse movement glass lens lifecycle** (`components/Hero.tsx`):
  1. Stationary/idle state: **No circle** (`scale: 0, opacity: 0`).
  2. Cursor movement: Tuned spring physics (`stiffness: 90, damping: 16, mass: 0.7`) for liquid-smooth fluid animation from **No circle ➔ Small circle ➔ Refined Big circle** (`200px` max static size), maintaining a static big circle during continuous movement.
  3. Mouse Arrow Tracking: Calibrated smooth spring momentum (`stiffness: 120, damping: 20, mass: 0.6`) for buttery smooth cursor movement tracking without snapping.
  4. Stopped movement: Spring-contracts smoothly back from **Big circle ➔ Small circle ➔ No circle** (`scale: 0, opacity: 0`) after 260ms.
  5. Interactive Zone Suppression: Lens circle **automatically hides** (`scale: 0, opacity: 0`) whenever the mouse moves over the Top Navbar header or the Robot Avatar widget.
  6. Normal Cursor Arrow: Changed cursor style from `cursor-crosshair` to `cursor-default` for standard mouse pointer interaction.
- [x] Upgraded **Hero Section Animations** (`components/Hero.tsx`):
  - **3D Mouse Parallax Depth**: Added dynamic spatial depth transforms to portrait, editorial background text, "I AM ASHWINI" title, and glass HUD card.
  - **Breathing Ambient Glow**: Pulsing 6s infinite loop on background purple aura.
  - **Metallic Silver Text Shimmer**: Applied `bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent` to `ASHWINI` heading with interactive hover response.
  - **Futuristic Glass HUD Card Redesign**: Redesigned right-side description card with obsidian glassmorphism (`#0B0C10/85`), purple header badge (`text-purple-300`), HUD bracket indicator (`HUD // 01`), sweeping top purple border neon beam, and tech stack chips (`Deep Learning`, `GenAI & LLMs`, `Data Pipelines`), removing all blinking dots.
- [x] Redesigned **Top Navigation Bar** (`components/Hero.tsx`):
  - **Sitemap Architecture Alignment**: Added clean sections (`ABOUT`, `PROJECTS`, `RESEARCH`, `SKILLS`, `EXPERIENCE`, `WRITING`).
  - **No Number Prefixes**: Completely removed `01.` prefixes for clean, modern uppercase typography.
  - **Increased Font Sizes**: Scaled navbar links to `text-xs sm:text-sm lg:text-base font-bold` and dropdown items to `text-xs sm:text-sm` for optimal legibility.
  - **Submenu Mega-Menu Dropdowns**: Added hover dropdown menus for `PROJECTS` (Featured, AI/ML, Data Science, GenAI, Full-Stack AI) and `RESEARCH` (Papers Studied, Experiments, Research Notes).
  - **100% Transparent Borderless Header & Solid White CTA**: Removed outer pill border and background fill (`border-0 bg-transparent`), rendering a pure transparent header with a clean, high-contrast **solid white `GET IN TOUCH` button** (`bg-white text-[#08080A] font-black`) with white glow shadow.
- [x] Upgraded **AI Robot Avatar** (`RobotAvatar` in `Hero.tsx`):
  - Changed eyes from cyan to **pure white** (`fill-white`).
  - Removed all purple borders/glows, replacing with clean neutral slate/white border styling (`border-2 border-slate-200`).
  - Upgraded animations: spring head-tilt tracking (`rotate [-4.5°, 4.5°]`), natural double-blink loop, hover scale gesture (`scale: 1.08`), and dark speech bubble.
  - **Proximity Speech Bubble & Animated Talking Mouth**: Added proximity detection (`dist < 220px`) that pops up a dark rounded speech bubble with **typewriter-animated pure white `HELLO!` text**, an animated talking mouth SVG curve, and joyful body bounce gesture!
  - **Ultra-Smooth Motion Tuning**: Calibrated Framer Motion springs (`stiffness: 140, damping: 20, mass: 0.6`) for liquid-smooth eye tracking, head tilt, and speech bubble pop-up transitions.
- [x] Implemented ultra-smooth **Curtain Reveal Scroll Transition & White Theme Reversal** (`app/page.tsx`, `components/Projects.tsx`):
  - **Smooth GSAP Scroll Physics**: Calibrated GSAP ScrollTrigger pinning and scrub dynamics (`scrub: 0.8`, `scale: 0.94`, `opacity: 0.15`) for fluid curtain scroll transition when navigating from Hero to Projects section.
  - **High-Contrast Pure White Theme Section**: Redesigned `Projects` section with pure white background (`bg-white`), dark high-contrast headings (`text-[#08080A]`), slate descriptions (`text-slate-600`), and dark accent elements ("minor" items reversed to black on white).
  - **Premium Light Glass Cards**: Designed 6 project cards with crisp slate-50 background (`bg-slate-50/80 hover:bg-white`), dark category pills (`bg-slate-200/80 group-hover:bg-[#08080A] group-hover:text-white`), black circle arrow CTA buttons, tech stack chips, and smooth Framer Motion stagger animations (`staggerChildren: 0.12`).

- [x] Perfected **Projects Section Docking & Full Viewport Fit** (`app/page.tsx`, `components/Projects.tsx`):
  - **Unified GSAP ScrollTrigger Timeline**: Merged pin, scrub, and snap into a single unified GSAP timeline (`scrub: 0.5`, `snapTo: progress > 0.02 ? 1 : 0`, `delay: 0`). Eliminates scroll offset drift, ensuring the rounded top curtain docks pixel-perfect at `top: 0` on screen.
- [x] Set **Spotlight Layout as Default Initial View** (`components/Projects.tsx`):
  - **Eliminated 3x2 Grid View**: Updated Projects section to default to the 4-space featured spotlight preview on the left + stacked list on the right (`activeId = 0` by default), exactly matching the user's annotated screenshot (`✓`).
- [x] **Git Repository Commit**:
  - Committed all updated portfolio files (`git commit -m "feat: complete portfolio features including contact section, experience timeline, detailed project case studies, and default spotlight projects layout"`). Working tree is clean.
- [x] **Homepage 4 Featured Projects Showcase & Dedicated `/projects` Archive Page** (`components/Projects.tsx`, `lib/projectsData.ts`, `app/projects/page.tsx`):
  - **Homepage Focus**: Restricted homepage project section strictly to 4 featured projects (`StockMind AI`, `Medical RAG Chatbot`, `AI Gym Workout Planner`, `Speech-to-Speech AI`) with dynamic left-side spotlight preview and right-side selector list.
  - **Hover Interactions**: Smooth left spotlight transitions (400–700ms), active project title highlighting, purple index indicator (`→ 03`), and inactive project dimming.
  - **View All Projects Block**: Created a distinct, interactive "VIEW ALL PROJECTS →" block featuring smooth hover arrow animation (`200–400ms`), purple glow accents, text highlighting, and underline transition leading to `/projects`.
  - **Full Portfolio Archive Page (`/projects`)**: Built a dedicated archive page with hero header ("PROJECTS — A collection of things I've built, experimented with, and learned from"), category filter pills (`ALL`, `AI / ML`, `DATA SCIENCE`, `GENAI`, `FULL-STACK AI`), search bar, project metric cards, technology tags, and case study links.

































- [x] Integrated **Lenis Smooth Inertia Momentum Scroll & Non-Glitchy Curtain Parallax** (`components/SmoothScroll.tsx`, `app/page.tsx`, `app/globals.css`):
  - **Eliminated Scroll Hijacking & Jitter Glitches**: Removed aggressive ScrollTrigger `pin` & `snapTo` lock-ups that caused scroll stopping, jumping, and jitter.
  - **Lenis Smooth Scroll Provider**: Created a client-side Lenis wrapper synchronized with GSAP ScrollTrigger ticker for buttery 60fps momentum scroll across touch, trackpad, and mouse wheel devices.
  - **Sticky Stacked Curtain Architecture**: Configured `sticky top-0 min-h-[100dvh]` and layered z-index hierarchy (`z-0` through `z-40`) across Hero, Projects, Skills, Experience, and Contact sections, enabling each rounded section card to cleanly slide and dock over the preceding section as a smooth curtain overlay.
- [x] Standardized **Icon System & Emoji Elimination** (`doc/rule.md`, `components/TechIcon.tsx`, `components/Skills.tsx`, `components/Experience.tsx`):
  - **Installed Icon Packages**: Installed `simple-icons`, `lucide-react`, and `@tabler/icons-react`.
  - **Updated Project Rules**: Added Section 4 (Icon Usage Guidelines) to [rule.md](file:///c:/kali/product/portfolio/doc/rule.md) enforcing strict usage boundaries for technology logos (`simple-icons`), UI controls (`lucide-react`), and technical icons (`@tabler/icons-react`).
  - **Eliminated Emojis & Unknown Icons**: Replaced all raw emojis (`📊`, `🤖`, `⚡`, `📚`, `👁️`, `📍`, `✓`) across `Skills.tsx` and `Experience.tsx` with clean Lucide React components (`BarChart2`, `Brain`, `Network`, `Cpu`, `Sparkles`, `Database`, `ScanEye`, `Code2`, `Zap`, `MapPin`, `CheckCircle2`).
  - **Created `TechIcon` Helper**: Built a dedicated [TechIcon.tsx](file:///c:/kali/product/portfolio/components/TechIcon.tsx) component powered by `simple-icons` to render SVG logos for Python, Pandas, PyTorch, TensorFlow, React, FastAPI, PostgreSQL, Docker, Git, and Qdrant.
- [x] Redesigned **Organic Technical Ecosystem Graph** (`components/Skills.tsx`):
  - **Organic Non-Grid Positioning & Size Hierarchy**: Replaced rigid grids with asymmetric floating domain nodes (`DATA SCIENCE` large, `AI ENGINEERING` large, `MACHINE LEARNING` medium-large, `GENERATIVE AI` medium, `DEEP LEARNING` medium, `RAG` medium, `FULL-STACK AI` medium, `COMPUTER VISION` small-medium) naturally filling the section space.
  - **Spatial Breathing Hover Physics**: Hovering any skill node smoothly expands it (`scale: 1.45x`), shrinks surrounding nodes (`scale: 0.75–0.85x`), and reveals staggered technology chips (`TechIcon` integration) + secondary project case study links (`USED IN → ...`).
  - **2D Mouse Parallax Depth**: Added subtle mouse-driven 2D spatial parallax tracking using Framer Motion springs (`useSpring`, `useMotionValue`) with zero 3D rotation or excessive glow.
  - **Mobile Responsive Fallback**: Built a controlled vertical collapsible card stack for mobile viewports (`<md`) preventing overlap and preserving readability.
  - **Preserved Circle Shape on Hover**: Updated hovered expanded nodes to remain 100% circular (`rounded-full w-80 h-80 lg:w-[410px] lg:h-[410px]`) with purple glass glow, keeping the entire ecosystem map composed of organic circles.
  - **Fixed Edge Clipping & Border Insets**: Adjusted domain coordinates (`pos`) with safe 14-16% edge offsets and increased section bottom padding (`pb-28 sm:pb-36 lg:pb-40`) + container height (`min-h-[800px] lg:min-h-[880px] xl:min-h-[920px]`), ensuring expanded circles near the edges (`COMPUTER VISION`, `RAG`, `FULL-STACK AI`) never clip or extend past section borders.
  - **Tightly Clustered Nodes & Breathing Physics**: Replaced widely separated positions with a cohesive, tight organic node cluster around the section core without overlapping in default state. Hovering any node expands it to `1.45x` scale while non-hovered nodes automatically contract to `0.68x` scale with `0.3` opacity, eliminating overlap while creating high focal emphasis.
  - **Refactored Motion (Zero DOM Swapping or Jitter)**: Unified collapsed and expanded states into a single persistent circular node per domain (`rounded-full`). On hover, the node smoothly scales up (`1.35x` spring physics) and reveals technology chips (`TechIcon`) + project links via `AnimatePresence`, eliminating layout reflows, text pops, and DOM unmounting flicker.
  - **Fixed Unhover Node Reset**: Attached direct `onMouseLeave={() => setHoveredId(null)}` event handlers onto individual `<motion.div>` domain nodes. Moving the mouse cursor off any circle now immediately resets `hoveredId` and smoothly shrinks the node back to its original default size (`scale: 1.0`).
  - **Asymmetric Size Distribution & Framed Border Box**: Updated circle node sizes (`DATA SCIENCE`, `AI ENGINEERING`, `GENERATIVE AI` Extra Large; `MACHINE LEARNING`, `DEEP LEARNING` Medium-Large; `FULL-STACK AI`, `RAG`, `COMPUTER VISION` Small) and placed them inside a sleek, dark glass framed border container (`rounded-[2.5rem] border border-white/20 bg-[#060608]/90`) matching the reference design. Tightened top border padding for a compact, editorial fit.

## What is Pending
- [ ] Implement About / Services / Research sections.
- [ ] Connect navigation links smoothly to their respective sections.
- [ ] Audit performance and accessibility across mobile and desktop breakpoints.

