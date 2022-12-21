import './CartItem.css';

const CartItem = ({ id, name, price, units, img }) => {
	return (
		<div className='cart-item'>
			<div className='cart-item__img'>
				<img src={img} />
				<span>2</span>
			</div>
			<p>{name}</p>
		</div>
	);
};

export default CartItem;
