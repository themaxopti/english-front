import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { NavbarItem, navbarItems } from '..'
import { Wrapper } from '../../../layouts/Wrapper'
import { User } from '../course/[id]'
import s from '../../../styles/Admin/Admin-course.module.scss'
import { Api, Consultation, User as UserType } from '../../../api/api'
import { GetServerSideProps } from 'next'

const questions = {
    name: "Имя",
    phone: "Телефон",
    levelLanguage: "Уровень английского",
    speciality: "Специальность/факультет обучения",
    age: "Сколько лет",
    whenTakeTest: "Когда вы планируете сдавать IELTS",
    destanation: "С какой целью Вы сдаёте IELTS",
    whatMark: "Какой бал нужен",
    doYouKnow: "Знакомы ли вы со структурой теста",
    doYouTrain: "Занимались ли вы уже подготовкой к тесту",
    inWhatCountry: "В какую страну вы планируете поступать/переезжать",
    day: "День для консультации",
    time: "Время",
}

function getNormalDate() {

}


interface Props {
    users: UserType[]
}

const Index = ({ users }: Props) => {
    const router = useRouter()
    const [active, setActive] = useState(router.query.active || 0)
    const [courses, setCourses] = useState<Consultation[] | []>([])


    async function effect() {
        const response = await Api.authAxios()
        if (!response.data.isAdmin) {
            return router.push('/admin/login')
        }

        // @ts-ignore
        const response1 = await Api.getPeopleOfConsultation()
        // @ts-ignore
        const resWithoutId = response1?.data.data.map(el => {
            // @ts-ignore
            delete el._id
            delete el.__v
            return el
        })
        // @ts-ignore
        setCourses(resWithoutId)
        // @ts-ignore
    }


    useEffect(() => {
        effect()
    }, [])


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


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
                                {
                                    courses.map((course, i) => <div key={i} className={s['admin-course__card']}>
                                        <div className={s["admin-course__content"]}>
                                            {
                                                Object.entries(course).map((cu, index) => <div key={index} className={s["admin-course__question"]}>
                                                    <div className={s['admin-course__content-title']}> {
                                                        //  Object.keys(courses).indexOf()
                                                        // @ts-ignore
                                                        questions[cu[0]]
                                                    } </div>
                                                    <div className={s['admin-course__content-ask']}> {
                                                        cu[0] == 'day'
                                                            // @ts-ignore
                                                            ? new Date(cu[1]).toLocaleDateString("rus-RU", options)
                                                            : cu[1]}
                                                    </div>
                                                </div>)

                                            }
                                            {/* <div className={s["admin-course__question"]}>
                                                <div className={s['admin-course__content-title']}> Сколько лет? </div>
                                                <div className={s['admin-course__content-ask']}> {course.age} </div>
                                            </div>
                                            <div className={s["admin-course__question"]}>
                                                <div className={s['admin-course__content-title']}> День </div>
                                                <div className={s['admin-course__content-ask']}> {course.day}</div>
                                            </div>
                                            <div className={s["admin-course__question"]}>
                                                <div className={s['admin-course__content-title']}> Зачем вы сдаете ielts </div>
                                                <div className={s['admin-course__content-ask']}>{course.destanation}</div>
                                            </div> */}
                                        </div>
                                    </div>)
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
