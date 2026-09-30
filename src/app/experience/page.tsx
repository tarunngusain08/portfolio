import { Column, Flex, Heading, Tag, Text } from "@/once-ui/components";
import { metrics, site } from "@/app/resources/portfolio";
import { pageMetadata } from "@/app/resources/seo";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";

export function generateMetadata() {
  return pageMetadata({
    title: "Experience",
    description: `Professional experience of ${site.name} across Go backend systems, cloud platforms, production AI and forward-deployed engineering.`,
    path: "/experience",
  });
}

export default function ExperiencePage() {
  return (
    <Column maxWidth="m" fillWidth gap="xl">
      <Column maxWidth="s" gap="m">
        <Tag size="s">EXPERIENCE · 6.5+ YEARS</Tag>
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          Forward-deployed delivery, grounded in backend engineering.
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Go and distributed systems are the through-line—from APIs and concurrency to cloud reliability,
          GPU platforms, enterprise integrations and governed AI retrieval. Expand each role for technical
          detail, delivery context and the work behind the outcomes.
        </Text>
      </Column>

      <Flex fillWidth wrap gap="m" aria-label="Career metrics">
        {metrics.map((metric) => (
          <Column key={metric.label} flex={1} minWidth="160" gap="4" padding="m" background="surface" border="neutral-medium" radius="m">
            <Heading variant="display-strong-s">{metric.value}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">{metric.label}</Text>
          </Column>
        ))}
      </Flex>

      <Column fillWidth gap="l" aria-label="Professional timeline">
        <Heading as="h2" variant="display-strong-s">Career timeline</Heading>
        <ExperienceTimeline />
      </Column>
    </Column>
  );
}
