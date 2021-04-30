import "./styles.css";
import { ProductList } from "./components/ProductList/productList";
import { Header } from "./header";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">
        <Header />
      </h1>
      <div className="app-body">
        <ProductList />
      </div>
    </div>
  );
}
