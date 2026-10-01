import { useSeenOnce, usePrefersReducedMotion } from "@/hooks/use-motion";

/** One dot per creator. The first `from` dots are where we started. */
export function DotMatrix({ from, to, cols = 31 }: { from: number; to: number; cols?: number }) {
  const [ref, seen] = useSeenOnce<HTMLDivElement>(0.35);
  const reduced = usePrefersReducedMotion();
  const lit = seen || reduced;
  const rows = Math.ceil(to / cols);
  const gap = 12;
  const r = 3.6;
  const w = (cols - 1) * gap + r * 2;
  const h = (rows - 1) * gap + r * 2;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label={`${to} dots, one per creator; the first ${from} are highlighted`}>
        {Array.from({ length: to }, (_, i) => {
          const x = r + (i % cols) * gap;
          const y = r + Math.floor(i / cols) * gap;
          const base = i < from;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill={base ? "#ff6b2c" : "#9d8cff"}
              style={{
                opacity: base || lit ? 1 : 0.14,
                transition: reduced ? undefined : `opacity 420ms ease-out ${base ? 0 : 200 + i * 6}ms`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
