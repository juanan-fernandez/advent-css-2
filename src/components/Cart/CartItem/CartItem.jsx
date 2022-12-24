import { useContext, useState } from 'react';
import './CartItem.css';
import minorLogo from '../../../assets/chevron.svg';
import plusLogo from '../../../assets/chevron_right.svg';
import CartContext from '../../../store/cart-context';
import { formatUsdCurrency } from '../../../utils/numbers.js';

const CartItem = ({ id, name, price, units, img }) => {
	const [showModal, setShowModal] = useState(false);
	const cartCtx = useContext(CartContext);
	const addOneItemHandler = () => {
		cartCtx.addItem(id);
	};

	const removeOneItemHandler = () => {
		if (units === 1) {
			setShowModal(true);
			return;
		}
		cartCtx.addItem(id, true); //param true for subsrtracting one item
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
						<button onClick={removeOneItemHandler}>
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
