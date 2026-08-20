import React from "react";
import "./ArchitectureVisual.css";

/**
 * Hero visual: an animated request-flow diagram.
 *
 * Replaces the stock illustration with something that actually describes the
 * work -- a request entering through the gateway, fanning out across the
 * service and messaging tiers, and landing in storage and inference.
 *
 * Motion is pure SVG/CSS (animateMotion + keyframes), so there is no runtime
 * cost beyond compositing and it degrades to a static diagram when the user
 * prefers reduced motion.
 */

const NODES = [
  { id: "client", label: "Client", sub: "millions/day", x: 24, y: 18, w: 132 },
  {
    id: "gateway",
    label: "API Gateway",
    sub: "NGINX · JWT",
    x: 168,
    y: 18,
    w: 148,
  },
  {
    id: "fastapi",
    label: "FastAPI",
    sub: "async workers",
    x: 24,
    y: 122,
    w: 132,
    accent: true,
  },
  {
    id: "kafka",
    label: "Kafka · NATS",
    sub: "10K events/s",
    x: 168,
    y: 122,
    w: 148,
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    sub: "sub-100ms",
    x: 24,
    y: 226,
    w: 132,
  },
  {
    id: "bedrock",
    label: "AWS Bedrock",
    sub: "RAG · LLM",
    x: 168,
    y: 226,
    w: 148,
    accent: true,
  },
];

// Connection paths, drawn between node edges.
const PATHS = [
  { id: "p1", d: "M156 44 H168", dur: "1.6s", delay: "0s" },
  { id: "p2", d: "M242 70 V122", dur: "1.9s", delay: "0.35s" },
  { id: "p3", d: "M90 70 V122", dur: "1.7s", delay: "0.6s" },
  { id: "p4", d: "M156 148 H168", dur: "1.5s", delay: "0.9s" },
  { id: "p5", d: "M90 174 V226", dur: "1.8s", delay: "1.15s" },
  { id: "p6", d: "M242 174 V226", dur: "2.0s", delay: "1.4s" },
];

export default function ArchitectureVisual() {
  return (
    <div className="arch ds-glass">
      <div className="arch__bar">
        <span className="arch__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="arch__file">request-flow.yaml</span>
        <span className="arch__live">
          <span className="ds-dot" />
          live
        </span>
      </div>

      <svg
        className="arch__svg"
        viewBox="0 0 340 280"
        role="img"
        aria-label="Request flow: client through API gateway to FastAPI services, Kafka and NATS messaging, PostgreSQL storage and AWS Bedrock inference"
      >
        <defs>
          <linearGradient id="arch-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E8BFF" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <filter id="arch-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {PATHS.map((p) => (
          <g key={p.id}>
            <path
              d={p.d}
              className="arch__wire"
              stroke="url(#arch-line)"
              fill="none"
            />
            <circle r="2.9" className="arch__packet" filter="url(#arch-glow)">
              <animateMotion
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
                path={p.d}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>
          </g>
        ))}

        {/* Nodes */}
        {NODES.map((n) => (
          <g key={n.id} className={`arch__node ${n.accent ? "is-accent" : ""}`}>
            <rect x={n.x} y={n.y} width={n.w} height={52} rx="11" />
            <text x={n.x + 14} y={n.y + 22} className="arch__label">
              {n.label}
            </text>
            <text x={n.x + 14} y={n.y + 38} className="arch__sub">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>

      <div className="arch__stats">
        <div className="arch__stat">
          <span className="arch__stat-value">99.9%</span>
          <span className="arch__stat-label">uptime</span>
        </div>
        <div className="arch__stat">
          <span className="arch__stat-value">&lt;100ms</span>
          <span className="arch__stat-label">p99 latency</span>
        </div>
        <div className="arch__stat">
          <span className="arch__stat-value">10K/s</span>
          <span className="arch__stat-label">throughput</span>
        </div>
      </div>
    </div>
  );
}
