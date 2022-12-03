import React from "react";
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
		<ContactContainer>
			<ContactTitle>Contáctanos</ContactTitle>
			<p>Dejanos un e-mail</p>
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
