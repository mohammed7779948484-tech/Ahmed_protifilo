import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motionInitScript } from "@/components/motion/motion-script";
import { fontVariables } from "@/lib/fonts";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata(),
  metadataBase: new URL(site.url),
  authors: [{ name: site.name }],
  creator: site.name,
};

export const viewport: Viewport = {
  themeColor: "#f1ebe3",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <head>
        {/* Runs before paint so reveal targets are hidden without a flash, and
            stays inert when the reader prefers reduced motion. */}
        <script dangerouslySetInnerHTML={{ __html: motionInitScript }} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip antialiased">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-espresso)] focus:px-4 focus:py-3 focus:text-[var(--color-ivory)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
