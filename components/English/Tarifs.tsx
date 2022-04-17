import React from 'react'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'


export const TarifsEnglish = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#FFE6B3' }}>
            <motion.div className='tarifs__line' style={{ background: '#FBBE49', transform: 'rotate(160deg) translateY(100px)' }}></motion.div>

            <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                <div className="tarifs">
                    <motion.div custom={0.5} variants={useSideAnimation(100)} ><h2 style={{ fontSize: '48px' }}>Тарифы</h2></motion.div>
                    <div className="tarifs__wrap">
                        <motion.div custom={0.6} variants={useSideAnimation(200)} className="tarifs__card card_orange tarifs__card_one">
                            <motion.div custom={0.6} variants={useSideAnimation(200)} className="tarifs__title">Тариф «Стандарт»</motion.div>
                            <motion.div custom={0.7} variants={useSideAnimation(200)} className="tarifs__price">$99</motion.div>
                            <div className="tarifs__desc">
                            </div>
                            <motion.ul custom={0.8} variants={useSideAnimation(-400)} className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>12 Занятий в группе до 6 человек</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Индивидуальная проверка дз 1 раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>PDF файл со словами и грамматикой после каждого урока</div>
                                </li>
                            </motion.ul>
                            <motion.div custom={0.6} variants={useSideAnimation(0, 400)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div className="tarifs__button tarifs__button_orange"> <A path='https://pay.fondy.eu/s/oFXlhHTL' width='120px' height='40px' isCenter={true}>Order now</A></div>
                            </motion.div>
                        </motion.div>


                        <motion.div custom={0.6} variants={useSideAnimation(500)} className="tarifs__card card_orange " style={{ paddingBottom: '50px' }}>
                            <motion.div custom={0.7} variants={useSideAnimation(200)} className="tarifs__title">Тариф <br /> «Углубленное изучение»</motion.div>
                            <motion.div custom={0.8} variants={useSideAnimation(200)} className="tarifs__price">$199</motion.div>
                            <div className="tarifs__desc">
                            </div>
                            <motion.ul custom={0.9} variants={useSideAnimation(-400)} className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>12 Занятий в группе до 6 человек</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Индивидуальная проверка дз после каждого урока</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>PDF файл со словами и грамматикой после каждого урока</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>4 индивидуальных занятия с углубленным разбором грамматики,</div>
                                </li>
                            </motion.ul>
                            <motion.div custom={1} variants={useSideAnimation(0,400)} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '-50px' }}>
                                <div className="tarifs__button tarifs__button_orange"> <A path='https://pay.fondy.eu/s/WP69FII9MRVvDFI' width='120px' height='40px' isCenter={true}>Order now</A></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
