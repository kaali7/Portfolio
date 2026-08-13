export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  previewMetric: string;
  role: string;
  timeline: string;
  architectureOverview: string;
  problemStatement: string;
  solutionImpact: string;
  metrics: { label: string; val: string }[];
  highlights: string[];
  tags: string[];
  codeSnippet: string;
}

export const projectsData: ProjectItem[] = [
  { 
    id: 1,
    slug: "financial-forecasting-engine",
    title: "Financial Forecasting Engine", 
    category: "AI / ML",
    role: "Lead ML Architect",
    timeline: "2024 (6 Months)",
    description: "High-frequency temporal neural networks predicting market risk with automated backtesting pipelines.",
    fullDescription: "Architected an end-to-end temporal transformer & LSTM deep learning system for real-time market risk forecasting. The system ingests sub-second limit order book feeds, computes dynamic volatility surfaces, and executes algorithmic portfolio rebalancing strategies with microsecond latency.",
    problemStatement: "Traditional risk models failed to capture non-linear market regime shifts during high-volatility events, leading to severe drawdown risks.",
    solutionImpact: "Reduced portfolio drawdown by 34% during market stress tests while improving multi-horizon return prediction accuracy by 14.2%.",
    architectureOverview: "Built on PyTorch & Ray Train, the pipeline processes multi-channel time-series data using custom spatio-temporal attention layers. Model weights are dynamically updated via online learning and deployed using Triton Inference Server.",
    previewMetric: "98.2% Accuracy",
    metrics: [
      { label: "Prediction Accuracy", val: "98.2%" },
      { label: "Execution Latency", val: "<12ms" },
      { label: "Backtest Dataset", val: "10M+ Points" },
      { label: "Drawdown Reduction", val: "34%" }
    ],
    highlights: [
      "Multi-horizon temporal attention network trained on high-frequency market order books",
      "Automated backtesting engine featuring realistic slippage & dynamic fee simulation",
      "Distributed multi-GPU training pipeline built with PyTorch & Ray Train",
      "Sub-12ms inference serving via Triton Inference Server with C++ gRPC bindings"
    ],
    tags: ["PyTorch", "TimeSeries", "Scikit-Learn", "Apache Spark", "FastAPI", "Ray Train", "Triton"],
    codeSnippet: `import torch
import torch.nn as nn

class TemporalAttentionTransformer(nn.Module):
    def __init__(self, d_model=256, nhead=8, num_layers=6):
        super().__init__()
        self.encoder_layer = nn.TransformerEncoderLayer(d_model=d_model, nhead=nhead)
        self.transformer = nn.TransformerEncoder(self.encoder_layer, num_layers=num_layers)
        self.risk_head = nn.Linear(d_model, 1)

    def forward(self, x):
        # x shape: (seq_len, batch_size, d_model)
        feat = self.transformer(x)
        risk_score = torch.sigmoid(self.risk_head(feat[-1]))
        return risk_score`
  },
  { 
    id: 2,
    slug: "rag-document-intelligence",
    title: "RAG Document Intelligence", 
    category: "GenAI & LLMs",
    role: "Senior GenAI Engineer",
    timeline: "2024 (4 Months)",
    description: "Sub-second vector retrieval augmented generation system across millions of enterprise documents.",
    fullDescription: "Built an enterprise-grade Retrieval-Augmented Generation (RAG) platform capable of indexing millions of unstructured PDFs, SEC filings, and technical documentation. Utilizes hybrid vector-sparse search, contextual re-ranking, and strict hallucination guardrails.",
    problemStatement: "Enterprise knowledge workers spent 15+ hours weekly manually searching through fragmented 500+ page technical manuals and legal contracts.",
    solutionImpact: "Cut research query resolution time from hours to under 3 seconds with zero-hallucination citation attribution.",
    architectureOverview: "Documents are ingested via async parsing workers, chunked semantically, and embedded into Qdrant & Pinecone. User queries trigger hybrid BM25 + dense retrieval, followed by a Cohere cross-encoder re-ranker before LLM synthesis.",
    previewMetric: "<35ms Retrieval",
    metrics: [
      { label: "Query Latency", val: "<35ms" },
      { label: "Docs Indexed", val: "5M+" },
      { label: "Precision@K", val: "96.5%" },
      { label: "Time Saved", val: "85%" }
    ],
    highlights: [
      "Hybrid sparse (BM25) + dense vector retrieval using Pinecone & OpenAI Embeddings",
      "Cross-encoder re-ranking pipeline ensuring 99%+ context relevance for LLM synthesis",
      "Source citation attribution engine with precise page and snippet highlighting",
      "Automated evaluation benchmark suite using Ragas & custom LLM-as-a-judge criteria"
    ],
    tags: ["LangChain", "LlamaIndex", "OpenAI", "Pinecone", "Qdrant", "Python", "FastAPI"],
    codeSnippet: `from langchain.retrievers import EnsembleRetriever
from langchain.retrievers.bm25 import BM25Retriever
from langchain_community.vectorstores import Qdrant

def build_hybrid_rag_pipeline(vector_store, documents):
    bm25_retriever = BM25Retriever.from_documents(documents)
    bm25_retriever.k = 10
    
    dense_retriever = vector_store.as_retriever(search_kwargs={"k": 10})
    
    ensemble_retriever = EnsembleRetriever(
        retrievers=[bm25_retriever, dense_retriever],
        weights=[0.4, 0.6]
    )
    return ensemble_retriever`
  },
  { 
    id: 3,
    slug: "speech-to-speech-translation",
    title: "Speech-to-Speech Translation", 
    category: "AI Systems",
    role: "Audio ML Engineer",
    timeline: "2023 — 2024",
    description: "Ultra-low latency streaming voice synthesis and real-time multilingual neural speech translation.",
    fullDescription: "Engineered a real-time streaming voice-to-voice translation stack. Combines chunked ASR via OpenAI Whisper, low-latency LLM translation, and neural TTS voice cloning over bi-directional WebSockets for seamless cross-lingual human conversation.",
    problemStatement: "Global multilingual communication suffered from 3+ second latencies and robotic, monotone text-to-speech outputs.",
    solutionImpact: "Achieved human-perceptible real-time translation latencies under 180ms with 95% voice timbre preservation.",
    architectureOverview: "Audio chunks are streamed over WebSockets to a GPU-accelerated Whisper pipeline. As text tokens are recognized, an optimized LLM translates tokens on-the-fly, feeding a streaming neural vocoder for instant voice synthesis.",
    previewMetric: "<180ms Latency",
    metrics: [
      { label: "E2E Latency", val: "<180ms" },
      { label: "Languages Supported", val: "42+" },
      { label: "BLEU Score", val: "41.8" },
      { label: "Timbre Match", val: "95%" }
    ],
    highlights: [
      "Bi-directional WebSocket streaming architecture minimizing end-to-end audio lag",
      "Neural voice cloning preserving original speaker timbre, cadence, and vocal emotion",
      "ONNX Runtime & TensorRT INT8 quantization optimized for cloud edge deployment",
      "Zero-buffer streaming pipeline with chunked neural speech vocoder"
    ],
    tags: ["Whisper", "WebSockets", "FastAPI", "ONNX", "TorchAudio", "Python", "C++"],
    codeSnippet: `import asyncio
import websockets

async def stream_audio_translation(websocket, path):
    async for audio_chunk in websocket:
        # Step 1: Rapid ASR via Whisper ONNX
        tokens = await whisper_asr_stream(audio_chunk)
        # Step 2: Streaming LLM translation
        translated_tokens = await translate_stream(tokens)
        # Step 3: Neural Vocoder TTS synthesis
        translated_pcm = await neural_tts_synthesize(translated_tokens)
        await websocket.send(translated_pcm)`
  },
  { 
    id: 4,
    slug: "autonomous-agent-framework",
    title: "Autonomous Agent Framework", 
    category: "Agentic AI",
    role: "Lead Agent Architect",
    timeline: "2024 (Present)",
    description: "Multi-agent orchestration system for complex automated software reasoning and task execution.",
    fullDescription: "Developed a multi-agent autonomous reasoning framework designed to execute complex software workflows, write unit tests, debug runtime failures, and interact with external REST APIs and SQL databases securely.",
    problemStatement: "Single-prompt LLM agents frequently hallucinates, loop endlessly on complex multi-step tasks, or fail when tools return unexpected schemas.",
    solutionImpact: "Boosted multi-step task completion rate to 94.1% while slashing token consumption by 35% through structured multi-agent consensus.",
    architectureOverview: "Utilizes a graph-based state machine (LangGraph/AutoGen). A Master Planner delegates sub-tasks to specialized sub-agents (Coder, Auditor, Executor). Code is executed inside ephemeral, isolated Docker containers.",
    previewMetric: "94.1% Success Rate",
    metrics: [
      { label: "Task Success Rate", val: "94.1%" },
      { label: "Parallel Agents", val: "16 Active" },
      { label: "Token Efficiency", val: "+35%" },
      { label: "Sandbox Isolation", val: "100%" }
    ],
    highlights: [
      "Hierarchical agent delegation (Planner, Executor, Reviewer, and Sandbox Tester)",
      "ReAct reasoning loop with automated self-reflection and retry logic",
      "Isolated Docker sandbox execution for safe tool invocation and code generation",
      "Persistent state checkpointing allowing human pause-and-resume oversight"
    ],
    tags: ["Python", "AutoGen", "LangGraph", "Docker", "PostgreSQL", "FastAPI"],
    codeSnippet: `from langgraph.graph import StateGraph, END

def create_autonomous_agent_graph():
    workflow = StateGraph(AgentState)
    workflow.add_node("planner", plan_task)
    workflow.add_node("executor", execute_in_docker)
    workflow.add_node("reviewer", audit_code_output)
    
    workflow.add_edge("planner", "executor")
    workflow.add_conditional_edges("executor", is_execution_clean, {
        True: "reviewer",
        False: "planner"  # Self-reflection retry loop
    })
    return workflow.compile()`
  },
  { 
    id: 5,
    slug: "high-throughput-vision-analytics",
    title: "High-Throughput Vision Analytics", 
    category: "Computer Vision",
    role: "Edge AI Specialist",
    timeline: "2023 — 2024",
    description: "Real-time edge object tracking and anomaly detection engine processing multi-stream video feeds.",
    fullDescription: "Constructed a high-throughput computer vision analytics pipeline deployed at the industrial edge. Processes 16+ simultaneous 4K CCTV camera streams for real-time worker safety compliance, spatial tracking, and visual anomaly detection.",
    problemStatement: "Industrial facility monitoring relied on manual human viewing of 30+ camera screens, leading to missed safety violations and slow hazard response times.",
    solutionImpact: "Automated 100% of camera streams with sub-15ms visual anomaly alerting and 91.4% mAP detection accuracy.",
    architectureOverview: "Custom YOLOv8 models optimized via TensorRT FP16/INT8 post-training quantization. Video feeds are ingested via DeepStream SDK, tracked using ByteTrack, and synced over WebSockets.",
    previewMetric: "120+ FPS Processing",
    metrics: [
      { label: "Processing FPS", val: "120+ FPS" },
      { label: "Simultaneous Streams", val: "16 Cameras" },
      { label: "Detection mAP@50", val: "91.4%" },
      { label: "Latency per Frame", val: "8.3ms" }
    ],
    highlights: [
      "TensorRT accelerated YOLOv8 object detection model running on NVIDIA Jetson / T4 GPUs",
      "Multi-camera ByteTrack spatial tracking across non-overlapping field-of-views",
      "Instant WebSocket event dispatch and automated visual violation recording",
      "Custom C++ DeepStream pipeline for hardware-accelerated H.265 decoding"
    ],
    tags: ["YOLOv8", "OpenCV", "TensorRT", "C++", "Python", "DeepStream", "NVIDIA Jetson"],
    codeSnippet: `#include <nvinfer1.h>
#include <opencv2/opencv.hpp>

void process_edge_video_frame(cv::Mat& frame, nvinfer1::IExecutionContext* context) {
    // Hardware accelerated GPU preprocessing
    cudaMemcpyAsync(device_input, frame.data, input_size, cudaMemcpyHostToDevice);
    // Execute TensorRT INT8 optimized inference
    context->enqueueV2(bindings, stream, nullptr);
    // Post-process bounding boxes with ByteTrack
    run_bytetrack_association(device_output);
}`
  },
  { 
    id: 6,
    slug: "multi-modal-knowledge-graph",
    title: "Multi-Modal Knowledge Graph", 
    category: "Data Engineering",
    role: "Graph ML Engineer",
    timeline: "2022 — 2023",
    description: "Scalable graph neural network architecture mapping intricate entity relationships at enterprise scale.",
    fullDescription: "Designed a distributed Graph Neural Network (GNN) and knowledge graph mapping 25M+ entities and 180M+ dynamic relations. Enables deep semantic reasoning, fraud detection, and instant link prediction across heterogeneous enterprise datasets.",
    problemStatement: "Complex fraud networks evaded traditional relational SQL database queries due to deep 5-hop relational connections.",
    solutionImpact: "Uncovered multi-million dollar fraud rings with sub-15ms 5-hop graph traversal speeds.",
    architectureOverview: "Built on Neo4j clusters and PyTorch Geometric. Data streams from Apache Kafka into Spark GraphX, training dynamic Graph Convolutional Networks (GCN) for link prediction.",
    previewMetric: "25M+ Nodes Mapped",
    metrics: [
      { label: "Graph Entities", val: "25M+ Nodes" },
      { label: "Edge Relations", val: "180M+" },
      { label: "Query Speed", val: "<15ms" },
      { label: "Fraud Uncovered", val: "$4.2M" }
    ],
    highlights: [
      "Graph Convolutional Networks (GCN) for dynamic node classification & link prediction",
      "Real-time Neo4j cluster sync with Apache Kafka stream processing",
      "Interactive 3D WebGL graph explorer for intuitive visual relationship discovery",
      "Sub-15ms multi-hop link prediction using PyTorch Geometric PyG embeddings"
    ],
    tags: ["Neo4j", "PyTorch Geo", "Apache Spark", "Kafka", "Three.js", "Python"],
    codeSnippet: `import torch
from torch_geometric.nn import GCNConv

class GraphFraudDetector(torch.nn.Module):
    def __init__(self, in_channels, hidden_channels, out_channels):
        super().__init__()
        self.conv1 = GCNConv(in_channels, hidden_channels)
        self.conv2 = GCNConv(hidden_channels, out_channels)

    def forward(self, x, edge_index):
        x = self.conv1(x, edge_index).relu()
        x = self.conv2(x, edge_index)
        return torch.sigmoid(x)`
  }
];
