import React from "react";

export default function ResumeContent(props) {
  return (
    <div className="resume-item">
      <div className="resume-item-head">
        {props.title ? <h4 className="resume-role">{props.title}</h4> : null}
        {props.subtitle ? (
          <p className="resume-subtitle">{props.subtitle}</p>
        ) : null}
        {props.date ? <span className="date">{props.date}</span> : null}
      </div>

      <ul>
        {props.content.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
