import { Eye, ShoppingBag } from "lucide-react";
import { asset } from "@/content/site";
import { cn } from "@/lib/utils";
import type { LiveState } from "./useLiveSim";

const fmt = new Intl.NumberFormat("en-MY");

export function LivePhone({ sim, animate }: { sim: LiveState; animate: boolean }) {
  return (
    <figure className="relative">
      <div
        className="relative mx-auto aspect-[9/19] w-[min(72vw,286px)] rounded-[2.6rem] bg-[#0b0b10] p-[9px] shadow-[0_50px_140px_-40px_rgba(255,107,44,0.55)] ring-1 ring-white/10 lg:h-[clamp(520px,63svh,620px)] lg:w-auto"
        role="img"
        aria-label="Simulated live session: a host selling Legendary Orchid eau de parfum, with chat in Bahasa Malaysia, English and Chinese and orders coming in"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black" aria-hidden="true">
          <img
            src={asset("brands/legendary-orchid-life.webp")}
            alt=""
            width={900}
            height={900}
            {...{ fetchpriority: "high" }}
            decoding="async"
            className={cn("absolute inset-0 h-full w-full object-cover", animate && "motion-safe-only animate-slow-zoom")}
          />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

          {/* Host bar */}
          <div className="absolute inset-x-3 top-4 flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-2 rounded-full bg-black/45 py-1 pl-1 pr-3 backdrop-blur-sm">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-ember font-display text-[0.7rem] font-extrabold text-night">
                L
              </span>
              <span className="text-[0.72rem] font-semibold leading-tight text-white">Legendary®</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded bg-live px-1.5 py-0.5 text-[0.62rem] font-bold tracking-wider text-white">
                <span className={cn("h-1.5 w-1.5 rounded-full bg-white", animate && "motion-safe-only animate-live-dot")} />
                LIVE
              </span>
              <span className="readout inline-flex items-center gap-1 rounded bg-black/45 px-1.5 py-0.5 text-[0.62rem] text-white">
                <Eye className="h-3 w-3" />
                {fmt.format(sim.viewers)}
              </span>
            </div>
          </div>

          {/* Lock-on reticle around the product */}
          <div className="absolute left-[23%] top-[17%] h-[44%] w-[54%]">
            <span className="hud-corner left-0 top-0 border-l-2 border-t-2" />
            <span className="hud-corner right-0 top-0 border-r-2 border-t-2" />
            <span className="hud-corner bottom-0 left-0 border-b-2 border-l-2" />
            <span className="hud-corner bottom-0 right-0 border-b-2 border-r-2" />
            <span className="readout absolute -top-6 left-0 whitespace-nowrap rounded-sm bg-black/55 px-1.5 py-0.5 text-[0.58rem] tracking-[0.14em] text-gold">
              PINNED ▸ ORCHID EDP
            </span>
          </div>

          {/* Hearts */}
          <div className="absolute bottom-40 right-3 h-40 w-10">
            {sim.hearts.map((h) => (
              <svg
                key={h.id}
                viewBox="0 0 24 24"
                className="absolute bottom-0 h-5 w-5 animate-rise-heart"
                style={{ left: h.left, color: `hsl(${h.hue} 95% 64%)`, ["--drift" as string]: `${h.drift}px` }}
              >
                <path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.4 2.6.8-1.5 2.3-2.6 4.4-2.6 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
            ))}
          </div>

          {/* Chat */}
          <ul className="absolute bottom-[7.6rem] left-3 right-14 space-y-1.5">
            {sim.chat.map((m) => (
              <li key={m.id} className={cn("flex items-start gap-1.5 text-[0.7rem] leading-snug", animate && "animate-chat-in")}>
                <span className="mt-[1px] rounded-sm bg-white/15 px-1 text-[0.55rem] font-semibold text-white/80">{m.lang}</span>
                <span className="min-w-0">
                  <span className="font-semibold text-white/60">{m.user} </span>
                  <span className="text-white">{m.text}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Order toast */}
          <div className="absolute bottom-[5.35rem] left-3 h-6">
            {sim.toasts.map((t) => (
              <span
                key={t.id}
                className="inline-flex animate-toast-in items-center gap-1.5 rounded-full bg-mint/95 px-2.5 py-1 text-[0.66rem] font-semibold text-night"
              >
                <ShoppingBag className="h-3 w-3" />+{t.qty} order · {t.city}
              </span>
            ))}
          </div>

          {/* Pinned product */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-xl bg-white p-2 pr-2.5 text-night shadow-lg">
            <img src={asset("brands/legendary-orchid-life.webp")} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block text-[0.8rem] font-bold">Orchid</span>
              <span className="block truncate text-[0.66rem] text-night/60">Eau de parfum · Legendary®</span>
            </span>
            <span className="rounded-md bg-ember px-3 py-1.5 text-[0.72rem] font-bold text-night">Buy</span>
          </div>
        </div>
      </div>
      <figcaption className="label mt-3 text-center text-[0.58rem] text-paper/55">Simulated session · for illustration</figcaption>
    </figure>
  );
}
