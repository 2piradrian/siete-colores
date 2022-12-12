import React from "react";
import { StyledLink } from "../General/Global";
import { ModalBox, ModalContainer, ModalText } from "./ModalSt";

function Modal() {
	return (
		<ModalContainer>
			<ModalBox>
				<ModalText>
					El producto se agregó al
					<StyledLink to="/cart">carrito</StyledLink>
				</ModalText>
			</ModalBox>
		</ModalContainer>
	);
}

export default Modal;
