import React from 'react'
import { A } from '../Link'

export const TarifsEnglish = () => {
    return (
        <div className='section' style={{ background: '#FFE6B3' }}>
            <div className='tarifs__line' style={{ background: '#FBBE49', transform: 'rotate(160deg) translateY(100px)' }}></div>

            <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                <div className="tarifs">
                    <div><h2 style={{ fontSize: '48px' }}>Тарифы</h2></div>
                    <div className="tarifs__wrap">
                        <div className="tarifs__card card_orange tarifs__card_one">
                            <div className="tarifs__title">Тариф «Стандарт»</div>
                            <div className="tarifs__price">$99</div>
                            <div className="tarifs__desc">
                            </div>
                            <ul className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>12 Занятий в группе до 6 человек</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Индивидуальная проверка дз 1 раз в неделю</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>PDF файл со словами и грамматикой после каждого урока</div>
                                </li>
                            </ul>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div className="tarifs__button tarifs__button_orange"> <A path='/' width='120px' height='40px' isCenter={true}>Order now</A></div>
                            </div>
                        </div>


                        <div className="tarifs__card card_orange " style={{ paddingBottom: '50px' }}>
                            <div className="tarifs__title">Тариф <br /> «Углубленное изучение»</div>
                            <div className="tarifs__price">$199</div>
                            <div className="tarifs__desc">
                            </div>
                            <ul className='tarifs__tasks'>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>12 Занятий в группе до 6 человек</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>Индивидуальная проверка дз после каждого урока</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>PDF файл со словами и грамматикой после каждого урока</div>
                                </li>
                                <li>
                                    <div className='li_dot'></div>
                                    <div>4 индивидуальных занятия с углубленным разбором грамматики,</div>
                                </li>
                            </ul>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '-50px' }}>
                                <div className="tarifs__button tarifs__button_orange"> <A path='/' width='120px' height='40px' isCenter={true}>Order now</A></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
