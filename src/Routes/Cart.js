import React from "react";
import { StyledLink } from "../Components/General/Global";
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
