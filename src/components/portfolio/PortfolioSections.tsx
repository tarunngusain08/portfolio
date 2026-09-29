import Link from "next/link";
import {
  agentRuntime,
  caseStudies,
  experience,
  metrics,
  publicProjects,
  skillGroups,
  site,
} from "@/app/resources/portfolio";
import styles from "./portfolio.module.scss";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({ id, eyebrow, title, description, href, linkLabel }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle} id={id}>{title}</h2>
        {description && <p className={styles.sectionDescription}>{description}</p>}
      </div>
      {href && linkLabel && (
        <Link className={styles.textLink} href={href}>
          {linkLabel} <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}

export function MetricStrip() {
  return (
    <dl className={styles.metrics} aria-label="Selected engineering experience">
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudyGrid() {
  return (
    <div className={styles.caseGrid}>
      {caseStudies.map((study, index) => (
        <article className={styles.caseCard} key={study.title}>
          <div className={styles.cardTopline}>
            <span className={styles.cardIndex}>0{index + 1}</span>
            <span className={styles.organization}>{study.organization}</span>
          </div>
          <h3>{study.title}</h3>
          <p className={styles.cardDescription}>{study.summary}</p>
          <ul className={styles.outcomeList}>
            {study.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <div className={styles.tags} aria-label="Engineering areas">
            {study.capabilities.map((capability) => <span className={styles.tag} key={capability}>{capability}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectGrid() {
  return (
    <div className={styles.projectGrid}>
      {publicProjects.map((project, index) => (
        <article className={styles.projectCard} key={project.name}>
          <div className={styles.cardTopline}>
            <span className={styles.cardIndex}>0{index + 1}</span>
            <span className={styles.projectType}>PUBLIC PROJECT</span>
          </div>
          <h3>{project.name}</h3>
          <p className={styles.projectTagline}>{project.tagline}</p>
          <p className={styles.cardDescription}>{project.description}</p>
          <ul className={styles.proofList}>
            {project.proof.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {project.name === "Knowledge Forge" && (
            <p className={styles.metricNote}>Repository benchmark result; not a production or customer metric.</p>
          )}
          <div className={styles.tags} aria-label={`${project.name} technology stack`}>
            {project.technologies.map((technology) => <span className={styles.tag} key={technology}>{technology}</span>)}
          </div>
          <div className={styles.cardLinks}>
            <Link className={styles.textLink} href={`/work/${project.slug}`}>Read project notes <span aria-hidden="true">↗</span></Link>
            <a className={styles.textLink} href={project.github} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}

type ExperienceListProps = {
  limit?: number;
};

export function ExperienceList({ limit }: ExperienceListProps) {
  const visibleExperience = typeof limit === "number" ? experience.slice(0, limit) : experience;

  return (
    <ol className={styles.timeline}>
      {visibleExperience.map((item) => (
        <li className={styles.timelineItem} key={`${item.company}-${item.role}-${item.dates}`}>
          <div className={styles.timelineMarker} aria-hidden="true" />
          <div className={styles.timelineHeader}>
            <div>
              <h3>{item.company}{item.context && <span className={styles.context}> · {item.context}</span>}</h3>
              <p className={styles.role}>{item.role}</p>
            </div>
            <p className={styles.dates}>{item.dates}</p>
          </div>
          <p className={styles.timelineSummary}>{item.summary}</p>
          <ul className={styles.achievementList}>
            {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
          </ul>
          <div className={styles.tags} aria-label="Technologies and focus areas">
            {item.technologies.map((technology) => <span className={styles.tag} key={technology}>{technology}</span>)}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SkillGroups() {
  return (
    <div className={styles.skillGrid}>
      {skillGroups.map((group) => (
        <section className={styles.skillCard} key={group.title}>
          <h3>{group.title}</h3>
          <ul className={styles.tags}>
            {group.skills.map((skill) => <li className={styles.tag} key={skill}>{skill}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function AgentRuntimeCard() {
  return (
    <article className={styles.runtimeCard}>
      <div>
        <p className={styles.eyebrow}>SELECTED ENGINEERING WORK · GO + POSTGRESQL</p>
        <h3>{agentRuntime.title}</h3>
        <p className={styles.cardDescription}>{agentRuntime.description}</p>
      </div>
      <ul className={styles.runtimeCapabilities}>
        {agentRuntime.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
      </ul>
    </article>
  );
}

export function ContactBand() {
  return (
    <section className={styles.contactBand}>
      <div>
        <p className={styles.eyebrow}>HAVE A HARD PROBLEM TO SOLVE?</p>
        <h2>Let’s talk about the system behind it.</h2>
        <p>For backend, platform, applied AI and forward-deployed roles.</p>
      </div>
      <a className={styles.button} href={`mailto:${site.email}?subject=Engineering%20opportunity`}>
        Email Tarunn <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
