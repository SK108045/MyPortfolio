import type { MetadataRoute } from "next";
import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { routing } from "@/i18n/routing";
import { projects } from "@/app/resources/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = `https://${baseURL}`;
  const locales = routing.locales;
  const prefix = (locale: string) => (locales.length > 1 ? `/${locale}` : "");
  const pages = locales.flatMap((locale) =>
    Object.entries(routesConfig)
      .filter(([, enabled]) => enabled)
      .map(([route]) => ({
        url: `${origin}${prefix(locale)}${route === "/" ? "" : route}`,
      })),
  );
  const archived = locales.flatMap((locale) =>
    ["work", "blog"].flatMap((section) =>
      getPosts([
        "src",
        "app",
        "[locale]",
        section,
        section === "work" ? "projects" : "posts",
        locale,
      ]).map((post) => ({
        url: `${origin}${prefix(locale)}/${section}/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      })),
    ),
  );
  const current = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${origin}${prefix(locale)}/work/${project.slug}`,
      lastModified: "2026-10-01",
    })),
  );
  return [...pages, ...current, ...archived];
}
