import { profile } from "@/content/profile";
import { isPendingMedia, type Project } from "@/content/types";
import { absoluteUrl, site } from "./site";

/**
 * Structured data is built only from fields the master portfolio actually
 * supplies. Undefined values are stripped rather than filled in.
 */
export function personSchema() {
  return prune({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.roles,
    url: absoluteUrl("/"),
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    email: profile.email ? `mailto:${profile.email}` : undefined,
    telephone: profile.phone,
    sameAs: profile.links.length
      ? profile.links.map((link) => link.href)
      : undefined,
  });
}

export function projectSchema(project: Project) {
  return prune({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: absoluteUrl(`/work/${project.slug}`),
    creator: { "@type": "Person", name: profile.name },
    genre: project.discipline,
    locationCreated: project.location
      ? { "@type": "Place", name: project.location }
      : undefined,
    dateCreated: project.year,
    abstract: project.summary,
    image:
      project.cover && !isPendingMedia(project.cover)
        ? absoluteUrl(project.cover.src)
        : undefined,
    isPartOf: { "@type": "Collection", name: `${site.shortName} — Portfolio` },
  });
}

type Json = Record<string, unknown>;

/** Drop undefined values so no empty or invented field reaches the markup. */
function prune(input: Json): Json {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined),
  );
}
