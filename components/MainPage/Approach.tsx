import classNames from 'classnames'
import { url } from 'inspector'
import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Approach.module.scss'


export const Approach: NextPage = () => {
    const classes = classNames({
        "section": true,
        "section__fulscreen": true
    })

    return (
        <div className={classes}>
            <div className={s['with-image']}></div>
            {/* <img className={s["image"]} src="/images/paris.jpg" alt="" /> */}
            <div className={s['rectangle']}></div>
            <div className="section__content section__content_p" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={s["approach"]}>
                    <div className={s['approach__cards']}>
                        <h2>Чем мой подход отличается от других?</h2>

                        <div className={s["approach__card"]}>
                            <div className={s["approach__number"]}>1</div>
                            <div className={s["approach__text"]}>Провожу своих студентов по пути подготовки к IELTS легко, понятно, эффективно и с юмором.</div>
                        </div>
                        <div className={s["approach__card"]}>
                            <div className={s["approach__number"]}>2</div>
                            <div className={s["approach__text"]}>Только индивидуальный подход и работа на результат каждого студента</div>
                        </div>
                        <div className={s["approach__card"]}>
                            <div className={s["approach__number"]}>3</div>
                            <div className={s["approach__text"]}>Я предоставляю образовательные услуги и помощь тем, кто интересуется переездом заграницу.</div>
                        </div>
                        <div className={s["approach__card"]}>
                            <div className={s["approach__number"]}>4</div>
                            <div className={s["approach__text"]}>Моя ключевая характеристика – дать результат своим клиентами и работать с мотивированными и интеллигентными людьми, а не со всеми подряд.</div>
                        </div>
                        <div className={s["approach__card"]}>
                            <div className={s["approach__number"]}>5</div>
                            <div className={s["approach__text"]}>Я хочу помогать людям, которые стремятся работать, учиться или просто переехать заграницу. Мой приоритет – давать каждому, кто решил обратиться ко мне – качественную помощь в решении его задач и вопросов</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
