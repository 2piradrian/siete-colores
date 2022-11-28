import React from "react";
import CartProduct from "./CartProduct";
import {
	CartContainer,
	CartH2,
	CartPriceContainer,
	CartProductContainer,
	CartPrice,
	CartHr,
	CartActiveButton,
	CartInactiveButton,
} from "./CartStyles";

function CartContent() {
	const notFound =
		"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
	return (
		<CartContainer>
			<CartH2>Tus productos</CartH2>
			<CartProductContainer>
				{/* Vaya. Tu carrito está vacío */}
				<CartProduct
					key="1"
					img={notFound}
					type="Topper"
					title="Feliz Cumpleaños"
					price={2700}
				/>
			</CartProductContainer>
			<CartPriceContainer>
				<CartH2>Subtotal:</CartH2>
				<CartPrice>$2700</CartPrice>
			</CartPriceContainer>
			<CartPriceContainer>
				<CartH2>Envio:</CartH2>
				<CartPrice>$860</CartPrice>
			</CartPriceContainer>
			<CartHr />
			<CartPriceContainer>
				<CartH2>Total:</CartH2>
				<CartPrice>$3560</CartPrice>
			</CartPriceContainer>
			{false && (
				<CartActiveButton>Solicitar al vendedor</CartActiveButton>
			)}
			<CartInactiveButton>Solicitar al vendedor</CartInactiveButton>
		</CartContainer>
	);
}

export default CartContent;
