import Link from 'next/link';
import { FC } from 'react';
import { routes } from 'components/Navigation/routes';
import styles from './index.module.css';

export const Navigation: FC = () => {
    return (
        <nav className={styles.nav} >
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

