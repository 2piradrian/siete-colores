import React from "react";
import {
	CardIcon,
	FooterColumnDiv,
	FooterContainer,
	FooterDescription,
	FooterRowDiv,
	FooterTitles,
	InfoContainer,
	MoneyIcon,
	Spikes,
	TitleContainer,
} from "./FooterStyles";

function Footer() {
	return (
		<FooterContainer>
			<Spikes></Spikes>
			<InfoContainer>
				<FooterColumnDiv>
					<FooterTitles>Métodos de pago:</FooterTitles>
					<FooterRowDiv>
						<MoneyIcon />
						<FooterDescription>
							Efectivo o transferencia
						</FooterDescription>
					</FooterRowDiv>
					<FooterRowDiv>
						<CardIcon />
						<FooterDescription>Crédito o débito</FooterDescription>
					</FooterRowDiv>
				</FooterColumnDiv>
				<FooterColumnDiv>
					<FooterTitles>Envios por:</FooterTitles>
					<FooterDescription>Cadete propio</FooterDescription>
					<FooterDescription>Andreani</FooterDescription>
				</FooterColumnDiv>
			</InfoContainer>
		</FooterContainer>
	);
}

export default Footer;
