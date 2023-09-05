import React, { ReactElement } from 'react';
import { SlEnvolope } from 'react-icons/sl';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import './desktops.scss';

function MembershipSwitch(): ReactElement {
    return (
        <DesktopShell
            title='Membership'
            header='join our mission'
            blurb='Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome.'
            textFile='/pages/Membership.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Membership','Benefits','Application' ]}
                    relates={[ [ 'Volunteering','/volunteering' ], [ 'About us', '/about' ] ]}
                    others={[ [ 'Booking','/booking' ], [ 'Menu','/menu' ] ]}
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

export default MembershipSwitch;
