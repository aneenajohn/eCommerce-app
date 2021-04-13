import { useState, useEffect } from "react";
import axios from "axios";
export const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
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
            <div class="card card--display">
              <div class="card__thumbnail">
                <img src={data.image} class="card__img" alt="cardImg" />
              </div>
              <div class="card__desc">
                <h1>
                  <strong>{data.name}</strong>
                </h1>
                <div className="star-count">
                  <p class="star-count__star">{data.ratings}</p>
                  <div class="rating">
                    <div class="rating__stars">
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <h2>
                  <strong>{data.price}</strong>
                </h2>
                <p class="card__details">{data.offer}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};
