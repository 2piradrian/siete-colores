import { filterPopulars, setPrices } from "../Actions/utils";
import { SET_POPULARS } from "../Types/types";

export const popularsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_POPULARS:
			state = setPrices(payload);
			state = filterPopulars(state);
			return state;

		default:
			return state;
	}
};
