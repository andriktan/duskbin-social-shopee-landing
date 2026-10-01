import { brands } from "@/content/work";

export function BrandsStrip() {
  return (
    <section aria-label="Brands we run" className="border-b border-line bg-night">
      <div className="container flex flex-col gap-4 py-7 xl:flex-row xl:items-center xl:gap-10">
        <p className="label shrink-0 text-dim">Brands we run</p>
        <ul className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3 xl:justify-between">
          {brands.map((b) => (
            <li key={b.id} className="flex items-baseline gap-2">
              <span className="display-md text-[0.98rem] tracking-[0.02em] text-paper/90">{b.name}</span>
              <span className="label text-[0.58rem] text-dim">{b.market}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
