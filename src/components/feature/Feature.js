import { React, useRef } from 'react';
const Feature = () => {
	return (
		<div className='feature-container'>
			<div className='feature-item-info'>
				<div className='item-info-left'>
					<p className='content-feature'>Perfect Cosmetic</p>
					<p className='cosmecos_content'>
						Popularized through customer relationships with some of the world’s most recognizable faces, the
						“brow revolution” she ignited has become a landmark
					</p>
					<button>
						<a href='#product'>Read More</a>
					</button>
				</div>
			</div>
			<div className='feature-item-right'>
				<img
					className='banner-right'
					alt=''
					src='https://g2h4v2c9.stackpathcdn.com/themes/cosmecos-new/wp-content/uploads/2021/02/home1-slide1-img.png'
				/>
			</div>
		</div>
	);
};

export default Feature;
