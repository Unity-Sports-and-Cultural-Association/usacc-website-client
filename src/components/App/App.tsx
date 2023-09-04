import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutUsSwitch from '../../pages/AboutUsSwitch';
import Booking from '../../pages/Mobile/Booking/Booking';
import Home from '../../pages/Mobile/Home/Home';
import Membership from '../../pages/Mobile/Membership/Membership';
import Menu from '../../pages/Mobile/Menu/Menu';
import VolunteeringSwitch from '../../pages/VolunteeringSwitch';
import IsMobileContext from '../../utils/isMobileContext';
import useIsMobile from '../../utils/useIsMobile';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './App.scss';

function AppWrapper(): ReactElement {
    return (
        <Router>
            <App />
        </Router>
    );
}

function App(): ReactElement {
    const isMobile = useIsMobile();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ pathname ]);

    useEffect(() => {
        document.title = 'Unity Sports' + `${pathname == '/' ? '' : ': '}` + `${pathname.replace('/', '').charAt(0).toUpperCase() + pathname.replace('/', '').slice(1)}`;
    }, [ pathname ]);

    return (
        <div className='app-container'>
            <IsMobileContext.Provider value={isMobile}>
                <ParallaxProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/volunteering" element={<VolunteeringSwitch />} />
                        <Route path="/about" element={<AboutUsSwitch />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </ParallaxProvider>
            </IsMobileContext.Provider>
        </div>
    );
}

export default AppWrapper;
