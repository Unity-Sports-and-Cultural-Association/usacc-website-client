import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from '../../pages/About/About';
import Booking from '../../pages/Booking/Booking';
import Home from '../../pages/Home/Home';
import Membership from '../../pages/Membership/Membership';
import Menu from '../../pages/Menu/Menu';
import Volunteer from '../../pages/Volunteer/Volunteer';
import IsMobileContext from '../../utils/isMobileContext';
import useIsMobile from '../../utils/useIsMobile';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './App.scss';

function App(): ReactElement {
    const isMobile = useIsMobile();
    return (
        <IsMobileContext.Provider value={isMobile}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/volunteering" element={<Volunteer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </Router>
        </IsMobileContext.Provider>
    );
}

export default App;
