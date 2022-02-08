import 'styles/globals.css'
import type { AppProps } from 'next/app'

import { Layout } from 'components/Layout'
import { HeadMetas } from 'components/HeadMetas'
import { StandByScreen } from '../components/StandByScreen/index';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
      <HeadMetas title={pageProps.title}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>)
}

export default MyApp
