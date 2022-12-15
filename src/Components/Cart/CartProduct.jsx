import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_item, update_item } from "../../Redux/Actions/creators";
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
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const [title, setTitle] = useState(props.name);

	useEffect(() => {
		const titleCheck = props.name;
		const viewport = window.innerWidth;

		if (titleCheck.length > 13 && viewport < 500) {
			setTitle(titleCheck.slice(0, 13) + "...");
		} else {
			setTitle(titleCheck);
		}
	}, [props.name]);

	const editQuantity = (number) => {
		const item = cart.filter((item) => item.id === props.id);
		const updatedItem = { ...item[0], quantity: item[0].quantity + number };
		if (updatedItem.quantity < 1) {
			dispatch(delete_item(item));
			return;
		}
		dispatch(update_item(updatedItem));
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
