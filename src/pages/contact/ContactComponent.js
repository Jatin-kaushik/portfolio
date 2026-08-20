import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Aurora from "../../components/aurora/Aurora";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./ContactComponent.css";
import { contactPageData, socialMediaLinks } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const mailLink =
  (socialMediaLinks.find((l) => l.name === "Gmail") || {}).link ||
  "mailto:jatinchandkaushik@gmail.com";

const email = mailLink.replace("mailto:", "");

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
                  <a className="ds-btn ds-btn--primary" href={mailLink}>
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
                </div>

                <div className="contact-social">
                  <SocialMedia theme={theme} />
                </div>
              </div>

              {/* ---------- Details ---------- */}
              <div className="contact-cards">
                <div className="contact-card ds-glass ds-glass--interactive">
                  <span className="contact-card__label">Email</span>
                  <a className="contact-card__value" href={mailLink}>
                    {email}
                  </a>
                </div>

                <div className="contact-card ds-glass ds-glass--interactive">
                  <span className="contact-card__label">
                    {phoneSection.title}
                  </span>
                  <a
                    className="contact-card__value"
                    href={`tel:${phoneSection.subtitle.replace(/\s/g, "")}`}
                  >
                    {phoneSection.subtitle}
                  </a>
                </div>

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
