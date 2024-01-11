import React, { ReactElement } from 'react';
import './EventBriteCard.scss';

function EventBriteCard(): ReactElement {
    return (
        <div className='event-brite-card-container'>

            <div className='event-brite-title'>
                Unity +
            </div>
            <div className='event-brite-contact-container'>
                <a href="https://www.eventbrite.com/o/unity-65330644563" target="_blank" rel="noreferrer">
                    <div className='event-brite-button'>
                        Follow
                    </div>
                </a>
                <a href="https://www.eventbrite.com/o/unity-65330644563" target="_blank" rel="noreferrer">
                    <div className='event-brite-contact'>
                        Contact
                    </div>
                </a>
            </div>
            <div className='event-brite-caption'>
                <span className='bold'>Stay connected</span> with our Eventbrite.
            </div>
        </div>

    );
};

export default EventBriteCard;
