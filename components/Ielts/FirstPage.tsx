import React from 'react'
import { motion } from 'framer-motion' 
import { sideAnimation } from '../MainPage/motion'


export const FirstPage = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#E6EAFD' }}>
            <div className='course-first-page__image'>
                <img src="/images/ielts-image.jpg" alt="" />
            </div>
            <div className="section__content section__content_p">
                <div className="course-first-page">
                    <div className="course-first-page__table" style={{background:'white'}}>
                        <div className='course-first-page__wrap'>
                            <motion.div custom={1.1} variants={sideAnimation(-100)} className='course-first-page__title'><h1>Курс <br /> IELTS of YOUR DREAM</h1></motion.div>
                            <motion.div custom={1.3} variants={sideAnimation(-100)} className='course-first-page__level'>(уровень Upper-intermediate, Advanced)</motion.div>
                            <motion.div custom={1.5} variants={sideAnimation(-100)} className='course-first-page__program'>ПРОГРАММА КУРСА (8 недель= 2 модуля)</motion.div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <motion.div custom={1.1} variants={sideAnimation(-100)} className="description-block__week">1 неделя</motion.div>
                            <motion.div custom={1.3} variants={sideAnimation(100)} className="description-block__task">
                                <div className="description-block__task-title">Listening (Аудирование)</div>
                                <div className="description-block__task-desc">Разбираем и практикуем типы заданий: Form, note, table, flow-chart, summary completion</div>
                            </motion.div>


                            <motion.div custom={1.1} variants={sideAnimation(100)} className="description-block__task">
                                <div className="description-block__task-title">Writing (Письмо)</div>
                                <div className="description-block__task-desc">Разбираем и практикуем типы заданий: Form, note, table, flow-chart, summary completion</div>
                            </motion.div>

                            <motion.div custom={1.5} variants={sideAnimation(-200)} className="description-block__task">
                                <div className="description-block__task-title">Task 1: Графики</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li>Типы графиков</li>
                                        <li>Быстрая и эффективная структура ответа</li>
                                        <li> Учимся описывать линейный график</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true,amount:0.2 }} custom={1.1} variants={sideAnimation(200)} className="description-block__task">
                                <div className="description-block__task-title">Task 2: Эссе</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li> Как правильно подходить к написанию эссе: структура и формы</li>
                                        <li>Быстрое и легкое написание Introduction</li>
                                        <li> Эффективные методики перефразирования</li>
                                        <li> Учимся писать эссе Agree/Disagree</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div custom={1.1} variants={sideAnimation(-200)} className="description-block__task">
                                <div className="description-block__task-title">Speaking (Говорение)</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li> Часть 1: типы вопросов и схема ответа</li>
                                        <li>Тренинг части 1 + полезный вокабуляр для ответов на вопросы</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div custom={1.1} variants={sideAnimation(200)} className="description-block__task">
                                <div className="description-block__task-title">Reading (Чтение)</div>
                                <div className="description-block__task-desc">
                                    Разбираем и практикуем задания «matching headings» и «matching information»
                                </div>
                            </motion.div>


                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}
