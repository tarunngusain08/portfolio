import { Column, Flex, Heading, SmartLink, Tag, Text } from "@/once-ui/components";
import { getPosts } from "@/app/utils/utils";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import { site } from "@/app/resources/portfolio";
import { pageMetadata } from "@/app/resources/seo";

const additionalSystems = [
  { name: "Transaction Outbox Service", url: "https://github.com/tarunngusain08/transaction-outbox-service" },
  { name: "Rate Limiter", url: "https://github.com/tarunngusain08/Rate_Limiter" },
  { name: "Load Balancer", url: "https://github.com/tarunngusain08/Load-Balancer" },
  { name: "Distributed Cache", url: "https://github.com/tarunngusain08/Distributed-Cache" },
  { name: "Go + PostgreSQL", url: "https://github.com/tarunngusain08/Go-Postgres" },
];

export function generateMetadata() {
  return pageMetadata({ title: work.title, description: work.description, path: "/work" });
}

export default function Work() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m" fillWidth gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `${site.url}/work`,
            image: `${site.url}/og?title=${encodeURIComponent(work.title)}`,
            author: { "@type": "Person", name: person.name },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `${site.url}/work/${project.slug}`,
              image: project.metadata.images.map((image) => `${site.url}${image}`),
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />

      <Column maxWidth="s" gap="m">
        <Tag size="s">FEATURED · ARCHIVE</Tag>
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          Systems in production, and in code.
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Current work explores evidence-grounded AI, evaluation and real-time systems. The archive keeps
          earlier product builds and hands-on model experiments available with their screenshots, technical
          notes and source links.
        </Text>
      </Column>

      <Column fillWidth gap="l">
        <Column gap="8">
          <Heading as="h2" variant="display-strong-s">Featured projects</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Current systems work, with benchmark evidence and implementation details.
          </Text>
        </Column>
        <Projects range={[1, 3]} />
      </Column>

      <Column fillWidth gap="l">
        <Column gap="8">
          <Heading as="h2" variant="display-strong-s">Earlier projects and experiments</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Product builds, Android work and model-training experiments remain part of the engineering history.
          </Text>
        </Column>
        <Projects range={[4]} />
      </Column>

      <Column fillWidth gap="m" paddingTop="m">
        <Heading as="h2" variant="display-strong-s">More backend and systems work</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Additional repositories from the broader Go and distributed-systems portfolio.
        </Text>
        <Flex fillWidth wrap gap="m">
          {additionalSystems.map((project) => (
            <SmartLink key={project.name} href={project.url} suffixIcon="arrowUpRightFromSquare">
              <Text variant="body-default-s">{project.name}</Text>
            </SmartLink>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
