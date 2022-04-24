import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from '../../styles/Consultation/Consultation.module.scss'

interface Inputs {
    email: string
    name: string
    phone: string
    messanger: any
}

export const Consultation = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, errors)
        // await Api.getCourse('ielts', data.email, data.name)
    }

    return (
        <div className='section'>
            <div className={s['rect']}>
                <img src="/images/how-ielts-rect.svg" alt="" />
            </div>

            <div className="section__content section__content_p">
                <div className={s["consultation"]}>
                    <h1>Записаться на бесплатную 15-минутную консультацию</h1>
                    <div className={s["consultation__text"]}>
                        Вы не уверены подходит ли мой курс для ваших целей и
                        уровня английского? <br /> Запишитесь на бесплатную 15-минутную консультацию,
                        я проверю ваш уровень и отвечу на все вопросы:
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <label htmlFor="">
                            <p>Имя</p>
                            <p className={s["error"]}>{errors.name?.message}</p>
                            <input
                                {...register("name", {
                                    minLength: {
                                        value: 1,
                                        message: 'Введите имя'
                                    },
                                    required: 'Заполните это поле'
                                })}
                                type="text"
                            />
                        </label>
                        <label htmlFor="">
                            <p>Емейл</p>
                            <p className={s["error"]}>{errors.email?.message}</p>
                            <input
                                {...register("email", {
                                    required: 'Заполните все поля',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Введите корректный емейл'
                                    }
                                })}
                                type="text"
                            />
                        </label>
                        <label htmlFor="">

                            <p>Номер, по которому с вами можно связаться</p>
                            <p className={s["error"]}>{errors.phone?.message}</p>
                            <input
                                {...register("phone", {
                                    required: 'Заполните все поля'
                                })}
                                type="text"
                            />
                        </label>
                        <label className={s['select__with']}>
                            Какой месенджер лучше использовать для связи с вами
                            <select
                                {...register("messanger")}
                                className={s["select"]} name="messanger"
                            >
                                <option value="telegram">Телеграм</option>
                                <option value="whatsApp">WhatsApp</option>
                                <option value="viber">Viber</option>
                            </select>
                        </label>
                        <input type="submit" value={"Записаться"} />
                    </form>
                </div>
            </div>
        </div>
    )
}
