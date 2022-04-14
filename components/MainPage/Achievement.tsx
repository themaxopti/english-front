import classNames from 'classnames'
import { NextPage } from 'next'
import React, { forwardRef } from 'react'
import s from '../../styles/MainPage/Achievement.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation, useSideAnimation } from './motion'
import Parallax from '../../helpers/Parallax'

interface Props {
    children: React.ReactNode
}

const Achive = (({ children }: Props, ref: any) => {
    return (
        <div className='card-achievement' ref={ref}>
            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
            <div className='card-achievement__text'>{children}</div>
        </div >
    )
})
const MAchive = motion(React.memo(forwardRef(Achive)))

export const Achievement: NextPage = () => {

    const circleClasses = classNames({
        [s['circle']]: true,
        "circle": true,
        "circle_absolute": true
    })

    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible"
            className='section section__content_p'>
            <img className={s["rectangle"]} src="/images/rectangle-achivment.svg" alt="" />
            {/* <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div> */}


            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>

            <div className="section__content">
                <div className={s["achievement"]}>
                    <nav
                        className={s["achievement__ach"]}>
                        <MAchive custom={0.5} variants={useSideAnimation(100)}
                        >основала рекрутинговый стартап в США</MAchive>
                        <MAchive custom={0.6} variants={useSideAnimation(100)}
                        >помогла десяткам студентов выучить английский и уехать учиться заграницу</MAchive>
                        <MAchive custom={0.7} variants={useSideAnimation(100)}
                        >разработала авторский курс подготовки к IELTS</MAchive>
                        <MAchive custom={0.8} variants={useSideAnimation(100)}
                        >получила грант на обучение в Литве и Франции</MAchive>
                        <MAchive custom={0.9} variants={useSideAnimation(100)}
                        >проходила стажировку в Испании и Великобритании</MAchive>
                        {/* <motion.div
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
                        </motion.div> */}
                    </nav>
                </div>
            </div>
        </motion.div>
    )
}
