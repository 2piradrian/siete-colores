import React from "react";
import { StyledLink } from "../General/Global";
import { DeskNavContainer, DeskNavLi, DeskNavUl } from "./NavStyles";

function DeskNav() {
	return (
		<DeskNavContainer>
			<DeskNavUl>
				<DeskNavLi>
					<StyledLink to={"/"}>Inicio</StyledLink>
				</DeskNavLi>
				<DeskNavLi>
					<StyledLink to={"/products"}>Productos</StyledLink>
				</DeskNavLi>
				<DeskNavLi>
					<StyledLink to={"#popular"}>Destacados</StyledLink>
				</DeskNavLi>
				<DeskNavLi>
					<StyledLink to={"#contact"}>Contacto</StyledLink>
				</DeskNavLi>
			</DeskNavUl>
		</DeskNavContainer>
	);
}

export default DeskNav;
