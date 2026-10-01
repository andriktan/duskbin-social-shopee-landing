import { useEffect, useRef, useState } from "react";

// A simulated live session for the hero. Nothing here is a real result:
// the phone and panel are labelled "Simulated" wherever these numbers appear.

export type ChatMsg = { id: number; user: string; text: string; lang: "BM" | "EN" | "中文" };
export type Toast = { id: number; qty: number; city: string };
export type Heart = { id: number; hue: number; drift: number; left: number };

const CHAT: Omit<ChatMsg, "id">[] = [
  { user: "ai***", text: "Ada tester tak?", lang: "BM" },
  { user: "we***", text: "这个香味持久吗？", lang: "中文" },
  { user: "nu***", text: "Link please 🙏", lang: "EN" },
  { user: "sh***", text: "Bau dia tahan lama?", lang: "BM" },
  { user: "li***", text: "有送礼包装吗？", lang: "中文" },
  { user: "ka***", text: "Is this the orchid one?", lang: "EN" },
  { user: "fa***", text: "Nak 2 botol", lang: "BM" },
  { user: "jo***", text: "Checked out 🎉", lang: "EN" },
  { user: "mi***", text: "主播再介绍一下味道", lang: "中文" },
  { user: "ha***", text: "Free shipping ke?", lang: "BM" },
];

const CITIES = ["Petaling Jaya", "Johor Bahru", "Penang", "Ipoh", "Kuching", "Kota Kinabalu", "Seremban", "Melaka"];

export type LiveState = {
  viewers: number;
  likes: number;
  carts: number;
  orders: number;
  gmv: number;
  viewerTrail: number[];
  chat: ChatMsg[];
  toasts: Toast[];
  hearts: Heart[];
};

const initial: LiveState = {
  viewers: 1284,
  likes: 18420,
  carts: 212,
  orders: 96,
  gmv: 4210,
  viewerTrail: [1120, 1160, 1150, 1210, 1190, 1240, 1230, 1270, 1262, 1284, 1270, 1295, 1284],
  chat: CHAT.slice(0, 4).map((m, i) => ({ ...m, id: i })),
  toasts: [],
  hearts: [],
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function useLiveSim(active: boolean) {
  const [state, setState] = useState<LiveState>(initial);
  const ids = useRef(100);
  const chatIndex = useRef(4);

  useEffect(() => {
    if (!active) return;
    const nextId = () => ++ids.current;

    const tick = window.setInterval(() => {
      setState((s) => {
        const viewers = Math.round(Math.min(1920, Math.max(1080, s.viewers + rand(-38, 44))));
        return {
          ...s,
          viewers,
          likes: s.likes + Math.round(rand(4, 26)),
          carts: s.carts + (Math.random() < 0.45 ? 1 : 0),
          gmv: Math.round(Math.min(5480, Math.max(3620, s.gmv + rand(-60, 70)))),
          viewerTrail: [...s.viewerTrail.slice(-15), viewers],
        };
      });
    }, 1000);

    const chat = window.setInterval(() => {
      setState((s) => {
        const msg = CHAT[chatIndex.current % CHAT.length];
        chatIndex.current += 1;
        return { ...s, chat: [...s.chat.slice(-3), { ...msg, id: nextId() }] };
      });
    }, 1700);

    const heart = window.setInterval(() => {
      const h: Heart = { id: nextId(), hue: [350, 18, 262, 330][Math.floor(Math.random() * 4)], drift: rand(-34, 10), left: rand(0, 18) };
      setState((s) => ({ ...s, hearts: [...s.hearts.slice(-10), h] }));
      window.setTimeout(() => setState((s) => ({ ...s, hearts: s.hearts.filter((x) => x.id !== h.id) })), 2700);
    }, 620);

    const order = window.setInterval(() => {
      const t: Toast = { id: nextId(), qty: Math.random() < 0.75 ? 1 : 2, city: CITIES[Math.floor(Math.random() * CITIES.length)] };
      setState((s) => ({ ...s, orders: s.orders + t.qty, gmv: s.gmv + 40 * t.qty, toasts: [t] }));
      window.setTimeout(() => setState((s) => ({ ...s, toasts: s.toasts.filter((x) => x.id !== t.id) })), 3300);
    }, 4300);

    return () => {
      window.clearInterval(tick);
      window.clearInterval(chat);
      window.clearInterval(heart);
      window.clearInterval(order);
    };
  }, [active]);

  return state;
}
