import React, { ReactElement } from 'react';
import './Header.scss';
type HeaderProps = {title: string, topic: string, description: string};
function Header({ title, topic, description }: HeaderProps): ReactElement {
	return (
		<div className='header-container'>
			<div className='header-title-container'>{title.split('\n').map((text, i) => i ? [ <br/>, text ] : text)}</div>
			<div className='header-topic-container'>{topic}</div>
			<div className='header-description-container'>{description}</div>
		</div>
	);
}

export default Header;