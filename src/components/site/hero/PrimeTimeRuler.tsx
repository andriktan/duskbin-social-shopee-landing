import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// The evening in Malaysia time, 18:00 to 02:00, with the real current MYT time marked.
const START = 18;
const SPAN = 8;
const PRIME_FROM = 20;
const PRIME_TO = 24;

function mytNow() {
  const d = new Date();
  const minutes = (d.getUTCHours() * 60 + d.getUTCMinutes() + 8 * 60) % (24 * 60);
  return { h: Math.floor(minutes / 60), m: minutes % 60 };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function PrimeTimeRuler({ className }: { className?: string }) {
  const [now, setNow] = useState<{ h: number; m: number } | null>(null);

  useEffect(() => {
    setNow(mytNow());
    const t = window.setInterval(() => setNow(mytNow()), 20_000);
    return () => window.clearInterval(t);
  }, []);

  const hours = Array.from({ length: SPAN + 1 }, (_, i) => (START + i) % 24);
  const pos = now ? (((now.h + now.m / 60 - START + 24) % 24) / SPAN) : -1;
  const inRange = pos >= 0 && pos <= 1;
  const prime = now ? now.h >= PRIME_FROM && now.h < PRIME_TO : false;
  const primeLeft = ((PRIME_FROM - START) / SPAN) * 100;
  const primeWidth = ((PRIME_TO - PRIME_FROM) / SPAN) * 100;

  return (
    <div className={cn("select-none", className)} aria-hidden="true">
      <div className="relative h-11">
        <div
          className="absolute top-[18px] h-[7px] rounded-full opacity-80 dusk-line"
          style={{ left: `${primeLeft}%`, width: `${primeWidth}%` }}
        />
        <span className="label absolute top-0 text-[0.6rem] text-gold" style={{ left: `${primeLeft}%` }}>
          Prime time
        </span>
        <div className="absolute inset-x-0 top-[21px] h-px bg-white/20" />
        {Array.from({ length: SPAN * 4 + 1 }, (_, i) => (
          <span
            key={i}
            className={cn("absolute top-[16px] w-px bg-white/30", i % 4 === 0 ? "h-[12px] bg-white/55" : "h-[6px] translate-y-[3px]")}
            style={{ left: `${(i / (SPAN * 4)) * 100}%` }}
          />
        ))}
        {hours.map((h, i) => (
          <span
            key={i}
            className="readout absolute top-[30px] -translate-x-1/2 text-[0.62rem] text-dim"
            style={{ left: `${(i / SPAN) * 100}%` }}
          >
            {pad(h)}
          </span>
        ))}
        {now && inRange && (
          <span className="absolute top-[6px] flex -translate-x-1/2 flex-col items-center" style={{ left: `${pos * 100}%` }}>
            <span className="h-[26px] w-[2px] bg-ember shadow-[0_0_10px_2px_rgba(255,107,44,0.6)]" />
          </span>
        )}
      </div>
      <p className="readout mt-1 text-center text-[0.68rem] tracking-[0.12em] text-haze">
        {now ? (
          <>
            MYT {pad(now.h)}:{pad(now.m)}
            <span className={cn("ml-2", prime ? "text-ember" : "text-dim")}>
              {prime ? "· PRIME TIME NOW" : inRange ? (now.h >= START ? "· WARM-UP" : "· LATE SHIFT") : now.h < 6 ? "· AFTER HOURS" : "· DAYTIME"}
            </span>
          </>
        ) : (
          "MYT"
        )}
      </p>
    </div>
  );
}
