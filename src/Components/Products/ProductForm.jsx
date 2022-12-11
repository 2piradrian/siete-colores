import React from "react";
import { Input } from "../General/Global";
import {
	Filter,
	Option,
	SearchForm,
	Selector,
	SelectorContainer,
} from "./ProductsStyles";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Product } from "../../Context/Product";

import { filterProducts, getProducts, prices } from "../../db/queries";

function ProductForm() {
	const { setProducts } = useContext(Product);

	const onSuccess = (data) => {
		setProducts(data);
	};
	const { data } = useQuery("products", getProducts, {
		onSuccess,
		select: (data) =>
			data?.map((product) => ({
				...product,
				price: prices[product.price],
			})),
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const productData = Object.fromEntries(formData);
		setProducts(filterProducts(data, productData));
	};

	return (
		<SearchForm onSubmit={handleSubmit}>
			<Input type="text" placeholder="Buscar" name="name" />
			<SelectorContainer>
				<Selector name="type">
					<Option>Categorias</Option>
					<Option>Todos</Option>
					<Option>Cortante</Option>
					<Option>Cortante y sellador</Option>
					<Option>Scrapper</Option>
					<Option>Sello</Option>
					<Option>Rodillo</Option>
					<Option>Texturizador</Option>
					<Option>Toppers</Option>
					<Option>Abecedario</Option>
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
