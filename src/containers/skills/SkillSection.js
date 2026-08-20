import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import SkillVisual from "./SkillVisual";
import { useReveal } from "../../hooks/useReveal";

function SkillBlock({ skill, theme }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`skills-main-div ds-glass ds-reveal ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="skills-image-div">
        <SkillVisual skill={skill} />
      </div>

      <div className="skills-text-div">
        <h3 className="skills-heading">{skill.title}</h3>
        <SoftwareSkill logos={skill.softwareSkills} />
        <div>
          {skill.skills.map((sentence) => (
            <p className="skills-text" key={sentence}>
              {sentence.replace(/^⚡\s*/, "")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillSection(props) {
  return (
    <div>
      {skills.data.map((skill) => (
        <SkillBlock key={skill.title} skill={skill} theme={props.theme} />
      ))}
    </div>
  );
}
