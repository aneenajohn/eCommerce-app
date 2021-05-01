import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import App from "./App";
import { CartProvider } from "./components/cartContext";
import { BrowserRouter as Router } from "react-router-dom";
import { WishProvider } from "./components/wishContext";

setupMockServer();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <WishProvider>
          <App />
        </WishProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
  rootElement
);
