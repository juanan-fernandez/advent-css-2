import { useContext } from 'react';
import './CartList.css';
import CartContext from '../../../store/cart-context';
import Card from '../../UI/Card/Card';
import CartItem from '../CartItem/CartItem.jsx';

const CartList = () => {
	const cartCtx = useContext(CartContext);

	const cartItems = (
		<ul>
			{cartCtx.items.map(item => {
				return (
					<li key={item.id}>
						<CartItem
							id={item.id}
							name={item.name}
							price={item.price}
							units={item.units}
							img={item.img}
						/>
						<div className='cart__line'></div>
					</li>
				);
			})}
		</ul>
	);
	return (
		<>
			<h1 className='cart__title'>Your Cart</h1>
			{cartCtx.items.length > 0 ? (
				<div className='cart__list'>{cartItems}</div>
			) : (
				<div className='cart__text'>Your Cart is empty</div>
			)}
		</>
	);
};

export default CartList;
