import React from "react";
import { GlobalSubtitles } from "../Components/General/Global";
import Nav from "../Components/Nav/Nav";
import ProductForm from "../Components/Products/ProductForm";
import ProductsContainer from "../Components/Products/ProductsContainer";
import {
	ProductMain,
	ProductSection,
	SearchTitle,
} from "../Components/Products/ProductsStyles";

function Products() {
	return (
		<ProductMain>
			<Nav />
			<SearchTitle>Productos</SearchTitle>
			<GlobalSubtitles>
				Mirá todo lo que tenemos para ofrecerte
			</GlobalSubtitles>
			<ProductSection>
				<ProductForm />
				<ProductsContainer />
			</ProductSection>
		</ProductMain>
	);
}

export default Products;
