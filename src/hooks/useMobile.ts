import { useEffect, useState, useRef, useCallback } from 'react';

export enum Responsive {
    TABLET= 500,
    // DESKTOP=768,
    // TV=1440,
}

const useMobile = () => {
    // typeof window !== 'undefined' && innerWidth < Responsive.TABLET ? true : false
    const [isMobile, setIsMobile] = useState<boolean>(
        typeof window !== 'undefined' ? 
            innerWidth < Responsive.TABLET ? 
                true 
            : 
                false 
        : 
            true //Server Side Render me pide que sea true nose porque
    );

    useEffect(() => {
        
        const handleSize = () => setIsMobile(
            innerWidth < Responsive.TABLET ? true : false
        )

        window.addEventListener('resize', handleSize);
       
        return () => window.removeEventListener('resize', handleSize);

    }, []);

    return isMobile;

}

export default useMobile;
