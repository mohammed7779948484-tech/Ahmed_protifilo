import type { ProjectSection } from "../types";

/**
 * OXIVA IBB — site reading, masterplan and terrain sections.
 * Master portfolio pages 16–19. The programmed landscapes and the hotel
 * development continue in `oxiva-ibb.landscapes.ts`; the two are split only to
 * keep each file inside the project's size limit.
 */
export const oxivaSiteSections: ProjectSection[] = [
  {
    type: "narrative",
    id: "thesis",
    eyebrow: "Design thesis",
    heading: "A public landscape, shaped by the valley.",
    body: [
      "OXIVA IBB uses the site's sloping agricultural terraces as an organizing framework for a connected public destination combining social, sports and entertainment programs.",
    ],
  },
  {
    type: "fullBleed",
    id: "aerial",
    heading: "Aerial project visualization",
    standfirst:
      "Integrated public landscape · recreational program · terrain-responsive planning",
    media: {
      src: "/media/oxiva/aerial-visualization.webp",
      width: 1851,
      height: 1040,
      alt: "Aerial visualization of the OXIVA IBB complex, its programmed zones and path network laid across the terraced valley floor",
      sourcePage: 16,
      kind: "render",
    },
  },
  {
    type: "keyList",
    id: "site-reading",
    eyebrow: "Site context",
    heading: "The valley becomes the organizing framework.",
    standfirst: "Site-reading summary",
    items: [
      {
        key: "01",
        title: "Sloping valley topography",
        body: "Changing natural levels define the valley condition.",
      },
      {
        key: "02",
        title: "Agricultural terraces",
        body: "Cultivated terraces provide a visible spatial structure.",
      },
      {
        key: "03",
        title: "Urban–landscape edge",
        body: "Hillside development meets open agricultural land.",
      },
      {
        key: "04",
        title: "Access + connectivity",
        body: "Primary and secondary approaches establish arrival.",
      },
    ],
  },
  {
    type: "splitMedia",
    id: "real-site-context",
    eyebrow: "Real site context",
    heading: "Wadi Al-Ma'ayin.",
    mediaSide: "left",
    media: {
      src: "/media/oxiva/site-context.webp",
      width: 1828,
      height: 534,
      alt: "Photograph of the Wadi Al-Ma'ayin landscape at Ibb, hillside development meeting the cultivated valley terraces",
      sourcePage: 17,
      caption: "Wadi Al-Ma'ayin landscape context · Ibb hillside terrain",
      kind: "photograph",
    },
    body: [
      "Hillside development meets open agricultural land along the urban–landscape edge, and the changing natural levels of the valley set the terms for everything placed on it.",
    ],
  },
  {
    type: "gallery",
    id: "terrain-concept",
    eyebrow: "Terrain-responsive concept",
    heading: "Three stages, from valley to complex.",
    items: [
      {
        key: "01",
        title: "Existing valley landscape",
        media: {
          src: "/media/oxiva/concept-01-existing-valley.webp",
          width: 418,
          height: 201,
          alt: "Concept diagram of the existing valley landscape, showing the urban edge above the terraced valley",
          sourcePage: 17,
          kind: "diagram",
        },
      },
      {
        key: "02",
        title: "Terrain-responsive organization",
        media: {
          src: "/media/oxiva/concept-02-terrain-organization.webp",
          width: 434,
          height: 201,
          alt: "Concept diagram distributing programme clusters across the valley's land levels",
          sourcePage: 17,
          kind: "diagram",
        },
      },
      {
        key: "03",
        title: "Integrated complex",
        media: {
          src: "/media/oxiva/concept-03-integrated-complex.webp",
          width: 512,
          height: 201,
          alt: "Concept diagram of the integrated complex, activity zones and landscape linked into one connected public destination",
          sourcePage: 17,
          kind: "diagram",
        },
      },
    ],
  },
  {
    type: "gallery",
    id: "environmental-access",
    eyebrow: "Environmental + access analysis",
    heading: "Water and arrival.",
    items: [
      {
        key: "01",
        title: "Rainwater drainage",
        body: "Natural level changes inform qualitative surface-water movement across the site.",
        media: {
          src: "/media/oxiva/rainwater-drainage.webp",
          width: 474,
          height: 290,
          alt: "Diagram of surface-water movement across the site, from higher ground down to the lower valley",
          sourcePage: 17,
          kind: "diagram",
        },
      },
      {
        key: "02",
        title: "Primary & secondary access",
        body: "Primary and secondary access points establish a clear hierarchy of arrival around the site.",
        media: {
          src: "/media/oxiva/access-hierarchy.webp",
          width: 501,
          height: 290,
          alt: "Diagram marking the primary and secondary access points around the site boundary",
          sourcePage: 17,
          kind: "diagram",
        },
      },
      {
        key: "03",
        title: "Location sequence",
        media: {
          src: "/media/oxiva/location-sequence.webp",
          width: 851,
          height: 162,
          alt: "Location sequence diagram narrowing from Yemen to Ibb, to Wadi Al-Ma'ayin, to the project site",
          sourcePage: 17,
          kind: "diagram",
        },
      },
    ],
  },
  {
    type: "diagram",
    id: "masterplan",
    eyebrow: "Masterplan · program · movement",
    heading: "One landscape, eight programmed zones.",
    standfirst:
      "Integrated destination zones organized through a connected hierarchy of roads, paths and shared public-space links.",
    media: {
      src: "/media/oxiva/masterplan.webp",
      width: 2000,
      height: 1295,
      alt: "Coloured masterplan of the OXIVA IBB site, showing the eight activity zones distributed across the valley and linked by the road and path network",
      sourcePage: 18,
      caption: "Site organization · top view",
      kind: "drawing",
    },
    notes: [
      {
        key: "—",
        title: "Circulation hierarchy",
        body: "Main roads, primary paths, secondary paths and suspended connections.",
      },
      {
        key: "—",
        title: "Arrival + shared amenities",
        body: "Administration · Mosque · Restaurants & Cafés · Retail · Parking.",
      },
    ],
    legend: {
      heading: "Program zoning — eight source-verified activity zones",
      items: [
        { key: "01", title: "Outdoor sports zone" },
        { key: "02", title: "Indoor sports zone" },
        { key: "03", title: "Social zone" },
        { key: "04", title: "Children's play zone" },
        { key: "05", title: "Youth entertainment zone" },
        { key: "06", title: "Entertainment oasis" },
        { key: "07", title: "Hotel & hospitality" },
        { key: "08", title: "Restaurant" },
      ],
    },
  },
  {
    type: "drawings",
    id: "terrain",
    eyebrow: "Terrain · vertical organization",
    heading: "Architecture distributed, across changing ground.",
    standfirst:
      "The project distributes activity zones and landmark elements across the valley's changing levels, using terrain, circulation and landscape connections to create a continuous spatial sequence. High ground · terraced levels · lower valley.",
    items: [
      {
        key: "01",
        title: "Site elevation 01 · East",
        body: "East elevation · 1:500 source drawing",
        media: {
          src: "/media/oxiva/elevation-east.webp",
          width: 1739,
          height: 512,
          alt: "East site elevation at 1:500, landmark elements and the observation tower stepping across the valley profile",
          sourcePage: 19,
          kind: "drawing",
        },
      },
      {
        key: "02",
        title: "Site elevation 02 · North",
        body: "North elevation · 1:500 source drawing",
        media: {
          src: "/media/oxiva/elevation-north.webp",
          width: 1267,
          height: 506,
          alt: "North site elevation at 1:500, showing the ferris wheel and tower against the terraced ground",
          sourcePage: 19,
          kind: "drawing",
        },
      },
      {
        key: "03",
        title: "Overall site view",
        media: {
          src: "/media/oxiva/site-overview.webp",
          width: 723,
          height: 407,
          alt: "Overall top view of the site showing the complete landscape organization",
          sourcePage: 19,
          kind: "render",
        },
      },
    ],
  },
];
