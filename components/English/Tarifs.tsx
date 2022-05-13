import React, { useEffect, useState } from 'react'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'
import { ModalWindow } from '../ModalWindow'
import axios from 'axios'
import { AppState, useAppDispatch } from '../../store/store'
import { getEnglishCourse, setProductId } from '../../store/reducers/courses.reducer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Api } from '../../api/api'
import { useSelector } from 'react-redux'
import { ErrorMessage } from '@hookform/error-message';


type Inputs = {
    email: string,
    name: string,
    phone: string
}


export const TarifsEnglish = () => {


    const generalEnglishMain = useSelector((state: AppState) => state.courses.generalMain)
    const generalEnglishDeep = useSelector((state: AppState) => state.courses.generalDeep)

    const firstRequest = async () => {
        dispatch(getEnglishCourse())
    }

    useEffect(() => {
        (async () => firstRequest())()
    }, [])

    const productId = useSelector((state: AppState) => state.courses.productId)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            console.log(data, errors)
            const response = await Api.pay(data.email, data.phone, data.name, productId, 1,'common english')
            window.location.href = response!.data.checkout_url
            console.log(response!.data.checkout_url);
        } catch (e) {
            console.log(e);
        }
    }


    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()

    function openModal(productId: number | string, isMax: boolean | null) {
        if (isMax) {
            return
        }
        dispatch(setProductId(productId))
        setIsOpen(true)
    }

    // console.log(generalEnglishDeep.maxPeople)

    return (
        <>
            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='tarifs__modal'>
                    <div>Перед покупкой,заполните все дынные формы</div>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <label htmlFor="">
                            <p> Электронная почта </p>
                            <p className="tarifs__modal__error">{errors.email?.message}</p>
                            <input
                                {...register("email", {
                                    required: 'Заполните это поле',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Введите корректный емейл'
                                    }
                                })} type="text" placeholder='Электронная почта' />
                        </label>
                        <label htmlFor="">
                            <p> Имя </p>
                            <p className="tarifs__modal__error">{errors.name?.message}</p>
                            <input
                                {...register("name", {
                                    minLength: {
                                        value: 1,
                                        message: 'Введите имя'
                                    },
                                    required: "Заполните это поле"
                                })}
                                type="text" placeholder='Имя' />

                        </label>
                        <label htmlFor="">
                            <p> Телефон </p>
                            <p className="tarifs__modal__error">{errors.phone?.message}</p>
                            <input
                                {...register("phone", {
                                    required: "Заполните все поля",
                                    minLength: {
                                        value: 1,
                                        message: 'Введите Телефон'
                                    }
                                })}
                                type="text" placeholder='Телефон' />
                        </label>
                        <label htmlFor="">
                            После заполнения всех полей и нажатия на кнопку "купить" <br /> вас перенесет на страницу с оплатой
                        </label>


                        <ErrorMessage
                            errors={errors}
                            name="singleErrorInput"
                            render={({ message }) => <p>{message}</p>}
                        />

                        <input type="submit" value={"Купить"} />
                    </form>
                </div>
            </ModalWindow>

            <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section' style={{ background: '#FFE6B3' }}>
                <motion.div className='tarifs__line' style={{ background: '#FBBE49', transform: 'rotate(160deg) translateY(100px)' }}></motion.div>

                <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                    <div className="tarifs">
                        <motion.div custom={0.5} variants={useSideAnimation(100)} ><h2 style={{ fontSize: '48px' }}>Тарифы</h2></motion.div>
                        <div className="tarifs__wrap">
                            <motion.div custom={0.6} variants={useSideAnimation(200)} className="tarifs__card card_orange tarifs__card_one">
                                <motion.div custom={0.6} variants={useSideAnimation(200)} className="tarifs__title">Тариф «Стандарт»</motion.div>
                                <motion.div custom={0.7} variants={useSideAnimation(200)} className="tarifs__price">$99</motion.div>
                                <div className="tarifs__desc">
                                </div>
                                <motion.ul custom={0.8} variants={useSideAnimation(-400)} className='tarifs__tasks'>
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
                                </motion.ul>
                                <motion.ul custom={1.10} variants={useSideAnimation(0, 200)} className='tarifs__places'>
                                    <li>
                                        {generalEnglishMain.maxPeople && <div>Максимально количество мест:{generalEnglishMain.maxPeople || ''}</div>}
                                        <div>Записалось на курс {generalEnglishMain.amount}</div>
                                    </li>
                                    {/* <li>
                                         <div>Максимально количество мест:20</div>
                                        <div>Записалось на курс:0</div>
                                    </li> */}
                                </motion.ul>
                                <motion.div custom={0.6} variants={useSideAnimation(0, 400)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div onClick={() => openModal(3, generalEnglishMain.isFull)} className={`tarifs__button tarifs__button_orange ${generalEnglishMain.isFull ? 'tarifs__button_disable' : ''}`}> Order now</div>
                                </motion.div>
                            </motion.div>


                            <motion.div custom={0.6} variants={useSideAnimation(500)} className="tarifs__card card_orange " style={{ paddingBottom: '50px' }}>
                                <motion.div custom={0.7} variants={useSideAnimation(200)} className="tarifs__title">Тариф <br /> «Углубленное изучение»</motion.div>
                                <motion.div custom={0.8} variants={useSideAnimation(200)} className="tarifs__price">$199</motion.div>
                                <div className="tarifs__desc">
                                </div>
                                <motion.ul custom={0.9} variants={useSideAnimation(-400)} className='tarifs__tasks'>
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
                                </motion.ul>
                                <motion.ul custom={1.10} variants={useSideAnimation(0, 200)} className='tarifs__places'>
                                    <li>
                                        {generalEnglishDeep.maxPeople && <div>Максимально количество мест:{generalEnglishDeep.maxPeople || ''}</div>}
                                        <div>Записалось на курс {generalEnglishDeep.amount}</div>
                                    </li>
                                    {/* <li>
                                        <div>Максимально количество мест:5</div>
                                        <div>Записалось на курс:0</div>
                                    </li> */}
                                </motion.ul>
                                <motion.div custom={1} variants={useSideAnimation(0, 400)} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '-50px' }}>
                                    <div onClick={() => openModal(4, generalEnglishDeep.isFull)} style={{ cursor: 'pointer' }} className={`tarifs__button tarifs__button_orange ${generalEnglishDeep.isFull ? 'tarifs__button_disable' : ''}`}> Order now</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
