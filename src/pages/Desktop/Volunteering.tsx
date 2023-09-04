import React, { ReactElement } from 'react';
import { SlEnvolope } from 'react-icons/sl';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import './desktops.scss';

function Volunteering(): ReactElement {
    return (
        <DesktopShell
            title='Volunteering'
            header='Community Events'
            blurb='Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.'
            textFile='/pages/Volunteering.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Senior Citizens Thanksgiving','Caribbean-American & Cultural Expo','Contact' ]}
                    relates={[ [ 'About us', '/about' ], [ 'Membership','/membership' ] ]}
                    others={[ [ 'Menu','/menu' ],[ 'Booking','/booking' ] ]}
                />
            }
        >
            <div className='article-extra-content'>
                <div className='volunteer-pdf-container'>
                    <SlEnvolope className='volunteer-pdf-icon-container'/>
                    <div className='volunteer-pdf-text-container'>someLongEmailName@gmail.com</div>
                </div>
            </div>

        </DesktopShell>
    );
}

export default Volunteering;
