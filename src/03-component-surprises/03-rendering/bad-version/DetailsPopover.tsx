import { useEffect, useRef, useState } from "react";
import DetailsPopoverView from "../DetailsPopoverView";
import { measurePopover, type PopoverPosition } from "../lib";

export default function BadDetailsPopover() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<PopoverPosition>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const timeoutId = window.setTimeout(() => {
      setPosition(measurePopover(triggerRef.current, panelRef.current));
    }, 250);

    return () => {
      window.clearTimeout(timeoutId);
    };
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
