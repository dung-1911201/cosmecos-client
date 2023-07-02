import { Button } from '@mui/material';
import React from 'react';
import { blogs } from '../../data';
const Blogs = () => {
	return (
		<div className='blog-container'>
			<h2 className='product-title center-text'>News & Articles</h2>
			<h2 className='pro-title-2 center-text'>OUR BEAUTY BLOGs</h2>
			<div className='category-wrapper'>
				{blogs &&
					blogs.map((item, index) => {
						return (
							<div className='blogs-item '>
								<img src={item.url} alt={item.url} />
								<div className='blogs-info'>
									<span>{item.start_date}</span>
									<h2>{item.title}</h2>
								</div>
								<Button className='btn-read-more'>Read More</Button>
							</div>
						);
					})}
			</div>
			<div className='more-product view-more'>
				<Button className='btn-more-product' variant='outlined'>
					View More
				</Button>
			</div>
		</div>
	);
};

export default Blogs;
