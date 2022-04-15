import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Courses.module.scss'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { show, sideAnimation, useSideAnimation } from './motion'


export const Courses: NextPage = () => {
    return (
        <motion.div viewport={{ once: true, amount: 0.3 }} initial="hidden" whileInView="visible" className='section' style={{ backgroundColor: '#251A40' }}>
            <div className={s["line"]}></div>
            <div className={s["line"]}></div>

            <div>
                <div className={s['decor']}>
                    <motion.div custom={0.3} variants={useSideAnimation(200)} className={s["decor__elem"]}></motion.div>
                    <motion.div custom={0.4} variants={useSideAnimation(0, 200)} className={s["decor__elem"]}></motion.div>
                    <motion.div custom={0.5} variants={useSideAnimation(-200)} className={s["decor__elem"]}></motion.div>
                </div>

                <div className={s['decor']}>
                    <motion.div custom={0.3} variants={useSideAnimation(200)} className={s["decor__elem"]}></motion.div>
                    <motion.div custom={0.4} variants={useSideAnimation(0,200)} className={s["decor__elem"]}></motion.div>
                    <motion.div custom={0.5} variants={useSideAnimation(-200)} className={s["decor__elem"]}></motion.div>
                </div>
            </div>

            <div className="section__content section__content_p" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={s['courses']}>
                    <motion.div className={s["courses__card"]}>
                        <motion.h2 custom={0.3} variants={show} className={s['h2']}>Курсы</motion.h2>
                        <motion.div custom={0.3} variants={useSideAnimation(-100)} className={s["courses__image"]}><img src="/images/courses-second.jpg" alt="" /></motion.div>
                        <div className={s["courses__text-wrap"]}>
                            <motion.div custom={0.3} variants={useSideAnimation(-100)} className={s["courses__title"]}>IELTS of YOUR DREAM</motion.div>
                            <motion.div custom={0.3} variants={useSideAnimation(100)} className={s["courses__desc"]}>(уровень Upper-intermediate, Advanced)</motion.div>
                            <motion.div custom={0.3} variants={useSideAnimation(-100)} className={s["courses__more"]}>
                                <div><A path='/ielts-of-your-dream'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className={s["courses__card"]}>
                        <motion.div custom={0.5} variants={useSideAnimation(-100)} className={s["courses__image"]}><img src="/images/courses-first.png" alt="" /></motion.div>
                        <div className={s["courses__text-wrap"]}>
                            <motion.div custom={0.6} variants={useSideAnimation(-100)} className={s["courses__title"]}>Экспресс-основы английского за 4 недели</motion.div>
                            <motion.div custom={0.6} variants={useSideAnimation(100)} className={s["courses__desc"]}>(уровень Beginner)</motion.div>
                            <motion.div custom={0.6} variants={useSideAnimation(-100)} className={s["courses__more"]}>
                                <div><A path='/general-english'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
