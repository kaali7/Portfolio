export interface Duration {
  start: string;
  end: string;
  display: string;
}

export interface Overview {
  shortDescription: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  role: string;
}

export interface Work {
  projects: Project[];
  contributions: string[];
  impact: string[];
}

export interface Technical {
  technologies: string[];
  skills: string[];
  concepts: string[];
}

export interface Visual {
  companyLogo: string;
  images: string[];
  certificate: string;
}

export interface Links {
  company: string;
  proof: string;
  relatedProjects: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: Duration;
  overview: Overview;
  work: Work;
  technical: Technical;
  focus: string[];
  visual: Visual;
  links: Links;
}

export const experienceData: Experience[] = [
  {
    id: "aasha-infinite-foundation-data-analyst",
    company: "AASHA Infinite Foundation",
    role: "Data Analyst",
    type: "Full-time",
    location: "426, 16th Cross, 5th Main, HSR Layout, Sector – 6, Bengaluru – 560102, Karnataka, India · Remote",
    duration: {
      start: "Dec 2025",
      end: "Feb 2026",
      display: "Dec 2025 - Feb 2026 · 3 mos"
    },
    overview: {
      shortDescription: "Worked as a Data Analyst at AASHA Infinite Foundation, transforming raw data into actionable insights to support data-driven decision-making across social impact programs.",
      responsibilities: [
        "Transforming raw data into actionable insights to support data-driven decision-making across social impact programs",
        "Collected, cleaned, and analyzed structured and unstructured datasets",
        "Built dashboards and visualizations to track program performance and outreach",
        "Identified trends and patterns to improve resource allocation and operational efficiency",
        "Collaborated with team members to translate data insights into real-world impact"
      ],
      achievements: []
    },
    work: {
      projects: [
        {
          name: "AASHA Infinite Foundation - AASHA Infinite Foundation",
          description: "",
          role: ""
        }
      ],
      contributions: [
        "Collected, cleaned, and analyzed structured and unstructured datasets",
        "Built dashboards and visualizations to track program performance and outreach",
        "Identified trends and patterns to improve resource allocation and operational efficiency"
      ],
      impact: [
        "Support data-driven decision-making across social impact programs",
        "Improve resource allocation and operational efficiency",
        "Translate data insights into real-world impact"
      ]
    },
    technical: {
      technologies: [
        "Google Docs",
        "Google Sheets"
      ],
      skills: [
        "Data Analysis",
        "Dashboard Development",
        "Data Visualization"
      ],
      concepts: [
        "Data Visualization",
        "Data Analysis"
      ]
    },
    focus: [
      "Data Analytics"
    ],
    visual: {
      companyLogo: "/experience/aasha_logo.jpg",
      images: [],
      certificate: "/experience/aasha_certificated.jpeg"
    },
    links: {
      company: "https://aashainfinite.org/",
      proof: "/experience/aasha_certificated.jpeg",
      relatedProjects: []
    }
  },
  {
    id: "garunacdx-genai-developer",
    company: "GarunaCDX",
    role: "GenAI Developer",
    type: "Full-time",
    location: "Sai Residency, Shop No. 01, Plot No. 149, Sector 06, Karanjade, Panvel 410206, Maharashtra, India · Remote",
    duration: {
      start: "Mar 2026",
      end: "Present",
      display: "Mar 2026 - Present · 6 mos"
    },
    overview: {
      shortDescription: "Works as a GenAI Developer at GarunaCDX, focusing on building next-generation digital and AI-powered scalable applications using modern technologies.",
      responsibilities: [
        "Building next-generation digital and AI-powered solutions",
        "Developing scalable applications across domains using Artificial Intelligence, Generative AI, and full-stack development",
        "Collaborating to design and deploy impactful solutions",
        "Emphasizing real-world problem solving, rapid prototyping, and continuous learning"
      ],
      achievements: []
    },
    work: {
      projects: [
        {
          name: "Auto Dash - AI-Powered HR Dashboard",
          description: "Full-stack AI analytics application with automated CSV dataset profiling, interactive Bento-grid dashboards, and Gemini AI query assistants.",
          role: "GenAI Developer"
        }
      ],
      contributions: [
        "Engineered automated CSV dataset profiling and column distribution detection using Google Gemini AI",
        "Developed interactive Bento-grid telemetry dashboards with custom charts, KPIs, and insight cards",
        "Built Supabase PostgreSQL database architecture with Row-Level Security (RLS) and precomputed aggregations"
      ],
      impact: [
        "Reduced complex workforce analytics and chart loading times down to ~150ms",
        "Streamlined executive decision-making with automated dataset-to-intelligence workflows",
        "Delivered production AI query assistant with 91% milestone completion (43/47 resolved issues)"
      ]
    },
    technical: {
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Google Gemini API",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts"
      ],
      skills: [
        "Generative AI",
        "Full-Stack AI",
        "HR Analytics",
        "Automated Data Profiling",
        "Row-Level Security (RLS)"
      ],
      concepts: [
        "Generative AI",
        "Automated Data Profiling",
        "Artificial Intelligence",
        "Full-Stack Development",
        "Interactive Telemetry Dashboards"
      ]
    },
    focus: [
      "Generative AI",
      "AI Engineering",
      "Full-Stack AI",
      "Data Analytics"
    ],
    visual: {
      companyLogo: "/experience/garunacdx_logo.jpg",
      images: [],
      certificate: "/experience/garunacdx_cerificated.jpeg"
    },
    links: {
      company: "https://www.garunacdx.com/",
      proof: "/experience/garunacdx_cerificated.jpeg",
      relatedProjects: ["ai-powered-hr-dashboard"]
    }
  }
];
