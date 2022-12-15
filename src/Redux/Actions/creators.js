import {
	FILTER_PRODUCTS,
	SET_POPULARS,
	SET_PRODUCTS,
	ADD_ITEM,
	CLEAN_CART,
	DELETE_ITEM,
	UPDATE_ITEM,
} from "../Types/types";

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

export const delete_item = (item) => ({
	type: DELETE_ITEM,
	payload: item[0],
});

export const update_item = (item) => ({
	type: UPDATE_ITEM,
	payload: item,
});

export const clean_cart = () => ({
	type: CLEAN_CART,
});
