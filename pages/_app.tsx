import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { FC, useEffect } from 'react'
import Head from 'next/head'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import { useRouter } from 'next/router'


const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('428428595603693') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])


    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logoHead.svg" />
                <meta name="facebook-domain-verification" content="57f8b0vct7l2klp1cpwv7c1qv6lr49" />
                {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
            </Head>
            <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
                <Component {...pageProps} />
            </LocalizationProvider>
        </>
    )
}

export default wrapper.withRedux(WrappedApp)