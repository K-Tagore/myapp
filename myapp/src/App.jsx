import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import ProductCard from "./components/ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Camera",
    price: 4999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find((item) => item.id === product.id);

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar cartCount={totalItems} />

      <section className="hero">
        <h1>Discover Amazing Products</h1>
        <p>Shop your favourite products at the best prices.</p>
        <button onClick={() => document.getElementById("products").scrollIntoView()}>
          Shop Now
        </button>
      </section>

      <section className="products-section" id="products">
        <h2>Our Products</h2>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="product-container">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="cart-section">
        <h2>Shopping Cart 🛒</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <span>{item.name}</span>
                <span>₹{item.price} × {item.quantity}</span>
              </div>
            ))}

            <h3>
              Total: ₹
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </h3>
          </>
        )}
      </section>

      <footer>
        <p>© 2026 MyShop. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
