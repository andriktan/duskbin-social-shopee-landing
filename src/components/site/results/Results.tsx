import { ArrowUpRight } from "lucide-react";
import { brands, creatorGrowth, type Brand } from "@/content/work";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";
import { DotMatrix } from "./DotMatrix";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((p) => (
        <li key={p} className="label rounded-sm border border-line px-1.5 py-0.5 text-[0.6rem] text-haze">
          {p}
        </li>
      ))}
    </ul>
  );
}

function BrandTile({ b }: { b: Brand }) {
  return (
    <article className="flex min-w-0 flex-col gap-5 p-6 md:p-7">
      <header className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[1.2rem] font-semibold leading-tight text-paper">{b.name}</h3>
          <p className="mt-1 text-[0.88rem] text-dim">
            {b.what} · {b.market}
          </p>
        </div>
        {b.logo && (
          <img
            src={b.logo.src}
            alt={b.logo.alt}
            width={b.logo.width}
            height={b.logo.height}
            loading="lazy"
            className="h-auto max-h-10 w-auto max-w-[5.5rem] shrink-0 object-contain opacity-90"
          />
        )}
      </header>
      <Chips items={b.platforms} />
      {b.image ? (
        <div className={cn("overflow-hidden rounded-lg", b.image.fit === "contain" ? "bg-white" : "bg-panel")}>
          <img
            src={b.image.src}
            alt={b.image.alt}
            loading="lazy"
            decoding="async"
            className={cn("aspect-[4/3] w-full", b.image.fit === "contain" ? "object-contain p-3" : "object-cover")}
          />
        </div>
      ) : (
        <div className="grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-line">
          <span className="readout text-center text-[0.8rem] leading-relaxed text-dim">
            {b.platforms.join(" · ")}
            <br />
            {b.market}
          </span>
        </div>
      )}
      <ul className="space-y-3 text-[0.95rem] leading-relaxed text-haze">
        {b.work.map((w) => (
          <li key={w} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-2">
            <span className="mt-[0.6em] h-1.5 w-1.5 rotate-45 bg-ember" aria-hidden="true" />
            <span>{w}</span>
          </li>
        ))}
      </ul>
      {b.url && (
        <a
          href={b.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 self-start text-[0.9rem] font-semibold text-paper underline decoration-white/25 underline-offset-4 hover:decoration-ember"
        >
          Visit {b.name.replace("®", "")}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export function Results() {
  const blue = brands.find((b) => b.id === "bluepansy")!;
  const others = brands.filter((b) => b.id !== "bluepansy");

  return (
    <section id="results" className="border-t border-line bg-night py-24 md:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="label text-gold">Results board</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] text-paper">What we can prove.</h2>
            <p className="mt-6 max-w-[40rem] text-[1.08rem] leading-relaxed text-haze">
              Real brands, the work we did for them, and a number we can show in full. Every figure on this board comes from our own
              client reporting.
            </p>
          </div>
          <p className="label inline-flex items-center gap-2 self-start rounded-full border border-mint/40 px-3 py-1.5 text-mint lg:self-end">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            Verified figures only · Oct 2026
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-line bg-panel">
          {/* The headline number */}
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="p-6 md:p-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-[1.2rem] font-semibold text-paper">{blue.name}</h3>
                <span className="text-[0.88rem] text-dim">
                  {blue.what} · {blue.market}
                </span>
              </div>
              <div className="mt-3">
                <Chips items={blue.platforms} />
              </div>
              <p className="display mt-8 flex flex-wrap items-baseline gap-x-4 text-[clamp(3.4rem,7vw,6rem)] text-paper">
                <span className="text-ember">{creatorGrowth.from}</span>
                <span className="text-[0.55em] text-dim" aria-hidden="true">
                  →
                </span>
                <span className="sr-only">to</span>
                <span>{creatorGrowth.to}</span>
              </p>
              <p className="mt-3 text-[1.02rem] text-paper/85">Affiliate creators actively generating sales.</p>
              <ul className="mt-7 space-y-3 text-[0.95rem] leading-relaxed text-haze">
                {blue.work.slice(1).map((w) => (
                  <li key={w} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-2">
                    <span className="mt-[0.6em] h-1.5 w-1.5 rotate-45 bg-ember" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-5 border-t border-line p-6 md:p-9 lg:border-l lg:border-t-0">
              <DotMatrix from={creatorGrowth.from} to={creatorGrowth.to} />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-haze">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-ember" aria-hidden="true" />
                  The {creatorGrowth.from} creators we started with
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet" aria-hidden="true" />
                  {creatorGrowth.to - creatorGrowth.from} more who now sell
                </span>
              </div>
              <p className="label leading-relaxed text-dim">
                One dot, one creator · {creatorGrowth.context} ·{" "}
                <a
                  href={creatorGrowth.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-haze underline decoration-white/20 underline-offset-4 hover:text-paper"
                >
                  {creatorGrowth.source.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>

          {/* The brands */}
          <div className="grid border-t border-line md:grid-cols-2 xl:grid-cols-4 [&>*]:border-line max-md:[&>*+*]:border-t md:max-xl:[&>*:nth-child(2n)]:border-l md:max-xl:[&>*:nth-child(n+3)]:border-t xl:[&>*+*]:border-l">
            {others.map((b) => (
              <BrandTile key={b.id} b={b} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[42rem] text-[0.95rem] text-dim">
            Want the full numbers behind a case? We walk you through the reports on a call.
          </p>
          <a
            href={whatsappLink("Hi Duskbin, I saw your results board and would like to see the numbers behind a case.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost h-12 shrink-0 self-start text-[0.95rem] sm:self-auto"
          >
            Ask for a case walkthrough
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
