import { pageMetadata } from "@/app/resources/seo";
import { agentRuntime } from "@/app/resources/portfolio";
import {
  AgentRuntimeCard,
  CaseStudyGrid,
  ContactBand,
  ProjectGrid,
  SectionHeading,
} from "@/components/portfolio/PortfolioSections";
import styles from "@/components/portfolio/portfolio.module.scss";

export function generateMetadata() {
  return pageMetadata({
    title: "Selected work",
    description: "Sanitized professional case studies and public engineering projects by Tarunn Gusain.",
    path: "/work",
  });
}

export default function Work() {
  const archivedBuilds = [
    { name: "NoteSense", href: "https://github.com/tarunngusain08/NoteSense" },
    { name: "TypeRacer Elite", href: "https://github.com/tarunngusain08/TypeRacer-Elite" },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.section}>
        <p className={styles.eyebrow}>SELECTED WORK · PROFESSIONAL + PUBLIC</p>
        <h1 className={styles.sectionTitle}>Impact at work. Evidence in code.</h1>
        <p className={styles.sectionDescription}>
          Enterprise case studies are summarized at résumé level. Public projects link directly to source
          and document the engineering decisions behind them.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="impact-heading">
        <SectionHeading id="impact-heading" eyebrow="PROFESSIONAL IMPACT" title="Production work, explained with care." />
        <CaseStudyGrid />
      </section>

      <section className={styles.section} aria-labelledby="public-projects-heading">
        <SectionHeading
          id="public-projects-heading"
          eyebrow="PUBLIC ENGINEERING PROJECTS"
          title="Review the implementation."
          description="Project benchmark results are labeled as project evidence; they are not customer or production metrics."
        />
        <ProjectGrid />
      </section>

      <section className={styles.section} aria-labelledby="runtime-heading">
        <SectionHeading
          id="runtime-heading"
          eyebrow="ADDITIONAL ENGINEERING WORK"
          title={agentRuntime.title}
          description="Résumé-described Go and PostgreSQL work; no public repository or demo is linked."
        />
        <AgentRuntimeCard />
      </section>

      <details className={`${styles.archiveDetails} ${styles.section}`}>
        <summary>Earlier product builds</summary>
        <p>These earlier projects remain available as background. They are lower priority for the backend, platform and forward-deployed roles this portfolio targets.</p>
        <div className={styles.archiveLinks}>
          {archivedBuilds.map((build) => (
            <a key={build.name} href={build.href} target="_blank" rel="noreferrer">{build.name} ↗</a>
          ))}
        </div>
      </details>

      <ContactBand />
    </main>
  );
}
