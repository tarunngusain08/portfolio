export type Experience = {
  company: string;
  context?: string;
  role: string;
  dates: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  detailGroups?: { title: string; items: string[] }[];
  images?: { src: string; alt: string }[];
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
    detailGroups: [
      {
        title: "Data quality and ingestion",
        items: [
          "Worked with service data owners to identify quality gaps and apply AI-assisted data-quality improvements; the program contributed to an approximately 15% improvement in overall data reliability.",
          "Onboarded four enterprise datasets across tenancies and used Apache Spark to process approximately 10,000 OCI resource changes per second.",
        ],
      },
      {
        title: "Snapshot storage optimization",
        items: [
          "Designed a snapshot delta optimizer that persists changes between snapshots instead of duplicating unchanged records.",
          "Reduced data redundancy by up to 99% and storage requirements by approximately 90% for the measured datasets.",
        ],
      },
      {
        title: "Hybrid retrieval, evaluation, and governance",
        items: [
          "Combined PostgreSQL full-text search with vector retrieval, then applied reciprocal-rank fusion and reranking before constructing grounded responses with citations.",
          "Built an evaluation set of 700+ questions to measure retrieval quality and regressions across the supported datasets.",
          "Kept retrieval-time authorization and governance checks in the path so evidence is checked before it is supplied to the model.",
        ],
      },
    ],
    images: [{ src: "/images/projects/project-01/oracle.jpg", alt: "Oracle Cloud Infrastructure" }],
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
    detailGroups: [
      {
        title: "Forward-deployed platform delivery",
        items: [
          "Helped shape an inference-as-a-service platform from early requirements through a working MVP, validating inter-service communication in k3d and Minikube before broader deployment.",
          "Deployed MinIO in distributed multi-node, multi-disk mode as the blob-storage layer and integrated Envoy for API gateway, load balancing, rate limiting, and mutual TLS.",
          "Benchmarked Dragonfly against Redis for high-request-rate workloads; the measured Dragonfly setup delivered up to 5x throughput with comparable latency.",
          "Evaluated Opik and Langfuse for LLM observability and analytics, then designed quota and billing primitives with user-facing quota APIs and UI components.",
        ],
      },
      {
        title: "GPU platform and solution engineering",
        items: [
          "Ran Kubernetes on bare-metal infrastructure for AI/ML workloads across 40 GPU and 60 CPU nodes; NVIDIA MIG partitioning improved GPU utilization by approximately 50%.",
          "Designed 15+ Go APIs for node registration, job scheduling, profile management, and cluster operations, alongside a React console with four-plus pages and 20-plus components.",
          "Applied fine-grained RBAC across 30+ APIs and added latency instrumentation for API calls and dependencies including databases, Kubernetes, and ServiceNow.",
          "Worked across inference platform quotas, usage metering, and billing; the payment flow operated at approximately 99% success in the measured period.",
        ],
      },
      {
        title: "Observability, eBPF, and internal AI work",
        items: [
          "Built the eBPF connection-tracker backend with asynchronous periodic batch writes to MySQL, reducing ingestion latency from approximately 700 ms to 100 ms.",
          "Added module-level logging controls that reduced log volume by approximately 70% and Google Cloud Storage logging costs from roughly $2,000/day to under $200/day.",
          "Built SQL-like and natural-language query dashboards using internally hosted LLMs, including LLaMA, Claude, DeepSeek, and Qwen, with fallbacks for reliability.",
          "Prototyped a GPU-hosted RAG assistant with a fine-tuned Llama 3.1 7B model over more than ten internal documents.",
        ],
      },
      {
        title: "Team and delivery",
        items: [
          "Onboarded three engineers and provided architectural guidance while the platform scope was still evolving.",
          "Led five-plus knowledge-transfer sessions, interviewed candidates across multiple roles, and contributed to internal technical learning and hiring activities.",
        ],
      },
    ],
    images: [
      { src: "/images/projects/project-01/paypal.jpg", alt: "PayPal office" },
      { src: "/images/projects/project-01/gruve.jpg", alt: "Gruve.ai team" },
      { src: "/images/projects/project-01/gruve1.png", alt: "Gruve.ai work" },
      { src: "/images/projects/project-01/gruve2.png", alt: "Gruve.ai project" },
    ],
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
    detailGroups: [
      {
        title: "Capacity, resilience, and cost",
        items: [
          "Analyzed three months of CPU, memory, network, and per-pod utilization across two regions to plan safe capacity reductions.",
          "Reduced compute costs by approximately 30% (more than $100K/month) while maintaining reported availability-domain resiliency; scaled up for Black Friday and year-end traffic, then scaled down gradually after peaks.",
          "Reduced per-pod memory overhead and fixed Go memory leaks in services handling up to 100,000 requests per second, including goroutine lifecycle, slice-growth, and sync.Pool retention issues.",
        ],
      },
      {
        title: "Log summarization and similarity clustering",
        items: [
          "Reduced log storage by approximately 40% through compression and deduplication work.",
          "Combined cosine similarity with disjoint-set clustering to identify redundant log patterns and tested the approach against more than 500,000 log records.",
        ],
      },
      {
        title: "Go SDK and dynamic configuration",
        items: [
          "Contributed APIs in a Go SDK used by gateway teams and designed a dynamic configuration path backed by a centralized database with local cache validation every minute and up to 30 seconds of jitter.",
          "Added a Kubernetes ConfigMap fallback mounted at /etc/config and wired updates through shared, memory-mapped configuration so pods could receive changes without restarting; this reduced configuration-driven redeployments by approximately 20%.",
        ],
      },
      {
        title: "Operations, security, and test coverage",
        items: [
          "Added 30+ Grafana metrics and alarms through Terraform and contributed CIDR validation for bucket IPs.",
          "Resolved 13+ Sev-1 and 100+ Sev-2 incidents during on-call rotations and built 100+ tests for approximately 90% code coverage.",
        ],
      },
    ],
    images: [
      { src: "/images/projects/project-01/oracle.jpg", alt: "Oracle Cloud Infrastructure" },
      { src: "/images/projects/project-01/bytedance.jpg", alt: "ByteDance engagement" },
    ],
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
    detailGroups: [
      {
        title: "Services and APIs",
        items: [
          "Restructured an overloaded Python monolith into two microservices, developed a Go service, and migrated more than 60 APIs while maintaining existing functionality.",
          "Designed 25+ inventory, catalogue, and order APIs; query optimization reduced catalogue API latency by approximately 40%.",
        ],
      },
      {
        title: "Inventory operations and reliability",
        items: [
          "Added Redis-based distributed locking to prevent write-write conflicts and protect concurrent inventory updates.",
          "Improved replenishment workflows, reducing associated capital losses by approximately 20%, and added fingerprint authentication that reduced warehouse staff login time by approximately 30%.",
          "Load-tested a GCP Cloud Function that validated 100,000-row CSV files in under a minute; resolved five P0 bugs and more than 40 P1 issues during operational duty.",
        ],
      },
    ],
    images: [
      { src: "/images/projects/project-01/dunzo.jpg", alt: "Dunzo office" },
      { src: "/images/projects/project-01/dunzo logo.jpg", alt: "Dunzo" },
    ],
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
    detailGroups: [
      {
        title: "BMW diagnostic-data workflows",
        items: [
          "Designed asynchronous batching, upload, and download paths for diagnostic data in AWS S3, enabling 20 workers to operate concurrently.",
          "Fixed 15+ defects and shipped hot fixes for the existing system; automated instance health checks that saved the team more than 20 hours each week.",
          "Partnered with a cross-functional team on a new product line, contributing to a reported 15% increase in company revenue.",
        ],
      },
    ],
    images: [
      { src: "/images/projects/project-01/tcs.jpg", alt: "Tata Consultancy Services" },
      { src: "/images/projects/project-01/bmw.jpg", alt: "BMW engagement" },
    ],
  },
];

export const metrics = [
  { value: "6.5+", label: "years of experience" },
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

export const education = [
  {
    institution: "Inderprastha Engineering College",
    description: "Studied software engineering.",
    duration: "Aug 2016 – Sep 2020",
  },
];

export const site = {
  name: "Tarunn Gusain",
  role: "Forward Deployed Engineer · Senior Backend Engineer",
  headline: "Production systems, from discovery through operations.",
  description: "Forward-deployed and senior software engineer with 6.5+ years of experience building distributed systems, cloud platforms and production AI.",
  url: "https://portfolio-ishhyoboytaruns-projects.vercel.app",
  github: "https://github.com/tarunngusain08",
  linkedin: "https://www.linkedin.com/in/tarunngusain08/",
  email: "tarunngusain@gmail.com",
  resumePath: null, // TODO: publish only an approved public copy with a download link.
};
