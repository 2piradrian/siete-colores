import React from "react";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Navbar, Cart, Burger, NavContainer, CloseNav } from "./NavStyles";

function Nav() {
	const [burger, setBurger] = useState(false);

	return (
		<Navbar>
			<NavContainer>
				<Burger onClick={() => setBurger(!burger)} />
				{burger && <MobileNav />}
				{burger && <CloseNav onClick={() => setBurger(!burger)} />}
				<Cart />
			</NavContainer>
		</Navbar>
	);
}

export default Nav;
