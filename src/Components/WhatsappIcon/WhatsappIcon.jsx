import React from "react";
import { StyledLink } from "../General/Global";
import whatsapp_button from "../../assets/whatsapp_button.svg";
import { WspIso } from "../General/Global";

function WhatsappIcon() {
	return (
		<StyledLink>
			<WspIso src={whatsapp_button} alt="boton de whatsapp" />
		</StyledLink>
	);
}

export default WhatsappIcon;
