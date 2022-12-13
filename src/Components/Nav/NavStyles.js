import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { wide900 } from "../../Themes/MediaQuery";

export const Navbar = styled.header`
	height: 52px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.darkPink};

	${wide900} {
		height: 65px;
	}
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

	${wide900} {
		font-size: 28px;
	}
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
	z-index: 5;
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

	& > a {
		text-decoration: none;
		color: ${(props) => props.theme.black};
	}
`;

export const DeskNavContainer = styled.nav`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: -28px;
`;

export const DeskNavUl = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	list-style: none;
`;

export const DeskNavLi = styled.li`
	font-size: 25px;
	cursor: pointer;
	& > a {
		text-decoration: none;
		color: ${(props) => props.theme.white};
	}

	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.white};
	}
`;
