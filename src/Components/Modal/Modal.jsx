import React from "react";
import { StyledLink } from "../General/Global";
import { Box, ModalBox, ModalContainer, ModalText } from "./ModalSt";

function Modal() {
	return (
		<ModalContainer>
			<ModalBox>
				<Box>
					<ModalText>
						El producto se agregó al
						<StyledLink to="/cart">carrito</StyledLink>
					</ModalText>
				</Box>
			</ModalBox>
		</ModalContainer>
	);
}

export default Modal;
