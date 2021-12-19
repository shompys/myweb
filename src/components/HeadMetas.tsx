import Head from 'next/head';
import { FC } from 'react';

interface HeadMetas {
    title: string;
}

export const HeadMetas: FC<HeadMetas> = ({
    title= 'Jonathan Gomez',
}) => {
    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content="myWeb" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
