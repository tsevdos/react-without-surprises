import type { CSSProperties } from "react";
import type { Product } from "../data";
import { useRenderFlash } from "../useRenderFlash";

type ProductRowProps = {
  product: Product;
  style: CSSProperties;
  onSelect: (id: number) => void;
};

export default function ProductRow({ product, style, onSelect }: ProductRowProps) {
  const flashRef = useRenderFlash<HTMLLIElement>();

  return (
    <li ref={flashRef} data-id={product.id}>
      <button type="button" className="product-row" style={style} onClick={() => onSelect(product.id)}>
        <span>{product.name}</span>
        <span className="product-meta">
          {product.category} · ${product.price}
        </span>
      </button>
    </li>
  );
}
