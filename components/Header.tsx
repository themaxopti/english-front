import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import s from '../styles/Header.module.scss'
import { A } from './Link'
import classNames from 'classnames'
import { DarkRect } from './DarkRect'
import { useRouter } from 'next/router'
import { delay } from '../helpers/delay'
import { useSelector } from 'react-redux'
import { AppState } from '../store/store'


export const Header: NextPage = () => {

  const aboutMeSection = useRef() as any

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const mobileHeaderClass = classNames({
    [s["header-mobile__content"]]: true,
    [s["header-mobile__content_open"]]: isOpen
  })

  useEffect(() => {
    const aboutMe = document.querySelector('.about-me-section')
    aboutMeSection.current = aboutMe
  }, [])


  function openNavbar() {
    setIsOpen(!isOpen)
    setIsActive(!isActive)
  }


  async function clickedToLink() {
    router.push('/')
    await delay(1000)
    const top = aboutMeSection.current?.getBoundingClientRect().top
    openNavbar()
    debugger
    await delay(700)
    window.scrollTo({
      behavior: 'smooth',
      top,
      left: 0
    })
  }



  return (

    <>
      <DarkRect isActive={isActive} />

      <div className='section section_fixed' style={{ top: '0', zIndex: '1000', background: 'white' }}>
        <div className="section__content">
          <div className={s['header-comp']}>
            <div className={s['header-comp__logo']}>
              <img src={"/images/logo.svg"} alt="" />
            </div>
            <div className={s['header-comp__content']}>
              <ul>
                <li className={s["header-comp__li-links"]}>
                  <div className={s['header-comp__li-thin']}><A path='/'>Главная</A></div>
                  <div className={s['header-comp__li-thin']}><A path='/ielts-of-your-dream'>Подготовка к IELTS</A></div>
                  <div className={s['header-comp__li-thin']}><A path='/general-english'>Экспресс-курс "Английский для новичков"</A></div>
                  <div><A path='/consultation'>Бесплатная консультация</A></div>
                </li>
                <li className={'instagram-logo'}>
                  <div> <A isBlank={true} path='https://www.instagram.com/english_dreamteacher/?utm_medium=copy_link'> English_dreamteacher </A></div>
                  <div className={s['header-comp__instagram-logo']}><img src="/images/instagram-logo.png" alt="" /></div>
                </li>
              </ul>
            </div>
          </div>


          <div className={s["header-mobile"]}>
            <div className={s["header-mobile__wrapp"]}>

              <nav className={s["header-mobile__nav"]}>
                <div className={s['header-mobile__logo']}><A path='/'> <img src="/images/logo.svg" alt="" /> </A></div>
                <div onClick={openNavbar} className={s['header-mobile__navbar-image']}><img src="/images/navbar.png" alt="" /></div>
              </nav>

              <nav className={mobileHeaderClass}>
                <div className={s["header-mobile__navbar"]}>
                  <ul>
                    <li><A path='/'>Главная</A></li>
                    <li><A path='/ielts-of-your-dream'>Подготовка к IELTS</A></li>
                    <li><A path='/general-english'>экспресс-курс "Английский для новичков"</A></li>
                    <li><A path='/consultation'>Бесплатная консультация</A></li>

                    <li onClick={openNavbar}> <A path='/#aboutMe'> Обо мне</A> </li>
                    <li onClick={openNavbar}><A path='/#aproach'>Мой подход</A></li>
                    <li className={s['instagram-logo']}>
                      <div> <A path='https://www.instagram.com/english_dreamteacher/?utm_medium=copy_link'> English_dreamteacher </A></div>
                      <div className={s['header-comp__instagram-logo']}><img src="/images/instagram-logo.png" alt="" /></div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
