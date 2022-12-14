import { ActiveButton, InactiveButton, StyledLink } from "../General/Global";
import {
	CartContainer,
	CartH2,
	CartHr,
	CartPrice,
	CartPriceContainer,
	CartProductContainer,
	CartTitlesContainer,
	StyledButtonContainer,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";

import CartProduct from "./CartProduct";
import React from "react";
import { clean_cart } from "../../Redux/Actions/creators";
import { prices } from "../../db/queries";

function CartContent() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// ---> REFACT A HOOK

	const buyIt = () => {
		const text = `Hola, me gustaría consultar por los siguientes articulos\n${cart
			?.map((products) => {
				return `${products.name} (${products.id}) x(${products.quantity}u.)\n`;
			})
			.join("")}
			Con un total estimado de $${subtotal + envio}
		`;
		return encodeURI(text);
	};

	/* <----- PRECIOS -----> */
	const subtotal = cart?.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0);
	const envio = prices.ENVIO;
	/* <----- ------ -----> */

	//  REFACT A HOOK <---

	return (
		<CartContainer>
			<CartTitlesContainer>
				<CartH2>Tus productos</CartH2>
				<p onClick={() => dispatch(clean_cart())}>Vaciar carrito</p>
			</CartTitlesContainer>

			<CartProductContainer>
				{cart.length <= 0 && <p>Vaya. Tu carrito está vacío</p>}
				{cart?.map((product) => (
					<CartProduct {...product} key={product.id} />
				))}
			</CartProductContainer>
			{
				{
					/* nuevo componente */
				}
			}
			<CartPriceContainer>
				<CartH2>Subtotal:</CartH2>
				<CartPrice>${subtotal}</CartPrice>
			</CartPriceContainer>
			<CartPriceContainer>
				<CartH2>Envio:</CartH2>
				<CartPrice>${envio}</CartPrice>
			</CartPriceContainer>
			<CartHr />
			<CartPriceContainer>
				<CartH2>Total:</CartH2>
				<CartPrice>${subtotal + envio}</CartPrice>
			</CartPriceContainer>
			<StyledButtonContainer>
				{cart.length > 0 && (
					<a
						href={`https://api.whatsapp.com/send?phone=543512742036&text=${buyIt()}`}
						target="_blank"
					>
						<ActiveButton>Solicitar al vendedor</ActiveButton>
					</a>
				)}
				{cart.length <= 0 && <InactiveButton>Solicitar al vendedor</InactiveButton>}
				<StyledLink to="/products">
					<ActiveButton>Ver más productos</ActiveButton>
				</StyledLink>
			</StyledButtonContainer>
		</CartContainer>
	);
}

export default CartContent;
