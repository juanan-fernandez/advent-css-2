import './MenuItem.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MenuItem = ({ id, name, price, img, color }) => {
	const cartCtx = useContext(CartContext);

	const format2Digits = myNumber => (Math.round(myNumber * 100) / 100).toFixed(2);

	const buttonClickHandler = () => {
		cartCtx.addToCart({ id, name, price, img });
	};
	return (
		<div className='item'>
			<img src={img}></img>
			<div className='item__text--background' style={{ backgroundColor: color }}>
				<div className='item__text--info'>
					<p>{name}</p>
					<h1>${format2Digits(price)}</h1>
				</div>
			</div>
			<button className='item__button' onClick={buttonClickHandler}>
				Add To Cart
			</button>
		</div>
	);
};

export default MenuItem;
