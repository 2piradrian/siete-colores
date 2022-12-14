import { ADD_ITEM, CLEAN_CART, DELETE_ITEM, UPDATE_ITEM } from "../Types/types";

const cartReducer = (state, action) => {
	const { type } = action;
	switch (type) {
		case ADD_ITEM:
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
