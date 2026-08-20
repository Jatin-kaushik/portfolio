import React from "react";

/**
 * Fixed decorative background: three drifting colour blooms plus a fine grid.
 * Purely presentational and non-interactive, so it is hidden from AT.
 */
export default function Aurora() {
  return (
    <div className="ds-aurora" aria-hidden="true">
      <div className="ds-aurora__blob ds-aurora__blob--1" />
      <div className="ds-aurora__blob ds-aurora__blob--2" />
      <div className="ds-aurora__blob ds-aurora__blob--3" />
      <div className="ds-aurora__grid" />
    </div>
  );
}
