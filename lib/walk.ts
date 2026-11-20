// Seeded geometric random walk, used for the hero chart.
// Same seed, same path: the server render and the first client render match.

export const STEPS = 252; // one trading year of daily steps
export const DEFAULT_SEED = 2099; // dips about 22%, then recovers to +15%

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Walk = {
  d: string; // SVG path data
  start: { x: number; y: number };
  end: { x: number; y: number };
  baselineY: number;
  changePct: number;
};

export function buildWalk(
  seed: number,
  width = 1000,
  height = 220,
  pad = 12,
  sigma = 0.013,
): Walk {
  const rand = mulberry32(seed);
  const prices = [100];
  for (let i = 0; i < STEPS; i++) {
    // Box–Muller for a standard normal draw
    const u = Math.max(rand(), 1e-12);
    const v = rand();
    const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    prices.push(prices[i] * Math.exp(sigma * z - 0.5 * sigma * sigma));
  }
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  const x = (i: number) => (i / STEPS) * (width - 2 * pad) + pad;
  const y = (p: number) => pad + (1 - (p - lo) / (hi - lo || 1)) * (height - 2 * pad);
  const d = prices
    .map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(p).toFixed(1)}`)
    .join("");
  const last = prices[prices.length - 1];
  return {
    d,
    start: { x: x(0), y: y(100) },
    end: { x: x(STEPS), y: y(last) },
    baselineY: y(100),
    changePct: (last / 100 - 1) * 100,
  };
}
