import Link from "next/link";
import { site } from "@/app/resources/portfolio";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <p>© {new Date().getFullYear()} {site.name}</p>
      <nav className={styles.links} aria-label="Footer links">
        <Link href="/experience">Experience</Link>
        <Link href="/work">Work</Link>
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${site.email}`}>Email</a>
      </nav>
      <p className={styles.footerNote}>Go · backend · production AI</p>
    </div>
  </footer>
);
