import React, { useState } from "react";
import { useContext } from "react";
import { Product } from "../../Context/Product";
import Modal from "../Modal/Modal";
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
	const { products, cartList, updateCart } = useContext(Product);

	const [modal, setModal] = useState(false);

	const handleAdd = () => {
		setModal(true);
		setTimeout(() => {
			setModal(false);
		}, 5000);
		if (cartList.some((cart) => cart.id === props.id)) {
			return;
		}
		const item = products.flat(1).filter((product) => product.id === props.id);
		updateCart(item[0]);
	};

	const imgDefault =
		"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
	return (
		<ItemBox>
			<ItemImg src={`./db/img/${props.id}.jpg` || imgDefault} alt={props.name} />
			<ItemTitle>{props.name}</ItemTitle>
			<DescBox>
				<ItemDesc className="type">{props.type}</ItemDesc>
				<ItemDesc className="size">{props["tam-aprox"]}</ItemDesc>
			</DescBox>
			<SubContainer>
				<ItemPrice>{`$${props.price}`}</ItemPrice>
				<AddButton onClick={() => handleAdd()}>Agregar</AddButton>
			</SubContainer>
			{modal && <Modal />}
		</ItemBox>
	);
}

export default Item;
