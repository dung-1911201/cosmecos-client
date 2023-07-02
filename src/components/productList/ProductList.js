import { React, useEffect } from 'react';
import Product from './Product';
import { fetchProducts } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
const ProductList = () => {
	const dispatch = useDispatch();
	const { listProducts } = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<div className='product-list-container' id='product'>
			<div className='product-header'>
				<h2 className='product-title'>Best products</h2>
				<h2 className='pro-title-2'>Best Sellers Products</h2>
				<p>The stylish and organized cosmetic products</p>
			</div>
			<div className='product-delimiter'></div>
			<div className='product-list-wraper'>
				<div className='product-list'>
					{listProducts &&
						listProducts.map((item) => {
							return <Product key={item._id} item={item} />;
						})}
				</div>
			</div>
			<div className='more-product'>
				<Button className='btn-more-product' variant='outlined'>
					EXPLORE MORE
				</Button>
			</div>
		</div>
	);
};

export default ProductList;
