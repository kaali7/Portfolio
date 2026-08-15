export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  role: string;
  timeline: string;
  description: string;
  fullDescription: string;
  problemStatement: string;
  solutionImpact: string;
  architectureOverview: string;
  previewMetric: string;
  metrics: { label: string; val: string }[];
  highlights: string[];
  tags: string[];
  codeSnippet: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: "netran-ai",
    title: "Netran AI",
    category: "AI Engineering",
    subcategory: "Voice AI",
    role: "AI Engineer & Systems Architect",
    timeline: "2026 (Active)",
    description: "Autonomous, web-augmented, multimodal AI technical interviewer simulating real-time voice interaction loops.",
    fullDescription: "Netran AI is an autonomous, web-augmented, multimodal AI technical interviewer system that simulates corporate interview loops using continuous real-time voice interaction, dynamic web research, and multi-branch evaluation.",
    problemStatement: "Simulating high-fidelity, real-time technical interviews requires synchronous STT, VAD, LLM turn-taking, and TTS orchestration without buffer latency, foreign noise interference, or rate-limit lockups.",
    solutionImpact: "Delivered a 4-stage operational pipeline featuring continuous PCM recording, dynamic whisper vocabulary injection, sub-250ms TTFA neural speech output, and instant input-hash deduplication.",
    architectureOverview: "Stage 1 queries web engineering sources via Tavily API & Gemini 3.6 Flash; Stage 2 performs resume skill-gap cross-matching; Stage 3 executes live voice loop using Silero VAD v3, Faster-Whisper int8 STT, SpeechBrain ECAPA speaker verification, Ollama Qwen2.5:3b, and Kokoro-82M TTS; Stage 4 runs 3-branch Gemini multimodal evaluation.",
    previewMetric: "< 250ms TTFA",
    metrics: [
      { label: "TTFA Latency", val: "<250ms" },
      { label: "Pipeline Stages", val: "4-Stage" },
      { label: "Speaker Verifier", val: "ECAPA-TDNN" },
      { label: "Audio Transport", val: "16kHz PCM" }
    ],
    highlights: [
      "4-Stage Model Architecture (JD Research, Resume Cross-Matching, Live Voice Loop, Multimodal Evaluation)",
      "Silero VAD v3 + Faster-Whisper int8 STT + Kokoro-82M neural TTS streaming playback engine",
      "SpeechBrain ECAPA-TDNN candidate speaker verification to auto-reject background speech",
      "SHA-256 fingerprinting on Resume + JD input hashes for instant SQLite cache retrieval"
    ],
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Ollama",
      "Gemini API",
      "Faster-Whisper",
      "Kokoro TTS",
      "Silero VAD",
      "PyTorch"
    ],
    githubLink: "https://github.com/kaali7/netran-ai",
    codeSnippet: `from faster_whisper import WhisperModel
from speechbrain.inference import SpeakerRecognition

class NetranVoiceEngine:
    def __init__(self, model_size="small"):
        self.stt = WhisperModel(model_size, device="cuda", compute_type="int8")
        self.spk_verifier = SpeakerRecognition.from_hparams(
            source="speechbrain/spkrec-ecapa-voxceleb"
        )

    async def process_voice_turn(self, pcm_bytes, candidate_emb):
        # Verify candidate speaker identity & transcribe streaming audio
        is_candidate = self.spk_verifier.verify_batch(pcm_bytes, candidate_emb)
        if is_candidate:
            segments, _ = self.stt.transcribe(pcm_bytes, beam_size=5)
            return "".join([s.text for s in segments])`,
    image: "/projects/netran-ai.jpg"
  },
  {
    id: 2,
    slug: "resumebuilder",
    title: "ResumeBuilder",
    category: "Full-Stack AI",
    subcategory: "LLM Application",
    role: "Full-Stack AI Architect",
    timeline: "2026 (Completed)",
    description: "Multi-stage LLM pipeline generating, evaluating, and compiling ATS-optimized resumes with automated LaTeX PDF rendering.",
    fullDescription: "ResumeBuilder is a React SPA and FastAPI backend system that runs a multi-stage LLM pipeline to generate, edit, evaluate, and compile ATS-optimized resumes with automated LaTeX PDF rendering and golden dataset inspection.",
    problemStatement: "Generic resume builders lack market intelligence alignment, ATS keyword optimization, and real-time structured LaTeX compilation fallbacks.",
    solutionImpact: "Integrated Tavily web research for role/company market intelligence, multi-stage LLM content generation, 4-layer evaluation analytics inspector, and dual LaTeX PDF rendering.",
    architectureOverview: "Connects a React 19 SPA to an asynchronous FastAPI backend executing a 4-stage pipeline (Market Research, LLM Content Gen, LaTeX Code Gen, PDF Compilation & SVG Thumbnail Rendering) with SQLite persistence and key-rotation security.",
    previewMetric: "Dual LaTeX Engine",
    metrics: [
      { label: "Layer Analytics", val: "4-Level L1-L4" },
      { label: "PDF Rendering", val: "pdflatex + API" },
      { label: "LLM Providers", val: "Gemini + Groq" },
      { label: "Domain Categories", val: "9 Active" }
    ],
    highlights: [
      "Multi-stage LLM generation pipeline for ATS-optimized resume creation",
      "Stage 0.5 Tavily Web Research integration for role & company market intelligence",
      "Dual compilation strategy (Local pdflatex binary execution with texlive.net API fallback)",
      "4-Level Layer Evaluation Analytics Inspector (L1 Component to L4 Regression)"
    ],
    tags: [
      "React",
      "FastAPI",
      "Python",
      "LaTeX",
      "SQLite",
      "Gemini API",
      "Groq",
      "Vite",
      "SQLAlchemy"
    ],
    githubLink: "https://github.com/kaali7/ResumeBuilder",
    codeSnippet: `# Multi-Backend Fallback Strategy for LLM Generation
async def generate_resume_stage1(payload: ResumePayload):
    try:
        # Primary LLM provider with key rotation
        return await gemini_provider.generate_content(payload)
    except QuotaExceededError:
        # Fallback to Groq provider chain
        return await groq_provider.generate_content(payload)`,
    image: "/projects/resumebuilder.jpg"
  },
  {
    id: 3,
    slug: "ai-powered-hr-dashboard",
    title: "Auto Dash: AI-Powered HR Dashboard",
    category: "Full-Stack AI",
    subcategory: "HR Analytics",
    role: "Full-Stack AI Engineer",
    timeline: "2026 (Active)",
    description: "Interactive AI dashboard workspace generating deep data insights, KPIs, and predictive workforce telemetry using Gemini AI.",
    fullDescription: "An advanced, high-fidelity AI-powered HR dashboard application that allows users to upload raw CSV datasets and automatically generates interactive workspaces featuring deep data insights, KPIs, and predictive workforce telemetry using Gemini AI.",
    problemStatement: "Manual HR dataset analysis is slow, error-prone, and fails to automatically identify predictive attrition patterns or statistical workforce anomalies.",
    solutionImpact: "Achieved ~150ms chart load times via precomputed aggregations and automated data profiling, resolving 43/47 production issues (91% completion).",
    architectureOverview: "Built with Next.js 16 (App Router), React 19, Supabase (PostgreSQL with Row-Level Security on 9 tables), Gemini 2.0 Flash for semantic chart layout planning, and Framer Motion / Recharts visualization.",
    previewMetric: "~150ms Chart Load",
    metrics: [
      { label: "Chart Latency", val: "~150ms" },
      { label: "Database Security", val: "9 RLS Tables" },
      { label: "AI Engine", val: "Gemini 2.0 Flash" },
      { label: "Test Suite", val: "50+ Vitest" }
    ],
    highlights: [
      "Gemini 2.0 Flash dataset analysis suggesting optimal charts & interactive bento layouts",
      "Dual-mode generation engine with rule-based fallback when AI quota (429) is reached",
      "Precomputed aggregations reducing complex chart loading times down to ~150ms",
      "Enterprise security with Supabase Auth, Row-Level Security (RLS), and MIME validation"
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Gemini API"
    ],
    githubLink: "https://github.com/kaali7/AI-powered-hr-dashboard",
    liveLink: "https://ai-powered-hr-dashboard-sigma.vercel.app/",
    codeSnippet: `// Semantic Chart Suggestion & Fallback Engine
export async function generateDashboardWorkspace(fileBuffer: Buffer) {
  const profile = await profileCSVDataset(fileBuffer);
  try {
    return await geminiFlash.analyzeWorkspace(profile);
  } catch (quotaError) {
    return ruleBasedEngine.generateFallbackWorkspace(profile);
  }
}`,
    image: "/projects/ai-powered-hr-dashboard.jpg"
  },
  {
    id: 4,
    slug: "stockmind-ai",
    title: "StockMind AI",
    category: "Full-Stack AI",
    subcategory: "Financial Analytics",
    role: "Frontend & AI Engineer",
    timeline: "2026 (Completed)",
    description: "Real-time AI stock analytics dashboard with interactive technical indicator overlays and Groq AI chat.",
    fullDescription: "StockMind AI is an AI-powered stock analytics dashboard featuring real-time market data lookups, technical charts with financial indicator overlays (OHLC, SMA, RSI, MACD, Bollinger Bands), persistent watchlists, and an integrated AI chat system powered by Groq AI.",
    problemStatement: "Retail investors lack unified tools offering technical chart overlays, real-time telemetry, and instant conversational AI market context.",
    solutionImpact: "Delivered a real-time stock lookup platform with 6 KPI cards, technical analysis indicator overlays, persistent watchlists, and sub-100ms Groq AI analysis.",
    architectureOverview: "React SPA with TypeScript, Tailwind CSS v4, Zustand state management, Recharts visualization, Finnhub API for market data, and Groq AI API for LLM financial analysis.",
    previewMetric: "Sub-100ms Groq AI",
    metrics: [
      { label: "Indicators", val: "SMA, RSI, MACD" },
      { label: "KPI Telemetry", val: "6 Real-Time Cards" },
      { label: "AI Engine", val: "Groq Llama-3" },
      { label: "State Engine", val: "Zustand" }
    ],
    highlights: [
      "Real-time stock search with 6 KPI cards (Price, Open, Volume, Market Cap, 52W Range)",
      "Interactive OHLC charts with SMA 50/200, RSI 14, MACD, and Bollinger Bands overlays",
      "Integrated AI-powered chat using Groq AI for instant company & market analysis",
      "Persistent watchlist management with Zustand local persistence"
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Groq AI",
      "Finnhub API"
    ],
    githubLink: "https://github.com/kaali7/stockmind-ai",
    liveLink: "https://stockmind-ai-six.vercel.app/",
    codeSnippet: `// Technical Indicator Overlay Calculator
export function calculateRSI(prices: number[], period = 14): number[] {
  let gains = 0, losses = 0;
  for (let i = 1; i <= period; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff >= 0) gains += diff; else losses -= diff;
  }
  const avgGain = gains / period, avgLoss = losses / period;
  const rs = avgGain / (avgLoss || 1);
  return [100 - (100 / (1 + rs))];
}`,
    image: "/projects/stockmind-ai.jpg"
  }
];
