import React from 'react'
import s from '../../styles/English/For.module.scss'


export const For = () => {
    return (
        <div className='section' style={{background:'#FFE6B3'}}>
            <img className={s["rect"]} src="/images/english-rect.svg" alt="" />

            <div className="section__content section__content_p">
                <div className={s['for']}>
                    <div className={s['for__card']}>
                        <div className={s['for__card-wrap']}>
                            <div className={s["for__card-one"]}>
                                <div className={s['for__title']}>Для кого этот курс?</div>
                                <div className={s['for__text']}>Для тех, кто неожиданно оказался в другой стране и кому нужно быстро овладеть самыми базовыми знаниями английского.</div>
                            </div>
                            <div className={s["for__card-two"]}>
                                <div className={s['for__title']}>Что даст этот курс?</div>
                                <div className={s["for__text"]}>
                                    <p> - возможность базово говорить и понимать английский в самых частых повседневных ситуациях: в магазине, на улице, в больнице, кафе и так далее </p>
                                    <p>  - ориентироваться в надписях в городе </p>
                                    <p>  - возможность грамотно написать базовые предложения на английском </p>
                                    <p>    - возможность общаться бес страха с иностранцами </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
