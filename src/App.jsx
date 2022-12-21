import React from 'react';
import './App.css';
import Layout from './components/UI/Layout/Layout';
import MenuList from './components/Menu/MenuList/MenuList';
import Cart from './components/Cart/Cart';
import { CartProvider } from './store/cart-context.jsx';

function App() {
	return (
		<div>
			<React.StrictMode>
				<Layout>
					<CartProvider>
						<MenuList />
						<Cart />
					</CartProvider>
				</Layout>
			</React.StrictMode>
		</div>
	);
}

export default App;
