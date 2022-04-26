import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { FC } from 'react'
import Head from 'next/head'


const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logoHead.svg" />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(WrappedApp)