import './CartItem.css';
import minorLogo from '../../../assets/chevron.svg';
import plusLogo from '../../../assets/chevron_right.svg';
const CartItem = ({ id, name, price, units, img }) => {
	return (
		<div className='cart-item'>
			<div className='cart-item__img'>
				<img src={img} />
				<span>{units}</span>
			</div>
			<div className='cart-item__info'>
				<div>
					<p>{name}</p>
					<p>{price}</p>
				</div>
				<div className='cart-item__info--buttons'>
					<div>
						<button>
							<img src={minorLogo} alt='One less' />
						</button>
						<span>2</span>
						<button>
							<img className='right' src={plusLogo} alt='One more' />
						</button>
					</div>
					<h1>$22.00</h1>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
