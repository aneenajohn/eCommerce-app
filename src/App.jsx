import "./styles.css";
import { ProductList } from "./components/ProductList/productList";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">shoppinggg</h1>
      <div className="app-body">
        <ProductList />
      </div>
    </div>
  );
}
