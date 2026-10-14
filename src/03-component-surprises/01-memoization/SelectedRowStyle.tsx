// Selection is styled through CSS so row props stay stable and memoized rows never re-render
export default function SelectedRowStyle({ id }: { id: number | null }) {
  if (id === null) return null;

  return (
    <style>{`.product-list li[data-id="${id}"] .product-row {
  border-color: var(--color-accent-primary);
  box-shadow: inset 4px 0 0 var(--color-accent-primary);
}`}</style>
  );
}
