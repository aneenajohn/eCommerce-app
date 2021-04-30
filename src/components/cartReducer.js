export const cartReducer = (state, action) => {
  console.log(action.type);
  console.log(action.payLoad);
  console.log({ state });
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.find(
          (item) => item.id === action.payLoad.id
        )
          ? state.itemsInCart.filter((item) => item.id !== action.payLoad.id)
          : state.itemsInCart.concat({
              id: action.payLoad.id,
              name: action.payLoad.name,
              image: action.payLoad.image,
              price: action.payLoad.price,
              inStock: action.payLoad.inStock,
              fastDelivery: action.payLoad.fastDelivery,
              ratings: action.payLoad.ratings,
              offer: action.payLoad.offer
            })
      };
    default:
      return state;
  }
};

// id: "bb463b8b-b76c-4f6a-9726-65ab5730b69b"
// name: "Generic Concrete Table"
// image: "http://placeimg.com/640/480/business"
// price: "84.00"
// inStock: true
// fastDelivery: true
// ratings: 3
// offer: "Best Seller"
