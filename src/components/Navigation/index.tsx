import Link from 'next/link';
import { FC } from 'react';
import { routes } from 'components/Navigation/routes';
import styles from './index.module.css';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import twitch from '../../assets/svg/twitch.svg';
import Image from 'next/image';
import { Toggle } from 'components/Toggle';
import useMobile from '../../hooks/useMobile';

export const Navigation: FC = () => {

    const { isMobile } = useMobile();

    return (
        
        <nav className={styles.nav} >

            <ul className={styles.contentPagesExternals}>
                <li>
                    <a href="https://www.twitch.tv/shompys" target="_blank" rel="noreferrer">
                        <Image src={twitch} alt="twitch icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shompys" target="_blank" rel="noreferrer">
                        <Image src={github} alt="github icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jonathangomezit/" target="_blank" rel="noreferrer">
                        <Image src={linkedin} alt="linkedin icon" />
                    </a>
                </li>
            </ul>
            {
                isMobile ? <Toggle /> : (
                    <ul className={styles.ul}>
                        {
                        routes.map(({ path, name }) =>
                            <li key={ name } className={styles.li}>
                                <Link href={ { pathname: path } } ><a> { name } </a></Link>
                            </li>)
                        }
                    </ul>
                )
            }
            

        </nav>
    )
}

