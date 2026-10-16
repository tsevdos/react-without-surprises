type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const CATEGORIES = ["Audio", "Displays", "Peripherals", "Storage"];

const PRODUCTS: Product[] = Array.from({ length: 240 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    name: `Product ${String(id).padStart(3, "0")}`,
    category: CATEGORIES[index % CATEGORIES.length],
    price: 20 + ((index * 37) % 480),
  };
});

function simulateRenderCost() {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {}
}

function ProductRow({ product, query }: { product: Product; query: string }) {
  simulateRenderCost();

  const matchStart = product.name.toLowerCase().indexOf(query.toLowerCase());
  const matchEnd = matchStart + query.length;

  return (
    <li className="deferred-product">
      <span>
        {matchStart >= 0 ? (
          <>
            {product.name.slice(0, matchStart)}
            <mark>{product.name.slice(matchStart, matchEnd)}</mark>
            {product.name.slice(matchEnd)}
          </>
        ) : (
          product.name
        )}
      </span>
      <span className="deferred-product-meta">
        {product.category} · ${product.price}
      </span>
    </li>
  );
}

export default function ProductResults({ query }: { query: string }) {
  const normalizedQuery = query.trim().toLowerCase();
  const products = normalizedQuery
    ? PRODUCTS.filter((product) => product.name.toLowerCase().includes(normalizedQuery))
    : [];

  return (
    <section className="deferred-results" aria-label="Product search results">
      <p className="deferred-results-count">
        {normalizedQuery ? `${products.length} products` : "Type to search 240 products"}
      </p>
      {Boolean(products.length) && (
        <ul className="deferred-product-list">
          {products.map((product) => (
            <ProductRow key={product.id} product={product} query={normalizedQuery} />
          ))}
        </ul>
      )}
      {normalizedQuery && products.length === 0 && <p>No matching products.</p>}
    </section>
  );
}
