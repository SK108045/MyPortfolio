import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const Footer = () => (
  <footer className="portfolio-footer">
    <div>
      <span>© {new Date().getFullYear()} John Wakaba</span>
      <span className="footer-location">
        Built in Nairobi, Kenya <span>↗</span>
      </span>
      <div>
        <a
          href="https://github.com/SK108045"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FiArrowUpRight />
        </a>
        <a
          href="https://www.linkedin.com/in/john-wakaba-linked-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <FiArrowUpRight />
        </a>
        <Link href="/#contact">
          Contact <FiArrowUpRight />
        </Link>
      </div>
    </div>
    <small>
      Built with Next.js &{" "}
      <a href="https://once-ui.com" target="_blank" rel="noopener noreferrer">
        Once UI
      </a>
    </small>
  </footer>
);
