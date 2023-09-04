import React, { ReactElement } from 'react';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';

function AboutUs(): ReactElement {
    return (
        <DesktopShell
            title='About us'
            header='Caribbean-American non-profit'
            blurb='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
            textFile='/pages/AboutUs.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Our Mission' ]}
                    relates={[ [ 'Volunteering', '/volunteering' ], [ 'Membership','/membership' ] ]}
                    others={[ [ 'Menu','/menu' ],[ 'Booking','/booking' ] ]}
                />
            }
        />
    );
}

export default AboutUs;
