import React, { ReactElement } from 'react';
import './HomeHeader.scss';
import { SlArrowRight, SlLocationPin, SlPhone } from 'react-icons/sl';
function HomeHeader(): ReactElement {
    return (
        <div className='home-header-container'>
            <div className='home-header-title-container'>Unity Sports & Cultural Club</div>
            <div className='home-header-description-container'>Also knows as Unity Sports & Cultural Association, Is the largest Caribbean-American based non-profits in New England founded in August 1968</div>
            <div className='home-header-bottom-container'>
                <div className='home-header-contact-container'>
                    <div className='home-header-contact-list-container'>
                        <SlLocationPin className='home-header-contact-pin-container'/>
                        <div className='home-header-contact-text-container'>10 Dunbar Ave,<br/> Dorchester Center,<br/> MA 02124</div>
                    </div>
                    <div className='home-header-contact-list-container'>
                        <SlPhone className='home-header-contact-icon-container'/>
                        <div className='home-header-contact-text-container'>&#40;617&#41; 436-9550</div>
                    </div>
                </div>
                <hr className='home-header-line-container'/>
                <div>
                    <div className='home-header-menu-title-text-container'>Night Life</div>
                    <div className='home-header-menu-time-container'>Fri-Sat: 10pm-2am</div>
                    <a href='./menu' className='home-header-menu-container'>menu<SlArrowRight className='home-header-menu-right-arrow-container'/></a>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
