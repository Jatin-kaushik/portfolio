import React from "react";
import "./Highlights.css";
import { highlights } from "../../portfolio";
import { useReveal } from "../../hooks/useReveal";

function HighlightCard({ item, index }) {
  const [ref, visible] = useReveal({ threshold: 0.18 });

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
      <p className="highlight__body">{item.body}</p>

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
            Production platforms serving global audiences &mdash; from
            AI-generated sports commentary to the messaging backbone behind live
            international tournaments.
          </p>
        </header>

        <div className="highlights__grid">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
