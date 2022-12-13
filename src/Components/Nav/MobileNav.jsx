import React from "react";
import { StyledLink } from "../General/Global";
import { MobileNavContainer, MobileNavLi, MobileNavUl } from "./NavStyles";
import { Close } from "../General/Icons";

function MobileNav() {
	return (
		<MobileNavContainer>
			<Close />
			<MobileNavUl>
				<MobileNavLi>
					<StyledLink to={"/"}>Inicio</StyledLink>
				</MobileNavLi>
				<MobileNavLi>
					<StyledLink to={"/products"}>Productos</StyledLink>
				</MobileNavLi>
				<MobileNavLi>
					<a href="/#popular">Destacados</a>
				</MobileNavLi>
				<MobileNavLi>
					<a href="/#contact">Contacto</a>
				</MobileNavLi>
			</MobileNavUl>
		</MobileNavContainer>
	);
}

export default MobileNav;
