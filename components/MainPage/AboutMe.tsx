import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/AboutMe.module.scss'
import { A } from '../Link'

export const AboutMe: NextPage = () => {
    return (
        <div className='section' style={{ minHeight: '700px', overflow: 'hidden' }}>
            <img className={s['rect']} src="/images/Rectangle.svg" alt="" />
            
            <h2 className={s['h']}>Обо мне</h2>

            <div className={s["about-me"]}>
                <img className={s["about-me__rectangle"]} src="/images/about-me-rect.svg" alt="" />
                <div className={s['about-me__rect']}></div>

                <div className={s['about-me__wrap']}>
                    <div className={s['about-me__image']}>
                        <img src="/images/Tanya.jpg" alt="" />
                    </div>
                    <div className={s['about-me__content']}>
                        <div><strong>Татьяна Лозик</strong></div>
                        <div><A path='/'><strong>@english.dreamteacher</strong></A></div>
                        <div className={s['about-me__main-text']}>
                            «Английский открыл мне двери
                            во все ВУЗы Европы, дал возможность поработать в топовых американсих
                            компаниях и основать свой бизнес. Я умею обучать людей так, что благодаря английскому
                            они осуществляли свои мечты также, как и я»
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
