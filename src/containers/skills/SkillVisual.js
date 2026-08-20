import React from "react";
import "./SkillVisual.css";

/**
 * Abstract visual for a skills section.
 *
 * Replaces the stock cartoon illustrations with a constellation built from the
 * section's own technology marks: nodes on a ring, wired to a central hub,
 * with a packet travelling each spoke. Everything is derived from the data
 * already in portfolio.js, so a section gains a matching visual for free.
 */

const RADIUS = 34; // % of the box, from centre to a ring node

function nodePosition(index, count) {
  // Start at the top and distribute evenly clockwise.
  const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
}

export default function SkillVisual({ skill }) {
  const logos = (skill.softwareSkills || []).slice(0, 6);
  const count = logos.length || 1;

  return (
    <div className="skv" aria-hidden="true">
      <div className="skv__glow" />

      {/* Spokes drawn behind the nodes. */}
      <svg
        className="skv__wires"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="skv-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E8BFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {logos.map((logo, i) => {
          const p = nodePosition(i, count);
          const d = `M50 50 L${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
          return (
            <g key={logo.skillName}>
              <path d={d} className="skv__wire" stroke="url(#skv-grad)" />
              <circle r="0.9" className="skv__packet">
                <animateMotion
                  dur={`${2.1 + i * 0.24}s`}
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            </g>
          );
        })}

        <circle cx="50" cy="50" r="30" className="skv__ring" />
      </svg>

      {/* Central hub. */}
      <div className="skv__hub">
        <span className="skv__hub-pulse" />
        <span className="skv__hub-core" />
      </div>

      {/* Technology marks. */}
      {logos.map((logo, i) => {
        const p = nodePosition(i, count);
        return (
          <span
            key={logo.skillName}
            className="skv__node"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${i * 0.45}s`,
            }}
            title={logo.skillName}
          >
            <span
              className="iconify"
              data-icon={logo.fontAwesomeClassname}
              style={logo.style}
              data-inline="false"
            />
          </span>
        );
      })}
    </div>
  );
}
