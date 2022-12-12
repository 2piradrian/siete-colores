import styled from "styled-components";

export const ModalBox = styled.div`
	width: 380px;
	height: 70px;
	border-radius: 15px;
	position: fixed;
	bottom: 0;
	background-color: ${(props) => props.theme.cream};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalText = styled.p`
	font-size: 16px;

	& > a {
		margin: 0px 5px;
		text-decoration: underline;
	}
`;
