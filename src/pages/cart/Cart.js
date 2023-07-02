import { React, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCart, updateCart, deleteCart } from '../../store/slice/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
const Cart = () => {
	const { products, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(navigate.parameter);
	console.log('dispatch: ', dispatch);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('cart'));
		console.log('data: ', data);
		if (data !== null) {
			dispatch(setCart(data));
		}
	}, [dispatch]);
	let filterProducts = [...products];
	const handleClick = (type, indexs, productId) => {
		const updatedFilterProducts = filterProducts.map((item, index) => {
			if (index === indexs) {
				if (type === 'decrement') {
					return {
						...item,
						quantity: item.quantity > 1 ? item.quantity - 1 : 1
					};
				} else {
					return {
						...item,
						quantity: item.quantity + 1
					};
				}
			}
			return item;
		});
		filterProducts = updatedFilterProducts;
		dispatch(updateCart(updatedFilterProducts));
	};

	const handleRemoveCart = (indexs) => {
		const filterProductsRemove = filterProducts.filter((item, index) => index !== indexs);
		dispatch(deleteCart(filterProductsRemove));
	};
	const handleCartNextStep = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			navigate({
				pathname: '/login',
				search: '?from=Cart'
			});
		} else {
			navigate('/address');
		}
	};
	console.log('total: ', total);
	return (
		<div class='table-cart'>
			<div class='container'>
				<h1 class='title-cart'>Cart</h1>
				<table>
					<tr class='tr-1'>
						<th></th>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th></th>
					</tr>
					{products.length ? (
						products.map((item, index) => {
							return (
								<tr style={{ textAlign: 'center' }}>
									<td className='td-img'>
										{' '}
										<img src={item.image} alt='' />
									</td>
									<td class='td-left product-name'>
										{' '}
										<span>{item.name}</span>
									</td>
									<td class='td-left center'>
										<span>
											Price:<span style={{ color: 'red' }}>{item.price_new}</span>
										</span>
									</td>
									<td class='td-left'>
										<div className='ud-cart'>
											<div
												className='decrement ud'
												onClick={() => handleClick('decrement', index, item._id)}
											>
												-
											</div>
											<div className='quantity-item'>{item.quantity}</div>
											<div
												className='increment ud'
												onClick={() => handleClick('increment', index, item._id)}
											>
												+
											</div>
										</div>
									</td>
									<td class='td-remove center'>
										<div onClick={() => handleRemoveCart(index)} className='cart-clear-icon'>
											<ClearIcon />
										</div>
									</td>
								</tr>
							);
						})
					) : (
						<h2>Your Cart Is Empty !</h2>
					)}
				</table>
				<div className='checkout'>
					<div className='total-cart'>Total:${total}</div>
					<Button className='address-shipping' onClick={handleCartNextStep}>
						Address Shipping
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
