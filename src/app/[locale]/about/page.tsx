import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { unstable_setRequestLocale } from "next-intl/server";
import { Contact } from "@/components/portfolio/Contact";

export const metadata = {
  title: "About",
  description:
    "Meet John Wakaba, a Nairobi software developer building practical web, mobile, and business applications.",
};
const skills = [
  {
    title: "Interfaces people can use",
    text: "Responsive websites, commerce flows, and mobile interfaces with attention to the small details.",
    stack: ["React", "Next.js", "Astro", "TypeScript", "Capacitor"],
  },
  {
    title: "Systems they can rely on",
    text: "Business logic, shared databases, local storage, and integrations that support everyday operations.",
    stack: ["Python", "FastAPI", "Node.js", "PostgreSQL", "SQLite"],
  },
  {
    title: "Tools that save work",
    text: "Data mapping, spreadsheet transformations, real-time communication, and practical AI integration.",
    stack: ["RapidFuzz", "Gemini", "WebSocket", "Supabase"],
  },
  {
    title: "Getting it out the door",
    text: "Server setup, containers, deployment, and the infrastructure between a repository and a working product.",
    stack: ["Docker", "AWS EC2", "NGINX", "Vercel", "GitHub"],
  },
];
export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="portfolio-shell">
      <section className="about-intro">
        <div>
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h1>
            Hi, I’m John<span className="accent-period">.</span>
            <br />I like making
            <br />
            <span className="muted-heading">things work.</span>
          </h1>
          <p>
            I’m a software developer based in Nairobi, Kenya, with a background
            in Computer Science at Maseno University.
          </p>
          <p>
            I build across web, mobile, and backend systems. Lately, that means
            POS software for different shop workflows, customer-facing commerce,
            and tools that turn difficult data into something usable.
          </p>
          <Link className="text-link" href="/work">
            See what I’ve been building <FiArrowUpRight />
          </Link>
        </div>
        <figure className="about-portrait">
          <Image
            src="/images/avatar.jpg"
            width={640}
            height={820}
            sizes="(max-width: 760px) 100vw, 38vw"
            alt="John Wakaba"
            priority
          />
          <figcaption>
            <span>JOHN WAKABA</span>
            <span>NAIROBI, KENYA ↗</span>
          </figcaption>
        </figure>
      </section>
      <section className="skills-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT I BRING TO A PROJECT</span>
            <h2>
              From the screen
              <br />
              to the system.
            </h2>
          </div>
          <p>
            I choose the tools around the problem.
            <br />
            These are some I’ve used in my projects.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <article key={skill.title}>
              <span className="section-index">0{i + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className="project-tags">
                {skill.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="about-principle">
        <span className="eyebrow">THE WAY I SEE IT</span>
        <h2>
          A useful product starts
          <br />
          with a problem worth solving.
        </h2>
        <p>
          I care about understanding the workflow first, then building the
          simplest system that handles it well. Clear interfaces, careful data
          handling, and honest explanations of what a product can do.
        </p>
      </section>
      <Contact />
    </div>
  );
}
