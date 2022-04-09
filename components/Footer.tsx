import React from 'react'
import s from '../styles/Footer.module.scss'
import { A } from './Link'



export const Footer = () => {
    return (
        <div className='section' style={{backgroundColor:'#161721'}}>
            <div className="section__content section__content_p">
                <div className={s['footer']}>
                    <nav>
                        <div>Контакты</div>
                        <div>Телефон</div>
                    </nav>
                    <nav>
                        <li className={'instagram-logo'}>
                            <div><A path='/'>English_dreamteacher</A></div>
                            <div className={"instagram-logo__img"}><img src="/images/instagram-logo.png" alt="" /></div>
                        </li>
                    </nav>
                    <nav>
                        <div><A path='/'>Политика Конфиденциальности</A></div>
                        <div><A path='/'>Договор публичной оферты</A></div>
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
