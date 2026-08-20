import React from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { useReveal } from "../../hooks/useReveal";

export default function Certifications(props) {
  const [ref, visible] = useReveal();

  return (
    <section className="certs ds-section" id="certs">
      <div className="ds-container">
        <header
          ref={ref}
          className={`certs-header-div ds-reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <p className="ds-eyebrow">Credentials</p>
          <h2 className="certs-header ds-h2">
            Certifications &amp;{" "}
            <span className="ds-gradient-text">badges</span>
          </h2>
          <p className="ds-lead">
            {certifications.certifications.length} verified certifications
            across cloud platforms, AI engineering and data analytics.
          </p>
        </header>

        <div className="certs-body-div">
          {certifications.certifications.map((cert, i) => (
            <CertificationCard
              key={cert.title + i}
              certificate={cert}
              theme={props.theme}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
