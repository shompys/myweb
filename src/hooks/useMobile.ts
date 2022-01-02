import { useEffect, useState } from "react";

export enum Responsive {
    TABLET= 500,
    // DESKTOP=768,
    // TV=1440,
}

const useMobile = (): { isMobile: boolean | undefined } => {
    const [sizeWidth, setSizeWidth] = useState<number | undefined>(undefined);

    //the object window not exist in the server
    useEffect(() => {
        setSizeWidth(innerWidth)
    },[])

    useEffect(() => {
        
        const handleSize = () => setSizeWidth(innerWidth);

        window.addEventListener('resize', handleSize);
       
        return () => window.removeEventListener('resize', handleSize);

    });
    
    return {
        isMobile: sizeWidth && sizeWidth < Responsive.TABLET ? true: false,
    }
}

export default useMobile;
