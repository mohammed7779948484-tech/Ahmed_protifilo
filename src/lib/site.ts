import { profile } from "@/content/profile";

/** Set NEXT_PUBLIC_SITE_URL at build time to make canonical URLs absolute. */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: profile.name,
  shortName: "Ahmed Belal Al-Maytami",
  title: `${profile.name} — ${profile.roles.join(" & ")}`,
  description:
    "Selected architectural and interior design work by Ahmed Belal Al-Maytami, an architectural and interior designer based in Sana'a, Yemen.",
  url: rawUrl.replace(/\/$/, ""),
  locale: "en",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}
