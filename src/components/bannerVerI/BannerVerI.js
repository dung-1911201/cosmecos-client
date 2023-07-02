import { React, useEffect } from 'react';
import { fetchProducts } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nature } from '../../data';
const BannerVerI = () => {
	const dispatch = useDispatch();
	const { listProducts } = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<div className='product-list-container' id='product'>
			<div className='product-header'>
				<h2 className='product-title'>About Cosmecos</h2>
				<h2 className='pro-title-2'>WE GUARANTEED PERFECT QUALITY</h2>
				<div className='nature-wrapper'>
					{nature &&
						nature.map((item, index) => {
							return (
								<div className='nature-item '>
									<img src={item.url} alt={item.url} />
									<div className='nature-info'>
										<h2>{item.title}</h2>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default BannerVerI;
