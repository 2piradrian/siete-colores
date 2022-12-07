import styled from "styled-components";
import { Link } from "react-router-dom";
import { wide1100, wide600, wide900 } from "../../Themes/MediaQuery";

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.darkBrown};
	text-decoration: none;
`;

export const StyledMain = styled.main`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ActiveButton = styled.button`
	height: 60px;
	width: 100%;
	max-width: 1100px;
	margin: 5px 0px;
	font-weight: 400;
	font-size: 30px;
	border: none;
	border-radius: 5px;
	color: ${(props) => props.theme.white};
	background-color: ${(props) => props.theme.darkPink};
	cursor: pointer;
`;

export const InactiveButton = styled.button`
	height: 60px;
	width: 100%;
	max-width: 1100px;
	margin: 5px 0px;
	font-weight: 400;
	font-size: 30px;
	border: 1px solid ${(props) => props.theme.lightBrown};
	border-radius: 5px;
	color: ${(props) => props.theme.lightBrown};
	background-color: ${(props) => props.theme.white};
	cursor: not-allowed;
`;

export const WspIso = styled.img`
	width: 75px;
	height: auto;
	cursor: pointer;
	z-index: 3;
	${wide1100} {
		width: 75px;
	}
`;

export const WspLink = styled(StyledLink)`
	position: sticky;
	bottom: 10px;
	left: 100%;
	margin-right: 10px;
	z-index: 3;
`;

export const ProductButton = styled(ActiveButton)`
	width: 300px;
	margin: 25px 0px;
	font-size: 25px;
	border-radius: 12px;
	font-weight: 500;
`;

export const GlobalSubtitles = styled.p`
	${wide600} {
		font-size: 20px;
	}

	${wide900} {
		font-size: 24px;
	}
`;

export const Input = styled.input`
	height: 40px;
	width: 100%;
	border-radius: 8px;
	border: 2px solid ${(props) => props.theme.lightPink};
	outline: none;
	padding: 20px;

	&::placeholder {
		margin: 20px;
	}
`;
