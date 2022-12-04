import React from "react";
import {
	FooterColumnDiv,
	FooterContainer,
	InfoContainer,
	Spikes,
} from "./FooterStyles";

function Footer() {
	return (
		<FooterContainer>
			<Spikes></Spikes>
			<InfoContainer>
				<FooterColumnDiv></FooterColumnDiv>
				<FooterColumnDiv></FooterColumnDiv>
			</InfoContainer>
		</FooterContainer>
	);
}

export default Footer;
