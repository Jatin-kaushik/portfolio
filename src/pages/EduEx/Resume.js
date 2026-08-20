import React from "react";
import Resumecontent from "./ResumeContent";
import { resumeleft, resumeright } from "../../portfolio";
import "./EducationComponent.css";
import { useReveal } from "../../hooks/useReveal";

function Group({ title, items }) {
  const [ref, visible] = useReveal({ threshold: 0.06 });

  return (
    <div
      ref={ref}
      className={`resume-group ds-reveal ${visible ? "is-visible" : ""}`}
    >
      <h3 className="resume-title">{title}</h3>
      {items.map((item, i) => (
        <Resumecontent
          key={`${item.title}-${i}`}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="ds-container">
        <div className="resume-grid">
          <div className="resume-col">
            {resumeleft.left.title.map((head) => (
              <Group key={head} title={head} items={resumeleft.left.data} />
            ))}
          </div>

          <div className="resume-col">
            {resumeright.right.map((section) => (
              <Group
                key={section.title}
                title={section.title}
                items={section.data}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
