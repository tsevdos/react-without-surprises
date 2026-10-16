import type { RefObject } from "react";
import type { PopoverPosition } from "./lib";

type DetailsPopoverViewProps = {
  open: boolean;
  position: PopoverPosition;
  onToggle: () => void;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  panelRef: RefObject<HTMLDivElement | null>;
};

export default function DetailsPopoverView({
  open,
  position,
  onToggle,
  onClose,
  triggerRef,
  panelRef,
}: DetailsPopoverViewProps) {
  return (
    <div className="priority-details">
      <button
        ref={triggerRef}
        type="button"
        className="priority-details-trigger"
        aria-expanded={open}
        aria-controls="priority-details-popover"
        onClick={onToggle}
      >
        Details
      </button>
      {open && (
        <div
          ref={panelRef}
          id="priority-details-popover"
          className="priority-popover"
          role="dialog"
          aria-label="Product catalog details"
          style={{ top: position.top, left: position.left }}
        >
          <div className="priority-popover-heading">
            <strong>Catalog details</strong>
            <button type="button" aria-label="Close details" onClick={onClose}>
              ×
            </button>
          </div>
          <p>The panel is anchored to the Details button.</p>
        </div>
      )}
    </div>
  );
}
