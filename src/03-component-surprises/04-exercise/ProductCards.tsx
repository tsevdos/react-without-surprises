import { useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard, {
  ProductImage,
  ProductTitle,
  ProductQuantity,
  ProductTotal,
  ProductBuyButton,
} from "./ProductCard";
import "./ProductCards.css";

// Exercise: the cards work, but the page manually coordinates every card part.
// 1. Introduce ProductCard.Image, .Title, .Quantity, .Total, and .BuyButton.
// 2. Move quantity state into each ProductCard; start at 1 and never go below 1.
// 3. Share quantity, unitPrice, and onBuy through card-scoped context.
// 4. Remove coordination props from Quantity, Total, and BuyButton at these call sites.
// Target: <ProductCard unitPrice={89} onBuy={handleBuy}>...</ProductCard>.
// Keep the markup, styling, and controls; do not inspect or clone children.
// Verify: changing one card leaves the other unchanged, totals update, and buying
// submits the current quantity. Reordering parts must not break coordination.
export default function ProductCards() {
  const [headphonesQuantity, setHeadphonesQuantity] = useState(1);
  const [cameraQuantity, setCameraQuantity] = useState(1);
  const [lastPurchase, setLastPurchase] = useState("");

  return (
    <>
      <Header sectionName="Component Surprises" title="Product cards — exercise 4" />
      <div className="product-cards-exercise">
        <div className="product-cards-grid">
          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
              alt="Black over-ear headphones on a yellow background"
            />
            <ProductTitle>Studio headphones</ProductTitle>
            <ProductQuantity quantity={headphonesQuantity} onQuantityChange={setHeadphonesQuantity} />
            <ProductTotal unitPrice={89} quantity={headphonesQuantity} />
            <ProductBuyButton
              quantity={headphonesQuantity}
              onBuy={(quantity) => setLastPurchase(`Studio headphones: ${quantity} added to your order.`)}
            />
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
              alt="Black camera with an attached lens"
            />
            <ProductTitle>Everyday camera</ProductTitle>
            <ProductQuantity quantity={cameraQuantity} onQuantityChange={setCameraQuantity} />
            <ProductTotal unitPrice={249} quantity={cameraQuantity} />
            <ProductBuyButton
              quantity={cameraQuantity}
              onBuy={(quantity) => setLastPurchase(`Everyday camera: ${quantity} added to your order.`)}
            />
          </ProductCard>
        </div>
        <p className="product-cards-status" role="status">
          {lastPurchase}
        </p>
      </div>
    </>
  );
}
