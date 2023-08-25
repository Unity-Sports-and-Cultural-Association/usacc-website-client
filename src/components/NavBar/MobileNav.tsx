import React, { ReactElement } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { SlLocationPin, SlPhone } from 'react-icons/sl';
import './MobileNav.scss';

type MobileNavProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;

}

function MobileNav({ isOpen, setOpen }: MobileNavProps): ReactElement {
	return (
		<>
			<div className="navbar-container">
				<img src={'usacc-logo.svg'} className="app-logo" alt="logo" />
				<div className={isOpen ? 'nav-button active' : 'nav-button'}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
			<div className={isOpen ? 'side-menu active' : 'side-menu'} >
				<div className='links-side-menu'>
					<div className='side-nav-links'>
						<div>menu</div>
						<div>booking</div>
						<div>volunteering</div>
						<div>membership</div>
					</div>
					<div className='side-divider'/>
					<div className='side-nav-links'>
						<div>about us</div>
						<div>facebook</div>
					</div>
					<div className='side-contact-container'>
						<div className='side-contact'>
							<div className='side-cotact-logo'>
								<SlLocationPin />
							</div>
							<div className='side-contact-link'>
                                10 Dunbar Ave,<br/>
                                Dorchester Center,<br/>
                                Ma 02124
							</div>
						</div>
						<div className='side-contact'>
							<div className='side-cotact-logo'>
								<SlPhone />
							</div>
							<div className='side-contact-link'>
                            (617) 436-9550
							</div>
						</div>
						<div className='side-footer'>
							<div className='side-email'>
                            someLongEmailName@gmail.com
							</div>
							<div className='side-footer-text'>
                            Unity Sports and Cultural Association is a 501(c)4 organization in Boston
								<br/>
                            © 2023 Unity Sports and Cultural Club. All rights reserved
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MobileNav;
