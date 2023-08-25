import React, { ReactElement } from 'react';
import NavBar from '../NavBar';
import './App.scss';


function App(): ReactElement {
	return (
		<>
			<NavBar />
			<div className="App">
			hello world
			</div>
		</>
	);
}

export default App;
