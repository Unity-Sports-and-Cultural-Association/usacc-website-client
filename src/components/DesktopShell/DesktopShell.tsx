/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { Parallax } from 'react-scroll-parallax';
import BackNav from '../BackNav/BackNav';
import BodyText from '../BodyText';
import './DesktopShell.scss';

type DesktopShellProps = {
    title: string;
    children: ReactElement | undefined;
    isArticle: boolean;
    header: string;
    blurb: string;
    textFile: string;
    articleNav: ReactElement;
}

function DesktopShell({
    title,
    children,
    isArticle,
    header,
    blurb,
    textFile,
    articleNav
}: DesktopShellProps): ReactElement {

    return (
        <div className='desktop-article-container'>
            <div className='desktop-article-header-container'>
                <Parallax speed={-30}>
                    <div className='desktop-title'>
                        { title }
                    </div>
                </Parallax>
                <div className='left-container' />
                <div className='right-container'>
                    <div className='text-container'>
                        <div className='header-blurb-title'>
						    {header}
                        </div>
                        <div className='header-blurb'>
                            {blurb}
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop-article-body-container'>
                <div className="article-left-buffer" />
                { isArticle &&
                <div className='article-content-body'>
                    <div className='article-content' >
                        <div className='back-nav-container'>
                            <BackNav/>
                        </div>
                        <BodyText textFile={textFile} />
                    </div>
            		{children}
                </div>
                }
                <div className='article-right-buffer'>
                    {articleNav}
                </div>
            </div>
        </div>
    );
}

DesktopShell.defaultProps = {
    isArticle: true,
    children: undefined,
};

export default DesktopShell;
