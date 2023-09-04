import React, { ReactElement } from 'react';
import './Heading.scss';

type HeadingProps = {
    type: string;
    text: string;
    id: string;
    className: string;
}

function Heading({ type, text, id, className }: HeadingProps): ReactElement {

    return (
        <div id={id} className={`heading-text-${type} ${className}`}>{text}</div>
    );
}

Heading.defaultProps = {
    id: '',
    className: ''
};

export default Heading;
