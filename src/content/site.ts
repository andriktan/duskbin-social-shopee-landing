// Single source for contact details and outbound links.
// The WhatsApp number is the one behind the old wa.link/tqmfu5 button.

export const site = {
  name: "Duskbin",
  url: "https://duskbin.com",
  whatsapp: "60122973679",
  whatsappDisplay: "+60 12-297 3679",
  email: "admin@duskbin.com",
  address: ["57, Jalan SS 21/1a, Damansara Utama", "47400 Petaling Jaya, Selangor"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=57%2C+Jalan+SS+21%2F1a%2C+Damansara+Utama%2C+47400+Petaling+Jaya%2C+Selangor",
  founded: 2009,
} as const;

/** Path to a file in /public that also works when the site is built under a sub-path. */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export const defaultWhatsappMessage = "Hi Duskbin, I'd like to talk about growing my brand on TikTok Shop and Shopee.";

export function whatsappLink(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const nav = [
  { id: "live", label: "Live" },
  { id: "how", label: "How we work" },
  { id: "results", label: "Results" },
  { id: "since-2009", label: "Since 2009" },
  { id: "services", label: "Services" },
] as const;
