import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IsMobileContext from '../../utils/isMobileContext';
import useIsMobile from '../../utils/useIsMobile';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Home from '../../pages/Home/Home';
import './App.scss';

function App(): ReactElement {
	const isMobile = useIsMobile();
	return (
		<IsMobileContext.Provider value={isMobile}>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<div className='test-height'>Menu</div>} />
					<Route path="/volunteering" element={<div className='test-height'>Volunteering</div>} />
					<Route path="/about" element={<div className='test-height'>About</div>} />
					<Route path="/membership" element={<div className='test-height'>Membership</div>} />
					<Route path="/booking" element={<div className='test-height'>Booking</div>} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</Router>
		</IsMobileContext.Provider>
	);
}

export default App;
