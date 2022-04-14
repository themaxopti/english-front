import React from 'react'
import { motion } from 'framer-motion'
import { sideAnimation } from '../MainPage/motion'


export const Description = () => {
    return (
        <div className='section' style={{ background: '#E6EAFD' }}>
            <div className="section__content section__content_p">
                <div className="course-main">
                    <div className="course-first-page__table">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={0.5} variants={sideAnimation(200)} className='description-block'>
                            <motion.div custom={1.1} variants={sideAnimation(-100)} className="description-block__week">2 неделя:</motion.div>
                            <motion.div className="description-block__task">
                                <div className="description-block__task-title">Listening</div>
                                <div className="description-block__task-desc">Разбор и практика: Short-answer questions</div>
                            </motion.div>


                            <div className="description-block__task">
                                <div className="description-block__task-title">Reading</div>
                                <div className="description-block__task-desc"><strong>Разбор и практика:</strong> <br />
                                    True/false/not stated,
                                    Yes/no/not given
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Writing</div>
                                <div className="description-block__task-desc">
                                    Task 1: Process – разбор, анализ и практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 2:</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li> Как сделать текст связным</li>
                                        <li>Анализ и практика написания Advantages and Disadvantages Essay по специальной структуре</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Часть 2: быстрая и эффективная схема ответа
                                    Практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: Lifestyles, Student life, Effective communication</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </motion.div>

                    </div>


                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table">
                        <div className='description-block'>
                            <div className="description-block__week">3 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-title">Listening</div>
                                <div className="description-block__task-desc">Разбор и практика «Matching information »</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-title">Reading</div>
                                <div className="description-block__task-desc">
                                    Разбор и практика Multiple choice , Matching features
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Writing</div>
                                <div className="description-block__task-desc">
                                    <strong>Task 1:</strong>  <br /> Разбор, анализ и практика Tables, bars and pie charts
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 2:</div>
                                <div className="description-block__task-desc">
                                    Как и какую грамматику использовать для высокой оценки?
                                    Анализ и практика «Discussion Essay»
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Часть 3: схема ответа и практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: TRAVELS, HISTORY, NATURAL WORLD</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table">
                        <div className='description-block'>
                            <div className="description-block__week">4 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-title">Listening</div>
                                <div className="description-block__task-desc">практика и анализ заданий: Plan, map, diagram labelling</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-title">Reading</div>
                                <div className="description-block__task-desc">
                                    практика и анализ заданий:Summary, note, table, flow- chart completion
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Writing</div>

                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 1:</div>
                                <div className="description-block__task-desc">
                                    <strong>Maps</strong> – анализ и практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 2</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li>Частые ошибки в эссе</li>
                                        <li>Как быстро улучшить своё эссе</li>
                                        <li>Навык быстрого нахождения аргументов для эссе</li>
                                        <li>Анализ и практика Problem and solution essay</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: MODERN WORLD, DESIGN AND INNOVATION, IT</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table" style={{ marginTop: '-40px' }}>
                        <div className='description-block'>
                            <div className="description-block__week">5 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-title">Listening</div>
                                <div className="description-block__task-desc">практика и анализ заданий: Sentence completion</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-title">Reading</div>
                                <div className="description-block__task-desc">
                                    практика и анализ заданий: Sentence completion <br />
                                    практика и анализ заданий: Matching sentence endings
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Writing</div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 1:</div>
                                <div className="description-block__task-desc">
                                    Mixed Charts
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Task 2</div>
                                <div className="description-block__task-desc">
                                    <ul>
                                        <li>Open question Essay</li>
                                        <li>Time management</li>
                                        <li>Быстрые схемы написаний Conclusion</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика <br />
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>


                        </div>
                    </motion.div>




                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true}} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table">
                        <div className='description-block'>
                            <div className="description-block__week">6 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-title">Reading:</div>
                                <div className="description-block__task-desc">Short-answer questions</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-title">Listening:</div>
                                <div className="description-block__task-desc">
                                    Multiple choice questions
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Writing</div>
                                <div className="description-block__task-desc">
                                    Практика эссе и task 1
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика Speaking (3 parts)
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: URBANISATION, ENVINRONMENT</div>
                                <div className="description-block__task-desc">

                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: MODERN WORLD, DESIGN AND INNOVATION, IT</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table" style={{ marginTop: '-34px' }}>
                        <div className='description-block'>
                            <div className="description-block__week">7 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-desc">Практика эссе и task 1</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-desc">
                                    Практика Speaking (3 parts)
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-desc">
                                    Reading (full) + Listening (part 1,2)

                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: BUSINES, LAW</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: URBANISATION, ENVINRONMENT</div>
                                <div className="description-block__task-desc">

                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: MODERN WORLD, DESIGN AND INNOVATION, IT</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sideAnimation(200)} className="course-first-page__table" style={{ marginTop: '-34px' }}>
                        <div className='description-block'>
                            <div className="description-block__week">8 неделя:</div>
                            <div className="description-block__task">
                                <div className="description-block__task-desc">Практика эссе и task 1</div>
                            </div>


                            <div className="description-block__task">
                                <div className="description-block__task-desc">
                                    Практика Speaking (3 parts)
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-desc">
                                    Reading (full) + Listening (part 3,4)

                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: MEDIA, ARTS</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: URBANISATION, ENVINRONMENT</div>
                                <div className="description-block__task-desc">

                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">Speaking</div>
                                <div className="description-block__task-desc">
                                    Практика
                                </div>
                            </div>

                            <div className="description-block__task">
                                <div className="description-block__task-title">VOCABULARY OF THE WEEK: MODERN WORLD, DESIGN AND INNOVATION, IT</div>
                                <div className="description-block__task-desc">
                                    Домашнее задание по письму и говорению (в аудио-формате) с обратной связью
                                </div>
                            </div>
                        </div>
                    </motion.div>



                </div>
            </div>
        </div>
    )
}
