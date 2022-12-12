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
		cartItem = { ...cartItem, quantity: 1 };
		setCartList([...cartList, cartItem].sort(sortCart));
		saveLocalStorage([...cartList, cartItem].sort(sortCart));
	};

	const updateItem = (cartItem) => {
		const deleteOldItem = cartList.filter((item) => item.id !== cartItem.id);
		setCartList([...deleteOldItem, cartItem].sort(sortCart));
		saveLocalStorage([...deleteOldItem, cartItem].sort(sortCart));
	};

	const deleteItem = (cartItem) => {
		const newList = cartList.filter((item) => item.id !== cartItem.id);
		setCartList(newList.sort(sortCart));
		saveLocalStorage(newList.sort(sortCart));
	};

	const sortCart = (a, b) => {
		if (a.id > b.id) {
			return -1;
		}
		if (b.id > a.id) {
			return 1;
		}
		return 0;
	};

	return (
		<Product.Provider
			value={{ products, setProducts, cartList, updateCart, updateItem, deleteItem }}
		>
			{children}
		</Product.Provider>
	);
};
