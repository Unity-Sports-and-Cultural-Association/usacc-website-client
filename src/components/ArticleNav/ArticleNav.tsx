import React, { ReactElement } from 'react';
import Sticky from 'react-stickynode';
import './ArticleNav.scss';

type ArticleNavProps = {
  items: string[];
};

function ArticleNav({ items }: ArticleNavProps): ReactElement {
    return (
        <Sticky top={50} innerClass={'article-nav-sticky'}>
            <div className="article-nav-container">
                <div className='article-top-nav'>
                    <div className='article-nav-title'>In This Page</div>
                    <div className='article-timeline-container'>
                        <div className="article-timeline" />
                        <div className="article-nav-items">
                            {items.map((item, index) => (
                                <div key={index} className="article-nav-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='article-nav-divider'/>

                <div className='topics-container'>
                    <div className='topics-title'> Related Topics</div>
                    <ul className='topics-items'>
                        <li>Voluteering</li>
                        <li>Membership</li>
                    </ul>
                </div>
                <div className='topics-container'>
                    <div className='topics-title'> Other Topics</div>
                    <ul className='topics-items'>
                        <li>Booking</li>
                        <li>Menu</li>
                    </ul>
                </div>
            </div>
        </Sticky>
    );
}

export default ArticleNav;
