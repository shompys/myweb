import { FC, ReactNode } from "react"
import styles from './index.module.css';

import { Footer } from "components/Footer"
import { Header } from "components/Header"

interface Layout {
    children: ReactNode;
}

export const Layout: FC<Layout> = ({children}) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </>
    )
}
