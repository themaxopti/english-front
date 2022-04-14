import React from 'react'
import { motion } from 'framer-motion'
import { sideAnimation } from '../MainPage/motion'


export const How = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='section'>


            <img className='how-ielts-rects_one' src="/images/how-ielts-rect.svg" alt="" />
            <img className='how-ielts-rects_two' src="/images/how-ielts-rect.svg" alt="" />


            <div className="section__content section__content_p">
                <div className="ielts-how">
                    <motion.div custom={0.5} variants={sideAnimation(300)} style={{ fontSize: '22px' }}><strong>Как всё будет проходить?</strong></motion.div>

                    <div className="ielts-how__marks">
                        <motion.div custom={0.6} variants={sideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                                Занятия будут проходить 3 раза в неделю в Zoom (1,5 часа). Те, кто не смогут присутствовать на уроке, смогут просмотреть его в записи.
                            </div>
                        </motion.div>

                        <motion.div custom={0.7} variants={sideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                                Занятия будут проходить 3 раза в неделю в Zoom (1,5 часа). Те, кто не смогут присутствовать на уроке, смогут просмотреть его в записи.
                            </div>
                        </motion.div>

                        <motion.div custom={0.8} variants={sideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                                Занятия будут проходить 3 раза в неделю в Zoom (1,5 часа). Те, кто не смогут присутствовать на уроке, смогут просмотреть его в записи.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
