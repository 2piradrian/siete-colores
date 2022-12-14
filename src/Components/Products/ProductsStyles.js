import styled from "styled-components";
import { ActiveButton } from "../General/Global";

export const ProductMain = styled.main`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > p {
		font-size: 16px;
		padding: 15px;
	}
`;

export const ProductSection = styled.section`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const SearchForm = styled.form`
	width: 70%;
	max-width: 650px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SearchTitle = styled.h2`
	text-align: center;
	margin-top: 35px;
	font-size: 40px;
	font-size: 800;
`;

export const SelectorContainer = styled.div`
	width: 100%;
	margin: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Selector = styled.select`
	height: 40px;
	width: 45%;
	border-radius: 8px;
	text-align: center;
	border: 2px solid ${(props) => props.theme.lightPink};
	background-color: ${(props) => props.theme.white};
`;

export const Option = styled.option`
	height: 40px;
	padding: 5px;
`;

export const Filter = styled(ActiveButton)`
	margin-top: -5px;
	font-size: 18px;
	height: 40px;
	width: 200px;
`;

export const ListOfProducts = styled.div`
	width: 100%;
	max-width: 1100px;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
`;
