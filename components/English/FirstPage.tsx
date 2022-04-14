import React from 'react'
import s from '../../styles/English/FirstPage.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation } from '../MainPage/motion'

export const FirstPage = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#FFE6B3' }}>

        <div className={s["image"]}>
            <img src="/images/English-image.jpg" alt="" />
        </div>

            <div className="section__content section__content_p">
                <div className="course-first-page">
                    <div className="course-first-page__table" style={{ background: 'white' }}>
                        <div className='course-first-page__wrap'>
                            <motion.div custom={0.5} variants={sideAnimation(100)} className='course-first-page__title'><h1>Курс <br />БЫСТРАЯ АДАПТАЦИЯ ЗАГРАНИЦЕЙ</h1></motion.div>
                            <motion.div custom={0.6} variants={sideAnimation(-100)} className='course-first-page__level'>(уровень Beginer)</motion.div>
                            <motion.div custom={0.7} variants={sideAnimation(200)} className='course-first-page__program'>(Продолжительность: 4 недели)</motion.div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <motion.div custom={0.5} variants={sideAnimation(100)} className="description-block__week">1 неделя</motion.div>
                            <motion.div custom={0.6} variants={sideAnimation(-200)} className="description-block__task">
                                <div className="description-block__task-title">Базовые правила произношения и чтения</div>
                                <div className="description-block__task-title">Основные времена английского языка</div>
                                <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>рассказ о себе</span></div>
                            </motion.div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <motion.div custom={0.5} variants={sideAnimation(100)} className="description-block__week">2 неделя</motion.div>
                            <motion.div custom={0.6} variants={sideAnimation(200)} className="description-block__task">
                                <div className="description-block__task-title">Постановка вопросов</div>
                                <div className="description-block__task-title">Предлоги в английском языке</div>
                                <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>жизнь в городе: SUPERMERKET, STORE, HOSPITAL</span></div>
                            </motion.div>
                        </div>




                        <div className={s['firstPage']}>
                            <div className='course-first-page__description description-block'>
                                <motion.div custom={0.5} variants={sideAnimation(300)} className="description-block__week">3 неделя</motion.div>
                                <motion.div custom={0.6} variants={sideAnimation(-300)} className="description-block__task">
                                    <div className="description-block__task-title">Posessive pronouns</div>
                                    <div className="description-block__task-title">There is/ there are</div>
                                    <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>Food and drinks</span></div>
                                </motion.div>
                            </div>

                            <div className='course-first-page__description description-block'>
                                <motion.div custom={0.5} variants={sideAnimation(100)} className="description-block__week">4 неделя</motion.div>
                                <motion.div custom={0.6} variants={sideAnimation(200)} className="description-block__task">
                                    <div className="description-block__task-title">Adjectives</div>
                                    <div className="description-block__task-title">Adverbs</div>
                                    <div className="description-block__task-title">Verbal phrases</div>
                                    <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>Transport, movement</span></div>
                                </motion.div>
                            </div>

                        </div>





                    </div>
                </div>
            </div>
        </motion.div>
    )
}
