import { useEffect, useState } from "react";

export enum Responsive {
    TABLET= 500,
    DESKTOP=768,
    TV=1440,
}

const useMobile = (): { isMobile: boolean } => {
    
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        const tablet = matchMedia(`(min-width: ${ Responsive.TABLET }px)`);
        
        const screen = (e: MediaQueryListEvent) => e.matches ? setState(false) : setState(true);

        tablet.addEventListener("change", screen);

        return () => tablet.removeEventListener('change', screen);
    }, []);

    return {
        isMobile: state
    }
}

export default useMobile;
