import React from 'react'
import s from '../../styles/English/FirstPage.module.scss'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'
import buttonS from '../../styles/Fields/Button.module.scss'
import { A } from '../Link'

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
                            <motion.div custom={0.5} variants={useSideAnimation(100)} className='course-first-page__title'><h1>Экспресс-курс <br />"Английский для новичков"</h1></motion.div>
                            <motion.div custom={0.6} variants={useSideAnimation(-100)} className='course-first-page__level'>(уровень Beginer)</motion.div>
                            <motion.div custom={0.7} variants={useSideAnimation(200)} className='course-first-page__program'>(Продолжительность: 4 недели)</motion.div>
                            <motion.div className='course-first-page__start start-course'>
                                <div className='start-course__block'>
                                    <motion.div custom={1.3} variants={useSideAnimation(-200, -200)} className='start-course__one start-course__line'></motion.div>
                                    <motion.div custom={1.5} variants={useSideAnimation(200, -200)} className='start-course__two start-course__line'></motion.div>
                                    <motion.div custom={1.7} variants={useSideAnimation(200, 200)} className='start-course__three start-course__line'></motion.div>
                                    <motion.div custom={1.9} variants={useSideAnimation(-200, 200)} className='start-course__four start-course__line'></motion.div>
                                    <motion.div custom={2.1} variants={useSideAnimation(-500)} className='start-course__text'>Старт 1 июня</motion.div>
                                </div>
                            </motion.div>
                            <div className='course-first-page__video-scrl'>
                                <A path='/general-english#englishForm'>
                                    {/* <motion.div
                                        custom={1.9}
                                        variants={useSideAnimation(-100)}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.1 }
                                        }}

                                        whileTap={{
                                            scale: 0.9,
                                            boxShadow: ' 0px 0px 1px 22px rgba(101, 123, 243, 0.35);',
                                            transition: { duration: 0.1 }
                                        }}
                                        style={{
                                            marginTop: "60px",
                                            boxShadow: '0px 0px 1px 2px #FFE6B3',
                                            border: '1px solid #EBA569',
                                            color: '#C34916'
                                        }}
                                        className={buttonS['animated-button']}
                                    >
                                        Получить доступ к бесплатному уроку
                                    </motion.div> */}
                                </A>

                            </div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <motion.div custom={0.5} variants={useSideAnimation(100)} className="description-block__week">1 неделя</motion.div>
                            <motion.div custom={0.6} variants={useSideAnimation(-200)} className="description-block__task">
                                <div className="description-block__task-title">Базовые правила произношения и чтения</div>
                                <div className="description-block__task-title">Основные времена английского языка</div>
                                <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>рассказ о себе</span></div>
                            </motion.div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <motion.div custom={0.5} variants={useSideAnimation(100)} className="description-block__week">2 неделя</motion.div>
                            <motion.div custom={0.6} variants={useSideAnimation(200)} className="description-block__task">
                                <div className="description-block__task-title">Постановка вопросов</div>
                                <div className="description-block__task-title">Предлоги в английском языке</div>
                                <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>жизнь в городе: SUPERMERKET, STORE, HOSPITAL</span></div>
                            </motion.div>
                        </div>


                        <div className={s['firstPage']}>
                            <div className='course-first-page__description description-block'>
                                <motion.div custom={0.5} variants={useSideAnimation(300)} className="description-block__week">3 неделя</motion.div>
                                <motion.div custom={0.6} variants={useSideAnimation(-300)} className="description-block__task">
                                    <div className="description-block__task-title">Posessive pronouns</div>
                                    <div className="description-block__task-title">There is/ there are</div>
                                    <div className="description-block__task-title">Тема: <span style={{ fontWeight: "300" }}>Food and drinks</span></div>
                                </motion.div>
                            </div>

                            <div className='course-first-page__description description-block'>
                                <motion.div custom={0.5} variants={useSideAnimation(100)} className="description-block__week">4 неделя</motion.div>
                                <motion.div custom={0.6} variants={useSideAnimation(200)} className="description-block__task">
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
