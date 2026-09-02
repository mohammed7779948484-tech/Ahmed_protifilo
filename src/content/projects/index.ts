import type { Project } from "../types";
import { bakkaSupermarket } from "./bakka-supermarket";
import { oxivaIbb } from "./oxiva-ibb";
import { rahhalFuelStation } from "./rahhal-fuel-station";
import { residentialVillaFacade } from "./residential-villa-facade";

/** Selected works, in the order the master portfolio presents them. */
export const projects: Project[] = [
  rahhalFuelStation,
  bakkaSupermarket,
  residentialVillaFacade,
  oxivaIbb,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
