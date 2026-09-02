import type { ProjectSection } from "../types";

/**
 * OXIVA IBB — programmed landscapes and the selected hotel development.
 * Master portfolio pages 20–22. Continues `oxiva-ibb.sections.ts`.
 */
export const oxivaLandscapeSections: ProjectSection[] = [
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
          src: "/media/oxiva/social-zone.webp",
          width: 1779,
          height: 1001,
          alt: "Axonometric of the social zone, its gathering spaces and planting annotated with programme icons",
          sourcePage: 20,
          kind: "render",
        },
      },
      {
        key: "02",
        title: "Entertainment oasis",
        body: "Play, spectacle and shade within the public landscape.",
        media: {
          src: "/media/oxiva/entertainment-oasis.webp",
          width: 656,
          height: 506,
          alt: "Axonometric of the entertainment oasis, terraced levels rising around a central attraction",
          sourcePage: 20,
          kind: "render",
        },
      },
      {
        key: "03",
        title: "Children's play",
        body: "A playful landscape for discovery and everyday activity.",
        media: {
          src: "/media/oxiva/childrens-play.webp",
          width: 656,
          height: 507,
          alt: "Axonometric of the children's play landscape with its play structures and shaded areas",
          sourcePage: 20,
          kind: "render",
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
          src: "/media/oxiva/outdoor-sports.webp",
          width: 1867,
          height: 1201,
          alt: "Axonometric of the outdoor sports zone, its pitches and courts annotated with programme icons",
          sourcePage: 21,
          kind: "render",
        },
      },
      {
        key: "02",
        title: "Indoor sports",
        body: "Enclosed activity spaces within the recreational sequence.",
        media: {
          src: "/media/oxiva/indoor-sports.webp",
          width: 690,
          height: 506,
          alt: "Axonometric of the indoor sports buildings set into the landscape",
          sourcePage: 21,
          kind: "render",
        },
      },
      {
        key: "03",
        title: "Youth entertainment",
        body: "A youth-oriented landscape of play and movement.",
        media: {
          src: "/media/oxiva/youth-entertainment.webp",
          width: 656,
          height: 507,
          alt: "Axonometric of the youth entertainment zone with its rides and activity areas",
          sourcePage: 21,
          kind: "render",
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
          src: "/media/oxiva/hotel-hero.webp",
          width: 1779,
          height: 1001,
          alt: "Exterior view of the hotel tower, its stacked planted terraces rising above the public arrival level",
          sourcePage: 22,
          kind: "render",
        },
      },
      {
        key: "02",
        title: "Guest-room plan",
        body: "Guest-room floor plan · plan study",
        media: {
          src: "/media/oxiva/guest-room-plan.webp",
          width: 656,
          height: 668,
          alt: "Circular guest-room floor plan, rooms arranged radially around the central core and stair",
          sourcePage: 22,
          kind: "drawing",
        },
      },
      {
        key: "03",
        title: "Façade development",
        body: "Tower elevation · façade study",
        media: {
          src: "/media/oxiva/facade-development.webp",
          width: 523,
          height: 434,
          alt: "Tower elevation with a façade detail study called out at 1:200",
          sourcePage: 22,
          kind: "drawing",
        },
      },
    ],
  },
];
