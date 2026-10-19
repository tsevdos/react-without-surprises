import type { Product } from "./data";

export default function SelectedProductCard({ product }: { product: Product | undefined }) {
  return (
    <>
      <aside className="selected-product-card" aria-live="polite">
        <p className="selected-product-label">Selected product</p>
        {product ? (
          <>
            <h2>{product.name}</h2>
            <dl>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>${product.price}</dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="selected-product-empty">No product selected</p>
        )}
      </aside>
      {product && (
        <style>{`.product-list li[data-id="${product.id}"] .product-row {
  border-color: var(--color-accent-primary);
  box-shadow: inset 4px 0 0 var(--color-accent-primary);
}`}</style>
      )}
    </>
  );
}
