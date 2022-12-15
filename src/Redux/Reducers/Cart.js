import { sortCart } from "../Actions/utils";
import { ADD_ITEM, CLEAN_CART, DELETE_ITEM, UPDATE_ITEM } from "../Types/types";

const saveLocalStorage = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReducer = (state = cart, action) => {
	const { payload, type } = action;
	switch (type) {
		case ADD_ITEM:
			const item = { ...payload, quantity: 1 };
			state = [...state, item].sort(sortCart);
			saveLocalStorage(state);
			return state;
		case DELETE_ITEM:
			return state;
		case UPDATE_ITEM:
			return state;
		case CLEAN_CART:
			return state;
		default:
			return state;
	}
};
