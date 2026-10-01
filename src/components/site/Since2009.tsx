import { ArrowUpRight } from "lucide-react";
import { history } from "@/content/work";

export function Since2009() {
  return (
    <section id="since-2009" className="relative overflow-hidden border-t border-line bg-ink py-24 md:py-32">
      <div
        aria-hidden="true"
        className="display pointer-events-none absolute -right-6 top-10 select-none text-[clamp(9rem,26vw,24rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(236,230,255,0.08)]"
      >
        2009
      </div>
      <div className="container relative grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label text-gold">Since 2009</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,3.7vw,3.4rem)] text-paper">
            We ran live audiences before live commerce.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed text-haze">
            Duskbin started as DuskBin Electronic Sports. We fielded teams, managed pro players across Asia and streamed to
            Taiwanese audiences on Twitch. Live commerce is the same craft with a checkout button: read the chat, hold the room,
            close the sale.
          </p>
        </div>

        <ol className="border-t border-line">
          {history.map((h) => (
            <li key={h.year + h.title} className="grid gap-x-6 gap-y-2 border-b border-line py-7 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
              {/^\d{4}$/.test(h.year) ? (
                <span className="display-md pt-0.5 text-[1.45rem] text-ember sm:text-[1.6rem]">{h.year}</span>
              ) : (
                <span className="label pt-2 text-[0.72rem] text-ember">{h.year}</span>
              )}
              <div className="min-w-0">
                <h3 className="text-[1.12rem] font-semibold text-paper">{h.title}</h3>
                <p className="mt-2 leading-relaxed text-haze">{h.body}</p>
                {h.source && (
                  <a
                    href={h.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-3 inline-flex items-center gap-1 text-dim transition-colors hover:text-paper"
                  >
                    Source: {h.source.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
