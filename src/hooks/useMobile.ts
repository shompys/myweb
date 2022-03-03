import { useEffect, useState, useRef, useCallback } from 'react';

export enum Responsive {
    TABLET= 500,
    // DESKTOP=768,
    // TV=1440,
}

const useMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {

        if(typeof window !== 'undefined') {
            setIsMobile(innerWidth < Responsive.TABLET ? true : false)
        }

        const handleSize = () => setIsMobile(
            innerWidth < Responsive.TABLET ? true : false
        )

        window.addEventListener('resize', handleSize);
       
        return () => window.removeEventListener('resize', handleSize);

    }, []);

    return isMobile;

}

export default useMobile;
