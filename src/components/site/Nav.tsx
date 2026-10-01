import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { nav, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        "pt-[env(safe-area-inset-top,0px)]",
        scrolled || open ? "border-b border-line bg-night/85 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="Duskbin, back to top" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-[0.92rem] font-medium text-haze transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember hidden h-10 text-[0.92rem] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp us
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top,0px))] overflow-y-auto border-t border-line bg-night px-5 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="display-md border-b border-line py-5 text-[1.6rem] text-paper"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="display-md border-b border-line py-5 text-[1.6rem] text-paper">
            Contact
          </a>
        </nav>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-ember mt-8 h-14 w-full text-lg"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp us
        </a>
      </div>
    </header>
  );
}
