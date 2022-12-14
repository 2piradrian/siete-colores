import { divideProducts, filterProducts, setPrices } from "../Actions/utils";
import { FILTER_PRODUCTS, SET_PRODUCTS } from "../Types/types";

export const productsReducer = (state = [], action) => {
	const { payload, type } = action;
	switch (type) {
		case FILTER_PRODUCTS:
			const filterData = Object.fromEntries(payload.formData);
			state = setPrices(payload);
			state = filterProducts(payload.data, filterData);
			state = divideProducts(state, 6);
			console.log(state);
			return state;
		case SET_PRODUCTS:
			state = setPrices(payload);
			state = divideProducts(state, 6);
			return state;
		default:
			return state;
	}
};
