import React from "react";
import Contact from "../Components/Contact/Contact";
import { StyledMain } from "../Components/General/Global";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Nav/Nav";
import Popular from "../Components/Popular/Popular";
import WhatsappIcon from "../Components/WhatsappIcon/WhatsappIcon";

function Home() {
	return (
		<>
			<Nav />
			<StyledMain>
				<Hero />
				<Popular />
				<Contact />
				<WhatsappIcon />
			</StyledMain>
		</>
	);
}

export default Home;
