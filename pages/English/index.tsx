import React from 'react'
import { FirstPage } from '../../components/English/FirstPage'
import { For } from '../../components/English/For'
import { FormEnglish } from '../../components/English/FormEnglish'
import { How } from '../../components/English/How'
import { Questions } from '../../components/English/Questions'
import { TarifsEnglish } from '../../components/English/Tarifs'
import { Wrapper } from '../../layouts/Wrapper'

const English = () => {
    return (
        <Wrapper>
            <FirstPage />
            <For />
            <How />
            <Questions />
            <TarifsEnglish />
            <FormEnglish/>
        </Wrapper>
    )
}

export default English
