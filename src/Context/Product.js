import { createContext, useState } from "react";

const saveLocalStorage = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];

export const Product = createContext();

export const ProductContext = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [cartList, setCartList] = useState(cart);

	const updateCart = (cartItem) => {
		setCartList([...cartList, cartItem]);
		saveLocalStorage([...cartList, cartItem]);
	};

	return (
		<Product.Provider
			value={{ products, setProducts, cartList, updateCart }}
		>
			{children}
		</Product.Provider>
	);
};
