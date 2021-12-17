import Link from 'next/link';
import { FC } from 'react';
import { routes } from 'components/Navigation/routes';
import styles from './index.module.css';
import { Toggle } from 'components/Toggle';

export const Navigation: FC = () => {
    return (
        <nav className={styles.nav} >
            <Toggle />
            <ul className={styles.ul}>
                {
                routes.map(({ path, name }) => 
                    <li key={ name } className={styles.li}>
                        <Link href={ { pathname: path } } ><a> { name } </a></Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}

