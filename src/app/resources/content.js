import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tarunn",
  lastName: "Gusain",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Leetcode",
    icon: "leetcode",
    link: "https://leetcode.com/u/tarunngusain08/",
  },
  {
    name: "Scaler",
    icon: "scaler",
    link: "https://www.scaler.com/academy/profile/71f6d4b77d73/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tarunngusain08",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tarunngusain08/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/tarunngusain08",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:tarunngusain@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Software Engineer</>,
  subline: (
    <>
      I'm Tarunn, a software engineer at <InlineCode>Gruve.ai</InlineCode>, where I craft intuitive
      <br /> user experiences and next gen software. With 5+ years of experience excels in 
      Golang, Python, Java, and C. An active contributor on Github having 60+ repositories 
      and solved 1500+ overall coding problems on platforms like LeetCode, Scaler & GeeksforGeeks.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tarunn is a India-based software engineer with a passion for transforming complex challenges
        into simple, elegant software solutions. His work spans backend engineering, frontend development, 
        and high level and low leveldesign.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Gruve.ai | Paypal",
        timeframe: "Aug 2024 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            <strong>🛠️ Architecting & Building Inference-as-a-Service (IAAS)</strong>
            <ul>
                <li><strong>Designed and implemented</strong> a scalable IAAS platform from scratch.</li>
                <li><strong>Deployed MinIO</strong> as the blob storage layer in distributed mode with multi-node, multi-disk configuration.</li>
                <li>Integrated <strong>Envoy as the API Gateway</strong> for load balancing, rate limiting, and enforcing mTLS across services.</li>
                <li>Benchmarked <strong>Dragonfly vs. Redis</strong> for caching, identifying Dragonfly's superior 5x performance on throughput and low/comparable latency for high RPS workloads.</li>
            </ul>
          </>,


          <>
            <strong>🧠 Deploying AI-powered RAG Agent on GPUs</strong>
            <ul>
              <li><strong>Fine-tuned Llama 3.1:7B model</strong> on dedicated GPU.</li>
              <li>Trained on <strong>10+ internal documents</strong> from Confluence.</li>
            </ul>
          </>,
        
          <>
            <strong>🚀 Building an Internal GPU Cluster Manager for AI/ML Workloads</strong>
            <ul>
              <li><strong>Architected and deployed</strong> a GPU cluster management service from scratch.</li>
              <li>Enabled <strong>seamless scheduling of AI/ML financial jobs</strong> for data scientists and operators.</li>
              <li><strong>Orchestrated Kubernetes deployment</strong> on bare metal nodes.</li>
              <li>Optimized concurrency by <strong>50%</strong> via <strong>NVIDIA MIG partitioning</strong>, ensuring efficient resource utilization across <strong>40 GPU nodes</strong> and <strong>60 CPU nodes</strong>.</li>
              <li><strong>Designed and implemented</strong> 15+ high-performance <strong>Golang APIs</strong> for:
                <ul>
                  <li>Node registration</li>
                  <li>Job scheduling</li>
                  <li>Profile management</li>
                  <li>Cluster operations</li>
                </ul>
              </li>
              <li><strong>Developed a scalable and intuitive UI</strong> in React.js with:
                <ul>
                  <li>4+ dynamic pages</li>
                  <li>20+ components</li>
                  <li>Real-time insights into nodes, profiles, jobs, and clusters</li>
                </ul>
              </li>
              <li>Integrated RBAC with fine-grained access control, enforcing secure access across <strong>30+ APIs</strong> in the frontend..</li>
              <li>Added latency logger middleware for overall latency for api calls and also integrated a latency tracker for all the dependencies 
      like DB, K8s, Servicenow APIs to handle and observe the granular level response times.</li>
            </ul>
          </>,
        
          <>
            <strong>🎤 Leadership, Knowledge Sharing & Community Engagement</strong>
            <ul>
              <li><strong>Led 5+ knowledge transfer (KT) sessions</strong> on DSA, System Design, and best engineering practices.</li>
              <li><strong>Organized 2 rounds an internal hiring activity</strong> with AI theme for building a team for an alternate project.</li>
              <li><strong>Interviewed 17+ candidates across 4+ roles</strong>, dedicating <strong>25+ hours</strong> to hiring and mentoring talent.</li>
              <li><strong>Hosted and organized a company-wide lunch session</strong> with the Director of Engineering and the entire engineering team, fostering collaboration and alignment.</li>
              <li><strong>Participated in 2 internal hackathons</strong>, winning <strong>1st place</strong> in one and securing <strong>2nd runner-up</strong> in another.</li>
            </ul>
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/paypal.jpg",
            alt: "paypal",
            width: 18,
            height: 10,
          },
          {
            src: "/images/projects/project-01/gruve.jpg",
            alt: "gruve",
            width: 18,
            height: 10,
          },
          {
            src: "/images/projects/project-01/gruve1.png",
            alt: "gruve1",
            width: 18,
            height: 10,
          },
          {
            src: "/images/projects/project-01/gruve2.png",
            alt: "gruve2",
            width: 18,
            height: 10,
          },
        ],
      },
      {
        company: "Oracle Cloud Infrastructure | Bytedance",
        timeframe: "Jun 2023 - Aug 2024",
        role: "Member of Technical Staff",
        achievements: [
          <>
            <strong>💰 Compute Cost Optimization & Scalability</strong>
            <ul>
              <li>Reduced compute costs by <strong>30%</strong>, saving <strong>$100K+/month</strong> while maintaining <strong>99.99998% AD resiliency</strong>.</li>
              <li>Strategically <strong>scaled down compute nodes</strong> across <strong>2 regions</strong> without downtime or service degradation.</li>
              <li>Conducted a <strong>thorough 3-month utilization analysis</strong>, examining:
                <ul>
                  <li>CPU, memory, and network usage trends.</li>
                  <li>Per-pod resource consumption patterns.</li>
                </ul>
              </li>
              <li><strong>Optimized auto-scaling strategy</strong> by:
                <ul>
                  <li>Upscaling during high-traffic events (Black Friday, year-end sales).</li>
                  <li>Gradual downscaling post-event to optimize resource allocation.</li>
                </ul>
              </li>
              <li><strong>Memory Optimization & Leak Fixes</strong>:
                <ul>
                  <li>Reduced per-pod memory allocations, eliminating inefficiencies.</li>
                  <li>Identified and fixed memory leaks in Golang services handling <strong>100K requests/sec</strong>.</li>
                </ul>
              </li>
              <li><strong>Common memory leaks identified in Golang:</strong>
                <ul>
                  <li><strong>Goroutine leaks</strong>: Improperly terminated goroutines accumulating over time.</li>
                  <li><strong>Unbounded slice growth</strong>: Appending data without proper capacity checks.</li>
                  <li><strong>Improperly managed <code>sync.Pool</code></strong>: Leading to excessive memory retention.</li>
                </ul>
              </li>
              <li>Achieved <strong>optimized compute efficiency</strong> while ensuring high availability and performance.</li>
            </ul>
          </>,
        
          <>
            <strong>📝 Log Summarization & Storage Optimization</strong>
            <ul>
              <li>Contributed to a <strong>Log Summarizer</strong>, significantly reducing log storage by <strong>40%</strong> through optimized compression and deduplication techniques.</li>
              <li>Designed an <strong>efficient log similarity detection mechanism</strong> leveraging:
                <ul>
                  <li><strong>Cosine similarity</strong> to identify redundant log patterns.</li>
                  <li><strong>Disjoint-set data structures</strong> for clustering similar logs efficiently.</li>
                  <li><strong>Rigorous testing on 500,000+ logs</strong> to fine-tune accuracy and storage efficiency.</li>
                </ul>
              </li>
              <li>Improved log analysis speed while ensuring <strong>minimal data loss</strong>, enhancing system observability.</li>
            </ul>
          </>,
        
          <>
            <strong>🛠️ Golang SDK Development & Configuration Management</strong>
            <ul>
              <li>Contributed to a <strong>Golang SDK</strong> that exposes multiple APIs for gateway teams, ensuring seamless integration.</li>
              <li><strong>Designed a dynamic configuration loading mechanism:</strong>
                <ul>
                  <li>The SDK fetches <strong>gateway-specific configs</strong> from a <strong>centralized DB</strong>.</li>
                  <li>Local cache validation occurs <strong>every 1 min</strong> with a <strong>random jitter of 30s</strong>.</li>
                  <li>Introduced a <strong>fallback mechanism</strong> using static configurations stored in a <strong>Kubernetes ConfigMap</strong>.</li>
                  <li>Configs are injected via <strong>Helm</strong> at deployment, with each pod referring to a <strong>global namespace config</strong>.</li>
                  <li><strong>Kubernetes ConfigMap</strong> is mounted at <strong>/etc/config</strong> for every pod, ensuring <strong>real-time updates</strong> without restarting the pod.</li>
                  <li>ConfigMap is updated dynamically, using <strong>memory-mapped pointers</strong> to reference global configurations without requiring pod restarts.</li>
                  <li>Optimized microservice configuration injection, reducing deployment frequency by <strong>20%</strong>.</li>
                </ul>
              </li>
            </ul>
          </>,
        
          <>
            <strong>📊 Monitoring & Security Enhancements</strong>
            <ul>
              <li>Integrated <strong>30+ metrics and alarms</strong> in <strong>Grafana using Terraform</strong>, improving observability.</li>
              <li>Led <strong>CIDR validation for bucket IPs</strong>, strengthening secure data transmission by <strong>100%</strong>.</li>
            </ul>
          </>,
        
          <>
            <strong>🔥 On-Call Reliability & Incident Resolution</strong>
            <ul>
              <li>Resolved <strong>13+ Severity-1</strong>, <strong>100+ Severity-2</strong>, and multiple <strong>Severity-3/4</strong> issues during on-call rotations, ensuring service stability.</li>
            </ul>
          </>,
        
          <>
            <strong>🧪 Testing & Log Optimization</strong>
            <ul>
              <li>Engineered <strong>100+ robust test cases</strong>, achieving <strong>90% code coverage</strong>.</li>
            </ul>
          </>
        ],
        images: [
          {
            src: "/images/projects/project-01/oracle.jpg",
            alt: "oracle",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/bytedance.jpg",
            alt: "bytedance",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Dunzo",
        timeframe: "Apr 2022 - May 2023",
        role: "Software Engineer",
        achievements: [
          <> Restructured an overloaded legacy monolith service (Python) into 2 microservices, developed a Golang-based microservice, and migrated 60+ APIs from legacy code.</>,
          <>  Streamlined the extraction and ingestion processes, enhancing inventory management by optimizing the replishment requirement of products, reducing capital losses by 20%.</>,
          <>  Introduced Redis-Locking mechanism to fix write-write conflicts, reducing the probability of this vulnerability by 99%, ensuring data consistency.</>,
          <>  Implemented fingerprint authentication for inventory management operations, enabling a 30% reduction in login time for warehouse staff and managers.</>,
          <>  Deployed a GCP Cloud Function for CSV validation, optimizing data validation efficiency. Load tested on 100K rows sheet validated within 1 minute.</>,
          <>  Designed and coded 25+ APIs related to inventory management, product catalog, and order service.</>,
          <>  Reduced the API latency by 40% by optimizing the database queries in catalogue service.</>,
          <>  Fixed 5 P0 bugs and addressed 40+ P1 issues during operational duty, ensuring the reliability of the application.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/dunzo.jpg",
            alt: "dunzo",
            width: 20,
            height: 12,
          },
          {
            src: "/images/projects/project-01/dunzo logo.jpg",
            alt: "dunzo logo",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        company: "Tata Consultancy Services | BMW",
        timeframe: "Jan 2021 - Apr 2022",
        role: "System Engineer",
        achievements: [
          <>
            Architected and Implemented the logic for batching/uploading/downloading the diagnosed data to AWS S3 buckets asynchronously enabling 20 workers to operate concurrently.
          </>,
          <>
            Fixed 15+ bugs and provided multiple hot fixes for existing code.
          </>,
          <>
            Automated the instances health checks, which increased team efficiency and saved 20+ hours per week.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/tcs.jpg",
            alt: "tcs",
            width: 17,
            height: 10,
          },
          {
            src: "/images/projects/project-01/bmw.jpg",
            alt: "bmw",
            width: 19,
            height: 10,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Inderprastha Engineering College",
        description: <>Studied software engineering.</>,
        duration: <>Aug 2016 - Sept 2020</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/certificate/certificate-01.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-03.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-04.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-05.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-06.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-07.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-08.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-09.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-10.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-11.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-12.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-13.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-14.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-15.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-16.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-17.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-18.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-19.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-20.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-21.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-22.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-23.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-24.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/certificate-25.png",
      alt: "image",
      orientation: "horizontal",

    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
