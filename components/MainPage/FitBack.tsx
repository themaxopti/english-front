import React from 'react'
import s from '../../styles/MainPage/FitBack.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation, useSideAnimation } from './motion'

export const FitBack = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#251A40' }}>
            <div className="section__content section__content_p">
                <div className={s['fit-back']}>
                    <div className={s["fit-back__card"]}>
                        <motion.div custom={1.1} variants={useSideAnimation(-100)} className={s['fit-back__title']}>Мой опыт подготовки людей:</motion.div>
                        <motion.div custom={1.2} variants={useSideAnimation(100)} className={s["fit-back__text"]}>Это мой первый поток подготовки студентов к сдачи IELTS, но я индивидуально подготовила 2х студентов к сдачи IELTS на 6,5 и на 7.0, также я самостоятельно готовилась к сдачи этого теста для поступления заграницу и прошла этот путь на своём примере.</motion.div>
                    </div>
                    <div className={s["fit-back__card"]}>
                        <motion.div custom={1.2} variants={useSideAnimation(-100)} className={s['fit-back__title']}>Почему именно мои курсы помогут Вам?</motion.div>
                        <motion.div custom={1.3} variants={useSideAnimation(100)}  className={s["fit-back__text"]}>Во время бакалавриата на
                            факультете международного
                            права, у меня был общий, юридический и английский для профессионального перевода каждый день. Дальше на протяжении 3х лет я училась в Европейском ВУЗе на английском языке, всего за 2 дня подготовки, я сдала IELTS на 7.0 Поэтому я из личного опыта понимаю, как нужно готовить студентов не просто к сдачи IELTS yа нужный бал, но и еще и обучать в ходе этого навыкам, которые понадобятся для комфортного обучения и жизни заграницей. Также я уже 6 лет работаю в американской компании и английский
                            язык является моим основным языком ежедневного общения.
                        </motion.div>
                    </div>
                    <div className={s["fit-back__card"]}>
                        <motion.div custom={1.2} variants={useSideAnimation(-100)}  className={s['fit-back__title']}>Эффективны ли занятия в группе?</motion.div>
                        <motion.div custom={1.3} variants={useSideAnimation(-100)}  className={s["fit-back__text"]}>
                            Мой главный приоритет – эффективность и Ваш результат,
                            поэтому я создаю только такие группы, где каждый участник
                            сможет каждый раз получить ответ и обратную связь на свой
                            конкретный вопрос и в ходе занятия лично попрактиковаться.
                            Занятия в группах до 5ти человек дают возможность и проработать свои личные навыки, и потренироваться в паре с другими участниками, что только усиливает возможность избегать определенных
                            ошибок на примере наблюдения за другими участниками группы.
                        </motion.div>
                    </div>
                    <div className={s["fit-back__card"]}>
                        <motion.div custom={1.4} variants={useSideAnimation(-100)}  className={s['fit-back__title']}>Удобно ли в онлайн-формате ?</motion.div>
                        <motion.div custom={1.5} variants={useSideAnimation(-100)}  className={s["fit-back__text"]}>
                            Да, ведь вы сможете присутствовать на уроках
                            из любого удобного для Вас места, а если не успеете
                            прийти на урок, то всегда сможете
                            получить доступ к записи урока. Все материалы
                            и информация, изученная на уроке также будет отправлена Вам после каждого урока.
                        </motion.div>
                    </div>
                    <div className={s["fit-back__card"]}>
                        <motion.div custom={1.6} variants={useSideAnimation(-100)}  className={s['fit-back__title']}>Достаточный ли у Вас уровень языка?</motion.div>
                        <motion.div custom={1.7} variants={useSideAnimation(100)}  className={s["fit-back__text"]}>
                            Я принимаю участников в
                            группы только по отбору. У каждого участника,
                            который хочет начать подготовку в одной из групп,
                            я лично проверю текущий уровень языка и приму в группу
                            только, если уровень соответствует тому, что будет в курсе. Поэтому вы всегда можете
                            обратиться ко мне и узнать, подойдет ли вам курс на предварительном тестировании.
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
