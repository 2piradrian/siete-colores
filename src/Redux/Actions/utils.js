import { prices } from "../../db/queries";

// UTILS //

const filterByName = (data, filterData) => {
	data = data.filter((product) =>
		product.name.toLowerCase().includes(filterData.name.toLowerCase())
	);
	console.log(data);
	return data;
};

const filterByType = (data, filterData) => {
	data = data.filter((product) => product.type.toLowerCase() === filterData.type.toLowerCase());
	return data;
};

const sortLowerPrice = (a, b) => {
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
};

const sortHigherPrice = (b, a) => {
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
};

// EXPORTS //
export const setPrices = (data) => {
	data = data.map((product) => ({ ...product, price: prices[product.price] }));
	return data;
};

export const filterProducts = (data, filterData) => {
	if (filterData.name.length !== 0) {
		data = filterByName(data, filterData);
	}
	if (filterData.type !== "Categorias" && filterData.type !== "Todos") {
		data = filterByType(data, filterData);
	}
	if (filterData.order === "Menor Precio") {
		data = data.sort((a, b) => sortLowerPrice(a, b));
	}
	if (filterData.order === "Mayor Precio") {
		data = data.sort((a, b) => sortHigherPrice(a, b));
	}
	return data;
};

export const filterPopulars = (data) => {
	data = data.filter((product) => product.popular);
	return data;
};

export const divideProducts = (data, size) => {
	let dividedProducts = [];
	for (let i = 0; i < data.length; i += size) {
		dividedProducts.push(data.slice(i, i + size));
	}
	return dividedProducts;
};
