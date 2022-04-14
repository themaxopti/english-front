import { WritableDraft } from 'immer/dist/internal'
import { NextPage } from 'next'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { setWhyDiv } from '../../store/reducers/tags.reducer'
import { AppState, AppStore, useAppDispatch } from '../../store/store'
import s from '../../styles/MainPage/WhyMe.module.scss'
import { motion } from 'framer-motion'
import { textAnimation, useSideAnimation, whyMeAnimation, whyMeAnimationText } from './motion'

export const WhyMe: NextPage = () => {
    const dispatch = useAppDispatch()
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const div = useSelector((state: AppState) => state.test.whyDiv)

    useEffect(() => {
        // @ts-ignore
        dispatch(setWhyDiv(ref.current))
    }, [])


    return (
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" ref={ref} className='section' style={{ height: '400px', marginTop: '2rem' }}>
            <div className="section__content">
                <div className={s['why-me']}>
                    <div className={s['why-me__block']}>
                        <div className={s['why-me__title']}><motion.p custom={1} variants={useSideAnimation(100)}>Почему Dream Teacher?</motion.p></div>
                        <div className={s['why-me__text']}><motion.p custom={1} variants={useSideAnimation(-200)}>Благодаря английскому со мной студенты осуществляют свои мечты: от поступления заграницу до комфортной жизни и успешной карьеры там  </motion.p > </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
