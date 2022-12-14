import { FILTER_PRODUCTS, SET_POPULARS, SET_PRODUCTS } from "../Types/types";

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
