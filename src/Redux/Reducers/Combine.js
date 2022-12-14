import { combineReducers } from "redux";
import { popularsReducer } from "./Populars";
import { productsReducer } from "./Products";

const reducer = combineReducers({
	products: productsReducer,
	populars: popularsReducer,
});

export default reducer;
