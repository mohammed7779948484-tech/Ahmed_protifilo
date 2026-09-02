import Image from "next/image";
import type { MediaAsset } from "@/content/types";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/Label";

interface PlateProps {
  media: MediaAsset;
  /** Responsive sizes hint; always pass one for anything not full-bleed. */
  sizes: string;
  /** Set on the LCP image only. */
  preload?: boolean;
  /** Crop to a fixed ratio instead of honouring the asset's own proportions. */
  aspect?: string;
  className?: string;
  imageClassName?: string;
}

/**
 * A single plate of project media.
 *
 * Line drawings sit *on* the ivory field with room to breathe and are never
 * cropped — cropping an elevation loses information. Renders and photographs
 * may be cropped to a ratio, but keep `object-cover` so nothing is stretched.
 */
export function Plate({
  media,
  sizes,
  preload = false,
  aspect,
  className,
  imageClassName,
}: PlateProps) {
  const isLinework = media.kind === "drawing" || media.kind === "diagram";

  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isLinework
            ? "bg-[var(--color-page)] p-2 md:p-4"
            : "bg-[var(--color-panel)]",
        )}
        style={aspect ? { aspectRatio: aspect } : undefined}
      >
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          quality={82}
          className={cn(
            aspect
              ? "absolute inset-0 h-full w-full object-cover"
              : "h-auto w-full",
            isLinework && "mix-blend-multiply",
            imageClassName,
          )}
        />
      </div>

      {media.caption && (
        <figcaption className="mt-3 flex items-baseline gap-3 border-t border-[var(--color-rule)] pt-3">
          <Label className="shrink-0 text-[var(--color-terracotta)]">
            Fig.
          </Label>
          <span className="text-[0.8125rem] leading-relaxed text-[var(--color-ink-muted)]">
            {media.caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
