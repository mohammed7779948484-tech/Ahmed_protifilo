import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

interface PageMetaOptions {
  title?: string;
  description?: string;
  path?: string;
}

/** Route metadata with a canonical URL and matching Open Graph entries. */
export function pageMetadata({
  title,
  description = site.description,
  path = "/",
}: PageMetaOptions = {}): Metadata {
  const resolvedTitle = title ? `${title} — ${site.shortName}` : site.title;
  const url = absoluteUrl(path);

  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.shortName,
      title: resolvedTitle,
      description,
      url,
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
