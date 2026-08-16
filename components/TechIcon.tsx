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
  type SimpleIcon
} from "simple-icons";
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
  Table
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  color?: string;
  size?: number;
}

const iconMap: Record<string, SimpleIcon> = {
  "Python": siPython,
  "Pandas": siPandas,
  "NumPy": siNumpy,
  "PyTorch": siPytorch,
  "TensorFlow": siTensorflow,
  "React": siReact,
  "React 19": siReact,
  "React with vite": siReact,
  "FastAPI": siFastapi,
  "PostgreSQL": siPostgresql,
  "MongoDB": siMongodb,
  "Git": siGit,
  "Docker": siDocker,
  "GitHub": siGithub,
  "Hugging Face": siHuggingface,
  "Scikit-learn": siScikitlearn,
  "OpenCV": siOpencv,
  "TypeScript": siTypescript,
  "TS": siTypescript,
  "Tailwind CSS": siTailwindcss,
  "Next.js": siNextdotjs,
  "Next.js 16": siNextdotjs,
  "LangChain": siLangchain,
  "Qdrant": siQdrant,
  "SQL": siPostgresql,
  "SQLite": siSqlite,
  "Vite": siVite,
  "Google Gemini API": siGooglegemini,
  "Gemini API": siGooglegemini,
  "Gemini 2.0 Flash": siGooglegemini,
  "Supabase": siSupabase,
  "LaTeX": siLatex,
  "Framer Motion": siFramer,
  "Google Docs": siGoogledocs,
  "Google Sheets": siGooglesheets,
};

// Lucide icon mapping for conceptual tags, AI models, and skills
const lucideIconMap: Record<string, React.ElementType> = {
  "Artificial Intelligence": Brain,
  "AI": Brain,
  "Generative AI": Sparkles,
  "GenAI": Sparkles,
  "Retrieval-Augmented Generation (RAG)": Network,
  "RAG": Network,
  "Team Leadership": Users,
  "full-stack development": Workflow,
  "Full-Stack Development": Workflow,
  "Full Stack": Workflow,
  "Data Analysis": BarChart2,
  "Dashboard Development": LayoutDashboard,
  "Data Visualization": LineChart,
  "Data Analytics": TrendingUp,
  "AI Engineering": Cpu,
  "Silero VAD": Mic,
  "Faster-Whisper": Mic,
  "Kokoro TTS": Mic,
  "Ollama": Brain,
  "Groq": Cpu,
  "Groq AI": Cpu,
  "Tavily API": Search,
  "Finnhub API": BarChart2,
  "Recharts": BarChart2,
  "Zustand": Layers,
};

export function TechIcon({ name, className = "w-4 h-4", color, size = 16 }: TechIconProps) {
  // 1. Direct match in Simple Icons
  let iconData = iconMap[name];
  
  // 2. Direct match in Lucide Icon Map
  let LucideIcon = lucideIconMap[name];

  // 3. Fallback matching if direct match fails
  if (!iconData && !LucideIcon) {
    const lower = name.toLowerCase();

    // Check normalized simple icons
    for (const [key, icon] of Object.entries(iconMap)) {
      if (key.toLowerCase() === lower) {
        iconData = icon;
        break;
      }
    }

    // Check normalized lucide icons or key inclusion
    if (!iconData) {
      for (const [key, Icon] of Object.entries(lucideIconMap)) {
        if (key.toLowerCase() === lower || lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
          LucideIcon = Icon;
          break;
        }
      }
    }

    // Keyword heuristics fallback
    if (!iconData && !LucideIcon) {
      if (lower.includes("generative ai") || lower.includes("genai")) LucideIcon = Sparkles;
      else if (lower.includes("artificial intelligence") || lower.includes("ai")) LucideIcon = Brain;
      else if (lower.includes("rag") || lower.includes("retrieval")) LucideIcon = Network;
      else if (lower.includes("leadership") || lower.includes("team")) LucideIcon = Users;
      else if (lower.includes("full-stack") || lower.includes("fullstack")) LucideIcon = Workflow;
      else if (lower.includes("dashboard")) LucideIcon = LayoutDashboard;
      else if (lower.includes("visualization")) LucideIcon = LineChart;
      else if (lower.includes("analysis") || lower.includes("analytics")) LucideIcon = BarChart2;
      else if (lower.includes("voice") || lower.includes("speech") || lower.includes("audio") || lower.includes("tts") || lower.includes("vad")) LucideIcon = Mic;
      else if (lower.includes("doc")) LucideIcon = FileText;
      else if (lower.includes("sheet")) LucideIcon = Table;
    }
  }

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

  const FinalIcon = LucideIcon || Code2;
  return <FinalIcon className={className} style={{ width: size, height: size }} />;
}
