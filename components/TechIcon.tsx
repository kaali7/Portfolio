import React from "react";
import {
  siPython,
  siPandas,
  siNumpy,
  siPytorch,
  siTensorflow,
  siReact,
  siFastapi,
  siPostgresql,
  siMongodb,
  siGit,
  siDocker,
  siGithub,
  siHuggingface,
  siScikitlearn,
  siOpencv,
  siTypescript,
  siTailwindcss,
  siNextdotjs,
  siLangchain,
  siQdrant,
  siSqlite,
  siVite,
  siGooglegemini,
  siSupabase,
  siLatex,
  siFramer,
  siGoogledocs,
  siGooglesheets,
  siFlask,
  siOllama,
  siOnnx,
  siOpenapiinitiative,
  siPydantic,
  siPytest,
  siRuff,
  siSpotify,
  siSqlalchemy,
  siVercel,
  siVitest,
  siZod,
  siReactrouter,
  siTestinglibrary,
  siScalar,
  siCssmodules,
  siJavascript,
  siNodedotjs,
  siN8n,
  siGnubash,
  siLinux,
  siApple,
  type SimpleIcon
} from "simple-icons";

import {
  IconBrandAws,
  IconBrandOpenai
} from "@tabler/icons-react";

import { 
  Code2, 
  Brain, 
  Mic, 
  Search, 
  BarChart2, 
  Database, 
  Cpu, 
  Layers,
  Sparkles, 
  Zap, 
  Globe, 
  Users, 
  LayoutDashboard, 
  LineChart, 
  TrendingUp, 
  Workflow, 
  Network, 
  FileText, 
  Table,
  Volume2,
  AudioWaveform,
  AudioLines,
  UserCheck,
  ShieldCheck,
  Activity,
  AppWindow,
  Film,
  FileImage,
  Binary,
  Radio,
  FileCode,
  Sliders,
  GitBranch,
  CheckCircle2,
  Lock,
  Boxes,
  Server
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  color?: string;
  size?: number;
}

// 1. Exact Simple Icons Map (Official Brand Vectors)
const iconMap: Record<string, SimpleIcon> = {
  // Python & Data Science
  "Python": siPython,
  "Python 3.12": siPython,
  "Python 3.10+": siPython,
  "Pandas": siPandas,
  "NumPy": siNumpy,
  "Scikit-learn": siScikitlearn,
  "Scikit-Learn": siScikitlearn,
  "Scikit-Learn RobustScaler & PCA Pipeline": siScikitlearn,
  "PyTorch": siPytorch,
  "TensorFlow": siTensorflow,
  "OpenCV": siOpencv,
  "ONNX Runtime": siOnnx,
  "ONNX": siOnnx,

  // Web Frameworks & JS/TS Ecosystem
  "React": siReact,
  "React 18": siReact,
  "React 19": siReact,
  "React with vite": siReact,
  "React Router": siReactrouter,
  "React Router 7": siReactrouter,
  "Next.js": siNextdotjs,
  "Next.js 14": siNextdotjs,
  "Next.js 15": siNextdotjs,
  "Next.js 16": siNextdotjs,
  "Next.js 16 (App Router)": siNextdotjs,
  "Next.js Node Server": siNextdotjs,
  "TypeScript": siTypescript,
  "TS": siTypescript,
  "JavaScript": siJavascript,
  "JavaScript (JSX)": siJavascript,
  "JS": siJavascript,
  "Node.js": siNodedotjs,
  "Node": siNodedotjs,
  "Vite": siVite,
  "Vite 8": siVite,
  "Tailwind CSS": siTailwindcss,
  "Tailwind CSS v4": siTailwindcss,
  "Tailwind": siTailwindcss,
  "CSS Modules": siCssmodules,
  "Framer Motion": siFramer,

  // Backend & APIs
  "FastAPI": siFastapi,
  "Flask": siFlask,
  "Flask-CORS": siFlask,
  "Flask WSGI Web Server": siFlask,
  "Flask-SQLAlchemy": siSqlalchemy,
  "SQLAlchemy": siSqlalchemy,
  "SQLAlchemy 2.0": siSqlalchemy,
  "SQLModel": siSqlalchemy,
  "Pydantic": siPydantic,
  "Pydantic v2": siPydantic,
  "pydantic-settings": siPydantic,
  "OpenAPI 3.0": siOpenapiinitiative,
  "OpenAPI": siOpenapiinitiative,
  "Scalar": siScalar,

  // Databases & Vector Engines
  "PostgreSQL": siPostgresql,
  "SQL": siPostgresql,
  "SQLite": siSqlite,
  "aiosqlite": siSqlite,
  "SQLite Database Binds": siSqlite,
  "MongoDB": siMongodb,
  "Supabase": siSupabase,
  "Supabase (PostgreSQL)": siSupabase,
  "Qdrant": siQdrant,

  "Google Gemini": siGooglegemini,
  "Google Gemini AI": siGooglegemini,
  "Google Gemini API": siGooglegemini,
  "Gemini API": siGooglegemini,
  "Gemini 2.0 Flash": siGooglegemini,
  "gemini-2.0-flash": siGooglegemini,
  "gemini-2.5-flash": siGooglegemini,
  "models/gemini-2.5-flash": siGooglegemini,
  "gemini-3.5-flash": siGooglegemini,
  "gemini-3.6-flash": siGooglegemini,
  "Ollama": siOllama,
  "qwen2.5:3b": siOllama,
  "Hugging Face": siHuggingface,
  "HuggingFace": siHuggingface,
  "LangChain": siLangchain,
  "Spotify": siSpotify,
  "Spotify Audio Feature Embeddings": siSpotify,

  // DevOps, Testing, Tooling & Automation
  "Docker": siDocker,
  "Git": siGit,
  "GitHub": siGithub,
  "Vercel": siVercel,
  "n8n": siN8n,
  "Pytest": siPytest,
  "pytest": siPytest,
  "pytest-asyncio": siPytest,
  "pytest-mock": siPytest,
  "Vitest": siVitest,
  "React Testing Library": siTestinglibrary,
  "Zod": siZod,
  "Ruff": siRuff,
  "LaTeX": siLatex,
  "texlive.net API": siLatex,
  "Google Docs": siGoogledocs,
  "Google Sheets": siGooglesheets,
  "Linux": siLinux,
  "Apple": siApple,
  "Bash": siGnubash,
};

// 2. React Icon Component Mapping (Tabler Brands & Semantic Lucide)
const componentMap: Record<string, React.ElementType> = {
  // Tabler Brands
  "AWS": IconBrandAws,
  "Amazon Web Services": IconBrandAws,
  "OpenAI": IconBrandOpenai,
  "GPT-4": IconBrandOpenai,
  "ChatGPT": IconBrandOpenai,

  // Voice, Speech & Audio Models
  "Silero VAD": Mic,
  "Silero VAD v3": Mic,
  "Voice Activity Detection (VAD)": Mic,
  "Faster-Whisper": AudioLines,
  "Systran/faster-whisper-small": AudioLines,
  "Whisper": AudioLines,
  "Speech-to-Text (STT)": AudioLines,
  "Kokoro TTS": AudioWaveform,
  "hexgrad/Kokoro-82M": AudioWaveform,
  "Kokoro": AudioWaveform,
  "Text-to-Speech (TTS)": AudioWaveform,
  "Speech-to-Speech AI": AudioWaveform,
  "SpeechBrain": UserCheck,
  "speechbrain/spkrec-ecapa-voxceleb": UserCheck,
  "Speaker Verification": UserCheck,
  "Audio Feature Space Interpolation": AudioWaveform,

  // LLMs, Inference & Search APIs
  "Groq": Cpu,
  "Groq AI": Cpu,
  "Groq API": Cpu,
  "Groq AI API": Cpu,
  "llama-3.3-70b-versatile": Brain,
  "Llama": Brain,
  "Llama 3": Brain,
  "FAISS": Search,
  "Tavily Search API": Search,
  "Tavily API": Search,
  "Finnhub API": TrendingUp,
  "AuraFlow Flask REST API": Radio,

  // UI Frameworks, Graphics & State Management
  "Kivy": AppWindow,
  "KivyMD": AppWindow,
  "Kivy Language (.kv)": FileCode,
  "SDL2": Film,
  "ffpyplayer": Volume2,
  "Pillow": FileImage,
  "Desktop GUI": AppWindow,
  "Multimedia": Film,
  "Zustand": Layers,
  "Recharts": BarChart2,

  // Web Scraping, Servers & Backend Utils
  "BeautifulSoup4": Globe,
  "lxml": Code2,
  "pypdf": FileText,
  "python-docx": FileText,
  "httpx": Radio,
  "uvicorn": Server,
  "Uvicorn": Server,
  "Starlette": Server,
  "Bandit": ShieldCheck,
  "Radon": Activity,
  "oxlint": CheckCircle2,

  // Conceptual, Architecture & Data Science Tags
  "Artificial Intelligence": Brain,
  "AI": Brain,
  "AI System": Brain,
  "AI Engineering": Cpu,
  "Generative AI": Sparkles,
  "GenAI": Sparkles,
  "Dual-Mode AI Generation": Sparkles,
  "Retrieval-Augmented Generation (RAG)": Network,
  "RAG": Network,
  "MLOps": Workflow,
  "LLMOps": Workflow,
  "Full-Stack Development": Workflow,
  "full-stack development": Workflow,
  "Full Stack": Workflow,
  "System Architecture": Layers,
  "Multi-Stage LLM Pipeline": Workflow,
  "Multimodal Evaluation Pipeline": Layers,
  "Hybrid Turn-Taking Classification": Workflow,
  "Web Audio Worklet Transport": Radio,
  "Input-Hash Deduplication": Binary,
  "Web Search Augmentation": Search,
  "LaTeX Compilation Engine": FileCode,
  "Automated Regression Evaluation": Activity,
  "Golden Dataset Benchmarking": CheckCircle2,
  "API Fallback Chains": GitBranch,
  "Asynchronous I/O Operations": Zap,
  "Dynamic Key Rotation": Sliders,
  "Automated Data Profiling": BarChart2,
  "Precomputed Aggregations": Zap,
  "Rate Limiting": ShieldCheck,
  "Row-Level Security (RLS)": Lock,
  "Data Analysis": BarChart2,
  "Data Analytics": TrendingUp,
  "Dashboard Development": LayoutDashboard,
  "Data Visualization": LineChart,
  "Technical Analysis": TrendingUp,
  "State Management": Layers,
  "State Management (Favorites, Likes, History)": Layers,
  "Cosine Similarity": Network,
  "Euclidean Distance Matrix": Network,
  "Euclidean & Cosine Similarity Distance Engine": Network,
  "RobustScaler & PCA Dimensionality Reduction": Sliders,
  "Multi-Bind ORM Architecture": Database,
  "REST API Protocols": Radio,
  "Event-Driven GUI Architecture": AppWindow,
  "Declarative UI Modeling (.kv)": FileCode,
  "Screen Management & Navigation Transitions": AppWindow,
  "Asynchronous Multimedia & Audio Loading": Film,
  "Dynamic Asset Binding & Layout Optimization": Boxes,
  "Cross-platform Desktop Runtime (Windows / macOS / Linux)": AppWindow,
  "Team Leadership": Users,
  "Regression": TrendingUp,
  "Feature Engineering": Binary,
  "Argon2": ShieldCheck,
  "Argon2 Password Hashing": ShieldCheck,
  "JWT": Lock,
  "PyJWT": Lock,
  "JWT Session Management": Lock,
  "50/30/20 Budgeting Rule": TrendingUp,
  "Personal Finance Tech": TrendingUp,
  "Dynamic Month Aggregation": BarChart2,
  "Context-Aware AI Generation": Sparkles,
  "Relational Database Schema": Database,
};

export function TechIcon({ name, className = "w-4 h-4", color, size = 16 }: TechIconProps) {
  // 1. Direct match in Simple Icons Map
  let iconData = iconMap[name];
  
  // 2. Direct match in Component Map (Tabler / Lucide)
  let ComponentIcon = componentMap[name];

  // 3. Fallback matching if direct match fails
  if (!iconData && !ComponentIcon) {
    const clean = name.trim();
    const lower = clean.toLowerCase();

    // Check normalized Simple Icons
    for (const [key, icon] of Object.entries(iconMap)) {
      if (key.toLowerCase() === lower) {
        iconData = icon;
        break;
      }
    }

    // Check normalized Component Map
    if (!iconData) {
      for (const [key, Icon] of Object.entries(componentMap)) {
        if (key.toLowerCase() === lower) {
          ComponentIcon = Icon;
          break;
        }
      }
    }

    // Keyword heuristics fallback
    if (!iconData && !ComponentIcon) {
      // Simple Icons heuristics
      if (lower.includes("python")) iconData = siPython;
      else if (lower.includes("pandas")) iconData = siPandas;
      else if (lower.includes("numpy")) iconData = siNumpy;
      else if (lower.includes("pytorch")) iconData = siPytorch;
      else if (lower.includes("tensorflow")) iconData = siTensorflow;
      else if (lower.includes("scikit") || lower.includes("sklearn")) iconData = siScikitlearn;
      else if (lower.includes("react router")) iconData = siReactrouter;
      else if (lower.includes("react")) iconData = siReact;
      else if (lower.includes("next")) iconData = siNextdotjs;
      else if (lower.includes("fastapi")) iconData = siFastapi;
      else if (lower.includes("flask")) iconData = siFlask;
      else if (lower.includes("sqlalchemy") || lower.includes("sqlmodel")) iconData = siSqlalchemy;
      else if (lower.includes("pydantic")) iconData = siPydantic;
      else if (lower.includes("sqlite") || lower.includes("aiosqlite")) iconData = siSqlite;
      else if (lower.includes("postgres") || lower.includes("sql")) iconData = siPostgresql;
      else if (lower.includes("mongo")) iconData = siMongodb;
      else if (lower.includes("docker")) iconData = siDocker;
      else if (lower.includes("git")) iconData = siGit;
      else if (lower.includes("github")) iconData = siGithub;
      else if (lower.includes("hugging")) iconData = siHuggingface;
      else if (lower.includes("opencv")) iconData = siOpencv;
      else if (lower.includes("onnx")) iconData = siOnnx;
      else if (lower.includes("tailwind")) iconData = siTailwindcss;
      else if (lower.includes("typescript") || lower === "ts") iconData = siTypescript;
      else if (lower.includes("javascript") || lower === "js") iconData = siJavascript;
      else if (lower.includes("node")) iconData = siNodedotjs;
      else if (lower.includes("vite")) iconData = siVite;
      else if (lower.includes("gemini")) iconData = siGooglegemini;
      else if (lower.includes("ollama") || lower.includes("qwen")) iconData = siOllama;
      else if (lower.includes("langchain")) iconData = siLangchain;
      else if (lower.includes("qdrant")) iconData = siQdrant;
      else if (lower.includes("supabase")) iconData = siSupabase;
      else if (lower.includes("latex") || lower.includes("texlive")) iconData = siLatex;
      else if (lower.includes("framer")) iconData = siFramer;
      else if (lower.includes("n8n")) iconData = siN8n;
      else if (lower.includes("vercel")) iconData = siVercel;
      else if (lower.includes("vitest")) iconData = siVitest;
      else if (lower.includes("pytest")) iconData = siPytest;
      else if (lower.includes("testing-library") || lower.includes("testing library")) iconData = siTestinglibrary;
      else if (lower.includes("zod")) iconData = siZod;
      else if (lower.includes("scalar")) iconData = siScalar;
      else if (lower.includes("openapi")) iconData = siOpenapiinitiative;
      else if (lower.includes("ruff")) iconData = siRuff;
      else if (lower.includes("spotify")) iconData = siSpotify;
      else if (lower.includes("docs") || lower.includes("doc")) iconData = siGoogledocs;
      else if (lower.includes("sheet")) iconData = siGooglesheets;
      else if (lower.includes("css")) iconData = siCssmodules;
      else if (lower.includes("linux")) iconData = siLinux;
      else if (lower.includes("apple")) iconData = siApple;
      else if (lower.includes("bash")) iconData = siGnubash;
      
      // Tabler / Lucide heuristics
      else if (lower.includes("aws") || lower.includes("amazon")) ComponentIcon = IconBrandAws;
      else if (lower.includes("openai") || lower.includes("gpt")) ComponentIcon = IconBrandOpenai;
      else if (lower.includes("whisper") || lower.includes("stt") || lower.includes("speech-to-text")) ComponentIcon = AudioLines;
      else if (lower.includes("kokoro") || lower.includes("tts") || lower.includes("text-to-speech")) ComponentIcon = AudioWaveform;
      else if (lower.includes("silero") || lower.includes("vad") || lower.includes("voice") || lower.includes("mic")) ComponentIcon = Mic;
      else if (lower.includes("speaker") || lower.includes("speechbrain") || lower.includes("ecapa")) ComponentIcon = UserCheck;
      else if (lower.includes("groq")) ComponentIcon = Cpu;
      else if (lower.includes("llama")) ComponentIcon = Brain;
      else if (lower.includes("faiss") || lower.includes("tavily") || lower.includes("search")) ComponentIcon = Search;
      else if (lower.includes("finnhub") || lower.includes("stock") || lower.includes("financial")) ComponentIcon = TrendingUp;
      else if (lower.includes("kivy") || lower.includes("gui") || lower.includes("desktop")) ComponentIcon = AppWindow;
      else if (lower.includes("sdl") || lower.includes("video") || lower.includes("multimedia") || lower.includes("ffpyplayer")) ComponentIcon = Film;
      else if (lower.includes("pillow") || lower.includes("image")) ComponentIcon = FileImage;
      else if (lower.includes("zustand") || lower.includes("state")) ComponentIcon = Layers;
      else if (lower.includes("recharts") || lower.includes("chart")) ComponentIcon = BarChart2;
      else if (lower.includes("soup") || lower.includes("lxml") || lower.includes("web")) ComponentIcon = Globe;
      else if (lower.includes("pdf") || lower.includes("docx")) ComponentIcon = FileText;
      else if (lower.includes("uvicorn") || lower.includes("starlette") || lower.includes("server") || lower.includes("httpx")) ComponentIcon = Server;
      else if (lower.includes("bandit") || lower.includes("security") || lower.includes("auth") || lower.includes("rate limit") || lower.includes("rls")) ComponentIcon = ShieldCheck;
      else if (lower.includes("radon") || lower.includes("metric") || lower.includes("eval") || lower.includes("performance")) ComponentIcon = Activity;
      else if (lower.includes("generative ai") || lower.includes("genai")) ComponentIcon = Sparkles;
      else if (lower.includes("artificial intelligence") || lower.includes("ai")) ComponentIcon = Brain;
      else if (lower.includes("rag") || lower.includes("retrieval")) ComponentIcon = Network;
      else if (lower.includes("mlops") || lower.includes("llmops") || lower.includes("full-stack") || lower.includes("pipeline") || lower.includes("workflow")) ComponentIcon = Workflow;
      else if (lower.includes("leadership") || lower.includes("team") || lower.includes("users")) ComponentIcon = Users;
      else if (lower.includes("dashboard")) ComponentIcon = LayoutDashboard;
      else if (lower.includes("visualization")) ComponentIcon = LineChart;
      else if (lower.includes("analysis") || lower.includes("analytics")) ComponentIcon = BarChart2;
    }
  }

  // 1. If Simple Icon matched, render pristine official vector SVG
  if (iconData) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color || `#${iconData.hex}`}
        className={className}
      >
        <title>{iconData.title}</title>
        <path d={iconData.path} />
      </svg>
    );
  }

  // 2. If Component Icon matched, render Tabler or Lucide React Component
  const FinalIcon = ComponentIcon || Code2;
  return <FinalIcon className={className} size={size} style={{ width: size, height: size }} />;
}
