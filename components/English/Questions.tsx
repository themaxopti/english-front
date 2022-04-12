import React from 'react'
import s from '../../styles/English/Questions.module.scss'

export const Questions = () => {
    return (
        <div className='section' style={{background:'#FFE6B3'}}>
            <div className="section__content section__content_p">
                <div>
                    <img className={s["rect-circle"]} src="/images/english-circle.svg" alt="" />
                    <img className={s["rect-circle"]} src="/images/english-circle.svg" alt="" />
                </div>


                <div className={s["questions"]}>
                    <div className={s["questions__wrap"]}>
                        <div><h2>Часто задаваемые вопросы</h2></div>

                        <div className={s["questions__card"]} style={{ marginTop: '30px' }}>
                            <div className={s['questions__title']}>Кому подойдёт этот курс?</div>
                            <div className={s['questions__text']}>Этот курс подойдёт идеально тем, кто хочет в краткие сроки освоить азы английского для комфортного проживания и коммуникации заграницей. Этот курс даст вам твердую основу для дальнейшего углубленного изучения языка и избавит от стресса жизни заграницей без языка.</div>
                        </div>

                        <div className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что если я совсем не говорю на английском?</div>
                            <div className={s['questions__text']}>Это нормально, на курсе мы будем разбирать основы чтения, грамматики и говорения.</div>
                        </div>

                        <div className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что нужно для занятий?</div>
                            <div className={s['questions__text']}>Все материалы для занятий вам будут высылаться онлайн
                                и предоставляться во время урока. Единственное, что вам потребуется – это
                                хороший интернет и работающая камера для занятий
                            </div>
                        </div>

                        <div className={s["questions__card"]}>
                            <div className={s['questions__title']}>Удобно ли работать в группе?</div>
                            <div className={s['questions__text']}>Удобнее и эффективнее,
                                чем одному. Я тщательно подбираю участников группы по уровню языка
                                и целям. Количество участников - строго такое, в котором участникам
                                будет полезно и приятно работать вместе – учиться на
                                общих ошибках, обмениваться опытом и практиковаться.
                            </div>
                        </div>


                        <div className={s["questions__card"]}>
                            <div className={s['questions__title']}>Что если я ничего не буду понимать?</div>
                            <div className={s['questions__text']}>
                                Это нормально, ведь
                                вы только начинаете и у нас всегда будет достаточно
                                времени на уроке, чтобы остановиться и разобрать вопросы.
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
