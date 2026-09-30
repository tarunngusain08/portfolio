import { getPosts } from "@/app/utils/utils";
import { publicProjects } from "@/app/resources/portfolio";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const chronologicalProjects = [...allProjects].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
  const featuredProjects = publicProjects
    .map((project) => allProjects.find((post) => post.slug === project.slug))
    .filter((post): post is (typeof allProjects)[number] => Boolean(post));
  const featuredSlugs = new Set(featuredProjects.map((post) => post.slug));
  const sortedProjects = [
    ...featuredProjects,
    ...chronologicalProjects.filter((post) => !featuredSlugs.has(post.slug)),
  ];

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => {
        const projectDetails = publicProjects.find((project) => project.slug === post.slug);

        return (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            aspectRatio={post.metadata.previewAspectRatio}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            demo={post.metadata.demo}
            technologies={projectDetails?.technologies}
            proof={projectDetails?.proof}
          />
        );
      })}
    </Column>
  );
}
