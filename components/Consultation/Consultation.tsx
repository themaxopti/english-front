import React, { MutableRefObject, Ref, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { Api, FreeTimesData } from '../../api/api'
import s from '../../styles/Consultation/Consultation.module.scss'
import { ModalWindow } from '../ModalWindow'
import { motion } from 'framer-motion'
import { useSideAnimation } from '../MainPage/motion'
import { CheckBoxField, ConsultationFormMiniBlock, ConsultationMainBlock, ConsultationSubmitForm, RadioField, SelectField, TextField } from './ConsultationForm'
import s2 from '../../styles/Consultation/Consultation-form.module.scss'
import { useMediaQuery } from 'react-responsive'
import { DatePicker } from '@mui/lab'
import TextFieldMaterial from '@mui/material/TextField'
import { parseISO } from 'date-fns'
import { useRouter } from 'next/router'

interface Inputs {
    email: string
    name: string
    phone: string
    messanger: any
    levelLanguage: any
    day: string
    speciality: string
    age: string
    whenTakeTest: string
    destanation: string
    whatMark: string
    doYouKnow: string
    doYouTrain: string
    inWhatCountry: string
    questions: string
    time: string
}

const textFields = {
    whatMark: ['5.0', '5.5', '6.0', '6.5', '7.0', 'еще не знаю'],
    destanation: ["для поступления заграницу", "для иммиграции", "для работы"],
    whenTakeTest: ["через 1-3 месяца", "через 4-6 месяцев", "в течении года", "еще вообще не знаю"],
    levelLanguage: ["A1-A2 (начальный)", "B1 (Intermediate, средний)", "B2 (Upper-intermediate, выше среднего)", "C1 (Advanced, продвинутый)"],
    doYouKnow: ["Да, примерно знаю", "Да, хорошо знаю структуру и делал пробные задания", "Почти ничего не знаю"],
    doYouTrain: ["Да, самостоятельно", "Да, с репетитором", "Нет"]
}

function disableWeekends(array: number[]) {
    return (date: Date) => {
        return date.getDay() === 0 || array.includes(date.getDate())
    }
}

export const Consultation = () => {

    const [fullDays, setFullDays] = useState<any>(null)
    const [freeTimes, setFreeTimes] = useState<null | FreeTimesData[]>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [formStep, setFormStep] = useState(0)
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (formStep < 2) {
            setFormStep(formStep + 1)
        }
        if (formStep == 2) {
            console.log(data, errors)
            await Api.newPeopleOnConsultation(data)
            setIsOpen(true)
        }
        if (formStep == 1) {
            console.log(data, errors)
            const numberData = new Date(data.day).getDate()
            const recivedNumberData = await Api.getFreeTimes(numberData)
            setFreeTimes(recivedNumberData!.data.data)
        }
    }


    const stepRef = useRef([]) as React.MutableRefObject<HTMLDivElement[]>
    const isBig = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    useEffect(() => {
        if (formStep == 1) {
            isBig && formRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
            if (!isBig) {
                formRef.current.scrollIntoView({ block: 'end' })
            }
        }
        if (formStep == 2) {

        }
    }, [formStep])

    const formRef = useRef() as React.MutableRefObject<HTMLFormElement>

    useEffect(() => {
        console.log(stepRef.current[0])
        console.log(isBig);
        Api.getFullDays().then(data => setFullDays(data?.data.data)).then(() => console.log(fullDays))
    }, [])

    const [date, setDate] = useState(null)

    return (
        <>

            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='thanks'>Спасибо,мы свяжемся с вами в ближаешее время</div>
            </ModalWindow>

            <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className='section'>
                {/* <div className={s['rect']}>
                    <img src="/images/how-ielts-rect.svg" alt="" />
                </div> */}

                <div className={s['background-image']}></div>

                <div className="section__content section__content_p">
                    <div className={s["consultation"]}>
                        <motion.h1 custom={0.5} variants={useSideAnimation(100)} >Записаться на бесплатную 15-минутную консультацию</motion.h1>
                        <motion.div custom={0.8} variants={useSideAnimation(-200)} className={s["consultation__text"]}>
                            Вы не уверены подходит ли мой курс для ваших целей и
                            уровня английского? <br /> Запишитесь на бесплатную 15-минутную консультацию,
                            я проверю ваш уровень и отвечу на все вопросы:
                        </motion.div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={s['consultation-form']}
                            action=""
                            ref={formRef}
                        >
                            <ConsultationFormMiniBlock>
                                <motion.h2
                                    custom={0.3}
                                    variants={useSideAnimation(200)}
                                    className={s2['mini-block__h2-title']}
                                >
                                    Запись на IELTS-конультацию
                                </motion.h2>
                                <motion.p custom={0.3} variants={useSideAnimation(200)} className={s2['mini-block__p-title']}>
                                    Здравствуйте, спасибо, что выбрали Dream Teacher School.
                                    Во время IELTS консультации мы подробно расскажем вам
                                    о программе курса и ответим на все Ваши вопросы. Для того,
                                    чтобы наша встреча прошла максимально эффективно,
                                    ответьте на несколько вопросов и запишитесь на консультацию:
                                </motion.p>
                            </ConsultationFormMiniBlock>

                            <ConsultationMainBlock activeStep={formStep} index={0} ref={stepRef}>
                                <ConsultationFormMiniBlock error={errors.name} title='Ваше имя'>
                                    <TextField
                                        setValue={setValue}
                                        name='name'
                                        error={errors.name}
                                        register={register('name', {
                                            required: 'Заполните это поле'
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>
                                <ConsultationFormMiniBlock title='Какой Вы оцениваете свой уровень английского?'>
                                    {
                                        textFields.levelLanguage.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('levelLanguage')}
                                            name='levelLanguage'
                                            id={`levelLanguage${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>


                                <ConsultationFormMiniBlock error={errors.speciality} title='Какая у вас специальность/факультет обучения?'>
                                    <TextField
                                        name='speciality'
                                        error={errors.speciality}
                                        register={register('speciality', {
                                            required: 'Заполните это поле'
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock error={errors.age} title='Сколько Вам лет?'>
                                    <TextField
                                        name='age'
                                        error={errors.age}
                                        register={register('age', {
                                            required: 'Заполните это поле'
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>


                                <ConsultationFormMiniBlock error={errors.whenTakeTest} title='Когда вы планируете сдавать IELTS?'>
                                    {
                                        textFields.whenTakeTest.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('whenTakeTest')}
                                            name='whenTakeTest'
                                            id={`whenTakeTest${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock title='С какой целью Вы сдаёте IELTS?'>
                                    {
                                        textFields.destanation.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('destanation')}
                                            name='destanation'
                                            id={`destanation${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock title='Какой бал IELTS Вам нужен ?'>
                                    {
                                        textFields.whatMark.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('whatMark')}
                                            name='whatMark'
                                            id={`whatMark${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock title='Знакомы ли вы со структурой теста?'>
                                    {
                                        textFields.doYouKnow.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('doYouKnow')}
                                            name='doYouKnow'
                                            id={`doYouKnow${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock title='Занимались ли вы уже подготовкой к тесту?'>
                                    {
                                        textFields.doYouTrain.map((el, i) => <RadioField
                                            key={i}
                                            isChecked={i == 0}
                                            value={el}
                                            register={register('doYouTrain')}
                                            name='doYouTrain'
                                            id={`doYouTrain${i}`}
                                            text={el}
                                        />)
                                    }
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock error={errors.inWhatCountry} title='В какую страну вы планируете поступать/переезжать?'>
                                    <TextField
                                        name='inWhatCountry'
                                        error={errors.inWhatCountry}
                                        register={register('inWhatCountry', {
                                            required: 'Заполните это поле'
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock title='Ваши вопросы (если есть)'>
                                    <TextField
                                        name='questions'
                                        register={register('questions', {
                                            required: false
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>

                                <ConsultationFormMiniBlock error={errors.phone} title='Ваш номер телефона'>
                                    <TextField
                                        name='phone'
                                        error={errors.phone}
                                        register={register('phone', {
                                            required: 'Заполните это поле',
                                            maxLength: {
                                                value: 13,
                                                message: 'Максимальна длина 13 символов'
                                            },
                                            pattern: {
                                                value: /^[0-9+-]+$/,
                                                message: "Введите корректный номер телефона"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Минимальная длина 6 символов"
                                            }
                                        })}
                                        placeholder='Your answer'
                                        width={"50%"}
                                    />
                                </ConsultationFormMiniBlock>
                            </ConsultationMainBlock>

                            <ConsultationMainBlock activeStep={formStep} index={1} ref={stepRef}>
                                <ConsultationFormMiniBlock title='Выберите удобный день для консультации'>
                                    {/* <SelectField register={register('day')} name='day'>
                                        <option value="Понедельник">Понедельник</option>
                                        <option value="Вторник">Вторник</option>
                                        <option value="Среда">Среда</option>
                                        <option value="Четверг">Четверг</option>
                                        <option value="Пятница">Пятница</option>
                                        <option value="Суббота">Суббота</option>
                                    </SelectField> */}
                                    <Controller
                                        // @ts-ignore
                                        defaultValue={date}
                                        name='day'
                                        control={control}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            fullDays && <DatePicker
                                                renderInput={(props) => <TextFieldMaterial {...props} />}
                                                // onChange={(newValue) => {
                                                //     alert(newValue)
                                                //     setDate(newValue)
                                                // }}
                                                onChange={onChange}
                                                shouldDisableDate={disableWeekends(fullDays)}
                                                maxDate={parseISO("03/29/2022")}
                                                minDate={parseISO("03/01/2022")}
                                                inputFormat="dd/MM/yyyy"
                                                // mask={"____/__/____"}   
                                                value={value}
                                            />
                                        )}
                                    />

                                </ConsultationFormMiniBlock>
                            </ConsultationMainBlock>

                            <ConsultationMainBlock activeStep={formStep} index={2} ref={stepRef}>
                                <ConsultationFormMiniBlock title='Выберите удобное время для консультации'>
                                    <SelectField register={register('time')} name='time'>
                                        {
                                            // @ts-ignore
                                            freeTimes && freeTimes.map((time, i) => <option key={i} value={`${time.time}`}>{time.time}</option>)
                                        }
                                        {/* <option value="9.00">9.00</option>
                                        <option value="12.00">12.00</option>
                                        <option value="18.00">18.00</option> */}
                                    </SelectField>
                                </ConsultationFormMiniBlock>
                            </ConsultationMainBlock>

                            <ConsultationSubmitForm
                                activeStep={formStep}
                                setActiveStep={setFormStep}
                            />
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
