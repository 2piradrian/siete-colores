import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Product } from "../../Context/Product";
import {
	BigCartDivisor,
	CartButtonContainer,
	CartItemPrice,
	CartItemTitle,
	CartItemType,
	CartProductBox,
	CartProductImg,
	CartTextDivisor,
	QuantityButton,
	SmallCartDivisor,
	Quantity,
	ButtonBox,
} from "./CartStyles";

function CartProduct(props) {
	const [title, setTitle] = useState(props.name);

	const { cartList, updateItem, updateCart, deleteItem } = useContext(Product);

	useEffect(() => {
		const titleCheck = props.name;
		const viewport = window.innerWidth;

		if (titleCheck.length > 13 && viewport < 500) {
			setTitle(titleCheck?.slice(0, 13) + "...");
		} else {
			setTitle(titleCheck);
		}
	}, [props.name]);

	const editQuantity = (number) => {
		const item = cartList.filter((item) => item.id === props.id);
		const updatedItem = { ...item[0], quantity: item[0].quantity + number };
		if (updatedItem.quantity < 1) {
			deleteItem(item[0]);
			return;
		}
		updateItem(updatedItem);
	};

	return (
		<CartProductBox>
			<BigCartDivisor>
				<CartProductImg src={`./db/img/${props.id}.jpg`} />
				<CartTextDivisor>
					<CartItemTitle>{title}</CartItemTitle>
					<CartItemType>{props.type}</CartItemType>
				</CartTextDivisor>
			</BigCartDivisor>
			<SmallCartDivisor>
				<CartItemPrice>${props.price * props.quantity}</CartItemPrice>
				<ButtonBox>
					<CartButtonContainer>
						<QuantityButton onClick={() => editQuantity(-1)}>-</QuantityButton>
						<Quantity>{props.quantity}</Quantity>
						<QuantityButton onClick={() => editQuantity(1)}>+</QuantityButton>
					</CartButtonContainer>
				</ButtonBox>
			</SmallCartDivisor>
		</CartProductBox>
	);
}

export default CartProduct;
