import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { AboutMe } from '../components/MainPage/AboutMe'
import { FirstPage } from '../components/MainPage/FirstPage'
import { WhyMe } from '../components/MainPage/WhyMe'
import { Wrapper } from '../layouts/Wrapper'

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <FirstPage />
        <WhyMe/>
        <AboutMe/>
      </Wrapper>
    </>
  )
}

export default Home
