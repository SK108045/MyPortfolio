import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { unstable_setRequestLocale } from "next-intl/server";
import { getPosts } from "@/app/utils/utils";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { Contact } from "@/components/portfolio/Contact";

export const metadata = {
  title: "Projects",
  description:
    "Explore John Wakaba’s business systems, Android POS, Nicoo storefront, Parseify data tool, and real-time collaboration work.",
};

export default function Work({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const archived = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    locale,
  ]).filter((p) => p.slug !== "0.01" && !p.slug.includes("SketchSync"));
  return (
    <div className="portfolio-shell">
      <header className="page-heading">
        <span className="eyebrow">THE PROJECT COLLECTION</span>
        <h1>
          Ideas, made real<span className="accent-period">.</span>
        </h1>
        <p>
          Business systems, mobile apps, storefronts, and tools. A look at what
          I’ve been building and how the pieces fit together.
        </p>
      </header>
      <ProjectGrid filterable />
      <section className="archive-section">
        <details>
          <summary>
            <span>
              Earlier work{" "}
              <small>
                {archived.length} projects · The learning never stops
              </small>
            </span>
            <span className="archive-plus">+</span>
          </summary>
          <div className="archive-list">
            {archived.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`}>
                <span>{p.metadata.title}</span>
                <FiArrowUpRight />
              </Link>
            ))}
          </div>
        </details>
      </section>
      <Contact />
    </div>
  );
}
