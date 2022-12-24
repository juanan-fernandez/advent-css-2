import React, { useState } from 'react';

export const InCartContext = React.createContext();

export const InCartProvider = ({ children }) => {
	const [inCart, setInCart] = useState(false);
	const putInCart = () => setInCart(true);
	const quitInCart = () => setInCart(false);
	const isInCart = {
		inCart,
		putInCart,
		quitInCart,
	};
	return <InCartContext.Provider value={isInCart}>{children}</InCartContext.Provider>;
};

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addToCart: item => {},
	addItem: id => {},
	removeItem: id => {},
});
export default CartContext;

const defaultCart = { items: [], totalAmount: 0 };

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(defaultCart);

	const addToCartHandler = item => {
		let updatedItemsCart = [];
		let updatedAmount = 0;
		setCart(prevCart => {
			updatedItemsCart = [...prevCart.items, { ...item, units: 1 }];
			updatedAmount = Number(prevCart.totalAmount) + Number(item.price);
			return { items: updatedItemsCart, totalAmount: updatedAmount };
		});
	};
	const addItemHandler = (id, quit = false) => {
		let updatedItemsCart = [];
		let updatedAmount = 0;
		let updatedUnits = 0;
		const searchedItem = cart.items.find(it => it.id === id);

		if (searchedItem) {
			setCart(prevCart => {
				updatedItemsCart = prevCart.items.map(itm => {
					if (itm.id === id) {
						updatedUnits = quit ? Number(itm.units) - 1 : Number(itm.units) + 1;
						return { ...itm, units: updatedUnits };
					}
					return itm;
				});
				updatedAmount = quit
					? -1 * Number(searchedItem.price)
					: Number(searchedItem.price);
				updatedAmount = Number(prevCart.totalAmount) + updatedAmount;
				return { items: updatedItemsCart, totalAmount: updatedAmount };
			});
		}
	};

	const removeItemHandler = id => {
		let updatedItemsCart = [];
		let updatedAmount = 0;
		setCart(prevCart => {
			updatedItemsCart = prevCart.items.filter(itm => itm.id !== id);
			updatedAmount = updatedItemsCart.reduce((acc, itm) => {
				return (acc += itm.price * itm.units);
			}, 0);
			return { items: updatedItemsCart, totalAmount: updatedAmount };
		});
	};

	const cartData = {
		items: cart.items,
		totalAmount: cart.totalAmount,
		addToCart: addToCartHandler,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};

	return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};
