import React from "react";
import { Input } from "../General/Global";
import {
	Filter,
	Option,
	SearchForm,
	Selector,
	SelectorContainer,
} from "./ProductsStyles";

function ProductForm() {
	return (
		<SearchForm>
			<Input type="text" placeholder="Buscar" />
			<SelectorContainer>
				<Selector>
					<Option>Categorías</Option>
					<Option>Todos</Option>
					<Option>Cortante</Option>
					<Option>Cortante y sellador</Option>
					<Option>Scrapper</Option>
					<Option>Sello</Option>
					<Option>Rodillo</Option>
					<Option>Texturizador</Option>
					<Option>Topper</Option>
					<Option>Abecedario</Option>
				</Selector>
				<Selector>
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
