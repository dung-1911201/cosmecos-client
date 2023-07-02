import React from 'react';
import { category } from '../../data';
const Category = () => {
	return (
		<div className='category-container'>
			<div className='category-delimiter'></div>
			<div className='category-wrapper'>
				{category &&
					category.map((item, index) => {
						return (
							<div className='category-item '>
								{/* <div className='category-overlay'></div> */}
								<img src={item.url} alt={item.url} />
								<div className='category-info'>
									<h2>{item.title}</h2>
									<span>{item.content}</span>
									{/* <button className={`cate-btn-${index}`}>Explore</button> */}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Category;
