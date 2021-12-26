import styles from './index.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.section1}>
                <h1 className={styles.section1_h1}>El footer con texto de relleno</h1>
            </section>
            <section className={styles.section2}>
                <p className={styles.section2_p}> &copy; All rights reserved 2022</p>
            </section>
        </footer>
    )
}
