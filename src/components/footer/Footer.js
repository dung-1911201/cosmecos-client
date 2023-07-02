import { React } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const BannerVerI = () => {
	return (
		<div className='footer-body'>
			<div className='footer-main'>
				<div className='footer-row'>
					<div className='col-3'>
						<div className='col-title'>Contacts</div>
						<div className='list-icon footer-icon'>
							<PlaceIcon />
							<p>58 White St., New York</p>
						</div>
						<div className='footer-icon'>
							<EmailIcon />
							<p>cosmecos_company@mail.com</p>
						</div>
						<div className='footer-icon'>
							<LocalPhoneIcon />
							<p>0961467725</p>
						</div>
					</div>
					<div className='col-6 footer-center'>
						<div className='center-title'>COSMECOS.</div>
						<div className='about-footer'>
							Popularized through customer relationships with some of the world’s most recognizable faces,
							the “brow revolution”.
						</div>
						<div className='social-media'>
							<ul className='list-social'>
								<li>
									<TwitterIcon />
								</li>
								<li>
									<FacebookIcon />
								</li>
								<li>
									<LinkedInIcon />
								</li>
								<li>
									<InstagramIcon />
								</li>
							</ul>
						</div>
					</div>
					<div className='col-3 right-title'>
						<div className='title-contact'>Contacts</div>
						<p>Eyeshadow Collection</p>
						<p>How Clean Make Up Brushes</p>
						<p>The Right Foundation</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerVerI;
