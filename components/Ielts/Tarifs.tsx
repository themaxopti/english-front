import React from 'react'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { useShow, useSideAnimation } from '../MainPage/motion'


export const Tarifs = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='section'>
            <div className='tarifs__line'></div>

            <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                <div className="tarifs">
                    <motion.div custom={1.1} variants={useSideAnimation(-100)}><h2 style={{ fontSize: '48px' }}>Тарифы</h2></motion.div>
                    <div className="tarifs__wrap">
                        <motion.div custom={0.5} variants={useSideAnimation(100)} className="tarifs__card tarifs__card_blue tarifs__card_one">
                            <motion.div custom={0.7} variants={useSideAnimation(-100)}  className="tarifs__title">Тариф «Стандарт»</motion.div>
                            <motion.div custom={0.8} variants={useSideAnimation(100)}  className="tarifs__price">$99</motion.div>
                            <motion.div custom={0.9} variants={useSideAnimation(-100)}  className="tarifs__desc">
                                <span className='tarifs__module'>(1 модуль)</span>
                                <span className='tarifs__or'>(или 180$ при оплате двух модулей сразу)</span>
                            </motion.div>
                            <motion.ul custom={1} variants={useSideAnimation(200)}  className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Предварительная оценка текущего уровня</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>3 групповых занятия в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Проверка ДЗ раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Материалы и ресурсы для подготовки</div>
                                </li>
                            </motion.ul>
                            <motion.div custom={1.2} variants={useSideAnimation(0,200)}  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <A path='https://pay.fondy.eu/s/Ql1RhOslF'> <div className="tarifs__button">Order now</div> </A>
                            </motion.div>
                        </motion.div>


                        <motion.div custom={0.5} variants={useSideAnimation(100)} className="tarifs__card tarifs__card_blue tarifs__card_two">
                            <motion.div custom={0.6} variants={useSideAnimation(-100)} className="tarifs__title">Тариф <br />  «Углубленная подготовка»</motion.div>
                            <motion.div custom={0.7} variants={useSideAnimation(100)} className="tarifs__price">$199</motion.div>
                            <motion.div custom={0.8} variants={useSideAnimation(200)} className="tarifs__desc">
                                <span className='tarifs__module'>(1 модуль)</span>
                                <span className='tarifs__or'>(или 360$ при оплате двух модулей сразу)</span>
                            </motion.div>
                            <motion.ul custom={1} variants={useSideAnimation(100)} className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Предварительная оценка текущего уровня</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>3 групповых занятия в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>проверка ДЗ раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>материалы и ресурсы для подготовки</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>отправка и индивидуальный разбор 8 эссе и 8 разговорных тестов</div>
                                </li>
                            </motion.ul>
                            <motion.div custom={1.2} variants={useSideAnimation(0,200)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <A path='https://pay.fondy.eu/s/GiC9DDd0'> <div className="tarifs__button">Order now</div> </A>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
