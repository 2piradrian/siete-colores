import React from "react";
import Nav from "../Components/Nav/Nav";
import ProductForm from "../Components/Products/ProductForm";
import ProductsContainer from "../Components/Products/ProductsContainer";
import {
	ProductMain,
	SearchTitle,
} from "../Components/Products/ProductsStyles";
import { ProductContext } from "../Context/Product";

function Products() {
	return (
		<ProductMain>
			<Nav />
			<SearchTitle>Productos</SearchTitle>
			<p>Mirá todo lo que tenemos para ofrecerte</p>
			<ProductContext>
				<ProductForm />
				<ProductsContainer></ProductsContainer>
			</ProductContext>
		</ProductMain>
	);
}

export default Products;
