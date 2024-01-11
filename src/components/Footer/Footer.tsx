import React, { ReactElement } from 'react';

import './Footer.scss';
import { SlEnvolope, SlLocationPin, SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';

function Footer(): ReactElement {
    return (
        <div className='app-footer-container'>
            <div className='footer-navs-container' >
                <div className='footer-navs'>
                    <div className='footer-top-nav'>
                        <div className='footer-nav-links-container'>
                            <div className='footer-nav-links'>
                                <Link to="/about">about us</Link>
                                <Link to="/volunteering">volunteering</Link>
                                <Link to="/membership">membership</Link>
                            </div>
                            <div className='footer-nav-links'>
                                <Link to="/menu">menu</Link>
                                <Link to="/booking">renting</Link>
                                <Link to="/">wiki</Link>
                            </div>
                        </div>
                        <div className='footer-app-logo'>
                            <Link to="/">
                                <img src={'usacc-logo-white.svg'} className="app-logo-white" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className='footer-bottom-nav'>
                        <div className='left-footer-container'>
                            <div className='footer-location-container'>
                                <div className='footer-location-logo'>
                                    <SlLocationPin />
                                </div>
                                <div className='footer-location-link'>
                                    <a href="https://www.google.com/maps/place/10+Dunbar+Ave,+Dorchester+Center,+Ma+02124" target="_blank" rel="noreferrer">
                                10 Dunbar Ave,
                                Dorchester<br/> Center,
                                Ma 02124
                                    </a>
                                </div>
                            </div>

                            <div className='footer-email-container'>
                                <div className='footer-email-icon'>
                                    <SlEnvolope />
                                </div>
                                <div className='footer-email-link'>
                                    <a href="mailto:unitypublicrelationscommittee@gmail.com">UnityPublicRelationsCommittee@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='footer-bottom-right-links'>
                            <div className='footer-phone-container'>
                                <div className='footer-cotact-logo'>
                                    <SlPhone />
                                </div>
                                <div className='footer-contact-link'>
                                    <a href="tel:6174369550">(617) 436-9550</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-disclaimer'>
            Unity Sports and Cultural Association is a 501(c)4 organization in Boston | © 2023 Unity Sports and Cultural Club. All rights reserved
            </div>
        </div>
    );
}

export default Footer;
