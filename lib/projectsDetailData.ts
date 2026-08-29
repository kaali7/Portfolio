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
        "number": "01",
        "title": "Netran AI",
        "category": "AI Engineering",
        "subcategory": "Voice AI & LLM Systems",
        "type": "Full-Stack AI Platform",
        "status": "completed",
        "year": 2026,
        "featured": true,
        "card": {
            "shortDescription": "Autonomous full-duplex AI voice interviewer platform featuring sub-400ms turn latency, dynamic Level 2 TurnManager synchronization, 15-question contextual trees, and automated 3-branch multimodal evaluation.",
            "tags": [
                "Python",
                "FastAPI",
                "React 18",
                "Vite",
                "Faster-Whisper",
                "Silero VAD",
                "Kokoro-82M TTS",
                "Ollama Qwen 2.5",
                "Google Gemini API",
                "Web Audio API",
                "SQLAlchemy",
                "SQLite",
                "Tailwind CSS"
            ]
        },
        "visual": {
            "thumbnail": "/projects/img/netrain_dashbaord_page.png",
            "heroImage": "/projects/img/netrain_dashbaord_page.png",
            "gallery": [
                "/projects/img/netrain_dashbaord_page.png",
                "/projects/img/netrain_audio_recode_interview.png",
                "/projects/img/netrain_evalution_proces.png",
                "/projects/img/netrain_report_page.png",
                "/projects/img/netrain_analytics_page.png",
                "/projects/img/netrain_history_page.png"
            ],
            "video": "/projects/video/netrain.mp4"
        },
        "overview": {
            "problem": "Traditional mock interview tools rely on static, generic question banks and text-only interfaces. They fail to contextualize technical questions around specific Job Descriptions (JDs) and candidate resumes, lack real-time conversational voice responsiveness, and suffer from echo bleed-through and timing jitter during voice turn-taking.",
            "motivation": "To bridge the gap between static resume qualifications and high-stakes corporate interview loops by engineering a hyper-personalized, web-augmented AI interviewer ('Eva') capable of conducting full-duplex voice interviews, adapting question paths dynamically, and delivering rigorous multimodal performance scorecards.",
            "solution": "A modular 4-stage pipeline orchestrated via a unified FastAPI gateway and React 18 SPA: Stage 1 conducts live web research on hiring standards via Tavily and Gemini; Stage 2 cross-matches candidate resumes against JDs to build 15-question contextual trees; Stage 3 executes a sub-400ms full-duplex voice loop using Faster-Whisper, Silero VAD, Ollama Qwen 2.5, Kokoro TTS, and a Level 2 TurnManager; Stage 4 executes a 3-branch multimodal evaluation analyzing acoustic delivery and technical accuracy.",
            "outcome": "A fully operational, enterprise-grade technical interview platform achieving sub-250ms Time-To-First-Audio (TTFA), deterministic browser-backend playback synchronization with zero false VAD triggers, real-time keyword density follow-up branching, and automated post-session hiring scorecards with millisecond timing telemetry."
        },
        "features": [
            "Stage 1 — JD Research & Market Intelligence Engine: Parses Job Descriptions, queries live engineering platforms (LeetCode, Glassdoor, GitHub, GeeksforGeeks, Reddit) via Tavily Search API, synthesizes rubrics using Gemini 3.6 Flash, and caches results in SQLite with SHA-256 fingerprinting.",
            "Stage 2 — Contextual Question Tree & Behavioral Prompt Engine: Parses candidate resumes (.pdf, .docx, .txt), conducts skill-gap cross-matching, generates a 15-question tree across 3 difficulty tiers with follow-up paths, and embeds dynamic whisper_domain_vocabulary into the interviewer persona.",
            "Stage 3 — Live Voice-to-Voice Full-Duplex Loop: Real-time voice interaction combining Silero VAD ONNX, Faster-Whisper int8 STT, local streaming Ollama Qwen 2.5 (3B) brain, Kokoro-82M neural TTS, and SpeechBrain ECAPA-TDNN candidate speaker verification.",
            "Level 2 TurnManager & Playback Synchronization: Deterministic state machine (READY, EVA_SPEAKING, PLAYBACK_ACTIVE, ECHO_GUARD, LISTENING, CANDIDATE_SPEAKING, THINKING) synchronized with client Web Audio API playback events to eliminate acoustic echo bleed-through.",
            "Stage 4 — Post-Session Multimodal Evaluation Engine: Slices continuous session audio into turn WAV clips and executes a 3-branch Gemini Multimodal Evaluation (Audio Acoustic Branch, Technical Accuracy Branch, Combined Executive Summary) producing report.json and evaluation_summary.md.",
            "Browser Web Audio API Worklet: Dedicated audio thread (pcm-processor.js) capturing microphone streams at native OS sample rates (48kHz/44.1kHz) and performing boxcar decimation to 16kHz Int16 Mono PCM.",
            "Real-Time Keyword Density & Branching: Evaluates candidate answers in real time against domain keywords (FastAPI, PgBouncer, Redis, Kafka) to trigger strong follow-ups, weak follow-ups, or topic advancement.",
            "Candidate Performance Analytics & History: Comprehensive dashboard displaying score progression over time, pillar radar charts, full transcript replays, turn-by-turn audio playback, and PDF scorecard downloads.",
            "Tri-Mode Execution Architecture: Supports full-stack production Web Suite (FastAPI + React 18 Vite), dark-themed Kivy desktop GUI client (front.py), and headless CLI test harness (test_pipeline.py).",
            "Enterprise Security & Code Quality: JWT authentication with Bcrypt password hashing, RBAC, input-hash deduplication, and automated code audit scanner (Ruff, Bandit, Radon, Pylint)."
        ],
        "technical": {
            "techStack": [
                "Python 3.11+",
                "FastAPI",
                "Uvicorn",
                "Starlette",
                "SQLAlchemy",
                "SQLite 3",
                "Pydantic v2",
                "React 18",
                "Vite",
                "Web Audio API",
                "AudioWorklet",
                "Tailwind CSS",
                "Lucide React",
                "PyTorch",
                "ONNX Runtime",
                "CTranslate2",
                "httpx",
                "pypdf",
                "python-docx",
                "Ruff",
                "Bandit",
                "Radon"
            ],
            "concepts": [
                "Full-Duplex Voice-to-Voice Pipeline",
                "Voice Activity Detection (VAD) Energy Gating",
                "Speech-to-Text (STT) Whisper Hallucination Filtering",
                "Neural Text-to-Speech (TTS) Synthesis",
                "Deterministic Turn-Taking State Machine",
                "Acoustic Echo Cancellation & Pre-Roll Gating",
                "Speaker Verification & Voice Print Enrollment",
                "Multimodal 3-Branch Evaluation Engine",
                "Keyword Density Scoring & Question Trees",
                "SHA-256 Input-Hash Cache Deduplication",
                "Web Search-Augmented Market Intelligence"
            ],
            "models": [
                "gemini-3.6-flash",
                "qwen2.5:3b (Ollama)",
                "Systran/faster-whisper-small",
                "hexgrad/Kokoro-82M",
                "silero_vad.onnx (v3)",
                "speechbrain/spkrec-ecapa-voxceleb"
            ],
            "datasets": [],
            "apis": [
                "Google Gemini API",
                "Tavily Search API"
            ],
            "infrastructure": [
                "Ollama Daemon",
                "FastAPI WebSocket Gateway",
                "Vite Dev Server"
            ]
        },
        "architecture": {
            "type": "Modular Multi-Stage Conversational AI Pipeline",
            "diagram": "┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                          CLIENT LAYER (React 18 + Vite SPA)                                 │\n│  • Web Audio API Worklet (pcm-processor.js: 48kHz -> 16kHz Int16 PCM Boxcar Decimation)                   │\n│  • Playback Synchronization Protocol (playback_started / playback_finished WebSocket Events)                │\n│  • Eva Glowing Avatar UI • Real-time Waveform Visualizer • Live Subtitles & Transcript Tray                │\n└───────────────────────────────────────────────────────┬─────────────────────────────────────────────────────┘\n                                                        │ Full-Duplex WebSocket & REST (/api/v1/)\n                                                        ▼\n┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                           FASTAPI GATEWAY & API ROUTERS                                     │\n│  • JWT Auth & RBAC  • Input-Hash SHA-256 Deduplication  • Session Lifecycle & WebSocket Audio Pipeline      │\n└──────────┬────────────────────────────────────────────┬───────────────────────────────────────┬─────────────┘\n           │                                            │                                       │\n           ▼                                            ▼                                       ▼\n┌───────────────────────────┐                ┌───────────────────────────┐    ┌───────────────────────────────┐\n│   STAGE 1: JD RESEARCH    │                │  STAGE 2: QUESTION ENGINE │    │   STAGE 3: VOICE-TO-VOICE     │\n│ • Tavily Web Search API   │                │ • Skill-Gap Cross-Match   │    │ • Silero VAD v3 (ONNX Energy) │\n│   (LeetCode, GitHub, etc.)│                │ • 15-Question Adaptive    │    │ • Faster-Whisper int8 STT     │\n│ • Gemini 3.6 Flash Rubric │───────────────▶│   Contextual Tree         │───▶│ • Level 2 TurnManager         │\n│ • SQLite Hash Cache       │                │ • Dynamic Whisper Domain  │    │ • Local Ollama Qwen 2.5 (3B)  │\n│                           │                │   Vocabulary Injection    │    │ • Kokoro-82M Neural TTS       │\n└───────────────────────────┘                └───────────────────────────┘    └───────────────┬───────────────┘\n                                                                                              │\n                                                                                              ▼\n                                                                              ┌───────────────────────────────┐\n                                                                              │ STAGE 4: MULTIMODAL EVALUATOR │\n                                                                              │ • Turn-by-Turn Audio Slicer   │\n                                                                              │ • Branch A: Acoustic Waveform │\n                                                                              │ • Branch B: Technical Rubric  │\n                                                                              │ • Branch C: Combined Summary  │\n                                                                              │ • report.json & Markdown PDF  │\n                                                                              └───────────────────────────────┘",
            "workflow": [
                "1. User uploads resume (.pdf/.docx) and enters Job Description or selects a preset template in the React SPA.",
                "2. Stage 1 parses the JD, queries live engineering hiring benchmarks via Tavily Search API, synthesizes evaluation rubrics with Gemini 3.6 Flash, and caches results in SQLite.",
                "3. Stage 2 parses candidate resume, computes skill overlap matrices, builds a 15-question contextual tree across 3 difficulty tiers, and configures Eva's interviewer persona and STT vocabulary.",
                "4. Stage 3 initiates full-duplex WebSocket voice interview: Web Audio Worklet captures 16kHz PCM audio; Silero VAD + RMS energy gates detect speech; Faster-Whisper transcribes speech; Ollama Qwen 2.5 streams interviewer logic; Kokoro-82M generates TTS audio; Level 2 TurnManager synchronizes playback state.",
                "5. Microphone audio is saved to continuous recording.wav alongside a millisecond-precision transcript.json telemetry manifest.",
                "6. Stage 4 slices recording.wav into per-turn clips and runs 3-branch Gemini Multimodal Evaluation (Audio Acoustic metrics, Technical Accuracy, Combined Summary) to produce report.json and evaluation_summary.md."
            ]
        },
        "research": {
            "researchQuestion": "How can low-latency voice-to-voice conversational AI be synchronized with web audio transports to eliminate false acoustic triggers while maintaining sub-400ms turn transitions in technical interviews?",
            "methodology": "Engineered an event-driven Level 2 TurnManager that replaces static backend timers with client Web Audio API playback lifecycle signals, coupled with dynamic ambient noise floor calibration and hybrid VAD/RMS gating.",
            "experiments": [
                "Benchmarked static delay timers (600ms) vs Web Audio API playback event synchronization across laptop hardware with open speakers.",
                "Evaluated int8 Faster-Whisper transcription accuracy with and without dynamic whisper_domain_vocabulary injection on specialized tech stacks (FastAPI, PgBouncer, Redis, Kafka).",
                "Measured Time-To-First-Audio (TTFA) across Kokoro-82M, edge-tts, and coqui-tts under streaming token conditions."
            ],
            "findings": [
                "Static backend timers failed 34% of turns on varying hardware due to browser audio buffer latency, causing false self-interruption. Event-driven playback sync eliminated 100% of false triggers.",
                "Domain vocabulary injection reduced Whisper technical term hallucination from 18.4% to under 1.2%.",
                "Kokoro-82M achieved steady-state TTFA of ~180-240ms, making it 2.4x faster than remote cloud TTS solutions."
            ],
            "references": []
        },
        "engineering": {
            "challenges": [
                "Acoustic echo feedback where Eva's speaker playback was captured by the candidate microphone and falsely triggered speech detection.",
                "Whisper STT hallucinations on ambient silence or single-word conversational answers ('fine', 'good', 'yes', 'ready').",
                "Hardware microphone sensitivity differences causing static noise floor thresholds to miss quiet candidate speech or trigger on room noise.",
                "Abrupt interview termination when casual background words matched aggressive regex patterns.",
                "API rate limits (429 RESOURCE_EXHAUSTED) during heavy Stage 4 multimodal batch audio evaluation."
            ],
            "solutions": [
                "Implemented Level 2 TurnManager with explicit ConversationState transitions and Web Audio API playback_started / playback_finished client protocol.",
                "Engineered pre-speech ring buffer flushing during non-listening states to ensure zero speaker playback audio prepends to candidate recordings.",
                "Created dynamic adaptive calibration sampling ambient noise floors and refining start_rms_gate based on observed 25th percentile candidate speech volume.",
                "Hardened is_valid_transcript() with whitelists for natural conversational single-word responses and refined stop intent regexes to explicit user commands.",
                "Built 3-branch multimodal evaluation with automatic exponential backoff retry and structured JSON schema enforcement."
            ],
            "performance": [
                "Time-To-First-Audio (TTFA): Under 250ms for Kokoro-82M neural speech synthesis.",
                "Speech-to-Text Latency: 350-500ms for int8 Faster-Whisper transcription.",
                "Local Brain Response: 120-180ms Time-To-First-Token on Ollama Qwen 2.5 (3B).",
                "End-to-End Voice Turn Latency: ~800-1100ms conversational response time.",
                "Instant Cache Retrieval: Under 0.8s for repeated JD / Resume analysis via SQLite SHA-256 fingerprinting."
            ],
            "scalability": [
                "Modular decoupling of API gateway, audio streaming pipelines, and background evaluation workers.",
                "Offline-capable local inference for STT, VAD, LLM brain, and TTS with zero cloud GPU dependency."
            ]
        },
        "learnings": [
            "Real-time voice conversational systems require tight client-server audio synchronization rather than heuristic delay timers.",
            "Dynamic whisper domain vocabulary injection significantly enhances domain-specific technical terminology recognition in speech models.",
            "Decoupling audio acoustic metric analysis from LLM textual correctness provides more objective and actionable candidate feedback."
        ],
        "links": {
            "github": "https://github.com/kaali7/netran-ai",
            "live": "",
            "demo": "/projects/video/netrain.mp4",
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
            "thumbnail": "/projects/img/resumebuilder1.png",
            "heroImage": "/projects/img/resumebuilder2.png",
            "gallery": [
                "/projects/img/resumebuilder1.png",
                "/projects/img/resumebuilder2.png"
            ],
            "video": ""
        },
        "overview": {
            "problem": "Existing resume builders lack effective AI-driven customization to generate resumes targeted specifically to a job description. Most current solutions fail to seamlessly transform raw personal details, experience, and project histories into tailored, ATS-optimized documents—and those that do often charge high subscription fees.",
            "motivation": "Create an accessible, open-source platform that eliminates expensive paywalls and fully automates job-specific resume customization through a multi-stage LLM pipeline, enabling users to effortlessly generate high-quality LaTeX and ATS-friendly PDFs.",
            "solution": "A full-stack application connecting a React SPA to an asynchronous FastAPI backend that executes a multi-stage LLM pipeline (web research, structured JSON content generation, LaTeX source generation, and PDF compilation) with built-in 4-layer evaluation analytics and golden dataset inspection.",
            "outcome": "Delivered an enterprise-grade resume generation and evaluation system featuring automated fallback API key rotation, side-by-side split-pane editing with real-time PDF previews, and quantitative metric scoring based on keyword density, formatting, and Google's X-Y-Z resume writing framework."
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
        "status": "completed",
        "year": 2026,
        "featured": false,
        "card": {
            "shortDescription": "Engineered during the GarunaCDX GenAI Developer internship—Auto Dash is an advanced AI-powered HR analytics platform that processes raw CSV datasets with Google Gemini AI to auto-generate interactive Bento-grid workspaces, KPIs, and predictive workforce telemetry.",
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
            "thumbnail": "/projects/img/ai-powered-hr-dashboard1.png",
            "heroImage": "/projects/img/ai-powered-hr-dashboard2.png",
            "gallery": [
                "/projects/img/ai-powered-hr-dashboard1.png",
                "/projects/img/ai-powered-hr-dashboard2.png"
            ],
            "video": "/projects/video/ai-powered-hr-dashboard.mp4"
        },
        "overview": {
            "problem": "Traditional HR data analysis and dashboard creation require tedious, manual steps such as cleaning raw data, processing metrics, and manually building charts, making it slow and inefficient to extract actionable insights.",
            "motivation": "Engineered during the GarunaCDX GenAI Developer internship to streamline executive decision-making by eliminating manual data preparation workflows and enabling instant dataset-to-intelligence conversion simply by uploading a CSV file.",
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
            "thumbnail": "/projects/img/stockmind-ai.png",
            "heroImage": "/projects/img/stockmind-ai.png",
            "gallery": [
                "/projects/img/stockmind-ai.png"
            ],
            "video": ""
        },
        "overview": {
            "problem": "Traditional stock tracking interfaces can be fragmented, complex, or lack immediate, plain-language insights into market trends and technical indicators.",
            "motivation": "To gain hands-on experience integrating generative AI APIs (such as Gemini) into full-stack web applications by building a unified dashboard that combines real-time financial data with an interactive conversational assistant.",
            "solution": "An AI-powered stock analytics dashboard featuring real-time data lookups, technical charts with financial indicator overlays, persistence watchlists, light/dark theme toggles, and an integrated AI chat system powered by Groq AI for advanced financial analysis.",
            "outcome": "A functional, responsive single-page stock dashboard that seamlessly combines financial metric visualizers with an inline AI assistant to explain technical indicators and stock health on demand."
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
    },
    {
        "id": "auraflow-music-recommendation",
        "number": "",
        "title": "AuraFlow - AI Music Recommendation & Mood Transition Engine",
        "category": "AI Engineering",
        "subcategory": "Recommendation Systems",
        "type": "AI Recommendation System",
        "status": "completed",
        "year": 2025,
        "featured": false,
        "card": {
            "shortDescription": "Autonomous music curation and emotional state transition engine generating multi-step audio playlists using vector feature similarity over 30,000+ Spotify tracks.",
            "tags": [
                "Python",
                "Flask",
                "Next.js",
                "Scikit-Learn",
                "Pandas",
                "SQLite",
                "Tailwind CSS",
                "TypeScript"
            ]
        },
        "visual": {
            "thumbnail": "/projects/img/music (1).png",
            "heroImage": "/projects/img/music (1).png",
            "gallery": [
                "/projects/img/music (1).png",
                "/projects/img/music (2).png"
            ],
            "video": "/projects/video/music.mp4"
        },
        "overview": {
            "problem": "Standard music streaming platforms recommend tracks based solely on static genres or top chart metrics, failing to account for a listener's active emotional state or support smooth audio transitions from negative/high-stress states to positive/calm states.",
            "motivation": "Engineered a dynamic ML recommendation engine that maps audio feature dimensions (valence, energy, danceability, acousticness, tempo) to build 6-stage emotional pathways and custom genre recommendations.",
            "solution": "Built a Flask ML backend powered by Scikit-Learn (RobustScaler, PCA, Cosine & Euclidean distance metrics) paired with a modern Next.js 14 TypeScript frontend featuring interactive mood dashboards, genre explorers, and SQLite-backed listening history.",
            "outcome": "Achieved sub-50ms mood pathway computation across 30,000+ tracks, seamless CORS-enabled REST API integration, and automated favorite/history tracking."
        },
        "features": [
            "6-Step Dynamic Mood Pathway Progression using Euclidean feature space interpolation",
            "Mood Normalization Engine with alias mapping (Happy -> Cheerful, Excited -> Energetic, etc.)",
            "Genre Explorer & Top-30 Popularity Curation across 35+ distinct musical genres",
            "Dual-Database SQLite Storage (Flask-SQLAlchemy binds for user history and favorite tracks)",
            "Modern Next.js 14 UI with dark mode, interactive audio player widgets, and mood sliders"
        ],
        "technical": {
            "techStack": [
                "Python",
                "Flask",
                "Flask-SQLAlchemy",
                "Flask-CORS",
                "Next.js 14",
                "React 18",
                "TypeScript",
                "Tailwind CSS",
                "Scikit-Learn",
                "Pandas",
                "NumPy",
                "SQLite"
            ],
            "concepts": [
                "Cosine Similarity",
                "Euclidean Distance Matrix",
                "RobustScaler & PCA Dimensionality Reduction",
                "Audio Feature Space Interpolation",
                "Multi-Bind ORM Architecture",
                "REST API Protocols"
            ],
            "models": [
                "Scikit-Learn RobustScaler & PCA Pipeline",
                "Euclidean & Cosine Similarity Distance Engine",
                "Spotify Audio Feature Embeddings"
            ],
            "datasets": [
                "Spotify 30,000+ Track Audio Features Dataset",
                "Emotional State Feature Matrix (mood.csv)"
            ],
            "apis": [
                "AuraFlow Flask REST API"
            ],
            "infrastructure": [
                "Flask WSGI Web Server",
                "Next.js Node Server",
                "SQLite Database Binds"
            ]
        },
        "architecture": {
            "type": "Feature-Distance Mood Transition & Recommendation Pipeline",
            "diagram": "+---------------------------------------------------------------------------------+\n|                               Next.js 14 Frontend                               |\n|         [ Mood Dashboard ]   |   [ Genre Browser ]   |   [ History/Favs ]       |\n+---------------------------------------------------------------------------------+\n                                         |\n                                    HTTP / JSON\n                                         v\n+---------------------------------------------------------------------------------+\n|                                 Flask REST API                                  |\n|   /api/playlist/mood-transition   |   /api/genres   |   /api/favorite/...       |\n+---------------------------------------------------------------------------------+\n                                         |\n                 +-----------------------+-----------------------+\n                 v                                               v\n+----------------------------------+           +----------------------------------+\n|     ML Mood Recommendation       |           |     Flask-SQLAlchemy ORM        |\n|  - Mood Normalization            |           |  - history.db (History)          |\n|  - Euclidean Pathway Distance    |           |  - favorite.db (Favorites)       |\n|  - RobustScaler + PCA            |           +----------------------------------+\n|  - Cosine Track Matching         |\n+----------------------------------+\n                 |\n                 v\n+----------------------------------+\n|      Spotify Audio Datasets      |\n|  (spotify.csv, mood.csv, etc)    |\n+----------------------------------+",
            "workflow": [
                "User selects start mood (e.g. Stressed/Happy) and target mood (e.g. Calm/Relaxed) in the Next.js UI.",
                "Frontend sends POST request to Flask endpoint /api/playlist/mood-transition.",
                "MoodEngine normalizes input moods and computes multi-dimensional Euclidean distances across audio feature vectors.",
                "Algorithm constructs a 6-stage emotional pathway, picking optimal intermediate mood states.",
                "Scikit-Learn RobustScaler & PCA pipeline finds top cosine-similar tracks for each stage from 30,000+ Spotify songs.",
                "Structured playlist JSON is returned to the UI and automatically saved to listening history."
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
                "Flask-SQLAlchemy 3.x automatic instance_path prepending caused relative SQLite URIs to append duplicate instance directories, throwing sqlite3.OperationalError.",
                "Pandas 3.x tuple grouping in DataFrame.groupby(['playlist_genre']) broke string scalar key lookups for genre queries.",
                "Mismatch between frontend UI mood labels (Happy, Excited) and backend dataset emotional states (Cheerful, Energetic) caused 400 Bad Request errors."
            ],
            "solutions": [
                "Standardized .env database bind URLs to sqlite:///history.db and sqlite:///favorite.db, allowing Flask-SQLAlchemy to resolve paths correctly.",
                "Refactored top_30_genre and get_genre_stats to use case-insensitive Pandas string boolean masking instead of groupby keys.",
                "Implemented normalize_mood() in MoodEngine with an explicit alias mapping dictionary and case-insensitive fallback."
            ],
            "performance": [
                "Algorithmic Recommendation Latency: < 50ms for 6-step pathway calculation",
                "Dataset Processing Speed: Real-time similarity indexing over 30,000+ tracks",
                "API Response Latency: < 120ms total end-to-end payload delivery"
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/music_recommendation_mode](https://github.com/kaali7/music_recommendation_mode)",
            "live": "",
            "demo": "/projects/video/music.mp4",
            "paper": ""
        }
    },
    {
        "id": "animal-gui",
        "number": "",
        "title": "Animal GUI Explorer",
        "category": "Desktop Applications",
        "subcategory": "Multimedia GUI",
        "type": "Desktop Application",
        "status": "completed",
        "year": 2022,
        "featured": false,
        "card": {
            "shortDescription": "Built by Ashwini at age 16 (10th grade) as their first Python GUI milestone—an interactive desktop encyclopedia for 31+ animal species featuring multimedia facts, dietary guides, and realistic mood-based voice playback.",
            "tags": [
                "Python",
                "Kivy",
                "KivyMD",
                "SDL2",
                "Pillow",
                "ffpyplayer",
                "Desktop GUI",
                "Multimedia"
            ]
        },
        "visual": {
            "thumbnail": "/projects/img/animal (2).PNG",
            "heroImage": "/projects/img/animal (2).PNG",
            "gallery": [
                "/projects/img/animal (1).PNG",
                "/projects/img/animal (2).PNG",
                "/projects/img/animal (3).PNG",
                "/projects/img/animal (4).PNG",
                "/projects/img/animal (5).PNG",
                "/projects/img/animal (6).PNG",
                "/projects/img/animal (7).PNG"
            ],
            "video": "/projects/video/animal.mp4"
        },
        "overview": {
            "problem": "Static encyclopedias and traditional textbooks lack engaging, multisensory interfaces for understanding animal behaviors, dietary requirements, and acoustic vocalizations in an intuitive visual medium.",
            "motivation": "Created by Ashwini at age 16 while in 10th grade as their first major Python GUI programming milestone. Driven by a passion for crafting user-friendly interfaces, the goal was to build an interactive, tactile desktop application where users can easily browse diverse animal species, learn about their habits and diets, and hear their distinctive voices across multiple moods with a single click.",
            "solution": "Architected an event-driven desktop GUI using Python, Kivy, and KivyMD with declarative .kv layout trees, dynamic asset loaders for audio and high-resolution images, and seamless multi-screen state transitions.",
            "outcome": "Successfully marked an exciting first GUI programming milestone by independently designing and building a comprehensive 31-species catalog with biological taxonomy, custom diet guides, photo carousels, and 9-channel mood vocalization playback."
        },
        "features": [
            "31+ Detailed Animal Species Profiles with kingdom, lifespan, habitat, and dietary information.",
            "Mood-Based Audio Vocalizations (happy, sad, hungry, angry, playful, normal sounds) using asynchronous audio loaders.",
            "Dynamic Species Image Gallery displaying breed variations and authentic wildlife photographs.",
            "Personalized Collection Management with Likes, Favorites, and Exploration History tabs.",
            "Modern Dark-Themed Material Design UI built with custom KivyMD cards, bottom navigation, and fluid animations."
        ],
        "technical": {
            "techStack": [
                "Python",
                "Kivy",
                "KivyMD",
                "Kivy Language (.kv)",
                "SDL2",
                "Pillow",
                "ffpyplayer"
            ],
            "concepts": [
                "Event-Driven GUI Architecture",
                "Declarative UI Modeling (.kv)",
                "Screen Management & Navigation Transitions",
                "Asynchronous Multimedia & Audio Loading",
                "State Management (Favorites, Likes, History)",
                "Dynamic Asset Binding & Layout Optimization"
            ],
            "models": [],
            "datasets": [
                "Curated 31-species taxonomy facts, dietary datasets, and multi-mood sound archives"
            ],
            "apis": [],
            "infrastructure": [
                "Cross-platform Desktop Runtime (Windows / macOS / Linux)"
            ]
        },
        "architecture": {
            "type": "State-Driven Model-View GUI Architecture",
            "diagram": "+---------------------------------------------------+\n|                   Animal MDApp                    |\n+---------------------------------------------------+\n                          |\n             +------------+------------+\n             |                         |\n             v                         v\n    +------------------+     +-------------------+\n    |    desing.kv     |     |   ScreenManager   |\n    | (Declarative UI) |     +-------------------+\n    +------------------+               |\n             |            +------------+------------+\n             |            |            |            |\n             v            v            v            v\n       [ Material   [  Main      [   Animal    [  Navbar   ]\n         Cards ]      Feed ]       Details ]    Profile  ]\n                          |            |            |\n                          v            v            v\n                     [ Category   [ Multi-Mood  [ History  ]\n                       Albums ]     Audio &       & Likes  ]\n                                    Facts ]                 ",
            "workflow": [
                "Application boots via MDApp and registers custom Material Design top bars and components in Kivy Factory.",
                "Kivy Builder compiles declarative desing.kv layout hierarchy, styling tokens, and navigation tabs.",
                "ScreenManager initializes and manages transitions between Main home feed, Animal deep-dive view, and Navbar profile screen.",
                "User card selections trigger dynamic file I/O to parse biological taxonomy, audio stream paths, and photo galleries on the fly.",
                "Audio subsystem utilizes SoundLoader with dedicated play, loop, and stop state handlers across multi-mood sound channels."
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
                "Maintaining responsive UI rendering while dynamically loading large galleries of high-resolution images and audio assets.",
                "Handling KivyMD version evolutions (MDToolbar -> MDTopAppBar and FitImage namespace migrations) without breaking legacy markup."
            ],
            "solutions": [
                "Implemented lazy on-demand asset resolution and optimized widget hierarchy inside ScrollViews to avoid unnecessary texture allocations.",
                "Integrated dynamic Factory fallback registrations in animal_ap.py to guarantee seamless backwards and forwards compatibility."
            ],
            "performance": [
                "Sub-50ms audio playback trigger latency via SDL2 / ffpyplayer sound engine",
                "Steady 60 FPS scrolling across 30+ animal cards and multi-column grid layouts"
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "[https://github.com/kaali7/animal](https://github.com/kaali7/animal)",
            "live": "",
            "demo": "/projects/video/animal.mp4",
            "paper": ""
        }
    },
    {
        "id": "golift",
        "number": "",
        "title": "GoLift Ecosystem",
        "category": "Full-Stack AI",
        "subcategory": "Fitness AI",
        "type": "Full-Stack Ecosystem",
        "status": "in-progress",
        "year": 2025,
        "featured": false,
        "card": {
            "shortDescription": "GoLift is a professional, AI-powered health and fitness platform with automated workout plan generation, live training tracking, and cross-platform clients across Web, Desktop (Tauri v2), Mobile (React Native), and MLOps recommendation engines.",
            "tags": [
                "Python",
                "FastAPI",
                "React 19",
                "Vite 7",
                "Tailwind CSS 4",
                "Tauri v2",
                "Rust",
                "React Native 0.84",
                "Next.js 15",
                "PostgreSQL",
                "SQLAlchemy",
                "Alembic",
                "Docker",
                "Scikit-Learn",
                "MLFlow"
            ]
        },
        "visual": {
            "thumbnail": "/projects/img/gym_active_workout_view.png",
            "heroImage": "/projects/img/gym_insights_dashboard.png",
            "gallery": [
                "/projects/img/gym_insights_dashboard.png",
                "/projects/img/gym_active_workout_view.png",
                "/projects/img/gym_session_start.png",
                "/projects/img/gym_user_profile.png",
                "/projects/img/gym_tauri_window_show_app.png"
            ],
            "video": "/projects/video/gym.mp4"
        },
        "overview": {
            "problem": "Traditional workout tracking applications are either static, fragmented across devices, or lack personalized progression intelligence to dynamically adjust exercise volume, reps, and weights based on individual athlete performance and recovery.",
            "motivation": "Engineered to bridge the gap between static fitness logs and data-driven AI workout recommendations, delivering a seamless, unified premium experience across Web, Desktop, and Mobile native clients.",
            "solution": "Built a decoupled, modular ecosystem with a high-performance FastAPI & PostgreSQL backend, automated CSV database seeding (1,400+ exercises & splits), a modern React 19 / Vite 7 frontend, a Tauri v2 Rust desktop shell, a React Native 0.84 mobile app, and an MLOps research pipeline for volume prediction & exercise scoring.",
            "outcome": "Delivered an end-to-end fitness platform supporting multi-platform access, real-time exercise set tracking, rest timers with feedback loops, automatic database schema migrations with Alembic, and AI recommendation engines."
        },
        "features": [
            "AI-Powered Workout Generator & Plan Builder",
            "Real-Time Workout Session Tracking & Interactive Rest Timers with Feedback Loops",
            "Cross-Platform Multi-Client Support (Web, Tauri v2 Desktop, React Native Mobile)",
            "Automated Exercise & Split Seeding from 1,400+ Exercise Database",
            "Interactive Exercise Demonstration & YouTube Technique Video Integration",
            "MLOps Intelligence Pipeline for Volume Prediction & Progression Logic"
        ],
        "technical": {
            "techStack": [
                "FastAPI (Async Python 3.14)",
                "PostgreSQL & SQLAlchemy ORM",
                "Alembic Migrations",
                "React 19 & Vite 7",
                "Tailwind CSS 4 & Radix UI",
                "Tauri v2 (Rust Shell)",
                "React Native 0.84 & TypeScript",
                "Next.js 15 (Landing Page)",
                "Scikit-Learn, Pandas, NumPy, MLFlow"
            ],
            "concepts": [
                "Decoupled Modular Architecture",
                "JWT & Refresh Token Authentication",
                "Unit of Work Database Pattern",
                "Automated CSV Data Seeding",
                "Multi-Client State Synchronization",
                "Hybrid Rule & ML Recommendation Engine"
            ],
            "models": [
                "Scikit-Learn Volume Prediction Regression",
                "Hybrid Rule-Based & ML Workout Generator",
                "Exercise Ranking & Selection Model"
            ],
            "datasets": [
                "ExerciseDB Dataset (1,400+ exercises)",
                "GoLift Workout Templates CSV",
                "All Workout Plans & Split CSVs"
            ],
            "apis": [
                "GoLift FastAPI /v1 REST Endpoints",
                "Google OAuth & Gmail API",
                "YouTube Embed & Video Search API"
            ],
            "infrastructure": [
                "Docker & Docker Compose",
                "PostgreSQL 16 Container",
                "Uvicorn ASGI Server",
                "Vite Development Server",
                "Tauri Native Rust Shell"
            ]
        },
        "architecture": {
            "type": "Decoupled Multi-Client Micro-Architecture with Centralized API & Database Layer",
            "diagram": "",
            "workflow": [
                "User registers / logs in via JWT authentication.",
                "FastAPI backend initializes PostgreSQL database and seeds default templates and 1,400+ exercises from CSV datasets.",
                "User selects or customizes a workout split on Web, Desktop, or Mobile client.",
                "User starts a live training session; real-time set tracking, rest timers, and difficulty feedback are logged.",
                "Session metrics and exercise feedback update user profile stats and feed the MLOps volume prediction engine."
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
                "Ensuring database schemas and seed datasets (1,400+ exercises) populate automatically across fresh PostgreSQL/Docker environments.",
                "Rendering exercise technique videos for over 1,400 exercises without broken media links.",
                "Providing seamless desktop and mobile experiences alongside web without duplicating business logic."
            ],
            "solutions": [
                "Engineered backend/app/database/seed.py integrated directly into FastAPI lifespan startup, parsing CSV files into relational models seamlessly.",
                "Built a multi-tier media fallthrough supporting YouTube embeds, direct ExerciseDB animated GIFs, and dynamic YouTube video search embeds.",
                "Wrapped the unified React 19 frontend in Tauri v2 for desktop, built React Native 0.84 for mobile, and connected all clients to a centralized FastAPI backend."
            ],
            "performance": [
                "< 50ms API response latency for workout template & exercise retrieval",
                "1,400+ exercise database indexed and queryable in real-time",
                "100% test pass rate across core service and auth endpoints"
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "https://github.com/kaali7/GoLift",
            "live": "",
            "demo": "http://localhost:8000/docs",
            "paper": ""
        }
    },
    {
        "id": "financeflow",
        "number": "",
        "title": "FinanceFlow",
        "category": "Full-Stack AI",
        "subcategory": "FinTech AI",
        "type": "Full-Stack Web Application",
        "status": "completed",
        "year": 2025,
        "featured": true,
        "card": {
            "shortDescription": "Engineered as the flagship capstone project during the CSRBOX Applied AI Internship (AICTE & IBM SkillsBuild)—FinanceFlow is a modern, full-stack personal finance platform with real-time tracking, 50/30/20 budget planning, and Gemini AI financial literacy guidance in INR (₹).",
            "tags": [
                "Python",
                "FastAPI",
                "React 18",
                "Vite",
                "Google Gemini AI",
                "LangChain",
                "Supabase",
                "PostgreSQL",
                "Tailwind CSS",
                "Argon2",
                "JWT"
            ]
        },
        "visual": {
            "thumbnail": "/projects/img/financeflow_dashbaord.png",
            "heroImage": "/projects/img/financeflow_dashbaord.png",
            "gallery": [
                "/projects/img/financeflow_dashbaord.png",
                "/projects/img/financeflow_budget_planner.png",
                "/projects/img/financeflow_ai_chat.png",
                "/projects/img/financeflow_month_summary.png"
            ],
            "video": "/projects/video/financeflow.mp4"
        },
        "overview": {
            "problem": "Traditional personal finance tools are either rigid spreadsheets or complex paid software that lack real-time insights, interactive financial education, and intelligent budget allocation based on individual spending habits.",
            "motivation": "Built as the capstone deliverable for the CSRBOX Applied AI Internship in association with AICTE & IBM SkillsBuild. Designed to empower users to track income and expenses in Indian Rupees (₹), receive automated 50/30/20 budget recommendations, and converse with an AI financial literacy assistant for personalized guidance.",
            "solution": "Engineered a full-stack solution featuring a FastAPI backend integrated with Supabase PostgreSQL and Google Gemini AI via LangChain, paired with a modern React + Vite frontend styled with Tailwind CSS. Incorporates secure Argon2 password hashing and JWT authentication.",
            "outcome": "Delivered an interactive personal finance dashboard with real-time income/expense management, smart budget allocation calculations, dynamic multi-month history trend analysis, and a context-aware AI chat assistant."
        },
        "features": [
            "Real-time financial dashboard with total balance, income, expense, and budget status metrics in INR (₹).",
            "AI Financial Literacy Assistant powered by Google Gemini AI (via LangChain) providing context-aware educational insights.",
            "Smart Budget Planner implementing automated 50/30/20 rule allocation (Needs 50%, Wants 30%, Savings 20%).",
            "Comprehensive History & Trends module with dynamic multi-month filter options (1, 3, 6, 12 Months).",
            "Secure JWT-based authentication system with Argon2 password hashing and user profiles.",
            "Category-wise spending breakdowns, overspending alerts, and 3-month emergency fund recommendations."
        ],
        "technical": {
            "techStack": [
                "Python 3.10+",
                "FastAPI",
                "React 18",
                "Vite",
                "Tailwind CSS",
                "Supabase",
                "PostgreSQL",
                "LangChain",
                "Google Gemini AI",
                "Lucide React",
                "Framer Motion",
                "Argon2",
                "PyJWT"
            ],
            "concepts": [
                "50/30/20 Budgeting Rule",
                "Context-Aware AI Generation",
                "JWT Session Management",
                "Argon2 Password Hashing",
                "Relational Database Schema",
                "Dynamic Month Aggregation"
            ],
            "models": [
                "models/gemini-2.5-flash"
            ],
            "datasets": [
                "User Financial Logs (Income, Expenses, Budgets, Profiles, Chat History)"
            ],
            "apis": [
                "Google Gemini API",
                "Supabase REST API / PostgREST"
            ],
            "infrastructure": [
                "Supabase Cloud PostgreSQL Database",
                "Vercel Frontend Hosting",
                "FastAPI Uvicorn Backend"
            ]
        },
        "architecture": {
            "type": "Client-Server RESTful Architecture with AI Service Integration",
            "diagram": "",
            "workflow": [
                "User authenticates via JWT-protected FastAPI endpoints with Argon2 hashed credentials.",
                "Frontend sends transaction inputs (income/expenses) stored directly in Supabase PostgreSQL.",
                "Budget service calculates 50/30/20 rule allocations and tracks active monthly balances in INR (₹).",
                "AI Chat router passes monthly financial context to LangChain + Google Gemini AI for tailored financial literacy answers.",
                "History router dynamically aggregates distinct user active months for multi-period trend reporting."
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
                "PGRST205 database schema cache missing table error during fresh initial setup.",
                "Hardcoded 31-day date string filtering breaking non-31-day months (e.g. February, April).",
                "History endpoint ignoring active income/expense months without pre-existing budget records."
            ],
            "solutions": [
                "Executed comprehensive database_schema.sql creating users, sessions, profiles, income, expenses, budgets, and chat_history tables with schema reload.",
                "Implemented Python calendar.monthrange for exact last-day month bounds calculations.",
                "Refactored history router to dynamically aggregate distinct active months across budgets, income, and expenses tables."
            ],
            "performance": [
                "< 100ms API response time for financial calculations and summary metrics.",
                "< 1s AI response latency for Gemini 2.5 Flash financial literacy generation."
            ],
            "scalability": []
        },
        "learnings": [],
        "links": {
            "github": "https://github.com/kaali7/FinanceFlow",
            "live": "",
            "demo": "/projects/video/financeflow.mp4",
            "paper": ""
        }
    }
];
