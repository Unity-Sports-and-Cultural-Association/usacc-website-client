import React, { ReactElement } from 'react';
import './HomeHeaderMobile.scss';
import { SlArrowRight, SlLocationPin, SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
function HomeHeaderMobile(): ReactElement {
    return (
        <div className='home-header-guide'>
            <div className='home-header-container'>
                <div className='home-header-title-container'>Unity Sports & Cultural Club</div>
                <div className='home-header-description-container'>Also knows as Unity Sports & Cultural Association, Is the largest Caribbean-American based non-profits in New England founded in August 1968</div>
                <div className='home-header-bottom-container'>
                    <div className='home-header-contact-container'>
                        <div className='home-header-contact-list-container'>
                            <SlLocationPin className='home-header-contact-pin-container'/>
                            <div className='home-header-contact-text-container'>
                                <a href="https://www.google.com/maps/place/10+Dunbar+Ave,+Dorchester+Center,+Ma+02124" target="_blank" rel="noreferrer">
                                10 Dunbar Ave,<br/> Dorchester Center,<br/> MA 02124</a></div>
                        </div>
                        <div className='home-header-contact-list-container'>
                            <SlPhone className='home-header-contact-icon-container'/>
                            <div className='home-header-contact-text-container'><a href="tel:6174369550">&#40;617&#41; 436-9550</a></div>
                        </div>
                    </div>
                    <hr className='home-header-line-container'/>
                    <div>
                        <div className='home-header-menu-title-text-container'>Night Life</div>
                        <div className='home-header-menu-time-container'>Fri-Sat: 10pm-2am</div>
                        <Link to="/menu" className='home-header-menu-container arrow-n-text'><span>menu</span><SlArrowRight className='home-header-menu-right-arrow-container'/></Link>
                    </div>
                </div>
            </div>
            <div className='home-renting-container'>
                <div className='home-renting-title'>Renting a Service</div>
                <div className='home-renting-subtitle'>Booking Halls, Bartenders, & Catering</div>
                <div className='home-renting-desc'>Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.</div>
                <a href='./Booking' className='home-renting-button'>Request a Quote</a>
            </div>
            <Parallax speed={-30} className='home-header-parallax-container'>
                <div className='home-header-parallax-title'>
                    Unity
                </div>
            </Parallax>
        </div>
    );
}

export default HomeHeaderMobile;
