import './App.css';
import Layout from './components/UI/Layout/Layout';
import MenuList from './components/Menu/MenuList/MenuList';
import Cart from './components/Cart/Cart';
import { CartProvider } from './store/cart-context.jsx';

function App() {
	return (
		<div>
			<Layout>
				<CartProvider>
					<MenuList />
					<Cart />
				</CartProvider>
			</Layout>
		</div>
	);
}

export default App;
