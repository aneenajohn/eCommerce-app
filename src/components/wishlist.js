import { useWishList } from "./wishContext";
import { Header } from "./header";
import { useState } from "react";

export const WishList = () => {
  const { wishList, dispatch: wishDispatch } = useWishList();
  const [isWishSelected, setWishSelected] = useState(false);

  const wishToggle = () => setWishSelected(!isWishSelected);
  return (
    <div>
      <Header />
      <h1>WishList</h1>
      {wishList.length === 0 ? (
        <p className="para--lead">
          Ahh..Looks like you didn't any items in your wishList{" "}
        </p>
      ) : (
        wishList.map(
          ({
            id,
            quantity,
            name,
            image,
            price,
            inStock,
            fastDelivery,
            ratings,
            offer
          }) => (
            <div className="card card--display" Key={id}>
              <div className="card__thumbnail">
                <img src={image} className="card__img" alt="cardImg" />
              </div>
              <i
                className={
                  isWishSelected
                    ? "fa fa-heart wish-icon--selected"
                    : "fa fa-heart wish-icon"
                }
                aria-hidden="true"
              ></i>
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
                <button
                  className="btn btn--primary  btn--trash"
                  onClick={() => wishDispatch({ type: "REMOVE", payLoad: id })}
                >
                  <i
                    class="fa fa-trash-o"
                    aria-hidden="true"
                    onClick={() => wishToggle()}
                  ></i>
                  Remove
                </button>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
