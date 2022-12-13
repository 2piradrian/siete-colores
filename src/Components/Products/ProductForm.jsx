import React from "react";
import { Input } from "../General/Global";
import { Filter, Option, SearchForm, Selector, SelectorContainer } from "./ProductsStyles";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Product } from "../../Context/Product";

import { filterProducts, getProducts, setPrices, transformData } from "../../db/queries";

function ProductForm() {
	const { setProducts } = useContext(Product);

	const onSuccess = (data) => {
		if (data === undefined) {
			refetch();
			return;
		}
		setProducts(transformData(data, 6));
	};

	const onError = () => {
		refetch();
	};

	const { data, refetch } = useQuery("products", getProducts, {
		select: (data) => setPrices(data),
		onSuccess,
		onError,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const productData = Object.fromEntries(formData);
		const newData = filterProducts(data, productData);
		setProducts(transformData(newData, 6));
	};

	return (
		<SearchForm onSubmit={handleSubmit}>
			<Input type="text" placeholder="Buscar" name="name" />
			<SelectorContainer>
				<Selector name="type">
					<Option>Todos</Option>
					<Option>Abecedario</Option>
					<Option>Cortante</Option>
					<Option>Cortante y sellador</Option>
					<Option>Mandalas</Option>
					<Option>Scraper</Option>
					<Option>Sello</Option>
					<Option>Texturizador</Option>
					<Option>Toppers</Option>
				</Selector>
				<Selector name="order">
					<Option>Ordenar por</Option>
					<Option>Menor Precio</Option>
					<Option>Mayor Precio</Option>
				</Selector>
			</SelectorContainer>
			<Filter type="submit">Filtrar productos</Filter>
		</SearchForm>
	);
}

export default ProductForm;
