"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { contactEmail } from "@/app/resources/projects";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setError(false);
    } catch {
      setError(true);
    }
  }
  return (
    <section
      className="contact-block"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div>
        <span className="eyebrow">
          <span className="status-dot" /> LET’S BUILD SOMETHING
        </span>
        <h2 id="contact-heading">
          Have a useful
          <br />
          idea in mind?
        </h2>
        <p>
          A business system, a better storefront, or a tool that takes the
          repetitive work off your hands. Let’s talk.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button button-lime" href={`mailto:${contactEmail}`}>
          Say hello <FiArrowUpRight />
        </a>
        <button className="email-copy" onClick={copyEmail} type="button">
          {copied ? <FiCheck /> : <FiCopy />}{" "}
          {copied ? "Email copied" : "Copy email address"}
        </button>
        <span className="copy-status" role="status">
          {error ? `You can email me at ${contactEmail}` : ""}
        </span>
      </div>
    </section>
  );
}
