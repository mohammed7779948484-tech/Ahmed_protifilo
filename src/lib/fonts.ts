import { Bodoni_Moda, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * Display: a Didone with the high stroke contrast and flat serifs of the
 * approved cover lettering. The optical-size axis keeps the hairlines from
 * collapsing when the type is set very large.
 */
export const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  // Variable: weight comes from the wght axis, and opsz keeps the hairlines
  // from collapsing when the type is set very large.
  axes: ["opsz"],
});

/** Body and interface voice — humanist grotesque, drawn for technical work. */
export const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/** Sheet annotation voice — corner labels, section numbers, fact keys. */
export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const fontVariables = [
  bodoni.variable,
  plexSans.variable,
  plexMono.variable,
].join(" ");
