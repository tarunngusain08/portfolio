import { notFound } from "next/navigation";
import { AvatarGroup, Button, Carousel, Column, Flex, Heading, SmartLink, Tag, Text } from "@/once-ui/components";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { pageMetadata } from "@/app/resources/seo";
import { publicProjects, site } from "@/app/resources/portfolio";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";

interface WorkParams {
  params: { slug: string };
}

function allProjects() {
  return getPosts(["src", "app", "work", "projects"]);
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return allProjects().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params: { slug } }: WorkParams) {
  const post = allProjects().find((item) => item.slug === slug);
  if (!post) return;

  const metadata = pageMetadata({
    title: post.metadata.title,
    description: post.metadata.summary,
    path: `/work/${post.slug}`,
    type: "article",
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, publishedTime: post.metadata.publishedAt },
  };
}

export default function Project({ params }: WorkParams) {
  const post = allProjects().find((item) => item.slug === params.slug);
  if (!post) notFound();

  const projectDetails = publicProjects.find((project) => project.slug === post.slug);
  const avatars = post.metadata.team?.map((member) => ({ src: member.avatar })) || [];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    url: `${site.url}/work/${post.slug}`,
    image: post.metadata.images.map((image) => `${site.url}${image}`),
    author: { "@type": "Person", name: site.name },
    sameAs: post.metadata.link || undefined,
  };

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Column maxWidth="xs" gap="16">
        <Button href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          All projects
        </Button>
        <Heading as="h1" variant="display-strong-s">{post.metadata.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">{post.metadata.summary}</Text>
        <Flex gap="12" marginTop="8" vertical="center" wrap>
          {avatars.length > 0 && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
          {post.metadata.link && (
            <SmartLink suffixIcon="arrowUpRightFromSquare" href={post.metadata.link}>
              <Text variant="body-default-s">Source repository</Text>
            </SmartLink>
          )}
          {post.metadata.demo && (
            <SmartLink suffixIcon="arrowUpRightFromSquare" href={post.metadata.demo}>
              <Text variant="body-default-s">Project demo</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>

      {post.metadata.images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          aspectRatio={post.metadata.previewAspectRatio}
          images={post.metadata.images.map((image) => ({ src: image, alt: post.metadata.title }))}
        />
      )}

      {projectDetails && (
        <Column maxWidth="xs" fillWidth gap="m" padding="m" background="surface" border="neutral-medium" radius="m">
          <Heading as="h2" variant="heading-strong-m">Project evidence</Heading>
          <Column as="ul" gap="8">
            {projectDetails.proof.map((item) => <Text as="li" variant="body-default-s" key={item}>{item}</Text>)}
          </Column>
          <Flex wrap gap="8">
            {projectDetails.technologies.map((technology) => <Tag size="s" key={technology}>{technology}</Tag>)}
          </Flex>
        </Column>
      )}

      <Column style={{ margin: "auto" }} as="article" maxWidth="xs" fillWidth>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
