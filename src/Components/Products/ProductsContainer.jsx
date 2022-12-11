import React, { useContext } from "react";
import { useEffect } from "react";
import { Product } from "../../Context/Product";

function ProductsContainer() {
	const { products } = useContext(Product);
	useEffect(() => {}, [products]);

	return (
		<div>
			{products?.map((product) => (
				<p key={product.id}>{product.name}</p>
			))}
		</div>
	);
}

export default ProductsContainer;
