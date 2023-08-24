import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './NavBar.scss';

function App() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="navbar-container">
			<img src={'usacc-logo.svg'} className="app-logo" alt="logo" />
			<Hamburger toggled={isOpen} toggle={setOpen} />
		</div>
	);
}

export default App;
