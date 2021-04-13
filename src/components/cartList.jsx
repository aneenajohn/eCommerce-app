import { useCart } from "./CartContext/cartContext";

export const CartList = () => {
  const { cartItems } = useCart();
  console.log({ cartItems });
  return <h1>Cart</h1>;
};
