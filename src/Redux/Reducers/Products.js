import { divideProducts, filterProducts, setPrices } from "../Actions/utils";
import { FILTER_PRODUCTS, SET_PRODUCTS } from "../Types/types";

export const productsReducer = (state = [], action) => {
	const { payload, type } = action;
	switch (type) {
		case FILTER_PRODUCTS:
			const filterData = Object.fromEntries(payload.formData);
			state = setPrices(payload.data);
			state = filterProducts(state, filterData);
			state = divideProducts(state, 6);
			return state;
		case SET_PRODUCTS:
			state = setPrices(payload);
			state = divideProducts(state, 6);
			return state;
		default:
			return state;
	}
};
