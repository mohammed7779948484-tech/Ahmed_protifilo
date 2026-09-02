"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { navItems } from "./nav-items";

/**
 * Uses the native `<dialog>` element rather than a bespoke overlay: the
 * platform supplies focus trapping, Escape-to-close, inerting of the page
 * behind, and focus restoration, all of which are easy to get subtly wrong by
 * hand and are not worth a dependency.
 */
export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <>
      <button
        type="button"
        className="label -mr-2 px-2 py-3 text-[var(--color-ink)] md:hidden"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => dialogRef.current?.showModal()}
      >
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        onToggle={(event) => setOpen(event.currentTarget.open)}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-[var(--color-page)] p-0 text-[var(--color-ink)] backdrop:bg-[color-mix(in_srgb,var(--color-espresso)_45%,transparent)]"
      >
        <div className="sheet flex h-full flex-col py-5">
          <div className="flex items-center justify-between">
            <Label>Menu</Label>
            <button
              type="button"
              onClick={close}
              className="label -mr-2 px-2 py-3 text-[var(--color-ink)]"
            >
              Close
            </button>
          </div>

          <Rule className="mt-5" />

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-5 border-b border-[var(--color-rule)] py-6"
              >
                <Label>{item.index}</Label>
                <span className="display text-[length:var(--text-display-md)]">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </dialog>
    </>
  );
}
