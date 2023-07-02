import { React, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { createComment, getAllComment } from '../../store/slice/commentSlice';
import { Button } from '@mui/material';
const SingleProduct = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const productId = location.pathname.split('/')[2];
	const { isFetching } = useSelector((state) => state.product);
	const [listProducts, setListProducts] = useState([]);
	const singleProducts = listProducts.find((item) => item._id === productId);
	const { comments } = useSelector((state) => state.comment);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [quantityCart, setQuantityCart] = useState(1);
	const [comment, setComment] = useState('');

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem('products'));
		setListProducts(products);
	}, []);
	const handleQuantityClick = (type) => {
		if (type === 'decrement') {
			quantityCart > 1 && setQuantityCart((quantityCart) => quantityCart - 1);
		} else {
			setQuantityCart((quantityCart) => quantityCart + 1);
		}
	};
	const handleAddToCart = () => {
		const product = {
			_id: singleProducts._id,
			name: singleProducts.name,
			inStock: singleProducts.inStock,
			desc: singleProducts.desc,
			image: singleProducts.image,
			price_new: singleProducts.price_new,
			price_old: singleProducts.price_old,
			quantity: quantityCart
		};
		dispatch(addToCart(product));
		navigate('/cart');
	};
	const handleComment = () => {
		if (!user) {
			navigate('/login');
		} else {
			const data = {
				userId: user._id,
				content: comment,
				productId
			};
			dispatch(createComment(data));
			// navigate(0);
		}
	};

	return (
		<div className='product-detail-container'>
			{isFetching ? (
				<div style={{ textAlign: 'center' }}>Loading...</div>
			) : (
				<div className='single-product row'>
					<div className='col-5'>
						<img src={singleProducts && singleProducts.image && singleProducts.image[0]} alt='' />
					</div>
					<div className='col-7'>
						<div className='single-product-info'>
							<div className='name-product'>{singleProducts && singleProducts.name}</div>
							<div className='price-product'>
								<span className='sproduct price-old'>
									<p>{singleProducts && singleProducts.price_old}$</p>
								</span>
								<span className='sproduct price-new'>
									<p>{singleProducts && singleProducts.price_new}$</p>
								</span>
							</div>
							<span className='single-product-description'>{singleProducts && singleProducts.desc}</span>
							<div className='sproduct-instock'>SKU: {singleProducts && singleProducts.inStock}</div>
							<div className='single-product-quantity'>
								<div className='up-down'>
									<div className='quantity-sproduct' onClick={() => handleQuantityClick('decrement')}>
										<RemoveIcon />
									</div>
									<div className='quantity-sproduct'>{quantityCart}</div>
									<div className='quantity-sproduct' onClick={() => handleQuantityClick('increment')}>
										<AddIcon />
									</div>
								</div>
								<Button className='add-cart' onClick={handleAddToCart}>
									Add To Cart
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='hr'></div>
			<div className='single-product-comment'>
				<div className='comment-container'>
					<div className='comment-wraper'>
						<h2>Review(s)</h2>
						<div className='comment-hr'></div>
						<div className='comment-area'>
							<ul>
								{comments &&
									comments.map((item) => {
										return (
											<li>
												<span>
													{item.times} / <b>{item.userName}</b>
												</span>
												<span>{item.comment}</span>
												<div className='user-comment-hr'></div>
											</li>
										);
									})}
								{comments && comments.length <= 0 && (
									<div style={{ marginTop: 20, fontSize: 20 }}>*This product has no reviews yet </div>
								)}
							</ul>
						</div>
					</div>
					<div style={{ width: '100%' }} className='rate-product'>
						<div className='product-form-comment'>
							<textarea
								onChange={(e) => setComment(e.target.value)}
								placeholder='Your comment...'
								// type='textarea'
							/>
							<Button onClick={() => handleComment()}>SEND</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
