import './CartList.css';

import Card from '../../UI/Card/Card';
import CartItem from '../MenuItem/MenuItem.jsx';

const CartList = () => {
	const colors = ['#e1f0fe', '#f7f7ff', '#dddcf9', '#defef0'];
	const cartItems = (
		<ul>
			{menu.map(item => {
				return (
					<li key={item.id}>
						<CartItem
							id={item.id}
							name={item.name}
							price={item.price}
							units={item.units}
							img={item.img}
							color={colors[item.id % 4]}
						/>
					</li>
				);
			})}
		</ul>
	);
	return (
		<>
			<Card>
				<h1 className='cart__title'>Your Cart</h1>
				<div className='cart__list'>{cartItems}</div>
			</Card>
		</>
	);
};

export default Cart;
