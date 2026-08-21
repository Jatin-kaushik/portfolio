import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Aurora from "../../components/aurora/Aurora";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const linkedinSection = contactPageData.linkedinSection;
const emailSection = contactPageData.emailSection;

// The phone number is intentionally not shown on the public site.

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main page-root">
        <Aurora />
        <Header theme={theme} />

        <section className="contact-hero">
          <div className="ds-container">
            <div className="contact-grid">
              {/* ---------- Pitch ---------- */}
              <div className="contact-copy">
                <p className="ds-eyebrow">Contact</p>
                <h1 className="ds-h1 contact-title">
                  Let&rsquo;s build
                  <br />
                  <span className="ds-gradient-text">something solid.</span>
                </h1>
                <p className="ds-lead">{ContactData.description}</p>

                <div className="contact-actions">
                  {/* Identity icons lead the label; only directional icons
                      (arrows) trail it. */}
                  <a
                    className="ds-btn ds-btn--primary"
                    href={emailSection.link}
                  >
                    <svg
                      className="ds-btn__icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                      <path d="M3.4 7.6l8.6 5.9 8.6-5.9" />
                    </svg>
                    Drop a mail
                  </a>
                  <a
                    className="ds-btn ds-btn--ghost"
                    href={linkedinSection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="ds-btn__icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    View resume on LinkedIn
                  </a>
                </div>

                <div className="contact-social">
                  <SocialMedia theme={theme} />
                </div>
              </div>

              {/* ---------- Details ---------- */}
              <div className="contact-cards">
                <a
                  className="contact-card ds-glass ds-glass--interactive"
                  href={emailSection.link}
                >
                  <span className="contact-card__label">
                    {emailSection.title}
                  </span>
                  <span className="contact-card__value">
                    {emailSection.subtitle}
                  </span>
                </a>

                <a
                  className="contact-card ds-glass ds-glass--interactive"
                  href={linkedinSection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-card__label">
                    {linkedinSection.title}
                  </span>
                  <span className="contact-card__value">
                    {linkedinSection.subtitle}
                  </span>
                </a>

                <div className="contact-card ds-glass ds-glass--interactive">
                  <span className="contact-card__label">
                    {addressSection.title}
                  </span>
                  <span className="contact-card__value contact-card__value--plain">
                    {addressSection.subtitle}
                  </span>
                </div>

                <div className="contact-card ds-glass contact-card--status">
                  <span className="ds-dot" />
                  <span className="contact-card__value contact-card__value--plain">
                    Open to senior backend &amp; AI engineering roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
