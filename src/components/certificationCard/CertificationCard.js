import React from "react";
import "./CertificationCard.css";
import { useReveal } from "../../hooks/useReveal";

export default function CertificationCard({ certificate, index = 0 }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });
  const hasLink = Boolean(certificate.certificate_link);

  const Wrapper = hasLink ? "a" : "div";
  const linkProps = hasLink
    ? {
        href: certificate.certificate_link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      ref={ref}
      className={`cert-card ds-glass ds-glass--interactive ds-reveal ${
        visible ? "is-visible" : ""
      } ${hasLink ? "is-linked" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div className="cert-header">
        <img
          className="logo_img"
          src={require(`../../assets/certificates/${certificate.logo_path}`)}
          alt={certificate.alt_name}
          loading="lazy"
        />
      </div>

      <div className="cert-body">
        <h3 className="cert-body-title">{certificate.title}</h3>
        <p className="cert-body-subtitle">{certificate.subtitle}</p>
      </div>

      {hasLink ? (
        <span className="cert-verify">
          Verify
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      ) : null}
    </Wrapper>
  );
}
