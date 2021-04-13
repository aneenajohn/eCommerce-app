import "./styles.css";
import { ProductList } from "./components/ProductList/productList";
import { CartList } from "./components/cartList";
import { Header } from "./header";
import { useRoute } from "./components/RouteContext";
export default function App() {
  const { route } = useRoute();
  return (
    <div className="App">
      <h1 className="app-header">
        <Header />
      </h1>
      <div className="app-body">
        {route === "products" && <ProductList />}
        {route === "cart" && <CartList />}
      </div>
    </div>
  );
}
