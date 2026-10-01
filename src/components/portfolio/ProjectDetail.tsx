import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";
import { projects, type PortfolioProject } from "@/app/resources/projects";
import { ProjectVisual } from "./ProjectVisual";
import { Contact } from "./Contact";

export function ProjectDetail({ project }: { project: PortfolioProject }) {
  const next =
    projects[
      (projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length
    ];
  return (
    <div className="portfolio-shell project-detail">
      <Link className="text-link back-link" href="/work">
        <FiArrowLeft /> All projects
      </Link>
      <header className="detail-heading">
        <span className="eyebrow">
          {project.category} / {project.year}
        </span>
        <h1>
          {project.name}
          <span className="accent-period">.</span>
        </h1>
        <p>{project.summary}</p>
        <div className="detail-links">
          {project.live && (
            <a
              className="button button-dark"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website <FiArrowUpRight />
            </a>
          )}
          {project.source ? (
            <a
              className="button button-outline"
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> View source
            </a>
          ) : (
            <span className="private-label">
              <FiLock /> Private source · Project overview
            </span>
          )}
        </div>
      </header>
      <ProjectVisual visual={project.visual} />
      <div className="detail-body">
        <aside className="detail-sidebar">
          <span className="eyebrow">PROJECT DETAILS</span>
          <dl>
            <dt>Built by</dt>
            <dd>John Wakaba</dd>
            <dt>Focus</dt>
            <dd>{project.type}</dd>
            <dt>Technology</dt>
            <dd className="project-tags">
              {project.stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </dd>
          </dl>
        </aside>
        <article className="detail-copy">
          <section>
            <span className="section-index">01 / THE PROBLEM</span>
            <h2>What needed solving</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <span className="section-index">02 / THE APPROACH</span>
            <h2>How I built it</h2>
            <p>{project.approach}</p>
          </section>
          <section>
            <span className="section-index">03 / THE PRODUCT</span>
            <h2>What it does</h2>
            <div className="feature-grid">
              {project.features.map((feature, i) => (
                <div key={feature.title}>
                  <span>0{i + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <span className="section-index">04 / THE ENGINEERING</span>
            <h2>The interesting part</h2>
            <p>{project.engineering}</p>
            <div className="scope-note">
              <strong>Current scope</strong>
              <p>{project.scope}</p>
            </div>
          </section>
        </article>
      </div>
      <Link className="next-project" href={`/work/${next.slug}`}>
        <span className="eyebrow">NEXT PROJECT</span>
        <span>
          {next.name} <FiArrowUpRight />
        </span>
      </Link>
      <Contact />
    </div>
  );
}
