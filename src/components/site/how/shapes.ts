// Geometry for the "one shape, five moves" sequence. Every stage is N points in a -1..1 box,
// so any stage can morph into any other by moving point i to point i.

export type Pt = [number, number];
export const N = 180;

export function resampleClosed(poly: Pt[], n = N): Pt[] {
  const pts = [...poly, poly[0]];
  const seg: number[] = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
    seg.push(d);
    total += d;
  }
  const out: Pt[] = [];
  const step = total / n;
  let si = 0;
  let acc = 0;
  for (let k = 0; k < n; k++) {
    const target = k * step;
    while (si < seg.length - 1 && acc + seg[si] < target) {
      acc += seg[si];
      si++;
    }
    const t = seg[si] === 0 ? 0 : (target - acc) / seg[si];
    const a = pts[si];
    const b = pts[si + 1];
    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
  }
  return out;
}

export function roundRect(x: number, y: number, w: number, h: number, r: number, segs = 8): Pt[] {
  const out: Pt[] = [];
  const corner = (cx: number, cy: number, a0: number) => {
    for (let i = 0; i <= segs; i++) {
      const a = a0 + (i / segs) * (Math.PI / 2);
      out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
  };
  // clockwise from the top-left corner (screen coordinates: y grows downwards)
  corner(x + r, y + r, Math.PI);
  corner(x + w - r, y + r, -Math.PI / 2);
  corner(x + w - r, y + h - r, 0);
  corner(x + r, y + h - r, Math.PI / 2);
  return out;
}

const bottle: Pt[] = [
  [-0.2, -0.95], [0.2, -0.95], [0.2, -0.74], [0.11, -0.74], [0.11, -0.62], [0.44, -0.5], [0.58, -0.28],
  [0.58, 0.66], [0.46, 0.88], [-0.46, 0.88], [-0.58, 0.66], [-0.58, -0.28], [-0.44, -0.5], [-0.11, -0.62],
  [-0.11, -0.74], [-0.2, -0.74],
];

function bars(): Pt[] {
  const base = 0.86;
  const w = 0.24;
  const gap = 0.08;
  const heights = [0.42, 0.62, 0.88, 1.2, 1.64];
  const x0 = -(heights.length * w + (heights.length - 1) * gap) / 2;
  const pts: Pt[] = [];
  heights.forEach((h, i) => {
    const x = x0 + i * (w + gap);
    pts.push([x, base], [x, base - h], [x + w, base - h], [x + w, base]);
  });
  return pts;
}

function disc(n = N): Pt[] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const pts: Pt[] = [];
  for (let i = 0; i < n; i++) {
    const r = 0.92 * Math.sqrt((i + 0.5) / n);
    const a = i * golden;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  // order around the circle so the morph from an outline does not tangle,
  // starting near the top-left like the outlines do
  pts.sort((p, q) => Math.atan2(p[1], p[0]) - Math.atan2(q[1], q[0]));
  const start = -1.78;
  let best = 0;
  pts.forEach((p, i) => {
    if (Math.abs(Math.atan2(p[1], p[0]) - start) < Math.abs(Math.atan2(pts[best][1], pts[best][0]) - start)) best = i;
  });
  return [...pts.slice(best), ...pts.slice(0, best)];
}

function startAtTop(pts: Pt[]): Pt[] {
  let best = 0;
  pts.forEach((p, i) => {
    const b = pts[best];
    if (p[1] < b[1] - 1e-6 || (Math.abs(p[1] - b[1]) < 1e-6 && p[0] < b[0])) best = i;
  });
  return [...pts.slice(best), ...pts.slice(0, best)];
}

export type StageShape = { pts: Pt[]; dots: number };

export const SHAPES: StageShape[] = [
  { pts: startAtTop(resampleClosed(bottle)), dots: 0 },
  { pts: startAtTop(resampleClosed(roundRect(-0.7, -0.86, 1.4, 1.72, 0.1))), dots: 0 },
  { pts: disc(), dots: 1 },
  { pts: startAtTop(resampleClosed(roundRect(-0.46, -0.96, 0.92, 1.92, 0.15))), dots: 0 },
  { pts: startAtTop(resampleClosed(bars())), dots: 0 },
];
