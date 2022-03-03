import { FC, useState } from 'react'
import styles from './index.module.css';

interface Toggle {
    handleClick: () => void;
    isOpenToggle: boolean;
}

export const Toggle: FC<Toggle> = ({ handleClick, isOpenToggle }) => {

    const { toggle, close } = styles;

    return (
        <div className={`${ toggle } ${isOpenToggle && close}`} onClick={ handleClick }>
            <span></span>
        </div>
    )
};