import { FILTER_PRODUCTS, SET_POPULARS, SET_PRODUCTS, ADD_ITEM } from "../Types/types";

export const set_populars = (data) => ({
	type: SET_POPULARS,
	payload: data,
});

export const set_products = (data) => ({
	type: SET_PRODUCTS,
	payload: data,
});

export const filter_products = (data, formData) => ({
	type: FILTER_PRODUCTS,
	payload: { data, formData },
});

export const add_item = (item) => ({
	type: ADD_ITEM,
	payload: item[0],
});
