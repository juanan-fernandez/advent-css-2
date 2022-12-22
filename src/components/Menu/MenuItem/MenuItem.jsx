import './MenuItem.css';
import checkSvg from '../../../assets/check.svg';
import { format2Digits } from '../../../utils/numbers';
import { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';

const MenuItem = ({ id, name, price, img, color }) => {
	const cartCtx = useContext(CartContext);
	const [isInCart, setIsInCart] = useState(false);
	//const format2Digits = myNumber => (Math.round(myNumber * 100) / 100).toFixed(2);

	const buttonClickHandler = () => {
		cartCtx.addToCart({ id, name, price, img });
		setIsInCart(true);
	};

	const btnAddToCart = !isInCart ? (
		<button className='item__button' onClick={buttonClickHandler}>
			Add To Cart
		</button>
	) : (
		<button className='item__button--in-cart'>
			<img src={checkSvg} alt='Already in cart' />
			&nbsp;&nbsp;&nbsp;&nbsp; In Cart
		</button>
	);

	return (
		<div className='item'>
			<img src={img}></img>
			<div className='item__text--background' style={{ backgroundColor: color }}>
				<div className='item__text--info'>
					<p>{name}</p>
					<h1>${format2Digits(price)}</h1>
				</div>
			</div>
			{btnAddToCart}
		</div>
	);
};

export default MenuItem;
