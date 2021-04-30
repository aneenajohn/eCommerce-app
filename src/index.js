import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import App from "./App";
import { CartProvider } from "./components/cartContext";

setupMockServer();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
