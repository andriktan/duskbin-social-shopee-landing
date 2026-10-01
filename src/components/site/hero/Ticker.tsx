const ITEMS = [
  "TikTok Shop",
  "Shopee",
  "Lazada",
  "Shopify",
  "Shopee Live",
  "TikTok LIVE",
  "GMV Max",
  "Affiliate creators",
  "Bahasa Malaysia",
  "English",
  "中文",
  "Since 2009",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="display-md whitespace-nowrap px-6 text-[0.95rem] tracking-[0.06em] text-paper/80">{item}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-ember/80" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-night/80 py-3.5" aria-hidden="true">
      <div className="motion-safe-only flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  );
}
