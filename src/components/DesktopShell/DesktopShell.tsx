/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import './DesktopShell.scss';
import { Parallax } from 'react-scroll-parallax';
import BackNav from '../BackNav/BackNav';



type DesktopShellProps = {
    title: string;
    children: ReactElement | undefined;
    hasBackNav: boolean;
}

function DesktopShell({ title, children, hasBackNav }: DesktopShellProps): ReactElement {

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

            </div>
            { hasBackNav && <BackNav />}
            {children}
        </div>
    );
}

DesktopShell.defaultProps = {
    hasBackNav: false,
    children: undefined,
};

export default DesktopShell;
