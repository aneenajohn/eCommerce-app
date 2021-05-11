import { useCart } from "./cartContext";
import { Header } from "../header";
import { useEffect } from "react";
import { BACKEND_URL } from "../backendUrl";
import axios from "axios";

export const Cart = () => {
  const { itemsInCart, dispatch: cartDispatch } = useCart();

  const totalReducer = () =>
    itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const cartUpdate = async ({ type, payLoad }) => {
    // console.log(type, payLoad);
    // console.log(typeof payLoad);
    const _id = payLoad;
    const itemFound = itemsInCart.find((item) => item._id === _id);
    // console.log(itemFound);
    let updatedQuantity;
    if (type === "INCREMENT") {
      updatedQuantity = itemFound.quantity + 1;
    } else {
      updatedQuantity = itemFound.quantity - 1;
    }

    const { data } = await axios.post(`${BACKEND_URL}cart/${_id}`, {
      _id: _id,
      quantity: updatedQuantity
    });
    payLoad = {
      _id: _id,
      quantity: updatedQuantity
    };
    console.log("passing load is", payLoad);
    if (data.success) {
      cartDispatch({ type: "UPDATE", payLoad: payLoad });
    }
    console.log(data);
  };

  return (
    <section className="cart-container">
      <div>
        <Header />
        <h1 class="heading center fs-h1">My Cart</h1>
        {console.log("items in cart", { itemsInCart })}
        <div className="cart-total center">
          {itemsInCart.length !== 0 && (
            <div className="bill">
              <div className="para total">
                <b>Total:</b> {""}
                {""}
                {totalReducer()}
              </div>
              <div className="para">
                <b>Discount 20%:</b>
                {""}
                {""}
                {0.2 * totalReducer()}
              </div>
              <div className="para">
                <b>Amount to be paid:</b>
                {""}
                {""}
                {totalReducer() - 0.2 * totalReducer()}
              </div>
              <button className="btn btn--primary btn--buy-now">
                Order Now
              </button>
            </div>
          )}
        </div>
        <div className="container__main">
          <div className="card-container">
            {itemsInCart.length === 0 ? (
              <p className="para--lead">Ah! Looks like your Cart is empty</p>
            ) : (
              itemsInCart.map(
                ({
                  _id,
                  quantity,
                  name,
                  imageUrl,
                  price,
                  inStock,
                  fastDelivery,
                  ratings,
                  offer
                }) => (
                  <div className="card card--display" Key={_id}>
                    <div className="card__thumbnail">
                      <img src={imageUrl} className="card__img" alt="cardImg" />
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
                      <i
                        class="fa fa-plus"
                        aria-hidden="true"
                        onClick={
                          () =>
                            // cartDispatch({ type: "INCREMENT", payLoad: _id })
                            cartUpdate({ type: "INCREMENT", payLoad: _id })
                          // cartUpdate("INCREMENT",_id)
                        }
                      ></i>
                      <div className="card__quantity">{quantity}</div>
                      <i
                        class="fa fa-minus"
                        aria-hidden="true"
                        onClick={() =>
                          cartUpdate({ type: "DECREMENT", payLoad: _id })
                        }
                      ></i>
                      <button
                        className="btn btn--primary  btn--trash"
                        onClick={() =>
                          cartDispatch({ type: "REMOVE", payLoad: _id })
                        }
                      >
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
