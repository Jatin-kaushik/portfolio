import React from "react";
import "./Greeting.css";
import { greeting, competitiveSites, companies } from "../../portfolio";
import ArchitectureVisual from "./ArchitectureVisual";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { useReveal } from "../../hooks/useReveal";

/** Tech marks that float alongside the hero illustration. */
const ORBIT = [
  { icon: "ion-logo-python", color: "#3776AB", label: "Python" },
  { icon: "simple-icons:fastapi", color: "#009688", label: "FastAPI" },
  { icon: "simple-icons:amazonaws", color: "#FF9900", label: "AWS" },
  { icon: "simple-icons:apachekafka", color: "#FFFFFF", label: "Kafka" },
  { icon: "simple-icons:docker", color: "#2496ED", label: "Docker" },
  { icon: "simple-icons:kubernetes", color: "#326CE5", label: "Kubernetes" },
];

export default function Greeting() {
  const [ref, visible] = useReveal({ threshold: 0.05 });

  return (
    <section className="hero" id="greeting">
      <div className="ds-container">
        <div
          ref={ref}
          className={`hero__grid ds-reveal ${visible ? "is-visible" : ""}`}
        >
          {/* ---------------- Copy ---------------- */}
          <div className="hero__copy">
            <p className="hero__status">
              <span className="ds-dot" />
              Delhi, India &middot; Open to senior backend &amp; AI roles
            </p>

            <h1 className="hero__title ds-h1">
              Building intelligent
              <br />
              <span className="ds-gradient-text">backend systems</span>
              <br />
              at scale.
            </h1>

            <div className="hero__role">
              <span className="hero__role-prefix">&gt;</span>
              <Typewriter
                onInit={(tw) => {
                  tw.typeString("Senior Backend AI Engineer")
                    .pauseFor(1700)
                    .deleteAll(20)
                    .typeString("Python & FastAPI Developer")
                    .pauseFor(1700)
                    .deleteAll(20)
                    .typeString("Generative AI & LLM Engineer")
                    .pauseFor(1700)
                    .deleteAll(20)
                    .typeString("Microservices Architect")
                    .pauseFor(1700)
                    .deleteAll(20)
                    .typeString("Cloud & Distributed Systems Engineer")
                    .pauseFor(1700)
                    .start();
                }}
                options={{ autoStart: true, loop: true, delay: 45 }}
              />
            </div>

            <p className="hero__lead ds-lead">
              I&rsquo;m <strong>{greeting.sub}</strong> &mdash; six years
              designing Python services, Generative AI platforms and
              event-driven microservices on AWS and Azure. My work has kept the{" "}
              <strong>Australian Open</strong>, <strong>Roland Garros</strong>,{" "}
              <strong>ATP Tours</strong> and <strong>Formula-E</strong> online
              for millions of fans.
            </p>

            <div className="hero__actions">
              <a className="ds-btn ds-btn--primary" href="/education">
                View my work
                <svg
                  width="15"
                  height="15"
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
              {greeting.resumeLink ? (
                <a
                  className="ds-btn ds-btn--ghost"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              ) : null}
              <a className="ds-btn ds-btn--ghost" href="/contact">
                Get in touch
              </a>
            </div>

            <div className="hero__socials">
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>

          {/* ---------------- Visual ---------------- */}
          <div className="hero__visual">
            <div className="hero__visual-glow" aria-hidden="true" />
            <div className="hero__lottie">
              <ArchitectureVisual />
            </div>

            <ul className="hero__orbit" aria-label="Core technologies">
              {ORBIT.map((tech, i) => (
                <li
                  key={tech.label}
                  className="hero__orbit-item"
                  style={{ animationDelay: `${i * 0.42}s` }}
                  title={tech.label}
                >
                  <span
                    className="iconify"
                    data-icon={tech.icon}
                    style={{ color: tech.color }}
                    data-inline="false"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- Trust strip ---------------- */}
        <div className="hero__companies">
          <span className="hero__companies-label">Trusted with systems at</span>
          <ul className="hero__companies-list">
            {companies.map((c) => (
              <li key={c.name} className="hero__company">
                <span className="hero__company-name">{c.name}</span>
                <span className="hero__company-detail">{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
