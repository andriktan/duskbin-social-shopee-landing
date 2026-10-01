import { cn } from "@/lib/utils";

/** Sun on the horizon: the dusk in Duskbin. */
export function DuskMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true">
      <defs>
        <linearGradient id="dm-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc15e" />
          <stop offset="1" stopColor="#ff6b2c" />
        </linearGradient>
        <linearGradient id="dm-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7b4a9e" />
          <stop offset="0.55" stopColor="#d0537a" />
          <stop offset="1" stopColor="#ff6b2c" />
        </linearGradient>
      </defs>
      <path d="M5 15a7 7 0 0 1 14 0Z" fill="url(#dm-sun)" />
      <rect x="1.5" y="16.6" width="21" height="2" rx="1" fill="url(#dm-line)" />
      <rect x="6" y="20.2" width="12" height="1.4" rx="0.7" fill="#7b4a9e" opacity="0.7" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <DuskMark />
      <span className="display-md text-[1.05rem] tracking-[0.04em] text-paper">Duskbin</span>
    </span>
  );
}
