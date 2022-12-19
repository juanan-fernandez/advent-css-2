import './MenuItem.css';

const MenuItem = ({ id, name, price, img, color }) => {
	const format2Digits = myNumber => (Math.round(myNumber * 100) / 100).toFixed(2);

	return (
		<div className='item'>
			<img src={img}></img>
			<div className='item__text--background' style={{ backgroundColor: color }}>
				<div className='item__text--info'>
					<p>{name}</p>
					<h1>${format2Digits(price)}</h1>
				</div>
			</div>
			<button className='item__button'>Add To Cart</button>
		</div>
	);
};

export default MenuItem;
