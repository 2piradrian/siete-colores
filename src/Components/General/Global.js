import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.darkBrown};
	text-decoration: none;
`;

export const StyledMain = styled.main`
	width: 100%;
	height: auto;
`;

export const ActiveButton = styled.button`
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

export const InactiveButton = styled.button`
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

export const WspIso = styled.img`
	width: 75px;
	height: auto;
	position: sticky;
	bottom: 10px;
	margin-right: 10px;
	left: 100%;
	cursor: pointer;
`;

export const ProductButton = styled(ActiveButton)`
	width: 300px;
	font-size: 25px;
	border-radius: 12px;
	font-weight: 500;
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
