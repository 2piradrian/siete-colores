import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = styled.nav`
	height: 52px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.darkPink};
`;

export const NavContainer = styled.nav`
	height: 100%;
	width: 90%;
	max-width: 1300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Cart = styled(AiOutlineShoppingCart)`
	font-size: 26px;
	color: ${(props) => props.theme.white};
	cursor: pointer;
`;

export const Burger = styled(GiHamburgerMenu)`
	font-size: 26px;
	color: ${(props) => props.theme.white};
	cursor: pointer;
`;

export const MobileNavContainer = styled.nav`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	background-color: ${(props) => props.theme.white};
	position: fixed;
	top: 0;
	left: 0;
`;

export const MobileNavUl = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 45px;
	list-style: none;
`;

export const MobileNavLi = styled.li`
	font-size: 36px;
	cursor: pointer;
`;

export const CloseNav = styled(AiOutlineClose)`
	position: fixed;
	top: 15px;
	right: 15px;
	z-index: 2;
	font-size: 30px;
	cursor: pointer;
`;
