import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { NavbarItem, navbarItems } from '..'
import { Api, User } from '../../../api/api'
import { Wrapper } from '../../../layouts/Wrapper'

interface Props {
    users: User[]
}

const Course = ({ users }: Props) => {
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
                                    index={i}
                                    key={i}
                                    link={el!.link}
                                    title={el.title}
                                    active={active}
                                    setActive={setActive}
                                />)
                            }
                        </div>
                        <div className="admin__content">
                            some
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
    const response = await Api.getPeopleOfCourse(context.query.id)


    return {
        props: {
            isAdmin: data.isAdmin,
            users: response?.data
        }
    }
}



export default Course
