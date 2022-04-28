import axios from 'axios';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Api } from '../../api/api';
import { ModalWindow } from '../ModalWindow';

type Inputs = {
    email: string,
    name: string,
}


export const Form = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, errors)
        setIsOpen(true)
        await Api.getCourse('ielts', data.email, data.name)
    }

    const testSend = async () => {
        try {
            const response = await axios.get('http://31.131.24.36:5000/api/getVideos')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='thanks'>Спасибо,ссылка на урок пришла вам на почту</div>
            </ModalWindow>

            <div className='section'>
                <div className="section__content section__content_p">
                    <div className='form-contact__wrap'>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-contact' action="">
                            <span style={{ fontWeight: '600' }}>ПОЛУЧИТЬ ДОСТУП К БЕСПЛАТНОМУ УРОКУ</span>
                            <div className='form-contact__email form-contact__inp'>
                                <div onClick={testSend}>email</div>
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
