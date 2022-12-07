import styled from "styled-components";
import { wide1100, wide500, wide600, wide800 } from "../../Themes/MediaQuery";

export const HeroContainer = styled.section`
	width: 100%;
	max-width: 1920px;
	padding: 20px;
	gap: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HeroPresentation = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	${wide1100} {
		height: calc(100vh - 200px);
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

export const StyledImg = styled.img`
	height: auto;
	margin-top: 40px;
	width: 80%;

	${wide600} {
		width: 440px;
	}
	${wide1100} {
		width: 550px;
		max-width: 550px;
	}
`;

export const HeroSubContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	flex-direction: column;
	${wide1100} {
		width: 50%;
		height: 300px;
	}
`;

export const StyledDescription = styled.p`
	width: 70%;
	font-size: 18px;
	text-align: center;

	${wide500} {
		font-size: 22px;
	}
	${wide800} {
		font-size: 25px;
	}
	${wide1100} {
		width: 100%;
		max-width: 500px;
		font-size: 22px;
	}
`;

export const SVGDecoration = styled.img`
	width: 100%;
	height: auto;
	max-width: 600px;
	${wide1100} {
		margin: -100px;
		width: 100%;
		max-width: 1100px;
		height: 300px;
	}
`;
