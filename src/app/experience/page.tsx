import { pageMetadata } from "@/app/resources/seo";
import { site } from "@/app/resources/portfolio";
import { ContactBand, ExperienceList, MetricStrip, SectionHeading } from "@/components/portfolio/PortfolioSections";
import styles from "@/components/portfolio/portfolio.module.scss";

export function generateMetadata() {
  return pageMetadata({
    title: "Experience",
    description: `Professional experience of ${site.name} across Go backend systems, cloud platforms, production AI and forward-deployed engineering.`,
    path: "/experience",
  });
}

export default function ExperiencePage() {
  return (
    <main className={styles.page}>
      <header className={styles.section}>
        <p className={styles.eyebrow}>EXPERIENCE · 6.5+ YEARS</p>
        <h1 className={styles.sectionTitle}>Production engineering across the stack.</h1>
        <p className={styles.sectionDescription}>
          Go and backend systems are the through-line—from APIs and concurrency to cloud reliability,
          GPU platforms, enterprise integrations and governed AI retrieval.
        </p>
      </header>
      <MetricStrip />
      <section className={styles.section} aria-label="Professional timeline">
        <ExperienceList />
      </section>
      <ContactBand />
    </main>
  );
}
