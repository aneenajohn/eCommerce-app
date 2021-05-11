import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { useEffect } from "react";
import { BACKEND_URL } from "../backendUrl";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const itemsInCart = [];
  const [state, dispatch] = useReducer(cartReducer, { itemsInCart });

  // useEffect(() => {
  //   (async function () {
  //     const { data } = await axios.get(`${BACKEND_URL}cart`);
  //     console.log("cart data", data);
  //     if (data.success) {
  //       data.cartItems.map((item) =>
  //         dispatch({ type: "ADD_TO_CART", payLoad: item })
  //       );
  //     }
  //   })();
  // }, []);
  return (
    <CartContext.Provider
      value={(cartReducer, { itemsInCart: state.itemsInCart, dispatch })}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
