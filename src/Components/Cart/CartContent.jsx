import React, { useContext } from "react";
import { Product } from "../../Context/Product";
import { ActiveButton, InactiveButton } from "../General/Global";
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
			<StyledButtonContainer>
				{cartList.length > 0 && <ActiveButton>Solicitar al vendedor</ActiveButton>}
				{cartList.length <= 0 && <InactiveButton>Solicitar al vendedor</InactiveButton>}
				<ActiveButton>Ver más productos</ActiveButton>
			</StyledButtonContainer>
		</CartContainer>
	);
}

export default CartContent;
