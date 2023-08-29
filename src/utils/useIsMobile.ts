import { useState, useEffect } from 'react';

export default function useIsMobile(): boolean {
    const [ width, setWidth ] = useState<number>(window.innerWidth);

    function handleWindowSizeChange(): void {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    return isMobile;
}
