/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import './DesktopShell.scss';
import { Parallax } from 'react-scroll-parallax';
import BackNav from '../BackNav/BackNav';
import Heading from '../Heading/Heading';



type DesktopShellProps = {
    title: string;
    children: ReactElement | undefined;
    isArticle: boolean;
}

function DesktopShell({ title, children, isArticle }: DesktopShellProps): ReactElement {

    const content = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.

	Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
	
	Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
	
	Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.
	
	Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida`;
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
                        <Heading type='h1' text='Our Story'/>
                    	{content}
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
