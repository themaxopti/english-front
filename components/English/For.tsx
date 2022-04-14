import React from 'react'
import s from '../../styles/English/For.module.scss'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'

export const For = () => {
    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#FFE6B3' }}>
            <img className={s["rect"]} src="/images/english-rect.svg" alt="" />

            <div className="section__content section__content_p">
                <div className={s['for']}>
                    <div className={s['for__card']}>
                        <div className={s['for__card-wrap']}>
                            <motion.div custom={0.5} variants={useSideAnimation(200)} className={s["for__card-one"]}>
                                <div className={s['for__title']}>Для кого этот курс?</div>
                                <div className={s['for__text']}>Для тех, кто неожиданно оказался в другой стране и кому нужно быстро овладеть самыми базовыми знаниями английского.</div>
                            </motion.div>
                            <div className={s["for__card-two"]}>
                                <motion.div custom={0.6} variants={useSideAnimation(-200)} className={s['for__title']}>Что даст этот курс?</motion.div>
                                <div className={s["for__text"]}>
                                    <motion.p custom={0.7} variants={useSideAnimation(200)} > - возможность базово говорить и понимать английский в самых частых повседневных ситуациях: в магазине, на улице, в больнице, кафе и так далее </motion.p>
                                    <motion.p custom={0.8} variants={useSideAnimation(200)} >  - ориентироваться в надписях в городе </motion.p>
                                    <motion.p custom={0.9} variants={useSideAnimation(200)} >  - возможность грамотно написать базовые предложения на английском </motion.p>
                                    <motion.p custom={1} variants={useSideAnimation(200)} >    - возможность общаться бес страха с иностранцами </motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
