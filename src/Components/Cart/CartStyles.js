import styled from "styled-components";

export const CartContainer = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 45px 25px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

export const CartH2 = styled.h2`
	width: 100%;
	font-size: 28px;
	font-weight: 700;
	text-align: start;
`;

export const CartPrice = styled.p`
	font-size: 28px;
	font-weight: 400;
`;

export const CartProductContainer = styled.div`
	width: 100%;
	height: 45%;
	margin: 10px 0px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
`;

export const CartPriceContainer = styled.div`
	width: 100%;
	height: 40px;
	margin: 20px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CartHr = styled.hr`
	background: ${(props) => props.theme.lightBrown};
	border: 0;
	height: 1px;
	font-weight: 100;
	width: 90%;
`;

export const CartActiveButton = styled.button`
	height: 60px;
	width: 100%;
	margin: 25px 0px;
	font-weight: 400;
	font-size: 30px;
	border: none;
	border-radius: 5px;
	color: ${(props) => props.theme.white};
	background-color: ${(props) => props.theme.darkPink};
	cursor: pointer;
`;

export const CartInactiveButton = styled.button`
	height: 60px;
	width: 100%;
	margin: 25px 0px;
	font-weight: 400;
	font-size: 30px;
	border: 1px solid ${(props) => props.theme.lightBrown};
	border-radius: 5px;
	color: ${(props) => props.theme.lightBrown};
	background-color: ${(props) => props.theme.white};
	cursor: not-allowed;
`;
