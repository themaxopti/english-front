import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { NavbarItem, navbarItems } from '..'
import { api, Api, User as UserType } from '../../../api/api'
import { Wrapper } from '../../../layouts/Wrapper'
import s from '../../../styles/Admin/Admin-course.module.scss'


interface Props {
    users: UserType[]
}


interface UserProps {
    name: string
    phone: string
    email: string
    moduleAmount: number,
    isUser?: boolean
}


export const User = ({ name, phone, email, moduleAmount, isUser = true }: UserProps) => {
    return (
        <>
            <div className={s["user"]}>
                <div>{name}</div>
                <div>{phone}</div>
                <div>{email}</div>
                <div>{moduleAmount}</div>
            </div>


            <div className={s["user__mobile"]}>
                <div className={s['user__mobile__card']}>
                    <div className={s["user__mobile__card__name"]}>Имя:</div>
                    <div>{name}</div>
                </div>
                <div className={s['user__mobile__card']}>
                    <div>Телефон:</div>
                    <div>{phone}</div>
                </div>
                <div className={s['user__mobile__card']}>
                    <div>Емейл:</div>
                    <div>{email}</div>
                </div>
                <div className={s['user__mobile__card']}>
                    <div>{isUser ? "Количество модулей:" : "Мессенжер"}</div>
                    <div>{moduleAmount}</div>
                </div>
            </div>
        </>
    )
}


const Course = ({ users }: Props) => {
    const router = useRouter()
    const [active, setActive] = useState(router.query.active || 0)


    return (
        <Wrapper>
            <div className="section">
                <div className="section__content section__content_p" style={{ minHeight: '800px' }}>
                    <div className="admin">
                        <div className="admin__navbar">
                            {
                                navbarItems.map((el, i) => <NavbarItem
                                    link={el.link}
                                    index={i}
                                    key={i}
                                    title={el.title}
                                    active={active}
                                    setActive={setActive}
                                />)
                            }
                        </div>
                        <div className={s['admin-course']}>
                            <div className={s['admin-course']}>
                                <div className={s['admin-course__title']}>
                                    <div>Имя</div>
                                    <div>Телефон</div>
                                    <div>Емейл</div>
                                    <div>Количество модулей</div>
                                </div>
                                <div className={s['admin-course__users']}>
                                    {
                                        users.map((el, i) => <User
                                            key={i}
                                            name={el.name}
                                            phone={el.phone}
                                            email={el.email}
                                            moduleAmount={el.moduleAmount}
                                        />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        // const data = await Api.auth(context)

        const data2 = await api.get('/authAdmin', {
            headers: {
                Cookie: context.req.headers.cookie!
            }
        })

        console.log(data2);


        // @ts-ignore
        if (!data2.data.isAdmin) {
            context.res.setHeader("location", "/admin/login")
            context.res.statusCode = 302
            context.res.end()
        }

        // @ts-ignore
        const response = await Api.getPeopleOfCourse(context.query.id)

        return {
            props: {
                users: response?.data
            }
        }
    } catch (e) {
        console.log(e);
        return {
            redirect: {
                destination: '/admin/login',
                statusCode: 307
            }
        }
    }


}


export default Course