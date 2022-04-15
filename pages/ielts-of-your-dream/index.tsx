import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Description } from '../../components/Ielts/Description'
import { FirstPage } from '../../components/Ielts/FirstPage'
import { Form } from '../../components/Ielts/Form'
import { How } from '../../components/Ielts/How'
import { IeltsQuestions } from '../../components/Ielts/IeltsQuestions'
import { Tarifs } from '../../components/Ielts/Tarifs'
import { Wrapper } from '../../layouts/Wrapper'

const IeltsOfYourDream: NextPage = () => {
  return (
    <>
    <Head>
      <title>Ielts of your dream</title>
    </Head>
    <Wrapper>
      <FirstPage />
      <Description />
      <How />
      <IeltsQuestions />
      <Tarifs />
      <Form />
    </Wrapper>
    </>
  )
}

export default IeltsOfYourDream
