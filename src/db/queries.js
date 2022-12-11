import axios from "axios";

export const prices = {
	PRECIO1: 280,
	PRECIO2: 260,
	PRECIO3: 200,
	PRECIO4: 220,
	PRECIO5: 370,
	PRECIO6: 500,
	PRECIO7: 850,
	PRECIO8: 210,
	PRECIO9: 310,
	PRECIO10: 510,
	PRECIO11: 400,
	PRECIO12: 1200,
	PRECIO13: 1400,
	PRECIO14: 710,
	PRECIO15: 380,
	PRECIO16: 910,
	PRECIO17: 4800,
};

const productsAPI = axios.create({
	baseURL: "./db/db.json",
});

export const getProducts = async () => {
	const res = await productsAPI.get("");
	return res.data;
};

export const filterProducts = (data, filterData) => {
	if (filterData.name.length !== 0) {
		data = data.filter((product) =>
			product.name.toLowerCase().includes(filterData.name.toLowerCase())
		);
	}
	if (filterData.type !== "Categorias" && filterData.type !== "Todos") {
		data = data.filter(
			(product) =>
				product.type.toLowerCase() === filterData.type.toLowerCase()
		);
	}
	if (filterData.order !== "Ordenar por") {
	}

	console.log(data);
	console.log(filterData);
	return data;
};
