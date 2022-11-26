import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
