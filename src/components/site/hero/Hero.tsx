import { ArrowDown, MessageCircle } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion } from "@/hooks/use-motion";
import { whatsappLink } from "@/content/site";
import { LivePhone } from "./LivePhone";
import { PrimeTimeRuler } from "./PrimeTimeRuler";
import { SessionPanel } from "./SessionPanel";
import { Skyline } from "./Skyline";
import { Ticker } from "./Ticker";
import { useLiveSim } from "./useLiveSim";

const FACTS = [
  { k: "Est.", v: "2009" },
  { k: "Markets", v: "MY · ID · US/CA" },
  { k: "Stores", v: "TikTok · Shopee · Lazada · Shopify" },
  { k: "Hosts", v: "BM · EN · 中文" },
];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [ref, active] = useActiveInView<HTMLElement>("120px");
  const sim = useLiveSim(active && !reduced);
  const animate = !reduced;

  return (
    <section id="top" ref={ref} className="relative isolate flex flex-col overflow-hidden lg:min-h-[max(100svh,760px)]">
      {/* Sky: night at the top, the dusk band sinking behind the city */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background:
            "linear-gradient(180deg, #05060a 0%, #0a0a15 26%, #141128 46%, #261a3a 60%, #4a2544 72%, #87374a 82%, #d0532f 89%, #ff8a3c 93%, #ffc15e 97%)",
        }}
      />
      <div
        className="absolute -z-20 h-[46rem] w-[46rem] rounded-full max-lg:-right-72 max-lg:bottom-40 lg:bottom-[2%] lg:right-[4%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,166,86,0.5), rgba(255,107,44,0.16) 48%, transparent 72%)" }}
      />
      <div className="absolute inset-0 -z-20 grid-faint [mask-image:linear-gradient(to_bottom,black_0%,transparent_78%)]" />
      <Skyline className="absolute inset-x-0 bottom-[3.2rem] -z-10 h-[clamp(110px,16vw,240px)] w-full" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[3.3rem] bg-night" />

      <div className="container relative flex flex-1 flex-col pb-[5.5rem] pt-[calc(5.25rem+env(safe-area-inset-top,0px))] lg:pb-[5.75rem] lg:pt-[6.25rem]">
        {/* HUD row: real facts on the left, the evening in Malaysia time in the middle */}
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)_minmax(0,1fr)] lg:items-start">
          <dl className="hidden gap-y-1 lg:grid" aria-label="About Duskbin">
            {FACTS.map((f) => (
              <div key={f.k} className="grid grid-cols-[4.75rem_1fr] items-baseline gap-2">
                <dt className="label text-[0.6rem] text-dim">{f.k}</dt>
                <dd className="readout text-[0.78rem] text-haze">{f.v}</dd>
              </div>
            ))}
          </dl>
          <PrimeTimeRuler className="mx-auto w-full max-w-[30rem]" />
          <div className="hidden lg:block" />
        </div>

        <div className="mt-10 grid min-w-0 flex-1 items-end gap-12 lg:mt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
          <div className="min-w-0 lg:pb-8">
            <h1 className="display text-[2.7rem] text-paper [font-stretch:110%] sm:text-[3.6rem] sm:[font-stretch:125%] lg:text-[clamp(4rem,6vw,6.4rem)]">
              Prime time,
              <br />
              <span className="text-gold">engineered.</span>
            </h1>
            <p className="mt-6 max-w-[38rem] text-[1.06rem] leading-relaxed text-paper/80 md:text-[1.18rem]">
              Duskbin runs TikTok Shop and Shopee for brands in Malaysia and Indonesia: the listings, the affiliate creators and the
              live hosts. We read every session by the hour, so your budget only follows what sells.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ember h-14 px-7 text-[1.02rem]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp us
              </a>
              <a href="#results" className="btn-ghost h-14 px-7 text-[1.02rem] backdrop-blur-sm">
                See the results
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 lg:hidden" aria-label="About Duskbin">
              {FACTS.map((f) => (
                <div key={f.k} className="min-w-0">
                  <dt className="label text-[0.6rem] text-dim">{f.k}</dt>
                  <dd className="readout mt-0.5 text-[0.78rem] text-haze">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="live" className="relative mx-auto flex w-full max-w-[22rem] scroll-mt-24 flex-col items-center gap-6 lg:mx-0 lg:w-auto lg:max-w-none">
            <LivePhone sim={sim} animate={animate} />
            <div className="w-full xl:absolute xl:bottom-[2%] xl:right-[calc(100%-0.75rem)] xl:w-[15rem]">
              <SessionPanel sim={sim} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Ticker />
      </div>
    </section>
  );
}
