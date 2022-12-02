import React from "react";
import {
	HeroContainer,
	StyledDescription,
	StyledImg,
	SVGDecoration,
} from "./HeroStyles";

import isoMobile from "../../assets/isoMobile.svg";
import circles_illustration from "../../assets/circles_illustration.svg";
import { ProductButton } from "../General/Global";

function Hero() {
	return (
		<HeroContainer>
			<StyledImg src={isoMobile} alt="isologotipo de marca" />
			<StyledDescription>
				Diseñamos productos a medida, encontrá cortantes, selladores,
				texturizadores y toppers para facilitar tu trabajo.
			</StyledDescription>
			<ProductButton>Ver productos</ProductButton>
			<SVGDecoration
				src={circles_illustration}
				alt="imagen de decoración"
			/>
		</HeroContainer>
	);
}

export default Hero;
