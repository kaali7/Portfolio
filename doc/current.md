# Current Status & Progress Summary

## 📂 Core Datasets & State (Read-Only Source of Truth)
- `lib/experienceDetailData.ts`: 100% dataset for experience dossiers (GarunaCDX, AASHA Infinite Foundation).
- `lib/projectsDetailData.ts`: 100% dataset for production case studies (Netran AI, ResumeBuilder, Auto Dash, StockMind AI).
- `lib/projectsData.ts`: Portfolio spotlight catalog records.

---

## 📄 Key Pages & Routes

### 1. Main Landing Page (`app/page.tsx`)
- **Smooth Curtains & Color Integrity**: Full-bleed 100% viewport curtain transitions without scale shrinking (eliminated `scale: 0.98` edge bleed), synchronized Lenis smooth scroll ticker with GSAP ScrollTrigger, and perfectly aligned section slide container backgrounds (`bg-white` for Projects & Experience, `bg-[#08080A]` for Hero, Skills & Contact).
- **Navigation & Hero**: `<Navbar variant="dark" />` with spacious height (`py-4 sm:py-5 lg:py-6`), enlarged typography, interactive cursor light spotlight effect, hero section with interactive `<RobotAvatar />` mascot, borderless Gaussian-blurred radial spotlight optical lens (with soft dark blurred vignette fadeout, real-time magnification & clarity boost over portrait `/me.png`, and chromatic holographic glow & zoom over hero text `I AM ASHWINI`), and interactive 3D animated `<HeroHudCard />` calibrated for standard 100% zoom.
- **Experience Timeline (`components/Experience.tsx`)**: Career history with dynamic SVG connecting thread wires, compact timeline track, and proportional career dossier cards with full-height white background (`min-h-full min-h-screen`, `pb-12 sm:pb-16`) eliminating bottom black gaps.
- **Projects Catalog (`components/Projects.tsx`)**: Asymmetrical bento grid with `<TechIcon />` technology badges, scaled-down blueprint media window, and sticky spotlight deck that persists the last hovered/tapped project without resetting to default on mouseleave.
- **Skill Constellation (`components/Skills.tsx`)**: Interactive 8-node radial matrix with Catmull-Rom SVG orbital ring, direct card-edge wire and pulse dot attachments, safe octagonal orbit radii within the 640px container, and a fixed-dimension Cyberpunk HUD detail card (`320px × 270px`) with compact typography and full untruncated description text.
- **Contact Footer (`components/Contact.tsx`)**: Full-height neural particle canvas, centered & enlarged AI robot avatar (`w-40` to `w-56`) with typewriter speech bubble, enlarged 1-click email copy card (`text-2xl` font & large mail icon), expanded social media bento cards (`min-h-[125px] sm:min-h-[150px]`, `w-12` icons), glassmorphic sub-footer nav bar, and rocket back-to-top launch button.

### 2. About Biography (`app/about/page.tsx`)
- **Hero & Mascot**: Scaled-down hero typography, metrics chips, interactive `<RobotAvatar size="lg" />` mascot, and compact Engineering Philosophy card calibrated for 100% zoom.
- **Milestones & Competencies**: GarunaCDX & AASHA Infinite milestones, 4-card technical matrix (`rotate: -1.5°/1.5°`), `<TechIcon />` pairings.
- **Credentials**: `<CredentialPreviewButton />` modal with popover certificate preview (`object-contain`).
- **Footer**: Integrated `<Contact />` with zero white gap layout.

### 3. Work Directory & Case Studies (`app/work/page.tsx`, `app/work/[id]/page.tsx`)
- **Hero Header**: Balanced 2-line hero title typography (`text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`) paired with robot mascot & live telemetry metrics HUD box.
- **Filter Bar**: Dynamic category pills & interactive search filtering by architectural keywords.
- **Asymmetrical Grid**: Streamlined card design with category/status badges, concise descriptions, blueprint media viewers, technology badges, stacked vertical action buttons (`VIEW CASE STUDY ↗` on top, `GITHUB` below) for standard 6-column cards, and horizontal side-by-side buttons for the featured 12-column flagship **Netran AI** card (which also includes the rich **System Overview & Architecture** box).
- **Dynamic Case Study Template (`app/work/[id]/page.tsx`)**: Completely redesigned with a unified balanced split hero (well-balanced `pt-6 sm:pt-8` top spacing under the sub-nav bar, 5-column left side with high-impact `text-4xl sm:text-5xl lg:text-[54px] font-black` title, inline `<RobotAvatar size="md" />` mascot with elevated stacking context `z-40` & `z-50` so its speech bubble overlays directly on top of the sticky subheader bar, category badges, concise pitch text, 2-column × 2-row telemetry spec grid, and seamlessly integrated Performance & Latency Benchmark metric cards), 7-column right-side visual architecture media canvas (`h-80 sm:h-96 md:h-[410px] lg:h-[430px]` with click-to-enlarge Lightbox modal, thumbnail gallery, and copyable ASCII Blueprint terminal), sticky in-page quick-navigation bar, 4-quadrant strategic narrative bento grid, sequential step-by-step pipeline workflow cards, comparative side-by-side engineering hurdles & architectural solutions, technical specifications matrix with `<TechIcon />` badges, and previous/next case study switcher cards.

### 5. Experience Details (`app/experience/[id]/page.tsx`)
- **100% Data Coverage**: Focus domain pills, competency matrix, responsibilities, project impact, and achievements.
- **Mascot & Lightbox**: `<RobotAvatar size="xl" />` mascot with role speech bubble, backdrop-blur Certificate Lightbox Modal, and project cross-links.

### 6. Custom 404 Error Page (`app/not-found.tsx`)
- Interactive 3.0σ deviation chip, mouse spotlight, AI reroute CTAs, and `<RobotAvatar size="xl" />` mascot (`404 REROUTE!`).

---

## 🧩 Shared Core Components

### `components/Contact.tsx`
- Neural particle gravity canvas, 1-click email copy with prominent typography, centered enlarged robot avatar with mouse eye-tracking & typing balloon, 5-card social bento grid (GitHub, LinkedIn, Hugging Face, Kaggle, Twitter/X) with enlarged brand icons, glassmorphic sub-footer nav bar (`HOME` • `ABOUT` • `WORK`), and rocket back-to-top launch physics.

### `components/TechIcon.tsx`
- Standardized brand logos via `simple-icons` and UI/conceptual tags via `lucide-react`. Strictly zero raw emojis.

### `components/RobotAvatar.tsx`
- Interactive AI Robot Avatar mascot with mouse pupil tracking, typewriter speech bubble, spring physics, and elevated z-index (`z-[60]` / `z-[70]` tooltip) ensuring speech bubbles overlap smoothly on top of navbars without clipping.

### `components/Navbar.tsx`
- Spacious layout (`py-4 sm:py-5 lg:py-6`), enlarged brand signature (`text-3xl sm:text-4xl`), enlarged nav typography (`text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest`), clean purple active/hover text coloring without bubble backgrounds or underlines, 100% transparent borderless header (`border-transparent`), sticky `z-40` navigation bar, and interactive cursor light spotlight effect (`useSpring`).

---

## 🚀 System Status & Documentation
- **Build Status**: 100% clean production build (`npm run build` static generation 6/6).
- **Layout & Scaling**: Full-bleed responsive view with generous, balanced side margins/gutters (`px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36`) across all landing sections and detail pages.
- **Documentation**: Updated `doc/current.md` and `README.md` following guidelines in `doc/rule.md`.
- **Git Branch**: `main`.
