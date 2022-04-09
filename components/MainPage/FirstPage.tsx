import classNames from 'classnames'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import s from '../../styles/MainPage/FirstPage.module.scss'
import { A } from '../Link'


export const FirstPage: NextPage = () => {

    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true)
        },1000)
    },[])

    const classes = classNames({
        [s['main-image__circle']]: true,
        [s['main-image__circle_animated']]: animated
    })

    return (
        <div className='section section_fullscren' style={{overflow:'hidden'}}>
            <div className={s['main-image']}>
                <div className={classes}></div>
                <div className={classes}></div>
                <div className={classes}></div>
                <div className={classes}></div>
                <img src="/images/7566-nev.png" className={s["main-image__img"]} />
            </div>

            <img className={s['rectangle']} src="/images/Rectangle.svg" alt="" />

            <div className="section__content section__content_p">
                <div className={s["first-page"]}>
                    <h1 className={s['first-page__h']}>Welcome to Dream Teacher School</h1>
                    <div className={s['first-page__btn']}><A path='/'>Почему Dream teacher?</A></div>
                </div>
            </div>
        </div>
    )
}
