import React, { ReactElement } from 'react';
import './MobileContent.scss';

type MobileContentProps = {
    children: ReactElement[] | ReactElement;
    className: string;
}

function MobileContent({ children, className }: MobileContentProps): ReactElement {
    return (
        <div className={`mobile-content-container ${className}`}>
            <div className='mobile-content-body'>
                { children }
            </div>
        </div>
    );
}

MobileContent.defaultProps = {
    className: '',
};

export default MobileContent;
