import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../cartContext";

export default function ProductList() {
  const [productsData, setProductsData] = useState([]);
  const { dispatch: cartDispatch } = useCart();
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { products: dataFromServer }
        } = await axios.get("/api/products");
        console.log(dataFromServer);
        setProductsData(dataFromServer);
      } catch (err) {
        console.error(`Error happened ${err}`);
      }
    })();
  }, []);

  return (
    <div className="card-container">
      {productsData ? (
        productsData.map((data) => {
          return (
            <div className="card card--display">
              <div className="card__thumbnail">
                <img src={data.image} className="card__img" alt="cardImg" />
              </div>
              <i className="fa fa-heart wish-icon" aria-hidden="true"></i>
              <div className="card__desc">
                <h1>
                  <strong>{data.name}</strong>
                </h1>
                <div className="star-count">
                  <p className="star-count__star">{data.ratings}</p>
                  <div class="rating">
                    <div className="rating__stars">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <h2>
                  <strong>{data.price}</strong>
                </h2>
                <p className="card__details">{data.offer}</p>
                <button
                  className="btn btn--primary btn--cart"
                  onClick={() =>
                    cartDispatch({ type: "ADD_TO_CART", payLoad: data })
                  }
                >
                  Add to cart {"   "}
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
