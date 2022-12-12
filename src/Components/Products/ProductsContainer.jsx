import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "../../Context/Product";
import Item from "../Item/Item";
import { ListOfProducts } from "./ProductsStyles";

function ProductsContainer() {
	const { products } = useContext(Product);

	const [position, setPosition] = useState(0);
	const [list, setList] = useState([]);

	const onBottom = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
		const bottom = scrollTop + clientHeight >= scrollHeight - 175;
		return bottom;
	};

	const handlePosition = () => {
		if (onBottom() && position < products.length - 1) {
			setList(list.concat(...products[position + 1]));
			setPosition(position + 1);
		}
	};

	useEffect(() => {
		setList(products[0]);
		setPosition(0);
	}, [products]);

	useEffect(() => {
		window.addEventListener("scroll", handlePosition);
		return () => {
			window.removeEventListener("scroll", handlePosition);
		};
	});

	return (
		<ListOfProducts>
			{list?.map((product) => (
				<Item {...product} key={product.id} />
			))}
		</ListOfProducts>
	);
}

export default ProductsContainer;
