import styled from "styled-components";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { wide600 } from "../../Themes/MediaQuery";
export const FooterContainer = styled.footer`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.darkBrown};
	margin-top: -80px;
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
	padding: 80px 25px 25px 25px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FooterTitles = styled.h4`
	color: ${(props) => props.theme.white};
	${wide600} {
		font-size: 22px;
	}
`;

export const FooterDescription = styled.p`
	color: ${(props) => props.theme.white};
	${wide600} {
		font-size: 20px;
	}
`;

export const FooterColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const FooterRowDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const MoneyIcon = styled(RiMoneyDollarCircleLine)`
	color: ${(props) => props.theme.white};
	font-size: 18px;
`;

export const CardIcon = styled(FaMoneyCheckAlt)`
	color: ${(props) => props.theme.white};
	font-size: 18px;
`;
