import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { useReveal } from "../../hooks/useReveal";

export default function Skills(props) {
  const [ref, visible] = useReveal();

  return (
    <section className="skills-root ds-section" id="skills">
      <div className="ds-container">
        <header
          ref={ref}
          className={`skills-header-div ds-reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <p className="ds-eyebrow">Capabilities</p>
          <h2 className="skills-header ds-h2">
            What I <span className="ds-gradient-text">do</span>
          </h2>
          <p className="ds-lead">
            Six areas of depth, from the Python services that carry production
            traffic to the Generative AI systems layered on top of them.
          </p>
        </header>

        <SkillSection theme={props.theme} />
      </div>
    </section>
  );
}
