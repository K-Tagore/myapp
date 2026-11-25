function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyShop 🛍️</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#cart">Cart 🛒 ({cartCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;