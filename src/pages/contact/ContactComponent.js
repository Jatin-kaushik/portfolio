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
                  <a
                    className="ds-btn ds-btn--primary"
                    href={emailSection.link}
                  >
                    Drop a mail
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </a>
                  <a
                    className="ds-btn ds-btn--ghost"
                    href={linkedinSection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
