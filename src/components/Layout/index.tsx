import Head from "next/head"
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
            <Head>
                <title>Jonathan Gomez</title>
                <meta name="description" content="myWeb" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </>
    )
}
