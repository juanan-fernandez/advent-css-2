import menu from '../../../data/menu.js';
import Card from '../../UI/Card/Card';
import MenuItem from '../MenuItem/MenuItem.jsx';
import './MenuList.css';
const MenuList = () => {
	const colors = ['#e1f0fe', '#f7f7ff', '#dddcf9', '#defef0'];
	const menuItems = (
		<ul>
			{menu.map(item => {
				return (
					<li key={item.id}>
						<MenuItem
							id={item.id}
							name={item.name}
							price={item.price}
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
				<h1 className='title'>To Go Menu</h1>
				<div className='list'>{menuItems}</div>
			</Card>
		</>
	);
};

export default MenuList;
