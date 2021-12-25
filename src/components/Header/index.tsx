import { FC } from 'react'
import { Navigation } from '../Navigation'
import styles from './index.module.css';
interface Header {

}
export const Header: FC<Header> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.div}></div>
            <Navigation />
        </header>
    )
}
