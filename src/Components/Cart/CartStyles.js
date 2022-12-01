import styled from "styled-components";

export const CartContainer = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 45px 15px;
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
	padding: 10px 2px;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	gap: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;
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
	height: 2px;
	font-weight: 100;
	width: 90%;
`;

export const CartProductBox = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CartProductImg = styled.img`
	height: 100%;
	border-radius: 10px;
`;

export const BigCartDivisor = styled.div`
	height: 100%;
	width: 60%;
	display: flex;

	&::after {
		height: 100%;
		width: 1%;
		border-right: 1px solid ${(props) => props.theme.lightBrown};
		content: "";
	}
`;

export const SmallCartDivisor = styled.div`
	height: 100%;
	width: 30%;
	margin-left: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CartTextDivisor = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const CartItemTitle = styled.h3`
	font-size: 18px;
	margin: 2px 5px;
`;

export const CartItemType = styled.p`
	font-size: 16px;
	font-weight: 200;
	margin: 2px 5px;
`;

export const CartItemPrice = styled.p`
	font-size: 20px;
	font-weight: 600;
	margin: 5px;
`;

export const CartButtonContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
`;

export const QuantityButton = styled.button`
	height: 30px;
	width: 30px;
	background-color: ${(props) => props.theme.darkPink};
	color: ${(props) => props.theme.white};
	border: none;
	border-radius: 5px;
	font-weight: 800;
	cursor: pointer;
`;
