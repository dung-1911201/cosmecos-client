import React from 'react';
import Feature from '../../components/feature/Feature';
import ProductList from '../../components/productList/ProductList';
import BannerVerI from '../../components/bannerVerI/BannerVerI';
import Category from '../../components/category/Category';
import Blogs from '../../components/blogs/Blogs';
const Home = () => {
	return (
		<>
			<Feature />
			<Category />
			<ProductList />
			<BannerVerI />
			<Blogs />
		</>
	);
};

export default Home;
