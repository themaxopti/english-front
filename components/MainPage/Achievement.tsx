import classNames from 'classnames'
import { NextPage } from 'next'
import React from 'react'
import s from '../../styles/MainPage/Achievement.module.scss'


export const Achievement: NextPage = () => {

    const circleClasses = classNames({
        [s['circle']]: true,
        "circle": true,
        "circle_absolute": true
    })

    return (
        <div className='section section__content_p'>

            <img className={s["rectangle"]} src="/images/rectangle-achivment.svg" alt="" />
            {/* <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div> */}
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>
            <div className={circleClasses} style={{ width: '100px', height: '100px' }}></div>

            <div className="section__content">
                <div className={s["achievement"]}>
                    <nav className={s["achievement__ach"]}>
                        <div className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>основала рекрутинговый стартап в США</div>
                        </div>
                        <div className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>помогла десяткам студентов выучить английский и уехать учиться заграницу</div>
                        </div>
                        <div className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>разработала авторский курс подготовки к IELTS</div>
                        </div>
                        <div className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>получила грант на обучение в Литве и Франции</div>
                        </div>
                        <div className='card-achievement'>
                            <div className='card-achievement__img'><img src="/images/mark.svg" alt="" /></div>
                            <div className='card-achievement__text'>проходила стажировку в Испании и Великобритании</div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
