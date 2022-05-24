import Head from 'next/head'
import React from 'react'
import { FirstPage } from '../../components/English/FirstPage'
import { For } from '../../components/English/For'
import { FormEnglish } from '../../components/English/FormEnglish'
import { How } from '../../components/English/How'
import { Questions } from '../../components/English/Questions'
import { TarifsEnglish } from '../../components/English/Tarifs'
import { Form } from '../../components/Ielts/Form'
import { Wrapper } from '../../layouts/Wrapper'

const English = () => {
    return (
        <>
            <Head>
                <title>Бесплатный урок "Подготовка к ielts"</title>
            </Head>
            <Wrapper>
                {/* <FirstPage />
            <For />
            <How />
            <Questions />
            <TarifsEnglish />
            <FormEnglish/> */}
                <Form />
            </Wrapper>
        </>
    )
}

export default English
