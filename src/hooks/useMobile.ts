import { useEffect, useState } from "react";

export enum Responsive {
    TABLET= 500,
    DESKTOP=768,
    TV=1440,
}

const useMobile = (): { isMobile: boolean } => {
    
    const [state, setState] = useState<boolean>(true);

    useEffect(() => {

        const adaptationAnalyze = () => innerWidth < Responsive.TABLET ? setState(true) : setState(false);

        window.addEventListener('resize', adaptationAnalyze);
        window.addEventListener('DOMContentLoaded', adaptationAnalyze);

        return () => {
            window.removeEventListener('resize', adaptationAnalyze);
            window.removeEventListener('DOMContentLoaded', adaptationAnalyze);
        }

    });

    return {
        isMobile: state
    }
}

export default useMobile;
