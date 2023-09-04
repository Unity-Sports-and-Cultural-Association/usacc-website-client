import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import Sticky from 'react-stickynode';
import './ArticleNav.scss';

type ArticleNavProps = {
  items: string[];
  relates: string[][];
  others: string[][];
};

function ArticleNav({ items, relates, others }: ArticleNavProps): ReactElement {
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
                                    <Scroll
                                        activeClass="active"
                                        to={`article-section-${index + 1}`}
                                        spy={true}
                                        smooth={true}
                                        duration={250}
                                        offset={-200}
                                    >
                                        {item}
                                    </Scroll>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='article-nav-divider'/>

                <div className='topics-container'>
                    <div className='topics-title'> Related Topics</div>
                    <ul className='topics-items'>
                        {relates.map((item, index) => (
                            <li key={index}>
                                <Link to={item[1]}>{item[0]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='topics-container'>
                    <div className='topics-title'> Other Topics</div>
                    <ul className='topics-items'>
                        {others.map((item, index) => (
                            <li key={index}>
                                <Link to={item[1]}>{item[0]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Sticky>
    );
}

export default ArticleNav;
