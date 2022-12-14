import React from "react";
import Item from "../Item/Item";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../db/queries";
import { set_populars } from "../../Redux/Actions/creators";
import { GlobalSubtitles, ProductButton, StyledLink } from "../General/Global";
import { ItemContainer, PopularContainer, PopularTitle } from "./PopularStyles";

function Popular() {
	const state = useSelector((state) => state.populars);
	const dispatch = useDispatch();

	const { refetch } = useQuery("populars", getProducts, {
		onSuccess: (data) => {
			dispatch(set_populars(data));
		},
		onError: () => refetch(),
	});

	return (
		<PopularContainer id="popular">
			<PopularTitle>Lo más destacado</PopularTitle>
			<GlobalSubtitles>¿Qué es lo qué está de moda?</GlobalSubtitles>
			<ItemContainer>
				{state?.map((product) => (
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
