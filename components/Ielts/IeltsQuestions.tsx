import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/Ielts/IeltsQuestions.module.scss'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'

export const IeltsQuestions: NextPage = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='section'>
            <motion.img custom={1} variants={useSideAnimation(300)} className={s["ielts-questions__rect"]} src="/images/how-ielts-rect.svg" alt="" />
            <div className="section__content section__content_p">
                <div className={s["ielts-questions"]}>
                    <motion.div custom={0.5} variants={useSideAnimation(-100)} className={s["ielts-questions__tag"]}>Часто задаваемые вопросы</motion.div>
                    <div className={s["ielts-questions__wrap"]}>
                        <motion.div custom={1.1} variants={useSideAnimation(200)} className={s["ielts-questions__question"]}>
                            <div className={s['ielts-questions__title']}>Достаточный ли у Вас уровень языка?</div>
                            <div className={s['ielts-questions__text']}>Я принимаю участников в группы только по отбору. У каждого участника, который хочет начать
                                подготовку в одной из групп, я лично проверю текущий уровень языка и приму
                                в группу только, если уровень соответствует тому, что будет в курсе.
                                Поэтому вы всегда можете обратиться ко мне и узнать, подойдет ли вам курс
                                на предварительном тестировании.</div>
                        </motion.div>
                        <motion.div custom={0.6} variants={useSideAnimation(200)} className={s["ielts-questions__question"]}>
                            <div className={s['ielts-questions__title']}>Буду ли я полностью готов к сдаче теста после этого курса?</div>
                            <div className={s['ielts-questions__text']}>Этот курс научит вас
                                эффективно выполнять каждую часть теста, обогатит ваш словарный запас на
                                основные темы IELTS, подтянет ваши пробелы в грамматике и лексике.</div>
                        </motion.div>
                        <motion.div custom={0.8} variants={useSideAnimation(200)} className={s["ielts-questions__question"]}>
                            <div className={s['ielts-questions__title']}>Кому подойдёт этот курс?</div>
                            <div className={s['ielts-questions__text']}>Этот курс рассчитан
                                на людей, которые собираются сдавать IELTS Academic или IELTS General в ближайшее
                                время (до года). Если ваш экзамен через два-три месяца, то этот
                                курс как раз подготовит вас к правильному решению всех заданий и отточит
                                ваши навыки и знания, обогатит ваш словарный запас и усилит грамматику. Если же ваш экзамен больше, чем через три месяца, то этот курс даст вам сильную базу и структуру, знания и умения как правильно решать все задания и в дальнейшем вы сможете самостоятельно продолжать
                                заниматься с уже приобретенными знаниями вплоть до вашей сдачи теста.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
