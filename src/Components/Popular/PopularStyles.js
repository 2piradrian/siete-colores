import styled from "styled-components";
import { wide1200, wide600, wide900 } from "../../Themes/MediaQuery";

export const PopularContainer = styled.section`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PopularTitle = styled.h2`
	text-align: center;
	margin-top: -55px;
	font-size: 45px;
	font-size: 800;

	${wide600} {
		font-size: 55px;
	}
	${wide900} {
		font-size: 60px;
	}
`;

export const ItemContainer = styled.div`
	width: 100%;
	height: 45%;
	padding: 30px 10px;
	margin: 40px 0px;
	display: flex;
	justify-content: start;
	align-items: center;
	overflow-x: scroll;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	${wide1200} {
		justify-content: center;
	}
`;
