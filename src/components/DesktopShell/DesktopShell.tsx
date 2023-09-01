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
}

function DesktopShell({ title, children, isArticle }: DesktopShellProps): ReactElement {

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
						Caribbean-American non-profit
                        </div>
                        <div className='header-blurb'>
						Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop-article-body-container'>
                <div className="article-left-buffer" />
                { isArticle &&
                <div className='article-content-body'>
                    <BackNav className='article-back'/>
                    <div className='article-content' >
                        <BodyText textFile={'/pages/AboutUs.txt'} />
                    </div>
            		{children}
                </div>
                }
                <div className='article-right-buffer'></div>
            </div>
        </div>
    );
}

DesktopShell.defaultProps = {
    isArticle: true,
    children: undefined,
};

export default DesktopShell;
