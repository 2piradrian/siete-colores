import styled from "styled-components";

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: ${(props) => props.theme.darkBrown};
`;

export const Spikes = styled.div`
	position: relative;
	background: ${(props) => props.theme.cream};
	height: 10px;

	&::after {
		content: "";
		position: absolute;
		right: 0;
		left: -0%;
		top: 100%;
		z-index: 2;
		display: block;
		height: 50px;
		background-size: 50px 100%;
		background-image: linear-gradient(
				135deg,
				${(props) => props.theme.cream} 25%,
				transparent 25%
			),
			linear-gradient(
				225deg,
				${(props) => props.theme.cream} 25%,
				transparent 25%
			);
		background-position: 0 0;
	}
`;

export const InfoContainer = styled.div`
	width: 100%;
	padding: 10px;
`;

export const FooterColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
