import React from "react";
import "./Highlights.css";
import { highlights } from "../../portfolio";
import { useReveal } from "../../hooks/useReveal";

function HighlightCard({ item, index }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });

  return (
    <article
      ref={ref}
      className={`highlight ds-glass ds-glass--interactive ds-reveal ${
        visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${(index % 2) * 110}ms` }}
    >
      <div className="highlight__head">
        <span className="highlight__icon" aria-hidden="true">
          <span className="iconify" data-icon={item.icon} data-inline="false" />
        </span>
        <span className="ds-chip ds-chip--accent">{item.tag}</span>
      </div>

      <h3 className="highlight__title ds-h3">{item.title}</h3>

      <p className="highlight__meta">
        <span className="highlight__org">{item.org}</span>
        <span className="highlight__period">{item.period}</span>
      </p>

      <p className="highlight__body">{item.body}</p>

      {item.impact ? <p className="highlight__impact">{item.impact}</p> : null}

      <ul className="highlight__stack">
        {item.stack.map((tech) => (
          <li key={tech} className="ds-chip">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Highlights() {
  const [ref, visible] = useReveal();
  // The home page shows the flagship subset; the Projects page lists all.
  const featured = highlights.filter((h) => h.featured);

  return (
    <section className="highlights ds-section" id="highlights">
      <div className="ds-container">
        <header
          ref={ref}
          className={`highlights__header ds-reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <p className="ds-eyebrow">Selected work</p>
          <h2 className="ds-h2">
            Systems I&rsquo;ve <span className="ds-gradient-text">shipped</span>
          </h2>
          <p className="ds-lead">
            Platforms running in production across enterprise SaaS, global
            sports technology and automotive &mdash; from AI-generated live
            commentary to the messaging backbone behind international
            tournaments.
          </p>
        </header>

        <div className="highlights__grid">
          {featured.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <p className="highlights__more">
          <a href="/projects">
            See all {highlights.length} projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}
