import { services } from "@/content/work";

export function Services() {
  return (
    <section id="services" className="border-t border-line bg-night py-24 md:py-32">
      <div className="container">
        <div className="max-w-[46rem]">
          <p className="label text-gold">Services</p>
          <h2 className="display mt-4 text-[clamp(2.3rem,4.6vw,4rem)] text-paper">What we run for you.</h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-haze">
            Take the whole stack or only the part you're missing. We can start with one store and add live hosting and affiliates
            once the numbers hold.
          </p>
        </div>
        <div className="mt-14 grid gap-x-10 border-t border-line md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article key={s.name} className="flex flex-col gap-4 border-b border-line py-8">
              <h3 className="display-md text-[1.25rem] text-paper">{s.name}</h3>
              <p className="leading-relaxed text-haze">{s.body}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {s.tags.map((t) => (
                  <li key={t} className="label rounded-sm bg-white/5 px-2 py-1 text-[0.6rem] text-haze">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
