import { memo } from "react";

// Kuala Lumpur at dusk: KL Tower, the Petronas Twin Towers and Merdeka 118 among generic blocks.
const W = 1600;
const G = 260;

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Box = { x: number; y: number; w: number; h: number };

function buildBlocks(): { blocks: Box[]; windows: Box[] } {
  const r = rng(20090);
  const blocks: Box[] = [];
  const windows: Box[] = [];
  let x = -10;
  while (x < W) {
    const w = 28 + Math.floor(r() * 64);
    const nearLandmark = (x > 500 && x < 620) || (x > 1040 && x < 1200) || (x > 1490 && x < 1590);
    const h = (nearLandmark ? 30 : 46) + Math.floor(r() * (nearLandmark ? 60 : 118));
    blocks.push({ x, y: G - h, w, h });
    const cols = Math.max(1, Math.floor((w - 8) / 9));
    const rows = Math.max(1, Math.floor((h - 10) / 12));
    for (let c = 0; c < cols; c++) {
      for (let k = 0; k < rows; k++) {
        if (r() < 0.07) windows.push({ x: x + 5 + c * 9, y: G - h + 8 + k * 12, w: 3, h: 4 });
      }
    }
    x += w - 2 + Math.floor(r() * 6);
  }
  return { blocks, windows };
}

const { blocks, windows } = buildBlocks();

function Tower({ c }: { c: number }) {
  return (
    <>
      <rect x={c - 20} y={110} width={40} height={G - 110} />
      <rect x={c - 16} y={88} width={32} height={24} />
      <rect x={c - 12} y={72} width={24} height={18} />
      <rect x={c - 8} y={60} width={16} height={14} />
      <rect x={c - 5} y={52} width={10} height={10} />
      <rect x={c - 1.5} y={8} width={3} height={46} />
    </>
  );
}

function Landmarks() {
  return (
    <>
      {/* KL Tower */}
      <rect x={556} y={92} width={8} height={G - 92} />
      <rect x={537} y={80} width={46} height={18} rx={9} />
      <rect x={545} y={70} width={30} height={11} rx={4} />
      <rect x={559} y={20} width={2} height={52} />
      {/* Petronas Twin Towers and skybridge */}
      <Tower c={1080} />
      <Tower c={1156} />
      <rect x={1098} y={156} width={40} height={5} />
      {/* Merdeka 118 */}
      <polygon points="1498,260 1503,200 1511,140 1519,92 1530,50 1536,42 1544,42 1550,50 1561,92 1569,140 1577,200 1582,260" />
      <rect x={1538.5} y={0} width={3} height={44} />
    </>
  );
}

function City() {
  return (
    <>
      {blocks.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} />
      ))}
      <Landmarks />
    </>
  );
}

export const Skyline = memo(function Skyline({ className }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${W} ${G}`} preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <g fill="#ff6b2c" opacity="0.45" transform="translate(0,-1.5)">
        <City />
      </g>
      <g fill="#08080f">
        <City />
      </g>
      <g fill="#ffc15e" opacity="0.38">
        {windows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width={w.w} height={w.h} />
        ))}
      </g>
    </svg>
  );
});
