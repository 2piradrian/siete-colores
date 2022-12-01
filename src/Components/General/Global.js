import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.darkBrown};
	text-decoration: none;
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
