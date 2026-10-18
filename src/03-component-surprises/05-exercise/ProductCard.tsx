import type { ReactNode } from "react";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function ProductCard({ children }: { children: ReactNode }) {
  return <article className="product-card">{children}</article>;
}

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  return <img className="product-card-image" src={src} alt={alt} width={400} height={280} />;
}

export function ProductTitle({ children }: { children: ReactNode }) {
  return <h2 className="product-card-title">{children}</h2>;
}

type ProductQuantityProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export function ProductQuantity({ quantity, onQuantityChange }: ProductQuantityProps) {
  return (
    <div className="product-card-quantity">
      <span>Quantity</span>
      <div className="product-card-stepper">
        <button
          type="button"
          aria-label="Decrease quantity"
          title="Decrease quantity"
          disabled={quantity <= 1}
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <output aria-label="Quantity" aria-live="polite">
          {quantity}
        </output>
        <button
          type="button"
          aria-label="Increase quantity"
          title="Increase quantity"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

type ProductTotalProps = {
  unitPrice: number;
  quantity: number;
};

export function ProductTotal({ unitPrice, quantity }: ProductTotalProps) {
  return (
    <div className="product-card-total">
      <span>Total</span>
      <strong>{currency.format(unitPrice * quantity)}</strong>
    </div>
  );
}

type ProductBuyButtonProps = {
  quantity: number;
  onBuy: (quantity: number) => void;
};

export function ProductBuyButton({ quantity, onBuy }: ProductBuyButtonProps) {
  return (
    <button type="button" className="product-card-buy" onClick={() => onBuy(quantity)}>
      Add to order
    </button>
  );
}
