import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tarunn",
  lastName: "Gusain",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Staff Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
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
    link: "mailto:prudent.tarun0808@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Staff Software Engineer</>,
  subline: (
    <>
      I'm Tarunn, a software engineer at <InlineCode>Gruve.ai</InlineCode>, where I craft intuitive
      <br /> user experiences and next gen software. After hours, I build my own projects. 
      Tarunn Gusain, a highly skilled Software Engineer, with 4+ years of experience ex- cels in 
      Golang, Python, Java, and C. Tarunn is an active contributor on Github having 50+ repositories 
      and solved 1300+ overall coding problems on platforms like LeetCode, Scaler & GeeksforGeeks.

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
        role: "Staff Software Engineer",
        achievements: [
          <>
            Setup a whole k8s cluster on baremetal nodes to support GPU intensive jobs, enhancing concurrency control by 50% by Nvidia MIG partitioning.
          </>,
          <>
            Created 10+ MVP APIs in golang related to node registration, cluster management.
          </>,
          <> Beautifully implemented the UI in react.js for nodes, profiles, jobs and clusters. </>,
          <>
            Designed the low-level diagrams flow, optimized the DB schema for critical components like 
            nodes and clusters.
          </>,
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
        ],
      },
      {
        company: "Oracle Cloud Infrastructure | Bytedance",
        timeframe: "Jun 2023 - Aug 2024",
        role: "Member of Technical Staff",
        achievements: [
          <> Reduced the cost by 50% forthe compute instances, saving more than
          $100K/month by optimizing the number of nodes required to serve the traffic
          alongwith maintaining the AD resiliency to 99.99998%.</>,
          <> Optimized the microservice configuration injection resulting 20% reduction
in deployment frequency.</>,
          <> Optimized the logs by 40% by rigorously testing on 500,000+ logs.</>,
          <> Added 30+ Metrics and Alarms in grafana using terraform, enhancing maintainability and monitoring. </>,  
          <> Took an initiative of CIDR Validation on the buckets IPs, increasing secure data transmission by 100%. </>,
          <> Resolved 13+ Severity-1,100+ Severity-2 issues and multiple Severity-3,4 issues during on-call rotation to ensure the maintainability. </>,
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
    display: true, // set to false to hide this section
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
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
