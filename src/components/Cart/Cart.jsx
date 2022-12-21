import './Cart.css';
import Card from '../UI/Card/Card';
import CartList from './CartList/CartList';
import CartAmount from './CartAmount/CartAmount';

const Cart = () => {
	return (
		<Card>
			<div className='cart-container'>
				<CartList />
				<div className='cart-container__amount'>
					<CartAmount />
				</div>
			</div>
		</Card>
	);
};

export default Cart;
