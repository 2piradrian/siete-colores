import React from "react";
import { GlobalSubtitles } from "../General/Global";
import {
	ContactContainer,
	ContactForm,
	ContactInput,
	ContactTitle,
	SendButton,
	Text,
} from "./ContactStyles";

function Contact() {
	return (
		<ContactContainer id="contact">
			<ContactTitle>Contáctanos</ContactTitle>
			<GlobalSubtitles>Dejanos un e-mail</GlobalSubtitles>
			<ContactForm>
				<ContactInput type="text" placeholder="Nombre" />
				<ContactInput type="text" placeholder="Asunto" />
				<Text placeholder="Escriba aquí" />
				<SendButton>Enviar</SendButton>
			</ContactForm>
		</ContactContainer>
	);
}

export default Contact;
