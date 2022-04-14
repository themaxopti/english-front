import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/AboutMe.module.scss'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { leftAnimationAmount, show, sideAnimation, textAnimation } from './motion'


export const AboutMe: NextPage = () => {
    return (
        <motion.div viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="visible"
            className='section'
            style={{ minHeight: '700px', overflow: 'hidden' }}>
            <img className={s['rect']} src="/images/Rectangle.svg" alt="" />

            <motion.h2
                custom={1}
                className={s['h']}
                variants={leftAnimationAmount}
            >
                Обо мне
            </motion.h2>

            <div className={s["about-me"]}>
                <motion.img
                    custom={1.1}
                    variants={leftAnimationAmount}
                    className={s["about-me__rectangle"]}
                    src="/images/about-me-rect.svg" alt="" />
                <motion.div
                    custom={1.5}
                    variants={sideAnimation(0, 100)}
                    className={s['about-me__rect']}
                ></motion.div>

                <div className={s['about-me__wrap']}>
                    <div className={s['about-me__image']}>
                        <motion.img
                            custom={1.7}
                            variants={show}
                            src="/images/Tanya.jpg"
                            alt=""
                        />
                    </div>
                    <div className={s['about-me__content']}>
                        <motion.div
                            custom={1.8}
                            variants={sideAnimation(100)}
                        ><strong>Татьяна Лозик</strong></motion.div>
                        <motion.div
                            custom={1.9}
                            variants={sideAnimation(-100)}
                        ><A path='/'><strong>@english.dreamteacher</strong></A></motion.div>
                        <motion.div
                            custom={2}
                            variants={sideAnimation(0, 200)}
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
