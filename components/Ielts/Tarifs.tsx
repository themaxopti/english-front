import React, { useEffect, useState } from 'react'
import { A } from '../Link'
import { motion } from 'framer-motion'
import { useShow, useSideAnimation } from '../MainPage/motion'
import { ErrorMessage } from '@hookform/error-message'
import { ModalWindow } from '../ModalWindow'
import { getIeltsCourse, setProductId } from '../../store/reducers/courses.reducer'
import { AppState, useAppDispatch } from '../../store/store'
import { useSelector } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Api } from '../../api/api'
import { SelectField } from '../Consultation/ConsultationForm'
import moment from 'moment'
import { composeWords, useTimer } from '../../helpers/delay'

type Inputs = {
    email: string
    name: string
    phone: string
    moduleAmount: number
    moduleTitle: string
}

export const Tarifs = () => {

    const dispatch = useAppDispatch()
    const ieltsMain = useSelector((state: AppState) => state.courses.ieltsMain)
    const ieltsDeep = useSelector((state: AppState) => state.courses.ieltsDeep)

    const firstRequest = async () => {
        dispatch(getIeltsCourse())
    }

    const [time, setTime] = useState('')

    useEffect(() => {
        (async () => firstRequest())()

        let eventTimeUnix = moment("2022-05-27 19:00:00").unix()
        let currentTimeUnix = moment(moment().format()).unix()

        var diffTime = eventTimeUnix - currentTimeUnix;
        var duration = moment.duration(diffTime * 1000, 'milliseconds');
        var interval = 1000;

        const day =
            duration.days() <= 0
                ? 0 + ' дней'
                : duration.days() + ' ' + composeWords(duration.days(), 'day')

        const min = composeWords(duration.minutes(), 'min')
        const hours =
            duration.hours() <= 0
                ? 0 + " часов"
                : duration.hours() + ' ' + composeWords(duration.hours(), 'hours')


        const id = setInterval(function () {
            // @ts-ignore
            duration = moment.duration(duration - interval, 'milliseconds');
            setTime(`${` ${day} ` + ` ${hours} `}`)
            // console.log(duration.days() + " " + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
        }, interval);

    }, [])


    const productId = useSelector((state: AppState) => state.courses.productId)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            console.log(data, errors)
            const response = await Api.pay(data.email, data.phone, data.name, productId, 2, data.moduleTitle)
            window.location.href = response!.data.checkout_url
            console.log(response!.data.checkout_url);
        } catch (e) {
            console.log(e);
        }
    }


    const [isOpen, setIsOpen] = useState(false)

    function openModal(productId: number | string, isMax: boolean | null) {
        if (isMax) {
            return
        }
        dispatch(setProductId(productId))
        setIsOpen(true)
    }



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

                        <label>
                            <p>  Название модуля </p>
                            <SelectField register={register('moduleTitle')} name='time'>
                                <option value="General">General</option>
                                <option value="Academic">Academic</option>
                            </SelectField>
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


            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='section'>
                <div className='tarifs__line'></div>

                <div className="section__content" style={{ padding: '100px 0 200px 0 ' }}>
                    <div className="tarifs">
                        <motion.div custom={1.1} variants={useSideAnimation(-100)}><h2 style={{ fontSize: '48px' }}>Тарифы</h2></motion.div>
                        <div className="tarifs__wrap">
                            <motion.div custom={0.5} variants={useSideAnimation(100)} className="tarifs__card tarifs__card_blue tarifs__card_one">
                                <motion.div custom={0.7} variants={useSideAnimation(-100)} className="tarifs__title">Тариф «Стандарт»</motion.div>
                                {/* <motion.div
                                    custom={0.7}
                                    variants={useSideAnimation(100)}
                                    style={{ textDecoration: 'line-through' }}
                                    className="tarifs__price"
                                >
                                    $249,99
                                </motion.div> */}
                                <motion.div
                                    custom={0.8}
                                    variants={useSideAnimation(100)}
                                    className="tarifs__price"
                                    style={{ translateY: "-15px" }}
                                >
                                    $249.99
                                </motion.div>
                                {/* <motion.div
                                    className='time'
                                    custom={0.7}
                                    variants={useSideAnimation(100)}
                                >
                                    <div
                                        style={{ marginBottom: '20px' }}
                                    >
                                        Купить по специальной цене можно до  19:00 27/05</div>
                                    <div>Осталось</div>
                                    <div>{time}</div>
                                </motion.div> */}
                                {/* <motion.div custom={0.9} variants={useSideAnimation(-100)} className="tarifs__desc">
                                    <span className='tarifs__module'>(1 модуль)</span>
                                    <span className='tarifs__or'>(или <span style={{ textDecoration: 'line-through', fontWeight: "bold" }}>249,99$</span> 199$ при оплате двух модулей сразу)</span>
                                </motion.div> */}
                                <motion.ul custom={1} variants={useSideAnimation(200)} className='tarifs__tasks'>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Предварительная оценка текущего уровня: после оплаты Вы получаете мини-задание в формате IELTS и обратную связь по его выполнению, замеряем Вашу точку A</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>3 онлайн - групповых занятия в неделю по 1,5 часа: <br />
                                            занятия будут проходить в группе до 4х человек в Зум. Каждый урок будет начинаться с объяснения, как выполнять определенный тип задания и потом мы сразу будем это практиковать. После каждого урока вы будете получать материалы по пройденной теме и доступ к уроку в записи. Вы также будете получать ссылки на статьи и лексику по теме недели.</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Проверка ДЗ раз в неделю: <br /> У каждого участника будет личный гугл-документ, где он будет выполнять задание и получать проверку и анализ письменной части. Задание по говорению будут высылаться мне в аудио-формате и я буду высылать разбор </div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Материалы и ресурсы для подготовки: <br /> Доступ ко всем материалам курса и лекций будет у участников в течении 4х недель по завершению программы </div>
                                    </li>
                                </motion.ul>
                                <motion.ul custom={1.10} variants={useSideAnimation(0, 200)} className='tarifs__places'>
                                    {
                                        <li>
                                            {ieltsMain.maxPeople && <div>Максимально количество мест:{ieltsMain.maxPeople || ''}</div>}
                                            {/* <div>Записалось на курс {ieltsMain.amount! + 4}</div> */}
                                        </li>
                                    }
                                </motion.ul>
                                <motion.div custom={1.2} variants={useSideAnimation(0, 200)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div onClick={() => { openModal(1, ieltsMain.isFull) }} className={`tarifs__button ${ieltsMain.isFull ? 'tarifs__button_disable' : ''} `}>Order now</div>
                                </motion.div>
                            </motion.div>


                            <motion.div custom={0.5} variants={useSideAnimation(100)} className="tarifs__card tarifs__card_blue tarifs__card_two">
                                <motion.div
                                    custom={0.6}
                                    variants={useSideAnimation(-100)}
                                    className="tarifs__title">Тариф <br />  «Углубленная подготовка»
                                </motion.div>

                                {/* <motion.div
                                    custom={0.7}
                                    variants={useSideAnimation(100)}
                                    style={{ textDecoration: 'line-through' }}
                                    className="tarifs__price"
                                >
                                    $499
                                </motion.div> */}
                                <motion.div
                                    custom={0.7}
                                    variants={useSideAnimation(100)}
                                    className="tarifs__price"
                                    style={{ translateY: "-15px" }}
                                >
                                    $499
                                </motion.div>
                                {/* <motion.div
                                    className='time'
                                    custom={0.7}
                                    variants={useSideAnimation(100)}>
                                    <div
                                        style={{ marginBottom: '20px' }}
                                    >
                                        Купить по специальной цене можно до  19:00 27/05</div>
                                    <div>Осталось</div>
                                    <div>{time}</div>
                                </motion.div> */}
                                {/* <motion.div custom={0.8} variants={useSideAnimation(200)} className="tarifs__desc">
                                    <span className='tarifs__module'>(1 модуль)</span>
                                    <span className='tarifs__or'>(или <span style={{ textDecoration: 'line-through', fontWeight: "bold" }}>449$</span> 399$ при оплате двух модулей сразу)</span>
                                </motion.div> */}
                                <motion.ul custom={1} variants={useSideAnimation(100)} className='tarifs__tasks'>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Предварительная оценка текущего уровня: после оплаты Вы получаете мини-задание в формате IELTS и обратную связь по его выполнению, замеряем Вашу точку A</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>3 онлайн- групповых занятия в неделю по 1,5 часа:  <br />
                                            занятия будут проходить в группе до 4х человек в Зум. Каждый урок будет начинаться с объяснения, как выполнять определенный тип задания и потом мы сразу будем это практиковать. После каждого урока вы будете получать материалы по пройденной теме и доступ к уроку в записи. Вы также будете получать ссылки на статьи и лексику по теме недели.</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Проверка ДЗ раз в неделю: <br />
                                            У каждого участника будет личный гугл-документ, где он будет выполнять задание и получать проверку и анализ письменной части. Задание по говорению будут высылаться мне в аудио-формате и я буду высылать разбор.</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>Материалы и ресурсы для подготовки: <br />
                                            Доступ ко всем материалам курса и лекций будет у участников в течении 4х недель по завершению программы.</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>  <span style={{ fontWeight: 'bold' }}> Отправка и индивидуальный разбор 8 эссе и 8 разговорных тестов: </span>  <br />
                                            Говорение и письмо – это, конечно, самые сложные части теста. Если вы хотите попрактиковать все типы эссе, максимально улучшить их структуру и получить еще больше разговорной практики, то это тариф для вас. В течение каждой недели курса у вас будет индивидуальный созвон со мной, где мы дополнительно проработаем написание эссе и еще больше разнообразим ваш словарный запас.</div>
                                    </li>
                                    <li>
                                        <div className='li_dot'></div>
                                        <div>+ <span style={{ fontWeight: 'bold' }}> 8 проработанных ILETS Speaking тем и лексических словарей по ним: </span> <br />
                                            вы получите дополнительные 8 лексических словарей и попрактикуете их со мной во время индивидуальной разговорной сессии.</div>
                                    </li>
                                </motion.ul>
                                <motion.ul custom={1.10} variants={useSideAnimation(0, 200)} className='tarifs__places'>
                                    <li>
                                        {ieltsDeep.maxPeople && <div>Максимально количество мест:{ieltsDeep.maxPeople || ''}</div>}
                                        {/* <div>Записалось на курс {ieltsDeep.amount! + 2}</div> */}
                                    </li>
                                    {/* <li>
                                        <div>Максимально количество мест: 5</div>
                                        <div>Записалось на курс: 0</div>
                                    </li> */}
                                </motion.ul>
                                <motion.div custom={1.2} variants={useSideAnimation(0, 200)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div onClick={() => openModal(2, ieltsDeep.isFull)} className={`tarifs__button  ${ieltsDeep.isFull ? 'tarifs__button_disable' : ''} `}>Order now</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export const MemoTarifs = React.memo(Tarifs)