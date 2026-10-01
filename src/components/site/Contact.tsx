import { useMemo, useState, type FormEvent } from "react";
import { Check, Copy, MapPin, MessageCircle, Mail } from "lucide-react";
import { mailtoLink, site, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

const PLATFORMS = ["TikTok Shop", "Shopee", "Lazada", "Shopify", "Not selling online yet"];
const NEEDS = ["Store management", "Listings and search", "Ads", "Livestreaming", "Affiliates", "Reporting", "Not sure yet"];
const SALES = ["Not selling online yet", "Under RM 50k a month", "RM 50k–200k a month", "RM 200k–1M a month", "Over RM 1M a month"];

function toggle(list: string[], v: string) {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

function ChipGroup({ legend, options, value, onChange, name }: { legend: string; options: string[]; value: string[]; onChange: (v: string[]) => void; name: string }) {
  return (
    <fieldset className="min-w-0">
      <legend className="label mb-3 text-dim">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value.includes(o);
          const id = `${name}-${o.replace(/\W+/g, "-").toLowerCase()}`;
          return (
            <label
              key={o}
              htmlFor={id}
              className={cn(
                "cursor-pointer select-none rounded-full border px-3.5 py-2 text-[0.92rem] transition-colors",
                "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ember",
                on ? "border-ember bg-ember/15 text-paper" : "border-line text-haze hover:border-white/35 hover:text-paper",
              )}
            >
              <input id={id} type="checkbox" className="sr-only" checked={on} onChange={() => onChange(toggle(value, o))} />
              {on && <Check className="-ml-0.5 mr-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />}
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Contact() {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [sales, setSales] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => {
    const lines = [`Hi Duskbin, I'd like to talk about ${brand.trim() || "my brand"}.`];
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (brand.trim()) lines.push(`Brand: ${brand.trim()}`);
    if (platforms.length) lines.push(`Selling on: ${platforms.join(", ")}`);
    if (sales) lines.push(`Online sales: ${sales}`);
    if (needs.length) lines.push(`Looking for: ${needs.join(", ")}`);
    if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
    return lines.join("\n");
  }, [brand, name, platforms, sales, needs, notes]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!brand.trim()) {
      setError("Add your brand name so we know who's asking.");
      document.getElementById("brief-brand")?.focus();
      return;
    }
    setError("");
    const link = whatsappLink(message);
    const win = window.open(link, "_blank");
    if (win) {
      win.opener = null;
      setStatus("WhatsApp opened in a new tab with your brief filled in. Press send there to reach us.");
    } else {
      window.location.href = link;
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] dusk-line" aria-hidden="true" />
      <div className="container grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="label text-gold">Contact</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] text-paper">Book prime time.</h2>
          <p className="mt-6 max-w-[36rem] text-[1.08rem] leading-relaxed text-haze">
            Tell us where you sell and what you need. The brief opens in WhatsApp with everything filled in, and nothing is sent
            until you press send there.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-10 space-y-8" aria-describedby="brief-help">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="brief-brand" className="label mb-2 block text-dim">
                  Brand <span className="text-ember">*</span>
                </label>
                <input
                  id="brief-brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  autoComplete="organization"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "brief-error" : undefined}
                  placeholder="e.g. Kopi Kita"
                  className="h-12 w-full rounded-md border border-line bg-night px-4 text-paper placeholder:text-dim focus:border-ember focus:outline-none"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="brief-name" className="label mb-2 block text-dim">
                  Your name
                </label>
                <input
                  id="brief-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="h-12 w-full rounded-md border border-line bg-night px-4 text-paper placeholder:text-dim focus:border-ember focus:outline-none"
                />
              </div>
            </div>

            <ChipGroup legend="Where you sell today" name="brief-platform" options={PLATFORMS} value={platforms} onChange={setPlatforms} />

            <div className="min-w-0">
              <label htmlFor="brief-sales" className="label mb-2 block text-dim">
                Online sales
              </label>
              <select
                id="brief-sales"
                value={sales}
                onChange={(e) => setSales(e.target.value)}
                className="h-12 w-full rounded-md border border-line bg-night px-4 text-paper focus:border-ember focus:outline-none sm:max-w-[22rem]"
              >
                <option value="">Choose a range</option>
                {SALES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <ChipGroup legend="What you need" name="brief-need" options={NEEDS} value={needs} onChange={setNeeds} />

            <div className="min-w-0">
              <label htmlFor="brief-notes" className="label mb-2 block text-dim">
                Anything else
              </label>
              <textarea
                id="brief-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Your best-selling product, a target, a deadline"
                className="w-full rounded-md border border-line bg-night px-4 py-3 text-paper placeholder:text-dim focus:border-ember focus:outline-none"
              />
            </div>

            {error && (
              <p id="brief-error" role="alert" className="text-[0.95rem] text-live">
                {error}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <button type="submit" className="btn-ember h-14 px-7 text-[1.02rem]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Open the brief in WhatsApp
              </button>
              <a
                href={mailtoLink(`Brief from ${brand.trim() || "a brand"}`, message)}
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-haze underline decoration-white/25 underline-offset-4 hover:text-paper"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Or send it by email
              </a>
            </div>
            <p id="brief-help" className="text-[0.9rem] text-dim" aria-live="polite">
              {status || "We reply in Bahasa Malaysia, English or 中文."}
            </p>
          </form>
        </div>

        <aside className="min-w-0 lg:pt-24" aria-label="Direct contact">
          <dl className="divide-y divide-line border-y border-line">
            <div className="py-6">
              <dt className="label text-dim">WhatsApp</dt>
              <dd className="mt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="readout text-[1.35rem] text-paper underline decoration-white/20 underline-offset-4 hover:decoration-ember"
                >
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="label text-dim">Email</dt>
              <dd className="mt-2 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className="readout select-all text-[1.1rem] text-paper underline decoration-white/20 underline-offset-4 hover:decoration-ember">
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-8 items-center gap-1.5 rounded border border-line px-2.5 text-[0.8rem] text-haze hover:border-white/40 hover:text-paper"
                >
                  {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </dd>
            </div>
            <div className="py-6">
              <dt className="label text-dim">Office</dt>
              <dd className="mt-2 leading-relaxed text-paper">
                {site.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-haze hover:text-paper"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
