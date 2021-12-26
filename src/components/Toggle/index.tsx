import { FC, useState } from 'react'
import styles from './index.module.css';

interface Toggle {
    handleClick: () => void;
}

export const Toggle: FC<Toggle> = ({ handleClick }) => {

    const { toggle, close } = styles;

    const [openToggle, setOpenToggle] = useState<boolean>(false);
    
    const handleToggle = () => {
        handleClick();
        setOpenToggle( e => !e);
    };

    return (
        <div className={`${ toggle } ${openToggle && close}`} onClick={ handleToggle }>
            <span></span>
        </div>
    )
};