import React from 'react'
import s from '../../styles/English/Questions.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation } from '../MainPage/motion'


export const Questions = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{background:'#FFE6B3'}}>
            <div className="section__content section__content_p">
                <div>
                    <motion.img custom={0.5} variants={sideAnimation(400)} className={s["rect-circle"]} src="/images/english-circle.svg" alt="" />
                    <motion.img custom={0.7} variants={sideAnimation(-400)} className={s["rect-circle"]} src="/images/english-circle.svg" alt="" />
                </div>


                <div className={s["questions"]}>
                    <div className={s["questions__wrap"]}>
                        <motion.div custom={0.8} variants={sideAnimation(400)}><h2>Часто задаваемые вопросы</h2></motion.div>

                        <motion.div custom={0.9} variants={sideAnimation(-400)} className={s["questions__card"]} style={{ marginTop: '30px' }}>
                            <div className={s['questions__title']}>Кому подойдёт этот курс?</div>
                            <div className={s['questions__text']}>Этот курс подойдёт идеально тем, кто хочет в краткие сроки освоить азы английского для комфортного проживания и коммуникации заграницей. Этот курс даст вам твердую основу для дальнейшего углубленного изучения языка и избавит от стресса жизни заграницей без языка.</div>
                        </motion.div>

                        <motion.div custom={0.9} variants={sideAnimation(-400)} className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что если я совсем не говорю на английском?</div>
                            <div className={s['questions__text']}>Это нормально, на курсе мы будем разбирать основы чтения, грамматики и говорения.</div>
                        </motion.div>

                        <motion.div custom={0.9} variants={sideAnimation(-400)} className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что нужно для занятий?</div>
                            <div className={s['questions__text']}>Все материалы для занятий вам будут высылаться онлайн
                                и предоставляться во время урока. Единственное, что вам потребуется – это
                                хороший интернет и работающая камера для занятий
                            </div>
                        </motion.div>

                        <motion.div custom={0.9} variants={sideAnimation(-400)} className={s["questions__card"]}>
                            <div className={s['questions__title']}>Удобно ли работать в группе?</div>
                            <div className={s['questions__text']}>Удобнее и эффективнее,
                                чем одному. Я тщательно подбираю участников группы по уровню языка
                                и целям. Количество участников - строго такое, в котором участникам
                                будет полезно и приятно работать вместе – учиться на
                                общих ошибках, обмениваться опытом и практиковаться.
                            </div>
                        </motion.div>


                        <motion.div custom={0.9} variants={sideAnimation(-400)}  className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что если я ничего не буду понимать?</div>
                            <div className={s['questions__text']}>
                                Это нормально, ведь
                                вы только начинаете и у нас всегда будет достаточно
                                времени на уроке, чтобы остановиться и разобрать вопросы.
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </motion.div>
    )
}
