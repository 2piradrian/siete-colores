import React from "react";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Navbar, Cart, Burger, NavContainer } from "./NavStyles";
import { StyledLink } from "../General/Global";

function Nav() {
	const [burger, setBurger] = useState(false);

	return (
		<Navbar>
			<NavContainer>
				<Burger onClick={() => setBurger(!burger)} />
				<div onClick={() => setBurger(!burger)}>
					{burger && <MobileNav />}
				</div>
				<StyledLink to={"/cart"}>
					<Cart />
				</StyledLink>
			</NavContainer>
		</Navbar>
	);
}

export default Nav;
