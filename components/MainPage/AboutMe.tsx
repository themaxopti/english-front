import { NextPage } from 'next'
import React, { Ref, RefObject, useEffect, useRef } from 'react'
import s from '../../styles/MainPage/AboutMe.module.scss'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { leftAnimationAmount, show, sideAnimation, textAnimation, useShow, useSideAnimation } from './motion'
import { AppState, useAppDispatch } from '../../store/store'
import { setAboutMeDiv } from '../../store/reducers/tags.reducer'
import { MutableRefObject } from 'react'
import { WritableDraft } from 'immer/dist/internal'
import { useSelector } from 'react-redux'



export const AboutMe: NextPage = () => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const about = useSelector((state: AppState) => state.test.aboutMeDiv)
    useEffect(() => {
        // @ts-ignore
        dispatch(setAboutMeDiv(ref.current))
    }, [])

    return (
        <motion.div viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="visible"
            className='section about-me-section'
            style={{ minHeight: '700px', overflow: 'hidden' }}
            ref={ref}
            id="aboutMe"
        >
            <img className={s['rect']} src="/images/Rectangle.svg" alt="" />

            <motion.h2
                custom={0.5}
                className={s['h']}
                variants={useSideAnimation(200)}
            >
                Обо мне
            </motion.h2>

            <div className={s["about-me"]}>
                <motion.img
                    custom={0.5}
                    variants={useSideAnimation(100)}
                    className={s["about-me__rectangle"]}
                    src="/images/about-me-rect.svg" alt="" />
                <motion.div
                    custom={0.5}
                    variants={useSideAnimation(0, 100)}
                    className={s['about-me__rect']}
                ></motion.div>

                <div className={s['about-me__wrap']}>
                    <div className={s['about-me__image']}>
                        <motion.img
                            custom={0.6}
                            variants={useShow()}
                            src="/images/Tanya.jpg"
                            alt=""
                        />
                    </div>
                    <div className={s['about-me__content']}>
                        <motion.div
                            custom={0.7}
                            variants={useSideAnimation(100)}
                        ><strong>Татьяна Лозик</strong></motion.div>
                        <motion.div
                            custom={0.7}
                            variants={useSideAnimation(-100)}
                        ><A path='/'><strong>@english.dreamteacher</strong></A></motion.div>
                        <motion.div
                            custom={0.8}
                            variants={useSideAnimation(0, 200)}
                            className={s['about-me__main-text']}
                        >
                            «Английский открыл мне двери
                            во все ВУЗы Европы, дал возможность поработать в топовых американсих
                            компаниях и основать свой бизнес. Я умею обучать людей так, что благодаря английскому
                            они осуществляли свои мечты также, как и я»
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
