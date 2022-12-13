import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProductContext } from "./Context/Product";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import Products from "./Routes/Products";

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<ProductContext>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Navigate to="/" />} />
					<Route path="cart" element={<Cart />} />
					<Route path="products" element={<Products />} />
				</Routes>
			</ProductContext>
		</QueryClientProvider>
	);
}

export default App;
