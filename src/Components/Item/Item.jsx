import React from "react";
import {
	AddButton,
	ItemBox,
	ItemDesc,
	ItemImg,
	ItemPrice,
	ItemTitle,
	SubContainer,
} from "./ItemStyles";

function Item(props) {
	return (
		<ItemBox>
			<ItemImg src={props.img} />
			<ItemTitle>Oso</ItemTitle>
			<ItemDesc>{props.type}</ItemDesc>
			<SubContainer>
				<ItemPrice>{`$${props.price}`}</ItemPrice>
				<AddButton>Agregar</AddButton>
			</SubContainer>
		</ItemBox>
	);
}

export default Item;
