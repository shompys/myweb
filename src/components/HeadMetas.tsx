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
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" />
            <meta name="description" content="Sitio Web de Jonathan Gomez" />
            <meta name="author" content="Jonathan Gomez"/>
            <link rel="icon" href="/favicon.ico" />

            {/* <meta property= "og:site_name" content="Probar"/> */}
            <meta property= "og:image" content="%PUBLIC_URL%/perfil.png"/>
            <meta property= "og:url" content= "https://jonathangomezit.com"/>
            {/* <meta property= "og:type" content= "Probar"/> */}
            {/* <meta name="theme-color" content="#000000" /> */}
            
            <meta name="keywords" content="react, porfolio, jobs, empleo, linkedin, github, twitch, javascript, js, css, html, developer"/>

            <meta property="og:description" content="Sitio Web de Jonathan Gomez" />
            <meta property='og:title' content={ title }/>

            
            <title>{ title }</title>
        </Head>
    )
}
