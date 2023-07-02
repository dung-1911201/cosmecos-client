import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
const Product = ({ item }) => {
	return (
		<Link className='product-container' to={`/single/${item._id}`}>
			<div className='product-circle'>
				<img src={item.image} alt='' />
				<div className='info-item'>
					<div className='name-product'>{item.name}</div>
					<div className='rate-star'>
						<StarRateIcon />
						<StarRateIcon />
						<StarRateIcon />
						<StarRateIcon />
						<StarRateIcon />
					</div>
					<div className='low-item'>
						<div className='add-cart'>Add to cart</div>
						<div className='price-item'>
							<span>${item.price_new}</span>
							<span>${item.price_old}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Product;
