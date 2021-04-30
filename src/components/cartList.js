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
        itemsInCart.map(
          ({
            id,
            name,
            image,
            price,
            inStock,
            fastDelivery,
            ratings,
            offer
          }) => (
            <div className="card card--display">
              <div className="card__thumbnail">
                <img src={image} className="card__img" alt="cardImg" />
              </div>
              <i className="fa fa-heart wish-icon" aria-hidden="true"></i>
              <div className="card__desc">
                <h1>
                  <strong>{name}</strong>
                </h1>
                <div className="star-count">
                  <p className="star-count__star">{ratings}</p>
                  <div class="rating">
                    <div className="rating__stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <h2>
                  <strong>{price}</strong>
                </h2>
                <p className="card__details">{offer}</p>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
