import React from 'react'
import { A } from '../Link'

export const Tarifs = () => {
    return (
        <div className='section'>
            <div className='tarifs__line'></div>

            <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                <div className="tarifs">
                    <div><h2 style={{ fontSize: '48px' }}>Тарифы</h2></div>
                    <div className="tarifs__wrap">
                        <div className="tarifs__card tarifs__card_blue tarifs__card_one">
                            <div className="tarifs__title">Тариф «Стандарт»</div>
                            <div className="tarifs__price">$99</div>
                            <div className="tarifs__desc">
                                <span className='tarifs__module'>(1 модуль)</span>
                                <span className='tarifs__or'>(или 180$ при оплате двух модулей сразу)</span>
                            </div>
                            <ul className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Предварительная оценка текущего уровня</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>3 групповых занятия в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Проверка ДЗ раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Материалы и ресурсы для подготовки</div>
                                </li>
                            </ul>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <A path='/'> <div className="tarifs__button">Order now</div> </A>
                            </div>
                        </div>


                        <div className="tarifs__card tarifs__card_blue tarifs__card_two">
                            <div className="tarifs__title">Тариф <br />  «Углубленная подготовка»</div>
                            <div className="tarifs__price">$199</div>
                            <div className="tarifs__desc">
                                <span className='tarifs__module'>(1 модуль)</span>
                                <span className='tarifs__or'>(или 360$ при оплате двух модулей сразу)</span>
                            </div>
                            <ul className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Предварительная оценка текущего уровня</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>3 групповых занятия в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>проверка ДЗ раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>материалы и ресурсы для подготовки</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>отправка и индивидуальный разбор 8 эссе и 8 разговорных тестов</div>
                                </li>
                            </ul>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <A path='/'> <div className="tarifs__button">Order now</div> </A>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
