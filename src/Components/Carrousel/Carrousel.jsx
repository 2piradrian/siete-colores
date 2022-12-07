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

import DPresentation from "../../assets/Mobile/MPresentation.png";
import DPaso1 from "../../assets/Desktop/DPaso1.png";
import DPaso2 from "../../assets/Desktop/DPaso2.png";
import DPaso3 from "../../assets/Desktop/DPaso3.png";
import DPaso4 from "../../assets/Desktop/DPaso4.png";
import DPaso5 from "../../assets/Desktop/DPaso5.png";
import DPaso6 from "../../assets/Desktop/DPaso6.png";

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
	const DeskImages = [
		DPresentation,
		DPaso1,
		DPaso2,
		DPaso3,
		DPaso4,
		DPaso5,
		DPaso6,
	];

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
				<TutorialImage
					src={
						visualViewport.width >= 900
							? DeskImages[position]
							: MobileImages[position]
					}
				/>
				<ArrowContainer onClick={() => changeImage(1)}>
					<RigthArrow />
				</ArrowContainer>
			</TutorialContainer>
		</CarrouselContainer>
	);
}

export default Carrousel;
