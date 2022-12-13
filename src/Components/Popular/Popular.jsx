import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Product } from "../../Context/Product";
import { getPopulars, getProducts } from "../../db/queries";
import { GlobalSubtitles, ProductButton, StyledLink } from "../General/Global";
import Item from "../Item/Item";
import { ItemContainer, PopularContainer, PopularTitle } from "./PopularStyles";

function Popular() {
	const { populars, setPopulars } = useContext(Product);
	const { data } = useQuery("popular", getProducts, {
		select: (data) => getPopulars(data),
		onSuccess: () => setPopulars(data),
	});
	return (
		<PopularContainer>
			<PopularTitle>Lo más destacado</PopularTitle>
			<GlobalSubtitles>¿Qué es lo qué está de moda?</GlobalSubtitles>
			<ItemContainer>
				{populars?.map((product) => (
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
