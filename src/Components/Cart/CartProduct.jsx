import React, { useEffect, useState } from "react";
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
} from "./CartStyles";

function CartProduct(props) {
	const [title, setTitle] = useState(props.title);
	useEffect(() => {
		if (props.title.length > 13) {
			setTitle(props.title.slice(0, 13) + "...");
		} else {
			setTitle(props.title);
		}
	}, [props.title]);

	return (
		<CartProductBox>
			<BigCartDivisor>
				<CartProductImg src={props.img} />
				<CartTextDivisor>
					<CartItemTitle>{title}</CartItemTitle>
					<CartItemType>{props.type}</CartItemType>
				</CartTextDivisor>
			</BigCartDivisor>
			<SmallCartDivisor>
				<CartItemPrice>${props.price}</CartItemPrice>
				<CartButtonContainer>
					<QuantityButton>-</QuantityButton>
					<p>1</p>
					<QuantityButton>+</QuantityButton>
				</CartButtonContainer>
			</SmallCartDivisor>
		</CartProductBox>
	);
}

export default CartProduct;
