import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./UserCart.css";

type ProductName = "apple" | "banana" | "orange";

const UserCart = () => {
  const [products, setProducts] = useState({ apples: 0, bananas: 0, oranges: 0 });
  const [totalProducts, setTotalProducts] = useState(0);
  const [showApples, setShowApples] = useState(false);
  const [showBananas, setShowBananas] = useState(false);
  const [showOranges, setShowOranges] = useState(false);

  const addToCart = (product: ProductName) => {
    switch (product) {
      case "apple": {
        setProducts({ ...products, apples: products.apples + 1 });
        break;
      }
      case "banana": {
        setProducts({ ...products, bananas: products.bananas + 1 });
        break;
      }
      case "orange": {
        setProducts({ ...products, oranges: products.oranges + 1 });
        break;
      }
    }
  };

  useEffect(() => {
    const total = Object.values(products).reduce((acc, curr) => acc + curr, 0);
    setTotalProducts(total);
  }, [products]);

  useEffect(() => {
    setShowApples(products.apples > 0);
  }, [products]);

  useEffect(() => {
    setShowBananas(products.bananas > 0);
  }, [products]);

  useEffect(() => {
    setShowOranges(products.oranges > 0);
  }, [products]);

  return (
    <>
      <Header
        sectionName="State Management Surprises"
        title="User Cart — exercise 1"
        tooltip="The application is working as expected, but with many unnecessary re-renders, state updates and poor code quality. Can you simplify it?"
      />
      <div className="user-cart-container">
        <div className="cart-layout">
          <div className="cart-section">
            <h2>Products</h2>
            <ul>
              <li>
                <button className="product-button" onClick={() => addToCart("apple")}>
                  🍎 apple
                </button>
              </li>
              <li>
                <button className="product-button" onClick={() => addToCart("banana")}>
                  🍌 banana
                </button>
              </li>
              <li>
                <button className="product-button" onClick={() => addToCart("orange")}>
                  🍊 orange
                </button>
              </li>
            </ul>
          </div>
          <div className="cart-section">
            <h2>Cart ({totalProducts})</h2>
            <ul>
              {showApples && <li className="cart-item">{products.apples} x 🍎 apple</li>}
              {showBananas && <li className="cart-item">{products.bananas} x 🍌 banana</li>}
              {showOranges && <li className="cart-item">{products.oranges} x 🍊 orange</li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
