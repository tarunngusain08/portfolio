import Link from "next/link";
import { pageMetadata } from "@/app/resources/seo";
import { engineeringPrinciples, site, skillGroups } from "@/app/resources/portfolio";
import {
  CaseStudyGrid,
  ContactBand,
  ExperienceList,
  MetricStrip,
  ProjectGrid,
  SectionHeading,
  SkillGroups,
} from "@/components/portfolio/PortfolioSections";
import styles from "@/components/portfolio/portfolio.module.scss";

export function generateMetadata() {
  return pageMetadata({ title: `${site.name} | ${site.role}`, description: site.description, path: "/" });
}

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      description: site.description,
      url: site.url,
      image: `${site.url}/images/avatar.jpg`,
      sameAs: [site.github, site.linkedin],
      knowsAbout: skillGroups.flatMap((group) => group.skills),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${site.name} — Engineering Portfolio`,
      url: site.url,
      author: { "@type": "Person", name: site.name },
    },
  ];

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <section className={styles.hero} aria-labelledby="home-heading">
        <p className={styles.heroKicker}>TARUNN GUSAIN <span aria-hidden="true">/</span> FORWARD DEPLOYED ENGINEER · SENIOR BACKEND ENGINEER</p>
        <h1 className={styles.heroTitle} id="home-heading">
          Production systems, from <span>discovery</span> through operations.
        </h1>
        <p className={styles.heroLead}>
          Forward Deployed Engineer and Senior Backend Engineer building distributed systems,
          cloud platforms and production AI—from ambiguous requirements to reliable services.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.button} href="/work">View selected work <span aria-hidden="true">↘</span></Link>
          <a className={styles.buttonSecondary} href={`mailto:${site.email}?subject=Engineering%20opportunity`}>Contact by email</a>
        </div>
        <div className={styles.inlineLinks} aria-label="Professional profiles">
          <a className={styles.textLink} href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a className={styles.textLink} href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <MetricStrip />

      <section className={styles.section} aria-labelledby="impact-heading">
        <SectionHeading
          id="impact-heading"
          eyebrow="PROFESSIONAL IMPACT"
          title="Systems work with measurable outcomes."
          description="Sanitized summaries of enterprise work across retrieval, GPU infrastructure and cloud reliability."
          href="/experience"
          linkLabel="Full experience"
        />
        <CaseStudyGrid />
      </section>

      <section className={styles.section} aria-labelledby="projects-heading">
        <SectionHeading
          id="projects-heading"
          eyebrow="PUBLIC ENGINEERING PROJECTS"
          title="Inspect the systems, not just the claims."
          description="Three current projects show how I approach evidence, evaluation and distributed workflows in code you can review."
          href="/work"
          linkLabel="All selected work"
        />
        <ProjectGrid />
      </section>

      <section className={styles.section} aria-labelledby="experience-heading">
        <SectionHeading
          id="experience-heading"
          eyebrow="EXPERIENCE"
          title="Backend foundations, platform ownership, applied AI."
          href="/experience"
          linkLabel="Read the timeline"
        />
        <ExperienceList limit={3} />
      </section>

      <section className={styles.section} aria-labelledby="focus-heading">
        <SectionHeading id="focus-heading" eyebrow="TECHNICAL FOCUS" title="Backend depth, with the platform context around it." />
        <SkillGroups />
      </section>

      <section className={styles.section} aria-labelledby="approach-heading">
        <SectionHeading id="approach-heading" eyebrow="ENGINEERING APPROACH" title="Make the hard parts visible." />
        <div className={styles.introGrid}>
          <p className={styles.prose}>
            I work close to the problem: clarify what a customer or product team needs, shape the architecture,
            build the backend and integrations, then stay accountable for how the system behaves in production.
            Go and distributed systems are the foundation; AI systems are an extension of that production work.
          </p>
          <ul className={styles.principleList}>
            {engineeringPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
