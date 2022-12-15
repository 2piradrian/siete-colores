import React from "react";
import {
	HeroContainer,
	HeroPresentation,
	HeroSubContainer,
	StyledDescription,
	StyledImg,
	SVGDecoration,
} from "./HeroStyles";

import isoMobile from "../../assets/isoMobile.svg";
import circles_illustration from "../../assets/circles_illustration.svg";
import circles_illustrationdesk from "../../assets/circles_illustrationdesk.svg";
import { ProductButton, StyledLink } from "../General/Global";

function Hero() {
	return (
		<HeroContainer>
			<HeroPresentation>
				<StyledImg src={isoMobile} alt="isologotipo de marca" />
				<HeroSubContainer>
					<StyledDescription>
						Diseñamos productos a medida, encontrá cortantes, selladores, texturizadores
						y toppers para facilitar tu trabajo.
					</StyledDescription>
					<StyledLink to={"/products"}>
						<ProductButton>Ver productos</ProductButton>
					</StyledLink>
				</HeroSubContainer>
			</HeroPresentation>
			<SVGDecoration
				src={visualViewport.width > 900 ? circles_illustrationdesk : circles_illustration}
				alt="imagen de decoración"
			/>
		</HeroContainer>
	);
}

export default Hero;
