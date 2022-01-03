import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { routes } from 'components/Navigation/routes';
import styles from './index.module.css';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import twitch from '../../assets/svg/twitch.svg';
import Image from 'next/image';
import { Toggle } from 'components/Toggle';
import useMobile from '../../hooks/useMobile';

export const Navigation: FC = () => {

    const [ disabledList, setDisabledList ] = useState<boolean>(true)

    const { isMobile } = useMobile();
    const handleClick = () => setDisabledList(e => !e);
    
    useEffect(() => {
        // if it is not mobile, always disabled
        if( !isMobile ) setDisabledList(true);

    }, [ isMobile ])

    return (
        
        <nav className={styles.nav} >

            <ul className={styles.contentPagesExternals}>
                
                <li>
                    <a href="https://www.twitch.tv/shompys" target="_blank" rel="noreferrer">
                        <Image src={twitch} alt="twitch icon" priority />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shompys" target="_blank" rel="noreferrer">
                        <Image src={github} alt="github icon" priority />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jonathangomezit/" target="_blank" rel="noreferrer">
                        <Image src={linkedin} alt="linkedin icon" priority />
                    </a>
                </li>
            </ul>

            {
                isMobile && <Toggle handleClick={ handleClick } />
            }

            <ul className={`${styles.ul} ${disabledList && styles.ulOff}`}>
                {
                    routes.map(({ path, name }) =>
                        <li key={ name } className={`${styles.li}`} onClick={ handleClick }>
                            <Link href={ { pathname: path } } ><a> { name } </a></Link>
                        </li>)
                }
            </ul>
            
        </nav>
    )
}

