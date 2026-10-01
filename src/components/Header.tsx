"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="portfolio-header">
      <div className="header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="John Wakaba home"
          onClick={() => setOpen(false)}
        >
          john<span> / </span>wakaba<span className="wordmark-dot">.</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="portfolio-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="portfolio-navigation"
          className={`portfolio-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link
            href="/work"
            aria-current={pathname?.startsWith("/work") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <a
            href="https://github.com/SK108045"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub <FiArrowUpRight />
          </a>
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <FiArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
};
