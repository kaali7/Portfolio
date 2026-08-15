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
  Globe
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
};

// Lucide icon mapping for conceptual, voice AI, analytics, or niche tech tags
const lucideIconMap: Record<string, React.ElementType> = {
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
  // Check Simple Icons map
  const iconData = iconMap[name];
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

  // Check Lucide conceptual map
  const LucideIcon = lucideIconMap[name] || Code2;
  return <LucideIcon className={className} style={{ width: size, height: size }} />;
}

