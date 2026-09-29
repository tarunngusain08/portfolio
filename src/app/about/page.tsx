import { pageMetadata } from "@/app/resources/seo";
import { engineeringPrinciples, site } from "@/app/resources/portfolio";
import { ContactBand, SectionHeading } from "@/components/portfolio/PortfolioSections";
import styles from "@/components/portfolio/portfolio.module.scss";

export function generateMetadata() {
  return pageMetadata({ title: "About", description: `${site.name} is a Go-first backend and forward-deployed engineer working across cloud platforms and production AI.`, path: "/about" });
}

export default function About() {
  return (
    <main className={styles.page}>
      <header className={styles.section}>
        <p className={styles.eyebrow}>ABOUT · BACKEND FIRST</p>
        <h1 className={styles.sectionTitle}>I like the work between the problem and the production system.</h1>
      </header>

      <section className={`${styles.section} ${styles.introGrid}`} aria-label="Professional approach">
        <div className={styles.prose}>
          <p>
            I’m Tarunn, a Go-first engineer working across backend systems, cloud platforms and applied AI.
            My career has moved from service and API work into large-scale reliability, GPU infrastructure,
            enterprise integrations and retrieval systems with evaluation and access controls.
          </p>
          <p>
            I’m drawn to problems that start with uncertainty. I work with product and customer teams to
            understand constraints, turn them into a system design, build the critical path, and follow the
            result through deployment and operations. The goal is software that can be explained, measured
            and trusted after the demo.
          </p>
          <p>
            Go and distributed systems are my core. I use AI where it fits the product and bring the same
            engineering standards to retrieval, agents and model-backed workflows: evidence, authorization,
            evaluation, observability and recovery.
          </p>
        </div>
        <div>
          <SectionHeading eyebrow="HOW I ENGINEER" title="Principles from production work." />
          <ul className={styles.principleList}>
            {engineeringPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
