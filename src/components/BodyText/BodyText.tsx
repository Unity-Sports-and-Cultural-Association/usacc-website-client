import React, { useState, useEffect, ReactElement } from 'react';
import Heading from '../Heading/Heading';
import './BodyText.scss';

type BodyTextProps = {
    textFile: string;
}

const BodyText = ({ textFile }: BodyTextProps): ReactElement => {
    const [ text, setText ] = useState<string[]>([]);
    let counter = 0;

    useEffect(() => {
        fetch(textFile)
            .then((response) => response.text())
            .then((data) => {
                setText(data.split('//'));
            });
    }, [ textFile ]);

    return (
        <div className="article-container">
            {text.map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                    return (
                        <Heading
                            key={index}
                            type="h1"
                            text={paragraph.replace('# ', '')}
                        />
                    );
                } else if (paragraph.startsWith('## ')) {
                    counter++;
                    return (
                        <Heading
                            key={index}
                            id={`article-section-${counter}`}
                            type="h2"
                            text={paragraph.replace('## ', '')}
                            className={index === 1 ? 'begin' : ''}
                        />
                    );
                } else if (paragraph.startsWith('### ')) {
                    counter++;
                    return (
                        <Heading
                            key={index}
                            id={`article-section-${counter}`}
                            type="ghost"
                            text={paragraph.replace('### ', '')}
                        />
                    );
                } else {
                    return (
                        <p key={index}>{paragraph}</p>
                    );
                }
            })}
        </div>
    );
};

export default BodyText;
