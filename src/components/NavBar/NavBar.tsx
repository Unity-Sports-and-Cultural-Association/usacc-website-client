import React, { ReactElement, useContext, useState, useEffect, useRef } from 'react';
import Sticky from 'react-stickynode';
import IsMobileContext from '../../utils/isMobileContext';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import './NavBar.scss';

function NavBar(): ReactElement {
	const [ isOpen, setOpen ] = useState(false);
	const [ showNav, setShowNav ] = useState(true);
	const isMobile = useContext(IsMobileContext);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = (): void => {
			const currentScrollTop = window.scrollY;
			if (navRef.current) {
				const offset = navRef.current.offsetHeight * 2;
				if (!isOpen && currentScrollTop > lastScrollTop && currentScrollTop > offset) {
					setShowNav(false);
				} else {
					setShowNav(true);
				}
			}
			lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [ isOpen ]);

	return (
		<div ref={navRef} className={`navbar-master-container ${showNav ? '' : 'hide-nav'}`}>
			<Sticky innerZ={9990}>
				{isMobile ? <MobileNav isOpen={isOpen} setOpen={setOpen}/>
					: <DesktopNav isOpen={isOpen} setOpen={setOpen} />}
			</Sticky>
		</div>
	);
}

export default NavBar;
