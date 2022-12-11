import React from "react";
import { StyledLink } from "../Components/General/Global";
import { Close } from "../Components/General/Icons";
import CartContent from "../Components/Cart/CartContent";
import { useNavigate } from "react-router-dom";

function Cart() {
	const navigate = useNavigate();
	return (
		<div>
			<Close onClick={() => navigate(-1)} />
			<CartContent />
		</div>
	);
}

export default Cart;
