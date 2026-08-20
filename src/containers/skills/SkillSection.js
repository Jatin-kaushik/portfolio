import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { useReveal } from "../../hooks/useReveal";

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`skill-card ds-glass ds-glass--interactive ds-reveal ${
        visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
    >
      <header className="skill-card__head">
        <span className="skill-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="skill-card__title">{skill.title}</h3>
      </header>

      <SoftwareSkill logos={skill.softwareSkills} />

      <ul className="skill-card__list">
        {skill.skills.map((sentence) => (
          <li key={sentence}>{sentence.replace(/^⚡\s*/, "")}</li>
        ))}
      </ul>
    </article>
  );
}

export default function SkillSection() {
  return (
    <div className="skills-grid">
      {skills.data.map((skill, i) => (
        <SkillCard key={skill.title} skill={skill} index={i} />
      ))}
    </div>
  );
}
