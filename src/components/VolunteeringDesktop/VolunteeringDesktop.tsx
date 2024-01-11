import React, { ReactElement } from 'react';
import './VolunteeringDesktop.scss';


function VolunteeringDesktop(): ReactElement {
    return (
        <div className='volunteering-container'>
            <div className='volunteering-card-container'>
                <div className='volunteering-left-container'>
                    <div className='volunteering-left-content-container'>
                        <div id='volunteering-title'>Volunteering</div>
                        <div id='volunteering-subtext'>Community Events</div>
                        <div id='volunteering-desc'>Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.</div>
                        <a href='/volunteering' id='volunteering-button'>Learn More</a>
                    </div>
                </div>
                <img src='/assets/volunteer-upscale.png' alt='' className='volunteering-img'/>
            </div>
        </div>
    );
}

export default VolunteeringDesktop;
