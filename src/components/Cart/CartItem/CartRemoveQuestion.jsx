import Modal from '../../UI/Modal/Modal';
import './CartRemoveQuestion.css';

const CartRemoveQuestion = ({ removeItem, closeModal }) => {
	return (
		<Modal>
			<div className='question'>
				<p>Do you want to remove this item from your cart?</p>
				<div className='question__buttons'>
					<button onClick={() => removeItem()}>Yes</button>
					<button onClick={() => closeModal()}>No</button>
				</div>
			</div>
		</Modal>
	);
};

export default CartRemoveQuestion;
