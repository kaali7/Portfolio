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
- [x] Created **Dynamic Project Detail Case Study Pages (`app/projects/[id]/page.tsx`, `lib/projectsData.ts`)**:
  - **Shared Projects Data Store (`lib/projectsData.ts`)**: Centralized case study data for all 6 projects including role, problem statement, solution impact, KPI metrics grid, architectural highlights, tech stack, and core code snippet.
  - **Dynamic Case Study Page (`app/projects/[id]/page.tsx`)**: Created detailed case study view displaying full metrics grid, problem/solution breakdown, technical innovations, framework badges, Python/C++ code blueprint, and Prev/Next project navigation.
  - **1-Click Card Navigation (`components/Projects.tsx`)**: Connected all project cards and CTA buttons to navigate directly to `/projects/${id}` when clicked.































## What is Pending
- [ ] Implement About / Services / Research sections.
- [ ] Connect navigation links smoothly to their respective sections.
- [ ] Add the Contact section.
- [ ] Audit performance and accessibility.

