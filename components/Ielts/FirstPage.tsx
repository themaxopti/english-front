import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSideAnimation, useSideAnimationCourse } from '../MainPage/motion'
import buttonS from '../../styles/Fields/Button.module.scss'
import { A } from '../Link'

interface Props {
    children: any
    isSecond?: boolean
    week: string
}

export const Spoiler = ({ children, isSecond = true, week }: Props) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <motion.div
            className='desc-course-sect'
            initial={"hidden"}
            whileInView={"visible"}
            custom={1.1}
            variants={useSideAnimation(-100)}
            viewport={{ once: true }}
        >
            <motion.div
                custom={1.1}
                variants={useSideAnimation(-100)}
                className="description-block__week"
            >
                {week}
            </motion.div>
            
            <motion.div
                className='desc-course-sect__two'
                // variants={useSideAnimation(200)}
            >
                {children}
                {/* <div className='column-dot'>
                    <div className='column-dot__one'></div>
                    <div className='column-dot__two'>Познакомимся с основными типами заданий в аудировании</div>
                </div>

                <div className="description-block__task">
                    <div className="description-block__task-title">VOCABULARY OF THE WEEK:  <span className='normal-f'> Growing up, Physical and mental development, Keeping Fit </span></div>
                    <div className="description-block__task-desc">
                        Домашнее задание по письму и  говорению (в аудио-формате) <br /> с обратной связью
                    </div>
                </div> */}
            </motion.div>
        </motion.div>
    )
}

export const FirstPage = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#E6EAFD' }}>
            <div className='course-first-page__image'>
                <img src="/images/ielts-image.jpg" alt="" />
            </div>
            <div className="section__content section__content_p">
                <div className="course-first-page">
                    <div className="course-first-page__table" style={{ background: 'white' }}>
                        <div className='course-first-page__wrap'>
                            <motion.div custom={1.1} variants={useSideAnimation(-100)} className='course-first-page__title'><h1>Курс <br /> IELTS of YOUR DREAM</h1></motion.div>
                            <motion.div custom={1.3} variants={useSideAnimation(-100)} className='course-first-page__level'>(уровень Upper-intermediate, Advanced)</motion.div>
                            <motion.div custom={1.3} variants={useSideAnimation(-100)} style={{width:"100%",padding:'0 1rem 0 1rem',fontSize:'13px',marginTop:'5px'}}>Для тех, кто собирается поступать в международные ВУЗы, иммигрировать заграницу или строить карьеру в ТОП-компаниях</motion.div>
                            
                            <motion.div custom={1.3} variants={useSideAnimation(-100)} className='course-first-page__modules'>модули: Academic и General</motion.div>
                            <motion.div custom={1.5} variants={useSideAnimation(-100)} className='course-first-page__program'>ПРОГРАММА КУРСА (8 недель = 2 модуля)</motion.div>
                            <motion.div className='course-first-page__start start-course'>
                                <div className='start-course__block'>
                                    <motion.div custom={1.3} variants={useSideAnimation(-200, -200)} className='start-course__one start-course__line'></motion.div>
                                    <motion.div custom={1.5} variants={useSideAnimation(200, -200)} className='start-course__two start-course__line'></motion.div>
                                    <motion.div custom={1.7} variants={useSideAnimation(200, 200)} className='start-course__three start-course__line'></motion.div>
                                    <motion.div custom={1.9} variants={useSideAnimation(-200, 200)} className='start-course__four start-course__line'></motion.div>
                                    <motion.div custom={2.1} variants={useSideAnimation(-500)} className='start-course__text'>Старт 6 июня</motion.div>
                                </div>
                            </motion.div>
                            <div className='course-first-page__video-scrl'>
                                {/* <A path='/ielts-of-your-dream#ieltsForm'> */}
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

                                        style={{ marginTop: "60px" }}
                                        className={buttonS['animated-button']}
                                    >
                                        Получить доступ к бесплатному уроку
                                    </motion.div> */}
                                {/* </A> */}
                            </div>
                        </div>

                        <div className='course-first-page__description description-block'>
                            <Spoiler week='1 Неделя'>
                                <div className='desc-course-sect__two'>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Познакомимся с основными типами заданий в аудировании</div>
                                    </div>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Обсудим, какие есть типы графиков и сами опишем линейный график/или письмо-запрос (для IELTS General)</div>
                                    </div>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Узнаете про типы эссе и напишете своё первое <br /> эссе по выученной структуре</div>
                                    </div>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Проработаем 2 типа заданий в чтении</div>
                                    </div>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Попрактикуем первую часть Speaking</div>
                                    </div>
                                    <div className='column-dot'>
                                        <div className='column-dot__one'></div>
                                        <div className='column-dot__two'>Выучим  и применим лексику по теме Growing up, mental <br /> and physical development</div>
                                    </div>

                                    <div className="description-block__task">
                                        <div className="description-block__task-title">VOCABULARY OF THE WEEK:  <span className='normal-f'> Growing up, Physical and mental development, Keeping Fit </span></div>
                                        <div className="description-block__task-desc">
                                            Домашнее задание по письму и  говорению (в аудио-формате) <br /> с обратной связью
                                        </div>
                                    </div>
                                </div>
                            </Spoiler>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
