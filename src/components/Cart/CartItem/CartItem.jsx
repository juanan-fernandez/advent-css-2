import { useContext } from 'react';
import './CartItem.css';
import minorLogo from '../../../assets/chevron.svg';
import plusLogo from '../../../assets/chevron_right.svg';
import CartContext from '../../../store/cart-context';
import { formatUsdCurrency } from '../../../utils/numbers.js';
const CartItem = ({ id, name, price, units, img }) => {
	const cartCtx = useContext(CartContext);
	const addOneItemHandler = () => {
		console.log(id);
		cartCtx.addItem(id);
	};
	return (
		<div className='cart-item'>
			<div className='cart-item__img'>
				<img src={img} />
				<span>{units}</span>
			</div>
			<div className='cart-item__info'>
				<div>
					<p>{name}</p>
					<p className='bold'>{formatUsdCurrency(price)}</p>
				</div>
				<div className='cart-item__info--buttons'>
					<div>
						<button>
							<img src={minorLogo} alt='One less' />
						</button>
						<span>{units}</span>
						<button onClick={addOneItemHandler}>
							<img className='right' src={plusLogo} alt='One more' />
						</button>
					</div>
					<h1>{formatUsdCurrency(price * units)}</h1>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
