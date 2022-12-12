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
		"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwellesleysocietyofartists.org%2Fimage-not-found%2F&psig=AOvVaw0q7qs02ecpAISvGDtHdXUH&ust=1670964468125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKja-fv59PsCFQAAAAAdAAAAABAE";
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
