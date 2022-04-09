import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import s from '../styles/Header.module.scss'
import { A } from './Link'
import classNames from 'classnames'

export const Header: NextPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const mobileHeaderClass = classNames({
    [s["header-mobile__content"]]: true,
    [s["header-mobile__content_open"]]: isOpen
  })

  function openNavbar() {
    setIsOpen(!isOpen)
  }


  return (
    <div className='section section_fixed' style={{ top: '0', zIndex: '1000', background: 'white' }}>
      <div className="section__content">
        <div className={s['header-comp']}>
          <div className={s['header-comp__logo']}>
            <img src={"/images/logo.svg"} alt="" />
          </div>
          <div className={s['header-comp__content']}>
            <ul>
              <li><A path='/'>Подготовка к IELTS</A></li>
              <li><A path='/'>Общий английский</A></li>
              <li className={'instagram-logo'}>
                <div>English_dreamteacher</div>
                <div className={s['header-comp__instagram-logo']}><img src="/images/instagram-logo.png" alt="" /></div>
              </li>
            </ul>
          </div>
        </div>


        <div className={s["header-mobile"]}>
          <div className={s["header-mobile__wrapp"]}>

            <nav className={s["header-mobile__nav"]}>
              <div className={s['header-mobile__logo']}><img src="/images/logo.svg" alt="" /></div>
              <div onClick={openNavbar} className={s['header-mobile__navbar-image']}><img src="/images/navbar.png" alt="" /></div>
            </nav>

            <nav className={mobileHeaderClass}>
              <div className={s["header-mobile__navbar"]}>
                <ul>
                  <li><A path='/'>Подготовка к IELTS</A></li>
                  <li><A path='/'>Общий английский</A></li>
                  <li className={s['instagram-logo']}>
                    <div>English_dreamteacher</div>
                    <div className={s['header-comp__instagram-logo']}><img src="/images/instagram-logo.png" alt="" /></div>
                  </li>
                  <li><A path='/'>Обо мне</A></li>
                  <li><A path='/'>Мой подход</A></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
