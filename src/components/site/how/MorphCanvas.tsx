import { useEffect, useRef } from "react";
import { N, SHAPES, type Pt } from "./shapes";

const TRANSITION_MS = 1100;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

type Sim = {
  from: Pt[];
  fromDots: number;
  fromStage: number;
  to: number;
  t0: number;
  cur: Pt[];
  curDots: number;
};

type Tx = { X: (x: number) => number; Y: (y: number) => number; u: number; dpr: number };

function rr(ctx: CanvasRenderingContext2D, t: Tx, x: number, y: number, w: number, h: number, r: number) {
  const X = t.X(x);
  const Y = t.Y(y);
  const W = w * t.u;
  const H = h * t.u;
  const R = r * t.u;
  ctx.beginPath();
  ctx.moveTo(X + R, Y);
  ctx.arcTo(X + W, Y, X + W, Y + H, R);
  ctx.arcTo(X + W, Y + H, X, Y + H, R);
  ctx.arcTo(X, Y + H, X, Y, R);
  ctx.arcTo(X, Y, X + W, Y, R);
  ctx.closePath();
}

function decor(ctx: CanvasRenderingContext2D, stage: number, alpha: number, t: Tx, now: number, cur: Pt[]) {
  if (alpha <= 0.01) return;
  const { X, Y, u, dpr } = t;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.font = `500 ${11 * dpr}px "IBM Plex Mono", ui-monospace, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (stage === 0) {
    // label on the bottle
    ctx.strokeStyle = "rgba(255,193,94,0.85)";
    ctx.lineWidth = 1.5 * dpr;
    rr(ctx, t, -0.36, 0.06, 0.72, 0.34, 0.04);
    ctx.stroke();
    ctx.fillStyle = "#ffc15e";
    ctx.fillText("YOUR PRODUCT", X(0), Y(0.23));
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath();
    ctx.moveTo(X(-0.4), Y(-0.2));
    ctx.lineTo(X(-0.4), Y(-0.02));
    ctx.stroke();
  }

  if (stage === 1) {
    // listing card: image, title, price, stars, add to cart
    const g = ctx.createLinearGradient(X(-0.58), Y(-0.74), X(0.58), Y(0.12));
    g.addColorStop(0, "rgba(157,140,255,0.28)");
    g.addColorStop(1, "rgba(255,107,44,0.2)");
    ctx.fillStyle = g;
    rr(ctx, t, -0.58, -0.74, 1.16, 0.84, 0.06);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.55)";
    ctx.lineWidth = 1.5 * dpr;
    rr(ctx, t, -0.1, -0.55, 0.2, 0.08, 0.02);
    ctx.stroke();
    rr(ctx, t, -0.17, -0.45, 0.34, 0.42, 0.06);
    ctx.stroke();
    ctx.fillStyle = "rgba(242,238,232,0.85)";
    rr(ctx, t, -0.58, 0.22, 0.98, 0.07, 0.03);
    ctx.fill();
    ctx.fillStyle = "rgba(242,238,232,0.45)";
    rr(ctx, t, -0.58, 0.35, 0.66, 0.07, 0.03);
    ctx.fill();
    ctx.fillStyle = "#ffc15e";
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(X(-0.54 + i * 0.1), Y(0.52), 0.028 * u, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#ff6b2c";
    rr(ctx, t, 0.08, 0.56, 0.5, 0.18, 0.05);
    ctx.fill();
    ctx.fillStyle = "#07080c";
    ctx.fillText("ADD TO CART", X(0.33), Y(0.65));
  }

  if (stage === 2) {
    // creators wired to the brand at the centre
    ctx.strokeStyle = "rgba(255,193,94,0.28)";
    ctx.lineWidth = 1 * dpr;
    ctx.beginPath();
    for (let i = 0; i < cur.length; i += 6) {
      ctx.moveTo(X(0), Y(0));
      ctx.lineTo(X(cur[i][0]), Y(cur[i][1]));
    }
    ctx.stroke();
    const glow = ctx.createRadialGradient(X(0), Y(0), 0, X(0), Y(0), 0.3 * u);
    glow.addColorStop(0, "rgba(255,107,44,0.9)");
    glow.addColorStop(1, "rgba(255,107,44,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(X(0), Y(0), 0.3 * u, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffc15e";
    ctx.beginPath();
    ctx.arc(X(0), Y(0), 0.07 * u, 0, Math.PI * 2);
    ctx.fill();
  }

  if (stage === 3) {
    // a phone going live
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    rr(ctx, t, -0.12, -0.9, 0.24, 0.05, 0.025);
    ctx.fill();
    ctx.fillStyle = "#ff3b5c";
    rr(ctx, t, -0.36, -0.78, 0.26, 0.11, 0.02);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillText("LIVE", X(-0.23), Y(-0.723));
    ctx.fillStyle = "rgba(242,238,232,0.55)";
    [0.28, 0.4, 0.52].forEach((y, i) => {
      rr(ctx, t, -0.34, y, [0.46, 0.38, 0.5][i], 0.06, 0.03);
      ctx.fill();
    });
    ctx.fillStyle = "#fff";
    rr(ctx, t, -0.36, 0.66, 0.72, 0.2, 0.04);
    ctx.fill();
    ctx.fillStyle = "#ff6b2c";
    rr(ctx, t, 0.12, 0.7, 0.2, 0.12, 0.03);
    ctx.fill();
    for (let i = 0; i < 3; i++) {
      const phase = ((now / 1400 + i / 3) % 1 + 1) % 1;
      ctx.globalAlpha = alpha * (1 - phase);
      ctx.fillStyle = ["#ff3b5c", "#ffc15e", "#9d8cff"][i];
      ctx.beginPath();
      ctx.arc(X(0.3 - 0.04 * i), Y(0.5 - phase * 0.7), 0.035 * u, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (stage === 4) {
    // orders stacking up
    ctx.strokeStyle = "rgba(242,238,232,0.4)";
    ctx.lineWidth = 1.5 * dpr;
    ctx.beginPath();
    ctx.moveTo(X(-0.9), Y(0.86));
    ctx.lineTo(X(0.9), Y(0.86));
    ctx.stroke();
    const tops = [0.44, 0.24, -0.02, -0.34, -0.78];
    ctx.fillStyle = "#ffc15e";
    tops.forEach((y, i) => {
      ctx.beginPath();
      ctx.arc(X(-0.64 + i * 0.32), Y(y), 0.03 * u, 0, Math.PI * 2);
      ctx.fill();
    });
    for (let i = 0; i < 2; i++) {
      const phase = ((now / 1800 + i / 2) % 1 + 1) % 1;
      ctx.globalAlpha = alpha * (1 - phase);
      ctx.fillStyle = "#7fe3b8";
      ctx.fillText("+1", X(0.64 - i * 0.32), Y(-0.9 + i * 0.44 - phase * 0.18));
    }
  }
  ctx.restore();
}

export function MorphCanvas({ stage, instant, active }: { stage: number; instant: boolean; active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim>({
    from: SHAPES[0].pts.map((p) => [p[0], p[1]] as Pt),
    fromDots: SHAPES[0].dots,
    fromStage: 0,
    to: 0,
    t0: 0,
    cur: SHAPES[0].pts.map((p) => [p[0], p[1]] as Pt),
    curDots: SHAPES[0].dots,
  });
  const instantRef = useRef(instant);
  instantRef.current = instant;

  useEffect(() => {
    const s = sim.current;
    if (s.to === stage) return;
    s.from = s.cur.map((p) => [p[0], p[1]] as Pt);
    s.fromDots = s.curDots;
    s.fromStage = s.to;
    s.to = stage;
    s.t0 = performance.now();
  }, [stage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    const frame = (now: number) => {
      const s = sim.current;
      const W = canvas.width;
      const H = canvas.height;
      const p = instantRef.current ? 1 : clamp01((now - s.t0) / TRANSITION_MS);
      const e = ease(p);
      const target = SHAPES[s.to];
      for (let i = 0; i < N; i++) {
        s.cur[i][0] = s.from[i][0] + (target.pts[i][0] - s.from[i][0]) * e;
        s.cur[i][1] = s.from[i][1] + (target.pts[i][1] - s.from[i][1]) * e;
      }
      s.curDots = s.fromDots + (target.dots - s.fromDots) * e;

      const u = Math.min(W, H) * 0.42;
      const tx: Tx = { X: (x) => W / 2 + x * u, Y: (y) => H / 2 + y * u, u, dpr };
      ctx.clearRect(0, 0, W, H);

      const lineAlpha = 1 - s.curDots;
      if (lineAlpha > 0.01) {
        const grad = ctx.createLinearGradient(W / 2 - u, H / 2 - u, W / 2 + u, H / 2 + u);
        grad.addColorStop(0, "#ffc15e");
        grad.addColorStop(0.5, "#ff6b2c");
        grad.addColorStop(1, "#9d8cff");
        ctx.save();
        ctx.globalAlpha = lineAlpha;
        ctx.beginPath();
        s.cur.forEach(([x, y], i) => (i ? ctx.lineTo(tx.X(x), tx.Y(y)) : ctx.moveTo(tx.X(x), tx.Y(y))));
        ctx.closePath();
        ctx.fillStyle = "rgba(157,140,255,0.07)";
        ctx.fill();
        ctx.lineWidth = 2.5 * dpr;
        ctx.lineJoin = "round";
        ctx.strokeStyle = grad;
        ctx.shadowColor = "rgba(255,107,44,0.45)";
        ctx.shadowBlur = 18 * dpr;
        ctx.stroke();
        ctx.restore();
      }

      const motion = Math.sin(Math.PI * p);
      const dotAlpha = Math.max(s.curDots, motion * 0.9);
      if (dotAlpha > 0.02) {
        ctx.save();
        for (let i = 0; i < N; i++) {
          const [x, y] = s.cur[i];
          ctx.globalAlpha = dotAlpha;
          ctx.fillStyle = i % 9 === 0 ? "#ff6b2c" : i % 5 === 0 ? "#ffc15e" : "#c9bfff";
          ctx.beginPath();
          ctx.arc(tx.X(x), tx.Y(y), (1.3 + 1.9 * s.curDots) * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      decor(ctx, s.fromStage, s.fromStage === s.to ? 0 : 1 - clamp01(p / 0.35), tx, now, s.cur);
      decor(ctx, s.to, clamp01((p - 0.6) / 0.4), tx, now, s.cur);

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active]);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />;
}
