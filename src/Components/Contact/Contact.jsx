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
	const sendEmail = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const contactData = Object.fromEntries(formData);
		if (!contactData.subject || !contactData.name || !contactData.text) {
			return alert("Debes llenar todos los campos");
		}
		window.location.href = `mailto:rodriguezcadr@gmail.com?subject=${contactData.subject}&body=${contactData.text}`;
	};

	return (
		<ContactContainer id="contact">
			<ContactTitle>Contáctanos</ContactTitle>
			<GlobalSubtitles>Dejanos un e-mail</GlobalSubtitles>
			<ContactForm onSubmit={sendEmail}>
				<ContactInput type="text" placeholder="Nombre" name="name" />
				<ContactInput type="text" placeholder="Asunto" name="subject" />
				<Text placeholder="Escriba aquí" name="text" />
				<SendButton>Enviar</SendButton>
			</ContactForm>
		</ContactContainer>
	);
}

export default Contact;
