import React, { ReactElement } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { SlLocationPin, SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import './DesktopNav.scss';

type DesktopNavProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopNav({ isOpen, setOpen }: DesktopNavProps): ReactElement {
	const closeMenu = (): void => {
		if (isOpen) {
			setOpen(false);
		}
	};

	return (
		<>
			<div className="navbar-container desktop">
				<Link className="no-underline" to="/" onClick={closeMenu}><img src={'usacc-logo.svg'} className="app-logo" alt="logo" /> </Link>
				<div className='right-menu-container'>
					<div className='desktop-nav-links desktop'>
						<Link to="/volunteering">Volunteering</Link>
						<Link to="/booking">Booking</Link>
						<Link to="/menu">Menu</Link>
					</div>
					<div className={isOpen ? 'nav-button desktop active' : 'nav-button desktop'}>
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</div>
				</div>
			</div>
			{isOpen && <div className='menu-cover' onClick={closeMenu}/>}
			<div className={isOpen ? 'side-menu desktop active' : 'desktop side-menu'} >

				<div className='links-side-menu'>
					<div className='side-nav-links'>
						<div>
							<Link className="no-underline" to="/membership" onClick={closeMenu}>Membership</Link>
						</div>
					</div>
					<div className='side-divider'/>
					<div className='side-nav-links'>
						<div>
							<Link className="no-underline" to="/about" onClick={closeMenu}>About Us</Link>
						</div>
						<div>
							<a className="no-underline" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
						</div>
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

export default DesktopNav;
