import styled from "styled-components";
import { ActiveButton } from "../General/Global";

export const ItemBox = styled.div`
	min-width: 400px;
	height: 400px;
`;

export const ItemImg = styled.img`
	width: 100%;
	max-height: 60%;
	object-fit: cover;
	border-radius: 10px;
`;

export const ItemTitle = styled.span`
	font-size: 32px;
	font-weight: 600;
`;

export const ItemDesc = styled.p`
	font-size: 20px;
`;

export const SubContainer = styled.div`
	height: 20px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ItemPrice = styled.p`
	font-size: 26px;
`;

export const AddButton = styled(ActiveButton)`
	width: 150px;
	height: 40px;
	font-size: 20px;
`;
