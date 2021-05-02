import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/productList";
import { Cart } from "./components/cartList";
import { WishList } from "./components/wishlist";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish-list" element={<WishList />} />
      </Routes>
    </div>
  );
}
