import { Fragment } from "react";
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
} from "@/once-ui/components";
import { pageMetadata } from "@/app/resources/seo";
import { education, experience, skillGroups, site } from "@/app/resources/portfolio";
import { about, person, social } from "@/app/resources/content";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";

const tableOfContents = { tableOfContent: { display: true, subItems: false } };
const sections = [
  { title: "Introduction", display: true, items: [] },
  { title: "Work Experience", display: true, items: experience.map((_, index) => `experience-${index + 1}`) },
  { title: "Studies", display: true, items: education.map((item) => item.institution) },
  { title: "Technical skills", display: true, items: skillGroups.map((group) => group.title) },
];

export function generateMetadata() {
  return pageMetadata({ title: "Experience", description: about.description, path: "/about" });
}

export default function About() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: site.role,
            description: about.description,
            url: `${site.url}/about`,
            image: `${site.url}${person.avatar}`,
            sameAs: social.filter((item) => item.link && !item.link.startsWith("mailto:")).map((item) => item.link),
            worksFor: { "@type": "Organization", name: experience[0]?.company },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <TableOfContents structure={sections} about={tableOfContents} />
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column
          className={styles.avatar}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Flex>
          <Flex wrap gap="8">
            {person.languages.map((language) => <Tag key={language} size="l">{language}</Tag>)}
          </Flex>
        </Column>

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column id="Introduction" fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading className={styles.textAlign} as="h1" variant="display-strong-s">
              Experience
            </Heading>
            <Heading className={styles.textAlign} as="h2" variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              {site.role}
            </Text>
            <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
              {social.map((item) => item.link && (
                <Fragment key={item.name}>
                  <Button
                    className="s-flex-hide"
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="secondary"
                  />
                  <IconButton
                    className="s-flex-show"
                    size="l"
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    variant="secondary"
                  />
                </Fragment>
              ))}
            </Flex>
          </Column>

          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            <Text>
              I’m a Go-first Forward Deployed Engineer and Senior Backend Engineer with 6.5+ years of experience building distributed systems, cloud platforms, and production AI. I work with customer and product teams to turn ambiguous requirements into systems that can be operated, measured, and trusted after launch.
            </Text>
            <Text>
              My work spans backend APIs, reliability and capacity planning, GPU infrastructure, enterprise integrations, hybrid RAG, evaluation, and retrieval-time authorization. I stay close to implementation and production operations, and bring technical depth to the decisions made with each team.
            </Text>
          </Column>

          <Heading as="h2" id="Work Experience" variant="display-strong-s" marginBottom="m">
            Work Experience
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            <ExperienceTimeline />
          </Column>

          <Heading as="h2" id="Studies" variant="display-strong-s" marginBottom="m">
            Studies
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {education.map((item) => (
              <Column key={item.institution} fillWidth gap="4">
                <Text variant="heading-strong-l">{item.institution}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">{item.description}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">{item.duration}</Text>
              </Column>
            ))}
          </Column>

          <Heading as="h2" id="Technical skills" variant="display-strong-s" marginBottom="m">
            Technical skills
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {skillGroups.map((group) => (
              <Column id={group.title} key={group.title} fillWidth gap="8">
                <Text variant="heading-strong-l">{group.title}</Text>
                <Flex wrap gap="8">
                  {group.skills.map((skill) => <Tag key={skill} size="m">{skill}</Tag>)}
                </Flex>
              </Column>
            ))}
          </Column>

          <Column fillWidth gap="m" marginBottom="xl">
            <Heading as="h2" variant="display-strong-s">Certificates and learning</Heading>
            <Text onBackground="neutral-weak">Browse the certificate screenshots and learning archive.</Text>
            <Flex gap="8" wrap>
              <Button href="/gallery" variant="secondary" size="m" arrowIcon>View certificates</Button>
              {site.resumePath && <Button href={site.resumePath} variant="secondary" size="m" arrowIcon>Resume</Button>}
            </Flex>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
