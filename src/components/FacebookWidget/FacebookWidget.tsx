import React, { ReactElement } from 'react';
import Iframe from 'react-iframe';
import './FacebookWidget.scss';

function FacebookWidget(): ReactElement {
    return (
        <div className='facebook-widget'>
            <Iframe
                url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUnitySportsClub%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                styles={{ border: 'none', overflow: 'hidden', borderRadius: '12px', scrollbarWidth: '0' }}
                scrolling="no"
                frameBorder={0}
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        </div>

    );
};

export default FacebookWidget;
