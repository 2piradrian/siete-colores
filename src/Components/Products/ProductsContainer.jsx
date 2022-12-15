import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import { ListOfProducts } from "./ProductsStyles";

function ProductsContainer() {
	const state = useSelector((state) => state.products);

	const [position, setPosition] = useState(0);
	const [list, setList] = useState([]);

	// <-- Scroll Animation --> //
	const onBottom = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
		const bottom = scrollTop + clientHeight >= scrollHeight - 175;
		return bottom;
	};

	const handlePosition = () => {
		if (onBottom() && position < state.length - 1) {
			setList(list.concat(...state[position + 1]));
			setPosition(position + 1);
		}
	};

	useEffect(() => {
		setList(state[0]);
		setPosition(0);
	}, [state]);

	useEffect(() => {
		window.addEventListener("scroll", handlePosition);
		return () => {
			window.removeEventListener("scroll", handlePosition);
		};
	});
	// <-- Scroll Animation --> //

	return (
		<ListOfProducts>
			{list?.map((product) => (
				<Item {...product} key={product.id} />
			))}
			{!list?.length && <p>Vaya, no hemos encontrado resultados</p>}
		</ListOfProducts>
	);
}

export default ProductsContainer;
