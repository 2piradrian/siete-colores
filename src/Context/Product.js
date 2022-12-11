import { createContext, useState } from "react";
export const Product = createContext();

export const ProductContext = ({ children }) => {
	const [products, setProducts] = useState([]);
	return (
		<Product.Provider value={{ products, setProducts }}>
			{children}
		</Product.Provider>
	);
};
