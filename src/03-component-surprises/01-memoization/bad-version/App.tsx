"use no memo"; // Directive for the bad example

import { useState } from "react";
import Header from "../../../components/Header/Header";
import { PRODUCTS, filterProducts } from "../data";
import ProductRow from "./ProductRow";
import SelectedProductCard from "../SelectedProductCard";
import "../App.css";

export default function App() {
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProduct = PRODUCTS.find((product) => product.id === selectedId);

  // Recomputed on every render, even when only `count` changed
  const visibleProducts = filterProducts(PRODUCTS, term);

  // New object and function on every render, so React.memo on ProductRow never skips
  const rowStyle = { padding: "0.6rem 0.8rem" };
  const handleSelect = (id: number) => setSelectedId(id);

  const productRows = visibleProducts.map((product) => (
    <ProductRow key={product.id} product={product} style={rowStyle} onSelect={handleSelect} />
  ));

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Memoization — bad example (React 18 and less, no compiler)"
        tooltip="ProductRow is wrapped in React.memo, but the parent passes new props on every render. Click the counter or select a product and watch every row flash. Each click also freezes the UI because the filter reruns."
      />

      <div className="memo-demo">
        <div className="memo-toolbar">
          <input
            type="search"
            placeholder="Filter products..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="button" onClick={() => setCount(count + 1)}>
            Unrelated counter: {count}
          </button>
        </div>
        <div className="memo-workspace">
          <ul className="product-list">{productRows}</ul>
          <SelectedProductCard product={selectedProduct} />
        </div>
      </div>
    </>
  );
}
