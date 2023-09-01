import React, { ReactElement } from 'react';
import './Heading.scss';

type HeadingProps = {
    type: string;
    text: string;
}

function Heading({ type, text }: HeadingProps): ReactElement {

    return (
        <div className={`heading-text-${type}`}>{text}</div>
    );
}
export default Heading;
