export interface ProjectCard {
  shortDescription: string;
  tags: string[];
}

export interface ProjectVisual {
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  video: string;
}

export interface ProjectOverview {
  problem: string;
  motivation: string;
  solution: string;
  outcome: string;
}

export interface ProjectTechnical {
  techStack: string[];
  concepts: string[];
  models: string[];
  datasets: string[];
  apis: string[];
  infrastructure: string[];
}

export interface ProjectArchitecture {
  type: string;
  diagram: string;
  workflow: string[];
}

export interface ProjectResearch {
  researchQuestion: string;
  methodology: string;
  experiments: string[];
  findings: string[];
  references: string[];
}

export interface ProjectEngineering {
  challenges: string[];
  solutions: string[];
  performance: string[];
  scalability: string[];
}

export interface ProjectLinks {
  github: string;
  live: string;
  demo: string;
  paper: string;
}

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  subcategory: string;
  type: string;
  status: string;
  year: number;
  featured: boolean;
  card: ProjectCard;
  visual: ProjectVisual;
  overview: ProjectOverview;
  features: string[];
  technical: ProjectTechnical;
  architecture: ProjectArchitecture;
  research: ProjectResearch;
  engineering: ProjectEngineering;
  learnings: string[];
  links: ProjectLinks;
}

export const projectsDetailData: ProjectDetail[] = [
    {
        "id": "netran-ai",
        "number": "",
        "title": "Netran AI",
        "category": "AI Engineering",
        "subcategory": "Voice AI",
        "type": "AI System",
        "status": "in-progress",
        "year": 2026,
        "featured": false,
        "card": {
            "shortDescription": "Netran AI is an autonomous, web-augmented, multimodal AI technical interviewer system that simulates corporate interview loops using continuous real-time voice interaction and multi-branch evaluation.",
            "tags": [
                "Python",
                "FastAPI",
                "Next.js",
                "React",
                "Ollama",
                "Google Gemini API",
                "Faster-Whisper",
                "Kokoro TTS",
                "Silero VAD",
                "SQLite"
            ]
        },
        "visual": {
            "thumbnail": "",
            "heroImage": "",
            "gallery": [],
            "video": ""
        },
        "overview": {
            "problem": "",
            "motivation": "",
            "solution": "A multi-stage AI system powered by a 4-stage model architecture (JD research, resume-to-JD cross-matching, live streaming voice-to-voice interaction loop, and post-session multimodal evaluation) orchestrated via a unified workflow.",
            "outcome": "Completed MVP Phase with covered and operational 4-stage pipeline, featuring continuous PCM recording, millisecond-precision timing telemetry, dynamic whisper vocabulary injection, and sub-250ms TTFA neural speech output."
        },
        "features": [
            "Stage 1 — JD Research & Market Intelligence Engine: Parses JDs, queries live engineering sources (LeetCode, Glassdoor, GitHub, GeeksforGeeks, Reddit) via Tavily Search API, synthesizes rubrics using Gemini 3.6 Flash, and caches results in SQLite",
            "Stage 2 — Contextual Question & Behavioral Prompt Engine: Parses candidate resumes (.pdf, .docx, .txt, .tex), performs skill-gap cross-matching, generates a 15-question tree across 3 difficulty tiers, and embeds whisper_domain_vocabulary inside interviewer_behavior.json",
            "Stage 3 — Live Voice-to-Voice Streaming Loop: Real-time voice loop using Silero VAD v3, Faster-Whisper int8 STT, SpeechBrain ECAPA-TDNN speaker verification, local Ollama Qwen2.5:3b streaming LLM reasoning, hybrid turn-taking classifier, and Kokoro-82M neural TTS",
            "Stage 4 — Post-Session Multimodal Evaluation Engine: Slices continuous audio into turn WAV clips and runs a 3-branch Gemini Multimodal Evaluation (Audio Branch, Technical Branch, Combine Branch) to produce report.json and evaluation_summary.md",
            "Multi-Format Ingestion: Resume parsing (.pdf via pypdf, .docx via python-docx, .txt/.tex) and JD text extraction into structured Pydantic schemas (CandidateProfile, ParsedJD)",
            "Enterprise API & Security Layer: FastAPI REST endpoints, WebSocket binary audio streaming (/api/v1/voice/stream/{session_id}), OAuth2 JWT auth with Bcrypt/Argon2, and RBAC",
            "Browser & Client Audio Engine: Web Audio API Worklet converting microphone streams to 16kHz 16-bit Mono PCM bytes with client-side interruption clearing (barge-in)",
            "Smart SQLite Caching & Deduplication: SHA-256 fingerprinting on Resume + JD input hashes to prevent redundant LLM and web search calls",
            "Unified Desktop & Web UI Support: 6-screen Kivy desktop orchestrator app and Next.js React frontend",
            "Automated Quality & Dependency Scanner: Quality audit suite integrating Ruff, Bandit, Radon, and Pylint/Mypy"
        ],
        "technical": {
            "techStack": [
                "Python 3.12",
                "FastAPI",
                "Uvicorn",
                "Starlette",
                "SQLAlchemy",
                "SQLModel",
                "SQLite",
                "Pydantic v2",
                "Next.js",
                "React 19",
                "Tailwind CSS",
                "Kivy",
                "PyTorch",
                "ONNX Runtime",
                "httpx",
                "BeautifulSoup4",
                "lxml",
                "pypdf",
                "python-docx",
                "Ruff",
                "Bandit",
                "Radon"
            ],
            "concepts": [
                "Voice Activity Detection (VAD)",
                "Speech-to-Text (STT)",
                "Text-to-Speech (TTS)",
                "Speaker Verification",
                "Multimodal Evaluation Pipeline",
                "Hybrid Turn-Taking Classification",
                "Web Audio Worklet Transport",
                "Input-Hash Deduplication",
                "Web Search Augmentation"
            ],
            "models": [
                "gemini-3.6-flash",
                "qwen2.5:3b",
                "Systran/faster-whisper-small",
                "hexgrad/Kokoro-82M",
                "speechbrain/spkrec-ecapa-voxceleb",
                "Silero VAD v3"
            ],
            "datasets": [],
            "apis": [
                "Google Gemini API",
                "Tavily Search API"
            ],
            "infrastructure": [
                "Ollama"
            ]
        },
        "architecture": {
            "type": "Multi-Stage AI Pipeline",
            "diagram": "",
            "workflow": [
                "User uploads resume and inputs Job Description (or uses built-in demo data)",
                "Stage 1 parses JD, queries engineering web sources via Tavily API, synthesizes evaluation rubric using Gemini 3.6 Flash, and checks/saves to SQLite cache",
                "Stage 2 parses candidate resume, performs skill-gap matrix matching, builds 15-question tree across 3 difficulty tiers, and generates system prompt with custom whisper domain vocabulary",
                "Stage 3 executes live voice interaction: Silero VAD detects voice, SpeechBrain ECAPA verifies candidate speaker identity, Faster-Whisper transcribes speech using domain vocabulary, local Ollama Qwen2.5:3b streams LLM responses, hybrid turn-taking classifier resolves interruptions, and Kokoro-82M generates TTS audio playback",
                "Microphone audio is saved to continuous recording.wav alongside a millisecond-precision transcript.json manifest",
                "Stage 4 slices recording.wav into per-turn WAV clips and runs 3-branch Gemini multimodal evaluation (Audio, Technical, Combined) with exponential backoff retry to output report.json and evaluation_summary.md"
            ]
        },
        "research": {
            "researchQuestion": "",
            "methodology": "",
            "experiments": [],
            "findings": [],
            "references": []
        },
        "engineering": {
            "challenges": [
                "PortAudio stream lockups on Windows caused by fixed room noise levels during voice detection",
                "API rate limits (429 errors) during post-session multimodal evaluation",
                "Interruption handling and latency during live voice loops",
                "Foreign speech or background voices interfering with speech recognition",
                "Memory swapping overhead from running multiple local AI models"
            ],
            "solutions": [
                "Implemented inline dynamic noise floor calibration sampling room noise during the first 960ms of listening alongside adaptive noise floor gates and high-pass IIR filtering",
                "Integrated 3-branch Gemini Multimodal Evaluation Engine with exponential backoff rate-limit retry handling",
                "Implemented dynamic barge-in interruption events using Web Audio API Worklet to instantly clear client playback queues upon receiving INTERRUPT signals",
                "Added SpeechBrain ECAPA-TDNN speaker verification (192-dim embedding) for candidate identity auto-enrollment to reject foreign speech",
                "Aligned the hybrid turn-taking classifier to use the active Ollama model (qwen2.5:3b) to prevent memory swapping overhead"
            ],
            "performance": [
                "Under 250ms Time-To-First-Audio (TTFA) for Kokoro-82M neural TTS streaming playback",
                "Instant cache retrieval (< 1s) for previously processed JDs using SHA-256 SQLite fingerprinting"
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/netran-ai](https://github.com/kaali7/netran-ai/blob/main/backend)",
            "live": "",
            "demo": "",
            "paper": ""
        }
    },
    {
        "id": "resumebuilder",
        "number": "",
        "title": "ResumeBuilder",
        "category": "Full-Stack AI",
        "subcategory": "LLM Application",
        "type": "Full-Stack Application",
        "status": "completed",
        "year": 2026,
        "featured": false,
        "card": {
            "shortDescription": "ResumeBuilder is a React SPA and FastAPI backend system that runs a multi-stage LLM pipeline to generate, edit, evaluate, and compile ATS-optimized resumes with automated LaTeX PDF rendering.",
            "tags": [
                "React",
                "FastAPI",
                "Python",
                "LaTeX",
                "SQLite",
                "Google Gemini",
                "Groq",
                "Vite"
            ]
        },
        "visual": {
            "thumbnail": "",
            "heroImage": "",
            "gallery": [],
            "video": ""
        },
        "overview": {
            "problem": "",
            "motivation": "",
            "solution": "A full-stack application connecting a React SPA to an asynchronous FastAPI backend that executes a multi-stage LLM pipeline (web research, structured JSON content generation, LaTeX source generation, and PDF compilation) with built-in 4-layer evaluation analytics and golden dataset inspection.",
            "outcome": ""
        },
        "features": [
            "Multi-stage LLM generation pipeline for ATS-optimized resumes",
            "Stage 0.5 Tavily Web Research integration for role and company market intelligence when a Job Description is provided",
            "Stage 1 LLM Content Generation to produce structured resume sections",
            "Stage 2 LaTeX source code generation and Stage 2.5 PDF compilation",
            "Dual compilation strategy (Local pdflatex binary execution with external texlive.net API fallback)",
            "SVG thumbnail rendering from LaTeX",
            "Resume CRUD management with SQLite persistence",
            "4-Level Layer Evaluation Analytics Inspector (Component L1, Pipeline L2, Application L3, Regression L4) with dynamic run selection",
            "Unified Stage Comparison Diff view for snapshot diffing and regression detection",
            "Golden Dataset Browser and Split Workspace Inspector for Stage 1 JSON ground truth fixtures and Stage 2 LaTeX ground truth templates",
            "Live PDF preview with embedded Blob URL viewing",
            "Category and knowledge-base context browser across 9 active domain categories",
            "Job Description parser and analyzer for extracting keywords, titles, summaries, and category suggestions",
            "Dark/Light theme toggle persisted in localStorage",
            "Key-rotation system for LLM provider access"
        ],
        "technical": {
            "techStack": [
                "React 19",
                "Vite 8",
                "React Router 7",
                "CSS Modules",
                "JavaScript (JSX)",
                "FastAPI",
                "Python 3.10+",
                "SQLite",
                "SQLAlchemy 2.0",
                "aiosqlite",
                "Pydantic v2",
                "pydantic-settings",
                "httpx",
                "uvicorn",
                "pytest",
                "pytest-asyncio",
                "pytest-mock",
                "oxlint"
            ],
            "concepts": [
                "Multi-Stage LLM Pipeline",
                "LaTeX Compilation Engine",
                "Automated Regression Evaluation",
                "Golden Dataset Benchmarking",
                "API Fallback Chains",
                "Asynchronous I/O Operations",
                "Dynamic Key Rotation"
            ],
            "models": [
                "gemini-3.5-flash",
                "llama-3.3-70b-versatile"
            ],
            "datasets": [
                "stage1_golden.json",
                "stage2_golden.json",
                "skills_database.json"
            ],
            "apis": [
                "Google Gemini API",
                "Groq API",
                "Tavily Search API",
                "texlive.net API"
            ],
            "infrastructure": []
        },
        "architecture": {
            "type": "Multi-Stage AI Pipeline",
            "diagram": "",
            "workflow": [
                "User submits resume data and optional Job Description via POST /api/v1/resume/generate",
                "Backend validates input request format and category existence",
                "Upserts Resume record in SQLite database",
                "Executes Stage 0.5 Tavily Web Research for market intelligence if a Job Description is provided (with 12-hour local cache check)",
                "Executes Stage 1 LLM Content Generation by combining category knowledge base, web research context, user data, and compressed JD",
                "Validates LLM JSON output against required sections schema",
                "Executes Stage 2 LaTeX Code Generation to convert structured sections into modern LaTeX source code",
                "Executes Stage 2.5 PDF Compilation attempting local pdflatex binary execution with fallback to external texlive.net API",
                "Executes Stage 3 AI Resume Evaluation if benchmark test flag is set",
                "Stores generated outputs (JSON, LaTeX, PDF, SVG thumbnail) to physical disk storage and updates database record"
            ]
        },
        "research": {
            "researchQuestion": "",
            "methodology": "",
            "experiments": [],
            "findings": [],
            "references": []
        },
        "engineering": {
            "challenges": [
                "LLM rate limits and API quota restrictions",
                "Web research query failures due to strict domain filters",
                "Potential collision between user-created resumes and test/benchmark datasets",
                "Local LaTeX compilation environment dependencies"
            ],
            "solutions": [
                "Implemented multi-backend fallback chain (Google Gemini with 4-key rotation falling back to Groq with 3-key rotation)",
                "Implemented automatic fallback to unrestricted web search if Tavily domain-filtered query yields zero results",
                "Isolated physical disk storage and distinct SQLite databases for user resumes versus test/benchmark datasets",
                "Implemented dynamic PDF compilation pipeline using local pdflatex binary with automatic fallback to external texlive.net HTTP API"
            ],
            "performance": [],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/ResumeBuilder](https://github.com/kaali7/ResumeBuilder)",
            "live": "",
            "demo": "",
            "paper": ""
        }
    },
    {
        "id": "ai-powered-hr-dashboard",
        "number": "",
        "title": "Auto Dash: AI-Powered HR Dashboard",
        "category": "Full-Stack AI",
        "subcategory": "HR Analytics",
        "type": "Web Application",
        "status": "in-progress",
        "year": 2026,
        "featured": false,
        "card": {
            "shortDescription": "An advanced, high-fidelity AI-powered HR dashboard application that allows users to upload datasets and automatically generates interactive workspaces featuring deep data insights, KPIs, and predictive workforce telemetry using Gemini AI.",
            "tags": [
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Tailwind CSS",
                "Framer Motion",
                "Recharts",
                "Google Gemini API"
            ]
        },
        "visual": {
            "thumbnail": "",
            "heroImage": "",
            "gallery": [],
            "video": ""
        },
        "overview": {
            "problem": "",
            "motivation": "",
            "solution": "An AI-powered dashboard application that processes raw CSV dataset uploads using Gemini AI to automatically generate custom interactive layouts, technical charts, data insights, and statistical workforce telemetry.",
            "outcome": "Achieved 91% completion status (43/47 issues resolved) with precomputed aggregations reducing complex chart loading times down to ~150ms."
        },
        "features": [
            "AI Dashboard Generation - Gemini 2.0 Flash analyzes datasets to suggest optimal charts, axes, and interactive layouts",
            "Analysis Console - Dedicated cross-project hub for exploring deep AI-generated insights, trends, and outliers using the modular InsightCard system",
            "Enterprise Security - Supabase Auth, Row-Level Security (RLS) on all 9 tables, rate limiting, and deep MIME-type dataset validation",
            "High-Fidelity Telemetry - Premium 'Nixtio' design aesthetics with frosted glass, background gradients, and fluid motion via Framer Motion",
            "Automated Data Profiling - Instant detection of column types, statistical distributions, and data quality metrics",
            "Preview-then-Save - Workflow allowing users to validate AI-generated projections before publishing to the workspace",
            "Full API Documentation - Interactive OpenAPI/Scalar documentation available at /api-docs",
            "Testing Infrastructure - Vitest with 50+ test cases covering core utilities",
            "Bento-Grid Layouts - Dynamic positioning of charts including Bar, Line, Pie, Donut, Area, Histogram, Scatter, Radar, and Treemap charts"
        ],
        "technical": {
            "techStack": [
                "Next.js 16 (App Router)",
                "React 19",
                "TypeScript",
                "Supabase (PostgreSQL)",
                "Tailwind CSS v4",
                "Framer Motion",
                "Recharts",
                "Vitest",
                "React Testing Library",
                "Scalar",
                "OpenAPI 3.0",
                "Zod"
            ],
            "concepts": [
                "Automated Data Profiling",
                "Data Visualization",
                "Row-Level Security (RLS)",
                "Precomputed Aggregations",
                "Rate Limiting",
                "Dual-Mode AI Generation"
            ],
            "models": [
                "gemini-2.0-flash"
            ],
            "datasets": [],
            "apis": [
                "Google Gemini API"
            ],
            "infrastructure": [
                "Supabase",
                "Vercel"
            ]
        },
        "architecture": {
            "type": "Client-Server",
            "diagram": "",
            "workflow": [
                "User uploads CSV dataset",
                "Deep MIME-type dataset validation and automated data profiling",
                "Gemini AI executes semantic analysis on data to generate custom dashboard plan",
                "Fallback to rule-based engine if AI quota (429) is reached",
                "User previews projection in interactive Bento-Grid layout",
                "User saves and publishes projection to the workspace"
            ]
        },
        "research": {
            "researchQuestion": "",
            "methodology": "",
            "experiments": [],
            "findings": [],
            "references": []
        },
        "engineering": {
            "challenges": [
                "Handling AI API quota limits (429 errors) during dashboard creation",
                "Slow loading times for complex chart visualizations"
            ],
            "solutions": [
                "Implemented a dual-mode generation system using a rule-based engine fallback when AI quota is reached",
                "Used precomputed aggregations to reduce chart load times from seconds to ~150ms",
                "Utilized dynamic imports for Recharts and lazy-loaded PDF libraries"
            ],
            "performance": [
                "Precomputed aggregations reduced complex chart loading times to ~150ms"
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/AI-powered-hr-dashboard](https://github.com/kaali7/AI-powered-hr-dashboard)",
            "live": "[https://ai-powered-hr-dashboard-sigma.vercel.app/](https://ai-powered-hr-dashboard-sigma.vercel.app/)",
            "demo": "",
            "paper": ""
        }
    },
    {
        "id": "stockmind-ai",
        "number": "",
        "title": "StockMind AI",
        "category": "Full-Stack AI",
        "subcategory": "Financial Analytics",
        "type": "Web Application",
        "status": "completed",
        "year": 2026,
        "featured": false,
        "card": {
            "shortDescription": "StockMind AI is an AI-powered stock analytics dashboard with real-time data, interactive charts, and AI chat.",
            "tags": [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Zustand",
                "Recharts",
                "Groq AI"
            ]
        },
        "visual": {
            "thumbnail": "",
            "heroImage": "",
            "gallery": [],
            "video": ""
        },
        "overview": {
            "problem": "",
            "motivation": "",
            "solution": "An AI-powered stock analytics dashboard featuring real-time data lookups, technical charts with financial indicator overlays, persistence watchlists, light/dark theme toggles, and an integrated AI chat system powered by Groq AI for advanced financial analysis.",
            "outcome": ""
        },
        "features": [
            "Stock Search - Search for any stock symbol with real-time data",
            "6 KPI Cards - Stock Name, Price, Open, Volume, Market Cap, Day Range with 52W",
            "Interactive Charts - Price Chart with OHLC data + SMA 50 & SMA 200 overlays, Volume bar chart, RSI 14 indicator, MACD (12, 26, 9), Bollinger Bands (20, 2)",
            "AI-Powered Chat - Ask questions about stocks using Groq AI with advanced analysis",
            "Company Overview - Get information about products, services, competitors, and recent news",
            "Watchlist - Save favorite stocks with persistence",
            "Light/Dark Theme - Toggle between themes",
            "Responsive Design - Works on desktop and mobile"
        ],
        "technical": {
            "techStack": [
                "React",
                "TypeScript",
                "Tailwind CSS v4",
                "Zustand",
                "Recharts"
            ],
            "concepts": [
                "Data Visualization",
                "Technical Analysis",
                "State Management"
            ],
            "models": [],
            "datasets": [],
            "apis": [
                "Finnhub API",
                "Groq AI API"
            ],
            "infrastructure": [
                "Vercel"
            ]
        },
        "architecture": {
            "type": "Client-Server",
            "diagram": "",
            "workflow": []
        },
        "research": {
            "researchQuestion": "",
            "methodology": "",
            "experiments": [],
            "findings": [],
            "references": []
        },
        "engineering": {
            "challenges": [],
            "solutions": [],
            "performance": [],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/stockmind-ai](https://github.com/kaali7/stockmind-ai)",
            "live": "[https://stockmind-ai-six.vercel.app/](https://stockmind-ai-six.vercel.app/)",
            "demo": "",
            "paper": ""
        }
    }
];
