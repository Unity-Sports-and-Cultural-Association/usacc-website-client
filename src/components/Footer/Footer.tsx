import React, { ReactElement } from 'react';

import './Footer.scss';

function Footer(): ReactElement {
	return (
		<div className='app-footer-container'>
			<div className='footer-navs'>
				<div className='footer-top-nav'>
					<div className='footer-nav-links-container'>
						<div className='footer-nav-links'>
							<div>
                                about us
							</div>
							<div>
                                volunteering
							</div>
							<div>
                                membership
							</div>
						</div>
						<div className='footer-nav-links'>
							<div>
                                menu
							</div>
							<div>
                                renting
							</div>
							<div>
                                wiki
							</div>
						</div>
					</div>
					<div className='footer-app-logo'>

					</div>
				</div>
				<div className='footer-bottom-nav'>
					<div className='footer-location-container'>
						<div className='footer-location-icon'>

						</div>
						<div className='footer-location-text'>

						</div>
					</div>
					<div className='footer-bottom-right-links'>
						<div className='footer-phone-container'>
							<div className='footer-phone-icon'>

							</div>
							<div className='footer-phone-link'>

							</div>
						</div>
						<div className='footer-email-container'>
							<div className='footer-email-icon'>

							</div>
							<div className='footer-email-link'>

							</div>
						</div>

					</div>
				</div>
			</div>
			<div className='footer-disclaimer'>

			</div>
		</div>
	);
}

export default Footer;
