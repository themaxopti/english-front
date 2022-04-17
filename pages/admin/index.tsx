import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Api, Video } from '../../api/api'
import { Wrapper } from '../../layouts/Wrapper'
import { addVideo } from '../../store/reducers/admin.reducer'
import { AppState, useAppDispatch } from '../../store/store'


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

const Admin = ({ isAdmin, users }: Props) => {

    const dispatch = useAppDispatch()
    console.log(users)
    const videos = useSelector((state: AppState) => state.admin.videos)

    useEffect(() => {
        dispatch(addVideo(users))
    }, [])

    return (
        <Wrapper>
            <div className="section">
                <div className="section__content" style={{ minHeight: '800px' }}>
                    <div className="admin">
                        <div className="admin__navbar">
                            <div onClick={async () => await Api.logout()} className="admin__navbar-item">
                                Пользователи,получившие видео
                            </div>
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