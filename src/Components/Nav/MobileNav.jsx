import React from "react";
import { MobileNavContainer, MobileNavLi, MobileNavUl } from "./NavStyles";

function MobileNav() {
	return (
		<MobileNavContainer>
			<MobileNavUl>
				<MobileNavLi>Productos</MobileNavLi>
				<MobileNavLi>Destacados</MobileNavLi>
				<MobileNavLi>¿Quienes Somos?</MobileNavLi>
				<MobileNavLi>Contacto</MobileNavLi>
			</MobileNavUl>
		</MobileNavContainer>
	);
}

export default MobileNav;
