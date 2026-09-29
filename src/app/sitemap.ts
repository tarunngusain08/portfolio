import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { publicProjects } from "@/app/resources/portfolio";

export default async function sitemap() {
  const featuredSlugs = new Set(publicProjects.map((project) => project.slug));
  const works = getPosts(["src", "app", "work", "projects"])
    .filter((post) => featuredSlugs.has(post.slug))
    .map((post) => ({
      url: `https://${baseURL}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...works];
}
