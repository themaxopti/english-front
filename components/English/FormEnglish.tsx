import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from '../../styles/English/FormEnglish.module.scss'
import { ModalWindow } from '../ModalWindow'


type Inputs = {
    email: string,
    name: string,
}


export const FormEnglish = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data, errors)
        setIsOpen(true)
    }

    return (

        <>
            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='thanks'>Спасибо,ссылка на урок пришла вам на почту</div>
            </ModalWindow>

            <div className='section'>
                <div className="section__content section__content_p">
                    <div className='form-contact__wrap' style={{ padding: '200px 0 100px 0' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-contact' action="">
                            <span style={{ fontWeight: '600' }}>ПОЛУЧИТЬ ДОСТУП К БЕСПЛАТНОМУ УРОКУ</span>
                            <div className='form-contact__email form-contact__inp'>
                                <div>email</div>
                                <input {...register("email", {
                                    required: 'Заполните все поля',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Введите корректный емейл'
                                    }
                                })} type="text" placeholder='email' />
                            </div>

                            <div className='form-contact__name form-contact__inp'>
                                <div>name</div>
                                <input  {...register("name", {
                                    minLength: {
                                        value: 1,
                                        message: 'Введите имя'
                                    }
                                })} type="text" placeholder='name' />
                            </div>

                            {errors.email?.message}

                            <div className='submit form-contact__inp'>
                                <input type="submit" value={"Отправить"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>


    )
}
