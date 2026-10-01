import { nav, site, whatsappLink } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-night pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] pt-14">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Wordmark />
          <p className="display-md mt-5 text-[1.3rem] text-paper/90">Prime time, engineered.</p>
          <p className="mt-3 max-w-[22rem] text-[0.92rem] leading-relaxed text-dim">
            TikTok Shop, Shopee, Lazada and Shopify, run by people who have been holding live audiences since 2009.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="label text-dim">Sections</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-[0.95rem] text-haze hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-[0.95rem] text-haze hover:text-paper">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className="label text-dim">Reach us</p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-haze">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li className="leading-relaxed">
              {site.address[0]},
              <br />
              {site.address[1]}
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.82rem] text-dim sm:flex-row sm:justify-between">
        <p>© 2026 Duskbin. All rights reserved.</p>
        <p>Brand names and product photos belong to their owners.</p>
      </div>
    </footer>
  );
}
