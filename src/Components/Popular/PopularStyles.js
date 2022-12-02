import styled from "styled-components";

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
`;

export const ItemContainer = styled.div`
	width: 100%;
	height: 45%;
	padding: 20px 10px;
	gap: 35px;
	margin: 40px 0px;
	display: flex;
	justify-content: start; // Esto va a dar problemas en viewports mas grandes, en responsive ponerlo en center
	align-items: center;
	overflow-x: scroll;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
