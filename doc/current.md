# Current Status & Progress Summary

## 📂 Core Datasets & State (Read-Only Source of Truth)
- `lib/experienceDetailData.ts`: 100% dataset for experience dossiers (GarunaCDX, AASHA Infinite Foundation).
- `lib/projectsDetailData.ts`: 100% dataset for production case studies (Netran AI, ResumeBuilder, Auto Dash, StockMind AI).
- `lib/projectsData.ts`: Portfolio spotlight catalog records.

---

## 📄 Key Pages & Routes

### 1. Main Landing Page (`app/page.tsx`)
- **Smooth Curtains & Color Integrity**: Full-bleed 100% viewport curtain transitions without scale shrinking (eliminated `scale: 0.98` edge bleed), synchronized Lenis smooth scroll ticker with GSAP ScrollTrigger, and perfectly aligned section slide container backgrounds (`bg-white` for Projects & Experience, `bg-[#08080A]` for Hero, Skills & Contact).
- **Navigation & Hero (Desktop & Bespoke Mobile)**:
  - **Desktop (100% Intact & Parity Guaranteed)**: `<Navbar variant="dark" />` with spacious height (`py-4 sm:py-5 lg:py-6`), enlarged typography, interactive cursor light spotlight effect, desktop 3D animated `<HeroHudCard />` (`hidden sm:block`), borderless Gaussian-blurred radial spotlight optical lens (with soft dark blurred vignette fadeout, real-time magnification & clarity boost over portrait `/me.png`, and chromatic holographic glow & zoom over hero text `I AM ASHWINI`), and desktop absolute `<RobotAvatar />` with mouse eye-tracking.
  - **Mobile-Optimized Navbar & Menu**: Cyberpunk morphing animated hamburger button featuring theme-adaptive contrast lines in both dark and light modes, an elevated top-level stacking context (`z-[999]`), a 100% opaque solid dropdown surface preventing underlying page text or robot avatars from bleeding through, and a dimming background backdrop overlay with spring tap feedback.
  - **Bespoke Mobile Architecture (`block md:hidden`)**: Fully tailored vertical layout solving mobile viewport clipping and empty space issues. Features a live `SYS.ONLINE // 12ms` pulsing emerald telemetry pill, naturally integrated tap-interactive `<RobotAvatar size="sm" />` co-pilot with bottom speech bubble (`"HELLO! 👋 TAP TO CHAT"`), punchy `AI & DATA SCIENTIST` eyebrow badge, scaled high-impact `I AM ASHWINI` typography, centered portrait with smooth grounding fade, high-contrast mobile action CTAs (`EXPLORE WORK ↗` & `GET IN TOUCH`), and horizontal tech stack tags.
- **Experience Timeline (`components/Experience.tsx`)**:
  - **Desktop (100% Intact)**: Career history with dynamic SVG connecting thread wires, compact timeline track, and proportional career dossier cards with full-height white background (`min-h-full min-h-screen`, `pb-12 sm:pb-16`) eliminating bottom black gaps.
  - **Mobile-Optimized (`< lg`)**: Synchronized 2-tab stepper strip (`[ 01 AASHA FOUNDATION ] [ 02 GARUNACDX ]`), interactive swipable spotlight dossier card (`drag="x"` touch gestures + vertically centered side `<` and `>` navigation buttons on card edges), compact role title & `text-[11px]` overview, structured primary deliverable box in full alongside a compact dashed `+2 MORE RESPONSIBILITIES` dossier link box, 2-row bento highlights grid (Row 1: `CORE FOCUS` & `STATUS`; Row 2: full-width `LOCATION` + Globe badge), rich `<TechIcon />` badges, and full-width `EXPLORE FULL DOSSIER ↗` CTA.
- **Projects Catalog (`components/Projects.tsx`)**:
  - **Desktop (100% Intact)**: Asymmetrical bento grid with `<TechIcon />` technology badges, scaled-down blueprint media window, streamlined minimalist `Featured Projects` header, floating Previous/Next switch buttons, touch/swipe drag support, and sticky stacked rotated switcher deck that persists the hovered/tapped project without resetting on mouseleave.
  - **Mobile-Optimized (`< lg`)**: Minimalist `Featured Projects` header, synchronized horizontal project selector tab strip that automatically auto-scrolls with the active project (`[01 Netran AI] ... [04 StockMind AI] [More Projects ↗]`), solid pure black spotlight background without purple gradient haze, ultra-clean 5th card showcasing a pulsing beacon, large serif italic **`more`** typography, and a direct `VIEW ALL WORK ↗` button, touch swipe-by-hand gesture support (`drag="x"` with elastic physics for switching left/right across all 5 cards), non-intrusive previous/next chevron buttons positioned over the media window corners without covering text, balanced 3-column KPI metrics row (`Latency`, `Speed`, `Subcategory`), and full-width high-converting CTA (`VIEW FULL CASE STUDY ↗`).
- **Skill Constellation (`components/Skills.tsx`)**:
  - **Desktop (100% Intact)**: Interactive 8-node radial matrix with Catmull-Rom SVG orbital ring, direct card-edge wire and pulse dot attachments, safe octagonal orbit radii within the 640px container, and a fixed-dimension Cyberpunk HUD detail card (`320px × 270px`) with compact typography and full untruncated description text.
  - **Mobile-Optimized (`< lg`)**: Interactive vertical **SKILL TREE** circuit timeline spine with glowing continuous neon wire and node junction circles. Expanded active domain displays a micro-calibrated Cyberpunk HUD architecture dossier (`01 // ARCHITECTURE`, `text-[7.5px]` benchmark metric pill, `text-[10px]` description, inline `CORE.STACK` `<TechIcon />` badges, and inline `PROVEN IN` case study links). Collapsed domains display ultra-sleek 1-line bars (`[Icon] [Domain Title]` on the left, `● [Count] CORE TECHS` on the right) that expand on tap with smooth Framer Motion layout animation.
- **Contact Footer (`components/Contact.tsx`)**:
  - **Desktop (100% Intact)**: Full-viewport (`100vh`) neural particle stream canvas, 12-column bento wireframe layout with centered talking AI robot avatar (`w-56`), 1-click email copy card (`text-2xl` font), expanded 5-column social media bento grid (`min-h-[150px]`, `w-14` icons), floating telemetry badge, glassmorphic sub-footer quick navigation, and rocket back-to-top launch button.
  - **Mobile-Optimized (`< lg`)**: Fixed-height speech balloon (`h-[64px]`) and locked mascot card (`h-[195px]`) ensuring zero layout shifting or card resizing during typewriter animation, compact natural height (no forced 100dvh stretching), tightened vertical padding & balanced `gap-3` card spacing, proportionate mobile robot mascot (`w-24`), touch-friendly 1-click email copy row with responsive font scaling (`text-xs` to `text-lg`), 1-row 5-column icon-only social media bar with clean title clearance (`mb-2.5`, `grid-cols-5`, `h-11 sm:h-12`), and streamlined 2-row sub-footer (Row 1: signature & copyright inline; Row 2: quick navigation pill + side-by-side back-to-top button).

### 2. About Biography (`app/about/page.tsx`)
- **Hero & Mascot**: Scaled-down hero typography, metrics chips, interactive `<RobotAvatar size="lg" />` mascot, and compact Engineering Philosophy card calibrated for 100% zoom.
- **Milestones & Competencies**: Mobile-optimized career milestones with role and duration pill side-by-side on the top line, company subtitle, clean summary text, and horizontal side-by-side action buttons (`VIEW CREDENTIAL` and `MORE DETAILS →`). 4-card technical matrix (`rotate: -1.5°/1.5°`), `<TechIcon />` pairings.
- **Credentials**: `<CredentialPreviewButton />` modal with popover certificate preview (`object-contain`).
- **Footer**: Integrated `<Contact />` with zero white gap layout.

### 3. Work Directory & Case Studies (`app/work/page.tsx`, `app/work/[id]/page.tsx`)
- **Hero Header**: Balanced 2-line hero title typography (`text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`) paired with robot mascot & live telemetry metrics HUD box.
- **Filter Bar**: Dynamic category pills & interactive search filtering by architectural keywords.
- **Asymmetrical Grid**: Streamlined card design with 1-line compact micro-telemetry header badges on mobile (`text-[8px]`), centered top 3 tech stack tags with a `+X MORE` pill on mobile (full tags on desktop), horizontally centered single-line action buttons with strict `whitespace-nowrap` (`GITHUB` & `VIEW CASE STUDY ↗`) across all project cards on phone size, concise descriptions, blueprint media viewers, technology badges, and featured 12-column flagship **Netran AI** card (which includes the rich **System Overview & Architecture** challenge/motivation/solution box on desktop, neatly hidden on mobile phones `hidden lg:block` to keep mobile cards compact).
- **Dynamic Case Study Template (`app/work/[id]/page.tsx`)**: Completely redesigned with a unified balanced split hero (well-balanced `pt-6 sm:pt-8` top spacing under the sub-nav bar, 5-column left side with high-impact `text-4xl sm:text-5xl lg:text-[54px] font-black` title, inline `<RobotAvatar size="md" />` mascot with elevated stacking context `z-40` & `z-50` so its speech bubble overlays directly on top of the sticky subheader bar, category badges, concise pitch text, 2-column × 2-row telemetry spec grid, and seamlessly integrated Performance & Latency Benchmark metric cards), 7-column right-side visual architecture media canvas (`h-80 sm:h-96 md:h-[410px] lg:h-[430px]` with click-to-enlarge Lightbox modal, thumbnail gallery, and copyable ASCII Blueprint terminal), sticky in-page quick-navigation bar, 4-quadrant strategic narrative bento grid, sequential step-by-step pipeline workflow cards, comparative side-by-side engineering hurdles & architectural solutions, technical specifications matrix with `<TechIcon />` badges, and previous/next case study switcher cards.

### 5. Experience Details (`app/experience/[id]/page.tsx`)
- **100% Data Coverage**: Focus domain pills, competency matrix, responsibilities, project impact, and achievements.
- **Mascot & Lightbox**: `<RobotAvatar size="xl" />` mascot with role speech bubble, backdrop-blur Certificate Lightbox Modal, and project cross-links.

### 6. Custom 404 Error Page (`app/not-found.tsx`)
- Interactive 3.0σ deviation chip, mouse spotlight, AI reroute CTAs, and `<RobotAvatar size="xl" />` mascot (`404 REROUTE!`).

---

## 🧩 Shared Core Components

### `components/Contact.tsx`
- Neural particle gravity canvas, 1-click email copy card (`ashwiniprajapati411@gmail.com`) with prominent typography, centered enlarged robot avatar with mouse eye-tracking & typing balloon, 5-card social bento grid (GitHub `@kaali7`, LinkedIn `ashwini369`, Hugging Face `@kali369`, Kaggle `@kali79`, Twitter/X `@ashwinik369`) with enlarged brand icons, glassmorphic sub-footer nav bar (`HOME` • `ABOUT` • `WORK`), and rocket back-to-top launch physics.

### `components/TechIcon.tsx`
- **100% Comprehensive Tech Icon Coverage**: Standardized brand logos via `simple-icons` (Python, Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow, OpenCV, ONNX, React, Next.js, TypeScript, JavaScript, Node.js, Vite, Tailwind CSS, CSS Modules, Framer Motion, FastAPI, Flask, SQLAlchemy, Pydantic, OpenAPI, Scalar, PostgreSQL, SQLite, MongoDB, Supabase, Qdrant, Google Gemini, Ollama, Hugging Face, LangChain, Spotify, Docker, Git, GitHub, Vercel, n8n, Pytest, Vitest, React Testing Library, Zod, Ruff, LaTeX, Google Docs, Google Sheets, Linux, Apple, Bash), `@tabler/icons-react` (AWS, OpenAI), and semantic `lucide-react` (Voice AI, STT/TTS, ECAPA speaker verification, Groq, LLaMA, FAISS, search APIs, Kivy/GUI, multimedia, backend servers, and architecture concepts). Integrated across project cards, case study technical specifications, architecture concepts, experience dossiers, and skills constellations. Strictly zero raw emojis.

### `components/RobotAvatar.tsx`
- Interactive AI Robot Avatar mascot with mouse pupil tracking, typewriter speech bubble, spring physics, and elevated z-index (`z-[60]` / `z-[70]` tooltip) ensuring speech bubbles overlap smoothly on top of navbars without clipping.

### `components/Navbar.tsx`
- Spacious layout (`py-4 sm:py-5 lg:py-6`), enlarged brand signature (`text-3xl sm:text-4xl`), enlarged nav typography (`text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest`), clean purple active/hover text coloring without bubble backgrounds or underlines, 100% transparent borderless header (`border-transparent`), sticky `z-40` navigation bar, and interactive cursor light spotlight effect (`useSpring`).

---

## 🚀 System Status & Documentation
- **Build Status**: 100% clean production build (`npm run build` static generation 6/6).
- **Projects Catalog & Case Studies**: 8 comprehensive projects integrated (`netran-ai`, `resumebuilder`, `ai-powered-hr-dashboard`, `stockmind-ai`, `auraflow-music-recommendation`, `animal-gui`, `golift` GoLift Ecosystem, `financeflow` FinanceFlow).
- **Experience & Education Dossiers**: Linked real project case studies including Auto Dash HR Dashboard under the GarunaCDX experience dossier, GarunaCDX certificate proof, and officially converted high-res CSRBOX Applied AI Internship Certificate (`2250x3175` px) with interactive `CredentialPreviewButton` floating hover preview on the `/about` page.
- **Layout & Scaling**: Multi-breakpoint responsive grid system (`xs` 375px, `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px, `3xl` 1600px+) across all landing sections, interactive widgets, modal overlays, and sub-pages.
- **Verified Identity**: Real developer email (`ashwiniprajapati411@gmail.com`), handles & profile links integrated across `doc/rule.md`, `components/Contact.tsx`, and `README.md`.
- **LinkedIn Banner Asset**: Updated `banner.html` and re-rendered `linkedin_banner.png` (3168×792px, 2x Retina HD) with left-aligned contact handles block (`github.com/kaali7` & `ashwiniprajapati411@gmail.com`), 2-row tech pills, and clean avatar clearance.
- **Documentation**: Updated `doc/current.md`, `doc/rule.md`, and `README.md` following guidelines in `doc/rule.md`.
- **Markdown & External URL Sanitizer (`lib/urlUtils.ts`)**: Built central `cleanUrl` helper to parse and extract valid external HTTP/HTTPS URLs from Markdown link strings (e.g. `[label](url)` in dataset files). Integrated across `app/work/[id]/page.tsx`, `app/work/page.tsx`, and `app/experience/[id]/page.tsx`, resolving the 404 routing error when clicking "View Repository" or "Live App" buttons while strictly honoring Rule 5 (Dataset Integrity).
- **Netran AI Project Dossier (`lib/projectsDetailData.ts`)**: Fully synchronized with `plan/netrain_info.json`. Updated card details, technical stack (Python 3.11+, FastAPI, React 18, Vite, Faster-Whisper, Silero VAD, Kokoro-82M TTS, Ollama Qwen 2.5, Web Audio API Worklet), full-duplex Level 2 TurnManager architecture, comprehensive research/experiments, engineering solutions, and icon mappings in `components/TechIcon.tsx`.
- **Git Branch**: `main`.
