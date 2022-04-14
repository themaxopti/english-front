import React from 'react'
import s from '../../styles/English/How.module.scss'
import { motion } from 'framer-motion'
import { sideAnimation } from '../MainPage/motion'

export const How = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#FFE6B3' }}>
            <motion.img custom={1} variants={sideAnimation(400)} className={s['rect']} src="images/english-rect.svg" alt="" />
            <div className="section__content section__content_p">
                <div className={s['how']}>
                    <div className={s["how__card"]}>
                        <div className={s["how__card-wrap"]}>
                            <div className={s["how__card-module"]}>
                                <motion.div custom={0.5} variants={sideAnimation(200)} className={s['how__card-title']}><h2>Как все будет?</h2></motion.div>
                                <div className={s['how__card-schedule']}>
                                    <motion.div custom={0.6} variants={sideAnimation(300)} className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Уроки в зум 1 час 20 минут</div>
                                    </motion.div>

                                    <motion.div custom={0.7} variants={sideAnimation(300)} className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Общий Telegram-chat</div>
                                    </motion.div>

                                    <motion.div custom={0.8} variants={sideAnimation(300)} className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Рабочая онлайн-тетрадь</div>
                                    </motion.div>

                                    <motion.div custom={0.9} variants={sideAnimation(300)} className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Индивидуальная Отправка и проверка ДЗ</div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className={s["how__card-module"]}>
                                <motion.div custom={1.2} variants={sideAnimation(300)} className={s['how__card-title']}><h2>Расписание</h2></motion.div>
                                <div className={s['how__card-schedule']}>
                                    <motion.div custom={1.25} variants={sideAnimation(300)}  className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Вт,Чт – 19:00-20:20</div>
                                    </motion.div>

                                    <motion.div custom={1.3} variants={sideAnimation(300)}  className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>СБ: 10:00-11:30</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}