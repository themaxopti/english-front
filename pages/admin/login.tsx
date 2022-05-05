import React, { useEffect } from 'react'
import { Wrapper } from '../../layouts/Wrapper'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { AppState, useAppDispatch } from '../../store/store';
import { setErrorMessage, setStatusLogin } from '../../store/reducers/admin.reducer';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Api } from '../../api/api';
import { motion } from 'framer-motion'


type Inputs = {
    email: string,
    password: string,
}


const Login = () => {


    const dispatch = useAppDispatch()
    const errorMessage = useSelector((state: AppState) => state.admin.errorMessage)
    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await Api.login(data.email, data.password)

            if (!response.data.isAdmin) {
                dispatch(setErrorMessage('Неверные данные'))
            } else if (response.data.isAdmin) {
                dispatch(setStatusLogin(true))
                router.push('/admin')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Wrapper>
            <div className="section">
                <div className="section__content section__content_p" style={{ minHeight: '600px' }}>
                    <div className="login-admin">
                        <form onSubmit={handleSubmit(onSubmit)} className='login-admin__form' action="">
                            <div>Вход</div>
                            <input {...register('email', { required: 'Заполните все поля' })} placeholder='Логин' className='login-admin__email' type="text" />
                            <input {...register('password', { required: 'Заполните все поля' })} placeholder='Пароль'  className='login-admin__password' type="password" />
                            <motion.input
                                className='login-admin__submit'
                                type="submit" value={"Войти"}
                                whileHover={{
                                    scale: 1.1,
                                    // transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            />
                            {errors.email?.message || errors.password?.message}
                            {errorMessage ? errorMessage : ''}
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}



export default Login