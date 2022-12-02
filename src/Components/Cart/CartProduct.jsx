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
		const titleCheck = props.title;
		const viewport = window.innerWidth;

		if (titleCheck.length > 13 && viewport < 500) {
			setTitle(titleCheck.slice(0, 13) + "...");
		} else {
			setTitle(titleCheck);
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
