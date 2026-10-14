import { useEffect, useRef } from "react";

/**
 * Flowing line-wave background for the hero: many thin lines that ripple like
 * a slow silk ribbon. Lines are dense and bright at the bottom and fade out
 * towards the top so the headline stays readable.
 *
 * Tweak the look here:
 *   LINES   - how many lines
 *   SPEED   - animation speed (1 = default, lower = slower)
 *   AMPLITUDE - how tall the waves are
 */
const LINES = 56;
const SAMPLES = 90;
const SPEED = 1;
const AMPLITUDE = 1.6;

const W = 1600;
const H = 600;
const TAU = Math.PI * 2;

function linePath(v: number, t: number): string {
  const amp = H * (0.08 + 0.2 * v) * AMPLITUDE;
  const base = H * (0.3 + 0.7 * v);
  let d = "";
  for (let i = 0; i <= SAMPLES; i++) {
    const u = i / SAMPLES;
    const wave =
      Math.sin(TAU * 0.55 * u + t * 0.3 + v * 3.4) * 0.55 +
      Math.sin(TAU * 1.05 * u - t * 0.21 + v * 1.9) * 0.3 +
      Math.sin(TAU * 1.8 * u + t * 0.4 - v * 0.8) * 0.1;
    const x = (u * W).toFixed(1);
    const y = (base + amp * wave).toFixed(1);
    d += `${i === 0 ? "M" : "L"}${x} ${y}`;
  }
  return d;
}

export function HeroLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll("path"));

    const draw = (t: number) => {
      paths.forEach((p, i) => p.setAttribute("d", linePath(i / (LINES - 1), t)));
    };

    draw(0);

    // Reduced motion: keep one still frame, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = true;
    const start = performance.now();

    const tick = (now: number) => {
      if (visible) draw(((now - start) / 1000) * SPEED);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Don't burn battery when the hero is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    io.observe(svg);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div className="hero-lines" aria-hidden="true">
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        {Array.from({ length: LINES }, (_, i) => {
          const v = i / (LINES - 1);
          return (
            <path
              key={i}
              strokeOpacity={(0.06 + 0.5 * Math.pow(v, 1.5)).toFixed(3)}
            />
          );
        })}
      </svg>
    </div>
  );
}
