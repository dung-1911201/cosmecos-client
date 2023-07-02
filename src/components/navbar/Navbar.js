import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../store/slice/cartSlice';
import { loginSuccess, logout } from '../../store/slice/userSlice';
const Navbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { products } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.user);
	// const path = location.pathname.split('/')[1];
	// const [menuClick, setMenuClick] = useState(false);
	// const menuToggleRef = useRef();
	// const menuRef = useRef();
	// useEffect(() => {
	// 	setMenuClick(false);
	// 	menuRef.current.style.transform = 'translateX(-100%)';
	// }, [path]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('cart'));
		const dataUser = JSON.parse(localStorage.getItem('user'));
		if (dataUser) {
			dispatch(loginSuccess(dataUser));
		}
		if (data) {
			dispatch(setCart(data));
		}
	}, [dispatch]);

	// const handleMenu = () => {
	// 	menuRef.current.style.transform = 'translateX(-100%)';
	// 	setMenuClick(!menuClick);
	// };

	// if (menuClick === true) {
	// 	menuRef.current.style.transform = 'translateX(0%)';
	// }
	const handleLogout = () => {
		dispatch(logout());
	};

	// const toggleMenu = () => {
	// 	menuRef.current.style.transform = 'translateX(-100%)';
	// 	setMenuClick(!menuClick);
	// };
	return (
		<div className='container-nav'>
			<div className='navbar-wrapper'>
				{/* <MenuSide menuRef={menuRef} toggleMenu={toggleMenu} user={user} /> */}
				<div className='navbar-left'>
					<div className='navbar-left-logo'>
						<Link to='/'>
							<h1>
								<img
									src='https://res.cloudinary.com/dgyolr1sq/image/upload/v1683824552/cosmecos/logo_black_ssmlb2.png'
									alt=''
									className='nav-logo'
								/>
							</h1>
						</Link>
					</div>
				</div>
				<div className='navbar-center'>
					<ul className='nav-list'>
						<li>
							<Link to=''>Home</Link>
						</li>
						<li>
							<Link>Pages</Link>
						</li>
						<li>
							<Link>Portfolio</Link>
						</li>
						<li>
							<Link>Blogs</Link>
						</li>
						<li>
							<Link>Shop</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
					</ul>
				</div>
				<div className='navbar-right'>
					<div className='navbar-center-input'>
						<SearchIcon className='navbar-center-search-icon' />
					</div>
					<div className='right-list'>
						<ul className='nav-right-list'>
							{user ? (
								<>
									<li className='navbar-username'>
										<Link to='/me'>
											<img
												alt=''
												width={30}
												height={30}
												src='https://res.cloudinary.com/dgyolr1sq/image/upload/v1683772662/cosmecos/home1-image-1_giads8.jpg'
											/>
										</Link>
										{`hello!,${user.userName}`}
									</li>
									<li onClick={handleLogout}>
										<Link alt='Logout'>
											<LogoutOutlinedIcon />
										</Link>
									</li>
								</>
							) : (
								''
							)}

							<li className='nav-cart'>
								<Link to='/cart'>
									<Badge badgeContent={products.length} color='primary'>
										<ShoppingCartOutlinedIcon />
									</Badge>
								</Link>
							</li>
							{user ? (
								''
							) : (
								<li>
									<Link alt='login' to='/login'>
										<LoginOutlinedIcon />
									</Link>
								</li>
							)}
							{/* {user ? (
								''
							) : (
								<li>
									<Link to='/register'>REGISTER</Link>
								</li>
							)} */}
						</ul>
					</div>
				</div>
				{/* <div className='navbar-right-cart-icon'>
					<Link to='/cart'>
						<Badge badgeContent={products.length} color='primary'>
							<ShoppingCartOutlinedIcon />
						</Badge>
					</Link>
				</div> */}
				{/* <div
					// onClick={handleMenu}
					ref={menuToggleRef}
					className={menuClick === true ? 'navbar-menu navbar-menu-toggle' : 'navbar-menu'}
				>
					<div></div>
					<div></div>
					<div></div>
				</div> */}
			</div>
		</div>
	);
};

export default Navbar;
