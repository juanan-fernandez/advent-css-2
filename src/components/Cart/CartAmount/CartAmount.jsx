import './CartAmount.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const CartAmount = () => {
	const cartCtx = useContext(CartContext);
	const taxes = cartCtx.totalAmount * 0.16;
	const totalAmount = Number(cartCtx.totalAmount) + Number(taxes);
	const f = new Intl.NumberFormat('en-us', {
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
		style: 'currency',
	});
	return (
		<div className='amountbox'>
			<div className='line'></div>
			<div className='amountbox__amount'>
				<div className='amountbox__amount--text'>Subtotal:</div>
				<h1>{f.format(cartCtx.totalAmount)}</h1>
			</div>
			<div className='amountbox__amount'>
				<div className='amountbox__amount--text'>Tax:</div>
				<h1>{f.format(taxes)}</h1>
			</div>
			<div className='amountbox__amount'>
				<div className='amountbox__amount--text'>Total:</div>
				<h1 className='azulete'>{f.format(totalAmount)}</h1>
			</div>
		</div>
	);
};

export default CartAmount;
