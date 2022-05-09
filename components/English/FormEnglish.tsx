import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Api } from '../../api/api'
import s from '../../styles/English/FormEnglish.module.scss'
import { Video } from '../Ielts/Form'
import { ModalWindow } from '../ModalWindow'


type Inputs = {
    email: string,
    name: string,
}


export const FormEnglish = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, errors)
        // setIsOpen(true)
        await Api.getCourse('general-english', data.email, data.name)
        form2.current.style.display = 'none'
        video2.current.style.display = 'flex'
        localStorage.setItem("englishVideo", 'true')
    }

    const form2 = useRef() as MutableRefObject<HTMLFormElement>
    const video2 = useRef() as MutableRefObject<HTMLDivElement>

    const [isGettingVideo, setIsGettingVideo] = useState(false)


    useEffect(() => {
        // @ts-ignore
        setIsGettingVideo(JSON.parse(localStorage.getItem('englishVideo')) || false)
        if (localStorage.getItem('englishVideo')) {
            form2.current.style.display = 'none'
            video2.current.style.display = 'flex'
        } else {
            video2.current.style.display = 'none'
            form2.current.style.display = 'flex'
        }
        console.log(video2.current)
    }, [])

    useEffect(() => {
        console.log(isGettingVideo)
    }, [isGettingVideo])


    return (
        <>
            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='thanks'>Спасибо,ссылка на урок пришла вам на почту</div>
            </ModalWindow>

            <div
                id='englishForm'
                style={{ width: '100%', height: '90px', position: 'absolute', visibility: 'hidden' }}
            >

            </div>

            <div className='section form-sect'>
                <div className="section__content section__content_p">
                    <div
                        // @ts-ignore
                        ref={form2}
                        className='form-contact__wrap'
                    >
                        <form
                            ref={form2}
                            onSubmit={handleSubmit(onSubmit)}
                            className='form-contact' action=""
                        >
                            <span style={{ fontWeight: '600' }}>ПОЛУЧИТЬ ДОСТУП К БЕСПЛАТНОМУ УРОКУ</span>
                            <div className='form-contact__email form-contact__inp'>
                                <div>email</div>
                                <input {...register("email", {
                                    required: 'Заполните все поля',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
                    <Video course='mainEnglish' ref={video2} title={`Бесплатный урок "Быстрая адаптация за границей"`} />
                </div>
            </div>
        </>
    )
}
