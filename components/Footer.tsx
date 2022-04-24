import React from 'react'
import s from '../styles/Footer.module.scss'
import { A } from './Link'



export const Footer = () => {
    return (
        <div className='section' style={{ backgroundColor: '#161721' }}>
            <div className="section__content section__content_p">
                <div className={s['footer']}>
                    <nav>
                        <div>Контакты</div>
                        <div>info@dreamteacher.co</div>
                        <div className={s['footer__telegram']}>
                            <div className={s['footer__telegram__icon']}>
                                <img src="/images/telegram.png" alt="" />
                            </div>
                            <div>+380 66 720 90 17</div>
                        </div>
                    </nav>
                    <nav>
                        <li className={'instagram-logo'}>
                            <div><A isBlank={true} path='https://www.instagram.com/english_dreamteacher/?utm_medium=copy_link'>English_dreamteacher</A></div>
                            <div className={"instagram-logo__img"}><img src="/images/instagram-logo.png" alt="" /></div>
                        </li>
                    </nav>
                    <nav>
                        <div><A path='/privat-policy'>Политика Конфиденциальности</A></div>
                        <div><A path='/public-offer-agreement'>Договор публичной оферты</A></div>
                    </nav>
                    <nav>
                        <div><p>Принимаем к оплате</p></div>
                        <div className={s['footer__payment']}>
                            <div><img src="/images/mastercard.svg" alt="" /></div>
                            <div><img src="/images/privat24.svg" alt="" /></div>
                            <div><img src="/images/visa.svg" alt="" /></div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}