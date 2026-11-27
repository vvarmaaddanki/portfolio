export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'Backend & Real-Time' | 'AI & GenAI' | 'Full-Stack';
  techStack: string[];
  description: string;
  highlights: string[];
  architectureDetails: {
    title: string;
    description: string;
    codeSnippet?: string;
  };
  metrics?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeColor: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; highlight?: boolean; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Venkatesh Varma Addanki",
  title: "Software Engineer",
  tagline: "Specializing in High-Performance Backend APIs, Real-Time WebSockets & AI-Powered Workflows",
  location: "Bengaluru, India",
  phone: "+91-9019283182",
  email: "varmakbm9@gmail.com",
  linkedin: "https://linkedin.com/in/vvarmaaddanki",
  github: "https://github.com/vvarmaaddanki",
  resumePath: "/assets/Venkatesh_Varma_Resume.pdf",
  bio: "Computer Science graduate (2025) with hands-on experience building scalable backend services, real-time distributed systems, and AI-driven automation using Python, Django, FastAPI, React, and Next.js. Passionate about clean code architecture, database optimization, and high-performance WebSockets.",
  status: "Open for Software Engineer Opportunities",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Presidency University, Bangalore",
    period: "Aug 2021 – Aug 2025",
    cgpa: "6.5 / 10"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "queue-live",
    title: "Queue Live",
    subtitle: "Real-Time Queue Management System",
    period: "Nov 2026 – Present",
    category: "Backend & Real-Time",
    techStack: ["Django REST Framework", "Django Channels", "WebSockets", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Render"],
    description: "A production-grade full-stack queue management platform featuring real-time WebSocket token tracking, concurrency row locking, and JWT authentication.",
    highlights: [
      "Real-time token status updates via Django Channels WebSockets & Redis channel layer.",
      "Concurrency control preventing duplicate token issuance using DB transactions & select_for_update row locking.",
      "Strict security with SimpleJWT authentication and DRF IsAdminUser permissions.",
      "Containerized backend & cache layer using Docker Compose, fully deployed on Render."
    ],
    architectureDetails: {
      title: "WebSocket & Concurrency Engine",
      description: "Implemented custom WebSocket groups per queue with atomic database locks to ensure zero race conditions during peak token generation.",
      codeSnippet: `// Django Channels Redis Layer Dispatcher
@async_to_sync
def notify_queue_update(queue_id, token_data):
    channel_layer = get_channel_layer()
    channel_layer.group_send(
        f"queue_{queue_id}",
        {
            "type": "queue.message",
            "data": token_data,
        }
    )`
    },
    metrics: ["<50ms WS Broadcast", "Zero Race Conditions", "Dockerized Architecture"],
    githubUrl: "https://github.com/vvarmaaddanki",
    featured: true
  },
  {
    id: "ai-code-review",
    title: "AI Code Review API",
    subtitle: "FastAPI Code Review & Security Analysis Engine",
    period: "Sep 2026",
    category: "AI & GenAI",
    techStack: ["Python", "FastAPI", "Google Gemini API", "LangGraph", "GitHub REST API", "Pydantic", "OpenAPI/Swagger", "Render"],
    description: "An automated AI code reviewer that analyzes GitHub repository files for security vulnerabilities, memory leaks, performance bottlenecks, and style compliance.",
    highlights: [
      "Built a 4-step stateful LangGraph workflow (Prepare Code -> Build Prompt -> AI Analysis -> Structure Report).",
      "Integrated GitHub REST API to fetch multi-file repository contents on-the-fly.",
      "Graceful API resilience handling Gemini rate limits (HTTP 429) with structured Pydantic error payloads.",
      "Complete OpenAPI 3.0 interactive Swagger documentation deployed on Render."
    ],
    architectureDetails: {
      title: "LangGraph 4-Step Pipeline",
      description: "State-driven DAG execution pipeline organizing prompt engineering, AI response validation, and dynamic error recovery.",
      codeSnippet: `# LangGraph Node Pipeline
workflow = StateGraph(ReviewState)
workflow.add_node("prepare_code", prepare_code_step)
workflow.add_node("build_prompt", build_prompt_step)
workflow.add_node("analyze", analyze_gemini_step)
workflow.add_node("format_review", format_output_step)`
    },
    metrics: ["4-Step LangGraph Workflow", "7 REST Endpoints", "Automated Security Audit"],
    githubUrl: "https://github.com/vvarmaaddanki",
    featured: true
  },
  {
    id: "habitflow",
    title: "HabitFlow",
    subtitle: "Full-Stack Analytics-Driven Habit Tracker",
    period: "Nov 2026",
    category: "Full-Stack",
    techStack: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "NextAuth.js", "Recharts", "Framer Motion", "Vercel"],
    description: "A feature-packed habit tracking dashboard featuring visual streak analytics, custom achievement unlocks, interactive charts, and secure JWT sessions.",
    highlights: [
      "Built with Next.js 14 App Router, TypeScript, and interactive Framer Motion micro-interactions.",
      "Comprehensive data visualization using Recharts for Area, Pie, and Bar analytics.",
      "4-step user onboarding flow with local-first persistence & NextAuth.js Credentials authentication.",
      "Deploys seamlessly on Vercel with zero cold-start latency."
    ],
    architectureDetails: {
      title: "Next.js App Router Architecture",
      description: "Leverages React Server Components alongside dynamic client-side charting engines and optimistic state updates.",
      codeSnippet: `// Recharts Responsive Analytics Deck
<ResponsiveContainer width="100%" height={300}>
  <AreaChart data={habitData}>
    <Area type="monotone" dataKey="completionRate" stroke="#6366f1" fill="url(#colorGradient)" />
  </AreaChart>
</ResponsiveContainer>`
    },
    metrics: ["10 Achievements System", "4-Step Onboarding", "Recharts Dashboard"],
    githubUrl: "https://github.com/vvarmaaddanki",
    featured: true
  }
];

export const OPEN_SOURCE = {
  title: "DalgoT4D / DDP_backend",
  prNumber: "#1462",
  date: "Sep 2026",
  tech: "Python, Django, Swagger/OpenAPI",
  description: "Discovered and resolved user authentication issues caused by email case-sensitivity mismatches during sign-in.",
  contribution: "Implemented exact case-insensitive user lookup using Django ORM lookup modifier (email__iexact) and verified end-to-end API resilience via Swagger UI testing.",
  url: "https://github.com/vvarmaaddanki"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend & Systems",
    skills: [
      { name: "Python", level: 95, highlight: true },
      { name: "Django & DRF", level: 90, highlight: true },
      { name: "FastAPI", level: 88, highlight: true },
      { name: "REST APIs & WebSockets", level: 92, highlight: true },
      { name: "PostgreSQL & SQL", level: 85 },
      { name: "Redis Caching & PubSub", level: 82 }
    ]
  },
  {
    category: "Frontend Engineering",
    skills: [
      { name: "TypeScript / JavaScript", level: 90, highlight: true },
      { name: "React", level: 88, highlight: true },
      { name: "Next.js 14", level: 85, highlight: true },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 & CSS3 Architecture", level: 95 },
      { name: "GSAP & Motion Animations", level: 84 }
    ]
  },
  {
    category: "AI & Modern Workflows",
    skills: [
      { name: "Google Gemini API", level: 88, highlight: true },
      { name: "LangGraph Agent Workflows", level: 85, highlight: true },
      { name: "GitHub REST API Integration", level: 90 },
      { name: "Prompt Design & Schema Validation", level: 86 }
    ]
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Docker & Docker Compose", level: 85, highlight: true },
      { name: "AWS (EC2, S3)", level: 80 },
      { name: "Git & GitHub CI/CD", level: 90 },
      { name: "PyTest & DRF Test Suite", level: 84 },
      { name: "Postman & Swagger/OpenAPI", level: 92 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-cloud",
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2026",
    badgeColor: "from-amber-500 to-orange-600",
    iconName: "Cloud"
  },
  {
    id: "vertex-ai",
    name: "Claude with Google Vertex AI",
    issuer: "Anthropic",
    year: "2026",
    badgeColor: "from-purple-500 to-indigo-600",
    iconName: "Cpu"
  },
  {
    id: "nvidia-genai",
    name: "AI for All: Basics to GenAI Practice",
    issuer: "NVIDIA",
    year: "2026",
    badgeColor: "from-emerald-500 to-teal-600",
    iconName: "Zap"
  },
  {
    id: "ibm-sql",
    name: "SQL and Relational Databases 101",
    issuer: "IBM on Coursera",
    year: "2025",
    badgeColor: "from-blue-500 to-cyan-600",
    iconName: "Database"
  }
];
