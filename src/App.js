import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import Products from "./Routes/Products";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="cart" element={<Cart />} />
				<Route path="products" element={<Products />} />
			</Routes>
		</>
	);
}

export default App;
