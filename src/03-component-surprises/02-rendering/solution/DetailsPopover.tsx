import { useLayoutEffect, useRef, useState } from "react";
import DetailsPopoverView from "../DetailsPopoverView";
import { measurePopover, type PopoverPosition } from "../lib";

export default function SolutionDetailsPopover() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<PopoverPosition>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open) setPosition(measurePopover(triggerRef.current, panelRef.current));
  }, [open]);

  return (
    <DetailsPopoverView
      open={open}
      position={position}
      onToggle={() => setOpen((current) => !current)}
      onClose={() => setOpen(false)}
      triggerRef={triggerRef}
      panelRef={panelRef}
    />
  );
}
