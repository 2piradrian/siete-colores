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

import MPresentation from "../../Assets/Mobile/MPresentation.png";
import MPaso1 from "../../Assets/Mobile/MPaso1.png";
import MPaso2 from "../../Assets/Mobile/MPaso2.png";
import MPaso3 from "../../Assets/Mobile/MPaso3.png";
import MPaso4 from "../../Assets/Mobile/MPaso4.png";
import MPaso5 from "../../Assets/Mobile/MPaso5.png";
import MPaso6 from "../../Assets/Mobile/MPaso6.png";

import DPresentation from "../../Assets/Desktop/DPresentation.png";
import DPaso1 from "../../Assets/Desktop/DPaso1.png";
import DPaso2 from "../../Assets/Desktop/DPaso2.png";
import DPaso3 from "../../Assets/Desktop/DPaso3.png";
import DPaso4 from "../../Assets/Desktop/DPaso4.png";
import DPaso5 from "../../Assets/Desktop/DPaso5.png";
import DPaso6 from "../../Assets/Desktop/DPaso6.png";

import { useState } from "react";

function Carrousel() {
	const MobileImages = [MPresentation, MPaso1, MPaso2, MPaso3, MPaso4, MPaso5, MPaso6];
	const DeskImages = [DPresentation, DPaso1, DPaso2, DPaso3, DPaso4, DPaso5, DPaso6];

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
						visualViewport.width >= 900 ? DeskImages[position] : MobileImages[position]
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
