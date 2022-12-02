import React from "react";
import { ProductButton, StyledLink } from "../General/Global";
import Item from "../Item/Item";
import { ItemContainer, PopularContainer, PopularTitle } from "./PopularStyles";

function Popular() {
	const notFound =
		"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
	return (
		<PopularContainer>
			<PopularTitle>Lo más destacado</PopularTitle>
			<p>¿Qué es lo qué está de moda?</p>
			<ItemContainer>
				<Item
					key="1"
					img={notFound}
					type="Topper"
					title="Feliz Cumpleaños"
					dim="20cm"
					price={2700}
				/>
				<Item
					key="2"
					img={notFound}
					type="Topper"
					title="Feliz Cumpleaños"
					dim="20cm"
					price={2700}
				/>
				<Item
					key="3"
					img={notFound}
					type="Topper"
					title="Feliz Cumpleaños"
					dim="20cm"
					price={2700}
				/>
			</ItemContainer>
			<StyledLink to={"/products"}>
				<ProductButton>Ver todos los productos</ProductButton>
			</StyledLink>
		</PopularContainer>
	);
}

export default Popular;
