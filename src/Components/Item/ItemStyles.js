import styled from "styled-components";
import { ActiveButton } from "../General/Global";

export const ItemBox = styled.div`
	min-width: 350px;
	max-width: 350px;
	height: 400px;
	margin: 0px 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ItemImg = styled.img`
	width: 100%;
	max-height: 60%;
	object-fit: cover;
	border-radius: 10px;
`;

export const ItemTitle = styled.span`
	width: 100%;
	margin-top: 2px;
	font-size: 26px;
	font-weight: 600;
`;
export const DescBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ItemDesc = styled.p`
	width: 100%;
	font-size: 18px;
	&.size {
		text-align: end;
	}
	&.type {
		text-align: start;
	}
`;

export const SubContainer = styled.div`
	width: 100%;
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
