import React from "react";
import {
	AddButton,
	DescBox,
	ItemBox,
	ItemDesc,
	ItemImg,
	ItemPrice,
	ItemTitle,
	SubContainer,
} from "./ItemStyles";

function Item(props) {
	console.log(props);
	return (
		<ItemBox>
			<ItemImg src={`./db/img/${props.id}.jpg`} alt={props.name} />
			<ItemTitle>{props.name}</ItemTitle>
			<DescBox>
				<ItemDesc className="type">{props.type}</ItemDesc>
				<ItemDesc className="size">{props["tam-aprox"]}</ItemDesc>
			</DescBox>
			<SubContainer>
				<ItemPrice>{`$${props.price}`}</ItemPrice>
				<AddButton>Agregar</AddButton>
			</SubContainer>
		</ItemBox>
	);
}

export default Item;
