import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import App from "./App";
import { CartProvider } from "./components/CartContext/cartContext";
import { RouteProvider } from "./components/RouteContext";

setupMockServer();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
