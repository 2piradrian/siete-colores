import React from "react";
import { StyledLink } from "../Components/General/Links";
import { Close } from "../Components/General/Icons";
import CartContent from "../Components/Cart/CartContent";

function Cart() {
	return (
		<div>
			<StyledLink to="/">
				<Close />
			</StyledLink>
			<CartContent />
		</div>
	);
}

export default Cart;
