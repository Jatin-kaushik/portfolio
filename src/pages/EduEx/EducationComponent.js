import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Aurora from "../../components/aurora/Aurora";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import Resume from "./Resume";

class Education extends Component {
  render() {
    return (
      <div className="education-main page-root">
        <Aurora />
        <Header theme={this.props.theme} />

        <section className="edu-hero">
          <div className="ds-container">
            <p className="ds-eyebrow">Career</p>
            <h1 className="ds-h1 edu-hero__title">
              Experience &amp;{" "}
              <span className="ds-gradient-text">Education</span>
            </h1>
            <p className="ds-lead">
              Six years across enterprise AI platforms, global sports technology
              and high-throughput backend systems &mdash; plus the
              qualifications and certifications behind them.
            </p>
            <div className="edu-hero__socials">
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>
        </section>

        <Resume />
        <Certifications theme={this.props.theme} />

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
