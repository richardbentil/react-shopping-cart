export const ordersReducer = (state = null, action) => {
  switch (action.type) {
    case "ORDERS":
      return action.payload;
    default:
      return state;
  }
};
