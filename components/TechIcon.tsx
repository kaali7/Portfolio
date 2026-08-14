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
  siCplusplus,
  siNvidia,
  siMlflow,
  siLinux,
  siKubernetes,
  siApachekafka,
  siRedis,
  type SimpleIcon
} from "simple-icons";

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
  "Tailwind CSS": siTailwindcss,
  "Next.js": siNextdotjs,
  "LangChain": siLangchain,
  "Qdrant": siQdrant,
  "SQL": siPostgresql,
  "C++": siCplusplus,
  "NVIDIA": siNvidia,
  "TensorRT": siNvidia,
  "MLflow": siMlflow,
  "AWS": siDocker,
  "Linux": siLinux,
  "Kubernetes": siKubernetes,
  "Kafka": siApachekafka,
  "Redis": siRedis,
  "AutoGen": siPython,
  "LangGraph": siLangchain
};

export function TechIcon({ name, className = "w-4 h-4", color, size = 16 }: TechIconProps) {
  const iconData = iconMap[name];
  if (!iconData) return null;

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
