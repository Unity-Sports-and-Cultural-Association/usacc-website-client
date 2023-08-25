import React, { ReactElement } from 'react';
import IsMobileContext from '../../utils/isMobileContext';
import useIsMobile from '../../utils/useIsMobile';
import NavBar from '../NavBar';
import './App.scss';


function App(): ReactElement {
	const isMobile = useIsMobile();
	return (
		<IsMobileContext.Provider value={isMobile}>
			<NavBar />
			<div className="App">
				hello world
			</div>
		</IsMobileContext.Provider>
	);
}

export default App;
