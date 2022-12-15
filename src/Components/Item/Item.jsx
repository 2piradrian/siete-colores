import React, { useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { Product } from "../../Context/Product";
import { add_item } from "../../Redux/Actions/creators";
import { Close } from "../General/Icons";
import Modal from "../Modal/Modal";
import {
	AddButton,
	BigImageBox,
	CloseImg,
	DescBox,
	ImageContainer,
	ItemBox,
	ItemDesc,
	ItemImg,
	ItemPrice,
	ItemTitle,
	SubContainer,
} from "./ItemStyles";

function Item(props) {
	const populars = useSelector((state) => state.populars);
	const products = useSelector((state) => state.products);
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const [modal, setModal] = useState(false);
	const [image, setImage] = useState(false);

	const showModal = () => {
		setModal(true);
		setTimeout(() => {
			setModal(false);
		}, 5000);
	};

	const handleAdd = () => {
		showModal();
		if (cart.some((cart) => cart.id === props.id)) {
			return;
		}

		const item = props.popular
			? populars?.flat(1).filter((product) => product.id === props.id)
			: products?.flat(1).filter((product) => product.id === props.id);

		if (item) {
			dispatch(add_item(item));
		}
	};

	return (
		<ItemBox>
			<ItemImg
				src={`./db/img/${props.id}.jpg`}
				alt={props.name}
				onClick={() => setImage(!image)}
			/>
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
			{image && (
				<BigImageBox onClick={() => setImage(!image)}>
					<CloseImg>Click para cerrar</CloseImg>
					<ImageContainer>
						<ItemImg src={`./db/img/${props.id}.jpg`} alt={props.name} />
					</ImageContainer>
				</BigImageBox>
			)}
		</ItemBox>
	);
}

export default Item;
