import React, { useState } from 'react';

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
	const addItemHandler = id => {
		let updatedItemsCart = [];
		let updatedAmount = 0;
		const searchedItem = cart.items.find(it => it.id === id);

		if (searchedItem) {
			setCart(prevCart => {
				updatedItemsCart = prevCart.items.map(itm => {
					if (itm.id === id) {
						return { ...itm, units: Number(itm.units) + 1 };
					}
					return itm;
				});
				updatedAmount = Number(prevCart.totalAmount) + Number(searchedItem.price);
				return { items: updatedItemsCart, totalAmount: updatedAmount };
			});
		}
	};

	const removeItemHandler = id => {
		console.log(id);
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
