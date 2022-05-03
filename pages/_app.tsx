import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { FC } from 'react'
import Head from 'next/head'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';


const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logoHead.svg" />
                {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
            </Head>
            <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
                <Component {...pageProps} />
            </LocalizationProvider>
        </>
    )
}

export default wrapper.withRedux(WrappedApp)