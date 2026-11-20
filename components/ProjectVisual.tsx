// Small, deterministic charts drawn inside each project's frame.
// Pure SVG, rendered at build time, so they cost nothing to load.
import type { Visual } from "@/content/site";

const W = 320;
const H = 180;

function Forecast() {
  // The shape of the model's output: win / loss probabilities per match.
  // Placeholder values; replace with real forecasts from the model.
  const rows = [
    { label: "Match 1", p: [0.66, 0.34] },
    { label: "Match 2", p: [0.55, 0.45] },
    { label: "Match 3", p: [0.42, 0.58] },
    { label: "Match 4", p: [0.29, 0.71] },
  ];
  const x0 = 92;
  const bw = W - x0 - 14;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Illustration of win and loss probabilities for four matches">
      {rows.map((r, i) => {
        const y = 22 + i * 36;
        let acc = 0;
        return (
          <g key={r.label}>
            <text x={10} y={y + 13} className="v-label">
              {r.label}
            </text>
            {r.p.map((p, j) => {
              const x = x0 + acc * bw;
              acc += p;
              return (
                <rect
                  key={j}
                  x={x}
                  y={y}
                  width={p * bw - 2}
                  height={18}
                  className={["v-fill", "v-faint"][j]}
                />
              );
            })}
          </g>
        );
      })}
      <text x={x0} y={H - 6} className="v-label">
        win · loss (illustration)
      </text>
    </svg>
  );
}

function Benchmark() {
  // Page-stream segmentation: one long PDF of pages, split into separate records.
  // Each colour run is one document; ticks mark where the classifier starts a new one.
  const docs = [3, 5, 2, 4, 1, 3, 2];
  const pw = 13;
  const gap = 3;
  const total = docs.reduce((a, b) => a + b, 0);
  const x0 = (W - total * (pw + gap)) / 2;
  let i = 0;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A stream of PDF pages split into separate documents">
      <text x={x0} y={36} className="v-label">one PDF production, {total} pages</text>
      {docs.map((n, d) =>
        Array.from({ length: n }, (_, k) => {
          const x = x0 + i++ * (pw + gap);
          return (
            <g key={`${d}-${k}`}>
              <rect x={x} y={52} width={pw} height={18} className={d % 2 ? "v-faint" : "v-fill"} />
              {k === 0 && <line x1={x - 1.5} x2={x - 1.5} y1={44} y2={78} className="v-tick" />}
            </g>
          );
        }),
      )}
      {(() => {
        let acc = 0;
        return docs.map((n, d) => {
          const x = x0 + acc * (pw + gap);
          acc += n;
          return (
            <rect
              key={d}
              x={x + d * 6 - 18}
              y={112}
              width={n * (pw + gap) - gap}
              height={30}
              rx={2}
              className={d % 2 ? "v-faint" : "v-fill"}
            />
          );
        });
      })()}
      <text x={x0} y={H - 18} className="v-label">→ {docs.length} separate records</text>
    </svg>
  );
}

function Models() {
  // Two clusters of points and a linear decision boundary, the classic SVM picture.
  let s = 7;
  const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const pts = Array.from({ length: 46 }, (_, i) => {
    const cls = i % 2;
    const cx = cls ? 215 : 105;
    const cy = cls ? 62 : 118;
    return { x: cx + (rand() - 0.5) * 120, y: cy + (rand() - 0.5) * 80, cls };
  });
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two classes of points separated by a linear decision boundary">
      <line x1={60} y1={H - 4} x2={270} y2={4} className="v-boundary" />
      {pts.map((p, i) =>
        p.cls ? (
          <circle key={i} cx={p.x} cy={p.y} r={4} className="v-fill" />
        ) : (
          <circle key={i} cx={p.x} cy={p.y} r={3.5} className="v-ring" />
        ),
      )}
    </svg>
  );
}

function Signs() {
  // 36 signs, five levels: each level unlocks more of the grid.
  const levels = [5, 12, 20, 28, 36];
  const cols = 12;
  const cell = 22;
  const x0 = (W - cols * cell) / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="36 signs unlocked across five levels">
      {Array.from({ length: 36 }, (_, i) => {
        const level = levels.findIndex((n) => i < n);
        return (
          <rect
            key={i}
            x={x0 + (i % cols) * cell}
            y={34 + Math.floor(i / cols) * cell}
            width={cell - 4}
            height={cell - 4}
            rx={3}
            className="v-fill"
            style={{ opacity: 1 - level * 0.17 }}
          />
        );
      })}
      <text x={x0} y={H - 30} className="v-label">
        5 → 36 signs across 5 levels
      </text>
    </svg>
  );
}

export default function ProjectVisual({ kind }: { kind: Visual }) {
  switch (kind) {
    case "forecast":
      return <Forecast />;
    case "benchmark":
      return <Benchmark />;
    case "models":
      return <Models />;
    case "signs":
      return <Signs />;
  }
}
