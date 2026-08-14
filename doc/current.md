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
- [x] Redesigned **Interactive Technical Ecosystem Bento Matrix with 3D Parallax & HUD Inspection** (`components/Skills.tsx`):
  - **Generous Top Section Gap**: Increased section container top padding (`pt-10 sm:pt-12 lg:pt-16`) and title top margin (`mt-2 sm:mt-4 lg:mt-6`) to create a spacious, elegant top gap above the `INTERACTIVE SKILL MATRIX` headline.
  - **Prominent Clean Section Headline**: Removed `03 // TECHNICAL ECOSYSTEM` eyebrow and `[ Explore rotated 3D cards... ]` paragraph text per user request, and scaled up the `INTERACTIVE SKILL MATRIX` title typography (`text-3xl sm:text-5xl lg:text-6xl`).
  - **Snappy Sub-180ms Hover Spring Physics**: Calibrated hover scale transitions using high-stiffness spring parameters (`stiffness: 500, damping: 28, mass: 0.25`), enabling instant sub-180ms card expansion and scale contraction without sluggish lag or settlement delay per `animate` skill guidelines.
  - **Single Screen Viewport Fit**: Calibrated vertical padding (`pt-5 lg:pt-8 pb-8 lg:pb-12`), section header height, and card element padding (`p-3.5 sm:p-4`), allowing all 8 skill cards across 3 rows to fit on a single desktop/laptop screen without scrolling while preserving 100% of the exact column, row, and overlapping arrangements.
  - **Rotated & Overlapping Spatial Card Layout**: Configured organic default card angles (`-2.5deg` to `+2.4deg`) and staggered relative offsets (`lg:-ml-3`, `lg:-mt-3`) producing an overlapping layered 3D aesthetic.
  - **Dynamic Hover Expansion & Straightening**: Hovering any card straightens it (`rotate: 0deg`), expands it (`scale: 1.08`, `zIndex: 50`, `opacity: 1`), and pops it over adjacent cards with glowing purple borders (`ring-1 ring-purple-400/40`) while contracting non-hovered cards (`scale: 0.94`, `opacity: 0.55`).
  - **3D Mouse Parallax & Dynamic Radial Spotlight Beams**: Implemented spring-based 3D card tilt (`rotateX`, `rotateY`) reacting to cursor coordinates alongside a dynamic radial glass spotlight beam (`radial-gradient`) following mouse movements inside each card.
  - **Architectural HUD Modal Inspector**: Clicking any domain card opens a high-tech obsidian inspection modal with full technical descriptions, animated proficiency progress bars (0-100%), canonical code architecture snippets, and project case study links.
  - **Applied `animate` & `design-taste-frontend` Skills**: Hardware-accelerated animations (`opacity`, `transform`, `rotate`, `scale`) with snappy spring physics and reduced motion gating (`useReducedMotion()`).
- [x] Redesigned **Clean Wall-Hanging Experience Deck & Fast Spring Motion** (`components/Experience.tsx`):
  - **Eliminated Visible Scrollbars**: Added cross-browser `.no-scrollbar` rules (`::-webkit-scrollbar { display: none }`, `scrollbar-width: none`, `-ms-overflow-style: none`) to [globals.css](file:///c:/kali/product/portfolio/app/globals.css) and added `no-scrollbar` to `experience-slide` in [app/page.tsx](file:///c:/kali/product/portfolio/app/page.tsx) and [Experience.tsx](file:///c:/kali/product/portfolio/components/Experience.tsx).
  - **Fixed Text Overlap & High-Contrast Legibility**: Separated timeline text labels (`CHAPTER 01`, `EdgeVision`, `CHAPTER 02`, `Autonomous AI Labs`) into a dedicated top info row with zero text overlap.
  - **Fast Sub-160ms Scale & Rotation Motion**: Accelerated hover/selection spring parameters (`stiffness: 550, damping: 25, mass: 0.15`) for snappy card expansion.
- [x] Redesigned **Data Science & AI Contact Section** (`components/Contact.tsx`):
  - **Copy Button Hover Angle Rotation Physics**: Added snappy hover angle rotation (`whileHover={{ scale: 1.08, rotate: -4, y: -2 }}`) with icon tilt (`group-hover/copybtn:rotate-12`) to the `COPY MAIL` action button.
  - **Matching `Social Media` Card Header**: Added **`Social Media`** title to the bottom-right card, perfectly matching the top card's **`Contact`** title in size and font (`text-3xl sm:text-4xl lg:text-5xl font-black text-white`).
  - **Renamed & Enlarged Heading**: Changed card title from `Email To Contact` to **`Contact`** and scaled typography up to `text-3xl sm:text-4xl lg:text-5xl font-black`.
  - **Enlarged Email Address Typography**: Scaled email address text up to `text-lg sm:text-xl lg:text-2xl font-mono font-bold` (`ashwini@ai-architect.io`) with `28px` `Mail` icon and `px-6 py-3` copy button.
  - **Enlarged Social Media Icons & Hover Angle Rotation**: Scaled brand SVG icons (**GitHub**, **LinkedIn**, **Twitter / X**) up to `80px` (`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20`), enlarged text labels (`text-base sm:text-lg lg:text-xl font-black`), and added playful hover angle rotation physics (`whileHover={{ scale: 1.08, rotate: -5..5 }}`).
  - **Generous Top Section Padding Above Heading**: Significantly increased top section padding (`pt-16 sm:pt-20 lg:pt-24`) and top heading margin (`mt-2 sm:mt-4 lg:mt-6`), creating a luxurious, spacious top gap above `Initiate Data & AI Collaboration` per user screenshot.
  - **Full-Page Vertical Expansion**: Expanded 2-column bento grid vertically (`flex-1 my-2 sm:my-4 items-stretch`) to fill 100% of the contact section viewport page height without empty gaps.
  - **Robot Anchored at Bottom of Left Card**: Moved the AI Robot mascot down to sit solidly anchored at the bottom of the Left Card container (`mt-auto mb-2 pt-28 sm:pt-36`), leaving space for the speech balloon to float directly above it.
  - **Fixed Bottom Robot Position (Upward Balloon Growth)**: Anchored speech balloon using `absolute bottom-full mb-4` directly above the robot avatar head. As typing animation populates text line-by-line, the speech balloon expands **UPWARDS**, while the Robot mascot avatar stays **100% fixed at the bottom** without any downward movement or layout shift.
  - **White-Line Overlapping Back To Top Button**: Positioned the purple circular action button directly overlapping the horizontal footer line (`-mt-10 sm:-mt-14 z-20`) exactly per user diagram. Scaled diameter up to `96px` (`w-20 h-20 sm:w-24 sm:h-24`), `ArrowUp` icon to `36px` (`w-7 h-7 sm:w-9 sm:h-9`), and amplified glowing pulse shadow (`shadow-[0_15px_45px_rgba(168,85,247,0.65)]`).
  - **Single Screen Desktop Fit (`100vh`)**: Fits 100% on a single screen with interactive mathematical canvas stream ($\theta, \sigma, f(x), W$) and mouse cursor radial spotlight tracking.
- [x] Balanced **Section Scroll Travel & Smooth Curtain Pace** ([app/page.tsx](file:///c:/kali/product/portfolio/app/page.tsx)):
  - **Identified Scroll Imbalance Root Cause**: Discovered mathematical discrepancy where Hero ➔ Projects, Projects ➔ Skills, and Skills ➔ Experience had only `100vh` scroll travel before the next curtain section arrived, while Experience ➔ Contact had a `300vh` scroll travel.
  - **Standardized Balanced Scroll Travel (`180vh`)**: Standardized all section wrappers (`hero-wrapper`, `projects-wrapper`, `skills-wrapper`, `experience-wrapper`) to a uniform `180vh` scroll travel height without complex negative margin offsets.
  - **Fixed Premature Low-Light Dimming**: Changed GSAP ScrollTrigger transition start from `top 30%` down to `top 10%` and increased opacity target from `0.3-0.35` (dark shadow) up to `0.85-0.88` with subtle `0.98` scale contraction. Sections now remain at **100% full brightness and crystal clarity** while being viewed, only applying a subtle depth hint during the final 10% docking moment.
- [x] Fixed **Project Spotlight Card Default Rendering & Fast Spring Motion** ([components/Projects.tsx](file:///c:/kali/product/portfolio/components/Projects.tsx)):
  - **Eliminated Duplicate `layoutId` Collision**: Removed conflicting shared `layoutId` tags present on both left spotlight screen and right stacked list cards simultaneously, which previously caused Framer Motion to collapse the left spotlight card into the right list item on first load.
  - **Guaranteed Default Spotlight Card Display**: Wrapped left spotlight screen in `<AnimatePresence mode="wait">` with `key={activeProject.id}`, ensuring Project #01 (`Financial Forecasting Engine`) is **100% visible by default on initial page load**.
  - **Sub-180ms Instant Responsive Hover Physics**: Optimized hover transition springs (`stiffness: 450, damping: 22`) for instant, buttery-smooth spotlight updates when hovering over any stacked project item.
- [x] Redesigned **Futuristic Obsidian Scrollbar System** ([app/globals.css](file:///c:/kali/product/portfolio/app/globals.css)):
  - **Eliminated Default OS Scrollbar**: Removed ugly browser-default gray track and scrollbar arrow buttons across WebKit (`Chrome`, `Edge`, `Safari`, `Brave`) and Firefox.
  - **Dark Black Floating Pill Thumb**: Styled track with obsidian black (`#08080A`), `8px` width, dark black floating pill thumb (`#1C1D24` with `2px solid #08080A` inset border), and sleek charcoal hover accent (`#2D2E3A` / `#3F3F46`).
- [x] Streamlined **Top Navigation Bar Architecture & Enlarged Typography** ([components/Hero.tsx](file:///c:/kali/product/portfolio/components/Hero.tsx)):
  - **Streamlined Navigation Items**: Updated top header links strictly to **`HOME`**, **`WORK`**, and **`ABOUT`**, completely removing the dropdown arrow and sub-menu for a clean, minimal design.
  - **Enlarged Text Typography**: Scaled font sizes up to `text-sm sm:text-base lg:text-lg xl:text-xl font-mono font-black tracking-widest` for striking, highly legibile editorial navigation typography.

## What is Pending
- [ ] Implement About / Services / Research sections.
- [ ] Connect navigation links smoothly to their respective sections.






