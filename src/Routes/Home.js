import React from "react";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
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
			</StyledMain>
			<Footer />
			<WhatsappIcon />
		</>
	);
}

export default Home;
