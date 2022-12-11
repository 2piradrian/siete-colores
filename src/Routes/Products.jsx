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
import { ProductContext } from "../Context/Product";

function Products() {
	return (
		<ProductMain>
			<Nav />
			<SearchTitle>Productos</SearchTitle>
			<GlobalSubtitles>
				Mirá todo lo que tenemos para ofrecerte
			</GlobalSubtitles>
			<ProductContext>
				<ProductSection>
					<ProductForm />
					<ProductsContainer />
				</ProductSection>
			</ProductContext>
		</ProductMain>
	);
}

export default Products;
