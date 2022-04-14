import classNames from 'classnames'
import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Achievement.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation } from './motion'
import Parallax from '../../helpers/Parallax'

export const Achievement: NextPage = () => {

    const circleClasses = classNames({
        [s['circle']]: true,
        "circle": true,
        "circle_absolute": true
    })

    return (
        <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className='section section__content_p'>
                <img className={s["rectangle"]} src="/images/rectangle-achivment.svg" alt="" />
            {/* <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div> */}


            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>

            <div className="section__content">
                <div className={s["achievement"]}>
                    <nav className={s["achievement__ach"]}>
                        <motion.div
                            custom={1}
                            variants={sideAnimation(200)}
                            className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>основала рекрутинговый стартап в США</div>
                        </motion.div>
                        <motion.div
                            custom={1.3}
                            variants={sideAnimation(200)}
                            className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>помогла десяткам студентов выучить английский и уехать учиться заграницу</div>
                        </motion.div>
                        <motion.div
                            custom={1.5}
                            variants={sideAnimation(200)}
                            className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>разработала авторский курс подготовки к IELTS</div>
                        </motion.div>
                        <motion.div
                            custom={1.7}
                            variants={sideAnimation(200)}
                            className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>получила грант на обучение в Литве и Франции</div>
                        </motion.div>
                        <motion.div
                            custom={1.8}
                            variants={sideAnimation(200)}
                            className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>проходила стажировку в Испании и Великобритании</div>
                        </motion.div>
                    </nav>
                </div>
            </div>
        </motion.div>
    )
}
