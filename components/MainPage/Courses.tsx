import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Courses.module.scss'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { show, sideAnimation } from './motion'

export const Courses: NextPage = () => {
    return (
        <motion.div viewport={{ once: true,amount:0.2 }} initial="hidden" whileInView="visible" className='section' style={{ backgroundColor: '#251A40' }}>
            <div className={s["line"]}></div>
            <div className={s["line"]}></div>

            <div>
                <div className={s['decor']}>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                </div>

                <div className={s['decor']}>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                </div>
            </div>

            <div className="section__content section__content_p" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={s['courses']}>
                    <motion.div className={s["courses__card"]}>
                        <motion.h2 custom={0.5} variants={show} className={s['h2']}>Курсы</motion.h2>
                        <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__image"]}><img src="/images/courses-first.jpg" alt="" /></motion.div>
                        <div className={s["courses__text-wrap"]}>
                            <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__title"]}>IELTS of YOUR DREAM</motion.div>
                            <motion.div custom={0.5} variants={sideAnimation(100)} className={s["courses__desc"]}>(уровень Upper-intermediate, Advanced)</motion.div>
                            <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__more"]}>
                                <div><A path='/'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className={s["courses__card"]}>
                        <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__image"]}><img src="/images/courses-first.jpg" alt="" /></motion.div>
                        <div className={s["courses__text-wrap"]}>
                            <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__title"]}>Экспресс-основы английского за 4 недели</motion.div>
                            <motion.div custom={0.5} variants={sideAnimation(100)} className={s["courses__desc"]}>(уровень Beginner)</motion.div>
                            <motion.div custom={0.5} variants={sideAnimation(-100)} className={s["courses__more"]}>
                                <div><A path='/'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}