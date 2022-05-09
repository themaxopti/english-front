import axios from 'axios';
import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Api } from '../../api/api';
import { ModalWindow } from '../ModalWindow';

type Inputs = {
    email: string,
    name: string,
}

interface VideoProps {
    title: string
    course: 'ielts' | 'mainEnglish'
}

export const Video = React.forwardRef<HTMLDivElement, VideoProps>(({ course }, ref) => {

    let link
    if (course == 'ielts') {
        link = "https://dl.dropboxusercontent.com/s/6hsf8tshss4fnn4/%D0%A3%D1%81%D0%BF%D0%B5%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D0%B8_%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B8_%D0%BA_IELTSTOEFL.mp4?dl=0"
    }
    if (course == 'mainEnglish') {
        link = "https://dl.dropboxusercontent.com/s/6cmwu9c7w13m9sq/%D1%8D%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81-%D0%BA%D1%83%D1%80%D1%81.mp4?dl=0"
    }

    return (
        <>
            <div className='video' ref={ref}>
                <div>Бесплатный урок "Подготовка к ielts" </div>
                <video width="100%" height="100%" controls>
                    <source src={link} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
})

Video.displayName = 'Video'

export const Form = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, errors)
        // setIsOpen(true)
        await Api.getCourse('ielts', data.email, data.name)
        form.current.style.display = 'none'
        video.current.style.display = 'flex'
        localStorage.setItem("ieltsVideo", 'true')
    }

    const form = useRef() as MutableRefObject<HTMLFormElement>
    const video = useRef() as MutableRefObject<HTMLDivElement>

    const [isGettingVideo, setIsGettingVideo] = useState(false)

    useEffect(() => {
        setIsGettingVideo(JSON.parse(localStorage.getItem('ieltsVideo')) || false)
        if (localStorage.getItem('ieltsVideo')) {
            form.current.style.display = 'none'
            video.current.style.display = 'flex'
        } else {
            video.current.style.display = 'none'
            form.current.style.display = 'flex'
        }
        console.log(video.current);
    }, [])

    useEffect(() => {
        console.log(isGettingVideo);
    }, [isGettingVideo])

    return (
        <>
            <ModalWindow isOpen={isOpen} setIsopen={setIsOpen}>
                <div className='thanks'>Спасибо,ссылка на урок пришла вам на почту</div>
            </ModalWindow>

            <div
                className='section'
                style={{ display: 'flex', flexDirection: 'column', background: "#D6DEFD" }}
            >
                <div className="section__content section__content_p" style={{ padding: '200px 1rem 200px 1rem' }}>
                    <div className='form-contact__wrap'>
                        <form ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                            className='form-contact' action=""
                        >
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
                    <Video course='ielts' ref={video} title={`Бесплатный урок "Подготовка к ielts "`} />
                </div>
            </div>
        </>
    )
}