import classNames from 'classnames'
import { NextPage } from 'next'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import s from '../../styles/MainPage/FirstPage.module.scss'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { textAnimation, imgAnimation, useSideAnimation, useImgAnimation } from './motion'
import { ModalWindow } from '../ModalWindow'



export const FirstPage: NextPage = () => {

 
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>
    const whyRef = useSelector((state: AppState) => state.test.whyDiv)
    const whyRefTop = whyRef?.getBoundingClientRect().top

    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true)
        }, 1000)
    }, [])


    const classes = classNames({
        [s['main-image__circle']]: true,
        [s['main-image__circle_animated']]: animated
    })

    function scrollPage() {
        // window.scrollTo(0, whyRefTop - 200)
        window.scrollTo({
            behavior: 'smooth',
            top: whyRefTop - 300,
            left: 0
        })
    }

    return (
        <>
            
            <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section section_fullscren' ref={ref} style={{ overflow: 'hidden' }}>
                <div className={s['main-image']}>
                    <div className={classes}></div>
                    <div className={classes}></div>
                    <div className={classes}></div>
                    <div className={classes}></div>
                    <img src="/images/7566-nev.png" className={s["main-image__img"]} />
                </div>

                <motion.img viewport={{ once: true }} initial="hidden" whileInView="visible" custom={1} variants={useImgAnimation()} className={s['rectangle']} src="/images/Rectangle.svg" alt="" />

                <motion.div className="section__content section__content_p">
                    <div className={s["first-page"]}>
                        <motion.h1
                            custom={1} variants={useSideAnimation(200)} className={s['first-page__h']}
                        >
                            Welcome to Dream Teacher School</motion.h1>
                        <motion.div
                            onClick={scrollPage}
                            className={s['first-page__btn']}
                            whileHover={{
                                scale: 1.1,
                                // transition: { duration: 1 },
                            }}
                            custom={1.1} variants={useSideAnimation(100)}
                            whileTap={{ scale: 0.9 }}
                        >
                            Почему Dream teacher?
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
