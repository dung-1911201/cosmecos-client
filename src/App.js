import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Register from './pages/register/Register';
import Payment from './pages/payment/Payment';
import NotFound from './pages/notFound/NotFound';
import Success from './pages/success/Success';
import './assets/css/style.css';

import User from './pages/user/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/navbar/Topbar';
import Footer from './components/footer/Footer';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Address from './pages/address/Address';
const App = () => {
	return (
		<div className='app-container'>
			<BrowserRouter>
				<Topbar />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/single/:id' element={<SingleProduct />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/address' element={<Address />} />
					<Route path='/payment' element={<Payment />} />
					<Route path='/success' element={<Success />} />
					<Route path='/me' element={<User />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
