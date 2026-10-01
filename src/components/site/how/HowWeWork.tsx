import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion } from "@/hooks/use-motion";
import { cn } from "@/lib/utils";
import { MorphCanvas } from "./MorphCanvas";

const HOLD_MS = 3800;

const STAGES = [
  {
    key: "Brand",
    title: "Learn the product",
    body: "Margin, price, who buys it and why. We start there, before a single listing changes.",
  },
  {
    key: "Store",
    title: "Fix the listings",
    body: "Titles inside Shopee's 120-character limit, built on the words shoppers actually type. For Legendary®, “parfum” beat “perfume”.",
  },
  {
    key: "Creators",
    title: "Recruit the creators",
    body: "Samples, a clear brief and commission worth their time. BluePansy.id went from 6 to 244 creators who sell.",
  },
  {
    key: "Live",
    title: "Go live at prime time",
    body: "Hosts in Bahasa Malaysia, English and 中文, on an evening schedule built around your buyers.",
  },
  {
    key: "Orders",
    title: "Scale what pays",
    body: "Every session is reconciled against orders and billing. Budget grows only when GMV per hour clears the bar.",
  },
];

export function HowWeWork() {
  const reduced = usePrefersReducedMotion();
  const [ref, active] = useActiveInView<HTMLElement>("-10% 0px");
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [cycle, setCycle] = useState(0);
  const autoplay = playing && active && !reduced;

  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => {
      setStage((s) => (s + 1) % STAGES.length);
      setCycle((c) => c + 1);
    }, HOLD_MS);
    return () => window.clearTimeout(t);
  }, [autoplay, stage, cycle]);

  const pick = (i: number) => {
    setStage(i);
    setCycle((c) => c + 1);
    setPlaying(false);
  };

  return (
    <section id="how" ref={ref} className="relative border-t border-line bg-ink py-24 md:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-xl border border-line bg-night grid-faint">
          <div className="absolute inset-[6%]">
            <MorphCanvas stage={stage} instant={reduced} active={active} />
          </div>
          <div className="label absolute left-4 top-4 text-dim">
            Stage <span className="readout text-paper">{String(stage + 1).padStart(2, "0")}</span>/05
          </div>
          <div className="label absolute right-4 top-4 text-gold">{STAGES[stage].key}</div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="label text-dim">One shape, five moves</span>
            {!reduced && (
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex h-8 items-center gap-1.5 rounded border border-line px-2.5 text-[0.78rem] text-haze transition-colors hover:border-white/40 hover:text-paper"
                aria-label={playing ? "Pause the sequence" : "Play the sequence"}
              >
                {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {playing ? "Pause" : "Play"}
              </button>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <p className="label text-gold">How we work</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] text-paper">
            One brand.
            <br />
            Five moves.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed text-haze">
            Every account we run follows the same loop. Here it is as one shape, from the product on day one to the orders it earns.
          </p>

          <ol className="mt-10 border-t border-line">
            {STAGES.map((s, i) => {
              const on = i === stage;
              return (
                <li key={s.key} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    aria-current={on ? "step" : undefined}
                    className="group grid w-full grid-cols-[3rem_minmax(0,1fr)] gap-x-4 py-5 text-left"
                  >
                    <span className={cn("readout pt-1 text-[0.85rem]", on ? "text-ember" : "text-dim")}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0">
                      <span className={cn("block text-[1.15rem] font-semibold transition-colors", on ? "text-paper" : "text-haze group-hover:text-paper")}>
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-500",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-2 leading-relaxed text-haze">{s.body}</span>
                        </span>
                      </span>
                      <span className="relative mt-4 block h-px overflow-hidden bg-line">
                        {on && (
                          <span
                            key={cycle}
                            className="absolute inset-0 origin-left bg-ember"
                            style={
                              autoplay
                                ? { animation: `stage-fill ${HOLD_MS}ms linear forwards` }
                                : { transform: "scaleX(1)" }
                            }
                          />
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
