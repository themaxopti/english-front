import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { AboutMe } from '../components/MainPage/AboutMe'
import { Achievement } from '../components/MainPage/Achievement'
import { Approach } from '../components/MainPage/Approach'
import { Courses } from '../components/MainPage/Courses'
import { FirstPage } from '../components/MainPage/FirstPage'
import { FitBack } from '../components/MainPage/FitBack'
import { How } from '../components/MainPage/How'
import { WhyMe } from '../components/MainPage/WhyMe'
import { Wrapper } from '../layouts/Wrapper'

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <FirstPage />
        <WhyMe />
        <AboutMe />
        <Achievement />
        <Approach />
        <How />
        <Courses />
        <FitBack/>
      </Wrapper>
    </>
  )
}

export default Home
