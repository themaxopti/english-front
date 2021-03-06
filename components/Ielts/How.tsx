import React from 'react'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'


export const How = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='section'>


            <motion.img custom={1} variants={useSideAnimation(-300)} className='how-ielts-rects_one' src="/images/how-ielts-rect.svg" alt="" />
            <motion.img custom={1} variants={useSideAnimation(300)} className='how-ielts-rects_two' src="/images/how-ielts-rect.svg" alt="" />


            <div className="section__content section__content_p">
                <div className="ielts-how">
                    <motion.div custom={0.5} variants={useSideAnimation(300)} style={{ fontSize: '22px' }}><strong>Как всё будет проходить?</strong></motion.div>

                    <div className="ielts-how__marks">
                        <motion.div custom={0.6} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                                Занятия будут проходить 3 раза в неделю в Zoom (1,5 часа). Те, кто не смогут присутствовать на уроке, смогут просмотреть его в записи.
                            </div>
                        </motion.div>

                        <motion.div custom={0.7} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                            Каждую неделю мы будем изучать определенный блок тем и сразу же практиковать полученные знания.
                            </div>
                        </motion.div>

                        <motion.div custom={0.8} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                            Каждая неделя связана с определенными лексическими темами, которые мы будем активно изучать и закреплять в течение недели.
                            </div>
                        </motion.div>

                        <motion.div custom={0.8} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                            Во время практики разговорной части мы будем участвовать в дебатах, общаться с носителями языка и делать мини-презентации по заданной теме – будет интересно.
                            </div>
                        </motion.div>

                        <motion.div custom={0.8} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                            У каждого ученика будет доступ к гугл-диску, где он будет выполнять домашние задания, получать проверку с разбором и сможет посмотреть пройденные уроки в записи.
                            </div>
                        </motion.div>

                        <motion.div custom={0.8} variants={useSideAnimation(300)} className='ielts-how__mark'>
                            <div className='ielts-how__image'><img src="/images/ielts-how-mark.svg" alt="" /></div>
                            <div className="ielts-how__text">
                            Все участники будут добавлены в Телеграм-чат, где можно будет задать вопросы мне лично и пообщаться.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
