"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/app/resources/portfolio";
import styles from "@/components/Header.module.scss";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export const Header = () => {
  const pathname = usePathname() ?? "/";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label={`${site.name} home`}>
          <span aria-hidden="true">TG</span>
        </Link>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => {
            const selected = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                className={selected ? `${styles.navLink} ${styles.selected}` : styles.navLink}
                aria-current={selected ? "page" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className={styles.contact} href={`mailto:${site.email}?subject=Engineering%20opportunity`}>
          Contact <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};
