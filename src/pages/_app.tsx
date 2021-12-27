import 'styles/globals.css'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import { HeadMetas } from 'components/HeadMetas'
import { StandByScreen } from '../components/StandByScreen/index';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {

    setTimeout(() => {

      setIsShow(false)

    }, 3000)
  },[])

  return (<>
      <HeadMetas title={pageProps.title}/>
      {isShow && <StandByScreen/>}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>)
}

export default MyApp
