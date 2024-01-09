import React, { ReactElement } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { SlLocationPin, SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import './MobileNav.scss';

type MobileNavProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({ isOpen, setOpen }: MobileNavProps): ReactElement {

    const closeMenu = (): void => {
        if (isOpen) {
            setOpen(false);
        }
    };

    return (
        <>
            <div className="navbar-container">
                <Link className="no-underline" to="/" onClick={closeMenu}><img src={'usacc-logo.svg'} className="mobile app-logo" alt="logo" /> </Link>
                <div className={isOpen ? 'nav-button active' : 'nav-button'}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            {isOpen && <div className='menu-cover' onClick={closeMenu}/>}
            <div className={isOpen ? 'side-menu active' : 'side-menu'} >
                <div className='links-side-menu'>
                    <div className='side-nav-links'>
                        <Link className="no-underline" to="/menu" onClick={closeMenu}>Menu</Link>
                        <Link className="no-underline" to="/events" onClick={closeMenu}>Events</Link>
                        <Link className="no-underline" to="/booking" onClick={closeMenu}>Booking</Link>
                        <Link className="no-underline" to="/volunteering" onClick={closeMenu}>Volunteering</Link>
                        <Link className="no-underline" to="/membership" onClick={closeMenu}>Membership</Link>
                    </div>
                    <div className='side-divider'/>
                    <div className='side-nav-links'>
                        <Link to="/about" onClick={closeMenu}>About Us</Link>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Facebook</a>
                    </div>
                    <div className='side-contact-container'>
                        <div className='side-contact'>
                            <div className='side-cotact-logo'>
                                <SlLocationPin />
                            </div>
                            <div className='side-contact-link'>
                                <a href="https://www.google.com/maps/place/10+Dunbar+Ave,+Dorchester+Center,+Ma+02124" target="_blank" rel="noreferrer">
                                10 Dunbar Ave,<br/>
                                Dorchester Center,<br/>
                                Ma 02124
                                </a>
                            </div>
                        </div>
                        <div className='side-contact'>
                            <div className='side-cotact-logo'>
                                <SlPhone />
                            </div>
                            <div className='side-contact-link'>
                                <a href="tel:6174369550">(617) 436-9550</a>
                            </div>
                        </div>
                        <div className='side-footer'>
                            <div className='side-email'>
                                <a href="mailto:SomeLongEmailNameExample@gmail.com">SomeLongEmailNameExample@gmail.com</a>
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
