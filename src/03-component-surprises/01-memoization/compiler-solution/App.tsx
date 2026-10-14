import { useState } from "react";
import Header from "../../../components/Header/Header";
import { PRODUCTS, filterProducts } from "../data";
import ProductRow from "./ProductRow";
import SelectedRowStyle from "../SelectedRowStyle";
import "../App.css";

export default function App() {
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProduct = PRODUCTS.find((product) => product.id === selectedId);

  const visibleProducts = filterProducts(PRODUCTS, term);

  const rowStyle = { padding: "0.6rem 0.8rem" };
  const handleSelect = (id: number) => setSelectedId(id);

  const productRows = visibleProducts.map((product) => (
    <ProductRow key={product.id} product={product} style={rowStyle} onSelect={handleSelect} />
  ));

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Memoization — React Compiler solution (React 19)"
        tooltip="No directive, no React.memo, no useMemo, no useCallback. The compiler caches the filter, the style, the callback and the rendered rows, so neither the counter nor selecting a product re-renders any row."
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
        <p className="memo-selected">Selected product: {selectedProduct?.name ?? "none"}</p>
        <SelectedRowStyle id={selectedId} />
        <ul className="product-list">{productRows}</ul>
      </div>
    </>
  );
}
