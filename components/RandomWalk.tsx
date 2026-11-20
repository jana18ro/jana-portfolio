"use client";

import { useState } from "react";
import { buildWalk, DEFAULT_SEED, STEPS } from "@/lib/walk";

const W = 1000;
const H = 220;

export default function RandomWalk() {
  const [seed, setSeed] = useState(DEFAULT_SEED);
  const walk = buildWalk(seed, W, H);
  const change = `${walk.changePct >= 0 ? "+" : "−"}${Math.abs(walk.changePct).toFixed(1)}%`;

  return (
    <figure className="walk">
      {/* key re-mounts the plot so the reveal plays again for each new path */}
      <div className="walk-plot" key={seed}>
        <svg
          className="walk-chart"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={`Random walk, seed ${seed}, ending ${change} from its start`}
        >
          <line
            className="walk-base"
            x1="0"
            x2={W}
            y1={walk.baselineY}
            y2={walk.baselineY}
            vectorEffect="non-scaling-stroke"
          />
          <path className="walk-line" d={walk.d} vectorEffect="non-scaling-stroke" />
        </svg>
        <span
          className="walk-dot"
          aria-hidden="true"
          style={{ left: `${(walk.end.x / W) * 100}%`, top: `${(walk.end.y / H) * 100}%` }}
        />
      </div>
      <figcaption className="walk-caption">
        <span>
          Geometric random walk, {STEPS} daily steps (one trading year), seed{" "}
          <span className="num">{seed}</span>. It ends <span className="num">{change}</span>{" "}
          from where it started.
        </span>
        <button
          type="button"
          className="walk-button"
          onClick={() => setSeed(Math.floor(Math.random() * 1_000_000))}
        >
          Draw a new path
        </button>
      </figcaption>
    </figure>
  );
}
