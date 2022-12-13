import styled from "styled-components";

export const ModalContainer = styled.div`
	width: 100vw;
	position: fixed;
	bottom: 0;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalBox = styled.div`
	width: 380px;
	height: 70px;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	right: 0;
	left: 0;
	align-items: center;
	z-index: 10;
	background-color: ${(props) => props.theme.cream};
`;

export const ModalText = styled.p`
	font-size: 16px;

	& > a {
		margin: 0px 5px;
		text-decoration: underline;
	}
`;
