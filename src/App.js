import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import store from "./Redux/Store/Store";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import Products from "./Routes/Products";

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnMount: true,
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Navigate to="/" />} />
					<Route path="cart" element={<Cart />} />
					<Route path="products" element={<Products />} />
				</Routes>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
