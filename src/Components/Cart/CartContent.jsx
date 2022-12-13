import React, { useContext } from "react";
import { Product } from "../../Context/Product";
import { ActiveButton, InactiveButton, StyledLink } from "../General/Global";
import CartProduct from "./CartProduct";
import {
	CartContainer,
	CartH2,
	CartPriceContainer,
	CartProductContainer,
	CartPrice,
	CartHr,
	StyledButtonContainer,
} from "./CartStyles";

function CartContent() {
	const { cartList } = useContext(Product);

	const subtotal = cartList?.reduce(
		(acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
		0
	);

	const envio = 850;

	const buyIt = () => {
		const text = `Hola, me gustaría consultar por los siguientes articulos\n${cartList
			?.map((products) => {
				return `${products.name} (${products.id}) x(${products.quantity}u.)\n`;
			})
			.join("")}
			Con un total estimado de $${subtotal + envio}
		`;
		return encodeURI(text);
	};

	return (
		<CartContainer>
			<CartH2>Tus productos</CartH2>
			<CartProductContainer>
				{cartList.length <= 0 && <p>Vaya. Tu carrito está vacío</p>}
				{cartList?.map((product) => (
					<CartProduct {...product} key={product.id} />
				))}
			</CartProductContainer>
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
				{cartList.length > 0 && (
					<a
						href={`https://api.whatsapp.com/send?phone=543512742036&text=${buyIt()}`}
						target="_blank"
					>
						<ActiveButton>Solicitar al vendedor</ActiveButton>
					</a>
				)}
				{cartList.length <= 0 && <InactiveButton>Solicitar al vendedor</InactiveButton>}
				<StyledLink to="/products">
					<ActiveButton>Ver más productos</ActiveButton>
				</StyledLink>
			</StyledButtonContainer>
		</CartContainer>
	);
}

export default CartContent;
