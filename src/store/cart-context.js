import { useContext, useState } from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
});

export default CartContext;

const defaultCart = { items: [], totalAmount: 0 };
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(defaultCart);

	const addItemHandler = item => {
		let updatedItemsCart = [];
		let updatedAmount = 0;
		const searchedItem = cart.items.find(it => it.id === item.id);
		if (searchedItem) {
			setCart(prevCart => {
				updatedItemsCart = prevCart.map(itm => {
					if (itm.id === item.id) {
						return { ...itm, units: Number(itm.units) + 1 };
					}
					return itm;
				});
				updatedAmount = Number(prevCart.totalAmount) + Number(item.price);
			});
		}

		if (!searchedItem) {
			setCart(prevCart => {
				updatedAmount = Number(prevCart.totalAmount) + Number(item.price);
				updatedItemsCart = prevCart.items.concat(item);
			});
			return { items: updatedItemsCart, totalAmount: updatedAmount };
		}
	};

	const removeItemHandler = id => {
		console.log(id);
	};

	const cartData = {
		items: cart.items,
		totalAmount: cart.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};
