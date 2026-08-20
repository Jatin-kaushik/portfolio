import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Aurora from "../../components/aurora/Aurora";
import { projectsHeader, projectcards, highlights } from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main page-root">
        <Aurora />
        <Header theme={theme} />

        <section className="projects-hero">
          <div className="ds-container">
            <p className="ds-eyebrow">Portfolio</p>
            <h1 className="ds-h1 projects-title">
              {projectsHeader.title.replace("Projects", "")}
              <span className="ds-gradient-text">Projects</span>
            </h1>
            <p className="ds-lead">{projectsHeader.description}</p>
          </div>
        </section>

        {/* ---------- Professional work ---------- */}
        <section className="projects-section">
          <div className="ds-container">
            <h2 className="projects-subhead">
              Production systems
              <span className="projects-subhead__note">
                Delivered in enterprise roles
              </span>
            </h2>

            <div className="proj-grid">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="proj-card ds-glass ds-glass--interactive"
                >
                  <div className="proj-card__top">
                    <span className="proj-card__icon">
                      <span
                        className="iconify"
                        data-icon={item.icon}
                        data-inline="false"
                      />
                    </span>
                    <span className="ds-chip ds-chip--accent">{item.tag}</span>
                  </div>
                  <h3 className="proj-card__title">{item.title}</h3>
                  <p className="proj-card__body">{item.body}</p>
                  <ul className="proj-card__stack">
                    {item.stack.map((tech) => (
                      <li key={tech} className="ds-chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Personal projects ---------- */}
        {projectcards.list.length > 0 ? (
          <section className="projects-section">
            <div className="ds-container">
              <h2 className="projects-subhead">
                Personal projects
                <span className="projects-subhead__note">
                  Side builds &amp; experiments
                </span>
              </h2>

              <div className="proj-grid">
                {projectcards.list.map((proj) => (
                  <article
                    key={proj.title}
                    className="proj-card proj-card--personal ds-glass ds-glass--interactive"
                  >
                    <div className="proj-card__media">
                      <img
                        src={require(`../../assets/projects/${proj.img_path}`)}
                        alt={proj.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="proj-card__content">
                      <h3 className="proj-card__title">{proj.title}</h3>
                      <p className="proj-card__body">{proj.description}</p>

                      <ul className="proj-card__stack">
                        {proj.tags.map((tag) => (
                          <li
                            key={tag.lang}
                            className="ds-chip"
                            style={{
                              borderColor: `${tag.color}66`,
                              color: "#D7DCE6",
                            }}
                          >
                            {tag.lang}
                          </li>
                        ))}
                      </ul>

                      {proj.link || proj.code ? (
                        <div className="proj-card__links">
                          {proj.link ? (
                            <a
                              className="ds-btn ds-btn--ghost"
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live demo
                            </a>
                          ) : null}
                          {proj.code ? (
                            <a
                              className="ds-btn ds-btn--ghost"
                              href={proj.code}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Source
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="projects-cta">
          <div className="ds-container">
            <div className="projects-cta__inner ds-glass">
              <div>
                <h2 className="projects-cta__title">More on GitHub</h2>
                <p className="projects-cta__body">
                  Repositories, experiments and open-source contributions.
                </p>
              </div>
              <a
                className="ds-btn ds-btn--primary"
                href="https://github.com/Jatin-kaushik"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
