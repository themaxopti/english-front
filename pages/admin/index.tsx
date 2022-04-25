import axios from 'axios'
import classNames from 'classnames'
import { GetServerSideProps } from 'next'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Api, Video } from '../../api/api'
import { A } from '../../components/Link'
import { Wrapper } from '../../layouts/Wrapper'
import { addVideo } from '../../store/reducers/admin.reducer'
import { AppState, useAppDispatch } from '../../store/store'
import s from '../../styles/Admin/Admin.module.scss'


const User = ({ email, phone, course }: Video) => {
    return (
        <>
            <div className="user-video-card">
                <div className="user-video-card__email">
                    {email}
                </div>
                <div className="user-video-card__phone">
                    {phone}
                </div>
                <div className="user-video-card__course">
                    {course}
                </div>
            </div>
        </>
    )
}


interface Props {
    isAdmin: boolean,
    users: Video[]
}

export interface ResponseType {
    message: number
    data: Video[]
}

export const navbarItems = [
    { title: 'Пользователи,получившие видео', link: "" },
    { title: 'Ielts «Стандарт»', link: "" },
    { title: 'ielts «Углубленная подготовка»', link: "" },
    { title: 'Общий английский «Стандарт»', link: "" },
    { title: 'Общий английский Углубленная подготовка', link: "" },
]

interface NavbarItemProps {
    title: string
    link: string
    index: number | string,
    active: any
    setActive: any
}

export const NavbarItem = ({ title, link, index, active, setActive }: NavbarItemProps) => {

    const router = useRouter()


    function click() {
        router.push({ query: { active: index } })
        setActive(index)
    }

    // const isActive = router.query.active == index || active == index ? true : false

    return (
        // @ts-ignore
        <div onClick={() => click()}
            style={{ cursor: "pointer" }} className={`admin__navbar-item ${index == active ? 'admin__navbar-item_active' : ''}`}>
            {title}
        </div>
    )
}

const Admin = ({ isAdmin, users }: Props) => {
    const router = useRouter()


    const [active, setActive] = useState(router.query.active || 0)

    const dispatch = useAppDispatch()
    const videos = useSelector((state: AppState) => state.admin.videos)

    useEffect(() => {
        dispatch(addVideo(users))
    }, [])



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
                            <div className="users-videos">
                                <div className="users-videos__titles">
                                    <div className="users-videos__titles-email">email</div>
                                    <div className="users-videos__titles-phone">phone</div>
                                    <div className="users-videos__titles-phone">course</div>
                                </div>
                                {
                                    videos?.map((video, i) => <User
                                        key={i}
                                        phone={video.phone}
                                        course={video.course}
                                        email={video.email}
                                    />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await Api.auth(context)

    if (!data.isAdmin) {
        context.res.setHeader("location", "/admin/login")
        context.res.statusCode = 302
        context.res.end()
    }

    const response = await Api.getAllCourses(context)

    return {
        props: {
            isAdmin: data.isAdmin,
            users: response?.data.data
        }
    }
}

export default Admin