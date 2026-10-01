"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { categories, projects } from "@/app/resources/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectGrid({
  filterable = false,
  limit,
}: {
  filterable?: boolean;
  limit?: number;
}) {
  const [active, setActive] = useState<string>("All work");
  const visible = projects
    .filter((p) => active === "All work" || p.category === active)
    .slice(0, limit);
  return (
    <>
      {filterable && (
        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >
              {category}
              <span>
                {category === "All work"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length}
              </span>
            </button>
          ))}
        </div>
      )}
      <div className="project-grid" aria-live="polite">
        {visible.map((project) => (
          <article className="portfolio-card" key={project.slug}>
            <Link
              className="art-link"
              href={`/work/${project.slug}`}
              aria-label={`Explore ${project.name}`}
            >
              <ProjectVisual visual={project.visual} />
              <span className="project-open">
                <FiArrowUpRight />
              </span>
            </Link>
            <div className="project-meta">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </div>
            <h3>
              <Link href={`/work/${project.slug}`}>{project.name}</Link>
            </h3>
            <p>{project.summary}</p>
            <div className="project-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-card-bottom">
              <Link href={`/work/${project.slug}`}>
                Explore project <FiArrowUpRight />
              </Link>
              {!project.source && (
                <span className="private-label">
                  <FiLock /> Private source
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
