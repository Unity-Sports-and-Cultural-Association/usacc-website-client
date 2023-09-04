import React, { ReactElement, useContext, useState } from 'react';
import Headroom from 'react-headroom';
import IsMobileContext from '../../utils/isMobileContext';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import './NavBar.scss';

function NavBar(): ReactElement {
    const [ isOpen, setOpen ] = useState(false);
    const isMobile = useContext(IsMobileContext);

    return (
        <Headroom disableInlineStyles={isOpen} style={{ zIndex: 9990 }}>
            {isMobile ? <MobileNav isOpen={isOpen} setOpen={setOpen}/>
                : <DesktopNav isOpen={isOpen} setOpen={setOpen} />}
        </Headroom>
    );
}

export default NavBar;
