"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * One client boundary for the whole site.
 *
 * Server components opt in by rendering `data-reveal` (and optionally
 * `data-reveal-delay`), so nothing else needs to become a client component.
 *
 * The matching CSS only hides an element while `html[data-motion="on"]` is set,
 * and that attribute is written by a blocking inline script that checks
 * `prefers-reduced-motion` first. So with reduced motion, or with no
 * JavaScript, the attribute is never set and every element is simply visible.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = document.documentElement;
      if (root.dataset.motion !== "on") return;

      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      if (targets.length === 0) return;

      for (const target of targets) {
        gsap.fromTo(
          target,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay: Number(target.dataset.revealDelay ?? 0),
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              // Reveal slightly before the element reaches the fold so the page
              // never looks like it is waiting for the reader to catch up.
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      // Late-loading imagery changes document height; resolve triggers against
      // the settled layout.
      ScrollTrigger.refresh();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
