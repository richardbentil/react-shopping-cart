export const cartReducer = (state = null, action) => {
  switch (action.type) {
    case "ITEMS_IN_CART":
      return action.payload;
    default:
      return state;
  }
};
