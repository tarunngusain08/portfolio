import { experience } from "@/app/resources/portfolio";
import { Column, Flex, Heading, SmartImage, Tag, Text } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";

type ExperienceTimelineProps = {
  limit?: number;
};

export function ExperienceTimeline({ limit }: ExperienceTimelineProps) {
  const visibleExperience = typeof limit === "number" ? experience.slice(0, limit) : experience;

  return (
    <Column fillWidth gap="xl">
      {visibleExperience.map((item, index) => (
        <Column
          as="section"
          id={`experience-${index + 1}`}
          key={`${item.company}-${item.role}-${item.dates}`}
          fillWidth
          gap="m"
          paddingBottom="l"
        >
          <Flex fillWidth horizontal="space-between" vertical="end" mobileDirection="column">
            <Column gap="4">
              <Heading as="h3" variant="heading-strong-l">
                {item.company}
                {item.context && (
                  <Text as="span" variant="heading-default-s" onBackground="neutral-weak">
                    {` · ${item.context}`}
                  </Text>
                )}
              </Heading>
              <Text variant="body-default-s" onBackground="brand-weak">
                {item.role}
              </Text>
            </Column>
            <Text variant="heading-default-xs" onBackground="neutral-weak">
              {item.dates}
            </Text>
          </Flex>

          <Text variant="body-default-m" onBackground="neutral-medium">
            {item.summary}
          </Text>

          <Column as="ul" gap="12">
            {item.achievements.map((achievement) => (
              <Text as="li" variant="body-default-m" key={achievement}>
                {achievement}
              </Text>
            ))}
          </Column>

          {item.detailGroups && item.detailGroups.length > 0 && (
            <details className={styles.technicalDetails}>
              <summary>Read the technical detail ({item.detailGroups.length} sections)</summary>
              <Column gap="m" paddingTop="m">
                {item.detailGroups.map((group) => (
                  <Column as="section" gap="8" key={group.title}>
                    <Heading as="h4" variant="heading-strong-s">
                      {group.title}
                    </Heading>
                    <Column as="ul" gap="8">
                      {group.items.map((detail) => (
                        <Text as="li" variant="body-default-s" onBackground="neutral-medium" key={detail}>
                          {detail}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </details>
          )}

          <Flex fillWidth wrap gap="8" aria-label={`${item.company} technologies`}>
            {item.technologies.map((technology) => (
              <Tag size="s" key={technology}>
                {technology}
              </Tag>
            ))}
          </Flex>

          {item.images && item.images.length > 0 && (
            <Flex fillWidth wrap gap="12" paddingTop="s">
              {item.images.map((image) => (
                <SmartImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 320px"
                  width={320}
                  aspectRatio="16 / 9"
                  radius="m"
                  border="neutral-medium"
                  enlarge
                />
              ))}
            </Flex>
          )}
        </Column>
      ))}
    </Column>
  );
}
