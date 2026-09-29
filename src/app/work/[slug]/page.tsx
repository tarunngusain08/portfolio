import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { pageMetadata } from "@/app/resources/seo";
import { publicProjects, site } from "@/app/resources/portfolio";
import { ContactBand } from "@/components/portfolio/PortfolioSections";
import styles from "@/components/portfolio/portfolio.module.scss";

interface WorkParams {
  params: { slug: string };
}

function allProjects() {
  const featuredSlugs = new Set(publicProjects.map((project) => project.slug));
  return getPosts(["src", "app", "work", "projects"]).filter((post) => featuredSlugs.has(post.slug));
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return allProjects().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params: { slug } }: WorkParams) {
  const post = allProjects().find((item) => item.slug === slug);
  if (!post) return;

  return pageMetadata({
    title: post.metadata.title,
    description: post.metadata.summary,
    path: `/work/${post.slug}`,
    type: "article",
  });
}

export default function Project({ params }: WorkParams) {
  const post = allProjects().find((item) => item.slug === params.slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    url: `${site.url}/work/${post.slug}`,
    author: { "@type": "Person", name: site.name },
    sameAs: post.metadata.link || undefined,
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className={styles.section}>
        <a className={styles.textLink} href="/work">← All selected work</a>
        <p className={styles.eyebrow} style={{ marginTop: "2rem" }}>PROJECT NOTES · {post.slug.replaceAll("-", " ")}</p>
        <h1 className={styles.sectionTitle}>{post.metadata.title}</h1>
        <p className={styles.sectionDescription}>{post.metadata.summary}</p>
        {post.metadata.link && (
          <div style={{ marginTop: "1.25rem" }}>
            <a className={styles.buttonSecondary} href={post.metadata.link} target="_blank" rel="noreferrer">
              Open source repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </header>
      <article className={styles.prose}>
        <CustomMDX source={post.content} />
      </article>
      <ContactBand />
    </main>
  );
}
