import classNames from 'classnames'
import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/How.module.scss'
import { motion } from 'framer-motion'
import { show, sideAnimation, useShow, useSideAnimation } from './motion'


export const How: NextPage = () => {
    const classes = classNames({
        "section": true,
        [s["with-color"]]: true
    })

    const firstTextCircle = classNames({
        [s["circle"]]: true
    })

    return (
        <motion.div viewport={{ once: true, amount: 0.3 }} initial="hidden" whileInView="visible" className={classes}>
            <div className={s["first-decor"]}>
                <motion.div custom={0.3} variants={useSideAnimation(-300)} className={s["first-decor__elem-one"]}></motion.div>
                <div className={s["first-decor__elem-two"]}>
                    <motion.div custom={0.3} variants={useSideAnimation(-100)}></motion.div>
                    <motion.div custom={0.4} variants={useSideAnimation(100)}></motion.div>
                    <motion.div custom={0.5} variants={useSideAnimation(0, 100)}></motion.div>
                </div>
            </div>

            <div className={s["second-decor"]}>
                <motion.div custom={0.3} variants={useSideAnimation(300)} className={s["second-decor__elem-one"]}></motion.div>
                <div className={s["second-decor__elem-two"]}>
                    <motion.div custom={0.3} variants={useSideAnimation(-100)} className={s['two']}></motion.div>
                    <motion.div custom={0.3} variants={useSideAnimation(100)}></motion.div>
                    <motion.div custom={0.3} variants={useSideAnimation(0, 100)}></motion.div>
                </div>
            </div>

            <div className="section__content section__content_p">
                <div className={s["how"]}>
                    <div className={s["how__wrap"]}>
                        <motion.h2 custom={0.5} variants={useShow()}>Как родилась идея создать эти курсы?</motion.h2>

                        <div className={s['how__text-one']}>
                            <motion.p custom={0.5} variants={useSideAnimation(200)}> Так получилось, что знание английского открыло для меня сначала возможность бесплатно учиться заграницей, а потом и начать работать в США и даже открыть там свой бизнес. Как в школе, так и на протяжении студенческих лет, я много времени уделяла изучению не только английского, но и других иностранных языков: французского, немецкого и испанского. Этот опыт помог мне найти эффективные и быстрые методики изучения языка. Когда же мне самой понадобилось подготовиться к сдаче IELTS, я столкнулась с тем, что большинство курсов по подготовке к IELTS не предлагали ничего более, чем простое «прорешивание» тестов с исправлением ошибок. </motion.p>
                            <div className={firstTextCircle}></div>
                        </div>

                        <div className={s["how__text-two"]}>
                            <motion.p viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" custom={0.3} variants={useSideAnimation(-200)}>   Когда мои друзья и знакомые стали обращаться ко мне с вопросами о том, как им лучше готовиться к тесту, я поняла, что они сталкиваются с теми же трудностями, что и я когда-то. Так я решила, что мои знания и опыт помогут учащимся сэкономить время и системно подготовиться к сдаче теста IELTS. Подробнее о курсах читайте здесь. </motion.p>
                            <div className={s["rect"]}></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
