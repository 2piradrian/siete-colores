import React from "react";
import { useQuery } from "react-query";
import { getPopulars, getProducts, prices, setPrices } from "../../db/queries";
import { GlobalSubtitles, ProductButton, StyledLink } from "../General/Global";
import Item from "../Item/Item";
import { ItemContainer, PopularContainer, PopularTitle } from "./PopularStyles";

function Popular() {
	const { data } = useQuery("products", getProducts, {
		select: (data) => getPopulars(setPrices(data)),
	});
	return (
		<PopularContainer>
			<PopularTitle>Lo más destacado</PopularTitle>
			<GlobalSubtitles>¿Qué es lo qué está de moda?</GlobalSubtitles>
			<ItemContainer>
				{data?.map((product) => (
					<Item {...product} key={product.id} />
				))}
			</ItemContainer>
			<StyledLink to={"/products"}>
				<ProductButton>Ver todos los productos</ProductButton>
			</StyledLink>
		</PopularContainer>
	);
}

export default Popular;
