import React from "react";
import { StyledLink, WspLink } from "../General/Global";
import whatsapp_button from "../../assets/whatsapp_button.svg";
import { WspIso } from "../General/Global";

function WhatsappIcon() {
	return (
		<WspLink>
			<WspIso src={whatsapp_button} alt="boton de whatsapp" />
		</WspLink>
	);
}

export default WhatsappIcon;
