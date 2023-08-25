import { useState, useEffect } from 'react';

function isMobile(): boolean {
	const { innerWidth: width } = window;
	return width < 768;
}

export default function useIsMobile(): boolean {
	const [ isMobileState, setIsMobileState ] = useState(isMobile());

	useEffect(() => {
		function handleResize(): void {
			setIsMobileState(isMobile());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobileState;
}
