import React, { ReactElement } from 'react';
import './ArticleNav.scss';

type ArticleNavProps = {
  items: string[];
};

function ArticleNav({ items }: ArticleNavProps): ReactElement {
    return (
        <div className="article-nav-container">
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
    );
}

export default ArticleNav;
