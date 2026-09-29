export type Experience = {
  company: string;
  context?: string;
  role: string;
  dates: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type CaseStudy = {
  title: string;
  organization: string;
  summary: string;
  outcomes: string[];
  capabilities: string[];
};

export type PublicProject = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  proof: string[];
  technologies: string[];
  github: string;
};

export const experience: Experience[] = [
  {
    company: "Oracle",
    context: "Asset Inventory · OCI",
    role: "Senior Member of Technical Staff",
    dates: "Feb 2026 – Sep 2026",
    summary: "Enterprise data quality, high-throughput ingestion and governed retrieval.",
    achievements: [
      "Led AI-assisted data-quality improvements across OCI services, contributing to an approximately 15% improvement in overall data reliability.",
      "Designed a snapshot delta optimizer that stores incremental changes, reducing data redundancy by up to 99% and storage requirements by approximately 90%.",
      "Onboarded four enterprise datasets across multiple tenancies and enabled ingestion of approximately 10,000 OCI resource changes per second with Apache Spark.",
      "Designed hybrid RAG retrieval with vector search, PostgreSQL full-text search, reciprocal-rank fusion, reranking and grounded citations; established evaluation across 700+ benchmark questions and retrieval-time authorization controls.",
    ],
    technologies: ["Go", "PostgreSQL", "Apache Spark", "RAG", "Evaluation", "Authorization"],
  },
  {
    company: "PayPal",
    context: "via Gruve.ai",
    role: "Senior Forward Deployed Engineer",
    dates: "Aug 2024 – Feb 2026",
    summary: "Translated product and AI-platform requirements into APIs, infrastructure and production services.",
    achievements: [
      "Architected an internal GPU cluster manager for LLM workloads across 40+ GPU nodes; NVIDIA MIG partitioning improved GPU utilization by approximately 50%.",
      "Designed 15+ high-performance Go APIs and scheduling capabilities, with fine-grained RBAC across 30+ APIs.",
      "Designed quota, usage-metering and billing capabilities for an inference platform; supported payment flows with an approximately 99% success rate.",
      "Built an eBPF connection-tracker backend with asynchronous batch flushing, reducing ingestion latency from approximately 700 ms to 100 ms. Module-level logging controls reduced log volume by approximately 70% and GCS logging costs from roughly $2,000/day to under $200/day.",
    ],
    technologies: ["Go", "Kubernetes", "NVIDIA MIG", "RBAC", "MySQL", "Observability"],
  },
  {
    company: "Oracle",
    context: "ByteDance engagement",
    role: "Member of Technical Staff",
    dates: "Jun 2023 – Aug 2024",
    summary: "Cloud reliability, capacity planning and cost optimization for high-scale services.",
    achievements: [
      "Reduced compute costs by approximately 30%, saving more than $100K per month through capacity analysis and regional scale-down planning.",
      "Optimized autoscaling for peak shopping periods and coordinated controlled scale-down while maintaining availability-domain resiliency.",
      "Contributed to a log summarizer that reduced log storage by approximately 40%; validated similarity detection against 500,000+ log records.",
      "Contributed to a Go configuration SDK with cached dynamic configuration and Kubernetes ConfigMap fallback, reducing configuration-driven redeployments by approximately 20%.",
      "Integrated 30+ metrics and alarms with Grafana and Terraform and worked on 13+ Severity-1 and 100+ Severity-2 incidents.",
    ],
    technologies: ["Go", "Kubernetes", "Grafana", "Terraform", "Autoscaling", "Incident response"],
  },
  {
    company: "Dunzo",
    role: "Software Engineer",
    dates: "Apr 2022 – May 2023",
    summary: "Backend services for inventory, catalogue and order workflows.",
    achievements: [
      "Helped decompose a Python monolith into two microservices, built a Go service and migrated 60+ APIs while maintaining production functionality.",
      "Built 25+ APIs across inventory, catalogue and orders; database query improvements reduced API latency by approximately 40%.",
      "Introduced Redis distributed locking for concurrent inventory writes and load-tested a Cloud Function that validated 100K-row CSVs in under a minute.",
      "Improved inventory replenishment workflows, reducing associated capital losses by approximately 20%.",
    ],
    technologies: ["Go", "Python", "Redis", "GCP", "PostgreSQL", "Microservices"],
  },
  {
    company: "Tata Consultancy Services",
    context: "BMW engagement",
    role: "System Engineer",
    dates: "Jan 2021 – Apr 2022",
    summary: "Asynchronous diagnostic-data workflows and infrastructure automation.",
    achievements: [
      "Built asynchronous batching, upload and download workflows for diagnostic data in AWS S3, supporting 20 concurrent workers.",
      "Automated infrastructure health checks, saving the engineering team 20+ hours per week.",
    ],
    technologies: ["Java", "AWS S3", "Asynchronous processing", "Infrastructure automation"],
  },
];

export const metrics = [
  { value: "2021–26", label: "professional engineering timeline" },
  { value: "40+", label: "GPU nodes supported" },
  { value: "~10K/s", label: "OCI resource changes ingested" },
  { value: "700+", label: "RAG evaluation questions" },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Governed enterprise retrieval",
    organization: "Oracle · OCI",
    summary: "Designed a hybrid retrieval architecture for enterprise data, pairing retrieval quality with evaluation and authorization at the point where evidence enters model context.",
    outcomes: ["700+ benchmark questions", "~15% data-reliability improvement"],
    capabilities: ["Vector + PostgreSQL FTS", "RRF and reranking", "Source citations", "Retrieval-time authorization"],
  },
  {
    title: "GPU infrastructure for AI workloads",
    organization: "PayPal · via Gruve.ai",
    summary: "Moved from platform requirements to a working GPU manager, Go APIs, scheduling, access controls and inference-platform billing primitives.",
    outcomes: ["40+ GPU nodes", "~50% higher GPU utilization", "15+ Go APIs"],
    capabilities: ["Kubernetes", "NVIDIA MIG", "Scheduling", "Quotas and RBAC"],
  },
  {
    title: "Reliability and cost engineering",
    organization: "Oracle · ByteDance engagement",
    summary: "Used capacity analysis, autoscaling, configuration delivery and incident response to reduce infrastructure cost while protecting service resiliency.",
    outcomes: ["~30% lower compute cost", ">$100K monthly savings", "~40% less log storage"],
    capabilities: ["Capacity planning", "Autoscaling", "Go SDKs", "Observability"],
  },
];

export const publicProjects: PublicProject[] = [
  {
    name: "Knowledge Forge",
    slug: "knowledge-forge",
    tagline: "Evidence-grounded repository intelligence and RAG",
    description: "Indexes documents and immutable source snapshots, then produces answers, reports and implementation plans tied to file-level evidence. Unsupported conclusions are gated instead of guessed.",
    proof: ["Hybrid dense + PostgreSQL full-text retrieval", "Citations, provenance and retrieval traces", "68/70 correct on the Phase 18.5 benchmark across synthetic, Helm and OpenTelemetry Collector corpora"],
    technologies: ["Go", "PostgreSQL", "Pinecone", "Vertex AI", "Gemini"],
    github: "https://github.com/tarunngusain08/rag-knowledge-forge",
  },
  {
    name: "AgentOps",
    slug: "agentops",
    tagline: "Evaluation and regression infrastructure for AI-assisted engineering",
    description: "A local-first engineering copilot project for repository analysis, onboarding, architecture-level PR review and fixture-driven incident RCA, backed by deterministic golden-task evaluation.",
    proof: ["Versioned evaluation fixtures and tracked baselines", "Explainable regression reports and execution traces", "CI gates block P0 evaluation failures and regressions"],
    technologies: ["Python", "TypeScript", "Go", "Evaluation", "GitHub Actions"],
    github: "https://github.com/tarunngusain08/Ai-AgentOps",
  },
  {
    name: "ArchBattle",
    slug: "archbattle",
    tagline: "Real-time system-design learning with Go and event-driven workflows",
    description: "A multiplayer system-design learning platform with matchmaking, live battles, daily challenges and a separate AI service for cost metering and rate limiting.",
    proof: ["Go core service with WebSockets", "Redis Streams with replay on reconnect", "PostgreSQL persistence and deterministic answer ordering"],
    technologies: ["Go", "Redis Streams", "PostgreSQL", "WebSockets", "React + TypeScript"],
    github: "https://github.com/tarunngusain08/ArchBattle",
  },
];

export const skillGroups = [
  {
    title: "Backend & distributed systems",
    skills: ["Go", "REST", "gRPC", "Microservices", "Concurrency", "Kafka", "Pub/Sub", "Event-driven systems"],
  },
  {
    title: "Applied AI systems",
    skills: ["RAG", "Agentic workflows", "Hybrid retrieval", "Reranking", "Evaluation", "Guardrails", "Gemini", "Vertex AI", "LangChain", "LangChainGo"],
  },
  {
    title: "Cloud & platform",
    skills: ["Kubernetes", "Docker", "Helm", "GCP", "OCI", "AWS", "Terraform", "GPU infrastructure", "RBAC"],
  },
  {
    title: "Data & storage",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Pinecone", "Milvus", "Full-text search"],
  },
  {
    title: "Reliability & observability",
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "New Relic", "Coralogix", "CI/CD", "Incident response"],
  },
  {
    title: "Supporting languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "React"],
  },
];

export const agentRuntime = {
  title: "Durable Agent Runtime",
  description: "Selected Go and PostgreSQL engineering work focused on reliable long-running agent execution.",
  capabilities: ["Persistent state and leases", "Idempotency and failure recovery", "Approval checkpoints and execution budgets", "Replayable execution timelines"],
};

export const engineeringPrinciples = [
  "Evidence should support important conclusions.",
  "Authorization belongs in the architecture.",
  "Measure system behavior before tuning it.",
  "Production operations are part of the feature.",
];

export const site = {
  name: "Tarunn Gusain",
  role: "Forward Deployed Engineer · Senior Backend Engineer",
  headline: "Production systems, from discovery through operations.",
  description: "Go-first engineer building distributed systems, cloud platforms and production AI—from ambiguous requirements to reliable services.",
  url: "https://portfolio-ishhyoboytaruns-projects.vercel.app",
  github: "https://github.com/tarunngusain08",
  linkedin: "https://www.linkedin.com/in/tarunngusain08/",
  email: "tarunngusain@gmail.com",
  resumePath: null, // TODO: add the latest résumé PDF before exposing a download link.
};
