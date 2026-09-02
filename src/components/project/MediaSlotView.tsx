import { Plate } from "@/components/media/Plate";
import { PendingPlate } from "@/components/media/PendingPlate";
import { isPendingMedia, type MediaSlot } from "@/content/types";

interface MediaSlotViewProps {
  slot: MediaSlot;
  sizes: string;
  preload?: boolean;
  aspect?: string;
  fill?: boolean;
  className?: string;
}

/**
 * Renders whichever of the two plate treatments a slot calls for, so section
 * components never branch on extraction state themselves.
 */
export function MediaSlotView({
  slot,
  sizes,
  preload,
  aspect,
  fill,
  className,
}: MediaSlotViewProps) {
  if (isPendingMedia(slot)) {
    return (
      <PendingPlate
        note={slot.note}
        sourcePage={slot.sourcePage}
        aspect={aspect ?? slot.aspect}
        className={className}
      />
    );
  }

  return (
    <Plate
      media={slot}
      sizes={sizes}
      preload={preload}
      aspect={aspect}
      fill={fill}
      className={className}
    />
  );
}
