import React from "react";
import Nav from "../Components/Nav/Nav";
import ProductForm from "../Components/Products/ProductForm";
import {
	ProductMain,
	SearchTitle,
} from "../Components/Products/ProductsStyles";

function Products() {
	return (
		<ProductMain>
			<Nav />
			<SearchTitle>Productos</SearchTitle>
			<p>Mirá todo lo que tenemos para ofrecerte</p>
			<ProductForm />
		</ProductMain>
	);
}

export default Products;
