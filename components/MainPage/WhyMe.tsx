import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/WhyMe.module.scss'


export const WhyMe: NextPage = () => {
    return (
        <div className='section' style={{ height: '400px',marginTop:'2rem' }}>
            <div className="section__content">
                <div className={s['why-me']}>
                    <div className={s['why-me__block']}>
                        <div className={s['why-me__title']}><p>Почему Dream Teacher?</p></div>
                        <div className={s['why-me__text']}><p>Благодаря английскому со мной студенты осуществляют свои мечты: от поступления заграницу до комфортной жизни и успешной карьеры там</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
