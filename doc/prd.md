# Product Requirements Document (PRD)

## 1. Product Overview & Vision
- **Product Name:** Ashwini — Data Science & AI Portfolio
- **Product Type:** Personal portfolio website.
- **Primary Goal:** A premium, visually distinctive portfolio presenting Ashwini as a Data Scientist / AI Engineer (ML, Deep Learning, GenAI).
- **Vision:** Creative Portfolio × AI Research Lab × Editorial Web Design.
- **Vibe:** Modern, premium, minimal, intelligent, experimental.

## 2. Target Audience
- **Primary:** Recruiters, hiring managers, Data Science teams, AI/ML engineers.
- **Goal:** Immediately convey who Ashwini is, what she works on, and showcase her projects and research.

## 3. Information Architecture & Navigation
- **Pages/Sections:** Home, About, Projects, Research, Skills, Experience, Writing/Deep Dives, Contact.
- **Homepage Flow:** Hero → Who I Am → Selected Projects → Research → Skills → Experience → Writing → Contact.
- **Nav Items:** Work, Archive, Process, About, Let's Build.

## 4. Visual Design & Theme
- **Color Palette:**
  - **Black (`#050505`):** Backgrounds, structure, depth.
  - **White (`#FFFFFF`):** Text, clarity, light sections.
  - **Purple (`#8B5CF6`, `#A855F7`):** Accents, data viz, interactive elements.
  - **Off-White (`#F5F5F5`):** Optional light sections.
- **Typography:**
  - **Primary:** Inter, Manrope, or Plus Jakarta Sans (Large editorial typography).
  - **Metadata:** Subtle monospace font.
- **Visual Rhythm:** Alternating dark (Black) and light (White/Off-White) sections.

## 5. Key Sections Requirements
### Hero Section
- **Concept:** Centered transparent portrait, oversized typography, black background, subtle purple data viz.
- **Text:** "DATA SCIENTIST × AI", "ASHWINI", "Building with data, models & intelligence."
- **Portrait:** Cleanly isolated, natural, transparent background, integrated as artwork (no standard cards or circles).
- **CTAs:** Minimal text links (e.g., "VIEW WORK →").

### Who I Am
- **Concept:** Light section, large rounded container.
- **Text:** "I turn data into intelligent ideas." + short bio.
- **Visual:** Simple 2D flow (Data → Model → Insight).

### Projects
- **Concept:** Showcase featured projects on home, detailed case studies on `/projects` (AI/ML, Data Science, GenAI, Full-Stack).
- **Case Study Details:** Problem, Approach, Architecture, Tech, Contribution, Results, Demo/Repo.
- **Visuals:** Project-specific animated data visuals (e.g., charts, node graphs).

### Research & Writing
- **Research:** Focus on investigation (papers, experiments). Use diagrams, timelines, equations.
- **Writing:** Deep dives, technical articles. Minimalist list format.

### Skills & Experience
- **Skills:** Grouped by category (AI/ML, Data, Engineering, AI Systems). No arbitrary rating stars. Optional interactive 2D node map.
- **Experience:** Editorial timeline. Highlight role, stack, contributions, and results.

### Contact
- **Concept:** Simple text ("Let's build something intelligent.") + links (Email, GitHub, LinkedIn, Resume). No complex forms.

## 6. UI & Animation System
- **Style:** Smooth, slow, elegant 2D animations (not 3D). Inspired by data, networks, algorithms.
- **Examples:** Traveling data points, drawing lines, subtle parallax, text reveal, hover highlights.
- **Shapes:** Soft and refined components. Rounded buttons/cards (24px–32px radius) but not entirely pill-shaped. Subtle borders and minimal shadows.
- **Rules:** Avoid explosions, heavy glow, fast flashing, generic decorative shapes.

## 7. Technical Requirements
- **Responsive:** Desktop (full editorial), Tablet (reduced density), Mobile (simplified viz, portrait central).
- **Performance:** Optimized images (WebP/AVIF), lazy-loading, GPU-friendly transforms, lightweight initial load.
- **Accessibility:** High contrast, semantic HTML, keyboard nav, reduced-motion support.

## 8. What to Avoid
- Generic templates, SaaS layouts, cyberpunk styles, 3D AI/robot imagery.
- Excessive purple, glassmorphism, or gradients.
- Massive text blocks, skill percentage bars, generic project card grids.
