import { useEffect, useRef, useState } from "react";

/**
 * Adds `is-visible` to an element the first time it scrolls into view.
 * Pair with the `.ds-reveal` class from design-system.css.
 *
 * Falls back to "always visible" where IntersectionObserver is unavailable,
 * so content is never hidden by a missing API.
 */
export function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    // intersectionRatio is measured against the element's own height, so an
    // element taller than the viewport can never reach a high ratio: a 5,000px
    // timeline in an 800px window peaks at ~0.16, and anything above that would
    // keep it stuck at opacity 0 forever. Fall back to "any part visible".
    const tall = node.getBoundingClientRect().height > window.innerHeight * 0.7;
    const effectiveThreshold = tall ? 0 : threshold;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: effectiveThreshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, visible];
}

/**
 * Counts from 0 to `end` once the element enters the viewport.
 * Uses requestAnimationFrame with an ease-out curve so the number
 * decelerates as it lands, rather than ticking linearly.
 */
export function useCountUp(end, { duration = 1900, decimals = 0 } = {}) {
  const [ref, visible] = useReveal({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!visible) return undefined;

    const target = Number(end) || 0;

    // Respect a user's reduced-motion preference: land on the value at once.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(target);
      return undefined;
    }

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [visible, end, duration, decimals]);

  return [ref, value];
}
