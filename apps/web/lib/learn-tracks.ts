export interface TrackArticle {
  slug: string;
  title: string;
  href: string;
}

export interface LearnTrack {
  id: string;
  basePath: string;
  articles: TrackArticle[];
}

export const learnTracks: LearnTrack[] = [
  {
    id: "resources",
    basePath: "/learn/resources",
    articles: [
      { slug: "observation",  title: "Observation",  href: "/learn/resources/observation" },
      { slug: "condition",    title: "Condition",    href: "/learn/resources/condition" },
      { slug: "encounter",    title: "Encounter",    href: "/learn/resources/encounter" },
      { slug: "search",       title: "Search",       href: "/learn/resources/search" },
      { slug: "bundle",       title: "Bundle",       href: "/learn/resources/bundle" },
    ],
  },
  {
    id: "profiling",
    basePath: "/learn/profiling",
    articles: [
      { slug: "profile",              title: "What is a Profile",   href: "/learn/profiling/profile" },
      { slug: "validation",           title: "Validation",          href: "/learn/profiling/validation" },
      { slug: "standards-comparison", title: "HL7 v2 vs CDA vs FHIR", href: "/learn/profiling/standards-comparison" },
      { slug: "conformance",          title: "Conformance",         href: "/learn/profiling/conformance" },
    ],
  },
  {
    id: "ehds",
    basePath: "/learn/ehds",
    articles: [
      { slug: "fhir-and-ehds",                 title: "FHIR and EHDS",                            href: "/learn/ehds/fhir-and-ehds" },
      { slug: "international-patient-summary",  title: "International Patient Summary",            href: "/learn/ehds/international-patient-summary" },
      { slug: "compliance-timeline",            title: "EHDS Compliance Timeline for Slovak Healthcare", href: "/learn/ehds/compliance-timeline" },
    ],
  },
];

export function getArticleNav(pathname: string): {
  prev: TrackArticle | null;
  next: TrackArticle | null;
  trackTitle: string;
  trackHref: string;
} | null {
  for (const track of learnTracks) {
    const idx = track.articles.findIndex((a) => a.href === pathname);
    if (idx === -1) continue;
    return {
      prev: idx > 0 ? track.articles[idx - 1] : null,
      next: idx < track.articles.length - 1 ? track.articles[idx + 1] : null,
      trackTitle: track.id,
      trackHref: track.basePath,
    };
  }
  return null;
}
