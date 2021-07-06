import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { ordersReducer } from "./ordersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  itemsInCart: cartReducer,
  itemsInOrder: ordersReducer
});

export default rootReducer;
