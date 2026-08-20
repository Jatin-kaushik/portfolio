import React from "react";
import "./Metrics.css";
import { metrics } from "../../portfolio";
import { useCountUp, useReveal } from "../../hooks/useReveal";

function MetricCard({ metric, index }) {
  const [ref, value] = useCountUp(metric.value, {
    duration: 1900,
    decimals: metric.decimals || 0,
  });

  const shown = metric.decimals
    ? value.toFixed(metric.decimals)
    : Math.round(value).toLocaleString();

  return (
    <div
      ref={ref}
      className="metric ds-glass ds-glass--interactive"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="metric__value">
        {metric.prefix}
        <span className="metric__number">{shown}</span>
        <span className="metric__suffix">{metric.suffix}</span>
      </div>
      <div className="metric__label">{metric.label}</div>
      <div className="metric__caption">{metric.caption}</div>
    </div>
  );
}

export default function Metrics() {
  const [ref, visible] = useReveal();

  return (
    <section className="metrics-section" aria-label="Impact by the numbers">
      <div className="ds-container">
        <div
          ref={ref}
          className={`metrics-grid ds-reveal ${visible ? "is-visible" : ""}`}
        >
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
