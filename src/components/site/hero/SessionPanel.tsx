import type { LiveState } from "./useLiveSim";

const fmt = new Intl.NumberFormat("en-MY");

function Spark({ values }: { values: number[] }) {
  const w = 64;
  const h = 26;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(1, max - min);
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - 2 - ((v - min) / span) * (h - 6)}`).join(" ");
  const last = pts.split(" ").pop()?.split(",") ?? ["0", "0"];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[26px] w-[64px]" aria-hidden="true">
      <polyline points={pts} fill="none" stroke="#9d8cff" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="2.4" fill="#ffc15e" />
    </svg>
  );
}

export function SessionPanel({ sim }: { sim: LiveState }) {
  const rows = [
    { k: "Viewers", v: fmt.format(sim.viewers), spark: true },
    { k: "Orders", v: fmt.format(sim.orders) },
    { k: "GMV / hour", v: `RM ${fmt.format(sim.gmv)}` },
  ];
  return (
    <div className="w-full rounded-lg border border-line bg-night/70 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="label text-haze">Session panel</span>
        <span className="label rounded-sm border border-gold/50 px-1.5 py-0.5 text-[0.6rem] text-gold">Simulated</span>
      </div>
      <dl className="mt-3 divide-y divide-line">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between gap-3 py-2">
            <dt className="label text-[0.66rem] text-dim">{r.k}</dt>
            <dd className="flex items-center gap-3">
              {r.spark && <Spark values={sim.viewerTrail} />}
              <span className="readout text-[1.02rem] font-medium text-paper">{r.v}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="label mt-2 border-t border-line pt-3 text-[0.58rem] leading-relaxed text-dim">
        Simulated feed · Product: Legendary® Orchid, one of the brands we run
      </p>
    </div>
  );
}
