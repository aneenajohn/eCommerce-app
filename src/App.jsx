import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/productList";
import { Cart } from "./components/cartList";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
