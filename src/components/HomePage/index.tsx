import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.css';
import programming from '../../assets/svg/programming.svg';

export const HomePage: FC = () => {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.contentImage}>
                    <Image src={programming} alt="programming" width={500} height={500} className={styles.image} priority/>
                    {/* <button className={styles.button} onClick={() => window.alert('F')}>No Presionar</button> */}
                </div>
                <div className={styles.contentText}>
                    <p>Hola mi nombre es Jonathan, soy desarrollador web y este sitio tiene contenido de relleno sin ningún sentido por ahora.</p>
                </div>

            </section>
        </>
    )
}
