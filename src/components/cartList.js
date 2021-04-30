import { useCart } from "./cartContext";

export const Cart = () => {
  const { itemsInCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {console.log({ itemsInCart })}
      {itemsInCart.length === 0 ? (
        <div>Ah! Looks like your Cart is empty</div>
      ) : (
        itemsInCart.map(({ id, name, price }) => (
          <ul key={id}>
            <li>{name}</li>
            <li>{price}</li>
          </ul>
        ))
      )}
    </div>
  );
};
