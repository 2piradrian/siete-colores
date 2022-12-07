import React from "react";
import {
	ArrowContainer,
	CarrouselContainer,
	CarrouselSubtitle,
	LeftArrow,
	RigthArrow,
	TutorialContainer,
	TutorialImage,
} from "./CarrouselStyles";
import MPresentation from "../../assets/Mobile/MPresentation.png";
import MPaso1 from "../../assets/Mobile/MPaso1.png";
import MPaso2 from "../../assets/Mobile/MPaso2.png";
import MPaso3 from "../../assets/Mobile/MPaso3.png";
import MPaso4 from "../../assets/Mobile/MPaso4.png";
import MPaso5 from "../../assets/Mobile/MPaso5.png";
import MPaso6 from "../../assets/Mobile/MPaso6.png";
import { useState } from "react";

function Carrousel() {
	const MobileImages = [
		MPresentation,
		MPaso1,
		MPaso2,
		MPaso3,
		MPaso4,
		MPaso5,
		MPaso6,
	];
	const DeskImages = [];

	const [position, setPosition] = useState(0);

	const changeImage = (number) => {
		let newPosition = position + number;
		if (newPosition === -1) {
			newPosition = 6;
		} else if (newPosition === 7) {
			newPosition = 0;
		}
		setPosition(newPosition);
	};

	return (
		<CarrouselContainer>
			<CarrouselSubtitle>¿Tenes dudas?</CarrouselSubtitle>
			<CarrouselSubtitle>Te dejamos un tutorial</CarrouselSubtitle>
			<TutorialContainer>
				<ArrowContainer onClick={() => changeImage(-1)}>
					<LeftArrow />
				</ArrowContainer>
				<TutorialImage src={MobileImages[position]} />
				<ArrowContainer onClick={() => changeImage(1)}>
					<RigthArrow />
				</ArrowContainer>
			</TutorialContainer>
		</CarrouselContainer>
	);
}

export default Carrousel;
