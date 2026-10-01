import Link from "next/link";
import Image from "next/image";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";
import { unstable_setRequestLocale } from "next-intl/server";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { Contact } from "@/components/portfolio/Contact";
import { baseURL } from "@/app/resources";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="portfolio-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "John Wakaba",
            jobTitle: "Software Developer",
            url: `https://${baseURL}`,
            sameAs: [
              "https://github.com/SK108045",
              "https://www.linkedin.com/in/john-wakaba-linked-in",
            ],
          }),
        }}
      />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> SOFTWARE DEVELOPER · NAIROBI, KE
          </span>
          <h1 id="hero-heading">
            I build software
            <br />
            that{" "}
            <span className="hero-useful">
              gets used
              <svg
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12Q168 -2 395 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="accent-period">.</span>
          </h1>
          <p>
            I’m John Wakaba. I turn everyday problems into practical products —
            from shop counters and Android phones to online stores and messy
            spreadsheets.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#selected-work">
              Explore my work <FiArrowDown />
            </a>
            <Link className="text-link" href="/about">
              A little about me <FiArrowUpRight />
            </Link>
          </div>
          <div className="hero-footnote">
            <span>FULL STACK DEVELOPMENT</span>
            <span className="footnote-line" />
            <span>FROM IDEA TO DEPLOYMENT</span>
          </div>
        </div>
        <div className="hero-board">
          <div className="board-top">
            <span>
              <i /> <i /> <i />
            </span>
            <span>john.workspace</span>
            <FiCode />
          </div>
          <div className="board-profile">
            <Image
              src="/images/avatar.jpg"
              width={56}
              height={56}
              alt="John Wakaba"
              priority
            />
            <div>
              <strong>John Wakaba</strong>
              <span>Software developer & builder</span>
            </div>
            <span className="profile-mark">↗</span>
          </div>
          <div className="board-message">
            <span className="code-comment">{"// WHAT I CARE ABOUT"}</span>
            <span>Good software.</span>
            <span>Real problems.</span>
            <span className="board-lime">Useful outcomes.</span>
          </div>
          <div className="board-stack">
            <span>
              <FiTerminal /> Python & TypeScript
            </span>
            <span>
              <FiLayers /> Web, mobile & data
            </span>
          </div>
          <div className="board-bottom">
            <span className="status-dot" /> Made to solve something.
          </div>
          <span className="board-sticker">
            less friction.
            <br />
            <strong>more function.</strong>
            <svg viewBox="0 0 55 55" aria-hidden="true">
              <path
                d="M8 44L46 6M10 6H46V42"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </span>
        </div>
      </section>
      <div className="discipline-strip">
        <span>BUSINESS SYSTEMS</span>
        <i>✳</i>
        <span>MOBILE APPLICATIONS</span>
        <i>✳</i>
        <span>WEB & COMMERCE</span>
        <i>✳</i>
        <span>TOOLS & AUTOMATION</span>
      </div>
      <section
        className="selected-work"
        id="selected-work"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2 id="work-heading">
              Built to do something<span className="accent-period">.</span>
            </h2>
          </div>
          <p>
            A few recent projects.
            <br />
            The problem, the product, and the code behind it.
          </p>
        </div>
        <ProjectGrid limit={4} />
        <div className="all-work-row">
          <span>There’s more where these came from.</span>
          <Link className="button button-outline" href="/work">
            View all projects <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="home-about">
        <div>
          <span className="eyebrow">02 / HOW I WORK</span>
          <h2>
            Curious by default.
            <br />
            Practical by design.
          </h2>
        </div>
        <div>
          <p>
            I like working across the whole product: the interface people see,
            the data underneath, and the infrastructure that keeps it running.
          </p>
          <p>
            My recent work is grounded in everyday business workflows — making a
            sale, managing stock, paying from a phone, or cleaning up supplier
            data.
          </p>
          <Link className="text-link" href="/about">
            Meet the person behind the projects <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <Contact />
    </div>
  );
}
