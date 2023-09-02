import React, { ReactElement } from 'react';
import './Heading.scss';

type HeadingProps = {
    type: string;
    text: string;
    id: string;
}

function Heading({ type, text, id }: HeadingProps): ReactElement {

    return (
        <div id={id} className={`heading-text-${type}`}>{text}</div>
    );
}

Heading.defaultProps = {
    id: '',
};

export default Heading;
