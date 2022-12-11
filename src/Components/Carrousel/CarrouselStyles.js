import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { wide900 } from "../../Themes/MediaQuery";

export const CarrouselContainer = styled.section`
	width: 100%;
	max-width: 1100px;
	margin: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CarrouselSubtitle = styled.p`
	font-size: 28px;
`;

export const TutorialContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px 0px;
`;

export const TutorialImage = styled.img`
	width: 80%;
	max-width: 880px;
`;

export const ArrowContainer = styled.div`
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RigthArrow = styled(AiOutlineArrowRight)`
	height: 100%;
	font-size: 26px;
	margin: 0px 10px;
	cursor: pointer;
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
	height: 100%;
	font-size: 26px;
	margin: 0px 10px;
	cursor: pointer;
`;
