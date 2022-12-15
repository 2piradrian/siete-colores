import React from "react";
import { WspLink } from "../General/Global";
import whatsapp_button from "../../assets/whatsapp_button.svg";
import { WspIso } from "../General/Global";

function WhatsappIcon() {
	return (
		<WspLink href={"https://api.whatsapp.com/send?phone=543512742036"} target="_blank">
			<WspIso src={whatsapp_button} alt="boton de whatsapp" />
		</WspLink>
	);
}

export default WhatsappIcon;
