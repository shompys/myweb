import 'styles/globals.css'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import { HeadMetas } from 'components/HeadMetas'
import { StandByScreen } from '../components/StandByScreen/index';
import { useEffect, useState } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {

  const [isShow, setIsShow] = useState<boolean>(true);

  // useEffect(() => {

  //   setTimeout(() => {

  //     setIsShow(false)

  //   }, 3000)
  // },[])

  return (<>
      <HeadMetas title={pageProps.title}/>
      {/* {isShow && <StandByScreen/>} */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        id="mcjs"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c2ea63dc1e80b4c44f9b6fcbc/0efc99f328e393076df91aaf9.js");`
        }}
      />
      </>)
}

export default MyApp
