import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/productList";
// import { Header } from "./header";

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <ProductList /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}
