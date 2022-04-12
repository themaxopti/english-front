import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Courses.module.scss'
import { A } from '../Link'


export const Courses: NextPage = () => {
    return (
        <div className='section' style={{ backgroundColor: '#251A40' }}>
            <div className={s["line"]}></div>
            <div className={s["line"]}></div>

            <div>
                <div className={s['decor']}>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                </div>

                <div className={s['decor']}>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                    <div className={s["decor__elem"]}></div>
                </div>
            </div>

            <div className="section__content section__content_p" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={s['courses']}>
                    <div className={s["courses__card"]}>
                        <h2 className={s['h2']}>Курсы</h2>

                        <div className={s["courses__image"]}><img src="/images/courses-first.jpg" alt="" /></div>
                        <div className={s["courses__text-wrap"]}>
                            <div className={s["courses__title"]}>IELTS of YOUR DREAM</div>
                            <div className={s["courses__desc"]}>(уровень Upper-intermediate, Advanced)</div>
                            <div className={s["courses__more"]}>
                                <div><A path='/'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>

                    <div className={s["courses__card"]}>
                        <div className={s["courses__image"]}><img src="/images/courses-first.jpg" alt="" /></div>
                        <div className={s["courses__text-wrap"]}>
                            <div className={s["courses__title"]}>Экспресс-основы английского за 4 недели</div>
                            <div className={s["courses__desc"]}>(уровень Beginner)</div>
                            <div className={s["courses__more"]}>
                                <div><A path='/'>Learn more</A></div>
                                <div className={s['courses__image-card']}><img src="/images/arrow-card.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
