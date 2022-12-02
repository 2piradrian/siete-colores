import React from "react";
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
				<WhatsappIcon />
			</StyledMain>
		</>
	);
}

export default Home;
