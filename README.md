# 🌌 Ashwini Prajapati — AI & Data Systems Portfolio

> **Engineered for Scalable GenAI, Multimodal Voice Pipelines, Enterprise RAG & Data Analytics**

🌐 **Live Web Application**: [https://portfolio-gules-seven-73.vercel.app/](https://portfolio-gules-seven-73.vercel.app/)

Welcome to the production portfolio of **Ashwini Prajapati**. This web application showcases real production systems, deep technical case studies, verified career dossiers, and an interactive Cyberpunk telemetry suite.

---

## ⚡ Key Highlights & Features

### 🤖 1. Interactive AI Robot Avatar Mascot (`RobotAvatar.tsx`)
- Mouse pupil eye-tracking with real-time vector coordinate calculations.
- Spring physics tilt effects (`framer-motion`) and role-based typewriter speech balloon (`DATA ANALYST!`, `GENAI DEVELOPER!`, `404 REROUTE!`).
- Embedded across Hero headers, About biography, 404 error page, and Work archive.

### 🌌 2. Interactive Radial Skill Matrix (`Skills.tsx`)
- 8-node radial constellation measuring DOM bounding boxes with dynamic `ResizeObserver`.
- Smooth Catmull-Rom SVG bezier orbital paths and hub spoke connections.
- Deep glassmorphism Cyberpunk HUD inspector panel featuring real-time state inspection on hover/tap.

### 🎙️ 3. Detailed Production Case Studies (`app/work/[id]/page.tsx`)
- **Netran AI**: Autonomous, web-augmented, multimodal AI technical interviewer system (*FastAPI, Silero VAD v3, Faster-Whisper, Ollama Qwen2.5:3b, Kokoro TTS, SpeechBrain ECAPA-TDNN, Gemini API*).
- **ResumeBuilder**: Multi-stage LLM resume compiler & LaTeX synthesis pipeline (*React 19, FastAPI, LaTeX, SQLite, Gemini, Groq, Tavily*).
- **Auto Dash**: Enterprise HR analytics dashboard (*Next.js 16, Supabase RLS, Gemini 2.0 Flash, Recharts, ~150ms telemetry*).
- **StockMind AI**: Real-time AI financial analytics engine (*React, TypeScript, Zustand, Recharts, Groq AI, Finnhub API*).
- **Custom ASCII Architecture Schematics**: High-contrast, structured ASCII system flow diagrams (`getArchitectureBlueprint`).

### 💼 4. Career Experience Dossiers (`app/experience/[id]/page.tsx`)
- **GarunaCDX** (*GenAI Developer · Mar 2026 — Present*): Enterprise RAG, LLM reasoning loops, and voice agent pipelines.
- **AASHA Infinite Foundation** (*Data Analyst · Dec 2025 — Feb 2026*): ETL data extraction, operational telemetry, and performance dashboards.
- **Certificate Lightbox Modal**: Backdrop-blur zoom inspection for verified credentials with high-legibility document rendering.

### 🎨 5. Premium Aesthetics & Layout
- Dark/Light glassmorphism design system (`#060608` deep dark backgrounds + `#FDFDFE` content wrappers).
- Smooth inertia scrolling powered by Lenis (`SmoothScroll.tsx`).
- Standardized brand icons via `simple-icons` and UI controls via `lucide-react`.
- Responsive layout across Mobile (`< 640px`), Tablet (`640px - 1024px`), Desktop (`1024px - 1440px`), and Ultra-wide (`> 1440px`).

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | Next.js 14 (App Router), React 19, TypeScript |
| **Styling & Motion** | Tailwind CSS, Framer Motion, Lucide Icons, Simple Icons |
| **Backend & APIs** | FastAPI, Python 3.12, Uvicorn, Pydantic v2, REST & WebSockets |
| **AI / ML & Voice** | Ollama (DeepSeek-R1, Llama 3.3 70B), Gemini 2.0/3.6 Flash, Silero VAD v3, Faster-Whisper, Kokoro TTS, SpeechBrain ECAPA |
| **Data & Databases** | SQLite, Supabase RLS (PostgreSQL), SQLAlchemy, SQLModel |
| **DevOps & Audit** | Docker, Vercel Edge, Ruff, Bandit, Radon |

---

## 📂 Directory Structure

```
portfolio/
├── app/                        # Next.js 14 App Router Pages
│   ├── about/                  # About Biography & Credentials Route
│   ├── experience/[id]/        # Detailed Career Experience Dossiers
│   ├── work/                   # Work Archive Catalog with Category Filters
│   ├── work/[id]/              # Production Case Study Detail Pages
│   ├── not-found.tsx           # Custom 404 Cyberpunk Error Page
│   ├── layout.tsx              # Root Layout & Font Definitions
│   └── page.tsx                # Main Landing Page
├── components/                 # Reusable UI & Core Components
│   ├── Contact.tsx             # Neural Particle Footer & Social Bento Deck
│   ├── Experience.tsx          # Career Timeline Deck with SVG Wire Traces
│   ├── Navbar.tsx              # Light/Dark Variant Header Navigation
│   ├── Projects.tsx            # Spotlight Projects Catalog
│   ├── RobotAvatar.tsx         # Interactive AI Mascot with Pupil Tracking
│   ├── Skills.tsx              # 8-Node Radial Constellation & HUD Panel
│   ├── TechIcon.tsx            # Unified Vector Icon Mapping Component
│   └── TransitionLink.tsx      # Page Transition Router Links
├── lib/                        # Read-Only Datasets & Utilities
│   ├── experienceDetailData.ts # Experience Records & Responsibilities
│   ├── projectsDetailData.ts   # Detailed Case Studies & Architecture Specs
│   └── projectsData.ts         # Portfolio Spotlight Records
└── doc/                        # Project Specifications & Rules
    ├── current.md              # Live Progress Log & File Status
    ├── rule.md                 # Architectural Rules & Git Policies
    └── tech_stack.md           # System Technology Stack Documentation
```

---

## 🚀 Local Setup & Installation

### Prerequisites
- **Node.js**: `18.x` or higher
- **npm** or **yarn** / **pnpm**

### Step-by-Step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashwini-prajapati/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Connect & Socials

- **Live Web App**: [https://portfolio-gules-seven-73.vercel.app/](https://portfolio-gules-seven-73.vercel.app/)
- **GitHub**: [@ashwini-prajapati](https://github.com/ashwini-prajapati)
- **LinkedIn**: [Ashwini Prajapati](https://linkedin.com/in/ashwini-prajapati)
- **Hugging Face**: [@ashwini-prajapati](https://huggingface.co/ashwini-prajapati)
- **Kaggle**: [@ashwiniprajapati](https://kaggle.com/ashwiniprajapati)
- **Twitter / X**: [@ashwini_ai](https://twitter.com/ashwini_ai)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
