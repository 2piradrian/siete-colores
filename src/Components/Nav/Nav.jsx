import React, { useEffect } from "react";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Navbar, Cart, Burger, NavContainer } from "./NavStyles";
import { StyledLink } from "../General/Global";
import DeskNav from "./DeskNav";

function Nav() {
	const [burger, setBurger] = useState(false);
	const [desk, setDesk] = useState(false);

	useEffect(() => {
		if (visualViewport.width >= 900) {
			setDesk(true);
		}
	}, []);

	return (
		<Navbar>
			<NavContainer>
				{desk && (
					<>
						<DeskNav />
						<StyledLink to={"/cart"}>
							<Cart />
						</StyledLink>
					</>
				)}
				{!desk && (
					<>
						<Burger onClick={() => setBurger(!burger)} />
						<div onClick={() => setBurger(!burger)}>
							{burger && <MobileNav />}
						</div>
						<StyledLink to={"/cart"}>
							<Cart />
						</StyledLink>
					</>
				)}
			</NavContainer>
		</Navbar>
	);
}

export default Nav;
