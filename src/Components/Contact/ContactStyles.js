import styled from "styled-components";
import { ActiveButton, Input } from "../General/Global";

export const ContactContainer = styled.section`
	width: 100%;
	padding: 40px 0px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.cream};
`;

export const ContactForm = styled.form`
	width: 70%;
	gap: 20px;
	margin: 40px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContactTitle = styled.h2`
	text-align: center;
	margin-top: 35px;
	font-size: 40px;
	font-size: 800;
`;

export const ContactInput = styled(Input)`
	border: 2px solid ${(props) => props.theme.lightPink};
	border-radius: 2px;
`;

export const Text = styled.textarea`
	border: 2px solid ${(props) => props.theme.lightPink};
	border-radius: 2px;
	height: 140px;
	width: 100%;
	outline: none;
	padding: 20px;

	&::placeholder {
		margin: 20px;
	}
`;

export const SendButton = styled(ActiveButton)`
	width: 100%;
`;
