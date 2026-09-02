import type { Project } from "../types";

/**
 * Academic graduation project, master portfolio pages 16–22.
 *
 * The source presents this as an academic TEAM project. The team credit below
 * is reproduced exactly as the portfolio prints it on every OXIVA sheet and
 * must never be dropped, shortened or paraphrased.
 */
export const oxivaIbb: Project = {
  slug: "oxiva-ibb",
  title: "OXIVA IBB",
  indexNumber: "04",
  discipline: "Academic Graduation Project",
  tagline: "A public landscape, shaped by the valley.",
  summary:
    "Planning and Design of a Social, Sports and Entertainment Complex",
  location: "Wadi Al-Ma'ayin, Ibb, Yemen",
  year: "2024",
  area: "19.8 ha",
  scope: "Planning · Architecture · Landscape Integration · Visualization",
  team: ["Ahmed Belal Al-Maytami", "Osama Mohammed Ahmed Zain"],
  facts: [
    { label: "Location", value: "Wadi Al-Ma'ayin, Ibb, Yemen" },
    { label: "Year", value: "2024" },
    { label: "Site area", value: "19.8 ha" },
    { label: "Project type", value: "Academic Graduation Project" },
    { label: "Project format", value: "Academic Team Project" },
  ],
  cover: {
    pending: true,
    note: "Aerial project visualization",
    sourcePage: 16,
    aspect: "16 / 9",
  },
  sections: [
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
        pending: true,
        note: "Aerial project visualization",
        sourcePage: 16,
        aspect: "16 / 9",
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
      type: "gallery",
      id: "site-context",
      eyebrow: "Real site context",
      heading: "Environmental + access analysis",
      standfirst:
        "Wadi Al-Ma'ayin landscape context · Ibb hillside terrain · urban–landscape edge",
      items: [
        {
          media: {
            pending: true,
            note: "Wadi Al-Ma'ayin landscape context",
            sourcePage: 17,
            aspect: "4 / 3",
          },
        },
        {
          media: {
            pending: true,
            note: "Ibb hillside terrain",
            sourcePage: 17,
            aspect: "4 / 3",
          },
        },
        {
          media: {
            pending: true,
            note: "Urban–landscape edge",
            sourcePage: 17,
            aspect: "4 / 3",
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
        pending: true,
        note: "Site organization / top view",
        sourcePage: 18,
        aspect: "16 / 10",
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
        "The project distributes activity zones and landmark elements across the valley's changing levels, using terrain, circulation and landscape connections to create a continuous spatial sequence.",
      items: [
        {
          key: "01",
          title: "Site elevation 01 · East",
          body: "East elevation · 1:500 source drawing",
          media: {
            pending: true,
            note: "Site elevation 01 · East · 1:500",
            sourcePage: 19,
            aspect: "16 / 5",
          },
        },
        {
          key: "02",
          title: "Site elevation 02 · North",
          body: "North elevation · 1:500 source drawing",
          media: {
            pending: true,
            note: "Site elevation 02 · North · 1:500",
            sourcePage: 19,
            aspect: "16 / 5",
          },
        },
        {
          key: "03",
          title: "Overall site view",
          body: "Vertical relationship — high ground · terraced levels · lower valley",
          media: {
            pending: true,
            note: "Overall site view",
            sourcePage: 19,
            aspect: "16 / 9",
          },
        },
      ],
    },
    {
      type: "gallery",
      id: "social-life",
      eyebrow: "Programmed landscapes · social life",
      heading: "Landscapes for gathering, leisure and shared life.",
      standfirst: "Selected experiences",
      items: [
        {
          key: "01",
          title: "Social zone",
          body: "A connected landscape of gathering and shared public life.",
          media: {
            pending: true,
            note: "Social zone",
            sourcePage: 20,
            aspect: "3 / 2",
          },
        },
        {
          key: "02",
          title: "Entertainment oasis",
          body: "Play, spectacle and shade within the public landscape.",
          media: {
            pending: true,
            note: "Entertainment oasis",
            sourcePage: 20,
            aspect: "3 / 2",
          },
        },
        {
          key: "03",
          title: "Children's play",
          body: "A playful landscape for discovery and everyday activity.",
          media: {
            pending: true,
            note: "Children's play",
            sourcePage: 20,
            aspect: "3 / 2",
          },
        },
      ],
    },
    {
      type: "gallery",
      id: "active-life",
      eyebrow: "Programmed landscapes · active life",
      heading: "Landscapes for movement, activity and youth recreation.",
      standfirst: "Selected experiences",
      items: [
        {
          key: "01",
          title: "Outdoor sports",
          body: "Open fields, courts and active movement across the site.",
          media: {
            pending: true,
            note: "Outdoor sports",
            sourcePage: 21,
            aspect: "3 / 2",
          },
        },
        {
          key: "02",
          title: "Indoor sports",
          body: "Enclosed activity spaces within the recreational sequence.",
          media: {
            pending: true,
            note: "Indoor sports",
            sourcePage: 21,
            aspect: "3 / 2",
          },
        },
        {
          key: "03",
          title: "Youth entertainment",
          body: "A youth-oriented landscape of play and movement.",
          media: {
            pending: true,
            note: "Youth entertainment",
            sourcePage: 21,
            aspect: "3 / 2",
          },
        },
      ],
    },
    {
      type: "drawings",
      id: "hotel",
      eyebrow: "Hotel · selected architectural development",
      heading: "A vertical landmark, shaped around the guest experience.",
      standfirst: "Selected architectural evidence",
      items: [
        {
          key: "01",
          title: "Hotel hero",
          body: "Principal exterior view · tower and public arrival",
          media: {
            pending: true,
            note: "Hotel hero — principal exterior view",
            sourcePage: 22,
            aspect: "3 / 4",
          },
        },
        {
          key: "02",
          title: "Guest-room plan",
          body: "Guest-room floor plan · plan study",
          media: {
            pending: true,
            note: "Guest-room floor plan",
            sourcePage: 22,
            aspect: "4 / 3",
          },
        },
        {
          key: "03",
          title: "Façade development",
          body: "Tower elevation · façade study",
          media: {
            pending: true,
            note: "Tower elevation · façade study",
            sourcePage: 22,
            aspect: "3 / 4",
          },
        },
      ],
    },
  ],
  sourcePages: [16, 22],
};
