import React, { ReactElement } from 'react';
import './Header.scss';
type HeaderProps = {title: ReactElement | string, topic: string, description: string};
function Header({ title, topic, description }: HeaderProps): ReactElement {
    return (
        <div className='header-container'>
            <div className='header-title-container'>{title}</div>
            <div className='header-topic-container'>{topic}</div>
            <div className='header-description-container'>{description}</div>
        </div>
    );
}

export default Header;
