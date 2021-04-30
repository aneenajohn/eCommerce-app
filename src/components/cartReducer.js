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
              price: action.payLoad.price
            })
      };
    default:
      return state;
  }
};
