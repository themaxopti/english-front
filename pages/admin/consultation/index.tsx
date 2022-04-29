import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { NavbarItem, navbarItems } from '..'
import { Wrapper } from '../../../layouts/Wrapper'
import { User } from '../course/[id]'
import s from '../../../styles/Admin/Admin-course.module.scss'
import { Api, User as UserType } from '../../../api/api'
import { GetServerSideProps } from 'next'


interface Props {
    users: UserType[]
}

const Index = ({ users }: Props) => {
    const router = useRouter()
    const [active, setActive] = useState(router.query.active || 0)
    console.log(users);
    

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
                                    <div>Месенджер</div>
                                </div>
                                <div className={s['admin-course__users']}>
                                    {
                                        users.map((el, i) => <User
                                            isUser={false}
                                            key={i}
                                            name={el.name}
                                            phone={el.phone}
                                            email={el.email}
                                            // @ts-ignore
                                            moduleAmount={el.messanger}
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

    // const data = await Api.getCourse(context)
    const data = await Api.auth(context)


    if (!data.isAdmin) {
        context.res.setHeader("location", "/admin/login")
        context.res.statusCode = 302
        context.res.end()
    }

    // @ts-ignore
    const response = await Api.getPeopleOfConsultation()

    return {
        props: {
            isAdmin: data.isAdmin,
            // @ts-ignore
            users: response?.data.data
        }
    }
}




export default Index
