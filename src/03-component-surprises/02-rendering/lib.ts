export type PopoverPosition = {
  top: number;
  left: number;
};

export function measurePopover(trigger: HTMLButtonElement | null, panel: HTMLDivElement | null): PopoverPosition {
  if (!trigger || !panel) return { top: 0, left: 0 };

  const triggerRect = trigger.getBoundingClientRect();
  const panelHeight = panel.getBoundingClientRect().height;
  const top =
    triggerRect.bottom + panelHeight > window.innerHeight ? triggerRect.top - panelHeight - 8 : triggerRect.bottom + 8;

  return {
    top: Math.max(8, top),
    left: Math.max(8, Math.min(triggerRect.left, window.innerWidth - 280)),
  };
}
