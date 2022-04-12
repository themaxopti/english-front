import React from 'react'
import s from '../../styles/English/How.module.scss'


export const How = () => {
    return (
        <div className='section' style={{ background: '#FFE6B3' }}>
            <img className={s['rect']} src="images/english-rect.svg" alt="" />
            <div className="section__content section__content_p">
                <div className={s['how']}>
                    <div className={s["how__card"]}>
                        <div className={s["how__card-wrap"]}>
                            <div className={s["how__card-module"]}>
                                <div className={s['how__card-title']}><h2>Как все будет?</h2></div>
                                <div className={s['how__card-schedule']}>
                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Уроки в зум 1 час 20 минут</div>
                                    </div>

                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Общий Telegram-chat</div>
                                    </div>

                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Рабочая онлайн-тетрадь</div>
                                    </div>

                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Индивидуальная Отправка и проверка ДЗ</div>
                                    </div>
                                </div>
                            </div>

                            <div className={s["how__card-module"]}>
                                <div className={s['how__card-title']}><h2>Расписание</h2></div>
                                <div className={s['how__card-schedule']}>
                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>Вт,Чт – 19:00-20:20</div>
                                    </div>

                                    <div className={s['how__card-ul']}>
                                        <div className={s['how__card-li']}></div>
                                        <div className={s['how__card-li-text']}>СБ: 10:00-11:30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
