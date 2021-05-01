export const wishReducer = (state, action) => {
  console.log(state);
  console.log(action.payLoad);
  console.log(state.wishList);
  // return state;
  switch (action.type) {
    case "WISHLIST":
      const isWishPresent = state.wishList.find(
        (wish) => Number(wish.id) === Number(action.payLoad.id)
      );
      console.log("Is wish present", isWishPresent);
      return {
        ...state,
        wishList: state.wishList.find(
          (wish) => Number(wish.id) === Number(action.payLoad.id)
        )
          ? state.wishList.filter((wish) => wish.id !== action.payLoad.id)
          : state.wishList.concat({
              id: action.payLoad.id,
              name: action.payLoad.name,
              price: action.payLoad.price
            })
      };
    default:
      return { state };
  }
};
