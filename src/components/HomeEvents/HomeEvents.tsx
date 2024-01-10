import React, { ReactElement } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import FacebookWidget from '../FacebookWidget/FacebookWidget';
import './HomeEvents.scss';

function HomeEvents(): ReactElement {
    return (
        <div className='home-events-container'>
            <img src='./assets/events.png' alt='img_9' className='home-event-background-img'/>
            <div className='home-events-left-container'>
                <div className='home-events-left-content-container'>
                    <div className='home-events-title'>Unity Events</div>
                    <div className='home-events-subtitle'>Come Together</div>
                    <div className='home-events-desc'>Our club hosts a variety kinds of events, from arts and crafts to DJs on stage. Unity provides an open space where there’s always something for everyone here at Unity. </div>
                    <a href='/events' className='home-events-button'>Learn more<SlArrowRight className='home-events-button-arrow-container'/></a>
                </div>
            </div>
            <div className='home-events-right-container'>
                <FacebookWidget />
            </div>
        </div>
    );
}

export default HomeEvents;
