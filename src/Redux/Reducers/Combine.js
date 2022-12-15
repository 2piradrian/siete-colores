import { combineReducers } from "redux";
import { cartReducer } from "./Cart";
import { popularsReducer } from "./Populars";
import { productsReducer } from "./Products";

const reducer = combineReducers({
	products: productsReducer,
	populars: popularsReducer,
	cart: cartReducer,
});

export default reducer;
