import { FC, useState } from 'react'
import styles from './index.module.css';

export const Toggle: FC = () => {
    const { toggle, close } = styles;
    const [openToggle, setOpenToggle] = useState(false)
    
    return (
        <div className={`${ toggle } ${openToggle && close}`} onClick={() => setOpenToggle(e => !e)}>
            <span></span>
        </div>
    )
}
