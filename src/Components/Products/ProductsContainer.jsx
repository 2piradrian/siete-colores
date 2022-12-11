import React, { useContext } from "react";
import { useEffect } from "react";
import { Product } from "../../Context/Product";
import Item from "../Item/Item";
import { ListOfProducts } from "./ProductsStyles";

function ProductsContainer() {
	const { products } = useContext(Product);
	useEffect(() => {}, [products]);

	return (
		<ListOfProducts>
			{products?.map((product) => (
				<Item {...product} />
			))}
		</ListOfProducts>
	);
}

export default ProductsContainer;
