"use no memo";

import { useCallback, useMemo, useState, type CSSProperties } from "react";
import Header from "../../../components/Header/Header";
import { PRODUCTS, filterProducts } from "../data";
import ProductRow from "./ProductRow";
import SelectedProductCard from "../SelectedProductCard";
import "../App.css";

const rowStyle: CSSProperties = { padding: "0.6rem 0.8rem" };

export default function App() {
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProduct = PRODUCTS.find((product) => product.id === selectedId);

  const visibleProducts = useMemo(() => filterProducts(PRODUCTS, term), [term]);
  const handleSelect = useCallback((id: number) => setSelectedId(id), []);

  const productRows = visibleProducts.map((product) => (
    <ProductRow key={product.id} product={product} style={rowStyle} onSelect={handleSelect} />
  ));

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Memoization — manual solution (React 18, useMemo + useCallback)"
        tooltip="Targeted memoization can avoid repeating expensive work when its inputs have not changed. Apply optimizations where repeated work affects responsiveness."
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
