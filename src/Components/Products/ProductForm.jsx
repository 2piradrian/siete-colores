import React from "react";
import { Input } from "../General/Global";
import { Filter, Option, SearchForm, Selector, SelectorContainer } from "./ProductsStyles";
import { useQuery } from "react-query";
import { getProducts } from "../../db/queries";
import { useDispatch } from "react-redux";
import { filter_products, set_products } from "../../Redux/Actions/creators";

function ProductForm() {
	const dispatch = useDispatch();

	const { data, refetch } = useQuery("products", getProducts, {
		onSuccess: (data) => {
			dispatch(set_products(data));
		},
		onError: () => refetch(),
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		dispatch(filter_products(data, formData));
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
